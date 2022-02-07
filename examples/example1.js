const SimpleQueue = require('../lib/simple-queue');

// If you do use SimpleQueue in your app after installing
// it from npm please import it as follows:
// const SimpleQueue = require('@anthonyalbertyn/simple-queue');

const q = new SimpleQueue();

console.log("Adding a to the queue");
q.enqueue("a");
console.log("Adding b to the queue");
q.enqueue("b");
console.log("Adding c to the queue");
q.enqueue("c");
console.log(`Queue length: ${q.size()}`);
console.log("Adding d, e, f to the queue in one go");
q.enqueue("d", "e", "f");
console.log(`Queue length: ${q.size()}`);
console.log("Removing an item from the queue");
const first = q.dequeue();
console.log(first);
console.log(`Queue length: ${q.size()}`);
console.log("Peeking at the first item in the queue");
const peek = q.peek();
console.log(peek);
console.log(`Queue length: ${q.size()}`);
console.log("Flusing the queue");
q.flush();
console.log(`Queue length: ${q.size()}`);
