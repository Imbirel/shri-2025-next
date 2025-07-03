"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createNote({ title, content }) {
  await fetch("http://localhost:3001/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      title,
      content,
      tags: [],
    }),
  });

  revalidatePath("/notes");
  revalidateTag("note");
  redirect("/notes");
}
