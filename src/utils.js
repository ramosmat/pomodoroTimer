// utils.js
const modalityButtons = document.querySelectorAll(".modality");

modalityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalityButtons.forEach((b) => b.classList.remove("active-button"));
    button.classList.add("active-button");
    document.title = button.innerText + " - Pomodoro Timer";
  });
});
