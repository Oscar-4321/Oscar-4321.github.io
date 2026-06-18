function likeFilm(button) {
  if (button.innerText === "🖤 Like") {
    button.innerText = "❤️ Liked";
    button.style.background = "green";
  } else {
    button.innerText = "🖤 Like";
    button.style.background = "#877676";
  }
}
