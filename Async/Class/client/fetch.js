const SERVER_URL = "http://localhost:5001";

async function init() {
    const url = `${SERVER_URL}/obtenirCours`;
    const res = await fetch(url);
    const courses = await res.json();
    getCourses(courses);
}

function getCourses(courses) {
    const container = document.getElementById("class-container");
    container.innerHTML = "";
    courses.forEach((c) => {
        const cours_paragraph = document.createElement("p");
        cours_paragraph.textContent = `${c.sigle} : ${c.credits}`;
        container.appendChild(cours_paragraph);
    });
}

// TODO : obtenir les informations d'un cours en fonction de son sigle et afficher le message dans span-find-result
function findCourse() {
    const course = document.getElementById("input-find-class").value;
    fetch(`${SERVER_URL}/obtenirCours/${course}`)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(`${data.sigle}`);
        const resultHtml = document.getElementById("span-find-result");
        resultHtml.textContent = `${data.sigle} : ${data.credits}`;
    });
    }

// TODO : créer un nouveau cours avec des données aléatoires et rafraichir la liste des cours
// Si le cours existe déjà, afficher le message du serveur dans span-add-result
function addCourse() {
    const sigle = document.getElementById("input-add-class").value;
    if (!sigle) return;
    const course = { sigle: sigle };
    fetch(`${SERVER_URL}/ajouterCours`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(course),
    }).then(response => response.text()).then(data => console.log(data));
}

// TODO : supprimer un cours en fonction de son sigle et afficher le message dans le span span-delete-result
function deleteCourse() {
    const course = document.getElementById("input-delete-class").value;
    fetch(`${SERVER_URL}/supprimerCours/${course}`, {
        method: "DELETE",
    })
    .then(res => res.text())
    .then(mess => console.log(mess))
    .catch(error => console.log(error));
}

// TODO : modifier le nombre de crédit d'un cours en fonction de son sigle et afficher le message dans le span span-modify-result
function changeCourse() {
    const sigle = document.getElementById("input-modify-class").value;
    const credits = document.getElementById("input-modify-credits").value;
}

window.onload = init;