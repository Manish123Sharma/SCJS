let currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
let men_items = document.querySelector('#men_items');
let women_items = document.querySelector('#women_items');
let jewelery_items = document.querySelector('#jewellery');
let electronics_items = document.querySelector('#electronics');

// Section wrappers
let men_section = document.querySelector('#men_section');
let women_section = document.querySelector('#women_section');
let jewelery_section = document.querySelector('#jewellery_section');
let electronics_section = document.querySelector('#electronics_section');

// Categories Buttons
let all_filter = document.querySelector('#all_filter');
let men_filter = document.querySelector('#men_filter');
let women_filter = document.querySelector('#women_filter');
let jewellery_filter = document.querySelector('#jewellery_filter');
let electronics_filter = document.querySelector('#electronics_filter');

if (!currentUser) {
    alert("Please login first!!!");
    window.location.href = "/Projects/SCJS/login.html";
} else {
    console.log("Current User:", currentUser);

    let colors = ['Red', 'Blue', 'Green', 'White', 'Black'];
    let sizes = ['S', 'M', 'L', 'XL'];

    if (localStorage.getItem('products')) {
        console.log("Products already exist in localStorage.");
        let products = JSON.parse(localStorage.getItem('products'));
        console.log("Products:", products);

        let men = products.filter((item) => item.category === "men's clothing");
        let women = products.filter((item) => item.category === "women's clothing");
        let jewelery = products.filter((item) => item.category === "jewelery");
        let electronics = products.filter((item) => item.category === "electronics");

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

        // Filter handling
        function setActiveFilter(filter) {
            localStorage.setItem('activeFilter', filter);

            // Reset all classes and visibility
            [all_filter, men_filter, women_filter, jewellery_filter, electronics_filter].forEach(btn => btn.classList.remove('active'));
            [men_section, women_section, jewelery_section, electronics_section].forEach(section => {
                section.style.display = 'none';
                section.classList.remove('grid-view');
            });

            if (filter === 'all') {
                all_filter.classList.add('active');
                men_section.style.display = 'block';
                women_section.style.display = 'block';
                jewelery_section.style.display = 'block';
                electronics_section.style.display = 'block';
            } else {
                document.getElementById(`${filter}_filter`).classList.add('active');
                let selectedSection = document.getElementById(`${filter}_section`);
                selectedSection.style.display = 'block';
                selectedSection.classList.add('grid-view');
            }
        }

        // Event listeners
        all_filter.addEventListener('click', () => setActiveFilter('all'));
        men_filter.addEventListener('click', () => setActiveFilter('men'));
        women_filter.addEventListener('click', () => setActiveFilter('women'));
        jewellery_filter.addEventListener('click', () => setActiveFilter('jewellery'));
        electronics_filter.addEventListener('click', () => setActiveFilter('electronics'));

        // Apply saved filter on load
        let savedFilter = localStorage.getItem('activeFilter') || 'all';
        setActiveFilter(savedFilter);

    } else {
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
