export interface IStack<T> {
    push(item: T): void;

    pop(): T | undefined;

    peek(): T | undefined;

    size(): number;
}

export class Stack<T> implements IStack<T> {
    /**
     * Storage of T items.
     *
     * @private
     */
    private storage: T[] = [];

    /**
     * Constructor.
     *
     * @param capacity - stack capacity
     */
    constructor(private capacity: number = Infinity) {
    }

    /**
     * Push new item into stack.
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
     * Pop item from stack.
     *
     * @returns T item or undefined
     */
    pop(): T | undefined {
        return this.storage.pop();
    }

    /**
     * Get last item from stack.
     *
     * @returns Last item
     */
    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    /**
     * Size of stack.
     *
     * @returns Stack size
     */
    size(): number {
        return this.storage.length;
    }
}