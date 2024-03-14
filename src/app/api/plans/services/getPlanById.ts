import prisma from "@/services/database";

export async function getPlanById(id?: string | null) {
  if (!id) {
    return null;
  }

  const plan = await prisma.plan.findUnique({
    where: { id },
    include: { user: true },
  });

  return plan;
}
