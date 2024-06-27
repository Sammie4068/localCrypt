const SecureStorage = require("./secureStorage");

const secureStorage = new SecureStorage();

// Setting an item in secure storage
secureStorage.setItem("username", "victor");

// Getting an item from secure storage
console.log(secureStorage.getItem("username")); // Outputs: victor
