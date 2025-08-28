const heartCount = document.getElementsByClassName("heart-icon");
const hrtCnt=document.getElementById('hrt-count')
for(const heartcnt of heartCount ){
    heartcnt.addEventListener('click',function(){
        let currentCount = parseInt(hrtCnt.innerText) 
        currentCount+=1;
        hrtCnt.innerText = currentCount;
    })
}

// const heartCount = document.getElementsByClassName("heart-icon");
// const hrtCntElement = document.getElementById('hrt-count');

// for (const heart of heartCount) {
//     heart.addEventListener('click', function() {
//         let currentCount = parseInt(hrtCntElement.innerText);
//         currentCount += 1;
//         hrtCntElement.innerText = currentCount;
//     });
// }
