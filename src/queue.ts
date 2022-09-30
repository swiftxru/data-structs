export interface IQueue<T> {
    enqueue(item: T): void;

    dequeue(): T | undefined;

    size(): number;
}

export class Queue<T> implements IQueue<T> {
    /**
     * Storage of T items.
     *
     * @private
     */
    private storage: T[] = [];

    /**
     * Constructor.
     *
     * @param capacity
     */
    constructor(private capacity: number = Infinity) {
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
     * Size of queue, items count.
     *
     * @returns Items count in queue
     */
    size(): number {
        return this.storage.length;
    }
}