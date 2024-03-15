import { api } from "@/services/api";
import { FullPlan } from "@/types/FullPlan";

export async function getPlanById(id: string) {
  try {
    const { data }: { data: FullPlan } = await api.get("api/plans/" + id);
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data?.message as string };
  }
}
