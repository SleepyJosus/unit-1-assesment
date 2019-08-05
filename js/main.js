document.getElementById('plus').addEventListener('click', handlePlus);
document.getElementById('minus').addEventListener('click', handleMinus);
let inputEl = document.querySelector('input');
let numEl = document.querySelector('h1');
let temp;

function handlePlus() {
    temp = parseFloat(numEl.textContent);
    temp += parseFloat(inputEl.value)
    render();
}

function handleMinus() {
    temp = parseFloat(numEl.textContent);
    temp -= parseFloat(inputEl.value)
    render();
}

function render() {
    numEl.className = temp >= 0 ? 'green' : 'red';
    numEl.textContent = temp;
}