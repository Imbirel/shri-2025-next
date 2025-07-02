import { getNotes } from "@/api/note";
import { Note } from "@/components/Note";

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      {notes.map(({ id, ...note }) => (
        <Note key={id} id={id} {...note} />
      ))}
    </div>
  );
}
