

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



// -------- DATA --------
// const materials = [
//   {title: "DS Lectures", course: "Data Structures", link: "#"},
//   {title: "DLD Project", course: "Digital Logic Design", link: "#"},
//   {title: "Numerical Analysis Notes", course: "Numerical Analysis", link: "#"},
//   {title: "Bio Statistics Book", course: "Probability and Statistics for Engineers", link: "#"},
//   {title: "DC Slides", course: "Data Communication", link: "#"},
//   {title: "IWT Project Guidelines", course: "Internet & Web Technology Lab", link: "#"}
// ];

// const notices = [
//   "Data Structures Lab exam 26th August.",
//   "DLD Project submission 28th August.",
//   "IWT Project submission & exam 2nd Sept.",
//   "Course viva schedule will be posted soon."
// ];

// const routine = [
//   {date: "3 August", course: "Data Structures", time: "10:00 AM-1:00 PM", room: "Gallery"},
//   {date: "7 August", course: "Digital Logic Design", time: "10:00 AM-1:00 PM", room: "Gallery"},
//   {date: "11 August", course: "Numerical Analysis", time: "10:00 AM-1:00 PM", room: "Gallery"},
//   {date: "17 August", course: "Probability and Statistics for Engineers", time: "10:00 AM-1:00 PM", room: "Gallery"},
//   {date: "21 August", course: "Data Communication", time: "10:00 AM-1:00 PM", room: "Gallery"}
// ];

// // -------- RENDER MATERIALS --------
// const materialList = document.getElementById("materialList");
// materials.forEach(m => {
//   const col = document.createElement("div");
//   col.className = "col-md-4 col-lg-3";
//   col.innerHTML = `
//     <div class="card p-3 text-center h-100 shadow-sm">
//       <h6 class="fw-bold">${m.title}</h6>
//       <small class="text-muted">${m.course}</small>
//       <br/>
//       <a href="${m.link}" class="btn btn-sm btn-custom mt-2" target="_blank">View</a>
//     </div>
//   `;
//   materialList.appendChild(col);
// });

// // -------- RENDER NOTICES --------
// const noticeList = document.getElementById("noticeList");
// notices.forEach((n, i) => {
//   const li = document.createElement("li");
//   li.className = "list-group-item";
//   if (i === 0) li.classList.add("list-group-item-warning", "fw-bold"); // highlight latest notice
//   li.textContent = n;
//   noticeList.appendChild(li);
// });

// // -------- RENDER ROUTINE --------
// const routineList = document.getElementById("routineList");
// function renderRoutine(filter = "") {
//   routineList.innerHTML = "";
//   const filtered = routine.filter(r =>
//     r.course.toLowerCase().includes(filter.toLowerCase()) ||
//     r.date.toLowerCase().includes(filter.toLowerCase()) ||
//     r.room.toLowerCase().includes(filter.toLowerCase())
//   );
//   if(filtered.length === 0) {
//     routineList.innerHTML = "<tr><td colspan='4' class='text-muted'>No exams found.</td></tr>";
//     return;
//   }
//   filtered.forEach(r => {
//     const tr = document.createElement("tr");
//     tr.innerHTML = `<td>${r.date}</td><td>${r.course}</td><td>${r.time}</td><td>${r.room}</td>`;
//     routineList.appendChild(tr);
//   });
// }
// renderRoutine();
// document.getElementById("searchRoutine").addEventListener("input", function() {
//   renderRoutine(this.value);
// });
