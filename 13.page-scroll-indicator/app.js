let indicator = document.querySelector(".scroll-indicator .scroll-filler");

//Down below we have overAll scrollHeight from  document.documentElement.scrollHeight and we subtract document.documentElement.clientHeight to get scrollable height
const scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

function scroll() {
  //From below scrollTop we get how much we scroll which further divided by total scrollable height  until they  became same and convert it into percentage
  let scrollTop = document.documentElement.scrollTop;
  let totalHeight = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${totalHeight}%`;
}
