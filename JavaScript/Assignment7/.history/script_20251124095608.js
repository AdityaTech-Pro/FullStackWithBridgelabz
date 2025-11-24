// Dynamic Product List Manager
// Features: Add, Edit, Delete using Event Delegation + Auto Save on click outside

"use strict";

// Get DOM elements
const productInput = document.getElementById("productInput");
const addProductBtn = document.getElementById("addProductBtn");
const productList = document.getElementById("productList");

let currentlyEditing = null; // Track the item currently being edited

// Add new product to list
aAddProductBtn.addEventListener("click", () => {
    const productName = productInput.value.trim();

    if (productName === "") return;

    // Create new <li> element
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span class="product-name">${productName}</span>
        <div class="action-btns">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    productList.appendChild(listItem);
    productInput.value = "";
});

// Event Delegation for Edit / Delete on <ul>
productList.addEventListener("click", (event) => {
    const target = event.target;

    // Delete Product
    if (target.classList.contains("delete-btn")) {
        target.closest("li").remove();
    }

    // Edit Product
    if (target.classList.contains("edit-btn")) {
        const listItem = target.closest("li");
        const nameSpan = listItem.querySelector(".product-name");

        if (currentlyEditing && currentlyEditing !== nameSpan) {
            saveEdit(currentlyEditing);
        }

        startEdit(nameSpan);
    }
});

// Start editing a product name
function startEdit(nameSpan) {
    currentlyEditing = nameSpan;

    const currentText = nameSpan.textContent;

    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.value = currentText;
    inputBox.className = "edit-input";

    nameSpan.replaceWith(inputBox);
    inputBox.focus();

    // Save when pressing Enter
    inputBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") saveEdit(inputBox);
    });
}

// Save edited value
function saveEdit(inputElement) {
    const newValue = inputElement.value.trim();

    const newSpan = document.createElement("span");
    newSpan.className = "product-name";
    newSpan.textContent = newValue || "(empty)";

    inputElement.replaceWith(newSpan);
    currentlyEditing = null;
}

// Auto-save when clicking outside edited item
document.addEventListener("click", (event) => {
    if (
        currentlyEditing &&
        !event.target.classList.contains("edit-input") &&
        !event.target.classList.contains("edit-btn")
    ) {
        saveEdit(currentlyEditing);
    }
});