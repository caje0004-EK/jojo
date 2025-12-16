let currentIndex = 0;

function initCarousel(prevBtnId, nextBtnId, containerSelector) {
  const eventCards = document.querySelectorAll(".event-card");
  const totalSlides = eventCards.length;

  // Fjern "active" fra den nuværende plakat
  eventCards[currentIndex].classList.remove("active");

  // Opdater index for at navigere til næste eller forrige plakat
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  // Tilføj "active" til den næste plakat, så den bliver synlig
  eventCards[currentIndex].classList.add("active");
}

// Find knapperne og tilføj event listeners
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    showItem(index);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    showItem(index);
  });
}

// function initCarousel(prevBtnId, nextBtnId, containerSelector) {
//     const container = document.querySelector(containerSelector);
//     if (!container) return;

//     const items = container.querySelectorAll(".item");
//     let index = 0;

//     function showItem(i) {
//       items.forEach((item) => item.classList.remove("active"));
//       items[i].classList.add("active");
//     }

//     const prevBtn = document.getElementById(prevBtnId);
//     const nextBtn = document.getElementById(nextBtnId);

//     if (prevBtn) {
//       prevBtn.addEventListener("click", () => {
//         index = (index - 1 + items.length) % items.length;
//         showItem(index);
//       });
//     }

//     if (nextBtn) {
//       nextBtn.addEventListener("click", () => {
//         index = (index + 1) % items.length;
//         showItem(index);
//       });
//     }
//   }

// Initialize carousel
initCarousel("prev-btn1", "next-btn1", ".carousel-container1 .carousel");
