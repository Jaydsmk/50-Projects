const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => {
  createNotification();
});

function createNotification(message = null, type = null) {
  //   console.log("123");
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMsg();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2500);
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
