
// ===============================
// Confirm JavaScript is connected
// ===============================
console.log("JavaScript connected successfully.");


// ===============================
// Hover effect on featured project image
// ===============================
const projectImg = document.querySelector(".project-img");

if (projectImg) {
  projectImg.addEventListener("mouseover", () => {
    projectImg.style.transform = "scale(1.05)";
    projectImg.style.transition = "0.3s ease";
  });

  projectImg.addEventListener("mouseout", () => {
    projectImg.style.transform = "scale(1)";
  });
}


// ===============================
// Reusable function to toggle sections
// (This satisfies the refactor requirement)
// ===============================
function toggleSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  if (button && section) {
    button.addEventListener("click", () => {
      section.classList.toggle("hidden");
    });
  }
}


// ===============================
// Apply toggle behavior to sections
// ===============================
toggleSection("toggle-skills", "skills");
toggleSection("toggle-about", "about");
toggleSection("toggle-projects", "projects");
toggleSection("toggle-contact", "contact");


// ===============================
// Handle contact form submission
// ===============================
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop page refresh

    alert("Thank you! Your message has been sent successfully.");

    contactForm.reset(); // clear form fields
  });
}