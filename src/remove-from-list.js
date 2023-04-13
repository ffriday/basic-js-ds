const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let acc = new ListNode(null),
      ln = null,
      arr = [];

  l;
  while(l){
    if(l.value != k){
      arr.push(l.value);
    }
    l = l.next;
  }
  
  return arr.reverse().reduce((acc, val) => {
    if(acc){
      let temp = new ListNode(val);
      temp.next = acc;
      return temp;
    }
    return new ListNode(val);
  }, null);
}

module.exports = {
  removeKFromList
};

// function next(list, key, acc){
//   if(!list){
//     return acc;
//   }
//   if(list.value != key){
//     acc.value = list.value;
//     acc.next = new ListNode(value);
//   }
//   next(acc.next)
// }

class ListNode {
   constructor(x) {
     this.value = x;
    this.next = null;
   }
 }


function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// //const expected = convertArrayToList([1, 2, 4, 5]);
// let a = removeKFromList(initial, 3);
// console.log(a);
// // while(a){
// //   console.log(a.value);
// //   a = a.next;
// // }