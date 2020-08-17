let inputLeft = document.querySelector('.search-range__min'),
    inputRight = document.querySelector('.search-range__max'),
    thumbLeft = document.querySelector('.search-range-slider-thumb__left'),
    thumbRight = document.querySelector('.search-range-slider-thumb__right'),
    range = document.querySelector('.search-range-slider__range'),
    outputMin = document.querySelector('.min-price'),
    outputMax = document.querySelector('.max-price');
function setLeftValue(){
  let _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);
  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value)-2000)
  let percent = ((_this.value - min ) / (max - min)) * 100;
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  outputMin.innerHTML = inputLeft.value;
}
setLeftValue();
function setRightValue(){
  let _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);
  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value)+2000)
  let percent = ((_this.value - min ) / (max - min)) * 100;
  thumbRight.style.right = (100 - percent) + "%";
  range.style.right = (100 - percent) + "%";
  outputMax.innerHTML = inputRight.value;
}
setRightValue();
inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);
inputLeft.addEventListener('mouseover', function () {
  thumbLeft.classList.add('hover');
  });
inputLeft.addEventListener('mouseout', function () {
  thumbLeft.classList.remove('hover');
  });
inputLeft.addEventListener('mousedown', function () {
  thumbLeft.classList.add('active');
  });
inputLeft.addEventListener('mouseup', function () {
  thumbLeft.classList.remove('active');
  });

inputRight.addEventListener('mouseover', function () {
  thumbRight.classList.add('hover');
  });
inputRight.addEventListener('mouseout', function () {
  thumbRight.classList.remove('hover');
  });
inputRight.addEventListener('mousedown', function () {
  thumbRight.classList.add('active');
  });
inputRight.addEventListener('mouseup', function () {
  thumbRight.classList.remove('active');
  });
const sliderReset = function(){
  inputLeft.value = 0;
  setLeftValue();
  inputRight.value = 50000;
  setRightValue();
}






    

