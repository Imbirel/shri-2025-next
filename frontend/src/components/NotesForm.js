"use client";

import { createNote } from "@/app/actions/createNote";
import { useState } from "react";
import React from "react";

export const NotesForm = function NotesForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  return (
    <form action={createNote}>
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
      <button type="submit">Добавить заметку</button>
    </form>
  );
};
