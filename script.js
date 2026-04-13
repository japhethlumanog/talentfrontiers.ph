// Mobile navigation toggle and simple form feedback logic
const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.site-header');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

navToggle?.addEventListener('click', () => {
  siteHeader.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteHeader.classList.remove('open');
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formFeedback.textContent = 'Thank you! Your message has been received. We’ll be in touch shortly.';
  formFeedback.style.color = '#1f5f3f';
  contactForm.reset();
});
