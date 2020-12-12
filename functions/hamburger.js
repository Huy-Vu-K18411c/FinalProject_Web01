function navSlide() {
  const burger = document.getElementById("hamburger");
  const navbar = document.querySelector("navbar");
  burger.addEventListener("click", () => {
    navbar.classList.add("navbar-active");
  });
}

document.onload = navSlide;
