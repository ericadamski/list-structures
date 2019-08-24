const { createLinkedList } = require("./linked-list");

function createDequeue() {
  const queue = [];

  return {
    addBack(data) {
      queue.unshift(data);
    },
    addFront(data) {
      queue.push(data);
    },
    removeBack() {
      queue.shift();
    },
    removeFront() {
      queue.pop();
    },
    print() {
      console.log(queue);
    }
  };
}

function createLinkedListDequeue() {
  const queue = createLinkedList();

  return {
    addBack(data) {
      queue.add(data, 0);
    },
    addFront(data) {
      queue.add(data);
    },
    removeBack() {
      queue.remove(0);
    },
    removeFront() {
      queue.remove(queue.size() - 1);
    },
    print() {
      queue.print();
    }
  };
}

const dq = createDequeue();
const lldq = createLinkedListDequeue();

dq.print();
dq.addBack(1);
dq.addBack(2);
dq.addFront(3);
dq.addFront(4);
dq.print();
dq.removeBack();
dq.print();
dq.removeFront();
dq.print();

lldq.print();
lldq.addBack(1);
lldq.addBack(2);
lldq.addFront(3);
lldq.addFront(4);
lldq.print();
lldq.removeBack();
lldq.print();
lldq.removeFront();
lldq.print();
