const caesarCipher = require("./Caesar-Cipher-Javascript");

describe("Caesar-Cipher", () => {
  let str;
  let num;
  it("should return string 'Ecguct Ekrjgt'", () => {
    str = "Caesar Cipher";
    num = 2;
    let result = caesarCipher(str, num);
    expect(result).toBe("Ecguct Ekrjgt");
  });
  it("should return string 'Caesar Cipher'", () => {
    str = "Ecguct Ekrjgt";
    num = -2;
    let result = caesarCipher(str, num);
    expect(result).toBe("Caesar Cipher");
  });
  it("should return string 'Jgnnq'", () => {
    str = "Hello";
    num = 2;
    let result = caesarCipher(str, num);
    expect(result).toBe("Jgnnq");
  });
  it("should return string 'Hello'", () => {
    str = "Jgnnq";
    num = -2;
    let result = caesarCipher(str, num);
    expect(result).toBe("Hello");
  });
});
