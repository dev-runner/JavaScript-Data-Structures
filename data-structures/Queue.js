/**
  * Implementation of the queue (FIFO) in JavaScript.
  *
  * Copyright (c) 2016 Przemek Jażło <przemek@devrunner.pl>
  *
  * Permission is hereby granted, free of charge, to any person obtaining 
  * a copy of this software and associated documentation files (the "Software"),
  * to deal in the Software without restriction, including without limitation the
  * rights to use, copy, modify, merge, publish, distribute, sublicense,
  * and/or sell copies of the Software, and to permit persons to whom the Software
  * is furnished to do so, subject to the following conditions:
  * 
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
  * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
var Queue = function Queue(){

  "use strict";

  // js array is a great data structure for implementation of the queue
  var queue = [];

  // add new element to the queue
  function enqueue(newElement){
    queue.push(newElement);
  }

  // remove element from the queue
  function dequeue(){
    return queue.shift();
  }

  // returns size of the queue
  function getSize(){
    return queue.length;
  }

  // returns first element without removing from the queue
  function peek(){
    return queue[0];
  }

  // checks if queue is empty
  function isEmpty(){
    return (queue.length === 0);
  }

  // clears the queue
  function clear(){
    queue = [];
  }

  var publicApi = {
    enqueue: enqueue,
    dequeue: dequeue,
    getSize: getSize,
    peek: peek,
    isEmpty: isEmpty,
    clear: clear
  };

  return publicApi;

};

module.exports = Queue;