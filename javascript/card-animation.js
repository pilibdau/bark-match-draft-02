const leftBtn = document.querySelector(".swipe--left");
const rightBtn = document.querySelector(".swipe--right");

// console.log(allCards);
// console.log(leftBtn);
// console.log(rightBtn);


// ======= when swipe buttons are tapped! =========//
leftBtn.addEventListener("click", () => {
    const card = document.querySelectorAll(".card")[0];
    card.classList.add("left-hide");
    card.addEventListener("animationend", () => {
        card.remove();
        console.log(card);
   });
});

rightBtn.addEventListener("click", () => {
    const card = document.querySelectorAll(".card")[0];
    card.classList.add("right-hide");
    card.addEventListener("animationend", () => {
        card.remove();
        console.log(card);
   });
});
