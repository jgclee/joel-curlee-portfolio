$(document).ready(function(){

  $('#search').click(function(){
    var searchTerm = $('#searchTerm').val();


    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    // Wikipedia API ajax callback
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        // Get heading console.log(data[1][0]);
        // Get description console.log(data[2][0]);
        // Get link console.log(data[3][0]);

        $('#output').html('');

        for (var i =0; i<data[1].length; i++) {

          $('#output').prepend("<li><a href='" + data[3][i] + "'>" + data[1][i] + "</a><p>" + data[2][0] + "</p></li>");

        }
      },
      error: function(errorMessage) {
        console.log(errorMessage);
        alert("Error!");
      }
    })

  })
})
