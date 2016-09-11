$(document).ready(function(){

    $("#quiz-result").hide();

    for (var i = 2; i <= 7; i++) {
        $("#question" + i).hide();
    }


    var currentQuestion = 1;


    $(".next-click").click(function(){
        $("#question" + currentQuestion).hide();
        $("#question" + (currentQuestion + 1)).slideDown(300);
        currentQuestion += 1;
    });

    $("#submit-quiz").click(function(){
        $("#question" + currentQuestion).hide();
        $("#quiz-result").show('300');
    });
});


