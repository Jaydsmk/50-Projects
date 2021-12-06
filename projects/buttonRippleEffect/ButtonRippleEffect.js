const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const x = e.clientX;
    const y = e.clientY;
    console.log(e);
    console.log(x, y);

    //http://megaton111.cafe24.com/2016/11/29/clientx-offsetx-pagex-screenx%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90/?ckattempt=1
    // offsetX: based on Event -> current button location, clientX: based on current viewport -> current cursor location .
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    console.log(buttonTop, buttonLeft);

    // the cursor exact location inside button.
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    // console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
