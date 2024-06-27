const CryptoJS = require("crypto-js");
require("dotenv").config(); // Load environment variables from .env file

class LocalCrypt {
  constructor() {
    this.secretKey = process.env.SECRET_KEY;
    if (!this.secretKey) {
      throw new Error("Secret key is not defined in environment variables");
    }
  }

  encrypt(data) {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decrypt(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}

module.exports = LocalCrypt;
