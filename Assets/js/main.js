const recommendations = [
    { name: "Product 1", price: "$19.99", image: "https://via.placeholder.com/150" },
    { name: "Product 2", price: "$29.99", image: "https://via.placeholder.com/150" },
    { name: "Product 3", price: "$39.99", image: "https://via.placeholder.com/150" },
    // Add more recommendations as needed
];

function generateRecommendationCards() {
    const container = document.getElementById("recommendations-container");
    recommendations.forEach(product => {
        const card = document.createElement("div");
        card.className = "col-md-4";
        card.innerHTML = `
            <div class="card mb-4">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", generateRecommendationCards);
