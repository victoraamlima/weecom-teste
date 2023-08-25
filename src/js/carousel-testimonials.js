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

// console.log(window.getComputedStyle(carouselTestimonials).getPropertyValue("margin-left"))
// console.log(window.innerWidth)
// console.log(carouselTestimonials.offsetWidth)
// console.log(
//   window.innerWidth -
//     carouselTestimonials.offsetWidth -
//     parseInt(
//       window
//         .getComputedStyle(carouselTestimonials)
//         .getPropertyValue("margin-left")
//     )
// )

rightButtonTestimonials.addEventListener("click", () => {
  let windowWidth = window.innerWidth
  let carouselWidth = carouselTestimonials.offsetWidth

  let marginLeft = parseInt(
    window
      .getComputedStyle(carouselTestimonials)
      .getPropertyValue("margin-left")
  )
    console.log(marginLeft)

    marginLeft -= 1650 - carouselWidth

//   marginLeft -= windowWidth - carouselWidth - marginLeft + 15
//   marginLeft -= windowWidth - carouselWidth - marginLeft

  marginLeft += "px"

  let disableRightButton = rightButtonTestimonials.classList.length === 3

  //   console.log(marginLeft)
  //   console.log(carouselWidth)
  //   console.log(windowWidth - carouselWidth)

  if (carouselWidth < 1650 && !disableRightButton) {
    console.log(marginLeft)

    carouselTestimonials.style.marginLeft = marginLeft

    rightButtonTestimonials.classList.add("disable")
    rightArrowTestimonials.classList.add("disable")

    leftButtonTestimonials.classList.remove("disable")
    leftArrowTestimonials.classList.remove("disable")


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
