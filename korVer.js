//html선택자
const result = document.querySelector('.result');//결과창 선택자
const rockBtn = document.querySelector('.rock');//바위 버튼
const paperBtn = document.querySelector('.paper');//보 버튼
const scissorsBtn = document.querySelector('.scissors');//가위 버튼
const clearBtn = document.querySelector('.clearBtn'); //게임초기화 버튼
const details = document.querySelector('.details')//게임 해설창
const outCome = document.querySelector('.outCome')//ai vs player

const onOffStatics = document.querySelector('.statics')//통계창 온오프 스위치
const allStatics = document.querySelector('#theStatic')//전체통계창
const winStatic = document.querySelector('.winStatic');//승리통계창
const loseStatic = document.querySelector('.loseStatic');//패배통계창
const tieStatic = document.querySelector('.tieStatic');//무승부통계창
const rates = document.querySelector('.rates');//승률통계창
//n VS n 선택자
const situation = document.querySelector('.situation');

const playerSelection = document.querySelectorAll('.playerSelection')

rates.addEventListener('click',()=>{
    alert('무승부는 승리로 취급하지 않는다.')
})

 
//게임통계
let winRate = 0;
let loseRate = 0;
let tieRate = 0;
let totalGame = () => winRate + loseRate + tieRate;
const getTotalRate = () =>{
    let rate = winRate/totalGame()*100;
    return rate.toFixed(3);
}




//승패함수
const win = ()=>{
    result.innerHTML = `니가 이겼다...`
    console.log('이겼습니다!')
}
const lose = () =>{
    result.innerHTML =`강해져서 돌아와라!`
    console.log('졌습니다!')
}
const tie = () =>{
    result.innerHTML = `비긴걸로 하지 않을래...?`
    console.log('비겼습니다!')
}
//ai함수
const aiDecision = () =>{
    const aiStans = Math.floor(Math.random()*3)+1
    let aiResult;
    switch(aiStans){
        case 1:
            aiResult = '가위';
            break;
        case 2:
            aiResult = '바위';
            break;
        case 3:
            aiResult = '보';
            break;
    }
    return aiResult;
}

//게임함수
const clickEvt = (playerValue) =>{
    let aiResult = aiDecision()
    if(aiResult === playerValue){
        tie();
        tieRate ++;
    } else if(
        (aiResult === '가위' && playerValue ==='바위')||
        (aiResult === '바위' && playerValue === '보') ||
        (aiResult === '보' && playerValue === '가위')
    ){
        win();
        winRate ++;
        details.innerHTML = `${playerValue}는 ${aiResult}를 이깁니다!`
    } else{
        lose();
        loseRate ++;
        details.innerHTML = `${playerValue}는 ${aiResult}를 이길 수 없습니다`
    }
    outCome.innerHTML = `${playerValue} VS ${aiResult}`
    winStatic.innerHTML = `승리: ${winRate}`;
    loseStatic.innerHTML = `패배: ${loseRate}`;
    tieStatic.innerHTML = `무승부: ${tieRate}`;
    rates.innerHTML = `승률: ${getTotalRate()}%`
    situation.innerHTML = `${winRate} VS ${loseRate}`

    //최종게임 결과
    if(winRate >= 5){
        result.innerText = "승리!!!"
        disablebtns()
        result.addEventListener('click', restart)
    } else if(loseRate >= 5){
        result.innerText = "패배... ㅜㅠ"
        disablebtns()
        result.addEventListener('click', restart)
    }
    /**
     * 게임함수 안에서만 winRate나 loseRate가 바뀌니까
     * Rate에 의존하는 최종게임 결과 로직은 게임함수 안에서 동작해야 한다.
     */
}

//가위를 눌렀을 때
scissorsBtn.addEventListener('click',()=>{
    clickEvt('가위')
})
//바위를 눌렀을 때
rockBtn.addEventListener('click',()=>{
    clickEvt('바위')
})
//보를 눌렀을 때
paperBtn.addEventListener('click',()=>{
    clickEvt('보')
})

//초기화를 눌렀을 때

clearBtn.addEventListener('click',(restart))


//통계를 눌렀을 때
onOffStatics.addEventListener('click',()=>{
    allStatics.classList.toggle("offStatic")
})


//재시작 함수 - 엥커링이 되도록 function키워드로 선언함.
function restart(){
    winRate = 0;
    loseRate = 0;
    tieRate = 0;
    result.innerHTML = "가위 바위 보로 승부닷!!!"
    details.innerHTML = "";
    outCome.innerHTML = "";
    rates.innerHTML = `승률: 0%`
    winStatic.innerHTML = `승리: ${winRate}`;
    loseStatic.innerHTML = `패배: ${loseRate}`;
    tieStatic.innerHTML = `무승부: ${tieRate}`;
    situation.innerHTML = 'player VS AI'
    console.clear()
    disablebtns()
}

function disablebtns(){
    for(let btns of playerSelection){
        btns.classList.toggle('disappear')
    };
    result.classList.toggle('bigger')
}

// const convert = document.querySelector('.convert');
// convert.addEventListener('click',()=>{
//     result.innerHTML = 'Lets play Rock Paper Scissors!!!'
// })