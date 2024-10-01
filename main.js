const elBtn = document.querySelector(".js-btn");
const elTitle = document.querySelector(".js-count-title");

let count = 0

elBtn.addEventListener("click", () => {
    count ++ ;
    elTitle.textContent = count;
})