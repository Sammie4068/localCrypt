const CryptoJS = require("crypto-js");

class LocalCrypt {
  constructor() {
    this.secretKey = "jbyuuybububuybyytvytvtrcrdcrdcftfgvy67y7y9y97g7gtvfcfdxffcfvgh";
    if (!this.secretKey) {
      throw new Error("Secret key is not defined");
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
