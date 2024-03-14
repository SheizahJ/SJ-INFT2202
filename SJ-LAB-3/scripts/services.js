/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// CONTAINERS ---------------------------------------------------------------
const servicesContainer = document.querySelector(".services-container");

// SERVICES -----------------------------------------------------------------
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