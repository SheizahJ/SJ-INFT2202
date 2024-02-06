/**
 * Sheizah Jimenez
 * 100892505
 * 2/5/2024
 */

// CONSTANTS ----------------------------------------------------------------
const delayTime = 3000; // in milliseconds (3 seconds)

// PAGES --------------------------------------------------------------------
const page = window.location.pathname;
const homeHref     = "/index.html";
const productsHref = "/product.html";
const servicesHref = "/services.html";
const aboutHref    = "/about.html";
const contactHref  = "/contact.html";

// CONTAINERS ---------------------------------------------------------------
const homeContainer = document.querySelector(".main-container");
const productsContainer = document.querySelector(".products-container");
const servicesContainer = document.querySelector(".services-container");
const aboutContainer = document.querySelector(".about-container");
const contactContainer = document.querySelector(".contact-container");

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
if (page == homeHref) {
    console.log("Homepage.....");

    // add a new paragraph element into the home page.
    const homeParagraph = document.createElement("p");
    homeParagraph.innerHTML = "Welcome to Sheizah's Lab 1 website! Here you will be able to navigate through different pages to know more about me and my website.";

    // add to page
    homeContainer.append(homeParagraph);
}

// PRODUCTS -----------------------------------------------------------------
else if (page == productsHref) {
    console.log("Products.....");

    // description of products page
    const productParagraph = document.createElement("p");
    productParagraph.innerHTML = "Below is a list of 3 of my all time favourite pieces of media.";
    productsContainer.append(productParagraph);

    // make new list
    const productOrderedList = document.createElement("ol");

    // 3 favourite media
    const productList1 = document.createElement("li");
    productList1.innerHTML = "<b>Khai Dreams - Music Artist</b>: Khai Dreams";
    productOrderedList.append(productList1);

    const productList2 = document.createElement("li");
    productList2.innerHTML = "<b>TEST</b>: ";
    productOrderedList.append(productList2);

    const productList3 = document.createElement("li");
    productList3.innerHTML = "<b>TEST</b>: ";
    productOrderedList.append(productList3);

    // add to page
    productsContainer.append(productOrderedList);
}

// SERVICES -----------------------------------------------------------------
else if (page == servicesHref) {
    console.log("Services.....");

    // description of services page
    const servicesParagraph = document.createElement("p");
    servicesParagraph.innerHTML = "Below are details of my work as well as a link to my resume.";
    servicesContainer.append(servicesParagraph);

    // make new list
    const servicesUnorderedList = document.createElement("ul");

    // 3 favourite media
    const servicesList1 = document.createElement("li");
    servicesList1.innerHTML = "<b>TEST</b>: ";
    servicesUnorderedList.append(servicesList1);

    const servicesList2 = document.createElement("li");
    servicesList2.innerHTML = "<b>TEST</b>: ";
    servicesUnorderedList.append(servicesList2);

    const servicesList3 = document.createElement("li");
    servicesList3.innerHTML = "<b>TEST</b>: ";
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
else if (page == aboutHref) {
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
else if (page == contactHref) {
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
     * Forces user to return to homepage
     */
    function returnHome() {
        window.location.href = "../index.html";
    }

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
