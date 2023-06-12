import { arr, addToArray } from "./array.js";
import { addToSet } from "./set.js";
import { chooseRandomEmoji } from "./emoji.js";

const btn = document.querySelector(".btn");
const input = document.querySelector(".internal-input");

addEmoji();

btn.addEventListener("click", () => {
    if (input.value) {
      arr.push(input.value);
    }
    addToArray();
    addToSet();
    addEmoji();
});

function addEmoji() {
  
  input.value = chooseRandomEmoji()
}
