
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


// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Array.prototype.push()
// Array.prototype.slice()

function chunkArrayInGroups(arr, size){
  var myArray = [];
  for(var e = 0; arr.length > 0; e++){
    var tempArray = arr.slice(0, size);
    myArray.push(tempArray);
    arr.splice(0 , size);
    
  }//end for
  
  return myArray;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Array.prototype.slice()
// Array.prototype.splice

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var chop = arr.slice(0, howMany);
  arr.splice(0, chop.length);
  
  return arr;
}

///////////////////////////////////////////////////////////////////////////////////////////////////


// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// String.prototype.indexOf()

function mutation(palabras){
  var origen = palabras[0].toLowerCase().split("");
  var busca = palabras[1].toLowerCase().split("");
  
  var validatedWord = [];
  for(var e = 0; e <= busca.length; e++){
    if(origen.indexOf(busca[e]) != -1) {
      validatedWord.push(busca[e]);
      
    }//end if
    
  }//end for
    if(validatedWord.length == busca.length){
      return true;
    }else{
      return false;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////


// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Boolean Objects
// Array.prototype.filter()

function bouncer(arr){
  var filtrado = arr.filter(function(a){
    return Boolean(a) == true;
  });
  return (filtrado);
}


///////////////////////////////////////////////////////////////////////////////////////////////////

// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Arguments object
// Array.prototype.filter()

function destroyer(arr){
  var filtrados = [];
  var filtros = [];
  for(var e = 1; e < arguments.length; e++){
    filtros.push(arguments[e]);
  }//end for
  var toFilter = arr.filter(function(){
    return arguments[0];
  });// end toFilter
  for(var y = 0; y != toFilter.length;){
    if(toFilter[y] == filtros[0]){
      toFilter.shift();
    }else if(toFilter[y] == filtros[1]){
      toFilter.shift();
    }else if(toFilter[y] == filtros[2]){
      toFilter.shift();
    }else{
      filtrados.push(toFilter[y]);
      toFilter.shift();
    }
  }//end for
  
  
  
  
  
//   toFilter.map(function(element){
//     for(var y = 0; y < filtros.length; y++){
//       if (element == filtros[y]){
//         toFilter.splice(toFilter.indexOf(element), 1);
//         y = -1;
//       }else{
//         filtrados.push(element);
//       }
//     }
//   });
  return (filtrados);
}

// destro([1, 2, 3, 1, 2, 3], 2, 3);
// destro(["tree", "hamburger", 53], "tree", 53);

///////////////////////////////////////////////////////////////////////////////////////////////////


// Where do I belong 
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Here are some helpful links:

// Array.prototype.sort()

function getIndexToIns(arr, num){
  function buscadorNumero(elem) {
    return elem == num;
  }// end function buscadorNumero
  function compareNumbers(a, b){
    return a - b;
  }//end function compareNumbers
  var lista = arr;
  var numero = num;
  lista.push(num);
  lista.sort(compareNumbers);
  var indexando = lista.findIndex(buscadorNumero);
  
  return indexando;
  
  
}//end function arreglador

arreglador([3, 10, 5], 3);

///////////////////////////////////////////////////////////////////////////////////////////////////

// Caesars Cipher 
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Here are some helpful links:

// String.prototype.charCodeAt()
// String.fromCharCode()


function rot13(str){
  var frase ="";
  var e = 0;
  
  while(e < str.length){
    if(str.charCodeAt(e)< 65){
      frase = frase + String.fromCharCode(str.charCodeAt(e));
      e++;
    }else if(str.charCodeAt(e) <= 77){

      frase = frase + String.fromCharCode(str.charCodeAt(e)+13);
      e++;
    }else if(str.charCodeAt(e) <= 90){

      frase = frase + String.fromCharCode(str.charCodeAt(e)-13);
      e++;
    }else{

      frase = frase + String.fromCharCode(str.charCodeAt(e));
      e++;
    }
    
    

  }//end while
  return frase;
}//end traductor function


// Change the inputs below to test
// rot13("SERR PBQR PNZC");

