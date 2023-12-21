// 1-masala
// Sonlardan tashkil topgan massiv elementlari orasidan toqlarining sonini topuvchi funksiya yozing.

// let array = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumArr(arg) {
//     let counter = 0;
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1){
//             counter++
//         }
//     }
//     return counter;
// }

// console.log(sumArr(array));

// 2-masala
// Sonlardan tashkil topgan massiv elementlari orasidan 3 ga hamda 7 ga karralilarining kopaytmasini topuvchi funksiya yozing.

// let array = [15, 7, 3, 21, 5, 6];
// let sum = 1;

// function karralilariKopaytmasi(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 3 == 0 && arg[i] % 7 == 0){
//             sum *= arg[i];
//         }
//     }
//     return sum;
// }

// console.log(karralilariKopaytmasi(array));

// 3-masala
// Sonlardan tashkil topgan massiv berilganda uning toq elementlaridan iborat yangi massiv hosil qiladigan funksiya yozing.

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newMassiv = [];

// function toqIndexElementlar(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 1){
//             newMassiv.push(arg[i]);
//         }
//     }
//     return newMassiv;
// }

// let newMassiv1 = toqIndexElementlar(massiv);
// console.log("toq elementlar massivi:", newMassiv1);


// 4-masala
// Sonlardan tashkil topgan massiv berilganda uning juft indexsidagi elementlaridan iborat yangi massiv hosil qiladigan funksiya yozing.

// let massiv = [2, 3, 4, 5, 6, 7, 8, 9];
// let newMassiv = [];

// function juftIndexElementlar(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0){
//             newMassiv.push(arg[i]);
//         }
//     }
//     return newMassiv;
// }

// let newMassiv1 = juftIndexElementlar(massiv);
// console.log("juft elementlar massivi:", newMassiv1);


// 5-masala
// So'zlardan tashkil topgan massiv berilganda ushbu so'zlarning bosh hariflaridan iborat yangi massiv hosil qiladigan funksiya yozing.

// let words = ["hello", "world", "java", "script"];
// let shortNewMassiv = [];

// function headWordsMassiv(arg) {
//     for (let i = 0; i < arg.length; i++) {
//             let word = arg[i];
//             let headletter = word.charAt(0);

//             shortNewMassiv.push(headletter);
//         }
//         return shortNewMassiv;
// }

//     let yangiMassiv = headWordsMassiv(words);
//     console.log(yangiMassiv);

// 6-masala
// Sonlardan tashkil topgan massiv berilganda ushbu massiv orasidagi tub sonlar sonini topuvchi funksiya yozing 

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let newMassiv = [];

// function toqSon(arg) {
//     let counter = 0;
//     for (let i = 1; i <= arg.length; i++) {
//         if (arg[i] % 2 == 1){
//             counter++
//             newMassiv.push(arg[i]);
//         }
//     }
//     console.log(counter);
//     return newMassiv
// }

// let newMassiv1 = toqSon(massiv);
// console.log("toq sonlar soni => " + newMassiv1);

// 7-masala
// Sonlardan tashkil topgan massiv berilganda uning juft hamda 5 ga karrali elementlaridan iborat yangi massiv hosil qiladigan funksiya yozing.

// let array = [20, 3, 4, 15, 60, 7, 9];
// let newMassiv = [];

// function juftVaKarrali(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0 && arg[i] % 5 == 1){
//             newMassiv.push(array);
//         }
//     }
//     return newMassiv;
// }

// let newMassiv1 = juftVaKarrali(array);
// console.log("juft hamda 5 ga karralilar elementlari massivi:", newMassiv1);


// let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newMassiv = [];

// function toqIndexElementlar(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0 && arg[i] % 5 == 0){
//             newMassiv.push(arg[i]);
//         }
//     }
//     return newMassiv;
// }

// let newMassiv1 = toqIndexElementlar(massiv);
// console.log("toq elementlar massivi:", newMassiv1);


// let array = [15, 7, 3, 21, 5, 6];
// let counter = 0;
// let newMassiv = [];

// function karralilariKopaytmasi(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         if (arg[i] % 2 == 0 && arg[i] % 5 == 0){
//             counter++
//             newMassiv.push(arg[i]);
//         }
//     }
//     return newMassiv;
// }

// let newMassiv1 = karralilariKopaytmasi(array);
// console.log(karralilariKopaytmasi(newMassiv1));