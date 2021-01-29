const btnAnswer = document.querySelectorAll(".accordian__btn");

btnAnswer.forEach((btn) =>
 btn.addEventListener("click", () => {
  if (btn.parentNode.classList.contains("active")) {
   btn.parentNode.classList.toggle("active");
  } else {
   btnAnswer.forEach((btn) => btn.parentNode.classList.remove("active"));
   btn.parentNode.classList.add("active");
  }
 })
);
