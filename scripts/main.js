/*// Store a reference to the <p> in a variable
const myParagraph = document.querySelector("h1");
// Update the text content of the <p> object
myParagraph.textContent = "The Reisen";
*/

const img = document.querySelector("img");
const header = document.querySelector("h1");
const body = document.querySelector("body");
const main_body = document.querySelector("main_body");
const login_body = document.querySelector("login_body");
let button = document.querySelector("button");
const input_button = document.querySelector("input_button");
const input = document.querySelector("input");

login_body.hidden = true;

function showLoginWindow() {
    main_body.hidden = true;
    login_body.hidden = false;
}
function hideLoginWindow() {
    main_body.hidden = false;
    login_body.hidden = true;
}

function setSoulName() {
    //const name = prompt("Shall we know thy name?");
    const name = input.value;
    /*
    if (!name)
        setSoulName();
    else */
    if (name) {
        hideLoginWindow();
        localStorage.setItem("name", name);
        header.textContent = `Be hallowed thy name, ${name}!`;
    }
}

if (!localStorage.getItem("name")) {
    //setSoulName()
    showLoginWindow();
}
else {
    const name = localStorage.getItem("name");
    header.textContent = `Be hallowed thy name, ${name}!`;
}

header.addEventListener("click", () => {
    header.textContent = "The Reisen";
});

img.addEventListener("click", () => {
    const src = img.getAttribute("src");
    if (src == "src/reisen.jpg")
        img.setAttribute("src", "src/minecraft.jpg");
    else
        img.setAttribute("src", "src/reisen.jpg");
});

button.addEventListener("click", () => {
    //setSoulName();
    showLoginWindow();
});

input_button.addEventListener("click", () => {
    setSoulName();
});





