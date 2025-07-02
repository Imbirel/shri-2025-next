"use client";

import { useState } from "react";
import React from "react";

export const NotesForm = function NotesForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onAddNote({
      id: Math.random().toString(),
      title,
      content,
      tags: tags ? tags.split(",") : [],
    });

    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
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
        placeholder="Содержание заметки"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Теги (через запятую)"
        value={tags}
        onChange={(event) => {
          setTags(event.target.value);
        }}
      />
      <button type="submit">Добавить заметку</button>
    </form>
  );
};
