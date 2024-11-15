"use server";

import db from "@/lib/db";
import { z } from "zod";
import { redirect } from "next/navigation";
import validator from "validator";
import getSession from "@/lib/session";

const formSchema = z.object({
  programId: z.coerce.number(),
  name: z
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
  sex: z.string(),
  option: z.string(),
  date: z.string().nullable(),
  dateTime: z.string().nullable(),
  subject: z.string({
    invalid_type_error: "문자가 아니에요",
    required_error: "상담 주제 입력은 필수에요",
  }),
  consent: z.literal("on"),
});

export const createApply = async (prevState: any, formData: FormData) => {
  const session = await getSession();
  const data = {
    programId: formData.get("program"),
    name: formData.get("name"),
    phone: formData.get("phone"),
    sex: formData.get("sex"),
    option: formData.get("option"),
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
    // await db.apply.create({
    //   data: {
    //     userId: session.id!,
    //     programId: result.data.programId,
    //     name: result.data.name,
    //     phone: result.data.phone,
    //     sex: result.data.sex,
    //     option: result.data.option,
    //     date: result.data.date,
    //     dateTime: result.data.dateTime,
    //     subject: result.data.subject,
    //     consent: result.data.consent,
    //   },
    // });
    redirect(`/program/${result.data.programId}/payments`);
  }
};

export async function getReservation(date: string) {
  const reserve = await db.apply.findMany({
    where: {
      date,
    },
    select: {
      date: true,
      dateTime: true,
    },
  });
  return reserve;
}
