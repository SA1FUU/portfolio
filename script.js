// Show to Move to Top Icon

window.addEventListener('scroll', function () {
    var topArrow = document.getElementById('top-arrow');

    if (window.scrollY > 150) {
        topArrow.style.display = "block"
    } else {
        topArrow.style.display = "none"
    }
});


// Burger 

let ul = document.querySelector('ul')
let burger = document.getElementById('burger')

burger.addEventListener("click", () => {
    ul.classList.toggle("hide-navmenu")

})

let li = document.querySelectorAll('li')

li.forEach((item) => {
    item.addEventListener("click", () => {
        ul.classList.add("hide-navmenu")
    })
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 10) {
        ul.classList.add("hide-navmenu")
    }
})