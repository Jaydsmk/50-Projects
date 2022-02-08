const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (
    e.target.classList.contains("rating") ||
    e.target.parentNode.classList.contains("rating")
  ) {
    // console.log(e.target);
    removeActive();
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");

    if (e.target.tagName.toLowerCase() === "img") {
      selectedRating = e.target.nextElementSibling.innerHTML;
      //   console.log(selectedRating);
    } else if (e.target.tagName.toLowerCase() === "small") {
      selectedRating = e.target.innerHTML;
      //   console.log(selectedRating);
    } else {
      selectedRating = e.target.lastElementChild.innerHTML;
      //   console.log(selectedRating);
    }
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br />
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
