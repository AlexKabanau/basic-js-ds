const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
class BinarySearchTree {
  constructor() {
    this.Root = null;
  }
  root() {
    return this.Root
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }

    this.Root = addWithin(this.Root, data);
  }

  has(data) {

    function searchWithin(node, data) {
      // console.log('вход в функцию');
      if (!node) {
        // console.log('proverka na null');
        return false
      }

      if (node.data === data) {
        // console.log('proverka na data');
        return true
      }

      if (data < node.data) {
        // console.log('perefodim glubzhe left');
        return searchWithin(node.left, data);
      } else {
        // console.log('perefodim glubzhe right');
        return searchWithin(node.right, data);
      }
    }

    return searchWithin(this.Root, data)
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return searchWithin(this.Root, data);

    function searchWithin (node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        return searchWithin(node.left, data);
      } else {
        return searchWithin(node.right, data);
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.Root = removeNode(this.Root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.Root) {
      return;
    }

    let node = this.Root;
    while (node.left) {
      node = node.left;
    }

    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    if (!this.Root) {
      return;
    }

    let node = this.Root;
    while (node.right) {
      node = node.right;
    }

    return node.data
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};