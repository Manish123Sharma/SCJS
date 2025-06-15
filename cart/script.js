let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
// let item_price = [];
// let item_title = [];
let products = document.querySelector('.products');
let checkout_items = document.querySelector('.checkout_items');
let total = document.querySelector('.total');
let checkout_btn = document.querySelector('.checkout-btn');
let total_price = 0;

if (!currentUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login/login.html";
} else {
    login_a.style.display = 'none';
    signup_a.style.display = 'none';

    function renderCart() {
        products.innerHTML = '';
        checkout_items.innerHTML = '';
        total.innerHTML = '';
        // item_price = [];
        // item_title = [];

        let cart_data = JSON.parse(localStorage.getItem('cart')) || [];

        cart_data.forEach((item, index) => {
            products.innerHTML += `
                <div class="product" data-index="${index}">
                    <img src="${item.image}" alt="${item.title}" />
                    <div class="product-content">
                        <p>Title : ${item.title}</p>
                        <p>Price : $${item.price}</p>
                    </div>
                    <button class="remove-btn">Remove From Cart</button>
                </div>
            `;

            checkout_items.innerHTML += `
                <li>${item.title} <span>$${item.price}</span></li>
            `;

            // item_price.push(item.price);
            // item_title.push(item.title);
            total_price += item.price;
        });

        total.innerHTML = `
            <strong>Total</strong>
            <span>$${total_price.toFixed(2)}</span>
        `;

        attachRemoveHandlers();
    }

    function attachRemoveHandlers() {
        let removeButtons = document.querySelectorAll('.remove-btn');

        removeButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                let cart_data = JSON.parse(localStorage.getItem('cart')) || [];
                cart_data.splice(index, 1); // Remove the item at index
                localStorage.setItem('cart', JSON.stringify(cart_data));
                renderCart(); // Re-render updated cart
            });
        });
    }

    checkout_btn.addEventListener('click', () => {
        console.log('Checkout CLicked');
        // localStorage.setItem('AmountPay', total_price);
        let options = {
            key: "rzp_test_PpeiXeXlrb88Lu", // Enter the Key ID generated from the Dashboard
            amount: total_price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "USD",
            name: "MyShop Checkout",
            description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            theme: {
                color: "#000",
            },
            image:
                "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
        };

        let rzpy1 = new Razorpay(options);
        rzpy1.open();
        // clear mycart - localStorage
        e.preventDefault();
    });

    renderCart();
}
