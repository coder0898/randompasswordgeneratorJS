// Variable
const passwordDisplay = document.getElementById('passwordDisplay');
const generatePassword = document.getElementById('generatePassword');

// Input Variable
let lenght = 6;
let upperCaseInput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseInput = 'abcdefghijklmnopqrstuvwxyz';
let numberInput = '0123456789';
let splCharacterInput = '_#@$*&';

// function to generate Password
const passwordGenerated = ()=>{
    let finalPassword = '';

    finalPassword += upperCaseInput[Math.floor(Math.random()*upperCaseInput.length)];
    finalPassword += lowerCaseInput[Math.floor(Math.random()*lowerCaseInput.length)];
    finalPassword += numberInput[Math.floor(Math.random()*numberInput.length)];
    finalPassword += splCharacterInput[Math.floor(Math.random()*splCharacterInput.length)];

    if (finalPassword < lenght) {
        finalPassword += upperCaseInput[Math.floor(Math.random()*upperCaseInput.length)];
        finalPassword += lowerCaseInput[Math.floor(Math.random()*lowerCaseInput.length)];
        finalPassword += numberInput[Math.floor(Math.random()*numberInput.length)];
        finalPassword += splCharacterInput[Math.floor(Math.random()*splCharacterInput.length)];
    }
}

generatePassword.addEventListener('click', passwordGenerated);