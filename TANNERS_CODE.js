let array = [23, 43, -12, 30, 4, 0, 12];

function addTwoZero() {
	let answer = false;
	for (i = 0; i < array.length; i++) {
		for (j = 1; j < array.length; j++) {
			if (array[j] + array[i] === 0) {
				answer = true;
			}
		}
	}
	return answer;
}
console.log(addTwoZero(array));
//Runtime Complexity: O(n^2)
//because of the double for loop
//This results in a quadratic relationship between the input size and the number of iterations.
//Space Complexity: O(1)
//The function uses a constant amount of additional memory, regardless of the size of the input array.

let myString = 'striing';

function isUnique(str) {
	const compare = str;
	str = compare.split('');
	str = new Set(str);
	str = [...str].join('');

	if (str === compare) {
		return true;
	} else {
		return false;
	}
}
console.log(isUnique(myString));
//Runtime Complexity: O(n)
//The function splits the input string into an array, performs set operations, and compares the modified string to the
//original string. These operations have a linear relationship with the length of the input string.
//Space Complexity: O(n)
alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const isPangram = (string) => {
	string = string.toLowerCase();
	return alphabet.every((x) => string.includes(x));
};
console.log(isPangram('abcd efgh ijkl mnop qrst uvwx yz'));
//Runtime Complexity: O(n)
//Space Complexity: O(1)
//The function only uses a fixed amount of additional memory. The size of the alphabet array is constant,

stringArray = ['hello', 'goodbye', 'whateverLoser'];
function longestWord(strArray) {
	strArray.sort((a, b) => b.length - a.length);
	const longestWord1 = strArray[0];
	return longestWord1;
}
console.log(longestWord(stringArray));
//Runtime Complexity: O(n log n)
//The function uses the sort() method, which typically has a complexity of O(n log n), to sort the input array. Sorting dominates the runtime complexity of this function.
//Space Complexity: O(1)
//The function uses a constant amount of additional memory. The additional memory used does not depend on the size of the input array.
