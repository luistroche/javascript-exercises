
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


function wordTitle(str){
  var title = spliter(str);
  var deletreo;
  var primerLetra;
  var juntando =[];
  for (var i = 0; i < title.length; i++){
    deletreo = title[i].split("");
    title.shift();
    primerLetra = deletreo.shift();
    deletreo.unshift(primerLetra.toUpperCase());
    var cosa = deletreo.join('');
    juntando.push(cosa);
    
  }//end for 
  
  return juntando.join(" ");
  
}//end wordTitle function

function spliter(abc){
  
  var spellWord = abc.toLowerCase().split(" ");
  return spellWord;
  
}//end function spliter


var tre = "I'm a little tea pot";
wordTitle(tre);

//////////// not done //////////////////