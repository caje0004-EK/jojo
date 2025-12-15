function initCarousel(prevBtnId, nextBtnId, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const items = container.querySelectorAll(".item");
  let index = 0;

  function showItem(i) {
    items.forEach((item) => item.classList.remove("active"));
    items[i].classList.add("active");
  }

  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

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
}

// Initialize all carousels
initCarousel("prevBtn1", "nextBtn1", ".menu-container1 .carousel");
initCarousel("prevBtn2", "nextBtn2", ".menu-container2 .carousel");
initCarousel("prevBtn3", "nextBtn3", ".menu-container3 .carousel");
