const chatBot = document.querySelector(".chat_container");
const loginPopup = document.querySelector(".popup");
const closeBtn = document.querySelector("#close");

chatBot.addEventListener("click", () => {
    loginPopup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    loginPopup.style.display = "none";
});