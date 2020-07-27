var buttonGenerate = document.getElementsByClassName("generate-btn")[0];

buttonGenerate.addEventListener('click',function () {
    console.log("Button Clicked");
    let randomNumber = Math.random();
    let randomString = randomNumber.toString();
    let randomFixed = randomString.substr(2,5);

    // get the input box
})
