import { auth } from "@/services/auth";
import { NextResponse } from "next/server";
import { getAllPlansByUserId } from "./services/getAllPlansByUserId";
import { createPlan } from "./services/CreatePlan";
import { DtoCreatePlan } from "./Dtos/DtoCreatePlan";
import { formPlanSchema } from "@/lib/formPlanSchema";
import { getPlanById } from "./services/getPlanById";
import { deletePlanById } from "./services/deletePlanById";

export const GET = auth(async (req) => {
  const user = req.auth?.user;

  if (!user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const plans = await getAllPlansByUserId(user.id);
    return NextResponse.json([...plans], { status: 200 });
  } catch (_err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
});

export const POST = auth(async (req) => {
  const user = req.auth?.user;

  if (!user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const data = await req.json();

  try {
    const parsedData = await formPlanSchema.safeParseAsync(data);

    if (!parsedData.success) {
      return NextResponse.json(
        {
          path: parsedData.error.issues[0].path[0],
          message: parsedData.error.issues[0].message,
        },
        { status: 422 },
      );
    }

    const plan = await createPlan(
      new DtoCreatePlan(
        data.title,
        data.description,
        data.startDate,
        data.endDate,
        user.id,
      ),
    );
    return NextResponse.json({ ...plan }, { status: 201 });
  } catch (_err) {
    console.log(_err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
});

export const DELETE = auth(async (req) => {
  const user = req.auth?.user;

  if (!user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const id = req.nextUrl.searchParams.get("id");

  const plan = await getPlanById(id);

  if (!plan) {
    return NextResponse.json({ message: "Plan not found" }, { status: 404 });
  }

  const deleted = await deletePlanById(plan.id);

  return NextResponse.json({ ...deleted }, { status: 200 });
});
