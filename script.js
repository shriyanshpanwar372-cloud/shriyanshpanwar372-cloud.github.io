console.log("my script is working");
let heading = document.querySelector("h1");

heading.addEventListener("click", function() {
  heading.textContent = "You clicked me!";
});
