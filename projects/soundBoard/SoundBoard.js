const sounds = ["thunderStrike", "clearAlarm", "blop", "funnyBoyLol", "pling"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const currSound = document.getElementById(sound);

    currSound.pause();
    currSound.currentTime = 0;
  });
}
