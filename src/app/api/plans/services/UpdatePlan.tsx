import prisma from "@/services/database";
import { DtoUpdatePlan } from "../Dtos/DtoUpdatePlan";

export async function UpdatePlan(id: string, data: DtoUpdatePlan) {
  const plan = await prisma.plan.update({
    where: { id },
    data,
  });
  return plan;
}
