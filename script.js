let programs = JSON.parse(localStorage.getItem("programs")) || [];

function saveProgram() {
  const title = document.getElementById("title").value.trim();
  const duration = document.getElementById("duration").value.trim();
  const description = document.getElementById("description").value.trim();

  if (title === "" || duration === "" || description === "") {
    alert("Please enter all program details before saving.");
    return; // stop saving
  }

  programs.push({
    id: Date.now(),
    title,
    duration,
    description
  });

  localStorage.setItem("programs", JSON.stringify(programs));
  displayPrograms();
  clearForm();
}


function displayPrograms() {
  const list = document.getElementById("programList");
  list.innerHTML = "";

  programs.forEach(p => {
    list.innerHTML += `
      <li>
        <b>${p.title}</b> (${p.duration})<br>
        ${p.description}<br><br>
        <button onclick="editProgram(${p.id})">Edit</button>
        <button onclick="deleteProgram(${p.id})">Delete</button>
      </li>
    `;
  });
}

function editProgram(id) {
  const program = programs.find(p => p.id == id);
  document.getElementById("programId").value = program.id;
  document.getElementById("title").value = program.title;
  document.getElementById("duration").value = program.duration;
  document.getElementById("description").value = program.description;
}

function deleteProgram(id) {
  programs = programs.filter(p => p.id !== id);
  localStorage.setItem("programs", JSON.stringify(programs));
  displayPrograms();
}

function clearForm() {
  document.getElementById("programId").value = "";
  document.getElementById("title").value = "";
  document.getElementById("duration").value = "";
  document.getElementById("description").value = "";
}

/* AI SIMULATION */
function generateDescription() {
  const title = document.getElementById("title").value;
  document.getElementById("description").value =
    `The ${title} program by Iron Lady empowers women through structured learning, mentorship, and career guidance.`;
}

displayPrograms();
