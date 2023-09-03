
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public boolean checkStrings(String inputOne, String inputTwo) {
        int[] frequencyLettersAtEvenIndexes = new int[ALPHABET_SIZE];
        fillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

        int[] frequencyLettersAtOddIndexes = new int[ALPHABET_SIZE];
        fillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

        return lettersAreSwappable(frequencyLettersAtEvenIndexes)
                && lettersAreSwappable(frequencyLettersAtOddIndexes);
    }

    private void fillFrequency(int startIndex, String inputOne, String inputTwo, int[] frequencyLetters) {
        for (int i = startIndex; i < inputOne.length(); i += 2) {
            ++frequencyLetters[inputOne.charAt(i) - 'a'];
            --frequencyLetters[inputTwo.charAt(i) - 'a'];
        }
    }

    private boolean lettersAreSwappable(int[] frequencyLetters) {
        for (int frequency : frequencyLetters) {
            if (frequency != 0) {
                return false;
            }
        }
        return true;
    }
}
