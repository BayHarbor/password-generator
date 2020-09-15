
const pwdTextEl = document.getElementById("pwd");
const copyButtonEl = document.getElementById("copy");
const userLengthEl = document.getElementById("user-length");
const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function generatePwd() {
    const length = userLengthEl.value;
    let generatedString = "";

    if(lowerEl.checked || upperEl.checked || numberEl.checked || symbolEl.checked){
        while(generatedString.length < length){

            if(lowerEl.checked){
                generatedString += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            if(upperEl.checked){
                generatedString += alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();        
            }
            if(numberEl.checked){
                generatedString += numbers[Math.floor(Math.random() * numbers.length)];               
            }
            if(symbolEl.checked){
                generatedString += symbols[Math.floor(Math.random() * symbols.length)];               
            }
        }
        generatedString = generatedString.substring(0,length);
    }

    pwdTextEl.innerText = generatedString;
}

generateEl.addEventListener("click", generatePwd);

copyButtonEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwdTextEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});
