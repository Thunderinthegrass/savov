(function () {
  function detectColorScheme() {
    var theme = "light";

    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") == "dark") {
        var theme = "dark";
      }
    } else if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      var theme = "dark";
    }

    if (theme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
  detectColorScheme();

  const switchBtn = document.querySelectorAll(".buttons-wrapper");

  function switchThemeLight(e) {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
  function switchThemeDark(e) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }

  switchBtn.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (localStorage.getItem("theme") == null) {
        switchThemeDark();
      } else if (localStorage.getItem("theme") == "light") {
        switchThemeDark();
      } else {
        switchThemeLight();
      }
    });
  });
})();

function mobileMenu() {
  let btn = document.querySelector(".nav-mobile-btn");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
}
mobileMenu();

// function servicesTabs() {
//   let servicesMobile = document.querySelector('.services__inner-mobile');
//   let tabNav = servicesMobile.querySelectorAll('.services__tab');
//   let servicesItem = servicesMobile.querySelectorAll('.services__item');

//     function tabs(Tab, Button) {
//     Button.forEach((elem, index) => {
//       elem.addEventListener("click", (e) => {
//         for (let i = 0; i < Button.length; i++) {
//           Button[i].classList.remove("services__tab--active");
//           e.target.classList.add("services__tab--active");
//           Tab[i].classList.remove("tab--active");
//         }
//         Tab[index].classList.add("tab--active");
//       });
//     });
//   }

//   tabs(servicesItem, tabNav);
// }
// servicesTabs();

function portfolioTab() {
  let tabNav = document.querySelectorAll(".portfolio__tab-btn");
  let servicesItem = document.querySelectorAll(".portfolio-tab_");

  function tabs(Tab, Button) {
    Button.forEach((elem, index) => {
      elem.addEventListener("click", (e) => {
        for (let i = 0; i < Button.length; i++) {
          Button[i].classList.remove("portfolio__nav--active");
          e.target.classList.add("portfolio__nav--active");
          Tab[i].classList.remove("portfolio--active");
        }
        Tab[index].classList.add("portfolio--active");
      });
    });
  }

  tabs(servicesItem, tabNav);
}
portfolioTab();

function portfolioTabs() {
  let tabNav = document.querySelectorAll(".portfolio__filters-btn");
  let servicesItem = document.querySelectorAll(".portfolio__inner");

  function tabs(Tab, Button) {
    Button.forEach((elem, index) => {
      elem.addEventListener("click", (e) => {
        for (let i = 0; i < Button.length; i++) {
          Button[i].classList.remove("portfolio__nav--active");
          e.target.classList.add("portfolio__nav--active");
          Tab[i].classList.remove("portfolio--active");
        }
        Tab[index].classList.add("portfolio--active");
      });
    });
  }

  tabs(servicesItem, tabNav);
}
portfolioTabs();

function casesTab() {
  const casesButton = document.querySelectorAll(".cases-button");
  const casesTab = document.querySelectorAll(".cases__tab");

  function tabs(casesTab, casesButton) {
    casesButton.forEach((elem, index) => {
      elem.addEventListener("click", (e) => {
        for (let i = 0; i < casesButton.length; i++) {
          casesButton[i].classList.remove("tabs-navigation__item--active");
          e.target.classList.add("tabs-navigation__item--active");
          casesTab[i].classList.remove("tab--active");
        }
        casesTab[index].classList.add("tab--active");
      });
    });
  }

  tabs(casesTab, casesButton);
}
casesTab();

function tabfilters() {
  const casesTab = document.querySelectorAll(".cases__tab");

  for (let i = 0; i < casesTab.length; i++) {
    //обертка кнопок фильтров
    let tabFilter = casesTab[i].querySelectorAll(".tab-filter");
    let tabBody = casesTab[i].querySelectorAll(".tab-body");

    for (let k = 0; k < tabFilter.length; k++) {
      //кнопки фильтров

      tabFilter[k].addEventListener("click", () => {
        for (let b = 0; b < tabBody.length; b++) {
          //добавление всем d-none
          tabBody[b].classList.remove("d-flex");
          tabFilter[b].classList.remove("tab--active");
        }
        tabBody[k].classList.add("d-flex");
        tabFilter[k].classList.add("tab--active");
      });
    }
  }
}
tabfilters();

function tabBodyInfo() {
  const casesTabBody = document.querySelectorAll(".cases__tab-body");

  for (let i = 0; i < casesTabBody.length; i++) {
    //обертка кнопок фильтров
    let nameTab = casesTabBody[i].querySelectorAll(".name-tab");
    let bodyInfo = casesTabBody[i].querySelectorAll(".body-info");

    for (let k = 0; k < nameTab.length; k++) {
      //кнопки фильтров

      nameTab[k].addEventListener("click", () => {
        for (let b = 0; b < bodyInfo.length; b++) {
          //добавление всем d-none
          bodyInfo[b].classList.remove("d-flex");
          nameTab[b].classList.remove("tab--active");
        }
        bodyInfo[k].classList.add("d-flex");
        nameTab[k].classList.add("tab--active");
      });
    }
  }
}
tabBodyInfo();

function slider() {
  const casesTabBody = document.querySelectorAll(".cases__tab-body");
  let count = 0;

  for (let i = 0; i < casesTabBody.length; i++) {
    //обертка кнопок фильтров
    let nameTab = casesTabBody[i].querySelectorAll(".name-tab");
    let bodyInfo = casesTabBody[i].querySelectorAll(".body-info");
    let btnPrev = casesTabBody[i].querySelector(".btn-prev");
    let btnNext = casesTabBody[i].querySelector(".btn-next");

    console.log(btnPrev);

    btnNext.addEventListener("click", () => {
      if (count < nameTab.length - 1) {
        count += 1;
      } else {
        count = 0;
      }
      for (let k = 0; k < nameTab.length; k++) {
        // nameTab[k].classList.add('off');
        // nameTab[count].classList.remove('off');
        nameTab[k].classList.remove("tab--active");
        nameTab[count].classList.add("tab--active");
        bodyInfo[k].classList.remove("d-flex");
        bodyInfo[count].classList.add("d-flex");
        console.log(count);
      }
    });

    btnPrev.addEventListener("click", () => {
      if (count > 0) {
        count -= 1;
      } else {
        count = nameTab.length - 1;
      }
      for (let k = 0; k < nameTab.length; k++) {
        nameTab[k].classList.add("off");
        nameTab[count].classList.remove("off");
        bodyInfo[k].classList.remove("d-flex");
        bodyInfo[count].classList.add("d-flex");
        console.log(count);
      }
    });
  }
}
slider();

function scrollToLink() {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}
scrollToLink();

function modal() {
  const btns = document.querySelectorAll(".btn");
  const modalOverlay = document.querySelector(".modal-overlay-sertificat");
  const modals = document.querySelectorAll(".modal");

  btns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });

      document.querySelector(`[data-target="${path}"]`).classList.add("modal--visible");
      modalOverlay.classList.add("modal-overlay--visible");
    });
  });

  modalOverlay.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
      modalOverlay.classList.remove("modal-overlay--visible");
      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });
    }
  });
}

modal();

function modalVideo() {
  const btns = document.querySelectorAll(".btn-video");
  const modalOverlay = document.querySelectorAll(".modal-overlay-video");
  const modals = document.querySelectorAll(".modal__video");

  btns.forEach((el, id) => {
    el.addEventListener("click", (e) => {
      let path = e.currentTarget.getAttribute("data-path");

      modals.forEach((el) => {
        el.classList.remove("modal--visible");
      });

      document.querySelector(`[data-target="${path}"]`).classList.add("modal--visible");
      modalOverlay[id].classList.add("modal-overlay--visible");
    });

    modalOverlay[id].addEventListener("click", (e) => {
      console.log(e.target);
  
      if (e.target == modalOverlay[id]) {
        modalOverlay[id].classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
          el.classList.remove("modal--visible");
        });
      }
    });
  });
}

modalVideo();

function moreReviews() {
  let btn = document.querySelector('.reviews__more-btn');
  let revievs = document.querySelector('.reviews_hide');

  btn.addEventListener('click', () => {
    revievs.classList.toggle('hide');
  })
}

moreReviews();
