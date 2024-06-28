
# LocalCrypt

LocalCrypt is a JavaScript library for secure local storage using AES encryption.

## Installation

To install the LocalCrypt library, use npm:

```bash
npm install localcrypt
```

## Usage (ES6)

Here is an example of how to use the LocalCrypt library:

```javascript
"use client"

// Importing SecureStorage classes
import SecureStorage from 'localcrypt/SecureStorage';
const secureStorage = new SecureStorage();

// Setting an item in secure storage
secureStorage.setItem('username', 'victor');

// Getting an item from secure storage
console.log(secureStorage.getItem('username')); // Outputs: victor

```

## API Documentation

### LocalCrypt

#### `constructor(secretKey)`

- **Parameters:**
  - `secretKey` (string): The secret key used for AES encryption and decryption.

#### `encrypt(data)`

- **Parameters:**
  - `data` (string): The plaintext data to encrypt.
- **Returns:**
  - (string): The encrypted data.

#### `decrypt(encryptedData)`

- **Parameters:**
  - `encryptedData` (string): The encrypted data to decrypt.
- **Returns:**
  - (string): The decrypted plaintext data.

### SecureStorage

#### `constructor(localCrypt)`

- **Parameters:**
  - `localCrypt` (LocalCrypt): An instance of the LocalCrypt class.

#### `setItem(key, value)`

- **Parameters:**
  - `key` (string): The key under which the value is stored.
  - `value` (string): The plaintext value to store.
- **Returns:**
  - None

#### `getItem(key)`

- **Parameters:**
  - `key` (string): The key of the stored value.
- **Returns:**
  - (string): The decrypted value stored under the given key.

## Running Tests

To run the tests for the LocalCrypt library, use the following command:

```bash
npm test
```

Make sure you have `jest` installed as a development dependency to run the tests.

## Contributing

We welcome contributions to the LocalCrypt library. If you have any suggestions, bug reports, or improvements, please open an issue or submit a pull request on GitHub.

```
