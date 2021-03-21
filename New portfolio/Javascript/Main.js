const button = document.querySelector(".light-on");
console.log(button);
let changeHandler = function () {
    const elements = document.querySelectorAll(
        "container, card-body, h1, h2, h3, h4, .normal-text"
    );
    for (let i = 0; i < elements.length; i++);{
        const element = elements[i];
        element.classList.toggle("light-mode");
    }
};


function lightMode() {
    const element = document.body;
    element.classList.toggle("light-mode");
 }









button.addEventListener("click", changeHandler);
