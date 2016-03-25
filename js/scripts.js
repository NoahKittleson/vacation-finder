$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var result1 = $("#transportation").val();
    var result2 = $("input:radio[name=temperature]:checked").val();
    var result3 = $("input:radio[name=sandwich]:checked").val();
    var result4 = $("#events").val();
    var result5 = $("#departure").val();
    var result6 = $("#name").val();
    if (!result1 || !result2 || !result3 || !result4 || !result5 || !result6) {
      alert("BAD INPUT")
    }
    else {
      $(".output").append(result1 + "\n");
      $(".output").append(result2 + "\n");
      $(".output").append(result3 + "\n");
      $(".output").append(result4 + "\n");
      $(".output").append(result5 + "\n");
      $(".output").append(result6 + "\n");
    }
  })
});
