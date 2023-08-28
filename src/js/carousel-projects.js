const carouselProjects = document.getElementsByClassName("carousel-projects")[0]

const leftButtonProjects = document.getElementsByClassName(
  "left-button-projects"
)[0]
const leftArrowProjects = document.getElementById("left-arrow-projects")

const rightButtonProjects = document.getElementsByClassName(
  "right-button-projects"
)[0]
const rightArrowProjects = document.getElementById("right-arrow-projects")

let marginLeftProjects



window.addEventListener(`resize`, () => {
  carouselProjects.style.marginLeft = `0px`
  carouselTestimonials.style.marginLeft = marginLeftTestimonials
})

rightButtonProjects.addEventListener("click", () => {
  let windowWidth = window.innerWidth
  let carouselWidth = carouselProjects.offsetWidth
  marginLeftProjects = parseInt(
    window.getComputedStyle(carouselProjects).getPropertyValue("margin-left")
  )

  let maxCarouselWidth

  if (windowWidth >= 400) {
    maxCarouselWidth = 1920
  } else {
    maxCarouselWidth = 1170
  }

  let marginLeft = marginLeftProjects - 100 + "px"

  let disableRightButton = rightButtonProjects.classList.length === 3
  console.log(carouselWidth - maxCarouselWidth)
  if (carouselWidth - maxCarouselWidth < 0 && !disableRightButton) {
    carouselProjects.style.marginLeft = marginLeft

    leftButtonProjects.classList.remove("disable")
    leftArrowProjects.classList.remove("disable")
  }

  console.log(carouselWidth - maxCarouselWidth)

  if (carouselWidth - maxCarouselWidth >= -100 && !disableRightButton) {
    marginLeft = parseInt(marginLeft)
    marginLeft += 100 + carouselWidth - maxCarouselWidth
    marginLeft += "px"

    carouselProjects.style.marginLeft = marginLeft

    rightButtonProjects.classList.add("disable")
    rightArrowProjects.classList.add("disable")
  }
})

leftButtonProjects.addEventListener("click", () => {
  let windowWidth = window.innerWidth
  let carouselWidth = carouselProjects.offsetWidth
  let marginLeftProjects = parseInt(
    window.getComputedStyle(carouselProjects).getPropertyValue("margin-left")
  )

  let maxCarouselWidth

  if (windowWidth >= 400) {
    maxCarouselWidth = 1920
  } else {
    maxCarouselWidth = 1170
  }

  let marginLeft = marginLeftProjects + 100 + "px"

  let disableLeftButton = leftButtonProjects.classList.length === 3

  if (marginLeftProjects < 0 && !disableLeftButton) {
    console.log(carouselWidth - maxCarouselWidth)
    carouselProjects.style.marginLeft = marginLeft

    rightButtonProjects.classList.remove("disable")
    rightArrowProjects.classList.remove("disable")
  }

  marginLeftProjects = parseInt(
    window.getComputedStyle(carouselProjects).getPropertyValue("margin-left")
  )

  if (marginLeftProjects  > 0) {
    carouselProjects.style.marginLeft = `0px`

    leftButtonProjects.classList.add("disable")
    leftArrowProjects.classList.add("disable")
  } else {
    leftButtonProjects.classList.remove("disable")
    leftArrowProjects.classList.remove("disable")
  }

  // if (carouselWidth - maxCarouselWidth < 0 && !disableRightButton) {

  //   console.log(carouselWidth - maxCarouselWidth)
  //   // carouselProjects.style.marginLeft = marginLeft
  // }

  // if (carouselWidth - maxCarouselWidth >= -100 && !disableRightButton) {

  //   console.log(carouselWidth - maxCarouselWidth)

  //   // marginLeft = parseInt(marginLeft)
  //   // marginLeft += 100 + carouselWidth - maxCarouselWidth
  //   // marginLeft += "px"

  //   // carouselProjects.style.marginLeft = marginLeft

  //   // rightButtonProjects.classList.add("disable")
  //   // rightArrowProjects.classList.add("disable")

  //   // leftButtonProjects.classList.remove("disable")
  //   // leftArrowProjects.classList.remove("disable")
  // }
})

// leftButtonProjects.addEventListener("click", () => {
//   windowWidth = window.innerWidth
//   carouselWidth = carouselProjects.offsetWidth

//   let marginLeft = 0
//   console.log("🚀 ~ file: carousel-projects.js:37 ~ leftButtonProjects.addEventListener ~ marginLeft:", marginLeft)

//   let disableLeftButton = leftButtonProjects.classList.length === 3

//   console.log(carouselWidth)

//   if (carouselWidth < 1920 && !disableLeftButton) {

//     console.log(disableLeftButton)

//     carouselProjects.style.marginLeft = marginLeft

//     leftButtonProjects.classList.add("disable")
//     leftArrowProjects.classList.add("disable")

//     rightButtonProjects.classList.remove("disable")
//     rightArrowProjects.classList.remove("disable")
//   }
// })
