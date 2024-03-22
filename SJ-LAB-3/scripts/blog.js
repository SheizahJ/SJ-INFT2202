/**
 * Sheizah Jimenez
 * 100892505
 * 3/21/2024
 */

$(document).ready(async function () {
    const body = $("body")[0];

    try {
        // set pending message
        $("#pending-message")[0].innerHTML = "Fetching posts. Please wait...";

        // iterate 20 times (20 blog posts)
        for (let index = 1; index <= 20; index++) {
            // fetch json placeholders
            let jsonPlaceholder = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${index}`
            ); // By default, it sends a GET HTTP Request

            // get json results
            let placeholder = await jsonPlaceholder.json();

            let blogHTML = `
            <div class="card blog-container container" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Blog Post ${index}</h6>
                    <h5 class="card-title">${placeholder.title.toUpperCase()}</h5>
                    <p class="card-text">${placeholder.body}</p>
                    <a href="https://github.com/SheizahJ" class="card-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/sheizah-jimenez-9b1b29265/" class="card-link">LinkedIn</a>
                </div>
            </div>
            <br/>`

            body.innerHTML += blogHTML;

            // if successful, empty pending message
            $("#pending-message")[0].innerHTML = "";
        }
    }
    catch (error) {
        // set error message
        pendingMessage.innerHTML = "Something went wrong while fetching the posts. Please try again."
        console.log("Something went wrong... " + error);
    }
});