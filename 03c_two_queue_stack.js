//Here is an implementation of a Stack using two Queues:


function TwoQueueStack(){
  this.firstQueue = new Queue()
}

TwoQueueStack.prototype.push = function (element) {
  this.firstQueue.enqueue(element)
}

TwoQueueStack.prototype.pop = function (element) {
  var size = this.firstQueue.dataStore.length - 1 //size upto second to last element
  var counter = 0
  var secondQueue = new Queue()
  while(++counter <= size) { //isolate lastElement
    secondQueue.enqueue(this.firstQueue.dequeue())
  }
  var lastElement = this.firstQueue.dequeue() //access lastElement left in the firstQueue
  this.firstQueue = secondQueue //update firstQueue
  return lastElement //lastElement = lastIn = firstOut
}

//test
q = new TwoQueueStack()
q.push(1)
q.push(2)
q.push(3)
q.push(4)

console.log(q.pop()) //4
console.log(q.pop()) //3
console.log(q.pop()) //2
console.log(q.pop()) //1
