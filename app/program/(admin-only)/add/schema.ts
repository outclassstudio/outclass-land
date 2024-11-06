import { z } from "zod";

export const programSchema = z.object({
  title: z.string({
    required_error: "필수 항목이에요title",
  }),
  price: z.coerce.number({
    required_error: "필수 항목이에요price",
  }),
  description: z.string({
    required_error: "필수 항목이에요description",
  }),
  photo: z.string({
    required_error: "필수 항목이에요photo",
  }),
  isOpen: z.boolean({
    required_error: "필수 항목이에요isOpen",
  }),
});

export type ProgramType = z.infer<typeof programSchema>;
