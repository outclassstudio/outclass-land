import db from "@/lib/db";
import { z } from "zod";
import {
	PASSWORD_MIN_LENGTH,
	// PASSWORD_REGEX,
	// PASSWORD_REGEX_ERROR,
} from "@/lib/constants";

// const passwordRegex = new RegExp(PASSWORD_REGEX);

const checkEmailExist = async (email: string) => {
	const user = await db.user.findUnique({
		where: {
			email,
		},
		select: {
			id: true,
		},
	});
	return Boolean(user);
};

export const loginSchema = z.object({
	email: z
		.string()
		.email()
		.trim()
		.toLowerCase()
		.refine(checkEmailExist, "존재하지 않는 이메일이에요"),
	password: z
		.string({
			required_error: "비밀번호를 입력하세요",
		})
		.min(PASSWORD_MIN_LENGTH),
	// .regex(passwordRegex, PASSWORD_REGEX_ERROR),
});
