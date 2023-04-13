const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class item {
  constructor(v){
    this.data = v;
    this.left = null;
    this.right = null;
  }
}



class BinarySearchTree {
  //Constructor
  constructor(){
    this.dataNode = null;
  }

  addNode(node, value){
    //If no root node
    if(!node){
      return new item(value);
    }

    //If value node exist
    if(node.data === value){
      return node;
    }

    //If value less or higher
    if(value < node.data){
      node.left = this.addNode(node.left, value)
    } else {
      node.right = this.addNode(node.right, value)
    }
    return node;
  }

  searchNode(node, value){
    //If no root node
    if(!node){
      return false;
    }

    //If value node exist
    if(node.data === value){
      return true;
    }

    //If value less or higher
    if(value < node.data){
      return this.searchNode(node.left, value)
    } else {
      return this.searchNode(node.right, value)
    }
  }

  findNode(node, value){
    //If no root node
    if(!node){
      return null;
    }

    //If value node exist
    if(node.data === value){
      return node;
    }

    //If value less or higher
    if(value < node.data){
      return this.findNode(node.left, value)
    } else {
      return this.findNode(node.right, value)
    }
  }

  removeNode(node, value){
    //If no root node
    if(!node){
      return null;
    }

    //If value less or higher
    if(value < node.data){
      node.left = this.removeNode(node.left, value);
      return node;
    } else if(node.data < value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if(!node.left && !node.right){
        return null;
      }
      if(!node.left){
        node = node.right;
        return node;
      }
      if(!node.right){
        node = node.left;
        return node;
      }

      let el = node.right;
      while(el.left){
        el = el.left;
      }
      node.data = el.data;
      node.right = this.removeNode(node.right, el.data);

      return node;
    }
  }

  root() {
    return this.dataNode ? this.dataNode : null;
  }

  add(data) {
    this.dataNode = this.addNode(this.dataNode, data);
  }

  has(data) {
    return this.searchNode(this.dataNode, data);
  }

  find(data) {
    return this.findNode(this.dataNode, data);
  }

  remove(data) {
    this.dataNode = this.removeNode(this.dataNode, data);
  }

  min() {
    if(!this.dataNode){
      return null;
    }
    
    let el = this.dataNode;
    while(el.left){
      el = el.left;
    }
    return el.data;
  }

  max() {
    if(!this.dataNode){
      return null;
    }
    
    let el = this.dataNode;
    while(el.right){
      el = el.right;
    }
    return el.data;
  }
}

module.exports = {
  BinarySearchTree
};