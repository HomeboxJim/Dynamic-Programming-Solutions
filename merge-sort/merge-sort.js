
var unsorted = [5, 8, 2, 0, 5, 7, 1, 8];


function sayHello() {
  console.log('Sorted is ' + mergeSort(unsorted));   
}


function mergeSort(array) {
 
  if (array.length <= 1) {
   return array; 
  }

  var middle = Math.floor(array.length / 2);
  var left = array.slice(0, middle);
  var right = array.slice(middle, array.length);
  
  return merge(mergeSort(left), mergeSort(right));
  
}

function merge (left, right) {
  
 var result = [];
  
  while (left.length != 0 && right.length !=0) {
   if (left[0] <= right[0]) {
    result.push(left.shift()); 
   } else {
    result.push(right.shift());
   }
  }
  
  if (left.length != 0) {
   result = result.concat(left); 
  }
  
  if (right.length != 0) {
   result = result.concat(right); 
  }
  
  return result;
  
}


sayHello();


