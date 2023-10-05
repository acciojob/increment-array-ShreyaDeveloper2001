let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
	 const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }

    return result;
  //your code here
}
const incrementedArr = incrementArray(arr);

alert(incrementArray(arr));
