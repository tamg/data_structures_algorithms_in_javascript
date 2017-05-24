
function Queue() {
    this.dataStore = []
}

Queue.prototype.enqueue = function(element) {
    this.dataStore.push(element)
}

Queue.prototype.dequeue = function() {
    return this.dataStore.shift()
}

Queue.prototype.front = function() {
    return this.dataStore[0]
}

Queue.prototype.back = function() {
    return this.dataStore[this.dataStore.length - 1]
}

Queue.prototype.isEmpty = function() {
    return this.dataStore.length == 0
}

//Example using the Queue class
var q = new Queue()
q.enqueue("Biggie")
q.enqueue("Pac")
q.enqueue("Jay Z")
q.dequeue() // dequeus "Biggie"
console.log(q.front()) // Pac
console.log(q.back()) // Jay Z
