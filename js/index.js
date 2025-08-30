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



const courses = [
  "Data Structures",
  "Digital Logic Design",
  "Numerical Analysis ",
  "Probability and Statistics for Engineers",
  "Data Communication",
  "Data Structures Lab",
  "Digital Logic Design Lab",
  "Internet and Web Technology Lab"
];


const courseList = document.getElementById("courseList");

function renderCourses(filter = "") {
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


document.getElementById("searchCourse").addEventListener("input", function () {
  renderCourses(this.value);
});
