
/**
 * we apply order agnostic binary search technique
   when we don't know whether our given array is 
   in accenting order or defending order.  
 */
const ascArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const dscArray = [90, 80, 70, 60, 50, 40, 30, 20, 10];

let target = 90;



let orderAgnosticBinarySearch = (arr, targetValue) => {

    let asc;
    

    let startIndex = 0;
    let endIndex = arr.length - 1;
    let midIndex;

    if (arr[startIndex] < arr[endIndex]) asc = true; else asc = false;


    while (startIndex <= endIndex) {
        
        midIndex = Math.floor(startIndex + ((endIndex - startIndex) / 2))

        if (arr[midIndex] == targetValue) {
            return midIndex;
        } else {
            if (asc) {
                if(arr[midIndex] < targetValue) {
                    startIndex = midIndex + 1;
                } else {
                    endIndex = midIndex - 1;
                }
            } else {
                if (arr[midIndex] < targetValue) endIndex = midIndex - 1; else startIndex = midIndex + 1;
            }
        }
    }

    return "Target Value not found";
}

console.log(orderAgnosticBinarySearch(ascArray, 10)); // output: 0

console.log(orderAgnosticBinarySearch(dscArray, 10)); // output : 8

