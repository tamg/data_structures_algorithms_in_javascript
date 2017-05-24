//Here is an implementation of a Queue using two Stacks

function TwoStackQueue() {
  this.firstStack = new Stack()
  this.secondStack = new Stack()
}

TwoStackQueue.prototype.enqueue = function(element){
  this.firstStack.push(element)
}

TwoStackQueue.prototype.dequeue = function(element){
  if(this.secondStack.isEmpty()){
    while(!this.firstStack.isEmpty()){
      this.secondStack.push(this.firstStack.pop())
    }
  }
  return this.secondStack.pop()
}

//test
q = new TwoStackQueue()

q.enqueue('hello')
q.enqueue('world')
console.log(q.dequeue()) // 'hello'
