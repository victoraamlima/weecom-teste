const carouselProjects = document.getElementsByClassName("carousel-projects")[0]

const leftButtonProjects = document.getElementsByClassName(
  "left-button-projects"
)[0]
const leftArrowProjects = document.getElementById(
  "left-arrow-projects"
)

const rightButtonProjects = document.getElementsByClassName(
  "right-button-projects"
)[0]
const rightArrowProjects = document.getElementById(
  "right-arrow-projects"
)

let windowWidth
let carouselWidth

rightButtonProjects.addEventListener("click", () => {
  windowWidth = window.innerWidth
  carouselWidth = carouselProjects.offsetWidth

  let marginLeft = carouselWidth - 1920 + "px"

  let disableRightButton = rightButtonProjects.classList.length === 3

  if (carouselWidth <= 1920 && !disableRightButton) {
    carouselProjects.style.marginLeft = marginLeft

    rightButtonProjects.classList.add("disable")
    rightArrowProjects.classList.add("disable")

    leftButtonProjects.classList.remove("disable")
    leftArrowProjects.classList.remove("disable")
  }
})

leftButtonProjects.addEventListener("click", () => {
  windowWidth = window.innerWidth
  carouselWidth = carouselProjects.offsetWidth

  let marginLeft = 0

  let disableLeftButton = leftButtonProjects.classList.length === 3

  if (carouselWidth <= 1920 && !disableLeftButton) {
    carouselProjects.style.marginLeft = marginLeft

    leftButtonProjects.classList.add("disable")
    leftArrowProjects.classList.add("disable")

    rightButtonProjects.classList.remove("disable")
    rightArrowProjects.classList.remove("disable")
  }
})
