// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
const unorderedListEl = document.querySelector("UL");

// ADD NEW ITEM TO END OF LIST
// Create element
// Create text node
// Add text node to element
// Add element end of list
const listItemEl1 = document.createElement("LI");
const textNode1 = document.createTextNode("almonds");
listItemEl1.append(textNode1);
unorderedListEl.append(listItemEl1);

// ADD NEW ITEM START OF LIST
// Create element
// Create text node
// Add text node to element
// Add element to list
const listItemEl2 = document.createElement("LI");
const textNode2 = document.createTextNode("cabbage");
listItemEl2.append(textNode2);
unorderedListEl.append(listItemEl2);

// All <li> elements
const listElements = document.querySelectorAll("LI");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
// Loop through elements
// Change class to cool
let count = 0;
listElements.forEach(element => {
    element.classList.add("cool");
    console.log(element);
})


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
// h2 text
// No. of <li> elements
// Content
// Update h2 using innerHTML (not textContent) because it contains markup
const heading2El = document.querySelector("h2");
const heading2Text = heading2El.textContent;
const lengthOfList = listElements.length;
const newHeadingText = heading2Text + " (# of Items: " + lengthOfList + ")";
heading2El.innerHTML = newHeadingText;