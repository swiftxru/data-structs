export * from './queue'
export * from './stack'

import {Stack} from './stack';

const stack = new Stack<string>(4);
stack.push('one');
stack.push('two');
stack.push('three');
stack.push('four');
stack.push('five'); // Throws error, capacity is 4

stack.size(); // Output: 4
stack.peek(); // Output: "four"
stack.size(); // Output: 4
stack.pop();  // Output: "four"
stack.size(); // Output: 3
