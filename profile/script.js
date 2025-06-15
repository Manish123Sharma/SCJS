// DOM Elements
let fName = document.querySelector("#fname");
let lName = document.querySelector("#lname");
let oldPassword = document.querySelector("#oldPassword");
let newPassword = document.querySelector("#newPassword");
let confirmNewPassword = document.querySelector("#confirmNewPassword");
let saveInfoBtn = document.querySelector("#saveInfo");
let changePasswordBtn = document.querySelector("#changePassword");
let logoutBtn = document.querySelector("#logout");

// Fetch user data
let currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
let allUsers = JSON.parse(localStorage.getItem("users")) || [];

// Redirect if not logged in
if (!currentUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login/login.html";
} else {
    // Prefill profile info
    fName.value = currentUser.fname;
    lName.value = currentUser.lname;
}

// Save Profile Info
saveInfoBtn.addEventListener("click", () => {
    if (fName.value.trim() === "" || lName.value.trim() === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Update user in allUsers list
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].id === currentUser.id) {
            allUsers[i].fname = fName.value.trim();
            allUsers[i].lname = lName.value.trim();
            allUsers[i].updatedAt = new Date();
            break;
        }
    }

    // Update local storage
    localStorage.setItem("users", JSON.stringify(allUsers));
    const updatedUser = allUsers.find(user => user.id === currentUser.id);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    alert("Profile info updated successfully!");
});

// Change Password
changePasswordBtn.addEventListener("click", () => {
    if (
        oldPassword.value.trim() === "" ||
        newPassword.value.trim() === "" ||
        confirmNewPassword.value.trim() === ""
    ) {
        alert("Please fill in all password fields!");
        return;
    }

    // Check old password
    if (oldPassword.value !== currentUser.password) {
        alert("Old password is incorrect!");
        oldPassword.value = "";
        return;
    }

    // Confirm match
    if (newPassword.value !== confirmNewPassword.value) {
        alert("New password and confirm password do not match!");
        return;
    }

    // Update user password
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].id === currentUser.id) {
            allUsers[i].password = newPassword.value.trim();
            allUsers[i].updatedAt = new Date();
            break;
        }
    }

    // Update local storage
    localStorage.setItem("users", JSON.stringify(allUsers));
    const updatedUser = allUsers.find(user => user.id === currentUser.id);
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
    alert("Password changed successfully!");
});

// Logout Function
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "/Projects/SCJS/index.html";
});
