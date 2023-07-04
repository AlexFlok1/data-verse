class DataNode {
  private _value: unknown = null;
  private _next: DataNode | null = null;
  private _prev: DataNode | null = null;

  constructor(value: unknown) {
    this._value = value;
  }

  get value(): unknown {
    return this._value;
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

  set prev(value: DataNode | null) {
    this._prev = value;
  }
  get prev(): DataNode | null {
    return this._prev;
  }
}

export { DataNode };
