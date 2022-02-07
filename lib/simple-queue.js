'use strict';

class SimpleQueue {
    constructor() {
        this.queue = [];
    }
    // can have one or more items as arguments
    enqueue(item) {
        if(arguments.length > 0) {
            const items = Array.from(arguments);
           this.queue.push(...items);
        }
    }
    dequeue() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }
    flush() {
        this.queue = [];
    }
    peek() {
        if(this.queue.length > 0) {
            return this.queue[0];
        }
    }
}

module.exports = SimpleQueue;

// For TypeScript
module.exports.default = SimpleQueue;
