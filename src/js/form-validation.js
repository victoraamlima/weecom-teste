const FormInputName = document.getElementById("form-name")
const invalidName = document.getElementsByClassName("invalid-name")

const FormInputEmail = document.getElementById("form-email")
const invalidEmail = document.getElementsByClassName("invalid-email")

const formNewsletter = document.getElementsByClassName("form-newsletter")
const formButtonSubmit = document.getElementsByClassName("button-submit")

formButtonSubmit[0].addEventListener("click", () => {
  let validForm = false

  if (FormInputName.value === "") {
    FormInputName.classList.add("invalid")
    invalidName[0].classList.add("show")
    validForm = false
  } else {
    FormInputName.classList.remove("invalid")
    invalidName[0].classList.remove("show")
    validForm = true
  }

  if (FormInputEmail.value === "") {
    FormInputEmail.classList.add("invalid")
    invalidEmail[0].classList.add("show")
    validForm = false
  } else {
    FormInputEmail.classList.remove("invalid")
    invalidEmail[0].classList.remove("show")
    validForm = true
  }

  if (validForm) {
    formNewsletter[0].submit()
  }
})

function openForm() {
  formNewsletter[0].classList.add("show")
}

function closeForm() {
  formNewsletter[0].classList.remove("show")
  FormInputName.classList.remove("invalid")
  invalidName[0].classList.remove("show")
  FormInputEmail.classList.remove("invalid")
  invalidEmail[0].classList.remove("show")

  FormInputName.value = ""
  FormInputEmail.value = ""
}
