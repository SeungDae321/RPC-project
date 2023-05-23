# RPC-project
  1. 버튼을 누르면 누른 버튼의 value값을 playerResult값으로 지정

  2. Play the Game버튼을 누르면 게임 시작
       -버튼을 눌렀을 때 게임 시작 함수를 만들어야 할 듯  e.g. addEventListener('click',gameStart())

  3. 이기면 .result안에 win number값이 올라가고 지면 올라가지 않는 함수를 만들어야 함
       -게임 시작 함수 안에 winRate변수를 이길 때 마다 ++ 해주는 방식

  4. 게임 결과(이겼다 || 졌다 || 비겼다)를 .result안에 보여줄 것

  5. 게임이 한 번 끝나면 play the game버튼이 play again으로 바뀔것
       -게임 시작 함수 안에 gameAttempt 변수를 넣어서 게임 한 번 할 때마다 ++해주는 방식
       -이걸로 승률같은 것도 구해볼 수 있음
