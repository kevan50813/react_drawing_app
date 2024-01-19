var slider = document.getElementById("sliderRange");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}