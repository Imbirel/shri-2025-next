import Link from "next/link";
import { DeleteNoteButton } from "./DeleteNoteButton";

export const Note = function (props) {
  const { title, content, id } = props;

  return (
    <>
      <div>
        <div>
          <Link href={`/note/${id}`}>{title}</Link>
          <DeleteNoteButton id={id} />
        </div>
        <p>{content}</p>
      </div>
    </>
  );
};
