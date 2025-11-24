// Real-Time Live Search using jQuery AJAX

$(document).ready(function() {
    const searchInput = $("#searchInput");
    const resultsBox = $("#results");
    const loading = $("#loading");

    // Detect typing in the search box
    searchInput.on("keyup", function() {
        const query = $(this).val().trim();

        // If input is empty → clear results
        if (query === "") {
            resultsBox.html("");
            return;
        }

        loading.show(); // Show loading

        // AJAX GET request with ?q=value
        $.ajax({
            url: "http://localhost:4000/products?q=" + query, // JSON Server port 4000
            method: "GET",
            success: function(data) {
                loading.hide(); // Hide loading
                resultsBox.html("");

                if (data.length === 0) {
                    resultsBox.html(`<p>No products found</p>`);
                    return;
                }

                // Display products
                data.forEach(product => {
                    resultsBox.append(`
                        <div class="product">
                            <img src="${product.image}" alt="Product" />
                            <div class="info">
                                <span><strong>${product.name}</strong></span>
                                <span>Price: ₹${product.price}</span>
                            </div>
                        </div>
                    `);
                });
            },
            error: function() {
                loading.hide();
                resultsBox.html("<p>Error loading data</p>");
            }
        });
    });
});