"use client";

export const DeleteNoteButton = ({ id }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        console.log(id);
      }}
      title="Удалить"
    >
      Удалить
    </button>
  );
};
