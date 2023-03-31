/**
 * 숫자 타입 파라미터를 받고 숫자를 반환한다.
 * @param distance
 */
function runMore(distance: number): number {
    return distance + 10;
}

console.log(runMore(20));

function eat(calories: number): void {
    console.log("I ate" + calories + " callories");
}

function sleepIn(hours: number): void {
    console.log("I slept " + hours + " hours");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
