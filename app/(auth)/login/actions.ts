"use server";

import db from "@/lib/db";
import bcrypt from "bcrypt";
import { Login } from "@/apis/login/actions";
import { redirect } from "next/navigation";
import { loginSchema } from "./schema";

export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await loginSchema.spa(data);

  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (user?.password) {
      const checkHash = await bcrypt.compare(
        result.data.password,
        user.password
      );

      if (checkHash) {
        await Login(user.id);
        redirect("/profile");
      } else {
        return {
          fieldErrors: {
            password: ["비밀번호가 일치하지 않아요"],
            email: [],
          },
        };
      }
    }
  }
};
