import {Collection} from './collection';

export interface IStack<T> {
    push(item: T): void;

    pop(): T | undefined;

    peek(): T | undefined;

    size(): number;
}

export class Stack<T> extends Collection<T> implements IStack<T> {
    /**
     * Constructor.
     *
     * @param capacity - stack capacity
     */
    constructor(private capacity: number = Infinity) {
        super();
    }

    /**
     * Inserts an object at the top of the stack.
     *
     * @param item
     */
    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error('Stack has reached max capacity, you cannot add more items');
        }
        this.storage.push(item);
    }

    /**
     * Removes and returns the object at the top of the stack.
     *
     * @returns T item or undefined
     */
    pop(): T | undefined {
        return this.storage.pop();
    }

    /**
     * Returns the object at the top of the stack without removing it.
     *
     * @returns Last item
     */
    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    /**
     * Returns true if storage is full.
     *
     * @returns True if collection is full
     */
    isFull(): boolean {
        return this.capacity === this.size();
    }
}