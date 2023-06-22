const upperCase = "ABCDEFCHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "~!@#$%&*_|\?/.";

const passBox = document.getElementById('pass-box');
const totalChar = document.getElementById('total-char');
const upperInput = document.getElementById('upper-case');
const lowerInput = document.getElementById('lower-case');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');

const getRandomData = (dataSet) => {
    return dataSet[
        Math.floor(
            Math.random() * dataSet.length
        )
    ]
}

const generatePassword = () => {
    let password = "";
    const length = parseInt(totalChar.value);

    const selectedCharacterSets = [];
    if (upperInput.checked) {
        selectedCharacterSets.push(upperCase);
    }
    if (lowerInput.checked) {
        selectedCharacterSets.push(lowerCase);
    }
    if (numbersInput.checked) {
        selectedCharacterSets.push(number);
    }
    if (symbolsInput.checked) {
        selectedCharacterSets.push(symbols);
    }

    if (selectedCharacterSets.length === 0) {
        console.log("Please select at least one character set.");
        return;
    }

    while (password.length < length) {
        const randomSetIndex = Math.floor(Math.random() * selectedCharacterSets.length);
        const randomSet = selectedCharacterSets[randomSetIndex];
        password += getRandomData(randomSet);
    }

    //truncate kiye yaha
    const truncatedPassword = truncateString(password, length);
    console.log(truncatedPassword);
    passBox.innerText = truncatedPassword;
};

generatePassword();

document.getElementById('btn').addEventListener(
    'click',
    function() {
      generatePassword();
    }
);

//truncate kane ka function
function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }else return str;
}
