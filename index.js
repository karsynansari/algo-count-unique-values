//write a function that takes a sorted array and returns the number of unique 
//occurences of each element 

function countUniqueValues(arr) {
  // set a variable for index[0]
  //loop through the array starting @ 1
  //inside of the loop, compare [1] to [j]
  //if they are not equal, increment i &
  //set the array [i] = array [j]
  //if they are equal, do nothing & keep looping
  //
  //return i +1 (because it started @ zero, so returning i will be an 
  //below the element we actually want)
  //make a condition that returns 0 in case an empty array is passed through 
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([]));
