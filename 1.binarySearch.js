// binary search implementation in JS
// Explanation link : https://medium.com/@mohammad.mazharul.hoque.007/বাইনারি-সার্চ-ইমপ্লিমেন্টেশন-ইন-জাভাস্ক্রিপ্ট-c894411031ec

const sampleArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let binarySearchResult = (arr, target) => {
   
    let startIndex = 0;
    let lastIndex = arr.length - 1;

    let midIndex;

    while (startIndex <= lastIndex) {

        midIndex = Math.floor((startIndex + lastIndex) / 2);

        if (arr[midIndex] == target) {
            return midIndex;
        } else if (arr[midIndex] < target) {
            startIndex = midIndex + 1;
        } else {
            lastIndex = midIndex - 1;
        }
    }
    return "Target value not found";
    
}

console.log(binarySearchResult(sampleArray, 60)); // Output: 5

console.log(binarySearchResult(sampleArray, 85)); // Output: Target value not found