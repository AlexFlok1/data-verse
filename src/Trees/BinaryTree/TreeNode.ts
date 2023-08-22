class TreeNode {
  public value: number | null = null;
  private _leftValue: TreeNode | null = null;
  private _rightValue: TreeNode | null = null;

  constructor(value: any) {
    this.value = value;
  }

  get leftNode(): TreeNode | null {
    return this._leftValue;
  }
  get rightNode(): TreeNode | null {
    return this._rightValue;
  }

  set leftNode(value: TreeNode) {
    this._leftValue = value;
  }

  set rightNode(value: TreeNode) {
    this._rightValue = value;
  }
}

export { TreeNode };
