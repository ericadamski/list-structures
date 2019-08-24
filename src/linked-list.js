function createNode(data, next = null) {
  return {
    data,
    next
  };
}

function createLinkedList() {
  let head = null;
  let size = 0;

  return {
    get(index) {
      if (index >= size) {
        return;
      }

      let count = 0;
      let current = head;

      while (count++ < index) {
        current = current.next;
      }

      return current;
    },
    add(data, before = size) {
      let count = 0;
      let current = head;
      let previous = null;

      size++;

      while (count++ < before) {
        previous = current;
        current = current.next;
      }

      if (previous === null) {
        head = createNode(data, current);
      } else {
        previous.next = createNode(data, current);
      }
    },
    remove(index) {
      if (index >= size) {
        return;
      }

      size--;

      let count = 0;
      let previous = null;
      let current = head;

      while (count++ < index) {
        previous = current;
        current = current.next;
      }

      if (!previous) {
        head = current.next;
      } else {
        previous.next = current.next;
      }
    },
    size() {
      return size;
    },
    print() {
      let current = head;

      while (current !== null) {
        process.stdout.write(`[${current.data}] -> `);

        current = current.next;
      }

      process.stdout.write(`null \n`);
    },
    *[Symbol.Iterator]() {
      let current = head;

      while (current !== null) {
        yield current;

        current = current.next;
      }
    }
  };
}

const list = createLinkedList();

// list.print();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4, 2);
// list.print();
// console.log(list.get(1));
// list.remove(3);
// list.remove(0);
// list.print();

module.exports = { createLinkedList };
