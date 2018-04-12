function dwarfRollCall(dwarves) {
// <<<<<<< HEAD
  
  let message = "";
    var lineNumber = "";
    var nextOne = "";
  for (var i = 0; i < dwarves.length; i++)
  {
    lineNumber = i + 1;
    nextOne = lineNumber + ". " + dwarves[i];
    message += nextOne + " ";
  }
  return message;
 // =======
<<<<<<< HEAD

=======
  for (i = 0; i < dwarves.length; i++)
  {
    var lineNumber = i + 1;
    var nextOne = i +"." + dwarves[i];
    var message =+ nextOne ;
  }
>>>>>>> 20e56f3283800e3a4374b8a8df862f07b792a9c4
// >>>>>>> 482eeee02985e51d9a88c329932979293e474bed
}

function summonCaptainPlanet(planeteerCalls){
  var capPlaneteerCalls = [] ;
  var calls = ""; 
  var newCalls;
  var i = 0;
  var calls2;
  //(var i = 0; i < planeteerCalls.length; i++)
  do 
  {
    calls = planeteerCalls[i];
    calls2 = calls.toUpperCase();
    newCalls = calls2 + "!";
  capPlaneteerCalls.push(newCalls); 
  i++;
  }
  while (i < planeteerCalls.length);
  
  
  return capPlaneteerCalls;
  // var capPlaneteerCalls = planeteerCalls;
}

function longPlaneteerCalls(words) {
  var testLength = 0;
  var i = 0;
  do {
    testLength = words[i].length;
    //testLength = thisWord.length();
    if (testLength > 4)
    i++;
    return (testLength > 4);
      }
      while (testLength > 4);
}

function findTheCheese (foods) {
  //create a for loop that checks index 0 of the array for === 1 cheese, 
  //then returns that cheese name and exits the loop
  //if not a cheese remove the index 0 (use array.shift)
  //after the loop return the cheese name 
  var thisCheese = "";
  var thisFood = "";
  var i = 0;
var cheeseNames = ["cheddar", "gouda", "camembert"] ;

 do {
   thisCheese = cheeseNames.shift();
   
   do {
           thisFood = foods.shift();
         //inner loop begin
         if (thisCheese === thisFood)
         {
           // jig is up, tell them the matching cheese
           return thisCheese;
         }
      
           //inner loop ends here
         }
         //keep going until no more foods to test
         while (foods.length > 0);
   
  }
  //keep running until no more cheeses to test
 while (cheeseNames.length > 0);
 
 // if we got this far jig is up but no cheeses matched
 return "no cheese!";
   
}
function wordsWithB(words){
  var bWords = [] ;
  for (i = 0; i < words.length; i++; )
  {
    if (words[i].startsWith('b'))
    {
      bWords.push(words[i]);
    }
      }
  return bwords
}