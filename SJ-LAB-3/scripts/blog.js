/**
 * Sheizah Jimenez
 * 100892505
 * 3/21/2024
 */

$(document).ready(async function () {
    let blogHTML = `
    <div class="card blog-container container" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>`

    const pendingMessage = $("#pending-message")[0];

    try {
        // set pending message
        pendingMessage.innerHTML = "Fetching posts. Please wait...";

        // iterate 20 times (20 blog posts)
        for (let index = 1; index <= 20; index++) {
            // fetch json placeholders
            let jsonPlaceholder = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${index}`
            ); // By default, it sends a GET HTTP Request
            console.log(jsonPlaceholder);

            // get json results
            let placeholder = await jsonPlaceholder.json();


            console.log(placeholder);
        }

        // if successful, empty pending message
        pendingMessage.innerHTML = "";
    }
    catch (error) {
        // set error message
        pendingMessage.innerHTML = "Something went wrong while fetching the posts. Please try again."
        console.log("Something went wrong... " + error);
    }
});