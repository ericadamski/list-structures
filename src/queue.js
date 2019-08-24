const { createLinkedList } = require("./linked-list");

function createQueue() {
  const queue = [];

  return {
    add(data) {
      queue.unshift(data);
    },
    remove() {
      queue.pop();
    },
    print() {
      console.log(queue);
    }
  };
}

function createLinkedListQueue() {
  const queue = createLinkedList();

  return {
    add(data) {
      queue.add(data, 0);
    },
    remove() {
      queue.remove(queue.size() - 1);
    },
    print() {
      queue.print();
    }
  };
}

const q = createQueue();
const llq = createLinkedListQueue();

q.print();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.print();
q.remove();
q.print();

llq.print();
llq.add(1);
llq.add(2);
llq.add(3);
llq.add(4);
llq.print();
llq.remove();
llq.print();
