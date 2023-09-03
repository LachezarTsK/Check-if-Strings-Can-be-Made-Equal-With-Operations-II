
/**
 * @param {string} inputOne
 * @param {string} inputTwo
 * @return {boolean}
 */
var checkStrings = function (inputOne, inputTwo) {
    this.ASCII_SMALL_CASE_A = 97;
    const ALPHABET_SIZE = 26;

    const frequencyLettersAtEvenIndexes = new Array(ALPHABET_SIZE).fill(0);
    fillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

    const frequencyLettersAtOddIndexes = new Array(ALPHABET_SIZE).fill(0);
    fillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

    return lettersAreSwappable(frequencyLettersAtEvenIndexes)
            && lettersAreSwappable(frequencyLettersAtOddIndexes);
};

/**
 * @param {number} startIndex 
 * @param {string} inputOne
 * @param {string} inputTwo
 * @param {number[]} frequencyLetters 
 * @return {void}
 */
function fillFrequency(startIndex, inputOne, inputTwo, frequencyLetters) {
    for (let i = startIndex; i < inputOne.length; i += 2) {
        ++frequencyLetters[inputOne.codePointAt(i) - this.ASCII_SMALL_CASE_A];
        --frequencyLetters[inputTwo.codePointAt(i) - this.ASCII_SMALL_CASE_A];
    }
}

/**
 * @param {number[]} frequencyLetters 
 * @return {boolean}
 */
function lettersAreSwappable(frequencyLetters) {
    for (let frequency of frequencyLetters) {
        if (frequency !== 0) {
            return false;
        }
    }
    return true;
}
