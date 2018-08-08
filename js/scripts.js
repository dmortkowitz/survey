$(document).ready(function(){
  $("#survey").submit(function(event){
    var collectedName = $("input#name").val();
    var collectedFood = $("input#food").val();
    var collectedMusic = $("select#music").val();
    var collectedMovie = $("input:radio[name=genre]:checked").val();
    var collectedColor = $("input#color").val();
    var collectedDate = $("input#date").val();
    $("#surveyAnswer .name").text(collectedName);
    $("#surveyAnswer .food").text(collectedFood);
    $("#surveyAnswer .music").text(collectedMusic);
    $("#surveyAnswer .movie").text(collectedMovie);
    $("#surveyAnswer .color").text(collectedColor);
    $("#surveyAnswer .date").text(collectedDate);
    event.preventDefault();
  });
});
