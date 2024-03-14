import { auth } from "@/services/auth";
import prisma from "@/services/database";
import { NextResponse } from "next/server";

export const GET = auth(async (req) => {
  const user = req.auth?.user;

  if (!user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const posts = await prisma.plan.findMany({
      where: {
        user: {
          id: user.id,
        },
      },
      include: {
        user: true,
      },
    });
    return NextResponse.json({ posts }, { status: 200 });
  } catch (_err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
});
