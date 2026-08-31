// FORM
const form = document.getElementById("userForm")

// User Input
const userInput = document.getElementById("inputUser")

// Button
const searchBtn = document.getElementById("finduserBtn")

// Error Message 
const showError = document.getElementById("errorMessage")

// Loading
const loading = document.getElementById("loading")

const nameUser = document.getElementById("name")
const bio = document.getElementById("bio")
const country = document.getElementById("country")
const email = document.getElementById("email")
const userName = document.getElementById("userName")
const profileIcon = document.getElementById("profileIcon")


form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const input = userInput.value.trim()
    if(input === "") {
      alert(showError.textContent = "Invalid search")
        return
    } try {
        showError.textContent = ""
        loading.textContent = "Loading..."

        const url = `https://api.github.com/users/${input}`
        console.log(userName)

        const response = await fetch(url)
        console.log(response)

        if(!response.ok) {
            throw new Error ("User not found")
        }
        const userData = await response.json()
        console.log(userData)

        profileIcon.src = `https://avatars.githubusercontent.com/u/313084849?v=4${userData.avatar_url}`

        nameUser.textContent = "Name: " + userData.name
        bio.textContent = "Bio: " + userData.bio

        country.textContent = "Country: " + userData.location

        userName.textContent = "UserName: " +"@" + userData.login

        email.textContent = "Email: " + userData.email

        


     loading.textContent = ""
    }catch(error) {
        loading.textContent = ""
        showError.textContent = error.message
    }
})