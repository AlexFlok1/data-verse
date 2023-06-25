class DataNode {
  private _value: unknown = null;
  private _next: DataNode | null = null;
  constructor(value: unknown) {
    this._value = value;
  }

  set value(value: unknown) {
    this._value = value;
  }

  set next(value: DataNode | null) {
    this._next = value;
  }
  get next(): DataNode | null {
    return this._next;
  }
}

class SingleLinkList {
  private _head: DataNode | null = null;
  private _tail: DataNode | null = null;
  private _length: number = 0;

  /* PUBLIC METHODS */

  public push = (value: unknown): void => {
    const newNode = new DataNode(value);
    if (!this._tail) {
      this._tail = this._head = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length++;
  };

  public pop = (): void => {
    this.edgeCases();

    this._tail = this.getLastNotNull();
    this._length--;
  };

  public shift = () => {
    this.edgeCases();

    if (this.head) {
      const oldHead = this.head;
      this._head = oldHead.next;
      this._length--;
    }
  };

  public unShift = (value: unknown): void => {
    const newNode = new DataNode(value);
    if (this._length === 0) {
      this._head = this._tail = newNode;
      return;
    }

    newNode.next = this._head;
    this._head = newNode;

    this._length++;
  };

  public get = (index: number = 0) => {
    if (index < 0 || index >= this._length) return;

    let returnNode = this.head;
    while (index > 0) {
      if (returnNode) returnNode = returnNode.next;
      index--;
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

  private getLastNotNull = () => {
    let lastNotNullNode = this._head;
    if (lastNotNullNode) {
      while (lastNotNullNode.next?.next) {
        if (lastNotNullNode.next?.next) lastNotNullNode = lastNotNullNode.next;
      }
      lastNotNullNode.next = null;
    }
    return lastNotNullNode;
  };

  /*GETTERS AND SETTERS */

  get head() {
    return this._head;
  }
}

export { SingleLinkList };
