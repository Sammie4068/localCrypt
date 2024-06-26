class SecureStorage {
  constructor(localCrypt) {
    this.localCrypt = localCrypt;
  }

  setItem(key, value) {
    const encryptedValue = this.localCrypt.encrypt(value);
    localStorage.setItem(key, encryptedValue);
  }

  getItem(key) {
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
      return this.localCrypt.decrypt(encryptedValue);
    }
    return null;
  }
}

module.exports = SecureStorage;
