document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash-screen");
  const main = document.getElementById("main");

  // Check if splash has already been shown
  if (localStorage.getItem("splashShown")) {
    // Skip splash and show main immediately
    splash.style.display = "none";
    main.style.display = "block";
  } else {
    // Wait 3 seconds, then hide splash
    setTimeout(() => {
      splash.style.display = "none";
      main.style.display = "block";
      localStorage.setItem("splashShown", "true");
    }, 2000);
  }

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

document.addEventListener("DOMContentLoaded", () => {
  const loginbtn = document.getElementById("loginbtn");
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const errorMsg = document.getElementById("generalError");
  const login = document.getElementById("login");
  const main1 = document.getElementById("main1");
  const main2 = document.getElementById("main2");
  const register = document.getElementById("register");

  const signout = document.getElementById("signout");
  const signinsigup = document.getElementById("signinsigup");
  const gotosignin = document.getElementById("gotosignin");
  const gotosignin2 = document.getElementById("gotosignin2");
  const linkb = document.getElementById("linkb");
  const back = document.getElementById("back");

  loginbtn.addEventListener("click", function (e) {
    e.preventDefault();

    errorMsg.textContent = ""; // clear previous error
    errorMsg.style.color = "red"; // default to red in case of error

    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
    const isPasswordValid = passwordVal.length >= 6;

    if (!isEmailValid || !isPasswordValid) {
      errorMsg.textContent = "Invalid email or password.";
      return;
    }

    // If valid
    errorMsg.textContent = "LogIn Successful";
    errorMsg.style.color = "green";

    // Optional: clear success message after 2 seconds
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 2000);

    setTimeout(() => {
      errorMsg.textContent = "";
      login.style.display = "none";
      main1.style.display = "block";
      main2.style.display = "none";
      register.style.display = "none";
    }, 1000);
  });

  signout.addEventListener("click", function (e) {
    e.preventDefault();
    login.style.display = "none";
    main1.style.display = "none";
    register.style.display = "none";
    main2.style.display = "block";
  });

  signinsigup.addEventListener("click", function (e) {
    e.preventDefault();
    login.style.display = "block";
    main1.style.display = "none";
    main2.style.display = "none";
    register.style.display = "none";
  });

  gotosignin.addEventListener("click", function (e) {
    e.preventDefault();
    login.style.display = "block";
    main1.style.display = "none";
    main2.style.display = "none";
    register.style.display = "none";
  });

  gotosignin2.addEventListener("click", function (e) {
    e.preventDefault();
    login.style.display = "block";
    main1.style.display = "none";
    main2.style.display = "none";
    register.style.display = "none";
  });

  //not done
  linkb.addEventListener("click", function (e) {
    e.preventDefault();
    register.style.display = "block";
    login.style.display = "none";
    main1.style.display = "none";
    main2.style.display = "none";
  });
  back.addEventListener("click", function (e) {
    e.preventDefault();
    register.style.display = "none";
    login.style.display = "none";
    main1.style.display = "none";
    main2.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const edit = document.getElementById("edit");
  const footer = document.getElementById("footer");
  const Delete = document.getElementById("Delete");

  edit.addEventListener("click", function (e) {
    e.preventDefault();
    footer.style.display = "block";
  });
  Delete.addEventListener("click", function (e) {
    e.preventDefault();
    footer.style.display = "none";
  });
});
