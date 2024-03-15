import { TypeFormPlan } from "@/lib/formPlanSchema";
import { api } from "@/services/api";
import { FullPlan } from "@/types/FullPlan";

export async function updatePlan(id: string, dataForm: TypeFormPlan) {
  try {
    const { data }: { data: FullPlan } = await api.put(
      "api/plans?id=" + id,
      dataForm,
    );
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data?.message as string };
  }
}
