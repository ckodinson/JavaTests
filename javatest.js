let students = [];

function wertHinzufuegen(wert) {
  students.push(wert);
}

function aktualisiereListe() {
  let studentenliste = document.getElementById("studentenliste");

  // Liste leeren
  studentenliste.innerHTML = "";

  // Liste mit den aktuellen Werten des Arrays aktualisieren
  students.forEach((student) => {
    let li = document.createElement("li");
    li.textContent = student;
    studentenliste.appendChild(li);
  });
}

wertHinzufuegen("hallo");
wertHinzufuegen("I");
wertHinzufuegen("Bims");
wertHinzufuegen("World");
aktualisiereListe();

let hinzufuegenBtn = document.getElementById("hinzufuegenBtn");
let studentInput = document.getElementById("studentInput");

hinzufuegenBtn.addEventListener("click", () => {
  let neuerStudent = studentInput.value;
  if (neuerStudent) {
    wertHinzufuegen(neuerStudent);
    studentInput.value = "";
    aktualisiereListe();
  }
});