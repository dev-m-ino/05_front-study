/*
  ## Number ##
  숫자를 표현하고 다루는 내장 객체 

  1. Number() 생성자
     → Number('123')     === 123


  ## Number의 프로퍼티 ## 

  1. Number.NaN
     → Not-A-Number : 숫자가 아님
     → NaN 과 동일함

  2. Number.NEGATIVE_INFINITY
     → 음의 무한대
     → -Infinity 와 동일함

  3. Number.POSITIVE_INFINITY
     → 양의 무한대
     → Infinity 와 동일함

  4. Number.MAX_VALUE
     → JavaScript에서 표현할 수 있는 가장 큰 양수 값 

  5. Number.MIN_VALUE
     → JavaScript에서 표현할 수 있는 가장 작은 양수 값 

*/

console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);   
console.log(Number.POSITIVE_INFINITY);   
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


/*
  ## Number의 메소드 ##

  1. Number.isFinite(value)
     → 전달된 value 가 정상적인 유한수이면 true 아니면 false 반환 

  2. Number.isInteger(value)
     → 전달된 value 가 정수이면 true 아니면 false 반환
  
  3. Number.isNaN(value)
     → 전달된 value 가 NaN 이면 true 아니면 false 반환
  
  4. Number.parseFloat(string)
     → 전달된 문자열을 부동소수점 실수로 파싱한 결과를 반환
     → 전달된 값이 문자열이 아니면 자동으로 문자열로 변환(ToString 추상 연산)한 후 처리함
     → 전역 함수 parseFloat() 과 동일함 (Number.parseFloat === parseFloat)

  5. Number.parseInt(string[, radix])
     → 전달된 문자열을 특정 진수값으로 파싱한 결과를 반환
     → 전달된 값이 문자열이 아니면 자동으로 문자열로 변환(ToString 추상 연산)한 후 처리함
     → radix(Optional)
       1) 2부터 36까지의 정수 값
       2) 16 : 생략하거나 0을 지정한 경우, string 이 0x 또는 0X로 시작하는 경우
       3) 10 : 나머지 모든 경우
     → 전역 함수 parseInt() 와 동일함 (Number.parseInt === parseInt)
  
  6. Number.prototype.toFixed([digits])
     → 고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼 값을 반환
     → 소수점 뒤에 나타날 자릿수, 0 ~ 20 사이 값을 가짐, 기본값은 0
*/

console.log(Number.isFinite(10));           
console.log(Number.isFinite(-10));          
console.log(Number.isFinite(Infinity));     
console.log(Number.isFinite(-Infinity));    
console.log(Number.isFinite(NaN));          
console.log(Number.isFinite(null));         

console.log(Number.isInteger(10));          
console.log(Number.isInteger(-10));         
console.log(Number.isInteger(10.10));       
console.log(Number.isInteger(-10.10));      
console.log(Number.isInteger('10'));        
console.log(Number.isInteger(false));       
console.log(Number.isInteger(Infinity));    
console.log(Number.isInteger(-Infinity));   

console.log(Number.isNaN(10));                  
console.log(Number.isNaN(-10));             
console.log(Number.isNaN('10'));            
console.log(Number.isNaN(true));            
console.log(Number.isNaN(NaN));             
console.log(Number.isNaN(undefined));

let str = '123.456';
console.log(parseFloat(str));
console.log(parseInt(str, 2));
let num = 1.6345;
console.log(num.toFixed(3));


function isNum(num) {
   let pattern = /^-?[0-9]+(\.[0-9]+)?$/g;
   return pattern.test(num);
}
function getTotal(arr){
   let num = arr.filter( e => isNum(e) || typeof e == 'number').map( e => parseInt(e)).reduce((a, b) => a+b, 0);
   return num;
}

!Number.isNaN(item/1) && typeof item != 'boolean'

const array = ['hello', 'world', 10, 20, 30.23, '40', '-40', '40.223',true, false, () => {}];
console.log(getTotal(array));