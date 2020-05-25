/* 
1. Fix following code at least in 2 different ways

Actual result:

Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined
Index: 4, element: undefined


Expected result:
Index: 0, element: 100
Index: 1, element: 101
Index: 2, element: 102
Index: 3, element: 103

*/

// const numbers = [100, 101, 102, 103];

// for (var i = 0; i < numbers.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + numbers[i]);
//   }, 1000);
// }


// Первый вариант:

const numbers = [100, 101, 102, 103];

for (var i = 0; i < numbers.length; i++) {
  setTimeout(function(into) {
    return function() { 
    console.log('Index: ' + into + ', element: ' + numbers[into]);
  }
 }(i), 1000);
}

// Второй вариант:

const numbers = [100, 101, 102, 103];

for (let i = 0; i < numbers.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + numbers[i]);
  }, 1000);
}











/*
2. Write a recursion function to console.log() all values in every nested object.
Recursion is used here to support nested structures of unlimited depth length

Expected result (order doesn't matter here):

'child_1'
'child_2'
...
etc.

*/

const items = [
    { 
        value: 'child_1',
        parents: [{
            value: 'parent_1',
            parents: [{
                value: 'grandparent_1',
                parents: [],
            }],
        },
        {
            value: 'parent_2',
            parents: [{
                value: 'grandparent_2',
                parents: [{
                    value: 'grandgrandparent_2',
                    parents: null,
                }],
            }],
        }],
    },
    { 
        value: 'child_2',
        parents: null,
    }
];


let [a, b] = items;
function printList(x) {

  alert(x.value); // выводим текущий элемент

  if (x.next) {
    printList(x.next); // делаем то же самое для остальной части списка
  }

}

printList(a);

printList(b);











/*
3. Write a functions for promise chain
    - getSum        -- sums two arguments and resolves result in 2 sec
    - double        -- multiplies its first agrument by 2 and resolves result in 2 sec 
    - factorial     -- calculates factorial of agrument and resolves result in 2 sec
    - errorHandler  -- just console.error its first argument

*/

let i = 2;
let j = 1;

// getSum(i, j)
//     .then(double)
//     .then(factorial)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(errorHandler);

function getSum (){
  return new Promise(function(resolve, reject){
      setTimeout(function(){
          resolve(console.log(i + j));
      },2000)})}
      getSum (i, j)

// В ОСТАЛЬНОМ ЕЩЁ НУЖНО РАЗОБРАТЬСЯ.
      