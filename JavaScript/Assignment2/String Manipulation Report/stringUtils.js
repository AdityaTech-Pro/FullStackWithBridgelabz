// Contains all string manipulation logic


export function cleanProductTitle(productName) {
    // Step 1: Trim unnecessary spaces
    let trimmed = productName.trim();


    // Step 2: Convert to lowercase
    let lowerCased = trimmed.toLowerCase();


    // Step 3: Capitalize the first letter of each word using split(), map(), join()
    let capitalized = lowerCased
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");


    // Step 4: Replace "pro" with "Pro Edition"
    let replaced = capitalized.replace("Pro", "Pro Edition");


    return replaced;
}