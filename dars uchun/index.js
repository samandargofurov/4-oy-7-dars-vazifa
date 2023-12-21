// massive

// let array = [1, 3, "hello", "bye", true];
// elementni ozgartirish
// array[4] = false;
// element oxiriga qoshish push
// array.push("goodbye");
// element boshiga qoshadi unshift
// array.unshift(salom);
// elementni oxiridan ochiradi
// array.pop();
// elementni boshidan ochiradi
// array.shift();
// console.log(array);


let arr = [1, 3, 5, 7, 8];

function sumArr(arg) {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] % 2 == 0){
            sum = sum + arg[i];
        }
    }
    return sum;
}

console.log(sumArr(arr));