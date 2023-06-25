// For Scroll and Sticky NavBar

window.onscroll = function () {
    window.onscroll = function () {
        var navbar = document.querySelector('.container');
        if (window.scrollY > 0) {
            navbar.style.top = "-10px";
            navContainer.classList.remove("show-nav-menu")
            menuButton.innerHTML = "="
        } else {
            navbar.style.top = "0";
        }
    };
};

// For Hamburger Menu

let navContainer = document.querySelector('.nav-menu')
let menuButton = document.querySelector('.menu-btn')

menuButton.addEventListener("click", () => {
    navContainer.classList.toggle("show-nav-menu")
})

// For Changing Inner Content of Menu button 

menuButton.addEventListener("click", () => {
    if (menuButton.innerHTML === "=") {
        menuButton.innerHTML = "x"
    }
    else {
        menuButton.innerHTML = "="
    }
})

// For Changing Theme

let themeBtn = document.getElementById('theme-btn')
let body = document.getElementById('body')
let mainHeading = document.querySelector('.main-heading')
let mainPara = document.querySelectorAll('.main-para')
let footer = document.querySelector('footer')
let section = document.querySelectorAll('.section')

themeBtn.addEventListener("click", () => {

    body.classList.toggle("change-theme")
    footer.classList.toggle("change-theme")

    // For the Sections

    section.forEach(sec => {
        sec.classList.toggle("change-theme")
    })

    // For Main Headings and Paragraphs

    if(themeBtn.innerText === "Light") {
        mainHeading.style.color = "Blueviolet"
     }
     else{
        mainHeading.style.color = "#fff"
     }

    mainPara.forEach(mP => {
        if(themeBtn.innerText === "Dark") {
            mP.style.color = "#ccc"
         }
         else{
            mP.style.color = "rgb(122, 81, 161)"
         }
    })

    form.classList.toggle("new-form")
})

// For Changing Inner Text of Theme Button

themeBtn.addEventListener("click", () => {
    if (themeBtn.innerText === "Dark") {
        themeBtn.innerText = "Light"
    }
    else {
        themeBtn.innerText = "Dark"
    }
})

// For Adding Active Class on Click

let anchorTags = document.querySelectorAll('.anchors')

anchorTags.forEach(navLinks => {
    navLinks.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active")
        navLinks.classList.add("active")
    })
})

// For Closing Navbar on clicking Anchor Tags

anchorTags.forEach(anchors => {
    anchors.addEventListener("click", () => {
        navContainer.classList.remove("show-nav-menu")
        menuButton.innerHTML = "="
    })
})



// For CV Button

let cvButton = document.querySelector('#cv-button')
let cvCard = document.querySelector('.cv-card')
let cardClose = document.querySelector('#card-close')
let cvDwnldBtn = document.querySelector('#cv-dwnld-btn')
let landingPage = document.querySelector('.landing-contents')

cvButton.addEventListener("click", () => {
    cvCard.classList.add("cv-hidden")
    landingPage.style.filter = "blur(5px)"
})
cvDwnldBtn.addEventListener("click", () => {
    cvCard.classList.remove("cv-hidden")
    landingPage.style.filter = "blur(0)"
})

cardClose.addEventListener("click", () => {
    cvCard.classList.remove("cv-hidden")
    landingPage.style.filter = "blur(0)"
})


// For Fade Animation of About Section

const observer2 = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting ) {
            entry.target.classList.add("show")
        }
        // else{
        //     entry.target.classList.remove("show")
        // }
    })
})

let hidddenElements1 = document.querySelectorAll('.hidden1')
let hidddenElements2 = document.querySelectorAll('.hidden2')

hidddenElements1.forEach(el1 => observer2.observe(el1))
hidddenElements2.forEach(el2 => observer2.observe(el2))


// For Project Page

let prevButton = document.querySelector('#prev')
let nextButton = document.querySelector('#next')
let media = document.querySelector('.media-scroller')

prevButton.addEventListener("click", () => {
    media.style.scrollBehavior = "smooth"
    media.scrollLeft += -300
})

nextButton.addEventListener("click", () => {
    media.style.scrollBehavior = "smooth"
    media.scrollLeft += 300
    console.log("Hemlo");
})