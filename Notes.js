let notes = [];

function addNote(note) {
  if (note.trim() === "") {
    console.log("Not allowed");
    return;
  }
  notes.push(note);
  console.log("Note added.");
}

function printNotes() {
  if (notes.length === 0) {
    console.log("You don't have any notes.");
    return;
  }
  console.log("Your notes :");
  for (let i = 0; i < notes.length; i++) {
    console.log(`${i + 1}. ${notes[i]}`);
  }
}
function deleteNote(index) {
  if (index < 1 || index > notes.length) {
    console.log("The index is invalid.");
    return;
  }
  let removed = notes.splice(index - 1, 1);
  console.log(`"${removed[0]}"Delete `);
}
function deleteAllNotes() {
  notes = [];
  console.log("All notes deleted.");
}
addNote("Learn JavaScript.");
addNote("Don't forget to exercise daily.");
printNotes();
deleteNote(2);
printNotes();
deleteAllNotes();
printNotes();