let array = document.querySelector(".array-list");
let arr = [];

function addToArray () {
    array.innerHTML = `[${arr}]`;
};

export { arr, addToArray };