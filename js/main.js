const slider = document.querySelector("#slideshow");
const sliderMain = document.querySelector(".silder-main");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderDotItems = document.querySelectorAll(".slider-dot-item");
const sliderItemArray = Array.from(sliderItems);
const nextBtn = document.querySelector(".slider_next");
const prevBtn = document.querySelector(".slider_prev");
const dotItems = document.querySelectorAll(".slider-dot-item");
const sliderItemWidth = sliderItems[0].offsetWidth;
const sildesLength = sliderItems.length;
let positionX = 0;
let index = 0;
const slider0 = sliderItems[0];
const firstChild = slider0.querySelector('img');
const firstChildWidth = firstChild.offsetWidth;

nextBtn.addEventListener("click", function() {
  handleChangeSlide(1);
  
});

prevBtn.addEventListener("click", function() {
  handleChangeSlide(-1);
  
});

sliderDotItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    sliderDotItems.forEach(event => event.classList.remove('slider-dot-item--active'))
    item.classList.add('slider-dot-item--active')
    const indexSecond = e.target.dataset.index
    index = indexSecond;
  
    positionX = -1 * index * firstChildWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
  });
});   

function handleChangeSlide(direction) {
  if (direction === 1) {
    index ++;
    positionX = positionX - firstChildWidth;
    if(index >= sildesLength) {
      index = 0;
      positionX = 0;
      sliderDotItems[sildesLength - 1].classList.remove("slider-dot-item--active");
    }
    sliderMain.style = `transform: translateX(${positionX}px)`;

    sliderDotItems[index].classList.add('slider-dot-item--active');
    const checkActive = document.querySelector('.slider-dot-item--active')
    if (checkActive) {
      sliderDotItems[index - 1].classList.remove('slider-dot-item--active')
    }
    
  } else if (direction === -1) {
    index --
    if (index <= -1) {
      index = sildesLength -1;
      positionX = -firstChildWidth * sildesLength;
      sliderDotItems[0].classList.remove("slider-dot-item--active");
    }
    positionX = positionX + firstChildWidth;
    sliderMain.style = `transform: translateX(${positionX}px)`;
  
    sliderDotItems[index].classList.add('slider-dot-item--active');
    const checkActive = document.querySelector('.slider-dot-item--active')
    if (checkActive) {
      sliderDotItems[index + 1].classList.remove('slider-dot-item--active')
    }
  }

}
setInterval(function() {
  handleChangeSlide(1)
}, 15000);