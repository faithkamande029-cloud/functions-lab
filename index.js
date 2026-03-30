// function representing monetary value
function calculateTax(amount) {
    let tax = 0.10;
    let totalTaxed = amount * tax;
    return totalTaxed;
}

// function converts string into upperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// function to return larger number of two
function findMaximum(num1, num2){
    if (num1 > num2){
        return num1
    }else {
        return num2
    }
}

// function returns true if string is palidrome
function isPalindrome(word) {
    let letters = word.split("");

    let reversedLetters = letters.reverse();
    let reverseWord = reversedLetters.join("");

    if (word === reverseWord) {
        return true;
    }else {
        return false;
    }
}

// function calculates and returns price after discount
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let totalDiscount = originalPrice * (discountPercentage / 100);
    let totalPrice = originalPrice - totalDiscount;

    return totalPrice;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };