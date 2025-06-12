document.addEventListener("DOMContentLoaded", () => {
  // Wait 3 seconds, then hide splash
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 2000);

  document.getElementById("search").addEventListener("input", function () {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll("li, h1, p");

    items.forEach((item) => {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});
