onload = () => {
  document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", () => {
  const butterflies = document.querySelectorAll(".butterfly");

  function moveButterfly(butterfly) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    butterfly.style.transition = "all 5s ease-in-out";
    butterfly.style.left = `${x}px`;
    butterfly.style.top = `${y}px`;
  }

  butterflies.forEach((butterfly) => {
    setInterval(() => moveButterfly(butterfly), 5000);
  });
});
