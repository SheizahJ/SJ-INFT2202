/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// LOGIN --------------------------------------------------------------------
/**
 * Prepends the provided username before login link.
 * @param event attributes provided by the form.
 */
$(".login-form").submit(function (event) {
    event.preventDefault();

    // variables
    let errors = "";
    let isValid = true;
    let username = $("#username").val().trim();
    let password = $("#password").val().trim();

    console.log(username + " | " + password);
    
    // error detection
    // check username for errors
    if (username == "") {
        errors += "Please enter your username.\n";
        isValid = false;
    }

    // check password for errors
    if (password == "") {
        errors += "Please enter your password.\n";
        isValid = false;
    }

    // if valid
    if (isValid) {
        let navbarInsert = $("<span class=\"navbar-text\"></span>").text(username);
        navbarInsert.insertBefore("#login-bar");
    }

    // if not valid
    else {
        alert(errors);
    }
});
