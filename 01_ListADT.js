//modified from https://github.com/oreillymedia/data_structures_and_algorithms_using_javascript/


function List() {
   this.listSize = 0 //holds the number of elements in the list
   this.pos = 0 //holds the current position in the list
   this.dataStore = [] //holds an array of our list data
}

List.prototype.append = function(element) {
   this.dataStore[this.listSize++] = element
   //after appending listSize increments by 1
}

List.prototype.find = function(element) {
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i
      }
   }
   return -1
}

List.prototype.remove = function(element) {
   var foundAt = this.find(element)
   if (foundAt > -1) {
      this.dataStore.splice(foundAt,1)
      --this.listSize
      return true
   }
   return false
}

List.prototype.toString = function() {
   return this.dataStore.join(' ')
}

List.prototype.insert = function(element, after) {
  var insertPos = this.find(after)
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element)
    ++this.listSize
    return true
  }
  return false
}

List.prototype.clear = function() {
  delete this.dataStore
  this.dataStore = []
  this.listSize = this.pos = 0
}

List.prototype.front = function() {
  this.pos = 0
}

List.prototype.end = function() {
  this.pos = this.listSize-1
}

List.prototype.prev = function() {
  if (this.pos > 0) {
    --this.pos
  }
}

List.prototype.next = function() {
  if (this.pos < this.listSize-1) {
    ++this.pos
  }
}

List.prototype.currPos = function() {
  return this.pos
}

List.prototype.moveTo = function(position) {
  this.pos = position
}

List.prototype.getElement = function() {
  return this.dataStore[this.pos]
}

//Creating a List class instance and traversing through it
var names = new List()
names.append("Cynthia")
names.append("Raymond")
names.append("Barbara")

for(names.front(); names.currPos() < names.length(); names.next()) {
  log(names.getElement())
}
