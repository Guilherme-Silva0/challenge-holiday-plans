import { auth } from "@/services/auth";
import { NextRequest, NextResponse } from "next/server";
import { getPlanById } from "../services/getPlanById";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
) {
  return auth(async (req) => {
    const user = req.auth?.user;

    if (!user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const plan = await getPlanById(context.params.id);

    if (!plan) {
      return NextResponse.json({ message: "Plan not found" }, { status: 404 });
    }

    return NextResponse.json({ ...plan }, { status: 200 });
  })(request, context) as any;
}
