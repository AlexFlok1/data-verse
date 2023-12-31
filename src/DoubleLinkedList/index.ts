import { DataNode } from '../models/Node';

class DoubleLinkList {
  private _head: DataNode | null = null;
  private _tail: DataNode | null = null;
  private _length: number = 0;

  /* PUBLIC METHODS */

  public push = (value: unknown): void => {
    const newNode = new DataNode(value);
    if (!this._tail) {
      this._tail = this._head = newNode;
    } else {
      newNode.prev = this._tail;
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length++;
  };

  public pop = (): void => {
    this.edgeCases();

    if (this._tail && this._tail.prev) {
      this._tail = this._tail.prev;
      this._tail.next = null;
    }
    this._length--;
  };

  public shift = () => {
    this.edgeCases();

    if (this.head) {
      const oldHead = this.head;
      this._head = oldHead.next;
      if (this._head) {
        this._head.prev = null;
        this._length--;
      }
    }
  };

  public unShift = (value: unknown): void => {
    const newNode = new DataNode(value);
    if (this._length === 0) {
      this._head = this._tail = newNode;
      return;
    }

    if (this._head) {
      newNode.next = this._head;
      this._head.prev = newNode;
      this._head = newNode;

      this._length++;
    }
  };

  public insert = (value: unknown, index: number): void => {
    if (this._length < index || index < 0)
      throw new Error('Index is out of range');
    if (index === 0) {
      this.unShift(value);
      return;
    }
    if (index === this._length) {
      this.push(value);
      return;
    }

    const newNode = new DataNode(value);
    const beforeNode = this.get(index - 1);
    if (beforeNode) {
      newNode.next = beforeNode.next;
      newNode.prev = beforeNode;
      beforeNode.next = newNode;
      if (newNode.next) newNode.next.prev = newNode;
      this._length++;
      return;
    }
  };

  public remove = (index: number): void => {
    if (index >= this._length || index < 0)
      throw new Error('Index is out of range');
    if (index === this._length - 1) {
      this.pop();
      return;
    }
    if (index === 0) {
      this.shift();
      return;
    }

    const prevNode = this.get(index - 1);
    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
      if (prevNode.next) prevNode.next.prev = prevNode;
      this._length--;
      return;
    }
  };
  /*
  public reverse = () => {
    let next: DataNode | null, prev: DataNode | null, node: DataNode | null;
    next = prev = node = null;
    node = this._head;
    this._head = this._tail;
    this._tail = node;

    for (let i = 0; i <= this._length - 1; i++) {
      if (this._head && this._tail && node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
  };
  */
  public get = (index: number = 0) => {
    if (index < 0 || index >= this._length) return;
    const tailOrHead = this._length / 2 > index ? 'head' : 'tail';
    let returnNode = tailOrHead === 'head' ? this.head : this._tail;

    let counter = tailOrHead === 'head' ? index : this._length - 1 - index;
    console.log(this._length);
    while (counter > 0) {
      if (returnNode) {
        returnNode = tailOrHead === 'head' ? returnNode.next : returnNode.prev;
        counter--;
      }
    }

    return returnNode;
  };

  public set = (value: unknown, index: number = 0): boolean => {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  };

  /*PRIVATE METHODS */

  private edgeCases = () => {
    if (this._length === 0) return;

    if (this._length === 1) {
      this._head = this._tail = null;
      this._length = 0;
      return;
    }
  };

  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }
}

export { DoubleLinkList };
