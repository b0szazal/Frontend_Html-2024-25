let counter = document.getElementById('counter');
let number=100;

const Add = (amt) => {
    number += amt;
    counter.innerHTML = number;
}

const Subtract = (amt) => {
    number -= amt;
    counter.innerHTML = number;
}