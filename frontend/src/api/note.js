export async function getNotes() {
  return (await fetch("http://localhost:3001/notes")).json();
}

export async function getNote(id) {
  return (await fetch(`http://localhost:3001/notes/${id}`)).json();
}
