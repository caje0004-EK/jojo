const cards = document.querySelectorAll(".event-card");
const prevBtn = document.getElementById("prev-btn1");
const nextBtn = document.getElementById("next-btn1");

let currentIndex = 0;

function showCard(index) {
  cards.forEach((card) => card.classList.remove("active"));
  cards[index].classList.add("active");
}

// starttilstand
showCard(currentIndex);

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
});
