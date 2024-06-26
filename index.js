const LocalCrypt = require("./LocalCrypt");
const SecureStorage = require("./secureStorage");

const secretKey = "mySecretKey";
const localCrypt = new LocalCrypt(secretKey);
const secureStorage = new SecureStorage(localCrypt);

secureStorage.setItem("username", "victor");
console.log(secureStorage.getItem("username")); // Outputs: victor
