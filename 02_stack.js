
function Stack(){
  this.dataStore = []
  this.top = 0
}

Stack.prototype.push = function(item){
  this.dataStore[this.top++] = item
  //store data at the top then increase the top property
}

Stack.prototype.pop = function() {
  return this.dataStore[--this.top]
  //retrieve data at the top then decrease the top property
}

Stack.prototype.peek = function() {
  return this.dataStore[this.top-1]
}

Stack.prototype.isEmpty = function() {
  return this.top === 0
}

Stack.prototype.clear = function() {
	this.top = 0
	this.dataStore = []
}

//Example using the stack class
s = new Stack()

s.push('hello')
s.push('world')
console.log(s) //{ dataStore: [ 'hello', 'world' ], top: 2 }
console.log(s.pop()) //world
console.log(s) //{ dataStore: [ 'hello', 'world' ], top: 1 }
console.log(s.peek()) //'hello'
s.push('earth')
s.push('people')
console.log(s) //{ dataStore: [ 'hello', 'earth', 'people' ], top: 3 }
console.log(s.peek()) // people
