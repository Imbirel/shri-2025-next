import { NotesForm } from "@/components/NotesForm";
import { redirect } from "next/navigation";

export default function NewNotePage() {
  redirect("/");
  return (
    <div>
      <NotesForm />
    </div>
  );
}
