// Search form submission
document.querySelector('.search form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = this.query.value;
    // Redirect to search-item page
    window.location.href = `search-item.html?query=${encodeURIComponent(query)}`;
});

// Item details page
function loadItemDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    if (!itemId) {
        // Redirect to error page if no id is provided
        window.location.href = 'error.html';
        return;
    }

    // Fetch item details from a server
    // Placeholder: add data fetching logic
    const itemDetails = {
        name: "Sample Book",
        brand: "Book Brand",
        price: "$20.00",
        description: "This is a sample book description.",
        inStock: true
    };

    // Populate the item details
    document.getElementById('item-name').innerText = itemDetails.name;
    document.getElementById('item-brand').innerText = itemDetails.brand;
    document.getElementById('item-price').innerText = itemDetails.price;
    document.getElementById('item-description').innerText = itemDetails.description;

    const stockStatus = document.getElementById('item-stock');
    stockStatus.innerText = itemDetails.inStock ? "In Stock" : "Out of Stock";
    stockStatus.style.color = itemDetails.inStock ? "green" : "red";
}

if (window.location.pathname.includes('item-details.html')) {
    loadItemDetails();
}