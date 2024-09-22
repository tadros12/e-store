// dashboard.js
function generateProductTable(products) {
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image_path}" class="product-image" alt="${product.item_name}"></td>
            <td>${product.item_name}</td>
            <td>$${product.price}</td>
            <td>${product.stock}</td>
            <td>
                <button class="btn btn-warning" onclick="editProduct(${product.item_id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct(${product.item_id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function editProduct(id) {
    // Redirect to edit product page
    window.location.href = `edit_product.php?id=${id}`;
}

function deleteProduct(id) {
    // Implement delete product functionality
    if (confirm('Are you sure you want to delete this product?')) {
        // Make an AJAX request to delete the product
        console.log(`Product with ID ${id} deleted`);
    }
}

function filterProducts(criteria) {
    console.log(`Filtering products by ${criteria}`);
}