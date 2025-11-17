// Entry point to run all string manipulation operations


import { cleanProductTitle } from './stringUtils.js';
import { showOutput } from './output.js';


// Store product name
let rawProductName = " wireless headphones PRO ";


// Clean and format the product name
let finalTitle = cleanProductTitle(rawProductName);


// Display final result
showOutput(finalTitle);