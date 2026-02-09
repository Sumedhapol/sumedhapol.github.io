const projectImg = document.querySelector(".project-img");

projectImg.addEventListener("mouseover", () => {
  projectImg.style.transform = "scale(1.05)";
});

projectImg.addEventListener("mouseout", () => {
  projectImg.style.transform = "scale(1)";
});