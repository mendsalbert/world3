export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("header");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      let stickyHeader = sticky.getElementsByClassName("sticky-header");
      if (offset > 60) {
        sticky.classList.add("fixed-header");
        stickyHeader[0].classList.add("animated", "slideInDown");
      } else {
        sticky.classList.remove("fixed-header");
        stickyHeader[0].classList.remove("animated", "slideInDown");
      }
    }
  }
};

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const color = () => {
  const style = (values) => {
    values.forEach((value) => {
      document.documentElement.style.setProperty(
        `--${value.name}`,
        `#${value.value}`
      );
    });
  };

  const styleVlaue = {
    index2: [
      { name: "theme-color", value: "049013" },
      { name: "theme-dark-color", value: "232323" },
      { name: "theme-gray-color", value: "777777" },
    ],
    index3: [
      { name: "theme-color", value: "90be54" },
      { name: "theme-dark-color", value: "232323" },
      { name: "theme-gray-color", value: "777777" },
    ],
    index4: [
      { name: "theme-color", value: "1c67d2" },
      { name: "theme-dark-color", value: "232323" },
      { name: "theme-gray-color", value: "777777" },
    ],
    default: [
      { name: "theme-color", value: "39C3E7" },
      { name: "theme-dark-color", value: "232323" },
      { name: "theme-gray-color", value: "777777" },
    ],
  };

  const location = window.location.pathname;

  switch (location) {
    case "/index-2":
      style(styleVlaue.index2);
      console.log("Hi");
      break;
    case "/index-3":
      style(styleVlaue.index3);
      break;
    case "/index-4":
      style(styleVlaue.index4);
      break;

    default:
      style(styleVlaue.default);
      break;
  }
};
export const poggressbar = () => {
  let bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    let barInner = bar.getElementsByClassName("bar-inner"),
      width = barInner[0].getAttribute("data-percent");
    // barInner[0].style.width = `${width}%`;
    barInner[0].style.width = width;
  });
};
