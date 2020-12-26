//MonoAlphabetic
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let shuffledArr;
let alphabetArr = alphabet.split("");

shuffledArr = alphabetArr.slice(0, alphabetArr.length);
let currentIndex = shuffledArr.length;
let temporaryValue, randomIndex;

while (currentIndex !== 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = shuffledArr[currentIndex];
  shuffledArr[currentIndex] = shuffledArr[randomIndex];
  shuffledArr[randomIndex] = temporaryValue;
}

function MonoAlpha(plainText) {
  let textArr = plainText.split("");

  for (let i = 0; i < textArr.length; i++) {
    textArr[i] = shuffledArr[alphabetArr.indexOf(textArr[i].toUpperCase())];
  }

  return textArr.join().replace(/,/g, "");
}
export default MonoAlpha;
