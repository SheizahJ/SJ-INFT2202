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
            $("#confirmation-message").slideUp(function () {
                $(this).html(`
                    <p>Thank you, <strong>${name}</strong></p>
                    <p>Your registration for the show on <strong>${date.toUpperCase()}</strong> is confirmed.</p>
                    <p>A confirmation email has been sent to <strong>${email}</strong></p>
                `).slideDown().fadeOut(5000);
            });

            $("#signup-form").find("input[type=text], input[type=email], select").val("");
        }
    });

    // Handle form reset
    $("#signup-form input[type=reset]").click(function (event) {
        $("#confirmation-message").slideUp(function () {
            $(this).html(`
                <p>Successfully cleared the form!</p>
            `).slideDown().fadeOut(3000);
        });
    });

    // Form field animations
    $("input, select").focus(function () {
        $(this).animate(
            {
                borderColor: "#68b3c8",
            }, 500
        )
    }).blur(function () {
        $(this).animate(
            {
                // jQuery.Color is a separate module (optional)
                borderColor: "#ddd",
            }, 500
        )
    });

    // Submit button animation
    $("#signup-form input[type=submit]").hover(function () {
        $(this).animate(
            {
                borderColor: "#333333",
            }, 200
        )
    }, function () {
        $(this).animate(
            {
                backgroundColor: "#5c5c5c",
            }, 200
        )
    });
});

/*  
    --- ICE 4 TODO ---
    1. Add a "reset" button that clears all the inputs and the confirmation message when clicked.
    2. Implement a "fade out" message after a certain period once the registration is confirmed.
*/