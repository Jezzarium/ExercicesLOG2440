import loadTheme from "../utils.js";

(function () {
    // TODO : charger le thème
    const theme = JSON.parse(localStorage.getItem('theme'));
    if (theme) loadTheme(theme);
})();

const form = document.getElementById('form');
const yesButton = document.getElementById('yes');
const grade = document.getElementById('rating-select');
const title = document.getElementById('title');
const message = document.getElementById('message');

// TODO : mettre à jour l'espace de stockage de la session après un changement du formulaire
form.addEventListener('input', () => {
    const formData = {
        'yesButton': yesButton.value,
        'grade': grade.value,
        'title': title.value,
        'message': message.value
    }

    sessionStorage.setItem('formData', JSON.stringify(formData));
})

// TODO : vider l'espace de stockage de la session après la soumission du formulaire
form.addEventListener('submit', () => {
    sessionStorage.clear();
})

// TODO : remplir le formulaire s'il y a une sauvegarde dans l'espace de stockage de la session
const formData = JSON.parse(sessionStorage.getItem('formData'));

console.formData
if (formData) { 
    yesButton.value = formData.yesButton;
    grade.value = formData.grade;
    title.value = formData.title;
    message.value = formData.message;
}