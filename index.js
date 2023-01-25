const burger = document.querySelector(".header__burger")
const links = document.querySelector(".header__links")

const toggleBurger = () => {
  links.classList.toggle('active');
  console.log("хуй")
}

burger.addEventListener("click",toggleBurger)