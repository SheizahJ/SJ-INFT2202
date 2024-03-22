/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// CONSTANTS ----------------------------------------------------------------
const webName = "INFT 2202 - Lab 3";

let navBar = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="./index.html">${webName}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link product-bar" href="./product.html">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./services.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./about.html">About Us</a>
            </li>
            <li class="nav-item contact-bar">
              <a class="nav-link" href="./contact.html">Contact Us</a>
            </li>
            <li class="nav-item me-auto" id="login-bar">
              <a class="nav-link" href="./login.html">Login</a>
            </li>
            <li class="nav-item me-auto">
              <a class="nav-link" href="./blog.html">Blog</a>
            </li>
          </ul>
          <!-- <span class="navbar-text"> Navbar text with an inline element </span> -->
        </div>
    </nav>
`;

// ADD TO HTML --------------------------------------------------------------
let bodyContents = document.querySelector("body").innerHTML;
document.querySelector("body").innerHTML = navBar + bodyContents;


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
