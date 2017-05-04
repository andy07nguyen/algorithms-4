function ListNode(val){
  this.val = val;
  this.next = null;
}

function SLL(){
  this.head = null;
  this.addFront = function(val){
    var node = new ListNode(val);
    if(this.head){
      node.next = this.head;
    }
    this.head = node;
    console.log('addFront',this.head);
    return this;
  }
  
  this.removeFront = function(){
    if(this.head){
      this.head = this.head.next;
    }
    console.log('removeFront',this.head);
    return this.head;
  }
  
  this.contains = function(val){
    if(this.head){
      if(this.head.val === val){
        console.log('contains '+val,true);
        return true;
      }
      else{
        var runner = this.head;
        while(runner.next){
          runner = runner.next;
          if(runner.val === val){
            console.log('contains '+val,true);
            return true;
          }
        }
      }
    }
    console.log('contains '+val,false);
    return false;
  }  // end of contains
}

var mySLL = new SLL();
mySLL.addFront(7).addFront(5).addFront(3).addFront(1);
mySLL.removeFront();
mySLL.contains(5);
mySLL.contains(1);
console.log(mySLL.head.val);

SLL.prototype.length = function(){
  var length = 0;
  if(!this.head){
    console.log('length ', length);
    return length;
  }
  else{
    var runner = this.head;
    length++;
    while(runner.next){
      runner = runner.next;
      length++;
    }
    console.log('length ', length);
    return length;
  }
}

mySLL.length();


// return the max value in the list
SLL.prototype.max = function(){
  var max, runner;
  if(this.head){
    max = this.head;
    runner = this.head;
    while(runner.next){
      runner = runner.next;
      if(runner.val > max.val){
        max = runner;
      }
    }
  }
  console.log('max', max.val);
  return max.val;
}

mySLL.max();

// return a string containing all list values
SLL.prototype.display = function(){
  var display = "";
  if(this.head){
    var runner = this.head;
    display += runner.val;
    while(runner.next){
      runner = runner.next;
      display += ", "+runner.val;
    }
  }
  console.log('display ', display);
  return display;
}

mySLL.display();



// create a function that accepts a ListNode pointer and
// returns the last value in the list
function back(ListNode){
  var runner = ListNode;
  while(runner.next){
    runner = runner.next;
  }
  console.log('back(ListNode)', runner.val);
  return runner.val;
}



// create a function that creates a ListNode with given value
// and inserts it and the end of a linked list
SLL.prototype.addBack = function(val){
  var node = new ListNode(val);
  if(!this.head){
    this.head = node;
  }
  else{
    var runner = this.head;
    while(runner.next){
      runner = runner.next;
    }
    runner.next = node;
  }
}



// create a standalone function that locates the minimum value in a linked list
// and moves that node to the front of the list.
// Return the new list with all nodes still present and in the original order
// (except for the new head node)
function minToFront(SLL){
  if(!SLL.head){
    console.log('minToFront, empty list');
    return false;
  }
  else{
    var min = SLL.head;
    var runner = SLL.head;
    var previous;
    while(runner.next){
      // save the node before the min node 
      if(runner.next.val < min.val){
        previous = runner;
        min = runner.next; 
      }
      runner = runner.next;
    }
    // no more runner.next, end of the line.
    // if previous is undefined, then the min was already at the head
    if(previous){
      // link the node before the min directly to the node after the min
      previous.next = previous.next.next;
      // set the min node's next to point to the current head node;
      min.next = SLL.head;
      // set the min node at the list's head
      SLL.head = min;
    }
    
  }
  console.log('minToFront(SLL)');
  return SLL;
}

mySLL.addFront(45);
minToFront(mySLL);
mySLL.display();