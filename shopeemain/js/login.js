sessionStorage.setItem("CSELEC03", "webprog");

var isLoggedIn = sessionStorage.getItem("isLoggedIn");
if (isLoggedIn) {
  window.location.href = "index.html";
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (sessionStorage.getItem(username) === password) {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("isLoggedIn", true);
    window.location.href = "index.html";
  } else {
    var errorMessageElement = document.querySelector('.error-message');
    errorMessageElement.style.display = 'block';
    errorMessageElement.textContent = 'Invalid username or password';
  }
});

let showPassword = document.getElementById('checkbox')

function showPass() {
  var password = document.getElementById('password');
  if (password.type === 'password') {
    password.setAttribute('type', 'text');
    showPassword.classList.add('hide')
  }
  else {
    password.setAttribute('type', 'password')
    showPassword.classList.remove('hide')
  }
}