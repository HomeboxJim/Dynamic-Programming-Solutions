

tony(['b', 'c', 'x', 'a', 'f', 'g', 'hello']);


  let sorted:boolean = false;
  
function tony(array:any[]) {
  
	console.log('ok then');


 
  
  while (sorted == false) {
  		console.log('another while...');
      
      sorted = true;
      
      for (var i = 0; i < array.length; i++) {
      
      
      	if (typeof array[i]) == 'string' && 
        	  typeof array[i+1] == 'number')
            {
            	swap(i);
            }
            
            
            else if (array[i] > array[i+1]) 
           	 {
            			swap(i);
    					}
     
      
  	}
  }
  
  
  console.log('sorted array:' + array);
  return array;
  
  function swap (i) {
  			var tmp = array[i+1];
      	array[i+1] = array[i];
      	array[i] = tmp;

				sorted = false;
 
  }
}