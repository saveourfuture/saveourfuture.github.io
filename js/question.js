$(document).ready(function(){

    $("#quiz-result").hide();



    for (var i = 1; i <= 7; i++) {
        $("#question" + i).hide();
    }

    $("#get-started").click(function(){
        $("#get-started").hide()
        $("#question1").slideDown(300);
    });


    var currentQuestion = 1;


    $(".next-click").click(function(){
        $("#question" + currentQuestion).hide();
        $("#question" + (currentQuestion + 1)).slideDown(300);
        currentQuestion += 1;
    });

    $("#submit-quiz").click(function(){
        $("#start-quiz").hide();
        $("#question" + currentQuestion).hide();
        $("#quiz-result").show('300');
    });
});


