const container = document.getElementById("container");
const textContainer = document.getElementById("textContainer");
const words = document.getElementById("words");
const characters = document.getElementById("characters");

textContainer.addEventListener("keypress", (e) => {
  const value = e.target.value;
  words.innerHTML = value.length > 0 ? value.length : "0";
  characters.innerHTML = value.trim().split(" ").length;
});
