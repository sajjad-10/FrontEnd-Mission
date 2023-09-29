const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const jalaliEl = document.querySelector(".jalali");
const toggle = document.querySelector(".toggle");

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

let jalaliDays = [
    "يكشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه",
];
let jalaliMonths = [
    "فروردين",
    "ارديبهشت",
    "خرداد",
    "تير",
    "مرداد",
    "شهريور",
    "مهر",
    "آبان",
    "آذر",
    "دي",
    "بهمن",
    "اسفند",
];

toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
});

function setTime() {
    const time = new Date();
    const todayJalali = time.toLocaleDateString("fa-IR");
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const hoursForClock = hour % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        12,
        0,
        360
    )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        59,
        0,
        360
    )}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        59,
        0,
        360
    )}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${
        minutes < 10 ? `0${minutes}` : `${minutes} ${ampm}`
    }`;

    dateEl.innerHTML = `${days[day]}, ${month[month]} <span class="circle">${date}</span>`;
    jalaliEl.innerHTML = `${time.toLocaleDateString("fa-IR", {
        weekday: "long",
    })}, ${time.toLocaleDateString("fa-IR", {
        month: "long",
    })} <span class="circle">${time.toLocaleDateString("fa-IR", {
        day: "numeric",
    })}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
setInterval(setTime, 1000);
