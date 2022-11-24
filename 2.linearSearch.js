// linear search implementation in JS

const Numbers = [16, 28, 90, 76, 2, 88, 65, 100, 89, 46];

let linearSearchResult = (sampleArray, target) => {
    
    for (let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] == target) return i;
    }
    return "Element not found";
}

console.log(linearSearchResult(Numbers, 100)); // Output: 7
console.log(linearSearchResult(Numbers, 700)); // Output: Element not found