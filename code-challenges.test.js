// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("Coding Message Function", () => {
    it("Takes a string and returns a coded message", () => {
        let expected1 = "L4ck4d41s1c4l"
        let expected2 = "G0bbl3dyg00k"
        let expected3 = "3cc3ntr1c"

        expect(encodeWord(secretCodeWord1)).toEqual(expected1)
        expect(encodeWord(secretCodeWord2)).toEqual(expected2)
        expect(encodeWord(secretCodeWord3)).toEqual(expected3)
    })
})


// b) Create the function that makes the test pass.

/*
encodeWord
param word - string
convert the letters (both upper and lowercase!):
    a, A -> 4, e, E -> 3, i, I -> 1, o, O -> 0
use str.replaceAll(substr, newStr) instead of str.replace(),
because .replace() will only replace first occurrence
return the word
*/

const encodeWord = (word) => {
    return word.replaceAll('a', '4').replaceAll('A', '4')
                .replaceAll('e', '3').replaceAll('E', '3')
                .replaceAll('i', '1').replaceAll('I', '1')
                .replaceAll('o', '0').replaceAll('O', '0')
}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

describe("Contains A", () => {
    it("Takes an array of strings and returns an array that contains the letter A/a", () => {
        let expected1 = ["Apple", "Banana", "Orange"]
        let expected2 = ["Mango", "Apricot", "Peach"]

        expect(wordsWithA(arrayOfWords1)).toEqual(expected1)
        expect(wordsWithA(arrayOfWords2)).toEqual(expected2)
    })
})


// b) Create the function that makes the test pass.

/*
wordsWithA
param: words - array
use filter and word.includes('a') and word.includes('A')
to only get the words that have an a or A
returns the array from filter
*/

const wordsWithA = (words) => {
    return words.filter(word => word.includes('a') || word.includes('A'))
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("Full House Function", () => {
    it("Gets an array of 5 numbers and returns whether the array is a full house", () => {
        let output1 = true
        let output2 = false
        let output3 = false

        expect(isFullHouse(hand1)).toEqual(output1)
        expect(isFullHouse(hand2)).toEqual(output2)
        expect(isFullHouse(hand3)).toEqual(output3)
        
        // extra test for full house with pair first then 3 of a kind
        expect(isFullHouse([1, 3, 1, 3, 1])).toEqual(true)
    })
})


// b) Create the function that makes the test pass.

/*
isFullHouse
param hand - array
Checks if the hand is a full house.
A full house is one pair and one three of a kind.
Sort the numbers in ascending order sort((a, b) => a - b)
Then the order for a full house can be either:
1) pair and then three of a kind:
    check if indices at 0, 1 are the same and 2 and 4 match
2) three of a kind then a pair
    check indices at 0 and match 2, and 3 matches 4
return true if it matches either condition, return false if not

ex: hand1.sort() => [3, 3, 5, 5, 5] => true because of first condition
hand2.sort => [3, 3, 4, 5, 5] => false, h[0] does not match h[2] 
hand3.sort => [4, 5, 5, 5, 5] => false, h[0] does not match h[1]
[1, 1, 2, 2, 3] => false, h[2] does not match h[4]
*/

const isFullHouse = (hand) => {
    let sortedHand = hand.sort((a, b) => a - b)
    if (sortedHand[0] === sortedHand[1] && sortedHand[2] === sortedHand[4] ||
        sortedHand[0] === sortedHand[2] && sortedHand[3] === sortedHand[4]) {
            return true
    } else {
        return false
    }
}