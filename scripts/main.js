/*
Name: Sumedha Pol
Course: Web Development
Assignment: DOM Portfolio Enhancements
Date: 2026
GitHub Pages: https://sumedhapol.github.io/
*/

// Wait for page to fully load
document.addEventListener("DOMContentLoaded", function () {

  function setupToggle(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);

    if (!button || !section) return;

    button.addEventListener("click", () => {
      section.classList.toggle("hidden");
    });
  }

  setupToggle("toggleAbout", "aboutSection");
  setupToggle("toggleSkills", "skillsSection");
  setupToggle("toggleProjects", "projectsSection");
  setupToggle("toggleContact", "contactSection");


  // Form submission feedback
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been received.");
      form.reset();
    });
  }

});