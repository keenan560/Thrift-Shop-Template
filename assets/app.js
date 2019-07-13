var mapKey = "AIzaSyCXaRmd6kEGCAcWOeZ3YgL0ZyO0Mrnj4ys";

$(document).on("click", "#submit", function (event) {
    event.preventDefault();

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    var contactRequest = {
        name: name,
        email: email,
        message: message
    };

    console.log(contactRequest);

})

$(document).on("click", "#bargain", function (event) {
    event.preventDefault();

    $("#bargain").removeClass("shake");
    $("#bargain").addClass("hinge");

});

$(document).on("click", "#hanger", function(event) {
    event.preventDefault();

    $("#hanger").removeClass("shake");
    $("#hanger").addClass("flip");

})