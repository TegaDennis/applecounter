
// Set the target date for the countdown
const targetDate = new Date('march 9, 2024 23:59:59').getTime();

// Update the countdown every second
setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("Hours").innerHTML = hours ;
  document.getElementById("Minutes").innerHTML = minutes ;
  document.getElementById("Seconds").innerHTML = seconds ;
}, 1000);