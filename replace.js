function wordReplace(str, before, after) {
  // we split the string into an array, where every element is a single word from the sentence
  let strArr = str.split(" ");

  // we create a function to check if the word we want to replace starts with uppercase or not
  const isUpperCase = (string) => {return /^[A-Z]/.test(string)};

  // we create a function to capitalize first letter
  const capitalise = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)};

  // we iterate with for loop to check what's the index of the word we want to replace and what's the case of 1st letter, and then replace the input before with input after, adjusting first letter's case
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === before) {
      if (isUpperCase(before)) {
      delete strArr[i];
      after = capitalise(after);
      strArr[i] = after;
    } else {
      delete strArr[i];
      strArr[i] = after.toLowerCase();
    }
    }
    }

  // now we make our array string again and return it
  let finalString = strArr.join(" ");
  return finalString;
}
