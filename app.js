class RomanNumeralGenerator {
  generate (number) {
    // We only work with numbers
    if (isNaN(number)) return null;

    // Only accept numbers between 1 and 3999;
    if (number < 1 || number > 3999) return null;

    // Each 'tier' uses different numerals but always in the same pattern
    let numeralRange = [
      ["M"],
      ["C" , "D" , "M"],
      ["X" , "L" , "C"],
      ["I" , "V" , "X"],
    ];

    // Turn the input into a string and add leading 0s to make it 4 digits
    let inputAsString = String(number);
    inputAsString = "0".repeat(4 - inputAsString.length) + inputAsString;

    // Split the input into an array so now we have a value for thousands, hundreds, tens and units
    let inputAsArray = inputAsString.split("");

    // Empty string to append numerals to
    let numeralString = "";

    for (let i = 0 ; i < inputAsArray.length ; i++) {
      let unit = inputAsArray[i];
      let tier = numeralRange[i];
      let single = tier[0];
      let middle = tier[1];
      let upper = tier[2];

      if (unit == 4) {
        // E.G IV, XL, CD
        numeralString += `${single}${middle}`;
      } else if (unit == 9) {
        // E.G IX, XC, CM
        numeralString += `${single}${upper}`;
      } else {
        if (unit >= 5) {
          // Any number greater than 5 appends a mid-point numeral 
          // E.G 8 is VIII
          numeralString += middle;
          unit -= 5;
        }

        numeralString += single.repeat(unit);
      }
    }

    return numeralString;
  }
}

module.exports = RomanNumeralGenerator;