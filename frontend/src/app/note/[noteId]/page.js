import { getNote } from "@/api/note";
import { Note } from "@/components/Note";

export default async function NotePage({ params }) {
  const note = await getNote(params.noteId);

  if(!note) {
    return <div>No Note</div>
  }

  return <Note {...note}/>;
}
