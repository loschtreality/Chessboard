$(document).ready(function(){


function appendBox(num){
  var grandArr = [];
  for (var j = 0; j < num; j++) {
    if (j % 2 === 0) {
      evenApp();
    }else {
      oddApp();
    }
  }
  function evenApp(){
    var evenArr = ["<tr>"];
    for (var i = 0; i < num; i++) {
      if (i % 2 === 0) {
        evenArr.push("<td><div class='boardSpace blackSquare'></div></td>");
      }
      else {
        evenArr.push("<td><div class='boardSpace whiteSquare'></div></td>");
      }
    }
    evenArr.push("</tr>");
    evenArr = evenArr.reduce(function(prev,curr){return prev += curr;});
    grandArr.push(evenArr);
  }

  function oddApp(){
    var oddArr = ["<tr>"];
    for (var k = 0; k < num; k++) {
      if (k % 2 === 0) {
        oddArr.push("<td><div class='boardSpace whiteSquare'></div></td>");
      }else {
        oddArr.push("<td><div class='boardSpace blackSquare'></div></td>");
      }
    }
    oddArr.push("</tr>");
    oddArr = oddArr.reduce(function(prev,curr){return prev += curr;});
    grandArr.push(oddArr);
  }
  return grandArr;
}

  var selection = $('select').val();
  $('#gameBoard').append(appendBox(selection));

  $('select').on('change',function(){
    $('#gameBoard').empty();
    selection = $(this).val();
    $('#gameBoard').append(appendBox(selection));
  });

});
