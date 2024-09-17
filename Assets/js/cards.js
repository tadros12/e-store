const products = [
    { name: "Product 1", price: "$19.99", description: "Brief description of Product 1.", rating: 1, image: "Assets\\img\\images.png" },
    { name: "Product 2", price: "$29.99", description: "Brief description of Product 2.", rating: 3, image: "Assets\\img\\download.jpg" },
    { name: "Product 3", price: "$39.99", description: "Brief description of Product 3.", rating: 3, image: "https://via.placeholder.com/150" },
    { name: "Product 4", price: "$49.99", description: "Brief description of Product 4.", rating: 4, image: "https://via.placeholder.com/150" },
    { name: "Product 5", price: "$59.99", description: "Brief description of Product 5.", rating: 5, image: "https://via.placeholder.com/150" },
    { name: "Product 6", price: "$69.99", description: "Brief description of Product 6.", rating: 2, image: "https://via.placeholder.com/150" },
    { name: "Product 7", price: "$79.99", description: "Brief description of Product 7.", rating: 4, image: "https://via.placeholder.com/150" },
    { name: "Product 8", price: "$89.99", description: "Brief description of Product 8.", rating: 3, image: "https://via.placeholder.com/150" },
    { name: "Product 9", price: "$99.99", description: "Brief description of Product 9.", rating: 5, image: "https://via.placeholder.com/150" },
    { name: "Product 10", price: "$109.99", description: "Brief description of Product 10.", rating: 4, image: "https://via.placeholder.com/150" },
];

function generateStarRating(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? "&#9733;" : "&#9734;";
    }
    return stars;
}

function generateProductCards() {
    const container = document.getElementById("product-container");
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card mb-4">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <p class="card-text">${product.description}</p>
                    <div class="star-rating">${generateStarRating(product.rating)}</div>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                    <a href="product.html" class="btn btn-secondary">View Details</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", generateProductCards);