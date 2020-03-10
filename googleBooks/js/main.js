// DISABLING ENTER KEY FOR INPUT

$(document).ready(function()
    {
        // Stop user to press enter in textbox
        $("input:text").keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        });

        $('#back-button').hide();
});

// SEARCH BUTTON EVENT

var searchBtn = document.getElementById('searchBtn');
var input = document.getElementById('input');
var results = document.getElementById('results');
var searcher = document.getElementById('searcher');
// var backButton = document.getElementById('back-button');

searchBtn.addEventListener('click', function() {
  if (input.value === '') {
    alert('There is no value');
  } else {
    console.log('This function works');
    console.log(input.value);
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + input.value + '&maxResults=25',
      dataType: 'json',
      success: function(data) {
        console.log(data);
        searcher.style.marginTop = "5vh";
        // searcher.style.display = "none";
        // backButton.style.display = "inline-block";

        for (var i = 0; i < data.items.length; i++) {

          var img = document.createElement('img');
  				var a = document.createElement('a');

  				img.src = data.items[i].volumeInfo.imageLinks.thumbnail;
          img.alt = data.items[i].volumeInfo.title + " by " + data.items[i].volumeInfo.authors;
  				a.href = data.items[i].volumeInfo.previewLink;
  				a.target = "_blank";
  				a.appendChild(img);
          $("img").addClass("animated fadeInUp");

          results.innerHTML += '<hr class="animated fadeInUp">';
          results.innerHTML += '<h1 class="animated fadeInUp">' + data.items[i].volumeInfo.title + '</h1>';
          results.innerHTML += '<h3 class="animated fadeInUp">' + 'by '+ data.items[i].volumeInfo.authors + '</h3>';
          results.appendChild(a);
          results.innerHTML += '<p class="description animated fadeInUp">' + data.items[i].volumeInfo.description + '</p>';

        }

      },
      type: 'GET'
    });

    input.value = '';
  }
});
