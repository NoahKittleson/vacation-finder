$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var result1 = $("#transportation").val();
    var result2 = $("input:radio[name=temperature]:checked").val();
    if (result1 === "Select One" || !result2) {
      alert("BAD INPUT")
    }
    else {
      $(".output").append(result1 + "\n");
      $(".output").append(result2 + "\n");
    }
  })
});
