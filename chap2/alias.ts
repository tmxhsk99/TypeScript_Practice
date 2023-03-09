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