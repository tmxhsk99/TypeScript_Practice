let obj: { name: string} & { age: number } = {
    name: "tom",
    age: 25
}
console.log(obj);

/**
 * 이 코드를 컴파일하고 실행하면 name과 age 속성이 모두 포함된 객체를 확인할 수 있다.
 */