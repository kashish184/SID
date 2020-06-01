const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
const loading = document.getElementById("sign");
const newYearTime = new Date(`June 01 ${currentYear + 1} 00:00:00`);
const yearBorn = 2014;
const age = currentYear - yearBorn;
//set background year
year.innerText = age;
//update count down time
function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? 0 + h : h;
  minutes.innerHTML = m < 10 ? 0 + m : m;
  seconds.innerHTML = s < 10 ? 0 + s : s;
}
//run every second
setInterval(updateCountDown, 1000);

//show spinner before every countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);
