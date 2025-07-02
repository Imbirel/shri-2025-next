"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNote(formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  fetch("http://localhost:3001/notes", {
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
  redirect("/notes");
}
