// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let cpass = document.querySelector("#cpassword");
let signup = document.querySelector("#signup");

let error = document.querySelector("#error");
error.style.color = "red";

signup.addEventListener('click', (e) => {
    if (fname.value === "" || lname.value === "" || email.value === "" || pass.value === "" || cpass.value === "") {
        error.textContent = "Please fill all fields!!!";
        alert("Please fill all fields!!!");
    } else if (pass.value !== cpass.value) {
        error.textContent = "Passwords do not match!!!";
        alert("Passwords do not match!!!");
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        console.log(users);
        let filteredUsers = users.filter((user) => user.email === email.value);
        if (filteredUsers.length > 0) {
            error.textContent = "User already exists!!!";
            alert("User already exists!!!");
        } else {
            users.push({
                fname: fname.value,
                lname: lname.value,
                email: email.value,
                password: pass.value,
                createdAT: new Date(),
                id: Math.floor(1000 + Math.random() * 9000),
            });

            localStorage.setItem("users", JSON.stringify(users));
            alert("User registered successfully!!!");
            window.location.href = '/Projects/SCJS/shop/index.html'
            // error.textContent = "";
            // fname.value = "";
            // lname.value = "";
            // email.value = "";
            // pass.value = "";
            // cpass.value = "";
        }
    }
});