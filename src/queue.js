const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class node {
  constructor(v){
    this.value = v;
    this.next = null;
  }
}

class Queue {
  arr = [];

  getUnderlyingList() {
    return this.arr.reverse().reduce((acc, val) => {
      if(acc){
        let t = new node(val);
        t.next = acc;
        return t;
      }
      return new node(val);
    }, null);
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }
}

module.exports = {
  Queue
};
