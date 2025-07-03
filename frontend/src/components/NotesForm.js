"use client";

import { createNote } from "@/app/actions/createNote";
import { useState, useTransition } from "react";
import React from "react";

export const NotesForm = function NotesForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return <div>waiting</div>;
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Заголовок заметки"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          if (error) {
            setError("");
          }
        }}
      />
      {Boolean(error) && <span>{error}</span>}
      <textarea
        name="content"
        placeholder="Содержание заметки"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button
        onClick={() =>
          startTransition(async () => {
            await createNote({ title, content });
          })
        }
      >
        Добавить заметку
      </button>
    </form>
  );
};
