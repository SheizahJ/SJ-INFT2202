/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// CONTAINERS ---------------------------------------------------------------
const homeContainer = document.querySelector(".main-container");

// HOMEPAGE -----------------------------------------------------------------
console.log("Homepage.....");

// add a new paragraph element into the home page.
const homeParagraph = document.createElement("p");
homeParagraph.innerHTML = "Welcome to Sheizah's Lab 1 website! Here you will be able to navigate through different pages to know more about me and my website.";

// add to page
homeContainer.append(homeParagraph);