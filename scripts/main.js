const projectImg = document.querySelector(".project-img");

projectImg.addEventListener("mouseover", () => {
  projectImg.style.transform = "scale(1.05)";
});

projectImg.addEventListener("mouseout", () => {
  projectImg.style.transform = "scale(1)";
});

const skillsBtn = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

skillsBtn.addEventListener("click", () => {
  skillsSection.classList.toggle("hidden");
});