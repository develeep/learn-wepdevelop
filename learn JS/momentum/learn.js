// 콘솔에 출력
console.log(125432);

// const = 상수 바뀌지 않음, let = 변경가능
const a = 5;
const b = '2';
// js 변수명 작성방법 - 다음단어부터 첫문자가 대문자
const veryLongVariableName = 0

console.log(a + b);
console.log(a / b);
console.log(a * b);
// null = 값이 없음, false 값이 false
const amIFat = null;
const bmIFat = false;
// undefined = 값이 저장되어있지 않음. 메모리에 공간은 할당되었는데 값이 없음
// 배열 []로 지정
const dayOfWeek = [];
console.log(dayOfWeek);
// push = 배열 추가
dayOfWeek.push("sun");
console.log(dayOfWeek);

// object = 딕셔너리
// const player = {
//   name: "nico",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// console.log(player.name);


function sayHello(nameOfPerson, age){
  console.log('hello! my name is '+nameOfPerson+'my age is '+age);
}
sayHello('nico',10);
sayHello('dal',23);
sayHello('lynn',21);

const player = {
  name: 'nico',
  sayHello: function(){
    console.log('hello!');
  },
};

console.log(player.name);
player.sayHello();

// object와 function을 이용한 계산기
const calculator = {
  add : function(first,second){
    console.log(first+second);
  },
  minus : function(first,second){
    console.log(first-second);
  },
  mul : function(first,second){
    console.log(first*second);
  },
  div : function(first,second){
    console.log(first/second);
  },
  powerOf: function(first,second){
    console.log(first**second);
  },
};
// console.log를 아닌 return으로 값 반환
// return시 function 끝남 무조건
const calc = {
  add : function(first,second){
    return first+second;
  },
  minus : function(first,second){
    return first-second;
  },
  mul : function(first,second){
    return first*second;
  },
  div : function(first,second){
    return first/second;
  },
  powerOf: function(first,second){
    return first**secon;
  },
};




const addResult = calc.add(2,3);
const minusResult = calc.minus(2,3);
const mulResult = calc.mul(2,3);
const divResult = calc.div(2,3);
const pOResult = calc.powerOf(2,3);

