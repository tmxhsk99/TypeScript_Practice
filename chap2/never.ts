/**
 * never 타입은 반환나 하지 않는 함수 또는 null을 포함해 아무것도 설정하지 않는 변수를 가리키는데 사용한다.
 */

function oldEnough(age: number): never | boolean {
    if (age > 59) {
        throw Error("Too old!");
    }
    if(age <= 18){
        return false;
    }
    return true;
}
// 이 함수는 union 타입을 반환한다.
// 이 union 타입은 never 이거나 불리언이다.
// 하지만 이 함수는 사람의 나이가 기대값이 아니면 오류가 발생한다.
// 캡슐화는 고품질 코드를 작성하기 위한 고수준의 객체지향 원칙이므로
// 개발자가 함수의 내부 동작방식을 알지 못해도 해당 반환되는 함수가 실패 할 수 있다는 것을 명시적으로 알려주는것 좋다.
// never를 사용해 이러한 내용을 처리할수 있다.

let neverType = oldEnough(30);
console.log(neverType);

let neverType2 = oldEnough(60);
console.log(neverType2);