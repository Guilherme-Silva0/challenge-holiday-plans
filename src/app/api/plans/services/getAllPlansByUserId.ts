import prisma from "@/services/database";

export async function getAllPlansByUserId(userId: string) {
  const plans = await prisma.plan.findMany({
    where: {
      user: {
        id: userId,
      },
    },
    include: {
      user: true,
    },
  });

  return plans;
}
