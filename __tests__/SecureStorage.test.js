const LocalCrypt = require("../LocalCrypt");
const SecureStorage = require("../secureStorage");

test("set and get item in secure storage", () => {
  const secretKey = "testKey";
  const localCrypt = new LocalCrypt(secretKey);
  const secureStorage = new SecureStorage(localCrypt);

  secureStorage.setItem("testKey", "testValue");
  const value = secureStorage.getItem("testKey");

  expect(value).toBe("testValue");
});
