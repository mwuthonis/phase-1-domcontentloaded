// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    // Select the paragraph element by its ID
    let paragraph = document.getElementById("text");
    
    // Update the content of the paragraph
    paragraph.textContent = "This is really cool!";
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");