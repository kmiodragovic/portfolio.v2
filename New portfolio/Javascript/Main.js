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


const Today = new Date();
const Time = Today.getHours();
console.log(time);
getItem(".dark-mode");
if(time>=20 || time<=7);{}



// button.addEventListener("click", changeHandler);
// setInterval(changeHandler, 5000);

// changeHandler();