const CryptoJS = require("crypto-js");
const crypto = require("crypto");

class LocalCrypt {
  constructor() {
    this.secretKey = this.generateKey();
    if (!this.secretKey) {
      throw new Error("Secret key is not defined");
    }
  }

  generateKey() {
    return crypto.randomBytes(32).toString("hex");
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
