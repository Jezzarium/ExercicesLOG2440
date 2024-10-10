const ButtonHandler = {
    getRandom: function () {
        return Math.floor(Math.random() * 10 + 1);
    },
    showValue: function () {
        console.log(this);
        const randomValue = this.getRandom();
        const display = document.getElementById("random-display");
        display.textContent = `Valeur aléatoire : ${randomValue}`;
    },
    addHandler: function (element, func) {
        element.addEventListener("click", () => {this.showValue(func)});
    },
};

const button = document.getElementById("btn");
const getRandom = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
ButtonHandler.addHandler(button, getRandom);