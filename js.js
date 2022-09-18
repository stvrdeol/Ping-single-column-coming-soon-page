const form = document.querySelector("form");
const invalid = document.querySelector(".invaild");
const input = document.querySelector("input");
form.addEventListener("submit", (e) => {
    if (input.validity.typeMismatch || input.value == "") {
        e.preventDefault();
        invalid.style.opacity = "1";
        input.placeholder = "example@email.com";
        input.style.borderColor = "var(--Light-Red)"
    }
    else {
        alert("Thanks for choosing us")
    }
})
function onInput() {
    if (input.validity.typeMismatch || input.value == "") {
        invalid.style.opacity = "1";
        input.placeholder = "example@email.com";
        input.style.borderColor = "var(--Light-Red)";
    }
    else if(input.value.length>=1) {
        invalid.style.opacity = "0";
        input.placeholder = "example@email.com";
        input.style.borderColor = "green";
     }
}