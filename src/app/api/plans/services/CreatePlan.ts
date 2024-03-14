import prisma from "@/services/database";
import { DtoCreatePlan } from "../Dtos/DtoCreatePlan";

export async function createPlan(data: DtoCreatePlan) {
  const plan = await prisma.plan.create({
    data: {
      title: data.title,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      user: {
        connect: {
          id: data.userId,
        },
      },
    },
    include: {
      user: true,
    },
  });

  return plan;
}
