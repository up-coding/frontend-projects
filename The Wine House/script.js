let counter = 0;

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    counter++;
  } else {
    counter--;
  }

  document.querySelector(`.section-${counter}`).style.left = "-100vw";

  console.log(counter);
});
