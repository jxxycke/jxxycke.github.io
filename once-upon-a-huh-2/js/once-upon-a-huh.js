const body = $("body");
const main = $("main");

$('body').fadeIn(2000, function () {
  $('#part-0-end').delay(500).fadeIn(1000);
  $('.intro').on("click", function () {
    $("#part-0-end").fadeOut(1000);
      $('.part-1').fadeIn(1000);
      $('#part-1-end').delay(500).fadeIn(1000);
  });
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$("#part-1-end").on("click", function () {
  $("#part-1-end").fadeOut(1000);
    $('.options-1').fadeIn(1000);
    $('#options-1-end').delay(500).fadeIn(1000);
});

// Options 1
  $("#selectOption1").click(function(){
    $("#selectOption1").fadeOut(1000);
    $("#selectOption2").fadeOut(1000);
    $("#selectOption3").fadeOut(1000);
    $("#paragraphDisplay").fadeIn(1000);
  });

  $("#selectOption2").click(function(){
    $("#selectOption1").fadeOut(1000);
    $("#selectOption2").fadeOut(1000);
    $("#selectOption3").fadeOut(1000);
    $("#paragraphDisplay").fadeIn(1000);
  });

  $("#selectOption3").click(function(){
    $("#selectOption1").fadeOut(1000);
    $("#selectOption2").fadeOut(1000);
    $("#selectOption3").fadeOut(1000);
    $("#paragraphDisplay").fadeIn(1000);
  });

//Story Continuation

$("#options-1-end").on("click", function () {
    $("#options-1-end").fadeOut(1000);
    $('.part-2').fadeIn(1000);
    $('#part-2-end').delay(500).fadeIn(1000);
  });

  $("#part-2-end").on("click", function () {
    $("#part-2-end").fadeOut(1000);
      $('.options-2').fadeIn(1000);
      $('#options-2-end').delay(500).fadeIn(1000);
  });

  // Options 2
    $("#selectOption4").click(function(){
      $("#selectOption4").fadeOut(1000);
      $("#selectOption5").fadeOut(1000);
      $("#selectOption6").fadeOut(1000);
      $("#paragraph2Display").fadeIn(1000);
    });

    $("#selectOption5").click(function(){
      $("#selectOption4").fadeOut(1000);
      $("#selectOption5").fadeOut(1000);
      $("#selectOption6").fadeOut(1000);
      $("#paragraph2Display").fadeIn(1000);
    });

    $("#selectOption6").click(function(){
      $("#selectOption4").fadeOut(1000);
      $("#selectOption5").fadeOut(1000);
      $("#selectOption6").fadeOut(1000);
      $("#paragraph2Display").fadeIn(1000);
    });


//Story Continuation

  $("#options-2-end").on("click", function () {
    $("#options-2-end").fadeOut(1000);
      $('.part-3').fadeIn(1000);
      $('#part-3-end').delay(500).fadeIn(1000);
    });

    $("#part-3-end").on("click", function () {
      $("#part-3-end").fadeOut(1000);
        $('.options-3').fadeIn(1000);
        $('#options-3-end').delay(500).fadeIn(1000);
    });

    // Options 3
      $("#selectOption7").click(function(){
        $("#selectOption7").fadeOut(1000);
        $("#selectOption8").fadeOut(1000);
        $("#selectOption9").fadeOut(1000);
        $("#paragraph3Display").fadeIn(1000);
      });

      $("#selectOption8").click(function(){
        $("#selectOption7").fadeOut(1000);
        $("#selectOption8").fadeOut(1000);
        $("#selectOption9").fadeOut(1000);
        $("#paragraph3Display").fadeIn(1000);
      });

      $("#selectOption9").click(function(){
        $("#selectOption7").fadeOut(1000);
        $("#selectOption8").fadeOut(1000);
        $("#selectOption9").fadeOut(1000);
        $("#paragraph3Display").fadeIn(1000);
      });

//Story Continuation

    $("#options-3-end").on("click", function () {
      $("#options-3-end").fadeOut(1000);
        $('.part-4').fadeIn(1000);
        $('#part-4-end').delay(500).fadeIn(1000);
      });

      $("#part-4-end").on("click", function () {
        $("#part-4-end").fadeOut(1000);
          $('.options-4').fadeIn(1000);
          $("#app").fadeIn(1000);
          startTimer();
          $('#options-4-end').delay(500).fadeIn(1000);
      });

      // Options 4
        $("#selectOption10").click(function(){
          $("#selectOption10").fadeOut(1000);
          $("#selectOption11").fadeOut(1000);
          $("#selectOption12").fadeOut(1000);
          $('.timer').fadeOut(1000);
          $("#paragraph4Display").fadeIn(1000);
        });

        $("#selectOption11").click(function(){
          $("#selectOption10").fadeOut(1000);
          $("#selectOption11").fadeOut(1000);
          $("#selectOption12").fadeOut(1000);
          $('.timer').fadeOut(1000);
          $("#paragraph4Display").fadeIn(1000);
        });

        $("#selectOption12").click(function(){
          $("#selectOption10").fadeOut(1000);
          $("#selectOption11").fadeOut(1000);
          $("#selectOption12").fadeOut(1000);
          $('.timer').fadeOut(1000);
          $("#paragraph4Display").fadeIn(1000);
        });


        //Story Continuation

      $("#options-4-end").on("click", function () {
        $("#options-4-end").fadeOut(1000);
          $('.part-5').fadeIn(1000);
          $('#part-5-end').delay(500).fadeIn(1000);
        });

        $("#part-5-end").on("click", function () {
          $("#part-5-end").fadeOut(1000);
            $('.options-5').fadeIn(1000);
            $('#options-5-end').delay(500).fadeIn(1000);
        });


        // Options 5
          $("#selectOption13").click(function(){
            $("#selectOption13").fadeOut(1000);
            $("#selectOption14").fadeOut(1000);
            $("#selectOption15").fadeOut(1000);
            $("#paragraph5Display").fadeIn(1000);
          });

          $("#selectOption14").click(function(){
            $("#selectOption13").fadeOut(1000);
            $("#selectOption14").fadeOut(1000);
            $("#selectOption15").fadeOut(1000);
            $("#paragraph5Display").fadeIn(1000);
          });

          $("#selectOption15").click(function(){
            $("#selectOption13").fadeOut(1000);
            $("#selectOption14").fadeOut(1000);
            $("#selectOption15").fadeOut(1000);
            $("#paragraph5Display").fadeIn(1000);
          });

          //Story Continuation

        $("#options-5-end").on("click", function () {
          $("#options-5-end").fadeOut(1000);
            $('.part-6').fadeIn(1000);
            $('#part-6-end').delay(500).fadeIn(1000);
          });
