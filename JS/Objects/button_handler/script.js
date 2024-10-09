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
    addHandler: function (element) {
        console.log(this);
        element.addEventListener("click", this.showValue.bind(this));
    },
};

const button = document.getElementById("btn");
ButtonHandler.addHandler(button);