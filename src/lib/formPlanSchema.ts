import { z } from "zod";
import { parseDate } from "./parseDate";

export const formPlanSchema = z
  .object({
    title: z.string().min(1, "Title is required"),

    description: z.string().min(3, "Description must be at least 3 characters"),

    startDate: z.string().refine(
      (date) => {
        return parseDate(date);
      },
      { message: "Invalid date format" },
    ),

    endDate: z.string().refine(
      (date) => {
        return parseDate(date);
      },
      { message: "Invalid date format" },
    ),
  })
  .refine(
    (context) => {
      const parsedDate = parseDate(context.endDate);
      const startDate = parseDate(context.startDate);
      if (!parsedDate || !startDate) return false;
      return parsedDate > startDate;
    },
    { path: ["endDate"], message: "End date must be after start date" },
  );

export type TypeFormPlan = z.infer<typeof formPlanSchema>;
