// Dark Mode toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = darkToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
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
if (testimonialInner) {
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
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
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
}

// Materials, Notices, Routine
const materials = [
  {title: "DS Lectures ", course: "Data Structures", link: "#"},
  {title: "DLD Project", course: "Digital Logic Design", link: "#"},
  {title: "Numarical Analysis Notes", course: "Numerical Analysis", link: "#"},
  {title: "Bio Statistics Book", course: "Probability and Statistics for Engineers", link: "#"},
  {title: "DC Slides", course: "Data Communication", link: "#"},
  {title: "IWT Project Guidelines", course: "Internet & Web Technology Lab", link: "#"}
];

const notices = [
  "Data Structures Lab exam 26th August.",
  "DLD Project submission 28th August.",
  "IWT Project submission & exam 2nd Sept.",
  "Course viva schedule will be posted soon."
];

const routine = [
  {date: "3 August", course: "Data Structures", time: "10:00 AM-1:00 PM", room: "Gallery"},
  {date: "7 August", course: "Digital Logic Design", time: "10:00 AM-1:00 PM", room: "Gallery"},
  {date: "11 August", course: "Numerical Analysis", time: "10:00 AM-1:00 PM", room: "Gallery"},
  {date: "17 August", course: "Probability and Statistics for Engineers", time: "10:00 AM-1:00 PM", room: "Gallery"},
  {date: "21 August", course: "Data Communication", time: "10:00 AM-1:00 PM", room: "Gallery"}
];

// Render Materials
const materialList = document.getElementById("materialList");
if (materialList) {
  materials.forEach(m => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="card p-3 text-center h-100">
        <h6>${m.title}</h6>
        <small class="text-muted">${m.course}</small>
        <br/>
        <a href="${m.link}" class="btn btn-sm btn-custom mt-2" target="_blank">View</a>
      </div>
    `;
    materialList.appendChild(col);
  });
}

// Render Notices
const noticeList = document.getElementById("noticeList");
if (noticeList) {
  notices.forEach(n => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = n;
    noticeList.appendChild(li);
  });
}

// Render Routine
const routineList = document.getElementById("routineList");
if (routineList) {
  routine.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.date}</td><td>${r.course}</td><td>${r.time}</td><td>${r.room}</td>`;
    routineList.appendChild(tr);
  });
}

// Smooth scroll from Hero button
document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.querySelector(".hero .btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector("#courses");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

// Course Search
const courses = [
  "Data Structures",
  "Digital Logic Design",
  "Numerical Analysis",
  "Probability and Statistics for Engineers",
  "Data Communication",
  "Data Structures Lab",
  "Digital Logic Design Lab",
  "Internet and Web Technology Lab"
];

const courseList = document.getElementById("courseList");

function renderCourses(filter = "") {
  if (!courseList) return;
  courseList.innerHTML = "";
  const filtered = courses.filter(c =>
    c.toLowerCase().includes(filter.toLowerCase())
  );
  
  if (filtered.length === 0) {
    courseList.innerHTML = "<li class='list-group-item text-muted'>No courses found.</li>";
    return;
  }

  filtered.forEach(c => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = c;
    courseList.appendChild(li);
  });
}

renderCourses();

const searchCourse = document.getElementById("searchCourse");
if (searchCourse) {
  searchCourse.addEventListener("input", function () {
    renderCourses(this.value);
  });
}
