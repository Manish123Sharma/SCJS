// let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
// let men_items = document.querySelector('#men_items');
// let women_items = document.querySelector('#women_items');
// let jewelery_items = document.querySelector('#jewellery');
// let electronics_items = document.querySelector('#electronics');
// let search_input = document.querySelector('#search_input');
// //Cart array
// let cart = [];

// // Section wrappers
// let men_section = document.querySelector('#men_section');
// let women_section = document.querySelector('#women_section');
// let jewelery_section = document.querySelector('#jewellery_section');
// let electronics_section = document.querySelector('#electronics_section');

// // Categories Buttons
// let all_filter = document.querySelector('#all_filter');
// let men_filter = document.querySelector('#men_filter');
// let women_filter = document.querySelector('#women_filter');
// let jewellery_filter = document.querySelector('#jewellery_filter');
// let electronics_filter = document.querySelector('#electronics_filter');
// let login_a = document.querySelector('#login_a');
// let signup_a = document.querySelector('#signup_a');

// if (!currentUser) {
//     alert("Please login first!!!");
//     window.location.href = "/Projects/SCJS/login/login.html";
// } else {
//     console.log("Current User:", currentUser);
    // login_a.style.display = 'none';
    // signup_a.style.display = 'none';

    // let colors = ['Red', 'Blue', 'Green', 'White', 'Black'];
    // let sizes = ['S', 'M', 'L', 'XL'];

//     if (localStorage.getItem('products')) {
//         console.log("Products already exist in localStorage.");
//         let products = JSON.parse(localStorage.getItem('products'));
//         console.log("Products:", products);

//         let men = products.filter((item) => item.category === "men's clothing");
//         let women = products.filter((item) => item.category === "women's clothing");
//         let jewelery = products.filter((item) => item.category === "jewelery");
//         let electronics = products.filter((item) => item.category === "electronics");

//         // Render men's clothing
//         for (let item of men) {
//             let sizesHTML = item.sizes?.join(',') || 'N/A';
//             let colorsHTML = item.colors?.map(color => `<div class="circle" style="background-color: ${color}"></div>`).join('') || '';
//             // let item_id = item.id;
//             // console.log(item_id);
//             men_items.innerHTML += `
//                 <div class="item">
//                     <img src="${item.image}" alt="Item" />
//                     <div class="info">
//                         <div class="product_title">${item.title}</div>
//                         <div class="row">
//                             <div class="price">$${item.price}</div>
//                             <div class="sized">${sizesHTML}</div>
//                         </div>
//                         <div class="colors">
//                             Colors:
//                             <div class="row">${colorsHTML}</div>
//                         </div>
//                         <div class="row">Rating: ${item.rating.rate}</div>
//                     </div>
//                     <button class="addBtn" data-id="${item.id}">Add to Cart</button>
//                 </div>
//             `;
//         }

//         // Render women's clothing
//         for (let item of women) {
//             let sizesHTML = item.sizes?.join(',') || 'N/A';
//             let colorsHTML = item.colors?.map(color => `<div class="circle" style="background-color: ${color}"></div>`).join('') || '';
//             women_items.innerHTML += `
//                 <div class="item">
//                     <img src="${item.image}" alt="Item" />
//                     <div class="info">
//                         <div class="product_title">${item.title}</div>
//                         <div class="row">
//                             <div class="price">$${item.price}</div>
//                             <div class="sized">${sizesHTML}</div>
//                         </div>
//                         <div class="colors">
//                             Colors:
//                             <div class="row">${colorsHTML}</div>
//                         </div>
//                         <div class="row">Rating: ${item.rating.rate}</div>
//                     </div>
//                     <button class="addBtn" data-id="${item.id}">Add to Cart</button>
//                 </div>
//             `;
//         }

//         // Render jewelery
//         for (let item of jewelery) {
//             jewelery_items.innerHTML += `
//                 <div class="item">
//                     <img src="${item.image}" alt="Item" />
//                     <div class="info">
//                         <div class="title">${item.title}</div>
//                         <div class="price">$${item.price}</div>
//                         <div class="row">Rating: ${item.rating.rate}</div>
//                     </div>
//                     <button class="addBtn" data-id="${item.id}">Add to Cart</button>
//                 </div>
//             `;
//         }

//         // Render electronics
//         for (let item of electronics) {
//             electronics_items.innerHTML += `
//                 <div class="item">
//                     <img src="${item.image}" alt="Item" />
//                     <div class="info">
//                         <div class="title">${item.title}</div>
//                         <div class="price">$${item.price}</div>
//                         <div class="row">Rating: ${item.rating.rate}</div>
//                     </div>
//                     <button class="addBtn" data-id="${item.id}">Add to Cart</button>
//                 </div>
//             `;
//         }

        // Filter handling
        // function setActiveFilter(filter) {
        //     localStorage.setItem('activeFilter', filter);

        //     // Reset all classes and visibility
        //     [all_filter, men_filter, women_filter, jewellery_filter, electronics_filter].forEach(btn => btn.classList.remove('active'));
        //     [men_section, women_section, jewelery_section, electronics_section].forEach(section => {
        //         section.style.display = 'none';
        //         section.classList.remove('grid-view');
        //     });

        //     if (filter === 'all') {
        //         all_filter.classList.add('active');
        //         men_section.style.display = 'block';
        //         women_section.style.display = 'block';
        //         jewelery_section.style.display = 'block';
        //         electronics_section.style.display = 'block';
        //     } else {
        //         document.getElementById(`${filter}_filter`).classList.add('active');
        //         let selectedSection = document.getElementById(`${filter}_section`);
        //         selectedSection.style.display = 'block';
        //         selectedSection.classList.add('grid-view');
        //     }
        // }

//         // Search functionality
//         search_input.addEventListener('input', searchProducts);

//         function searchProducts() {
//             const searchTerm = search_input.value.toLowerCase();

//             // Get all item divs
//             let allItemSections = [men_items, women_items, jewelery_items, electronics_items];
//             allItemSections.forEach(section => {
//                 let items = section.querySelectorAll('.item');
//                 items.forEach(item => {
//                     let title = item.querySelector('.product_title, .title').textContent.toLowerCase();
//                     if (title.includes(searchTerm)) {
//                         item.style.display = 'block';
//                     } else {
//                         item.style.display = 'none';
//                     }
//                 });
//             });
//         }


        // // Event listeners
        // all_filter.addEventListener('click', () => setActiveFilter('all'));
        // men_filter.addEventListener('click', () => setActiveFilter('men'));
        // women_filter.addEventListener('click', () => setActiveFilter('women'));
        // jewellery_filter.addEventListener('click', () => setActiveFilter('jewellery'));
        // electronics_filter.addEventListener('click', () => setActiveFilter('electronics'));

        // // Apply saved filter on load
        // localStorage.removeItem('activeFilter');
        // let savedFilter = 'all';
        // setActiveFilter(savedFilter);

//         //Add to Cart
//         // let addBtn = document.querySelectorAll('.addBtn');
        // let addBtns = document.querySelectorAll('.addBtn');
        // addBtns.forEach(button => {
        //     button.addEventListener('click', (e) => {
        //         console.log('Add to Cart clicked');
        //         console.log(e);
        //         console.log();
        //         // Get the product ID from button's data-id
        //         let productId = parseInt(e.currentTarget.getAttribute('data-id'));
        //         console.log('Product ID:', productId);
        //         // Find the selected product
        //         let selectedProduct = products.find(p => p.id === productId);
        //         console.log('Selected Product:', selectedProduct);
        //         if (selectedProduct) {
        //             let alreadyInCart = cart.some(p => p.id === selectedProduct.id);
        //             if (!alreadyInCart) {
        //                 cart.push(selectedProduct);
        //                 localStorage.setItem('cart', JSON.stringify(cart));
        //                 alert('Item added to cart!');
        //             } else {
        //                 alert('Item already in cart!');
        //             }
        //         } else {
        //             console.error('Product not found!');
        //         }
        //     });
        // });

//     } else {
        // // Fetch and enhance product data
        // fetch("https://fakestoreapi.com/products")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         let newData = data.map((item) => {
        //             if (item.category === "men's clothing" || item.category === "women's clothing") {
        //                 return {
        //                     ...item,
        //                     colors: colors.slice(0, Math.floor(Math.random() * colors.length) + 1),
        //                     sizes: sizes.slice(0, Math.floor(Math.random() * sizes.length) + 1),
        //                 };
        //             } else {
        //                 // Strip sizes and colors for non-clothing
        //                 const { colors, sizes, ...rest } = item;
        //                 return rest;
        //             }
        //         });

        //         localStorage.setItem('products', JSON.stringify(newData));
        //         location.reload(); // Reload to trigger rendering
        //     });
//     }
// }



let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
let men_items = document.querySelector('#men_items');
let women_items = document.querySelector('#women_items');
let jewellery_items = document.querySelector('#jewellery');
let electronics_items = document.querySelector('#electronics');

if (!currentUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login/login.html";
} else {
    console.log("Current User:", currentUser);
    login_a.style.display = 'none';
    signup_a.style.display = 'none';
    let colors = ['Red', 'Blue', 'Green', 'White', 'Black'];
    let sizes = ['S', 'M', 'L', 'XL'];

    if (localStorage.getItem('products')) {
        let products = JSON.parse(localStorage.getItem('products'));

        // Separate products by category
        let men = products.filter(item => item.category === "men's clothing");
        let women = products.filter(item => item.category === "women's clothing");
        let jewellery = products.filter(item => item.category === "jewelery");
        let electronics = products.filter(item => item.category === "electronics");

        // DOM references for filters and sections
        let all_filter = document.getElementById('all_filter');
        let men_filter = document.getElementById('men_filter');
        let women_filter = document.getElementById('women_filter');
        let jewellery_filter = document.getElementById('jewellery_filter');
        let electronics_filter = document.getElementById('electronics_filter');

        let men_section = document.getElementById('men_section');
        let women_section = document.getElementById('women_section');
        let jewellery_section = document.getElementById('jewellery_section');
        let electronics_section = document.getElementById('electronics_section');

        // Rendering Function
        function renderProduct(item, container) {
            let sizesHTML = item.sizes?.join(', ') || 'N/A';
            let colorsHTML = item.colors?.map(color => `<div class="circle" style="background-color: ${color}"></div>`).join('') || '';
            container.innerHTML += `
                <div class="item">
                    <img src="${item.image}" alt="Item" />
                    <div class="info">
                        <div class="product_title">${item.title}</div>
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
                    <button class="addBtn" data-id="${item.id}">Add to Cart</button>
                </div>
            `;
        }

        // Filter UI Handler
        function setActiveFilter(filter) {
            localStorage.setItem('activeFilter', filter);

            // Remove active class from all filters
            [all_filter, men_filter, women_filter, jewellery_filter, electronics_filter].forEach(btn => btn.classList.remove('active'));

            // Hide all sections
            [men_section, women_section, jewellery_section, electronics_section].forEach(section => {
                section.style.display = 'none';
                section.classList.remove('grid-view');
            });

            if (filter === 'all') {
                all_filter.classList.add('active');
                men_section.style.display = 'block';
                women_section.style.display = 'block';
                jewellery_section.style.display = 'block';
                electronics_section.style.display = 'block';
            } else {
                document.getElementById(`${filter}_filter`).classList.add('active');
                let selectedSection = document.getElementById(`${filter}_section`);
                selectedSection.style.display = 'block';
                selectedSection.classList.add('grid-view');
            }
        }

        // Category Filter Button Events
        all_filter.addEventListener('click', () => setActiveFilter('all'));
        men_filter.addEventListener('click', () => setActiveFilter('men'));
        women_filter.addEventListener('click', () => setActiveFilter('women'));
        jewellery_filter.addEventListener('click', () => setActiveFilter('jewellery'));
        electronics_filter.addEventListener('click', () => setActiveFilter('electronics'));

        // Render Products
        men.forEach(item => renderProduct(item, men_items));
        women.forEach(item => renderProduct(item, women_items));
        jewellery.forEach(item => renderProduct(item, jewellery_items));
        electronics.forEach(item => renderProduct(item, electronics_items));

        // Apply default filter
        localStorage.removeItem('activeFilter');
        setActiveFilter('all');

        // Add to Cart
        let addBtns = document.querySelectorAll('.addBtn');
        addBtns.forEach(button => {
            button.addEventListener('click', (e) => {
                console.log('Add to Cart clicked');
                console.log(e);
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                // Get the product ID from button's data-id
                let productId = parseInt(e.currentTarget.getAttribute('data-id'));
                console.log('Product ID:', productId);
                // Find the selected product
                let selectedProduct = products.find(p => p.id === productId);
                console.log('Selected Product:', selectedProduct);
                if (selectedProduct) {
                    let alreadyInCart = cart.some(p => p.id === selectedProduct.id);
                    if (!alreadyInCart) {
                        cart.push(selectedProduct);
                        localStorage.setItem('cart', JSON.stringify(cart));
                        alert('Item added to cart!');
                    } else {
                        alert('Item already in cart!');
                    }
                } else {
                    console.error('Product not found!');
                }
            });
        });

        // All Filters State
        let allFilters = {
            colors: [],
            sizes: [],
            rating: 0,
            priceRange: []
        };

        // Filter Inputs
        let colorCheckboxes = document.querySelectorAll('input[name="color"]');
        let sizeCheckboxes = document.querySelectorAll('input[id="s"], input[id="m"], input[id="l"], input[id="xl"]');
        let priceCheckboxes = document.querySelectorAll('input[name="prange"]');
        let ratingSlider = document.querySelector('#range');

        // Filter Application
        function applyAllFilters() {
            let filtered = products.filter(product => {
                let isClothing = product.category === "men's clothing" || product.category === "women's clothing";

                // Colors
                if (allFilters.colors.length && isClothing) {
                    if (!product.colors || !product.colors.some(c => allFilters.colors.includes(c.toLowerCase()))) {
                        return false;
                    }
                }

                // Sizes
                if (allFilters.sizes.length && isClothing) {
                    if (!product.sizes || !product.sizes.some(s => allFilters.sizes.includes(s.toLowerCase()))) {
                        return false;
                    }
                }

                // Rating
                if (product.rating.rate < allFilters.rating) return false;

                // Price Range
                if (allFilters.priceRange.length) {
                    let inRange = allFilters.priceRange.some(range => {
                        let [min, max] = range.split('-');
                        min = parseFloat(min);
                        max = max === 'on' ? Infinity : parseFloat(max);
                        return product.price >= min && product.price <= max;
                    });
                    if (!inRange) return false;
                }

                return true;
            });

            // Clear containers
            men_items.innerHTML = '';
            women_items.innerHTML = '';

            // Render filtered clothing items only
            filtered.forEach(item => {
                if (item.category === "men's clothing") {
                    renderProduct(item, men_items);
                } else if (item.category === "women's clothing") {
                    renderProduct(item, women_items);
                }
            });
        }

        // Color Filter Events
        colorCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                allFilters.colors = Array.from(colorCheckboxes).filter(c => c.checked).map(c => c.id.toLowerCase());
                applyAllFilters();
            });
        });

        // Size Filter Events
        sizeCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                allFilters.sizes = Array.from(sizeCheckboxes).filter(c => c.checked).map(c => c.id.toLowerCase());
                applyAllFilters();
            });
        });

        // Price Filter Events
        priceCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                allFilters.priceRange = Array.from(priceCheckboxes).filter(c => c.checked).map(c => c.id);
                applyAllFilters();
            });
        });

        // Rating Filter
        ratingSlider.addEventListener('input', () => {
            allFilters.rating = parseFloat(ratingSlider.value);
            applyAllFilters();
        });

        // Search Filter (Optional)
        let search_input = document.querySelector("#search_input");
        if (search_input) {
            search_input.addEventListener("input", function () {
                let value = this.value.toLowerCase();
                let allItems = document.querySelectorAll(".item");
                allItems.forEach(item => {
                    let title = item.querySelector(".product_title").innerText.toLowerCase();
                    item.style.display = title.includes(value) ? "block" : "none";
                });
            });
        }
    } else{
        // Fetch and enhance product data
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                let newData = data.map((item) => {
                    if (item.category === "men's clothing" || item.category === "women's clothing") {
                        return {
                            ...item,
                            colors: colors.slice(0, Math.floor(Math.random() * colors.length) + 1),
                            sizes: sizes.slice(0, Math.floor(Math.random() * sizes.length) + 1),
                        };
                    } else {
                        // Strip sizes and colors for non-clothing
                        const { colors, sizes, ...rest } = item;
                        return rest;
                    }
                });

                localStorage.setItem('products', JSON.stringify(newData));
                location.reload(); // Reload to trigger rendering
            });
    }
}
