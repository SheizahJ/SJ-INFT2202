/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// CONTAINERS ---------------------------------------------------------------
const aboutContainer = document.querySelector(".about-container");

// ABOUT US -----------------------------------------------------------------
console.log("About.....");

console.log(aboutContainer);

// about me paragraphs
const aboutParagraph = document.createElement("p");
aboutParagraph.innerHTML = 
    "&emsp;Being a fast learner, I find myself to be someone who enjoys the thrill of seeking knowledge from things that I find interesting. It's one of my core values to learn as much as I can about this world as well as concepts related to my field. Computer programming is something that I've enjoyed ever since I was in high school which was what lead me to where I am today. Having this opportunity to further my education in a field that I've invested my life into is an exciting endeavour." + 
    "<br/><br/>&emsp;My family has supported me through this journey and actively contributes to my education since I have yet to obtain a job. I feel that I take their kindness for granted because of this. My mother works at a clinic as a receptionist while my father owns his own automotive business where he repairs vehicles in his shop. My brother, who is 4 year older than I am, has just recently become a regular full-time employee at Pearson Airport as an air traffic controller. My younger sister is still in highschool and has already shown interest in pursuing a career in becoming an athlete due to her incredible skill in volleyball." + 
    "<br/><br/>&emsp;Currently, I am on a path to obtaining a CO-OP position during summer of 2024 to see how it truly is on the field. I am grateful to be provided this opportunity as I know not many people have had the chance to be supported in obtaining a full-time paid position within their field of practice. I intend to work hard to pursue this career and with the help of this CO-OP position, I hope to be working for any IT companies right after I graduate from post-secondary.";
aboutContainer.append(aboutParagraph);
