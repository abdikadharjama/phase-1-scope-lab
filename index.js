// customerName: Declare a variable in global scope using the var keyword
var customerName = 'bob';

// upperCaseCustomerName(): Function that uppercases the global customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// setBestCustomer(): Function that declares a global variable bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // This implicitly creates a global variable
}

// overwriteBestCustomer(): Function that changes the global bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant and try to change it, which should fail
const leastFavoriteCustomer = 'some initial value';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'attempting to change value'; // This should throw an error
}
    
