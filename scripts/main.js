/*
Name: Sumedha Pol
Course: IST 256
Assignment: DOM Portfolio Enhancements
*/

// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

  function setupToggle(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);

    if (!button || !section) {
      console.log("Missing:", buttonId, sectionId);
      return;
    }

    button.addEventListener("click", () => {
      section.classList.toggle("hidden");
    });
  }

  // Connect buttons to sections
  setupToggle("toggle-about", "about");
  setupToggle("toggle-skills", "skills");
  setupToggle("toggle-projects", "projects");
  setupToggle("toggle-contact", "contact");


  // Contact form feedback
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been received.");
      form.reset();
    });
  }

});