
let maxNumber = parseInt(prompt('Enter Max Number'));

while (!maxNumber) { maxNumber = parseInt(prompt('Enter a valid number')); }

const winningNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(winningNumber)
let guess = prompt('enter first guess');
let i = 1
while (parseInt(guess) != winningNumber) {
    if (guess === 'q') break;
    i++;
    if (guess > winningNumber) { guess = prompt('too high try again') }
    else { guess = prompt('too low try again') }
}
console.log(`Good Job, took you only ${i} attempts`)