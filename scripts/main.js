/*// Store a reference to the <p> in a variable
const myParagraph = document.querySelector("h1");
// Update the text content of the <p> object
myParagraph.textContent = "The Reisen";
*/

const img = document.querySelector("img");
const header = document.querySelector("h1");

img.addEventListener("click", () => {
    const src = img.getAttribute("src");
    if (src == "src/reisen.jpg")
        img.setAttribute("src", "src/minecraft.jpg");
    else
        img.setAttribute("src", "src/reisen.jpg");
}
);

header.addEventListener("click", () => {
    header.textContent = "The Reisen";
})

let button = document.querySelector("button");
function setSoulName() {
    const name = prompt("Shall we know thy name?");
    if (!name)
        setSoulName();
    else {
        localStorage.setItem("name", name);
        header.textContent = `Be hallowed thy name, ${name}!`;
    }
}
if (!localStorage.getItem("name"))
    setSoulName()
else {
    const name = localStorage.getItem("name");
    header.textContent = `Be hallowed thy name, ${name}!`;
}

button.addEventListener("click", () => {
    setSoulName();
});