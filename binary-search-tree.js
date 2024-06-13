class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    let compareNode;
    if(this.root){
      compareNode = this.root;
    } else {
      this.root = newNode;
      return this;
    }
    
    while(compareNode !== newNode){
      if(compareNode.val > newNode.val){
        if(compareNode.left){
          compareNode = compareNode.left
        } else {
          compareNode.left = newNode;
          compareNode = newNode;
        }
      }
      if(compareNode.val < newNode.val){
        if(compareNode.right){
          compareNode = compareNode.right
        } else {
          compareNode.right = newNode;
          compareNode = newNode;
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, compareNode = this.root) {
    //handle new root if one is not established
    if(!compareNode){
      this.root = new Node(val);
      return this;
    }

    //check if current Node val is higher than the new val
    if(compareNode.val > val){
      if(compareNode.left){
        return this.insertRecursively(val, compareNode.left);
      } else {
        compareNode.left = new Node(val);
        return this;
      }
     }
     //check if current Node val is lower than the new val
     if(compareNode.val < val){
      if(compareNode.right){
        return this.insertRecursively(val, compareNode.right);
      } else {
        compareNode.right = new Node(val);
        return this;
      }
     }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let compareNode = this.root;
    
    while(compareNode){
      if(compareNode.val > val){
        compareNode = compareNode.left
        } 
      else if (compareNode.val < val){
        compareNode = compareNode.right
      }
       else {
          return compareNode;
        }
      }

      return undefined;
      }
      
    
    


  

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, compareNode = this.root) {
    if(!compareNode){
      return undefined;
    }
    
    if(compareNode.val > val){
        compareNode = compareNode.left
        return this.findRecursively(val, compareNode)
        } 
    else if (compareNode.val < val){
        compareNode = compareNode.right
        return this.findRecursively(val, compareNode)
      }
    else {
          return compareNode;
        }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root, array = []) {
    array.push(currentNode.val);
    if(currentNode.left){
      this.dfsPreOrder(currentNode.left, array);
    }
    if(currentNode.right){
      this.dfsPreOrder(currentNode.right, array);
    }
    return array;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode = this.root, array = []) {
    if(currentNode.left){
      this.dfsInOrder(currentNode.left, array);
    }
    array.push(currentNode.val);
    if(currentNode.right){
      this.dfsInOrder(currentNode.right, array);
    }
    return array;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode = this.root, array = []) {
    if(currentNode.left){
      this.dfsPostOrder(currentNode.left, array);
    }
    if(currentNode.right){
      this.dfsPostOrder(currentNode.right, array);
    }
    array.push(currentNode.val);
    return array;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let topNode = this.root;
    let queue = [];
    let array = [];

    queue.push(topNode);

    while(queue.length){
      topNode = queue.shift();
      array.push(topNode.val);
      if(topNode.left) queue.push(topNode.left);
      if(topNode.right) queue.push(topNode.right);
    }
    return array;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
//############################################################################
  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}


module.exports = BinarySearchTree;
