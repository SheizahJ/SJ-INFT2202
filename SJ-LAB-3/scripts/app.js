/**
 * Sheizah Jimenez
 * 100892505
 * 2/22/2024
 */

// CONSTANTS ----------------------------------------------------------------
const delayTime      = 3000; // in milliseconds (3 seconds)
const minNameLength  = 2;
const minEmailLength = 8;
const minPassLength  = 6;

// PAGES --------------------------------------------------------------------
const page = window.location.pathname;
const homeHref     = "index.html";
const productsHref = "product.html";
const servicesHref = "services.html";
const aboutHref    = "about.html";
const contactHref  = "contact.html";
// const loginHref    = "login.html";
// const registerHref = "register.html";

// CONTAINERS ---------------------------------------------------------------
const homeContainer = document.querySelector(".main-container");
const productsContainer = document.querySelector(".products-container");
const servicesContainer = document.querySelector(".services-container");
const aboutContainer = document.querySelector(".about-container");
const contactContainer = document.querySelector(".contact-container");

// FUNCTIONS ----------------------------------------------------------------
/**
 * Forces user to return to homepage
 */
function returnHome() {
    window.location.href = "../index.html";
}

// ALL PAGES - NAVBAR -------------------------------------------------------
const navbarLinksList = document.querySelector(".navbar-nav");

// change products to "Interests"
const navbarProduct = document.querySelector(".product-bar");
navbarProduct.innerHTML = "Interests";

// add new navbar link (between about and contacts)
const navbarContact = document.querySelector(".contact-bar");
const navbarHR = document.createElement("li");
navbarHR.classList = "navbar-item";

const navbarHRLink = document.createElement("a");
navbarHRLink.classList = "nav-link fa-border";
navbarHRLink.href = "#";
navbarHRLink.innerText = "Human Resources";

navbarHR.append(navbarHRLink);
navbarLinksList.insertBefore(navbarHRLink, navbarContact); // inserts HR element before contacts

// fixed bottom navbar - copyright
const copyrightNavbar = document.createElement("nav");
copyrightNavbar.classList = "navbar fixed-bottom navbar-dark bg-dark";
document.body.append(copyrightNavbar);

const copyrightDiv = document.createElement("div");
copyrightDiv.classList = "container-fluid";
copyrightNavbar.append(copyrightDiv);

const copyrightText = document.createElement("p");
copyrightText.classList = "navbar-brand";
copyrightText.innerHTML = "&copy; CopyRight 2024";
copyrightDiv.append(copyrightText);


// HOMEPAGE -----------------------------------------------------------------
if (page.includes(homeHref)) {
    console.log("Homepage.....");

    // add a new paragraph element into the home page.
    const homeParagraph = document.createElement("p");
    homeParagraph.innerHTML = "Welcome to Sheizah's Lab 1 website! Here you will be able to navigate through different pages to know more about me and my website.";

    // add to page
    homeContainer.append(homeParagraph);
}

// PRODUCTS -----------------------------------------------------------------
if (page.includes(productsHref)) {
    console.log("Products.....");

    // description of products page
    const productParagraph = document.createElement("p");
    productParagraph.innerHTML = "Below is a list of 3 of my all time favourite pieces of media:";
    productsContainer.append(productParagraph);

    // make new list
    const productOrderedList = document.createElement("ol");

    // 3 favourite media
    const productList1 = document.createElement("li");
    productList1.innerHTML = "<b>Khai Dreams - Music Artist</b>: Khai Dreams is a pop artist that mixes different genre types together such as hip hop, lo-fi, alternative R&B, etc. I have adored his music for so long now that I can't even remember the first song I heard from him. Every album he has released, I have listened to. It's a little obsessive of me to be this infatuated by his music -- a little scary too.";
    productOrderedList.append(productList1);

    const productList2 = document.createElement("li");
    productList2.innerHTML = "<b>Mulan - Movie</b>: This was the first disney that really made an impact on my life. When I was young, this would be the movie that I would play on repeat, similar to how children in 2016 used to play Frozen over and over again. Mulan inspired me to love being a woman and made me realize that anyone, regardless of gender, can be a strong solider if they wanted to be. I respect her greatly and look up to her a lot.";
    productOrderedList.append(productList2);

    const productList3 = document.createElement("li");
    productList3.innerHTML = "<b>Amulet - Graphic Novel</b>: Amulet is a graphic novel series authored by Kazu Kibuishi and publish by Graphix. When I first read this series back in elementary in my school's library, I was completely hooked by the storyline and have always dreamed of owning the books for myself. Now that I've grown up since then, along with having the money finally, I was able to obtain a collection of the entire series from Chapters. This novel is my childhood favourite and still is one of my favourite book series of all time.";
    productOrderedList.append(productList3);

    // add to page
    productsContainer.append(productOrderedList);
}

// SERVICES -----------------------------------------------------------------
else if (page.includes(servicesHref)) {
    console.log("Services.....");

    // description of services page
    const servicesParagraph = document.createElement("p");
    servicesParagraph.innerHTML = "Below are details of my top skills as well as a link to my resume.";
    servicesContainer.append(servicesParagraph);

    // make new list
    const servicesUnorderedList = document.createElement("ul");

    // 3 favourite media
    const servicesList1 = document.createElement("li");
    servicesList1.innerHTML = "<b>Software Development</b>: I am able to develop software applications catered to your needs. Whether that be through it's physical design or it's backend management, I am capabale of handling requests of any kind.";
    servicesUnorderedList.append(servicesList1);

    const servicesList2 = document.createElement("li");
    servicesList2.innerHTML = "<b>Communication</b>: Presentation and communicative skills are things that I am quite proficient at given enough time to prepare. I am highly adaptable to any social situation and can handle being a teamplayer for any company that requires a good listener and speaker.";
    servicesUnorderedList.append(servicesList2);

    const servicesList3 = document.createElement("li");
    servicesList3.innerHTML = "<b>Database Design</b>: Ability to design a database structure through diagrams that help the customer understand the functionality of it entirely prior to implementation. After the consultation, the database is created through SQL along with basic administrative permissions granted to the customer post-deployment.";
    servicesUnorderedList.append(servicesList3);

    const resumeList3 = document.createElement("li");
    const resumeLink = document.createElement("a");
    resumeLink.href = "https://docs.google.com/document/d/1yMEdBC3sbsW1I0rwk_WrrqzClVEZgikfjFCFG0zCH3I/edit?usp=sharing";
    resumeLink.innerHTML = "Link to my resume"
    resumeLink.classList = "list-link";
    resumeList3.append(resumeLink);
    servicesUnorderedList.append(resumeList3);

    // add to page
    servicesContainer.append(servicesUnorderedList);
}

// ABOUT US -----------------------------------------------------------------
else if (page.includes(aboutHref)) {
    console.log("About.....");

    // about me paragraphs
    const aboutParagraph = document.createElement("p");
    aboutParagraph.innerHTML = 
        "&emsp;Being a fast learner, I find myself to be someone who enjoys the thrill of seeking knowledge from things that I find interesting. It's one of my core values to learn as much as I can about this world as well as concepts related to my field. Computer programming is something that I've enjoyed ever since I was in high school which was what lead me to where I am today. Having this opportunity to further my education in a field that I've invested my life into is an exciting endeavour." + 
        "<br/><br/>&emsp;My family has supported me through this journey and actively contributes to my education since I have yet to obtain a job. I feel that I take their kindness for granted because of this. My mother works at a clinic as a receptionist while my father owns his own automotive business where he repairs vehicles in his shop. My brother, who is 4 year older than I am, has just recently become a regular full-time employee at Pearson Airport as an air traffic controller. My younger sister is still in highschool and has already shown interest in pursuing a career in becoming an athlete due to her incredible skill in volleyball." + 
        "<br/><br/>&emsp;Currently, I am on a path to obtaining a CO-OP position during summer of 2024 to see how it truly is on the field. I am grateful to be provided this opportunity as I know not many people have had the chance to be supported in obtaining a full-time paid position within their field of practice. I intend to work hard to pursue this career and with the help of this CO-OP position, I hope to be working for any IT companies right after I graduate from post-secondary.";
    aboutContainer.append(aboutParagraph);
}

// CONTACT US ---------------------------------------------------------------
else if (page.includes(contactHref)) {
    console.log("Contact.....");

    // create a form
    const contactForm = document.createElement("form");
    
    // create elements
    const formParagraph = document.createElement("p");
    formParagraph.innerHTML = "Enter your contact information below:";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "nameInput";
    nameInput.id = "name-input";
    nameInput.placeholder = "Name";

    const contactInput = document.createElement("input");
    contactInput.type = "phone";
    contactInput.name = "contactInput";
    contactInput.id = "contact-input";
    contactInput.placeholder = "Contact number";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "emailInput";
    emailInput.id = "email-input";
    emailInput.placeholder = "Email";

    const messageInput = document.createElement("input");
    messageInput.type = "text";
    messageInput.name = "messageInput";
    messageInput.id = "message-input";
    messageInput.placeholder = "Message";

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.name = "messageInput";
    submitButton.value = "Send Info";

    // break lines for the form
    const breakLine1 = document.createElement("br");
    const breakLine2 = document.createElement("br");
    const breakLine3 = document.createElement("br");
    const breakLine4 = document.createElement("br");

    // add to form
    contactForm.append(nameInput);
    contactForm.append(breakLine1);
    contactForm.append(contactInput);
    contactForm.append(breakLine2);
    contactForm.append(emailInput);
    contactForm.append(breakLine3);
    contactForm.append(messageInput);
    contactForm.append(breakLine4);
    contactForm.append(submitButton);

    // add to container
    contactContainer.append(formParagraph);
    contactContainer.append(contactForm);

    // form functions (submit button)
    /**
     * Logs contact info then sends user to homepage.
     * @param {click} event click event
     */
    function contactOnSubmit(event) {
        event.preventDefault();

        // log contact information to console
        const contactFormElements = contactForm.elements;

        let contactInformation = "";
        for (let element of contactFormElements) {
            if (element.type != "submit")
                contactInformation += element.placeholder + ": " + element.value + "\n";
        }
        console.log(contactInformation);

        // delay returning to homepage
        setTimeout(returnHome, delayTime);
    }
    submitButton.addEventListener("click", contactOnSubmit);
}

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