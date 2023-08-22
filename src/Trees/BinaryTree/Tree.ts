import { TreeNode } from './TreeNode';

class Tree {
  private _root: TreeNode | null = null;

  public insertNewNode(node: TreeNode) {
    if (!this._root) {
      this._root = node;
      return this;
    }

    let current = this._root;
    while (true) {
      if ((node.value || 0) < (current.value || 0)) {
        if (!current.leftNode) {
          current.leftNode = node;
          return this;
        }
        current = current.leftNode;
      } else if ((node.value || 0) > (current.value || 0)) {
        if (!current.rightNode) {
          current.rightNode = node;
          return this;
        }
        current = current.rightNode;
      }
    }
  }
}

export { Tree };
