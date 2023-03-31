/**
 * 함수가 어떤 형태인지 타입을 정할 수 있다.
 * 자바 함수형 인터페이스 Funtion<T,R> 과 비슷함
 */
type Run = (miles: number) => boolean;

// 변수명이 runner
// 변수 타입이 Run 아까 위에서 제정한 함수
// 그 이후에 위제정한 함수 파라미터와 리턴값에 맞게 함수를 구현함
let runner: Run = function (miles: number): boolean {
    if (miles > 10) {
        return true;
    }
    return false;
}

console.log(runner(9));
