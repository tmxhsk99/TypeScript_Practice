let literal: "tom" | "linda" | "jeff" | "sue" = "linda";
literal = "sue"
//literal = "john"
console.log(literal);

/**
 * 리터럴 타입은 유니온타입과 유사하지만 하드코딩한 문열이나 숫자 값의 집합을 사용한다.
 * 다음은 설명이 필요없는 단순한 문자열 리터럴 예제다.
 * 보는 바와 같이 여러개의 하드 코딩된 문자열 타입이다.
 * 즉, 이러한 문자열과 같은 값만 literal 변수로 받는다는 것을 의미한다.
 */

