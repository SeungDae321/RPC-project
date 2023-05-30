//html selectors
const result = document.querySelector('.result');//result selector
const rockBtn = document.querySelector('.rock');//rock btn
const paperBtn = document.querySelector('.paper');// paper btn
const scissorsBtn = document.querySelector('.scissors');//scissors btn
const clearBtn = document.querySelector('.clearBtn'); //clear btn
const details = document.querySelector('.details')//explain last game
const outCome = document.querySelector('.outCome')//ai vs player

const onOffStatics = document.querySelector('.statics')// static on/off btn
const allStatics = document.querySelector('#theStatic')
const winStatic = document.querySelector('.winStatic');
const loseStatic = document.querySelector('.loseStatic');
const tieStatic = document.querySelector('.tieStatic');
const rates = document.querySelector('.rates');
const situation = document.querySelector('.situation'); //show N vs N

rates.addEventListener('click',()=>{
    alert('TIES are NOT count as WINS.')
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




//win & lose func
const win = ()=>{
    result.innerHTML = `yeah... you won this time`
    console.log('win!')
}
const lose = () =>{
    result.innerHTML =`you've just beaten up!`
    console.log('lose!')
}
const tie = () =>{
    result.innerHTML = `Lets call it a tie...`
    console.log('tie!')
}
//ai func
const aiDecision = () =>{
    const aiStans = Math.floor(Math.random()*3)+1
    let aiResult;
    switch(aiStans){
        case 1:
            aiResult = 'SCISSORS';
            break;
        case 2:
            aiResult = 'ROCK';
            break;
        case 3:
            aiResult = 'PAPER';
            break;
    }
    return aiResult;
}

//game func
const clickEvt = (playerValue) =>{
    let aiResult = aiDecision()
    if(aiResult === playerValue){
        tie();
        tieRate ++;
    } else if(
        (aiResult === 'SCISSORS' && playerValue ==='ROCK')||
        (aiResult === 'ROCK' && playerValue === 'PAPER') ||
        (aiResult === 'PAPER' && playerValue === 'SCISSORS')
    ){
        win();
        winRate ++;
        details.innerHTML = `${playerValue} wins ${aiResult}!`
    } else{
        lose();
        loseRate ++;
        details.innerHTML = `${playerValue} can't win ${aiResult}`
    }
    outCome.innerHTML = `${playerValue} VS ${aiResult}`
    winStatic.innerHTML = `wins: ${winRate}`;
    loseStatic.innerHTML = `loses: ${loseRate}`;
    tieStatic.innerHTML = `ties: ${tieRate}`;
    rates.innerHTML = `win rates: ${getTotalRate()}%`
    situation.innerHTML = `${winRate} VS ${loseRate}`

    //whole game results
    if(winRate >= 5){
        alert('YOU WIN!!!')
        restart();
    } else if(loseRate >= 5){
        alert('YOU LOSE :( ')
        restart()
    }
    /**
     * this whole game results are relying on rates(win/lose/tie rates) that change inside of the game func
     * so, this logic should be inside of the game func too.
     */
}

//when scissors btn clicked
scissorsBtn.addEventListener('click',()=>{
    clickEvt('SCISSORS')
})
//when rock btn clicked
rockBtn.addEventListener('click',()=>{
    clickEvt('ROCK')
})
//when paper btn clicked
paperBtn.addEventListener('click',()=>{
    clickEvt('PAPER')
})

//when claer btn clicked
clearBtn.addEventListener('click',(restart))


//when statics btn clicked
onOffStatics.addEventListener('click',()=>{
    allStatics.classList.toggle("offStatic")
})


//restart func - decleared with "funciton" key word to make sure for hoisting.
function restart(){
    winRate = 0;
    loseRate = 0;
    tieRate = 0;
    result.innerHTML = "Lets Play ROCK PAPER SCISSORS!!!"
    details.innerHTML = "";
    outCome.innerHTML = "";
    rates.innerHTML = `win rates: 0%`
    winStatic.innerHTML = `wins: ${winRate}`;
    loseStatic.innerHTML = `loses: ${loseRate}`;
    tieStatic.innerHTML = `ties: ${tieRate}`;
    situation.innerHTML = 'player VS AI'
    console.clear()
}