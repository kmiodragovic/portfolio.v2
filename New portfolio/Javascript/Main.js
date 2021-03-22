const button = document.querySelector(".light-off");
console.log(button);
let changeHandler = function () {
    const elements = document.querySelectorAll(
        "body, h1, h2, h3, h4, .normal-text"
    );
    for (let i = 0; i < elements.length; i++);{
        const element = elements[i];
        element.classList.toggle("theme-dark");
    }
};


function myFunction() {
    const element = document.querySelector(".card-body");
    element.classList.toggle("dark-mode");
 }






// button.addEventListener("click", changeHandler);
// setInterval(changeHandler, 5000);

// changeHandler();