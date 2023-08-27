$(document).ready(function () {
  $("#go-to-top").fadeOut(500)

  $(".menu li a").click(function (e) {
    e.preventDefault()
    let id = $(this).prop("hash")
    let targetOffset = $(id).offset().top

    $("html, body").animate({ scrollTop: targetOffset }, 500)
  })

  window.addEventListener(`scroll`, () => {
    if (window.scrollY <= 0) {
      $("#go-to-top").fadeOut(500)
    } else {
      $("#go-to-top").fadeIn(500)
    }
  })

  $("#go-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500)
  })
})
