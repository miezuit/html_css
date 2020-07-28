
document.querySelector(".hamburger")
        .addEventListener("click", toggle)

function toggle() {
    var menu = document.querySelector("header ul")

    if (menu.classList.contains("hidden")) {
        menu.classList.add("visible")
        menu.classList.remove("hidden")
    } else {
        menu.classList.add("hidden")
        menu.classList.remove("visible")
    }
}