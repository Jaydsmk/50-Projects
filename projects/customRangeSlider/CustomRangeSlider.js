const range = document.getElementById("range");
// const label = document.querySelector("label");

range.addEventListener("input", (e) => {
  const value = parseInt(e.target.value);
  //   console.log(value);

  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  //   console.log(range_width);

  const label_width = getComputedStyle(label).getPropertyValue("width");
  //   console.log(label_width);

  const num_range_width = parseInt(
    range_width.substring(0, range_width.length - 2)
  );
  //   console.log(range_width.length - 2);
  //   console.log(num_range_width);

  const num_label_width = parseInt(
    label_width.substring(0, label_width.length - 2)
  );
  //   console.log(label_width.length - 6);
  //   console.log(num_label_width);

  const max = parseInt(e.target.max);
  const min = parseInt(e.target.min);
  //   console.log(max, min);

  const left =
    value * (num_range_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);
  //   console.log(left);

  label.style.left = `${left}px`;

  label.innerHTML = value;

  //   label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
