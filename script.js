var time = moment();
var hour = time.format("H");
var hour9 = $("#hour9")
var hour10 = $("#hour10")
var hour11 = $("#hour11")
var hour12 = $("#hour12")
var hour13 = $("#hour13")
var hour14 = $("#hour14")
var hour15 = $("#hour15")
var hour16 = $("#hour16")
var hour17 = $("#hour17")

function saveNewEvent9 () {
var newEvent = newEvent9.value;
  localStorage.setItem("saveNewEvent9", JSON.stringify(saveNewEvent9));
};

console.log (saveNewEvent9)


function renderNewEvent() {
  var newEvent = JSON.parse(localStorage.getItem("newEvent"));
  if (newEvent !== null) {
  $("#eventChange").innerHTML = newEvent.text;
  } else {
    return;
  }
}



// Date and Time Function

function displayTime() {
    $("#currentDay").text(time.format("dddd, MMM Do YYYY"));               
    ;
}

displayTime();
setInterval(displayTime, 1000);

console.log(hour);


if (hour===9) {
    hour9.addClass ("present")
}
else if (hour <9) {
    hour9.addClass ("future")
}
else {
    hour9.addClass ("past")
};

if (hour===10) {
    hour10.addClass ("present")
}
else if (hour<10) {
    hour10.addClass ("future")
}
else {
    hour10.addClass ("past")
};

if (hour===11) {
    hour11.addClass ("present")
}
else if (hour<11) {
    hour11.addClass ("future")
}
else {
    hour11.addClass ("past")
};

if (hour===12) {
    hour12.addClass ("present")
}
else if (hour<12) {
    hour12.addClass ("future")
}
else {
    hour12.addClass ("past")
}

if (hour===13) {
    hour13.addClass ("present")
}
else if (hour<13) {
    hour13.addClass ("future")
}
else {
    hour13.addClass ("past")
}

if (hour===14) {
    hour14.addClass ("present")
}
else if (hour<14) {
    hour14.addClass ("future")
}
else {
    hour14.addClass ("past")
}

if (hour===15) {
    hour15.addClass ("present")
}
else if (hour<15) {
    hour15.addClass ("future")
}
else {
    hour15.addClass ("past")
}

if (hour===16) {
    hour16.addClass ("present")
}
else if (hour<16) {
    hour16.addClass ("future")
}
else {
    hour16.addClass ("past")
}

if (hour===17) {
    hour17.addClass ("present")
}
else if (hour<17) {
    hour17.addClass ("future")
}
else {
    hour17.addClass ("past")
}