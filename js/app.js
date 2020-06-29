const SELECTOR = ".watched";
const ANIMATE_CLASS_NAME = "animated";

const animate = (element) => element.classList.add(ANIMATE_CLASS_NAME);
const isAnimated = (element) => element.classList.contains(ANIMATE_CLASS_NAME);

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // when element's is in viewport, animate it
    if (entry.intersectionRatio > 0) {
      animate(entry.target);
      // remove observer after animation
      observer.unobserve(entry.target);
    }
  });
});
// obtener elemenos que no han sido animados
const elements = [].filter.call(
  document.querySelectorAll(SELECTOR),
  (element) => !isAnimated(element, ANIMATE_CLASS_NAME)
);
console.log(animate);
// start observing your elements
elements.forEach((element) => intersectionObserver.observe(element));

navv = document.getElementById("divnav");
var lastScrollTop = 0;
var checa = 0;
// en ligar de window puede ponerse cualquier elemento como objetivo del scroll
window.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop && checa == 0) {
      //scroll hacia bajo
      console.log("abajo", st);
      navv.classList.add("fadeout");
      checa = 1;
    } else if (st < lastScrollTop && checa == 1) {
      navv.classList.remove("fadeout");
      // scroll hacia arriba
      checa = 0;
      console.log("arriba", st);
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
