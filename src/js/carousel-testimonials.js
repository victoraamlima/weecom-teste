const carouselTestimonials = document.getElementsByClassName(
  "carousel-testimonials"
)[0]

const leftButtonTestimonials = document.getElementsByClassName(
  "left-button-testimonials"
)[0]
const leftArrowTestimonials = document.getElementById("left-arrow-testimonials")

const rightButtonTestimonials = document.getElementsByClassName(
  "right-button-testimonials"
)[0]
const rightArrowTestimonials = document.getElementById(
  "right-arrow-testimonials"
)

let marginLeftTestimonials

if (window.innerWidth >= 900) {
  marginLeftTestimonials = "162px"
} else {
  marginLeftTestimonials = "0"
}

rightButtonTestimonials.addEventListener("click", () => {
  let windowWidth = window.innerWidth
  let carouselWidth = carouselTestimonials.offsetWidth

  let maxCarouselWidth

  if (windowWidth >= 900) {
    maxCarouselWidth = 1758
  } else {
    // maxCarouselWidth = 964
    maxCarouselWidth = 980
  }

  let marginLeftTestimonials = parseInt(
    window
      .getComputedStyle(carouselTestimonials)
      .getPropertyValue("margin-left")
  )

  let marginLeft = marginLeftTestimonials - 100 + "px"

  let disableRightButton = rightButtonTestimonials.classList.length === 3

  console.log(carouselWidth - maxCarouselWidth)

  // if (carouselWidth - maxCarouselWidth <= -100 && !disableRightButton) {

  //   carouselTestimonials.style.marginLeft = marginLeft

  //   leftButtonTestimonials.classList.remove("disable")
  //   leftArrowTestimonials.classList.remove("disable")
  // }
  if (carouselWidth - maxCarouselWidth <= 0 && !disableRightButton) {
    carouselTestimonials.style.marginLeft = marginLeft

    leftButtonTestimonials.classList.remove("disable")
    leftArrowTestimonials.classList.remove("disable")
  }

  if (carouselWidth - maxCarouselWidth >= -100) {
    rightButtonTestimonials.classList.add("disable")
    rightArrowTestimonials.classList.add("disable")
  }
})

// leftButtonTestimonials.addEventListener("click", () => {
//   windowWidth = window.innerWidth
//   carouselWidth = carouselProjects.offsetWidth

//   let marginLeft = 0

//   let disableLeftButton = leftButtonTestimonials.classList.length === 3

//   if (carouselWidth <= 1920 && !disableLeftButton) {
//     carouselProjects.style.marginLeft = marginLeft

//     leftButtonTestimonials.classList.add("disable")
//     leftArrowTestimonials.classList.add("disable")

//     rightButtonTestimonials.classList.remove("disable")
//     rightArrowTestimonials.classList.remove("disable")
//   }
// })
