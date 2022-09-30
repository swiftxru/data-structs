import {Collection} from './collection';

export interface IQueue<T> {
    enqueue(item: T): void;

    dequeue(): T | undefined;

    size(): number;
}

export class Queue<T> extends Collection<T> implements IQueue<T> {
    /**
     * Constructor.
     *
     * @param capacity Queue capacity
     */
    constructor(private capacity: number = Infinity) {
        super();
    }

    /**
     * Enqueue item to the top of queue.
     *
     * @param item
     * @throws Error
     */
    enqueue(item: T): void {
        if (this.size() === this.capacity) {
            throw Error('Queue has reached max capacity, you cannot add more items');
        }
        this.storage.push(item);
    }

    /**
     * Dequeue item from the top of queue.
     *
     * @returns T item
     */
    dequeue(): T | undefined {
        return this.storage.shift();
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