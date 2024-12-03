"use server";

import db from "@/lib/db";
import bcrypt from "bcrypt";
import { Login } from "@/apis/login/actions";
import { redirect } from "next/navigation";
import { createAccountSchema } from "./schema";

export const createAccount = async (prevState: any, formData: FormData) => {
  //formData는 input의 name을 참조함
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = await createAccountSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    await Login(user.id);
    redirect("/profile");
  }
};
