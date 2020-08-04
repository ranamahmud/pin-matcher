// hide the notifications
let notifyError = document.querySelector(".notify-section p:first-child");
let notifySuccess = document.querySelector(".notify-section p:nth-child(2)");

notifyError.style.display = "none";
notifySuccess.style.display = "none";

let generatedPin = document.getElementsByClassName("form-control")[0];
let userPin = document.getElementsByClassName("form-control")[1];
let buttonGenerate = document.querySelector(".generate-btn");

let userPinValue = "";

buttonGenerate.addEventListener('click', function () {
    let randomNumber = Math.random();
    let randomString = randomNumber.toString();
    let randomFixed = randomString.substring(2, 6);
    generatedPin.value = randomFixed;
})

const keys = document.querySelectorAll(".calc-body .button");
keys.forEach(function (key) {
    key.addEventListener('click', e => {
        const action = e.target.dataset.action;
        if(action == "back"){
            userPinValue = "";
            userPin.value = userPinValue;
        }else if(action == "clear"){
            userPinValue = userPinValue.substring(0,userPinValue.length - 1);
            userPin.value = userPinValue;
    
        }else if(e.target.className=="button"){
            // console.log(e.target.innerHTML);
            userPinValue += e.target.innerHTML;
            userPin.value = userPinValue;
    
        }
    })
    
})


let submitButton = document.querySelector(".submit-btn");
let totalTry = 0;
let alert = document.querySelector(".action-left");
submitButton.addEventListener('click',function(){

    totalTry += 1;
   
    if(totalTry <= 3){
        alert.innerHTML = (3-totalTry) + " try left";
        if(generatedPin.value == userPinValue){
            notifyError.style.display = "none";
            notifySuccess.style.display = "block";
        }else{
            notifyError.style.display = "block";
            notifySuccess.style.display = "none";
        }
    }else{
        submitButton.disabled = true;
    }
  
})