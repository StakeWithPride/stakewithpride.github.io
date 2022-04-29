function changeImage() {
  let rockets = document.querySelectorAll(".servermonitor");
  for (let rocket of rockets) {
    if (rocket.src.match("./img/server-monitors.webp")) {
      rocket.src = "./img/hoskymonitors.webp";
    } else {
      rocket.src = "./img/server-monitors.webp";
    }
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "p") {
    changeImage();
  }
});
