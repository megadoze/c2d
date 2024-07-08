const options = {
  root: document.querySelector(".body"),
  rootMargin: "-122px 0px 0px 0px",
  threshold: 0,
};

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry);
    if (!entry.isIntersecting) {
      entry.target.classList.remove("animation-2");
      entry.target.classList.add("animation");
      console.log(entry);
      return;
    } else {
      entry.target.classList.add("animation-2");
      entry.target.classList.remove("animation");
    }
  });
};

const Observer = new IntersectionObserver(callback, options);
const target = document.querySelector(".filter-item-block");

Observer.observe(target);

export default Observer;
