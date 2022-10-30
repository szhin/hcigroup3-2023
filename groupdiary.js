const weeks = document.querySelectorAll(".choose-week");
const frame = document.querySelector(".frame");

console.log(weeks);

let curWeek = 1;

weeks.forEach(function (week) {
  week.addEventListener("click", function () {
    console.log(week);
  });
});
