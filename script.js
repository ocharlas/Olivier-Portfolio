var selectedElement = 1;
var maxElementCount = 4;
var carouselPrefix = "c-";

var selectElement = function(id) {
    return document.getElementById(id);
}
var carouselLeft = function (event) {
  selectedElement -= 1; 
  if(selectedElement < 1) {
    selectedElement = 4
  }
  showActiveElement();
};

var carouselRight = function (event) {
    selectedElement += 1; 
    if(selectedElement > 4) {
      selectedElement = 1
    }
    showActiveElement();
};

var showActiveElement = function () {
  for (var i = 1; i < 4; i++) {
    selectElement(carouselPrefix + i).className = "slideshow";
  }

  selectElement(carouselPrefix + selectedElement).className =
    "slideshow active";
};

var initializeCarousel= function() {
    selectElement("arrow-left").addEventListener("click", carouselLeft);
    selectElement("arrow-right").addEventListener("click", carouselRight);
    showActiveElement();
}
var init = function () {
  console.log("document initialized");
  console.log(document);
  initializeCarousel();
};

window.onload = function (event) {
  init();
};
