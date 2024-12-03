import db from "@/lib/db";
import { z } from "zod";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";

const passwordRegex = new RegExp(PASSWORD_REGEX);

const checkUsername = (username: string) => {};

const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

export const createAccountSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자가 아니에요",
        required_error: "이름입력은 필수에요",
      })
      .min(3, "닉네임은 3글자 이상이어야 해요")
      .max(10, "닉네임은 10글자 이하여야 해요")
      .trim()
      .toLowerCase()
      .refine(checkUsername, "potato는 안돼요"),
    email: z.string().email().trim(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(passwordRegex, PASSWORD_REGEX_ERROR),
    confirm_password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      .regex(passwordRegex, PASSWORD_REGEX_ERROR),
  })
  .superRefine(async ({ username }, ctx) => {
    const user = await db.user.findUnique({
      where: { username },
      select: { id: true },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "이미 존재하는 이름이에요",
        path: ["username"],
        fatal: true,
      });
    }
    return z.NEVER;
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: { email },
      select: { id: true },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "이미 존재하는 메일이에요",
        path: ["email"],
        fatal: true,
      });
    }
    return z.NEVER;
  })
  .refine(checkPassword, {
    message: "비밀번호가 일치하지 않아요",
    path: ["confirm_password"],
  });
