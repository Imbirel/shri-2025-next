import { revalidateTag } from "next/cache";

export async function GET() {
  revalidateTag("note");
  return Response.json("Success");
}
