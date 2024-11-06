// window.addEventListener("click", function() {
//   const audio = document.getElementById("music");
//   audio.play();
//   audio.volume = 0.1;
// });

const audio = document.getElementById("music");

function changeWorld() {
  document.body.classList.toggle("dark-theme");
 

  const theme = document.body.classList[0];
  const music = theme === "dark-theme" ? "normal-world.mpeg" : "inverted-world.mpeg";
  
  audio.src = `./src/audios/${music}`;
  audio.play = 0.1;
}
