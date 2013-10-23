$(document).ready(function() {
  $('#tweet_form').on('submit', function(event){
    event.preventDefault();

    var data = $("#tweet_form").serialize();

    $.post('/tweet', data, function(){
      })
      .fail("/", function(){
        alert( "You silly goose, you need to type something!");
      })
      .done(function() {
        $.get("/_all_good", function(response){
        $('#tweet_form').append(response);
      });
    });
  });
});
