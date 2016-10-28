var converterLoop = function(number) {      // ------- 4  Converter loop runs a for loop that runs through the inputed number which broken into an array with split then uses digit converter to match roman numerals per place holder
  var numeralLists = [{one:"I", five:"V", ten:"X"}, {one:"X", five:"L", ten:"C"}, {one:"C", five:"D", ten:"M"}, {one:"M", five:"-", ten:"-"}];
  //Break the number into an array and reverse it
  var number = number.split('').reverse();
  //Loop through the array calls the digitConverter function and passes in the numeralList.
  for (var index = 0; index < number.length; index += 1) {
    number[index] = digitConverter(number[index], numeralLists[index]);
  };
  //Reverses the number to its original form and joins it.
  return number.reverse().join('');
};


var digitConverter = function(inNumber, numeralList) {                //// 5
// Pass in a number and a numeral list corresponding to the 10's place.
  var one = numeralList.one;
  var five = numeralList.five;
  var ten = numeralList.ten;
  var number = parseInt(inNumber);
// Convert a number between 1 and 9 to numerals using numeral list symbols.
    if (number <= 3) {
      number = one.repeat(number);
    } else if (number === 4) {
      number = one + five;
    } else if (number >= 5 && number < 9) {
      number = five + (one.repeat(number - 5));
    } else if (number === 9) {
      number = one + ten;
    }

return number;
};

var inputCheck = function(input) {                      // ------ 3 checking input and running output through converterLoop
  // Check for valid input and ouput message for invalid, else run converterLoop.
  var output = "";
  if (!parseInt(input) || input.length > 4) {
    output = "Please enter a valid number without commas!";
  } else if (input <= 0 || input > 3999) {
    output = "Please enter a number between 1 and 3999!";
  } else {
    output = converterLoop(input);
  }
  return output;
};

$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();
    var userNumber = $("#numberInput").val(); // ----- 1  value is collected

    var result = inputCheck(userNumber); // ------ 2 checking input type by calling input check
    $("#numeralResult").text(result);

  });

});
