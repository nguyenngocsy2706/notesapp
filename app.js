const noteInput = document.getElementById("note-text");
const addNoteBtn = document.getElementById("add-note");
const notesList = document.getElementById("notes-list");

function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  notesList.innerHTML = ""; // xóa cũ
  const notes = getNotes();

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;

    // Nút xóa
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
      deleteNote(index);
    });

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

  const notes = getNotes();
  notes.push(noteText);
  saveNotes(notes);
  renderNotes();

  noteInput.value = ""; // xóa input
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);
  saveNotes(notes);
  renderNotes();
}

addNoteBtn.addEventListener("click", addNote);

noteInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    addNote();
  }
});

renderNotes();

// Đăng ký service worker (chạy một lần khi load app)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => console.log("Service Worker registered"))
      .catch((err) => console.log("Service Worker failed:", err));
  });
}
