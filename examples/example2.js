const SimpleQueue = require('../lib/simple-queue');

// If you do use SimpleQueue in your app after installing
// it from npm please import it as follows:
// const SimpleQueue = require('@anthonyalbertyn/simple-queue');

const q = new SimpleQueue();

// not an accurate benchmark, but just an idea

console.log("The quick brown fox jumps over the lazy dog");
console.log("Going to add the above phrase to the queue 30,000 times");

const timeBeforeAdding = Date.now();

for(let i = 0; i < 30000; i++) {
    q.enqueue("The quick brown fox jumps over the lazy dog");
}

const timeAfterAdding = Date.now();

console.log("Time in milliseconds to add 30k items: ", timeAfterAdding - timeBeforeAdding);

console.log("Queue length: ", q.size());

console.log("Going to dequeu that phrase from the quueu 30,000 times");

const timeBeforeRemoving = Date.now();

for(let i = 0; i < 30000; i++) {
    q.dequeue();
}

const timeAfterRemoving = Date.now();

console.log("Time in milliseconds to remove 30k items: ", timeAfterRemoving - timeBeforeRemoving);

console.log("Queue length: ", q.size());
