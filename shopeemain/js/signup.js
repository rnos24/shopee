var isLoggedIn = sessionStorage.getItem("isLoggedIn");
if (isLoggedIn) {
  window.location.href = "index.html";
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var newUsername = document.getElementById("newUsername").value;
  var newPassword = document.getElementById("newPassword").value;

  if (sessionStorage.getItem(newUsername) || newUsername === "CSELEC03") {
    document.getElementById("errorMessage").textContent = "Username already exists or is invalid.";
  } else {
   
    sessionStorage.setItem(newUsername, newPassword);
    window.location.href = "Login.html";
  }
});

let showPassword = document.getElementById('checkbox')

function showPass(){
  let password = document.getElementById('newPassword');
  if(password.type === 'password'){
    password.setAttribute('type','text');
    showPassword.classList.add('hide')    
  }
  else{
    password.setAttribute('type','password')
    showPassword.classList.remove('hide')    
  }
}