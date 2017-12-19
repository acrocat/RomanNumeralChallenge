const assert = require("chai").assert;
const RomanNumeralGenerator = require("../app");

describe("Roman Numeral Generator" , () => {
  describe("generate()" , () => {
    const expectedValues = {
      1: "I",
      5: "V",
      10: "X",
      20: "XX",
      39: "XXXIX",
      64: "LXIV",
      128: "CXXVIII",
      739: "DCCXXXIX",
      3999: "MMMCMXCIX"
    }
    const generator = new RomanNumeralGenerator();
    const testValue = input => {
      let expectedValue = expectedValues[input];
      let actualValue = generator.generate(input);
      it (`Input of ${input} should generate a value of ${expectedValue}` , () => {
        assert.equal(actualValue , expectedValue , "Generated value is incorrect");
      })
    }

    // Run test on all predefined inputs
    for (let input in expectedValues) {
      testValue(input);
    }

    // Invalid input
    it ("Inputs that aren't numerical should return null" , () => {
      assert.isNull(generator.generate("Catastrophe"));
    })

    // Numbers out of range
    it ("Inputs greater than 3999 should return null" , () => {
      assert.isNull(generator.generate(4000));
    });
    it ("Inputs less than 1 should return null" , () => {
      assert.isNull(generator.generate(0));
    })
  });
});