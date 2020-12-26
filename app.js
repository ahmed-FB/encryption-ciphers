import Caesar from "./ciphers/caesar.js";
import MonoAlpha from "./ciphers/monoalphabetic.js";
import PlayFair from "./ciphers/playfair.js";
import Vigenere from "./ciphers/vigenere.js";
import RailFence from "./ciphers/railfence.js";

let plainText, key, element1, element2;
let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    switch (this.id) {
      case "caesar":
        element1 = document.getElementById(this.id + "-text");
        element2 = document.getElementById(this.id + "-key");
        if (element1 != null && element2 != null) {
          plainText = element1.value;
          key = element2.value;
          let user = new Caesar(plainText, parseInt(key));
          document.querySelector(
            "#" + this.id + "-answer"
          ).innerHTML = user.encrypt();
          element1.value = "";
          element2.value = "";
        }
        break;

      case "monoalphabetic":
        element1 = document.getElementById(this.id + "-text");
        if (element1 != null) {
          plainText = element1.value;
          document.querySelector(
            "#" + this.id + "-answer"
          ).innerHTML = MonoAlpha(plainText);
          element1.value = "";
        }
        break;

      case "playfair":
        element1 = document.getElementById(this.id + "-text");
        element2 = document.getElementById(this.id + "-key");
        if (element1 != null && element2 != null) {
          plainText = element1.value;
          key = element2.value;

          let playfair = new PlayFair();
          playfair.setKey(key);
          document.querySelector(
            "#" + this.id + "-answer"
          ).innerHTML = playfair.encrypt(plainText);
          element1.value = "";
          element2.value = "";
        }
        break;

      case "vigenere":
        element1 = document.getElementById(this.id + "-text");
        element2 = document.getElementById(this.id + "-key");
        if (element1 != null && element2 != null) {
          plainText = element1.value;
          key = element2.value;
          document.querySelector(
            "#" + this.id + "-answer"
          ).innerHTML = Vigenere.encrypt(plainText, key);
          element1.value = "";
          element2.value = "";
        }
        break;

      case "railfence":
        element1 = document.getElementById(this.id + "-text");
        element2 = document.getElementById(this.id + "-key");
        if (element1 != null && element2 != null) {
          plainText = element1.value;
          key = element2.value;
          document.querySelector(
            "#" + this.id + "-answer"
          ).innerHTML = RailFence(plainText, parseInt(key));
          element1.value = "";
          element2.value = "";
        }
        break;

      default:
        console.error("something went wrong!!");
        break;
    }
  });
});
