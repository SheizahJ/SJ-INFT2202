$(document).ready(function () {
    console.log("JQuery is running!");

    // Injecting an H1 header into the header HTML element with an id of "header"
    // $("[id=header]")  also works
    $("#header").html("<h1>Welcome to our Travel Blog</h1>");

    // Create Navigation Bar
    const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
    let navContent = "<ul>";
    $.each(categories, function (index, category) {
        // console.log(index + ": " + category);
        navContent += `<li onClick="loadCategoryContent('${category}')">${category}</li>`;
    });
    navContent += "</ul>";
    $("#navbar").html(navContent);
});

window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran! Category: " + category);
    let content = `<h2>${category}</h2>`;
    content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`
    $("#content").html(content);

    populateCarousel(category.toLowerCase());
};

// Create a fucntion to populate our Carousel
// Create image gallery in memory
const categoryImages = {
    beaches: [
        {alt: "Beach Sunset", src: "beach1.jpg"},
        {alt: "Sandy Shore", src: "beach2.jpg"},
        {alt: "Marina Resort", src: "beach3.jpg"}
    ],
    mountains: [
        {alt: "Mountain Range", src: "mountain1.jpg"},
        {alt: "Snowy Peak", src: "mountain2.jpg"},
        {alt: "Hiking Trail", src: "mountain3.jpg"}
    ]
};
function populateCarousel (category) {
    const images = categoryImages[category];

    // [].forEach(), [].map() -> 2 Array Iterator Method
    let carouselContent = images.map((image, index) => {
        return `
        <div class="carousel-item ${index == 0 ? 'active' : ''}">
            <div class="image" style="background-image: url('${image.src}')"></div>
            <p>${image.alt}</p>
        </div>
        `;
    }).join("");

    $(`#${category}-carousel`).html(carouselContent);

    $(`#${category}-carousel`).append(`
        <button class="carousel-control prev" onclick="moveCarousel('${category}', -1)">
            &lt;
        </button>
        <button class="carousel-control next" onclick="moveCarousel('${category}', 1)">
            &gt;
        </button>
    `);
};

window.moveCarousel = function (category, direction) {
    // debugger;

    let items = $(`#${category}-carousel .carousel-item`);
    let activeIndex = items.index(items.filter(".active"));
    let newIndex = activeIndex + direction;

    if (newIndex >= items.length) {
        newIndex = 0;
    } 
    else if (newIndex < 0) {
        newIndex = items.length - 1;
    }

    items.removeClass("active");
    items.eq(newIndex).addClass("active");
};


/**
 * ______ICE 5 Tasks______
 * 
 * 1. Populate Cities, Forests & Deserts.
 * 
 * 2. Add 3 images to the Cities and Deserts (Optionally, you 
 *    may add images for the rest of the categories).
 * 
 * 3. Dynamically add content to the Footer using JQuery. The 
 *    content should include a short description of your favourite
 *    category/place and why.
 */