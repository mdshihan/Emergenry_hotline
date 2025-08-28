const heartCount = document.getElementsByClassName("heart-icon");
const hrtCnt=document.getElementById('hrt-count')
for(const heartcnt of heartCount ){
    heartcnt.addEventListener('click',function(){
        let currentCount = parseInt(hrtCnt.innerText) 
        currentCount+=1;
        hrtCnt.innerText = currentCount;
    })
}

const clickCall= document.getElementsByClassName("call-btn")
for(const call of clickCall){
    call.addEventListener('click', function(e){
        e.preventDefault();
        alert("")
    })
}