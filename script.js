// FORM
const form = document.getElementById("userForm");

// User Input
const userInput = document.getElementById("inputUser");

// Button
const searchBtn = document.getElementById("finduserBtn");

// Error Message
const showError = document.getElementById("errorMessage");

// Loading
const searching = document.getElementById("searching");

const nameUser = document.getElementById("name");
const bio = document.getElementById("bio");
const country = document.getElementById("country");
const email = document.getElementById("email");
const userName = document.getElementById("userName");
const profileIcon = document.getElementById("profileIcon");


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const input = userInput.value.trim();
  if (input === "") {
    showError.textContent = "Invalid search";
    showError.style.marginTop = "5px";
    showError.style.color = "red";
    return;
  }
  try {
    showError.textContent = "";
    searching.textContent = "Searching...";
    searching.style.marginTop = "5px";

    const url = `https://api.github.com/users/${input}`;
    console.log(url);

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      throw new Error("User not found");
    }
    const userData = await response.json();
    console.log(userData);

    profileIcon.src = `https://avatars.githubusercontent.com/u/313084849?v=4${userData.avatar_url}`;

    nameUser.innerHTML = "<strong>Name:</strong> " + userData.name;

    bio.innerHTML = "<strong>Bio:</strong> " + userData.bio;

    country.innerHTML = "<strong>Country:</strong> " + userData.location;

    userName.innerHTML = "<strong>UserName:</strong> " + "@" + userData.login;

    email.innerHTML = "<strong>Email:</strong>: " + userData.email;

    searching.textContent = "";
  } catch (error) {
    searching.textContent = "";
    showError.textContent = error.message;
  }
});
