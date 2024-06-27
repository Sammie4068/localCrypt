require("dotenv").config(); // Ensure environment variables are loaded for tests
const LocalCrypt = require("../LocalCrypt");

test("encrypt and decrypt data", () => {
  const localCrypt = new LocalCrypt();

  const data = "testData";
  const encryptedData = localCrypt.encrypt(data);
  const decryptedData = localCrypt.decrypt(encryptedData);

  expect(decryptedData).toBe(data);
});

