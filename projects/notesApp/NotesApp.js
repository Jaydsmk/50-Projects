const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

console.log(notes);

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
        <div class="tools">
            <button class="fix"><i class="fas fa-thumbtack"></i></button>
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
        `;

  const fixBtn = note.querySelector(".fix");
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    // console.log(value);
    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));
  // console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
}

// ******** localStorage using method *****************
// localStorage.setItem("name", "Brad");
// localStorage.setItem("name", "[id: 1]");
// localStorage.setItem("name", JSON.stringify());
// JSON.parse(localStorage.getItem("name"));
// localStorage.getItem("name");
// localStorage.removeItem("name");
