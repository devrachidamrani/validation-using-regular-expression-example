const userNameField = document.querySelector('.username')
const message = document.querySelector('.message')

const usernamePattern = /[a-z][a-z0-9]{7,29}/i

userNameField.addEventListener('input', usernameValidation)

function usernameValidation() {
  if (usernamePattern.test(userNameField.value)) {
    message.textContent = showGood()
    message.classList.add('good')
  } else {
    message.textContent = showBad()
  }
}

function showGood() {
  return 'You are good to go!'
}

function showBad() {
  return 'Your username must begin with a letter, can only use alphanumeric characters, and must be between 8 to 30 characters'
}
