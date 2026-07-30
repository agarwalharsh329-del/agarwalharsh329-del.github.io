const pages = document.querySelectorAll(".page");
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
  window.scrollTo(0, 0);
}

document.addEventListener("click", function (e) {
  const nextBtn = e.target.closest(".next");
  const prevBtn = e.target.closest(".prev");

  if (nextBtn) {
    if (currentPage < pages.length - 1) {
      currentPage++;
    } else {
      currentPage = 0;
    }
    showPage(currentPage);
    return;
  }

  if (prevBtn) {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
    return;
  }
});

const bgMusic = document.getElementById("bgMusic");
const playMusic = document.getElementById("playMusic");

if (playMusic && bgMusic) {
  playMusic.addEventListener("click", () => {
    bgMusic.play();
  });
}

showPage(0);