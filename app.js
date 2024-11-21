let left = document.getElementById("left");
let right = document.getElementById("right");
let monthYear = document.querySelector("#monthYear");
let daysContainer = document.getElementById("daysContainer");
let btn = document.getElementById("btn")
let calendercon = document.querySelector(".calender-con")
let datetable = document.getElementById("datetable")


let monthYears = new Date();

function call() {
    let year = monthYears.getFullYear();
    let monthIndex = monthYears.getMonth();
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let month = monthNames[monthIndex];
    monthYear.textContent = `${month} ${year}`;

    daysContainer.innerHTML = "";

    let firstDay = new Date(year, monthIndex).getDay();

    let daysInMonth = new Date(year, monthIndex + 1 , 0).getDate();


    for (let i = 0; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty");
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.classList.add("day");

        dayDiv.addEventListener("click",function(){
            datetable.innerHTML = `Selected Date: ${day} ${month} ${year}`

        })
        daysContainer.appendChild(dayDiv);
    }
}

call();

right.addEventListener("click", function () {
    monthYears.setMonth(monthYears.getMonth() + 1);
    call();
});

left.addEventListener("click", function () {
    monthYears.setMonth(monthYears.getMonth() - 1);
    call();
});

btn.addEventListener("click",function(){
calendercon.style.display = "block";

})
