// checking sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8]

let array1 = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

// Approch - 1
// let array2=[]
// const comparedValue = () => {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = i + 1; j < array1.length; j++) {
//             if (array1[i]+array1[j]===0)
//                 array2.push([array1[i],array1[j]]);

//         }
//     }

// }
// comparedValue();
// console.log(array2);

// Optimized Approach
let array2 = [];
let left = 0;
let right = array1.length - 1;
const result = () => {
    while (left < right) {
        let sum = array1[left] + array1[right];
        if (sum === 0) {
            return array2.push([array1[left], array1[right]]);
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
};
result();
console.log(array2);
