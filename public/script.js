const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menu-btn");
const exitBtn = document.querySelector("#exit-btn");
const subMenu = document.querySelector("#sub-menu");
const subMenu1 = document.querySelector("#sub-menu-1");
const subMenu2 = document.querySelector("#sub-menu-2");
const subMenu3 = document.querySelector("#sub-menu-3");

menuButton.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex-col");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex-col");
    phoneMenu.classList.add("hidden");
  }
});

subMenu.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex-col");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex-col");
    phoneMenu.classList.add("hidden");
  }
});

subMenu1.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex-col");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex-col");
    phoneMenu.classList.add("hidden");
  }
});

subMenu2.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex-col");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex-col");
    phoneMenu.classList.add("hidden");
  }
});

subMenu3.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex-col");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex-col");
    phoneMenu.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (!phoneMenu.classList.contains("hidden") && e.key == "Escape") {
    phoneMenu.classList.remove("flex");
    phoneMenu.classList.add("hidden");
  }
});

exitBtn.addEventListener("click", function () {
  phoneMenu.classList.remove("flex");
  phoneMenu.classList.add("hidden");
});

const today = new Date();
const year = today.getFullYear();
document.getElementById("year").textContent = year;
