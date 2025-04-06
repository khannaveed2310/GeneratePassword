const PasswordBox = document.getElementById("password");
const Generate = document.getElementById("Generate");
const Copy = document.getElementById("Copy");
const LengthRange = document.getElementById("lengthRange"); // <- New line

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "~!@#$%^&*()-_+={}[]|/;<>,.?";
const allChars = upperCase + lowerCase + number + special;


function createPassword() {
    const length = parseInt(LengthRange.value); // <- Use selected length
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    PasswordBox.value = password;
}

Generate.addEventListener("click", function () {
    createPassword()
})


function copyPassword() {
    PasswordBox.select()
    document.execCommand("copy")
}

Copy.addEventListener("click", function () {
    copyPassword()
})