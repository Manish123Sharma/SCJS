let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
let login_btn = document.querySelector('#login_btn');
let register_btn = document.querySelector('#register_btn');
// window.location.href = "/Projects/SCJS/login/login.html";



if(currentUser){
    window.location.href = "/Projects/SCJS/shop/index.html";
} else {
    login_btn.addEventListener('click', () => {
    window.location.href = "/Projects/SCJS/login/login.html";
});

register_btn.addEventListener('click', () => {
    window.location.href = "/Projects/SCJS/login/signup.html";
});
}