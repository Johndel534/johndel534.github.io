// =========================================================
// Johndel L. Sialongo — Portfolio
// script.js
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  setActiveNavLink();
  setupMobileMenu();
  setupContactForm();
});

/**
 * Highlights the nav link that matches the current page.
 */
function setActiveNavLink() {
  const links = document.querySelectorAll(".nav-links a");
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html";

  links.forEach(function (link) {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Handles the responsive hamburger menu.
 */
function setupMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    navLinks.classList.toggle("open");
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });

  // Close the menu whenever a link is tapped
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.classList.remove("open");
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Validates and "submits" the contact form on contact.html.
 * There is no backend, so a successful validation simply shows
 * a confirmation message and resets the form.
 */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    status.classList.remove("show", "success", "error");

    let isValid = true;

    // Name check
    if (nameField.value.trim().length < 2) {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    // Email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Message check
    if (messageField.value.trim().length < 10) {
      messageError.textContent = "Message should be at least 10 characters.";
      isValid = false;
    }

    if (!isValid) {
      status.textContent = "Please fix the errors above and try again.";
      status.classList.add("show", "error");
      return;
    }

    // Simulate a successful send (no backend available)
    status.textContent = "Message sent. Thanks for reaching out — I'll reply soon.";
    status.classList.add("show", "success");
    form.reset();
  });
}
