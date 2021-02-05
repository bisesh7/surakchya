const assert = require("chai").assert;
const functions = require("../Functions/userFunctions");

describe("test is not empty", () => {
  it("should return true", () => {
    assert.equal(functions.isNotEmpty("test"), true);
  });
});

describe("test@gmail.com is a valid email", () => {
  it("should return true", () => {
    assert.equal(functions.emailIsValid("test@gmail.com"), true);
  });
});

describe("Test12 has lowercase letter", () => {
  it("should return true", () => {
    assert.equal(functions.hasLowerCaseLetter("Test12"), true);
  });
});

describe("TEST does not have lowercase letter", () => {
  it("should return false", () => {
    assert.equal(functions.hasLowerCaseLetter("TEST"), false);
  });
});

describe("Test12 has uppercase letter", () => {
  it("should return true", () => {
    assert.equal(functions.hasUpperCaseLetter("Test12"), true);
  });
});

describe("test does not have uppercase letter", () => {
  it("should return false", () => {
    assert.equal(functions.hasUpperCaseLetter("test"), false);
  });
});

describe("Test12 has number in it", () => {
  it("should return true", () => {
    assert.equal(functions.hasNumber("Test12"), true);
  });
});

describe("TEST has no number in it", () => {
  it("should return false", () => {
    assert.equal(functions.hasNumber("TEST"), false);
  });
});

describe("TestPassword12 has at least eight characters", () => {
  it("should return true", () => {
    assert.equal(functions.hasAtLeastEightCharacters("TestPassword12"), true);
  });
});

describe("TestPassword12 and TestPassword12 are same strings", () => {
  it("should return true", () => {
    assert.equal(
      functions.isSameStrings("TestPassword12", "TestPassword12"),
      true
    );
  });
});
