
// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark Mode toggle
    const darkToggle = document.getElementById('darkModeToggle');
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const icon = darkToggle.querySelector('i');
      if(document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
      } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
      }
    });

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Testimonials data
const testimonials = [
  { name: "Sadika", text: "This site helped me ace my courses. Very user-friendly and useful." },
  { name: "Tahrima", text: "The study materials section saved me so much time. Highly recommend!" },
  { name: "Sumaiya", text: "I love the exam routine table. Easy to keep track of everything." }
];

// Render Testimonials dynamically
const testimonialInner = document.getElementById("testimonialInner");
testimonials.forEach((t, i) => {
  const div = document.createElement("div");
  div.className = "carousel-item" + (i === 0 ? " active" : "");
  div.innerHTML = `
    <div class="testimonial mx-auto" style="max-width:600px;">
      <p>"${t.text}"</p>
      <h6 class="mt-3">- ${t.name}</h6>
    </div>
  `;
  testimonialInner.appendChild(div);
});

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset();
});
