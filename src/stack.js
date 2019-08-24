const { createLinkedList } = require("./linked-list");

function createStack() {
  const stack = [];

  return {
    push(data) {
      stack.unshift(data);
    },
    pop() {
      stack.shift();
    },
    print() {
      console.log(stack);
    }
  };
}

function createLinkedListStack() {
  const stack = createLinkedList();

  return {
    push(data) {
      stack.add(data, 0);
    },
    pop() {
      stack.remove(0);
    },
    print() {
      stack.print();
    }
  };
}

const s = createStack();

s.print();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.print();
s.pop();
s.pop();
s.print();

const lls = createLinkedListStack();

lls.print();
lls.push(1);
lls.push(2);
lls.push(3);
lls.push(4);
lls.print();
lls.pop();
lls.pop();
lls.print();
