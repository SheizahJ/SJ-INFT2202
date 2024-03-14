/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// CONSTANTS ----------------------------------------------------------------
const delayTime      = 3000; // in milliseconds (3 seconds)

// CONTAINERS ---------------------------------------------------------------
const contactContainer = document.querySelector(".contact-container");

// FUNCTIONS ----------------------------------------------------------------
/**
 * Forces user to return to homepage
 */
function returnHome() {
    window.location.href = "../index.html";
}


// CONTACT US ---------------------------------------------------------------
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