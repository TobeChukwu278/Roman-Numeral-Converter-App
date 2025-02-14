const form = document.getElementById('form');
const numberOutput = document.getElementById('output');
const convertButton = document.getElementById('convert-btn');

const convertToRoman = num => {
    const base = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["X", 5],
        ["IX", 4],
        ["I", 1],
    ]

    const roman = [];
    base.forEach(function(arr){
        while(num >= arr[1]){
            roman.push(arr[0]);
            num -= arr[1];
        }
    })
    return roman.join('');
}

const isNumber = (str, int) => {
    let errMsg = " ";
    if(!str || str.match(/[e.]/g)){
        errMsg = "please enter a valid number";
    }else if (int < 1){
        errMsg = "Please enter a number greater than or equal to one";
    }else if (int >= 4000){
        errMsg = "Please enter a number greater than or equal to one";
    }
    else {
        return true;
    }
    numberOutput.inneText = errMsg;
    numberOutput.classList.add("alert");
    return false;
}

const wipeAlert = () => {
    numberOutput.innerText = "";
    numberOutput.classList.remove("alert");
}

const UIUpdate = () => {
    const numStr =document.getElementById("number").value;
    const int = parseInt(numStr, 10);
    numberOutput.classList.remove("hidden");
    wipeAlert();
    if(isNumber(numStr, int)){
        numberOutput.innerText = convertToRoman(int);
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    UIUpdate();
})

convertButton.addEventListener("click", () => {
    UIUpdate()
});