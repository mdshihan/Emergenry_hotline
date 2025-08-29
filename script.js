  const cleanHis= document.getElementById("add-history");

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
    let time = new Date().toLocaleTimeString();

    newElemnt.innerHTML = `
                      <div class="flex justify-between p-3 mt-2 bg-[#fafafa]">
                    <div>
                        <h1 class ="font-bold text-lg"> ${serviceName} </h1>
                        <p>${serviceNumber}</p> 
                </div>
                <p>${time}</p>
            </div>
    `
    const historyContainer = document.getElementById("add-history")
    historyContainer.appendChild(newElemnt)

  });
}
// clear history 
const clear =document.getElementById("clear-btn")
clear.addEventListener('click', function(){
  cleanHis.innerHTML = ""
})
