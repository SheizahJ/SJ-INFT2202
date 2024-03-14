/**
 * Sheizah Jimenez
 * 100892505
 * 3/14/2024
 */

// CONTAINERS ---------------------------------------------------------------
const productsContainer = document.querySelector(".products-container");

// PRODUCTS -----------------------------------------------------------------
console.log("Products.....");

// description of products page
const productParagraph = document.createElement("p");
productParagraph.innerHTML = "Below is a list of 3 of my all time favourite pieces of media:";
productsContainer.append(productParagraph);

// make new list
const productOrderedList = document.createElement("ol");

// 3 favourite media
const productList1 = document.createElement("li");
productList1.innerHTML = "<b>Khai Dreams - Music Artist</b>: Khai Dreams is a pop artist that mixes different genre types together such as hip hop, lo-fi, alternative R&B, etc. I have adored his music for so long now that I can't even remember the first song I heard from him. Every album he has released, I have listened to. It's a little obsessive of me to be this infatuated by his music -- a little scary too.";
productOrderedList.append(productList1);

const productList2 = document.createElement("li");
productList2.innerHTML = "<b>Mulan - Movie</b>: This was the first disney that really made an impact on my life. When I was young, this would be the movie that I would play on repeat, similar to how children in 2016 used to play Frozen over and over again. Mulan inspired me to love being a woman and made me realize that anyone, regardless of gender, can be a strong solider if they wanted to be. I respect her greatly and look up to her a lot.";
productOrderedList.append(productList2);

const productList3 = document.createElement("li");
productList3.innerHTML = "<b>Amulet - Graphic Novel</b>: Amulet is a graphic novel series authored by Kazu Kibuishi and publish by Graphix. When I first read this series back in elementary in my school's library, I was completely hooked by the storyline and have always dreamed of owning the books for myself. Now that I've grown up since then, along with having the money finally, I was able to obtain a collection of the entire series from Chapters. This novel is my childhood favourite and still is one of my favourite book series of all time.";
productOrderedList.append(productList3);

// add to page
productsContainer.append(productOrderedList);