export async function getNotes() {
  return (
    await fetch("http://localhost:3001/notes", {
      cache: "force-cache",
      next: {
        tags: ["note"],
      },
    })
  ).json();
}

export async function getTopNotes() {
  const notes = await (await fetch("http://localhost:3001/notes")).json();

  return [notes[0], notes[3], notes[6]];
}

export async function getNote(id) {
  return (await fetch(`http://localhost:3001/notes/${id}`)).json();
}
