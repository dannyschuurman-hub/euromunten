"use strict";

document.querySelectorAll(".quiz").forEach((quiz) => {
  const options = quiz.querySelector(".quiz-options");
  const buttons = options.querySelectorAll("button");
  const feedback = quiz.querySelector(".quiz-feedback");
  const details = quiz.querySelector("details");

  options.addEventListener("click", (event) => {
    const choice = event.target.closest("button[data-choice]");
    if (!choice) return;
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button === choice));
    });
    details.open = true;
    feedback.textContent = choice.dataset.choice === quiz.dataset.answer
      ? quiz.dataset.correct
      : quiz.dataset.incorrect;
  });

  options.hidden = false;
});
