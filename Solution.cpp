
#include <array>
#include <string>
using namespace std;

class Solution {
    
    static const int ALPHABET_SIZE = 26;

public:
    bool checkStrings(const string& inputOne, const string& inputTwo) const {
        array<int, ALPHABET_SIZE> frequencyLettersAtEvenIndexes{0};
        fillFrequency(0, inputOne, inputTwo, frequencyLettersAtEvenIndexes);

        array<int, ALPHABET_SIZE> frequencyLettersAtOddIndexes{0};
        fillFrequency(1, inputOne, inputTwo, frequencyLettersAtOddIndexes);

        return lettersAreSwappable(frequencyLettersAtEvenIndexes)
                && lettersAreSwappable(frequencyLettersAtOddIndexes);
    }

private:
    //C++17, alternative to 'const string&':  string_view
    //C++20, alternative to 'array<int, ALPHABET_SIZE>&': span<int>
    void fillFrequency(int startIndex, const string& inputOne, const string& inputTwo, array<int, ALPHABET_SIZE>& frequencyLetters) const {
        for (int i = startIndex; i < inputOne.length(); i += 2) {
            ++frequencyLetters[inputOne[i] - 'a'];
            --frequencyLetters[inputTwo[i] - 'a'];
        }
    }

    //C++20, alternative to 'const array<int, ALPHABET_SIZE>&': span<const int>
    bool lettersAreSwappable(const array<int, ALPHABET_SIZE>& frequencyLetters) const {
        for (const auto& frequency : frequencyLetters) {
            if (frequency != 0) {
                return false;
            }
        }
        return true;
    }
};
