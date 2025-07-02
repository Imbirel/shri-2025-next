import { Note } from "@/components/Note";

export default async function NotesPage() {
  const notes = await fetch("http://localhost:3001/notes");
  return (
    <div>
      <Note title="Title" content="content" />
    </div>
  );
}
