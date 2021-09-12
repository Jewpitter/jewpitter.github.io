$(document).ready(function(){


  $('#doge1-button').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://game-of-thrones-quotes.herokuapp.com/v1/random",
      success: function(results) {
        console.log(results["sentence"]);
        console.log(results["character"].name);
          $('#quote').text(results["sentence"] + " -" + results["character"].name);
      },
      error: function(xhr,status,error) {
        console.log(error)
        console.log("GoT API error")
      }
    });
    $("#quote").css("font-family", "MedievalSharp, cursive");
  });

  $('#doge2-button').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://animechan.vercel.app/api/random",
      success: function(results) {
        console.log(results["quote"]);
        console.log(results["character"]);
        console.log(results["anime"]);
          $('#quote').text(results["quote"] + " -" + results["character"] + " from " + results["anime"]);
      },
      error: function(xhr,status,error) {
        console.log(error)
        console.log("Anime API error")
      }
    });
    $("#quote").css("font-family", "Zhi Mang Xing, cursive");
  });

  $('#doge3-button').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://breaking-bad-quotes.herokuapp.com/v1/quotes",
      success: function(results) {
        console.log(results[0].quote);
        console.log(results[0].author);
          $('#quote').text(results[0].quote + " -" + results[0].author);
      },
      error: function(xhr,status,error) {
        console.log(error)
        console.log("BB API error")
      }
    });
    $("#quote").css("font-family", "ZCOOL KuaiLe, cursive");
  });

});
