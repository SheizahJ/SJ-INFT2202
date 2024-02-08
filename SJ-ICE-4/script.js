// JQuery Code Here
// Wrap our code in the ready method
$(document).ready(function () {
    console.log("DOM is ready to be manipulated!");

    // Animate the form appearance
    $("#registration-form").hide().fadeIn(2000); // in ms (2 seconds)

    // Handle form submission
    // document.querySelector("#signup-form").addEventListener("submit", function (event) {})
    $("#signup-form").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let date = $("#date").val();
        let isValid = true;
        console.log(name);
        console.log(email);
        console.log(date);

        // Form validation
        if (name == "") {
            alert("Please enter your name!");
            isValid = false;
        }
        if (email == "") {
            alert("Please enter your email!");
            isValid = false;
        }
        if (date == "") {
            alert("Please select a date!");
            isValid = false;
        }

        if (isValid) {
            
        }
    });
});