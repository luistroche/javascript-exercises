
function factorialize(num) {
 return factoringArray(numToArray(num));
}  

function factoringArray(ab){
  var numero = 1;
    for(var e = 0; e < ab.length; e++){
      numero *= ab[e];
    }
  return(numero); 
}

function numToArray(ny) {
  var factoring = [];
  for (var i = 0; i <= ny; i++){
    if (i>0){
          factoring.push(i);
    }
  }
  return(factoring) ;
}
factorialize(5);




// Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.prototype.replace()
// String.prototype.toLowerCase()



function palindrome(a){
  var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var spelledWord = a.replace(/\s+/g, '').toLowerCase().split("");
  var filteredWord = [];
  for(var e = 0; e < spelledWord.length; e++){
      abc.map(function(x){
      if(spelledWord[e] == x){
        filteredWord.push(spelledWord[e]);
      }//if
      
    });
  }//for
    if (filteredWord.join() == filteredWord.reverse().join()){
    return true;
  }else {
    return false;
        }
}



palindrome("eye");






// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.prototype.split()
// String.length






function findLongestWord(str) {
  
  return sortingWords(str);
}

findLongestWord("The quick brown fox jumped over the lazy dog");

var sente ="The quick brown fox jumped over the lazy dog";

function sortingWords(abc){
  return abc.split(" ").sort(function(a, b) {
  return a.length - b.length;
}).pop().length;
}

sortingWords("Google do a barrel roll");




////////////////not done ////////////////


// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.prototype.split()




// function titleCase(str) {
//   return wordTitle(str);
// }

// titleCase("I'm a little tea pot");


////////////////////////////////////////////////////////////////


function titleCase(str){
  var formedNewSentence = '';
  var newWordArray = [];
  var separatedWord = sentenceSplitter(str);
 
  
  for(var e = 0; e < separatedWord.length; e++){
    var firstWord = separatedWord[e];
    var firstWordSeparated = firstWord.split("");
    var firstLetterfromFirstWord = firstWordSeparated.shift();
    firstWordSeparated.unshift(firstLetterfromFirstWord.toUpperCase());
    var firstWordUnited = firstWordSeparated.join("");
      if(e == separatedWord){
        newWordArray.push(firstWordUnited);
      }else{
        newWordArray.push(firstWordUnited);
      }
    
    formedNewSentence = newWordArray.join(" ");
    
  }//end for
  //console.log(separatedWord.join(" "));
  
   return formedNewSentence;
  
}//end wordTitle function

function sentenceSplitter(abc){
  
  var spellWord = abc.toLowerCase().split(" ");
  return spellWord;
  
}//end function sentenceSpliter




//////////// not done //////////////////


// Return Largest Numbers in Arrays 
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Comparison Operators


function largestOfFour(arr){
  var arrayNum = [];
  for(var e = 0; e < arr.length; e++){
    arr[e].sort(function(a, b){return b -a;});
    var nume = arr[e][0];
    arrayNum.push(nume);
  }//end for
  return arrayNum;
  

  
}
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/////////////////////////////////////////////////////////////////////////////////////////////////


// Confirm the Ending 
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.prototype.substr()
// String.prototype.substring()

function confirmEnding(str, target){

  var endWord = str.substring(str.length - target.length);
  if(endWord == target){
    //console.log(endWord + "=="+ target);
    return true;
  }else{
    //console.log(endWord + "!="+ target);
    return false;
  }//end else
  
}
//confirmEnding("Bastian", "n");


/////////////////////////////////////////////////////////////////////////////////////////////////

// Repeat a string repeat a string 
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Global String Object

function repeatStringNumTimes(str, num) {
  // repeat after me
  var myString = "";
  if(num < 0){
    myString = "";
  }else{
    myString = str.repeat(num);
  }
  return myString;
}

repeatStringNumTimes("abc", 3);

/////////////////////////////////////////////////////////////////////////////////////////////////

// Truncate a string
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.prototype.slice()

function truncateString(str, num) {
  if(num < 3){
    return str.slice(0, num) + "...";  
  }else if(str.length > num){
    var cuted = str.slice(0, num - 3);
    console.log( cuted + "..." +" if");
    return cuted + "...";
  }else if(str.length == num){
    console.log(str.length + " == "+ num);
    return str;
  }else{ 
    return str ;
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
