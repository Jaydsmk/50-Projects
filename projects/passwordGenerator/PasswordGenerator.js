const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select(); // auto selecting
  document.execCommand("copy"); // auto copied
  textarea.remove();
  alert("Password copied to clipboard!");
});

generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value); //parseInt == '+' == Number
  //   console.log(typeof length);

  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  //   console.log(hasUpper, hasLower, hasNumber, hasSymbol);

  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  //   console.log(typesCount);

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0] // ????
  );
  //   console.log(typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      //   console.log(type);

      const funcName = Object.keys(type)[0];
      console.log(funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// const numbers = [1, 2, 3, 3, 4, 5, 5];
// const newNumbers = numbers.filter((number, index, target) => {
//   console.log("number " + number);
//   console.log("targetIndexOf " + target.indexOf(number));
//   console.log("index " + index);
//   return target.indexOf(number) === index;
// });
// console.log(newNumbers);

// fromCharCode() <-> charCodeAt()
https: function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
