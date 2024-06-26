const LocalCrypt = require("../LocalCrypt");

test("encrypt and decrypt data", () => {
  const secretKey = "testKey";
  const localCrypt = new LocalCrypt(secretKey);

  const data = "testData";
  const encryptedData = localCrypt.encrypt(data);
  const decryptedData = localCrypt.decrypt(encryptedData);

  expect(decryptedData).toBe(data);
});
