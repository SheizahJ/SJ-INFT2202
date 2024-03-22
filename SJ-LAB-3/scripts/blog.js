/**
 * Sheizah Jimenez
 * 100892505
 * 3/21/2024
 */

$(document).ready(async function () {
    const pixabayKey = "43006455-a08f7b02dec1ceb4a1418f648";

    let images = [];
    let allBlogPosts = "";
    
    try {
        // IMAGES ----------------------------------
        // fetch pixabay images
        let pixabayImages = await fetch(
            `https://pixabay.com/api/?key=${pixabayKey}&q=cat`
        );

        // get json for images
        let imagesJson = await pixabayImages.json();
        console.log(imagesJson.hits);

        imagesJson.hits.forEach(image => {
            images.push(image.largeImageURL);
        });

        // BLOG POSTS ------------------------------
        // set pending message
        $("#pending-message")[0].innerHTML = "Fetching posts. Please wait...";

        // iterate 20 times (20 blog posts)
        for (let index = 0; index < 20; index++) {
            // fetch json placeholders
            let jsonPlaceholder = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${index+1}`
            );

            // get json results
            let placeholder = await jsonPlaceholder.json();

            allBlogPosts += `
            <div class="card blog-container container" style="width: 18rem;">
                <img class="card-img-top" src="${images[index]}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">Blog Post ${index+1}</h6>
                    <h5 class="card-title">${placeholder.title.toUpperCase()}</h5>
                    <p class="card-text">${placeholder.body}</p>
                    <a href="https://github.com/SheizahJ" class="card-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/sheizah-jimenez-9b1b29265/" class="card-link">LinkedIn</a>
                </div>
            </div>`

            
            // if successful, empty pending message
            $("#pending-message")[0].innerHTML = "";
        }

        console.log($("#blog-container"));

        $("#blog-container")[0].innerHTML += allBlogPosts;
    }
    catch (error) {
        // set error message
        $("#pending-message")[0].innerHTML = "Something went wrong while fetching the posts. Please try again."
        console.log("Something went wrong... " + error);
    }
});