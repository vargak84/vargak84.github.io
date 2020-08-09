let elrejt1 = document.querySelector("#elrejt1");
let elrejt2 = document.querySelector("#elrejt2");

// Set the date we're counting down to
var countDownDate = new Date("Aug 9, 2020 06:59:00").getTime();

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
  document.getElementById("wedding").innerHTML = days + "nap " + hours + "óra "
  + minutes + "perc " + seconds + "másodperc ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    elrejt1.hidden = true
    elrejt2.hidden = true
    document.getElementById("wedding").innerHTML = "Sok boldogságot!";
  }
}, 1000);