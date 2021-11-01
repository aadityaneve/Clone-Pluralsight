// Click event for Collapsibles
let buttons = document.querySelectorAll(".collapsible");
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        button.classList.toggle("collapsibleActive");
        if (button.classList.contains("collapsibleActive")) {
            content.style.maxHeight = content.scrollHeight + "350px";
        }else {
            content.style.maxHeight = "0px";
        }
    });
});