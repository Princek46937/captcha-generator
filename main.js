const captchaOutput = document.querySelector("#captchaOutput")
const captchaInput = document.querySelector("#captchaInput");
const refreshBtn = document.querySelector("#refreshBtn");
const checkBtn = document.querySelector("#checkBtn");


// refreshBtn for generateCaptcha inside p tag
refreshBtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    captchaOutput.textContent = generateCaptcha();
    captchaInput.value = ""

})



// Function to generateCaptcha 
function generateCaptcha(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    const captchaLength = 6;
    let captchaCode = ""

    for(let i=0; i<captchaLength; i++){
       const randomIndex = Math.floor(Math.random() * characters.length)
       captchaCode += characters.charAt(randomIndex)
    }
    return captchaCode
}

//CheckBtn check if the captcha is correct or incorrect
checkBtn.addEventListener("click" , (e)=>{
    e.preventDefault();

    let userCaptcha = captchaInput.value;
    let outPutCaptcha = captchaOutput.textContent;

    if(userCaptcha === outPutCaptcha){
        alert("Captcha is correct")
    }
    else{
        alert("Captcha is Incorrect")
    }
})