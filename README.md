# simple-queue

SimpleQueue can be used in server-side Node or other JavaScript projects

SimpleQueue is a simple queue data structure with enqueue, dequeue, peek, size and flush methods.

MIT License, see LICENSE for more details

## Uses case

When you need a queue that has no dependencies on other libraries and you just want something lightweight that does the job. No bells and whistles and just works. Also when when you want to keep your code clean and DRY and get on with doing more interesting things :)

## Getting started

```
npm install @anthonyalbertyn/simple-queue
```

## Using simple-queue

```
const SimpleQueue = require('@anthonyalbertyn/simple-queue');

const q = new SimpleQueue();

```

Add an item to the queue

``` q.enqueue("Hello") ```

``` q.enqueue(101) ```

Add multiple items to the queue at a time

``` q.enqueue(1, 7, 24) ```

Remove an item from the front of the queue

``` const item = q.dequeue() ```

Copying the item at the front of the queue, but not removing it from the queue

``` const item = q.peek() ```

Finding the length of the queue

``` const length = q.size() ```

Flushing the queue ie. deleting all the items

``` q.flush() ```


You may create more than one SimpleQueue in your code.

```
    const q1 = new SimpleQueue();
    const q2 = new SimpleQueue();

```

## Limitations

The actual queue under the hood is a JavaScript array and not a linked list. Adding items to the queue are constant time O(1), but removing an item from the queue has time complexity of O(n) as all the items in the array need to be moved one position to the left by JavaScript. SimpleQueue should work great for small to medium length queus, but as the length of the queue grows, the time to remove items will increase exponentially.

## Non-scientific benchmark

Time to add "The quick brown fox jumps over the lazy dog" to the queue 30,000 time: around 25 milliseconds

Time to dequeue the above queue 30,000 times: around 365 milliseconds

These are just crude benchmarks and times can differ depending on where you are running the code and what else is happening in your app or system, and what data the queue contains, so no guarantees at all on performance.

See examples/example2 for details on how this was tested

## Maintainers

There is currently only one maintainer, Anthony Albertyn, and the plan is to keep this module simple, lightweight and if possible resist adding more features unless there are good reasons to do so.
