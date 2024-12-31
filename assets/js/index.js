/* global typingEffect */

document.addEventListener("DOMContentLoaded", () => {
  typingEffect(Array.from(document.querySelectorAll("[data-typing-effect]")), {
    speed: 40,
    delay: 200,
    reset: false
  }).then(() => document.querySelector("footer").removeAttribute("hidden"));
});
