document.addEventListener("DOMContentLoaded", function () {

  const container = document.querySelector(".vorteile-container");
  const items = document.querySelectorAll(".vorteile");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");

  let index = 0;

  function updateSlider() {
    const slideWidth = items[0].offsetWidth;
    container.style.transform = `translateX(-${index * slideWidth}px)`;
    container.style.transition = "transform 0.4s ease";
  }

  right.addEventListener("click", function () {
    index = (index + 1) % items.length; // 👈 Loop nach rechts
    updateSlider();
  });

  left.addEventListener("click", function () {
    index = (index - 1 + items.length) % items.length; // 👈 Loop nach links
    updateSlider();
  });

  // Window Resize berücksichtigen
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      updateSlider();
    } else {
      container.style.transform = "translateX(0)";
      index = 0;
    }
  });

});