// Declare customerName to be 'bob' in global scope
let customerName = 'bob';

// Function to modify the customerName variable to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set a new global variable bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Implicitly global
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant and try to change it, which should fail
const leastFavoriteCustomer = 'some initial value';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'attempting to change value'; // This should throw an error
}
