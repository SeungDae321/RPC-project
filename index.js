//컴퓨터가 낼 수
const aiStans = Math.floor(Math.random()*3)+1

let aiResult;

if(aiStans == 1){
    aiResult = "가위";
}
if(aiStans == 2){
    aiResult = "바위";

}if(aiStans == 3){
    aiResult = "보";
}

//게임 결과 함수
const win = ()=>{
    document.write('이겼습니다!<br>')
    document.write(`${playerResult}는 ${aiResult}를 이깁니다`)
    console.log('이겼습니다!')
}
const lose = () =>{
    document.write('졌습니다!<br>')
    document.write(`${playerResult}는 ${aiResult}를 이길 수 없습니다.`)
    console.log('졌습니다!')
}
const tie = () =>{
    document.write('비겼습니다!')
    console.log('비겼습니다!')
}

//player가 낼 수
let playerResult = prompt('가위바위보 게임을 시작하지: 가위 바위 보!')

if(aiResult === playerResult){ //비겼을 때
    tie();
} else if(aiResult === '가위' && playerResult ==='바위'){ //ai가 가위 일 때
    win()
} else if(aiResult === '가위' && playerResult ==='보'){ //ai가 가위 일 때
    lose()
}else if(aiResult === '바위' && playerResult ==='보'){ //ai가 바위 일 때
    win()
}else if(aiResult === '바위' && playerResult ==='가위'){ //ai가 바위 일 때
    lose()
}else if(aiResult === '보' && playerResult ==='가위'){ //ai가 보 일 때
    win()
}else if(aiResult === '보' && playerResult ==='바위'){ //ai가 보 일 때
    lose()
} else {
    document.write('가위, 바위, 보 중 하나를 입력해주세요')
}