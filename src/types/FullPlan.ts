import { Plan, User } from "@prisma/client";

export interface FullPlan extends Plan {
  user: User;
}
