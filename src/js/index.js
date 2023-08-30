const pageAboutUsContent =
  document.getElementsByClassName("content-container")[0]

const pageAboutUsClients = document.getElementsByClassName("clients")[0]

// const pageHomeText = document.getElementsByClassName("home-text-container")[0]

window.addEventListener(`scroll`, () => {
  showHideGoToTop()
  if (window.scrollY >= 400) {
    pageAboutUsContent.classList.add("about-us-animation")
    pageAboutUsClients.classList.add("clients-animation")
  }
})

function showHideGoToTop() {
  if (window.scrollY <= 0) {
    $("#go-to-top").fadeOut(500)
  } else {
    $("#go-to-top").fadeIn(500)
  }
}

$(document).ready(function () {
  showHideGoToTop()

  $(".menu-page li a").click(function (e) {
    e.preventDefault()
    let id = $(this).prop("hash")
    let targetOffset = $(id).offset().top

    $("html, body").animate({ scrollTop: targetOffset }, 500)
  })

  // window.addEventListener(`scroll`, () => {
  //   showHideGoToTop()
  // })

  $("#go-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500)
  })
})
