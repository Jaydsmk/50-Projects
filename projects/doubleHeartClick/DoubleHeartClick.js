const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timeClicked = 0;

loveMe.addEventListener("click", (e) => {
  //   console.log(123);
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    console.log(clickTime);
  } else {
    if (new Date().getTime() - clickTime < 700) {
      console.log(123);
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  console.log(xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerText = ++timeClicked;

  setTimeout(() => {
    heart.remove();
  }, 1000);
};
