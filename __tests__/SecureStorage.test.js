const SecureStorage = require("../secureStorage");

test("set and get item in secure storage", () => {
  const secureStorage = new SecureStorage();

  secureStorage.setItem("testKey", "testValue");
  const value = secureStorage.getItem("testKey");

  expect(value).toBe("testValue");
});
