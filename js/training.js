document.addEventListener("DOMContentLoaded", () => {
    let counter = sessionStorage.getItem("counter") ? parseInt(sessionStorage.getItem("counter")) : 0;
    let toggle = false

    document.getElementById("counter").textContent = counter
    document.getElementById("message").textContent = toggle
      ? "Togli cera"
      : "Metti cera"

    setInterval(() => {
      counter++
      sessionStorage.setItem("counter", counter);
      document.getElementById("counter").textContent = counter;
      toggle = !toggle;
      document.getElementById("message").textContent = toggle
        ? "Togli cera"
        : "Metti cera";
    }, 1000);

    setInterval(() => {
      const miyagiImage = document.getElementById("miyagiImage");
      miyagiImage.style.display = "block"
      miyagiImage.style.animation = "fadeInOut 6s ease-in-out forwards"
      setTimeout(() => {
          miyagiImage.style.display = "none"
      }, 9000);
  }, 10000);
  });