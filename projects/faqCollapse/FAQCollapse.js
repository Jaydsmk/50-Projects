const toggleBtn = document.querySelectorAll(".faq-toggle");

toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    // ParentNode is upper tag from me
    toggle.parentNode.classList.toggle("active");
  });
});
