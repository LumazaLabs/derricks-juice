const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menu-btn");
const exitBtn = document.querySelector("#exit-btn");
const subMenu = document.querySelector("#sub-menu");
const subMenu1 = document.querySelector("#sub-menu-1");
const subMenu2 = document.querySelector("#sub-menu-2");
const subMenu3 = document.querySelector("#sub-menu-3");
const tableBtn = document.querySelectorAll(".table-btn");
const textSection = document.querySelectorAll(".nutritional-table");
const chevron = document.querySelectorAll(".chevron");

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

for (let i = 0; i < tableBtn.length; i++) {
  tableBtn[i].addEventListener("click", () => {
    if (textSection[i].classList.contains("hidden")) {
      textSection[i].classList.remove("hidden");
      chevron[i].classList.add("rotate-180");
    } else if (!textSection[i].classList.contains("hidden")) {
      textSection[i].classList.add("hidden");
      chevron[i].classList.remove("rotate-180");
    }
  });
}
