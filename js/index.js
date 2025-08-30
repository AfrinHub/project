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


  const materials = [
      {title: "DS Lectures ", course: "Data Structures", link: "#"},
      {title: "DLD Project", course: "Digital Logic Design", link: "#"},
      {title: "Numarical Analysis Notes", course: "Numerical Analysis", link: "#"},
      {title: "Bio Statistics Book", course: "Probability and Statistics for Engineers", link: "#"},
      {title: " DC Slides", course: "Data Communication", link: "#"},
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
      {date: "17 August", course: "Probability and Statistics for Engineers", time: "10:00 AM-1;00 PM", room: "Gallery"},
      {date: "21 August", course: "Data Communication", time: "10:00 AM-1:00 PM", room: "Gallery"}
    ];

   // Render Materials
    const materialList = document.getElementById("materialList");
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

    // Render Notices
    const noticeList = document.getElementById("noticeList");
notices.forEach(n => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = n;
      noticeList.appendChild(li);
    });
// Render Routine
    const routineList = document.getElementById("routineList");
    routine.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML =` <td>${r.date}</td><td>${r.course}</td><td>${r.time}</td><td>${r.room}</td>`;
      routineList.appendChild(tr);
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

