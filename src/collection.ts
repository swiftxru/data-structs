export abstract class Collection<T> {
    protected storage: T[] = [];

    /**
     * Determines whether an element is in the storage.
     *
     * @param item
     * @returns True or false
     */
    contains(item: T): boolean {
        return this.storage.includes(item);
    }

    /**
     * Size of collection, items count.
     *
     * @returns Items count in queue
     */
    size(): number {
        return this.storage.length;
    }

    /**
     * Returns true if storage is full.
     *
     * @abstract
     * @returns True if collection is full
     */
    abstract isFull(): boolean;

    /**
     * Returns storage as array.
     *
     * @returns Storage as array of T items
     */
    toArray(): T[] {
        return this.storage;
    }
}