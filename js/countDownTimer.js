let elrejt1 = document.querySelector("#elrejt1");
let elrejt2 = document.querySelector("#elrejt2");
let foDiv = document.querySelector(".foDiv")
let kep = document.createElement("img");
kep.src = "/img/sokboldogsagot.jpg";
kep.width = 120;
kep.style.margin = "25px";
kep.style.border = "solid 2px black";
kep.style.borderRadius = "10px";
kep.style.boxShadow = "2px 2px 10px black";

// Set the date we're counting down to
var countDownDate = new Date("Aug 15, 2020 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="wedding"
  document.getElementById("wedding").innerHTML = days + "n " + hours + "ó "
  + minutes + "p " + seconds + "mp ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    elrejt1.hidden = true
    elrejt2.hidden = true
    foDiv.appendChild(kep)
    document.getElementById("wedding").innerHTML = "Sok boldogságot!";
  }
}, 1000);