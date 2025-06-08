// let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
// let men_items = document.querySelector('#men_items');
// let women_items = document.querySelector('#women_items');
// let jewelery = document.querySelector('#jewellery');
// let electronics = document.querySelector('#electronics');


// if (!currentUser) {
//     alert("Please login first!!!");
//     window.location.href = "/Projects/SCJS/login.html";
// } else {
//     console.log("Current User:", currentUser);
//     // const product = {
//     //     id: 1,
//     //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     //     price: 109.95,
//     //     description:
//     //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     //     category: "men's clothing",
//     //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     //     rating: { rate: 3.9, count: 120 },
//     // };
//     // console.log("Product:", product);
//     let colors = ['red', 'blue', 'green', 'yellow', 'black'];
//     let sizes = ['S', 'M', 'L', 'XL', 'XXL'];
//     if (localStorage.getItem('products')) {
//         console.log("Products already exist in localStorage.");
//         let products = JSON.parse(localStorage.getItem('products'));
//         console.log("Products:", products);
//         let men = products.filter((item) => item.category == "men's clothing");
//         console.log(men);
//         let jewelery = products.filter((item) => item.category == "jewelery");
//         console.log(jewelery);
//         let electronics = products.filter((item) => item.category == "electronics");
//         console.log(electronics);
//         let women = products.filter((item) => item.category == "women's clothing");
//         console.log(women);
//         for (let item of men) {
//             let sizesHTML = item.sizes.join(','); // Create string like "S,M,L"
//             let colorsHTML = item.colors.map(color => `<div class="circle" style="background-color: ${color}"></div>`).join('');

//             men_items.innerHTML += `
//                 <div class="item">
//                     <img src="${item.image}" alt="Item" />
//                     <div class="info">
//                         <div class="row">
//                             <div class="price">$${item.price}</div>
//                             <div class="sized">${sizesHTML}</div>
//                         </div>
//                         <div class="colors">
//                             Colors:
//                             <div class="row">
//                                 ${colorsHTML}
//                             </div>
//                         </div>
//                         <div class="row">Rating: ${item.rating.rate}</div>
//                     </div>
//                     <button class="addBtn">Add to Cart</button>
//                 </div>
//             `;
//         }
//         for (let item of women) {
//             let sizesHTML = item.sizes.join(','); // Create string like "S,M,L"
//             let colorsHTML = item.colors.map(color => `<div class="circle" style="background-color: ${color}"></div>`).join('');
//             women_items.innerHTML += `
//                 <div class="item">
//                     <img src="${item.image}" alt="Item" />
//                     <div class="info">
//                         <div class="row">
//                             <div class="price">$${item.price}</div>
//                             <div class="sized">${sizesHTML}</div>
//                         </div>
//                         <div class="colors">
//                             Colors:
//                             <div class="row">
//                                 ${colorsHTML}
//                             </div>
//                         </div>
//                         <div class="row">Rating: ${item.rating.rate}</div>
//                     </div>
//                     <button class="addBtn">Add to Cart</button>
//                 </div>
//             `;
//         }

//     } else {
//         fetch("https://fakestoreapi.com/products").then((response) => response.json()).then((data) => {
//             console.log("Products:", data);
//             let newData = data.map((item) => {
//                 return {
//                     ...item,
//                     colors: colors.slice(0, Math.floor(Math.random() * colors.length) + 1),
//                     sizes: sizes.slice(0, Math.floor(Math.random() * sizes.length) + 1),
//                 };
//             });
//             console.log("New Products:", newData);
//             localStorage.setItem('products', JSON.stringify(newData));
//         });
//     }
// }


let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
let men_items = document.querySelector('#men_items');
let women_items = document.querySelector('#women_items');
let jewelery_items = document.querySelector('#jewellery');
let electronics_items = document.querySelector('#electronics');

if (!currentUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login.html";
} else {
    console.log("Current User:", currentUser);

    let colors = ['red', 'blue', 'green', 'yellow', 'black'];
    let sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    if (localStorage.getItem('products')) {
        console.log("Products already exist in localStorage.");
        let products = JSON.parse(localStorage.getItem('products'));
        console.log("Products:", products);

        let men = products.filter((item) => item.category === "men's clothing");
        console.log("Men", men);
        let women = products.filter((item) => item.category === "women's clothing");
        console.log("Women", women);
        let jewelery = products.filter((item) => item.category === "jewelery");
        console.log("Jewelery:", jewelery);
        let electronics = products.filter((item) => item.category === "electronics");
        console.log("Electronics:", electronics);

        // Render men's clothing
        for (let item of men) {
            let sizesHTML = item.sizes?.join(',') || 'N/A';
            let colorsHTML = item.colors?.map(color => `<div class="circle" style="background-color: ${color}"></div>`).join('') || '';

            men_items.innerHTML += `
                <div class="item">
                    <img src="${item.image}" alt="Item" />
                    <div class="info">
                        <div class="row">
                            <div class="price">$${item.price}</div>
                            <div class="sized">${sizesHTML}</div>
                        </div>
                        <div class="colors">
                            Colors:
                            <div class="row">${colorsHTML}</div>
                        </div>
                        <div class="row">Rating: ${item.rating.rate}</div>
                    </div>
                    <button class="addBtn">Add to Cart</button>
                </div>
            `;
        }

        // Render women's clothing
        for (let item of women) {
            let sizesHTML = item.sizes?.join(',') || 'N/A';
            let colorsHTML = item.colors?.map(color => `<div class="circle" style="background-color: ${color}"></div>`).join('') || '';

            women_items.innerHTML += `
                <div class="item">
                    <img src="${item.image}" alt="Item" />
                    <div class="info">
                        <div class="row">
                            <div class="price">$${item.price}</div>
                            <div class="sized">${sizesHTML}</div>
                        </div>
                        <div class="colors">
                            Colors:
                            <div class="row">${colorsHTML}</div>
                        </div>
                        <div class="row">Rating: ${item.rating.rate}</div>
                    </div>
                    <button class="addBtn">Add to Cart</button>
                </div>
            `;
        }

        // Render jewelery
        for (let item of jewelery) {
            jewelery_items.innerHTML += `
                <div class="item">
                    <img src="${item.image}" alt="Item" />
                    <div class="info">
                        <div class="title">${item.title}</div>
                        <div class="price">$${item.price}</div>
                        <div class="row">Rating: ${item.rating.rate}</div>
                    </div>
                    <button class="addBtn">Add to Cart</button>
                </div>
            `;
        }

        // Render electronics
        for (let item of electronics) {
            electronics_items.innerHTML += `
                <div class="item">
                    <img src="${item.image}" alt="Item" />
                    <div class="info">
                        <div class="title">${item.title}</div>
                        <div class="price">$${item.price}</div>
                        <div class="row">Rating: ${item.rating.rate}</div>
                    </div>
                    <button class="addBtn">Add to Cart</button>
                </div>
            `;
        }

    } else {
        // Fetch and enhance product data
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log("Products:", data);

                let newData = data.map((item) => {
                    if (item.category === "men's clothing" || item.category === "women's clothing") {
                        return {
                            ...item,
                            colors: colors.slice(0, Math.floor(Math.random() * colors.length) + 1),
                            sizes: sizes.slice(0, Math.floor(Math.random() * sizes.length) + 1),
                        };
                    } else {
                        // Omit colors and sizes completely
                        let { colors, sizes, ...rest } = item;
                        return rest;
                    }
                });

                console.log("New Products:", newData);
                localStorage.setItem('products', JSON.stringify(newData));
                location.reload(); // Reload to trigger rendering
            });
    }

}