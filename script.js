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
    if (window.scrollY > 10) {
        ul.classList.add("hide-navmenu")
        hideResume()
    }
})

// Resume Popup

let resumeDiv = document.querySelector('.resume-popup')
let resumeClose = document.getElementById('close-res')
let mainDiv = document.querySelector('.main-section')
let resume = document.getElementById('resume')
let resBtns = document.querySelectorAll('.res')

const showResume = () => {
    resumeDiv.classList.toggle('hide-resume')
    setTimeout(() => {
        mainDiv.style.filter = "blur(8px)"
    }, 200);
}

const hideResume = () => {
    resumeDiv.classList.add('hide-resume')
    mainDiv.style.filter = "blur(0)"
}

resume.addEventListener("click", showResume)
resumeClose.addEventListener("click", hideResume)

resBtns.forEach((btn) => {
    btn.addEventListener("click", hideResume)
})

// Contact Form

const namee = document.getElementById('name')
const email = document.getElementById('email')
const number = document.getElementById('number')
const message = document.getElementById('message')
let submit = document.getElementById('submit')

const form = document.getElementById('form')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    smtpEmail()
    Submit()
    CleanForm()
})

function smtpEmail() {
    let ebody = `<b>Name : ${namee.value}</b> 
                 <br>
                 <br>
                 <b>Email : ${email.value}</b> 
                 <br>
                 <br>
                 <b>Phone Number : ${number.value}</b> 
                 <br>
                 <br>
                 <b>Message : ${message.value}</b> `

    Email.send({
        SecureToken: "e93a0c12-4de7-4d2d-9e20-a364a4e5dbe5",
        To: 'saintysaif2233@gmail.com',
        From: "saintysaif2233@gmail.com",
        Subject: "Details From Portfolio Contact Form",
        Body: ebody
    }).then(
        console.log("Message sent"),
    );
}

function CleanForm() {
    namee.value = ""
    email.value = ""
    number.value = ""
    message.value = ""
}


function Submit() {
    submit.innerText = "Done 👍"
    setTimeout(() => {
        submit.innerText = "Submit"
    }, 1500);
}