$(document).ready(function() {

  var randomQuote = "";
  var author = "";
  getQuote();

  function getQuote(){
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";


    $.getJSON(url, function(data){
      randomQuote = data.quoteText;
      author = data.quoteAuthor;
      $("#quotation").html('<span class="quoteLeft">"</span>' + data.quoteText + '<span class="quoteLeft">"</span>');

      if (data.quoteAuthor) {
      $("#author").html("<strong>~ " + author + "</strong>");
    } else {
      $("#author").html("<strong>~ Anonymous</strong>");
    }

    });

  };

  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + '"' + randomQuote + '" - ' + author);
  });

  $("#newQuote").on("click", function(){
    getQuote();
  });


});
