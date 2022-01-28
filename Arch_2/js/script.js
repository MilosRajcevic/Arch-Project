///////////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const overlay = document.querySelector(".mob-overlay");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
btnNavEl.addEventListener("click", function () {
  overlay.classList.toggle("hide");
});
///////////////////
let btnNumber = document.querySelectorAll(".btnNumber");
let slidesHero = document.querySelectorAll(".hero-slide");
let slideIndex = 0;

console.log(slidesHero);
console.log(btnNumber.entries());

btnNumber.forEach((button) => {
  button.onclick = () => {
    btnNumber.forEach((cta) => cta.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-pagination");

    slidesHero.forEach((slide) => {
      slide.classList.remove("active");
      slide.classList.add("hide");

      if (slide.getAttribute("data-pagination") == dataFilter) {
        slide.classList.add("active");
        slide.classList.remove("hide");
      }
    });

    for (const [a, b] of btnNumber.entries()) {
      let returnSlideIndex = btnNumber[a].classList.contains("active");
      if (returnSlideIndex) slideIndex = a + 1;
      console.log("a", a, "b", b);
      console.log("SlideIndex posle klika", slideIndex);
    }
  };
});
///////////////////////////////////////////////////////////////
showslidesHero();

function showslidesHero() {
  let i;
  console.log("Kada udje u show Slides f-ju", slideIndex);
  // kada kliknemo dugme:
  // 1. da se klasa active prebaci na trenutni btn, a na sve ostale hidden,
  // 2. da uzmemo vrednost pozicije tog btn kako bi postavili za slideIndex, kako bi slider krenuo od tog slajda a ne kako on ide!
  slideIndex++;
  //Vraca slajder na pocetak
  if (slideIndex > slidesHero.length) {
    slideIndex = 1;
  }
  // Dodaje active za hero-slide
  for (let i = 0; i < slidesHero.length; i++) {
    slidesHero[i].classList.add("hide");
    slidesHero[i].classList.remove("active");
  }

  //Dodaje active status na dugmetu da bude crno
  for (let i = 0; i < btnNumber.length; i++) {
    btnNumber[i].className = btnNumber[i].className.replace("active", "");
  }

  slidesHero[slideIndex - 1].classList.add("active");
  slidesHero[slideIndex - 1].classList.remove("hide");
  btnNumber[slideIndex - 1].className += " active";

  setTimeout(showslidesHero, 5000); // Change image every 2 seconds
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

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
