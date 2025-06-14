let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!currentUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login.html";
} else {
    console.log("Current User:", currentUser);
    if (localStorage.getItem('cart')) {
        let cart_data = JSON.parse(localStorage.getItem('cart'));
        console.log(cart_data);
    } else {
        console.log("Cart is empty");
    }
}