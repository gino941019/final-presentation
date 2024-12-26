let i=0, imgArr=new Array();
imgArr[0] = "https://i.imgur.com/ENTEUD6.jpeg";
imgArr[1] = "https://patchwiki.biligame.com/images/sr/e/e1/rzpq5lef1f15mso91wbns6hj045racj.jpg";
imgArr[2] = "https://patchwiki.biligame.com/images/ys/thumb/e/e6/ks371kw99b6jzwdwhtvgsefecssgtnv.png/500px-%E7%94%9F%E8%B4%BA%C2%B7%E9%9B%B7%E7%94%B5%E5%B0%86%E5%86%9B%C2%B72023.png";

function showImg(){
  document.getElementById('love').src = imgArr[i];
  i = (i+1) % 3;
}

function show(){
  setInterval(showImg, 3000);
}

let mouse = document.getElementById("shadow");
mouse.addEventListener("mouseover",function(){
  this.src="https://i.ytimg.com/vi/s8Sd3Y2GyDY/maxresdefault.jpg";
});
mouse.addEventListener("mouseout",function(){
  this.src="https://shadowzo.com/wp-content/uploads/2023/12/OPEN.jpg";
});


document.getElementById("btn1").addEventListener("click", anime);
document.getElementById("btn2").addEventListener("click", game);
document.getElementById("btn3").addEventListener("click", music);

function anime(){
  document.getElementById("btn1").innerHTML = "我想成為影之強者！";
  document.getElementById("btn1").style.color = "#6019e3";
}

function game(){
  document.getElementById("btn2").innerHTML = "原神、崩壞:星穹鐵道";
  document.getElementById("btn2").style.color = "#fbff00";
}

function music(){
  document.getElementById("btn3").innerHTML = "Billie Eilish";
  document.getElementById("btn3").style.color = "#0077ff";
}

let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click",news);
function news(){
  list.innerHTML = list.innerHTML+`
  <div class="news">
    <h3>${title.value}</h3>
    <p>${content.value}</p><hr>  
  </div>
  `;
  title.value=""
  content.value=""
}

const MIN_SPEED = 1;
const MAX_SPEED = 5;

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

class Blob {
  constructor(el) {
    this.el = el;
    const boundingRect = this.el.getBoundingClientRect();
    this.size = boundingRect.width;
    // 隨機初始位置
    this.initialX = randomNumber(0, window.innerWidth - this.size);
    this.initialY = randomNumber(0, window.innerHeight - this.size);
    this.el.style.top = `${this.initialY}px`;
    this.el.style.left = `${this.initialX}px`;
    // 速度
    this.vx =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.vy =
      randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
    this.x = this.initialX;
    this.y = this.initialY;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x >= window.innerWidth - this.size) {
      this.x = window.innerWidth - this.size;
      this.vx *= -1;
    }
    if (this.y >= window.innerHeight - this.size) {
      this.y = window.innerHeight - this.size;
      this.vy *= -1;
    }
    if (this.x <= 0) {
      this.x = 0;
      this.vx *= -1;
    }
    if (this.y <= 0) {
      this.y = 0;
      this.vy *= -1;
    }

    this.el.style.transform = `translate(${this.x - this.initialX}px, ${
      this.y - this.initialY
    }px)`;
  }
}

function initBlobs() {
  const blobEls = document.querySelectorAll(".blob");
  const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

  function update() {
    requestAnimationFrame(update);
    blobs.forEach((blob) => blob.update());
  }
  requestAnimationFrame(update);
}

initBlobs();