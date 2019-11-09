/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> 
    < 
    </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> 
    > 
    </div>
  </div>
*/
let imgList = [
  "./assets/carousel/mountains.jpeg", 
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

let currentImg = 0;

function carouselCreator() {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = "<";
  rightButton.textContent = ">";

  img.src = imgList[currentImg];

  carousel.appendChild(leftButton);
  carousel.appendChild(img);
  carousel.appendChild(rightButton);

  leftButton.addEventListener('click', () => {
    if (currentImg > 0){
      img.classList.toggle('left-animation')
      currentImg--
      setTimeout(()=>{
        img.classList.toggle('left-animation')
        img.src = imgList[currentImg]
      }, 500)
    } 
    
    else {
      img.classList.toggle('left-animation');
      currentImg = imgList.length - 1;
      setTimeout(()=>{
        img.classList.toggle('left-animation');
        img.src = imgList[currentImg];
      }, 500)
    }
  });

  rightButton.addEventListener('click',() => {
    if (currentImg < imgList.length -1){
      img.classList.toggle('right-animation');
      currentImg++;
      setTimeout(()=>{
        img.classList.toggle('right-animation');
        img.src = imgList[currentImg];
      }, 500);
    }
    
    else{
      img.classList.toggle('right-animation');
      currentImg = 0;
      setTimeout(() => {
        img.classList.toggle('right-animation');
        img.src = imgList[currentImg];
      }, 500)
    }
  });
  
  return carousel;
};

let  carouselImages = document.querySelector('.carousel-container .carousel img');
let carouselParent = document.querySelector('.carousel-container');
carouselParent.appendChild(carouselCreator());

