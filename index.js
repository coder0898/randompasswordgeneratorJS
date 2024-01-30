// Variable
const passwordDisplay = document.getElementById('passwordDisplay');
const generatePassword = document.getElementById('generatePassword');

// Input Variable
let lenght = 6;
let upperCaseInput = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseInput = 'abcdefghijklmnopqrstuvwxyz';
let numberInput = '0123456789';
let splCharacterInput = '_#@$*&';

let allInput = upperCaseInput+lowerCaseInput+numberInput+splCharacterInput;

// function to generate Password
const passwordGenerated = ()=>{
    let finalPassword = '';

    finalPassword += upperCaseInput[Math.floor(Math.random()*upperCaseInput.length)];
    finalPassword += lowerCaseInput[Math.floor(Math.random()*lowerCaseInput.length)];
    finalPassword += numberInput[Math.floor(Math.random()*numberInput.length)];
    finalPassword += splCharacterInput[Math.floor(Math.random()*splCharacterInput.length)];

    while (lenght > finalPassword.length) {
        finalPassword += allInput[Math.floor(Math.random()*allInput.length)];
    }

    // console.log(finalPassword);
    passwordDisplay.value = finalPassword;
}

generatePassword.addEventListener('click', passwordGenerated);