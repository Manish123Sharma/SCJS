let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!currentUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login.html";
} else {
    console.log("Current User:", currentUser);
    // const product = {
    //     id: 1,
    //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     price: 109.95,
    //     description:
    //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     category: "men's clothing",
    //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     rating: { rate: 3.9, count: 120 },
    // };
    // console.log("Product:", product);
    let colors = ['red', 'blue', 'green', 'yellow', 'black'];
    let sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    if (localStorage.getItem('products')) {
        console.log("Products already exist in localStorage.");
        let products = JSON.parse(localStorage.getItem('products'));
        console.log("Products:", products);
        let men = products.filter((item) => item.category == "men's clothing");
        console.log(men);
        let jewelery = products.filter((item) => item.category == "jewelery");
        console.log(jewelery);
        let electronics = products.filter((item) => item.category == "electronics");
        console.log(electronics);
        let women = products.filter((item) => item.category == "women's clothing");
        console.log(women);
    } else {
        fetch("https://fakestoreapi.com/products").then((response) => response.json()).then((data) => {
            console.log("Products:", data);
            let newData = data.map((item) => {
                return {
                    ...item,
                    colors: colors.slice(0, Math.floor(Math.random() * colors.length) + 1),
                    sizes: sizes.slice(0, Math.floor(Math.random() * sizes.length) + 1),
                };
            });
            console.log("New Products:", newData);
            localStorage.setItem('products', JSON.stringify(newData));
        });
    }
}