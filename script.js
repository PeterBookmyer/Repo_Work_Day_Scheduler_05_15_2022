var time = moment();
var hours = time.format("h");
var hour9 = $("#eventChange9")
var hour10 = $("#eventChange10")
var hour11 = $("#eventChange11")
var hour12 = $("#eventChange12")
var hour1 = $("#eventChange1")
var hour2 = $("#eventChange2")
var hour3 = $("#eventChange3")
var hour4 = $("#eventChange4")
var hour5 = $("#eventChange5")

// function saveNewEvent () {
// var newEvent = changeEvent.value;
//   localStorage.setItem("saveNewEvent", JSON.stringify(saveNewEvent));
// };


// function renderNewEvent() {
//   var newEvent = JSON.parse(localStorage.getItem("newEvent"));
//   if (newEvent !== null) {
//   $("#eventChange").innerHTML = newEvent.text;
//   } else {
//     return;
//   }
// }



// Date and Time Function

function displayTime() {
    $("#currentDay").text(time.format("dddd, MMMM Do YYYY, H:mm:ss a"));               
    setTimeout(displayTime, 1000);
    ;
}

$(document).ready(function() {
    displayTime();
});

console.log(hours);


if (hours==="9") {
    hour9.addClass ("present")}
else {
    hour9.addClass ("past");
};

if (hours==="10") {
    hour10.addClass ("present")}
else if (hours < "10") {
    hour10.addClass ("future")
}
else (hours === "11","12","1","2","3","4","5") 
    hour10.addClass ("past");


if (hours==="11") {
    hour11.addClass ("present")}
else if (hours < "11") {
    hour11.addClass ("future")
}
else (hours === "12","1","2","3","4","5") 
    hour11.addClass ("past");

if (hours==="12") {
    hour12.addClass ("present")}
else if (hours < "12") {
    hour12.addClass ("future")
}
else (hours === "1","2","3","4","5") 
    hour12.addClass ("past");

if (hours==="1") {
    hour1.addClass ("present")}
else if (hours = "9","10","11","12") {
    hour1.addClass ("future")
}
else (hours === "2","3","4","5") 
    hour1.addClass ("past");   

if (hours==="2") {
    hour2.addClass ("present")}
else if (hours === "9","10","11","12","1") {
    hour2.addClass ("future")
}
else (hours === "3","4","5") 
    hour2.addClass ("past");

if (hours==="3") {
    hour3.addClass ("present")}
else if (hours === "9","10","11","12","1","2") {
    hour3.addClass ("future")
}
else (hours === "4","5") 
    hour3.addClass ("past");

if (hours==="4") {
    hour4.addClass ("present")}
else if (hours === "9","10","11","12","1","2","3") {
    hour4.addClass ("future")
}
else (hours === "5") 
    hour4.addClass ("past");

if (hours==="5") {
    hour5.addClass ("present")}
else  
    hour5.addClass ("future");








