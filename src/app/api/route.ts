import Collection from "@/lib/connect";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  try {
    const collection = await Collection("projects");
    if (collection) {
      const data = await collection.find({}).toArray();
      return NextResponse.json(
        { success: true, data, message: "list of projects" },
        { status: data.length > 0 ? 200 : 404 },
      );
    }
    return NextResponse.json(
      { success: false, message: "collection not find" },
      { status: 400 },
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
