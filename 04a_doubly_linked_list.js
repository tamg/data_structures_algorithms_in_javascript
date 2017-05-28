
//the SinglyLinkedList class
function SinglyLinkedList() {
 this.head = null
 this.tail = null
 this.length = 0
}

//the Node class
function Node(value) {
 this.value = value
 this.next = null
}

SinglyLinkedList.prototype.add = function(value) {
  var node = new Node(value)

  if(!this.head) { //if list empty
    this.head = node // new node will be both head and tail
    this.tail = node
  } else {
    this.tail.next = node //if not new node becomes the new tail
    this.tail = node
  }
  this.length++

  return node
}

SinglyLinkedList.prototype.remove = function(value) {
  var prevNode = this.head
  var currNode = this.head
  while(currNode) {
    if(currNode.value === value) { //found the node to remove
      if(currNode === this.head) { //if node to be removed is head
        this.head = currNode.next  //assign a new head
      }
     if(currNode === this.tail) { //if node to be removed is tail
        this.tail = prevNode      //assign a new tail
      }
      prevNode.next = currNode.next //if regular node rewire next of                                  prevNode to skip removed node
      this.length--
    } else {
      prevNode = currNode           //else move one node over
    }
    currNode = currNode.next
  }
}

SinglyLinkedList.prototype.find = function(value) {
  var currNode = this.head

  while(currNode.value != value){ // // if value found exit while loop
    currNode = currNode.next
  }

  return currNode
}

SinglyLinkedList.prototype.print = function(){
  var list = ''
  var currNode = this.head
  while(currNode) {
    list += currNode.value + ' '
    currNode = currNode.next
  }
  console.log(list)
}

//SinglyLinkedList test
var l = new SinglyLinkedList()
l.add('1')
l.add('2')
l.add('3')
l.add('4')
l.add('5')
l.print() // 1 2 3 4 5
l.remove('5')
l.remove('4')
l.print() // 1 2 3
l.remove('1') // 2 3
l.head // 2
l.tail // 3
