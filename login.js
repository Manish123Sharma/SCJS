let login = document.querySelector("#login");
let loginemail = document.querySelector("#loginemail");
let loginpassword = document.querySelector("#loginpassword");
let error = document.querySelector("#error");
error.style.color = "red";

function generateToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

login.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Login button clicked");
    if (loginemail.value === "" || loginpassword.value === "") {
        error.textContent = "Please fill all fields!!!";
        alert("Please fill all fields!!!");
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        console.log(users);
        let filteredUsers = users.filter((user) => user.email === loginemail.value && user.password === loginpassword.value);
        console.log(filteredUsers);
        if (filteredUsers.length > 0) {
            let obj = filteredUsers[0];
            if (obj.email === loginemail.value && obj.password === loginpassword.value) {
                alert("Login successful!!!");
                window.location.href = "./profile/index.html";
                localStorage.setItem("loggedInUser", JSON.stringify({
                    ...obj,
                    token: generateToken(),
                }));
                error.textContent = "";
                loginemail.value = "";
                loginpassword.value = "";
            }
            // Redirect to another page or perform further actions
        } else {
            error.textContent = "Invalid email or password!!!";
            alert("Invalid email or password!!!");
        }
    }
});