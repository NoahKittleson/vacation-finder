var icelandScore = 0;
var patagoniaScore = 0;
var sumatraScore = 0;


$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    // Reset scores to zero
    icelandScore = 0;
    patagoniaScore = 0;
    sumatraScore = 0;

    // Read values and compute score
    var result1 = $("#transportation").val();
    addScore(result1);
    var result2 = $("input:radio[name=temperature]:checked").val();
    addScore(result2);
    var result3 = $("input:radio[name=sandwich]:checked").val();
    addScore(result3);
    var result4 = $("#events").val();
    addScore(result4);
    var result5 = $("#departure").val();
    addScore(result5);
    var result6 = $("#name").val();
    addScore(result6);
    if (!result1 || !result2 || !result3 || !result4 || !result5 || !result6) {
      alert("BAD INPUT! Remember to fill ALL fields.")
    } else {
      // If input is good, print any nation that got 2 or more "score"
      $(".message").show();
      $(".name").text(result6);
      $(".time").text(result5);

      if (icelandScore >= 2) {
        $(".iceland").show();
      } else {
        $(".iceland").hide();
      }
      if (sumatraScore >= 2) {
        $(".sumatra").show();
      } else {
        $(".sumatra").hide();
      }
      if (patagoniaScore >= 2) {
        $(".patagonia").show();
      } else {
        $(".patagonia").hide();
      }
    }
  })
});


var addScore = function(result) {
  if (result === "iceland") {
    icelandScore += 1;
  }
  if (result === "sumatra") {
    sumatraScore += 1;
  }
  if (result === "patagonia") {
    patagoniaScore += 1;
  }
  if (result === "none") {
    patagoniaScore += 1;
    sumatraScore += 1;
    icelandScore += 1;
  }
}
