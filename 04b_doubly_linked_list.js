//the DoublyLinkedList class
function DoublyLinkedList() {
 this.head = null
 this.tail = null
 this.length = 0
}

//the Node class
function Node(value) {
 this.value = value
 this.next = null
 this.previous = null
}

DoublyLinkedList.prototype.find = function(value) {
  var currNode = this.head

  while(currNode.value != value){ // if value found exit while loop
    currNode = currNode.next
  }

  return currNode
}

DoublyLinkedList.prototype.add = function(value) {
  var node = new Node(value)

  if(!this.head) { //if list is empty
    this.head = this.tail = node // new node will be both head and tail

  } else { //if not, new node becomes tail
    node.previous = this.tail //set previous of new node
    this.tail.next = node //set next of old tail to be new node
    this.tail = node // set node to be the new tail
  }
  this.length++

  return node
}

DoublyLinkedList.prototype.remove = function(value) {

  var currNode = this.find(value) // node to be deleted

  if(currNode === this.head && currNode === this.tail) { //only one node?
      this.head = null
      this.tail = null
  } else if(currNode === this.head) { //if node to be removed is head
      this.head = currNode.next  //assign a new head
      currNode.previous = null
  } else if(currNode === this.tail) { //if node to be removed is tail
      this.tail = currNode.previous      //assign a new tail
      currNode.next = null
  } else { //if regular node, rewire next and previous to skip removed node
      currNode.previous.next = currNode.next
      currNode.next.previous = currNode.previous
  }
  this.length--
}

DoublyLinkedList.prototype.print = function(){
  var list = ''
  var currNode = this.head
  while(currNode) {
    list += currNode.value + ' '
    currNode = currNode.next
  }
  console.log(list)
}

//DoublyLinkedList test
var l = new DoublyLinkedList()
l.add('1')
l.add('2')
l.add('3')
l.add('4')
l.print() //1 2 3 4
l.tail.value //4
l.tail.previous.value //3
l.remove('3')
l.print() //1 2 4
