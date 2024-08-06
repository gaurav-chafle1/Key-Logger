const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");

let isStarted = false;

startbtn.addEventListener('click', () => {
  if (!isStarted) {
    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
    isStarted = true;
  }
});

stopbtn.addEventListener('click', () => {
  if (isStarted) {
    document.removeEventListener('keydown', handleDown);
    document.removeEventListener('keyup', handleUp);
    logdiv.textContent = "";
    statediv.textContent = " ";
    isStarted = false;
  }
});

function handleDown(e) {
  logdiv.textContent = `Key ${e.key} pressed down`;
  statediv.textContent = "key is down";
}

function handleUp(e) {
  logdiv.textContent = `Key ${e.key} pressed up`;
  statediv.textContent = "key is Up";
}