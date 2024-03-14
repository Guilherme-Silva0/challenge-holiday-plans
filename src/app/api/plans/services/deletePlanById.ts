import prisma from "@/services/database";

export async function deletePlanById(id: string) {
  const plan = prisma.plan.delete({
    where: { id },
  });
  return plan;
}
