const button = document.querySelector(".dark_mode");
button.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode");
});


const input = document.querySelector("#nameInput");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
    output.textContent = "my Favorite club is " + input.value;
});

