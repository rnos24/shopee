var username = sessionStorage.getItem("username");
var usernameDisplay = document.getElementById("usernameDisplay");

if (username) {
  usernameDisplay.textContent = username;

  var dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");

  var signOutLink = document.createElement("a");
  signOutLink.textContent = "Sign Out";
  signOutLink.href = "#";
  signOutLink.addEventListener("click", function (event) {
    event.preventDefault();

    sessionStorage.removeItem("username");

    sessionStorage.removeItem("isLoggedIn");

    window.location.href = "Login.html";
  });

  dropdownContent.appendChild(signOutLink);
  usernameDisplay.appendChild(dropdownContent);

  usernameDisplay.addEventListener("click", function () {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  });
} else {

  window.location.href = "Login.html";
}
