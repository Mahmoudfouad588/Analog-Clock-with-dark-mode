function start() {
  let ignite = setInterval(rotation, 1000);
}

function rotation() {
  let secs = document.getElementById("sec");
  let mins = document.getElementById("min");
  let hrs = document.getElementById("hr");
  let localTimeZone = new Date();
  let localSec = localTimeZone.getSeconds();
  let localMin = localTimeZone.getMinutes();
  let localHr = localTimeZone.getHours();

  let localSecDeg = (localSec / 60) * 360;
  let localMinDeg = (localMin / 60) * 360;
  let localHrDeg = (localHr / 12) * 360;
  secs.style.transform =
    "translate(0%, -50%) " + "rotate(" + localSecDeg + "deg)";
  mins.style.transform =
    "translate(0%, -50%) " + "rotate(" + localMinDeg + "deg)";
  hrs.style.transform =
    "translate(0%, -50%) " + "rotate(" + localHrDeg + "deg)";
}

rotation();
start();

let theBtn = document.getElementById("btn");
let theBtnBack = document.getElementById("dark-mode");
let theAcBtn = document.getElementById("btn-active");
let contBg = document.getElementById("container");
let theBody = document.querySelector("body");

function dark() {
  theBtn.classList.remove("btn");
  theBtn.classList.add("btn-active-active");
  theAcBtn.classList.remove("btn-active");
  theAcBtn.classList.add("btn-active-active");
  theBtnBack.style.background = "white";
  contBg.style.backgroundImage = "url(./dark.png)";
  theBody.style.backgroundImage =
    "linear-gradient(to bottom right, #636373, #000000)";
}

function light() {
  theBtn.classList.add("btn");
  theBtn.classList.remove("btn-active-active");
  theAcBtn.classList.remove("btn-active-active");
  theAcBtn.classList.add("btn-active");
  contBg.style.backgroundImage = "url(./light.png)";
  theBtnBack.style.background = "#636373";
  theBody.style.backgroundImage =
    "linear-gradient(to bottom right, #dbdcff, #babbd9)";
}
