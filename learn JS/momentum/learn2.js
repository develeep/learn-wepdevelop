// 형변환
// parseInt() = string int로 변경
const a = 'ihuih';
console.log(a , typeof a , parseInt(a), typeof parseInt(a) )
// isNaN() = number인지 아닌지 알려주는 함수
console.log(a, isNaN(a));
if(isNaN(a)){
  console.log('Please Write number');
}