/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// CONSTANTS ----------------------------------------------------------------
const minNameLength  = 2;
const minEmailLength = 8;
const minPassLength  = 6;

// REGISTRATION -------------------------------------------------------------
/**
 * Creates a new user when registring.
 */
class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

/**
 * Waits for document to be ready before running functions.
 */
$(document).ready(function () {
    // create error message div
    let errorMessageDiv = $("<div hidden id=\"ErrorMessage\"></div>");
    $(".register-form").append(errorMessageDiv);

    /**
     * Attempts to create a new user with the form values.
     * @param event attributes provided by the form.
     */
    $(".register-form").submit(function (event) {
        event.preventDefault();
    
        // variables
        let errors = "";
        let isValid = true;
        let firstName = $("#first-name").val().trim();
        let lastName = $("#last-name").val().trim();
        let email = $("#new-email").val().trim();
        let password = $("#new-pass").val().trim();
        let confirmPass = $("#confirm-pass").val().trim();
    
        // error detection
        // check first name for errors
        if (firstName == "") {
            errors += "Please enter your first name.<br/>";
            isValid = false;
        }
        else if (firstName.length < minNameLength) {
            errors += "Length of first name must be greater than " + minNameLength + ".<br/>";
            isValid = false;
        }

        // check last name for errors
        if (lastName == "") {
            errors += "Please enter your last name.<br/>";
            isValid = false;
        }
        else if (lastName.length < minNameLength) {
            errors += "Length of last name must be greater than " + minNameLength + ".<br/>";
            isValid = false;
        }

        // check email for errors
        if (email == "") {
            errors += "Please enter your email.<br/>";
            isValid = false;
        }
        else if (email.length < minEmailLength) {
            errors += "Length of email must be greater than " + minEmailLength + ".<br/>";
            isValid = false;
        }

        // check password for errors
        if (password == "") {
            errors += "Please enter your password.<br/>";
            isValid = false;
        }
        else if (password.length < minPassLength) {
            errors += "Length of password must be greater than " + minPassLength + ".<br/>";
            isValid = false;
        }

        // check confirm password for errors
        if (confirmPass == "") {
            errors += "Please enter your confirmation password.<br/>";
            isValid = false;
        }
        else if (confirmPass != password) {
            errors += "Passwords do not match.<br/>";
            isValid = false;
        }
    
        // if is valid
        if (isValid) {
            // create new user
            const newUser = new User(firstName, lastName, firstName + "." + lastName, email, password);
            console.log(newUser);

            // reset form
            $(".register-form")[0].reset();
        }
    
        // if not valid
        else {
            // remove hidden attribute
            errorMessageDiv.removeAttr("hidden");

            // show error
            errorMessageDiv.slideUp(function () {
                $(this).html(`
                    <h4>ERROR</h4>
                    <p>${errors}</p>
                `).slideDown().delay(3000).slideUp();
            });

            // add hidden attribute
            errorMessageDiv.attr("hidden");
        }
    });
});