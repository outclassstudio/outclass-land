"use server";

import db from "@/lib/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import validator from "validator";

const formSchema = z.object({
  username: z
    .string({
      invalid_type_error: "문자가 아니에요",
      required_error: "이름입력은 필수에요",
    })
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .trim()
    .refine(
      (phone) => validator.isMobilePhone(phone, "ko-KR"),
      "전화번호 형식을 확인해주세요"
    ),
  program: z.string(),
  birth: z.string().date(),
  birthTime: z.string(),
  date: z.string(),
  dateTime: z.string(),
  subject: z.string({
    invalid_type_error: "문자가 아니에요",
    required_error: "상담 주제 입력은 필수에요",
  }),
  consent: z.literal("on"),
});

export const createApply = async (prevState: any, formData: FormData) => {
  //formData는 input의 name을 참조함
  const data = {
    username: formData.get("username"),
    phone: formData.get("phone"),
    program: formData.get("program"),
    birth: formData.get("birth"),
    birthTime: formData.get("birthTime"),
    date: formData.get("date"),
    dateTime: formData.get("dateTime"),
    subject: formData.get("subject"),
    consent: formData.get("consent"),
  };

  const result = await formSchema.spa(data);
  if (!result.success) {
    console.log("check error", result.error);
    return result.error.flatten();
  } else {
    console.log("check formdata", result);
    redirect("/apply");
  }
};

export async function getReservation(date: string) {
  const reserve = await db.counsel.findMany({
    where: {
      date,
    },
    select: {
      date: true,
      time: true,
    },
  });
  return reserve;
}
