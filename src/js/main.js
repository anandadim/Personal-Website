import Typed from "typed.js";
import confetti from "canvas-confetti";

new Typed("#heading", {
  strings: [
    "Dear folks",
    "I'm Dimas Ananda",
    "I'm a Gooner",
    "Let's create powerful tools",
  ],
  typeSpeed: 50,
  cursorChar: "__",
  loop: true,
  backSpeed: 60,
});

const form = document.getElementById("form");
form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const myCanvas = document.createElement("canvas");
    document.body.appendChild(myCanvas);
    confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });
    confetti({
      particleCount: 160,
      spread: 160,
      // any other options from the global
      // confetti function
    });
  }
});
