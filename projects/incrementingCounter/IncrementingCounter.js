const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target"); //Number == parserInt == '+'
    // console.log(typeof target, target);
    const c = +counter.innerText;

    const increment = target / 200;
    // console.log(increment);

    if (c < target) {
      //Math.ceil: up ; Math.floor: down ; Math.round: half & half up and down
      counter.innerText = `${Math.ceil(c + increment)}`;
      //   updateCounter();
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
