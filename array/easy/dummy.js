const arrayValue = [1, 2, 4, 7, 7, 5];

function arrayFunc(arr) {
    console.log('arr>>>>', arr);
    let firstSmallValue = Infinity;
    let secondSmallValue = Infinity;
    let firstLargeValue = -Infinity;
    let secondLargeValue = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstSmallValue) {
            secondSmallValue = firstSmallValue;
            firstSmallValue = arr[i];
            console.log('min value>>>>', firstSmallValue);
        } else if (arr[i] < secondSmallValue && arr[i] != firstSmallValue) {
            secondSmallValue = arr[i];
            console.log('min value 222>>>>', secondSmallValue);
        }
        
        if (arr[i] > firstLargeValue) {
            secondLargeValue = firstLargeValue;
            firstLargeValue = arr[i];
            console.log('max value>>>>', firstLargeValue);
        } else if (arr[i] > secondLargeValue && arr[i] != firstLargeValue) {
            secondLargeValue = arr[i];
            console.log('max value 222>>>>', secondLargeValue);
        }
    }
    
    return {
        firstSmallValue,
        secondSmallValue,
        firstLargeValue,
        secondLargeValue
    };
}

const output = arrayFunc(arrayValue);
console.log('output>>>>', output);
