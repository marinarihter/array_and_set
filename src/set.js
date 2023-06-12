import { arr } from "./array.js";

const set = document.querySelector(".set-list");

function addToSet() {
  set.innerHTML = `[${[...new Set(arr)]}]`;
};

export { addToSet }