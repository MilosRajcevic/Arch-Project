// CAROUSEL

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

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

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
