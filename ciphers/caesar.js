export default class Caesar {
  constructor(plainText, key) {
    this.plainText = plainText;
    this.key = key;
  }

  encrypt() {
    let output = "";
    for (let i = 0; i < this.plainText.length; i++) {
      let c = this.plainText[i];
      if (c.match(/[a-z]/i)) {
        let code = this.plainText.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + this.key) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + this.key) % 26) + 97);
        }
      }
      output += c;
    }
    return output;
  }
}

// let user1 = new Caesar("ahmed", 1);
// let user2 = new Caesar("binfe", -1);
// console.log(user1.encrypt());
// console.log(user2.encrypt());
