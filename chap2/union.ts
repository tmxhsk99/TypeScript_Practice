let unionObj: null | { name: string } = null;
unionObj = {name: 'John'};
console.log(unionObj);

/*
unionObj 변수는 | 문자를 사용해 null 타입이나 { name: string  }으로 선언한다.
이 코드를 컴파일하고 실행한다면 두 가지 타입 값을 갖는 것을 알 수 있다.
즉, 해당 타입 값은 null 이거나 { name: string } 타입의 객체가 된다.
*/
