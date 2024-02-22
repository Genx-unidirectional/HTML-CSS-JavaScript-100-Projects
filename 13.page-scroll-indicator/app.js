let indicator = document.querySelector(".scroll-indicator .scroll-filler");

const scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let totalHeight = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${totalHeight}%`;
  console.log(totalHeight);
}
