const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();




console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



// X-LARGE Array
// Doubler INSERT() =>
// insert =770.774125 ms
// X-LARGE Array
// APPEND = 1.79625 ms

// LARGE Array
// INSERT = 6.984708 ms
// LARGE Array
// APPEND = 502.416 μs

// MEDIUM Array
// INSERT = 142.625 μs
// MEDIUM Array
// APPEND = 95.792 μs

// SMALL Array
// INSERT = 25.25 μs
// SMALL Array
// APPEND = 51.667 μs

// TINY Array
// INSERT = 20.875 μs
// TINY Array
// APPEND=62.167 μs

//when we use larger arrays, doublerAppend performs better than doublerInsert because it takes less time to finish. It seems like doublerAppend handles larger arrays more efficiently than doublerInsert.

//The shifting operation is the main cause of the slower execution of doublerInsert. As the size of the array grows, the number of shifts increases, resulting in a slower performance. This is because shifting elements in an array involves rearranging memory and copying values, which becomes more time-consuming as the array size increases.



//EXTRA CREDIT 
//The unshift() method is used to add elements to the beginning of an array. In the doublerInsert function, unshift() is called for each element in the input array. However, adding elements to the beginning of an array requires shifting all existing elements one position to the right, which can be computationally expensive. 

//In contrast, the doublerAppend function uses the push() method to add elements to the end of the array.The push() method has a constant time complexity, which means it is generally faster as it doesn't require shifting existing elements.