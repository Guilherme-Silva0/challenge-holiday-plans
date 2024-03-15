import { getPlanById } from "./getPlanById";
import { getAllPlans } from "./getAllPlans";
import { deletePlan } from "./deletePlan";
import { updatePlan } from "./updatePlan";
import { createPlan } from "./createPlan";

export const useApi = () => ({
  getAllPlans,
  getPlanById,
  deletePlan,
  updatePlan,
  createPlan,
});
