$(document).ready(function() {
 });
  
  function update(json) { //update hidden divs
    for (var i = 1; i < 11; i++) {
      var getTitle = $('#title' + [i]).html(json.query.search[i-1].title);
      var getResultNumber = $('#result' + [i]);
      var titleName = json.query.search[i-1].title;
      getResultNumber.attr('href', 'https://en.wikipedia.org/wiki/' + titleName);
      var myString = (json.query.search[i-1].snippet);
      var getSummary = $('#summary' + [i]).html(json.query.search[i-1].snippet.replace(/<\/?[^>]+(>|$)+&/g, "").substr(0,myString.indexOf(". ")+1));
    }
  }
   
$('#search').click(function () {
  var keyword = $("#searchTerm").val(); //get search term from input
  if (keyword === "") {
    window.alert("You must enter a search term");
  } else {
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&srsearch=" + keyword,
      dataType: 'jsonp',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: update,
});
    $(".box").fadeIn().css("display", "inline-block"); //unhide divs
    $("#main").css("margin-top", "3%");
    }
})

$('#searchTerm').keypress(function(e) {
  if (e.keyCode === 13) {
    var keyword = $("#searchTerm").val(); //get search term from input
    if (keyword === "") {
      window.alert("You must enter a search term");
    } else {
      $.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&srsearch=" + keyword,
      dataType: 'jsonp',
      type: 'POST',
      headers: { 'Api-User-Agent': 'Example/1.0' },
      success: update,
    });
      $(".box").fadeIn().css("display", "inline-block"); //unhide divs
      $("#main").css("margin-top", "3%");
    }
  }
});    
