import { api } from "@/services/api";
import { FullPlan } from "@/types/FullPlan";
import { AxiosError } from "axios";

export async function getAllPlans() {
  try {
    const { data }: { data: FullPlan[] } = await api.get("api/plans");
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error?.response?.data?.message as string };
  }
}
