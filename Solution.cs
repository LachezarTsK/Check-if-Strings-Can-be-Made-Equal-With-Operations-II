
using System;

public class Solution
{
    const int ALPHABET_SIZE = 26;

    public bool CheckStrings(string inputOne, string inputTwo)
    {
        int[] frequencyLettersAtEvenIndexes = new int[ALPHABET_SIZE];
        FillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

        int[] frequencyLettersAtOddIndexes = new int[ALPHABET_SIZE];
        FillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

        return LettersAreSwappable(frequencyLettersAtEvenIndexes)
                && LettersAreSwappable(frequencyLettersAtOddIndexes);
    }


    private void FillFrequency(int startIndex, String inputOne, String inputTwo, int[] frequencyLetters)
    {
        for (int i = startIndex; i < inputOne.Length; i += 2)
        {
            ++frequencyLetters[inputOne[i] - 'a'];
            --frequencyLetters[inputTwo[i] - 'a'];
        }
    }

    private bool LettersAreSwappable(int[] frequencyLetters)
    {
        foreach (int frequency in frequencyLetters)
        {
            if (frequency != 0)
            {
                return false;
            }
        }
        return true;
    }
}
