/*
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

// Pig -> IgPay  (testing one word, testing the consonant case)
// Latin -> Atinlay (testing one word, testing the vowel case)
// Pig Latin -> IgPay Atinlay  (tests a sentence with both consonants and vowels)

let firstTest = "Hello"; // expecting: "elloHay"

const vowels = ["a", "e", "i", "o", "u"];

// Hello my name is jeff;

const pigLatin = (toTranslate) => {
  console.log(toTranslate);
  let translated = "";
  let wordslist = toTranslate.split(" ");
  console.log(wordslist);

  wordslist.forEach((item) => {
    console.log("FOR EACH LOOP RUNNING:");
    console.log(item);
    // Procedure defined below
    let translatedWord;
    item = item.toLowerCase();
    console.log(item);
    if (vowels.includes(item[0])) {
      translatedWord = item + "ay";
      console.log(translatedWord);
    } else {
      for (let i = 0; i < item.length; i++) {
        if (vowels.includes(item[i])) {
          console.log(translatedWord);
          let chunk = item.slice(0, i);
          console.log(chunk);
          translatedWord = item.slice(i) + chunk + "ay";
          console.log(translatedWord);
          i = item.length;
        }
      }
    }
    translated += translatedWord + " ";
    console.log(translated);
  });

  console.log(translated);
  return translated;
};

pigLatin("I think functions are cool"); // -> atinlay
