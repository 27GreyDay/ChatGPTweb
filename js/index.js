const humburger = document.querySelector(".humburger")
const menu = document.querySelector(".menu")
const dark = document.getElementById("dark")
const send = document.querySelector(".enter img")
const messages = document.querySelector(".down")
const listmenu = document.querySelectorAll(".list-menu li")
// Видимость
const profile = document.querySelector(".profile")
const chat = document.querySelector(".chat")
const subsc = document.querySelector(".subsc")
const money = document.querySelector(".money")

humburger.addEventListener('click', () => { 
    menu.style.left = "0"
    dark.className = "menu-dark"

})

menu.addEventListener('click', () => { 
    menu.style.left = "-273px"
    dark.classList.remove("menu-dark")
})

send.addEventListener('click', () => {
    let message = document.querySelector(".enter input")
    let htmlUser = `<div class="user-message">
    <img src="img/user.png" alt="user" class="img-user-message">
    <div class="text-message">${message.value}</div>
    </div>`
    let htmlGPT = `<div class="gpt-message">
    <img src="img/AvatarChatGPT.svg" alt="gptart" class="img-gpt-message">
    <div class="text-message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, corrupti numquam perferendis ab amet officiis quae fugit non! Tenetur nam quam cum consequatur doloribus. Doloribus hic molestias velit cumque laborum.</div>
    </div>`
    messages.insertAdjacentHTML('beforebegin', htmlUser)
    messages.insertAdjacentHTML('beforebegin', htmlGPT)
    message.value = ''
})
// Работа с меню - переход по страницам
for (let i = 0; i < 4; i++) {
    chat.style.display = "none" // по умолчанию
    profile.style.display = "block"
    money.style.display = "none"
    subsc.style.display = "none"
    listmenu[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                chat.style.display = "block";
                profile.style.display = "none"
                money.style.display = "none"
                subsc.style.display = "none"
                break;
            case 1:
                chat.style.display = "none";
                profile.style.display = "block"
                money.style.display = "none"
                subsc.style.display = "none"
                break;
            case 2:
                chat.style.display = "none";
                profile.style.display = "none"
                money.style.display = "block"
                subsc.style.display = "none"
                break;
            default:
                chat.style.display = "none";
                profile.style.display = "none"
                money.style.display = "none"
                subsc.style.display = "block"
        }
    })
}



