import { DeleteNoteButton } from "./DeleteNoteButton";

export const Note = function (props) {
  const { title, content, id } = props;

  return (
    <>
      <div>
        <div>
          <span>{title}</span>
          <DeleteNoteButton id={id} />
        </div>
        <p>{content}</p>
      </div>
    </>
  );
};
