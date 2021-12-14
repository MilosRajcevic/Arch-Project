let paginationBtn = document.querySelectorAll(".btn-number");
let slides = document.querySelectorAll(".hero-slide");

paginationBtn.forEach((button) => {
  button.onclick = () => {
    paginationBtn.forEach((cta) => cta.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-pagination");

    slides.forEach((slide) => {
      slide.classList.remove("active");
      slide.classList.add("hide");

      if (slide.getAttribute("data-pagination") == dataFilter) {
        slide.classList.add("active");
        slide.classList.remove("hide");
      }
    });
  };
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const mainEl = document.querySelector("main");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
btnNavEl.addEventListener("click", function () {
  mainEl.classList.toggle("shadow");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;

  var slides = document.getElementsByClassName("hero-slide");
  var btnNum = document.getElementsByClassName("btn-number");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide");
    slides[i].classList.remove("active");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < btnNum.length; i++) {
    btnNum[i].className = btnNum[i].className.replace("active", "");
  }

  slides[slideIndex - 1].classList.add("active");
  slides[slideIndex - 1].classList.remove("hide");
  btnNum[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
  console.log(slides);
}

/* FLEXBOX GAP IN SAFARI*/

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
