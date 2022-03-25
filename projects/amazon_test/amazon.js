const tabs = document.querySelectorAll(".tab");
const word = document.querySelector(".word");
const h3 = document.querySelector("h3");

const greeting = {
  eng: "Hello World",
  fr: "Fefe dgdasf",
  ger: "Gfeaf Wdfgg",
};

tabs.forEach((tab, idx) => {
  tab.addEventListener("click", (e) => {
    removeClass();
    const id = e.target.id;
    if (id == "eng") {
      tabs[idx].classList.add("selected");
      h3.innerText = `${greeting.eng}`;
    } else if (id == "fr") {
      tabs[idx].classList.add("selected");
      h3.innerText = `${greeting.fr}`;
    } else {
      tabs[idx].classList.add("selected");
      h3.innerText = `${greeting.ger}`;
    }
  });
});

function removeClass() {
  tabs.forEach((e) => {
    e.classList.remove("selected");
  });
}
