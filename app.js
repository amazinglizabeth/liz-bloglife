"use strict";

// Initialize a variable to keep track of the like count
let likeClickCount = 0;

// Function for the "Like" button
function likeClick(event) {
  const likeButton = event.currentTarget;

  // Check if the like button has the 'liked' class
  const isLiked = likeButton.classList.contains("liked");

  // If it's liked, remove the class, decrease the count, and update the color
  if (isLiked) {
    likeButton.classList.remove("liked");
    likeClickCount--;
    likeButton.style.color = "";
  } else {
    // If it's not liked, add the class, increase the count, and change the color to blue
    likeButton.classList.add("liked");
    likeClickCount++;
    likeButton.style.color = "blue";
  }

  // Update the like count
  const likeCountElement = likeButton.querySelector(".likeCount");
  likeCountElement.textContent = likeClickCount;
}

// Function for the "Replies" button
function replyClick(event) {
  // Implement your reply functionality here
  // You can access the specific reply button that was clicked using event.target
  // For example, you can increment the reply count for that specific button
  const replyButton = event.target;
  const replyCount = replyButton.querySelector(".replyCount");
  replyCount.textContent = parseInt(replyCount.textContent) + 1;
}
