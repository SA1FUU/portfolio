let form = document.getElementById('form')
let name = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let message = document.getElementById('message')
let errorPara = document.getElementById('errorPara')
let submitbutton = document.getElementById('submit-button')
let popupCard = document.querySelector('.popup-card')
let closebutton = document.getElementById('close-button')


submitbutton.addEventListener("click", () => {
    if (name.value.length < 4) {
        errorPara.innerText = "*Please Enter Your Full Name First"
    }
    else if (!email.value.match(/^[A-Za-z\_\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorPara.innerText = "*Please Enter a Valid Email Address"
    }
    else if (number.value.length < 10) {
        errorPara.innerText = "*Please Enter a Valid Phone Number"
    }
    else if (message.value.length < 10) {
        errorPara.innerText = "*Please Explain Your Query in Brief"
    }
    else {
        errorPara.innerText = ""
        popupCard.classList.add('show-card')
        form.style.filter = "blur(5px)"
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let ebody = `<b>Name : </b> ${name.value}
                 <br> <br>
                 <b>Email : </b> ${email.value}
                 <br> <br>
                 <b>Phone Number : </b> ${number.value}
                 <br> <br>
                 <b>Message : </b> ${message.value}`

    Email.send({
        SecureToken: "e93a0c12-4de7-4d2d-9e20-a364a4e5dbe5",
        To: 'saintysaif2233@gmail.com',
        From: "saintysaif2233@gmail.com",
        Subject: "Message From : " + name.value,
        Body: ebody
    }).then(
        console.log("Message sent"),
        form.reset()
    );
})

closebutton.addEventListener("click", () => {
    popupCard.classList.remove("show-card")
    form.reset()
    form.style.filter = "blur(0)"
})



// const observer = new IntersectionObserver((enteries) => {
//     enteries.forEach((entry) => {
//         console.log(entry);
//         if(entry.isIntersecting) {
//             entry.target.classList.add("show")
//         }
//         // else{
//         //     entry.target.classList.remove("show")
//         // }
//     })
// })

// const hidddenElements = document.querySelectorAll('.hidden')
// // hidddenElements.forEach((el) => observer.observe(el))