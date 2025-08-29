

const heartCount = document.getElementsByClassName("heart-icon");
const hrtCnt=document.getElementById('hrt-count')
for(const heartcnt of heartCount ){
    heartcnt.addEventListener('click',function(){
        let currentCount = parseInt(hrtCnt.innerText) 
        currentCount+=1;
        hrtCnt.innerText = currentCount;
    })
}

// call section 

const callButtons = document.getElementsByClassName("call-btn");
const callRate = document.getElementById("rate")

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest("div.bg-white");
    let  available = parseInt(callRate.innerText);
    if(available<20){
        alert("You have not sufficiant coin. Please recharge!")
        return
    }

    const serviceName = card.querySelector("div.my-6 h1").innerText;

    const serviceNumber = card.querySelector("div.my-6 + h1").innerText;

    alert(` Calling ${serviceName} ${serviceNumber}`);
    let afterCallBalance = available-20;
    callRate.innerText= afterCallBalance;
    const newElemnt = document.createElement("div")

    newElemnt.innerHTML = `
    
    `

  });
}
