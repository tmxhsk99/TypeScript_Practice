type Points = 20 | 30 | 40 | 50 ;
let score: Points = 20;

console.log(score);


type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string
}

let complex: ComplexPerson =
    {
        name:"이름",
        age:19,
        birthday: new Date(),
        married: true,
        address: "주소지"
    };
console.log(complex);
/**
 *
 * 이 예제 클래스에서 볼 수 있는 것 처럼 타입선언이 아주 길고 하나의 이름을 가지고 있지 않은 경우라면
 * 별칭을 사용한다.
 * 타입별칭은 2장에서 살펴보게될 함수나 제네릭을 포함한 타입스크립트의 어떤 타입이라도 사용할 수 있다.
 */