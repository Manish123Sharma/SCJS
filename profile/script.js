// Write your script here
let fName = document.querySelector("#fname");
let lName = document.querySelector("#lname");
let oldPassword = document.querySelector("#opassword");
let newPassword = document.querySelector("#npassword");
let cnPassword = document.querySelector("#cnpassword");
let updateProfile = document.querySelector("#update");
let currntUser = JSON.parse(localStorage.getItem('loggedInUser'));
let checkbox = document.querySelector("#updatePassword");
let emailID = document.querySelector("#email");
let allUsers = JSON.parse(localStorage.getItem('users'));
console.log("All Users:", allUsers);
let crntdetail = [];
console.log("Current User:", currntUser);
if (!currntUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login.html";
} else {
    let id = currntUser.id;
    console.log("User ID:", id);
    if (!allUsers) {
        alert("No users found in local storage!!!");
    } else {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].id === id) {
                console.log("User found:", allUsers[i]);
                crntdetail = allUsers[i];
                fName.value = allUsers[i].fname;
                lName.value = allUsers[i].lname;
                emailID.value = allUsers[i].email;
            }
        }
        console.log("Current Details:", crntdetail);
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                oldPassword.style.display = "block";
                newPassword.style.display = "block";
                cnPassword.style.display = "block";
            } else {
                oldPassword.style.display = "none";
                newPassword.style.display = "none";
                cnPassword.style.display = "none";
            }
        });
        oldPassword.addEventListener('blur', () => {
            if (oldPassword.value !== crntdetail.password) {
                alert("Old password is incorrect!");
                oldPassword.value = "";
            }
        });
        emailID.addEventListener('blur', () => {
            let filteredUsers = allUsers.filter((user) => user.email === emailID.value);
            if (filteredUsers.length > 0) {
                alert("User already exists!!!");
                emailID.value = crntdetail.email;
            }
        });
    }
}

updateProfile.addEventListener('click', (e) => {
    e.preventDefault();
    if (fName.value === "" || lName.value === "") {
        alert("Please fill in all fields!");
    }
    if (checkbox.checked) {
        if (oldPassword.value === "" || newPassword.value === "" || cnPassword.value === "") {
            alert("Please fill in all password fields!");
        }
        if (newPassword.value !== cnPassword.value) {
            alert("New password and confirm password do not match!");
            return;
        }
        let filteredUsers = allUsers.filter((user) => user.email === emailID.value);
        if (filteredUsers.length > 0) {
            alert("User already exists!!!");
            emailID.value = crntdetail.email;
        }
    }
    for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].id === currntUser.id) {
            allUsers[i] = {
                ...allUsers[i],
                fname: fName.value,
                lname: lName.value,
                email: emailID.value,
                password: checkbox.checked ? newPassword.value : allUsers[i].password,
                updatedAT: new Date(),
            };
            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(allUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(allUsers.find(u => u.id === currntUser.id)));
    console.log("Updated User:", allUsers.find(u => u.id === currntUser.id));
    alert("Profile updated successfully!");
});