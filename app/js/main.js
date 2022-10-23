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
  let nav = document.querySelector('.nav');
  let navLists = document.querySelector('.nav__lists');

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    nav.classList.toggle("active");
    navLists.classList.toggle("active");
  });
}
mobileMenu();

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

// function portfolioTabs() {
//   let tabNav = document.querySelectorAll(".portfolio__filters-btn");
//   let servicesItem = document.querySelectorAll(".portfolio__inner");

//   function tabs(Tab, Button) {
//     Button.forEach((elem, index) => {
//       elem.addEventListener("click", (e) => {
//         for (let i = 0; i < Button.length; i++) {
//           Button[i].classList.remove("portfolio__nav--active");
//           e.target.classList.add("portfolio__nav--active");
//           Tab[i].classList.remove("portfolio--active");
//         }
//         Tab[index].classList.add("portfolio--active");
//       });
//     });
//   }

//   tabs(servicesItem, tabNav);
// }
// portfolioTabs();

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
  let videoModal = document.querySelector('.video-modal');

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

function modalTeam() {
  const btns = document.querySelectorAll(".btn-team");
  const modalOverlay = document.querySelectorAll(".modal-overlay-team");
  const modals = document.querySelectorAll(".modal__team");
  let teamModal = document.querySelector('.team-modal');
  let closeBtn = document.querySelectorAll('.modal__team-close');


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

      if ((e.target == modalOverlay[id]) || (e.target == closeBtn[id])) {
        modalOverlay[id].classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
          el.classList.remove("modal--visible");
        });
      }
    });
  });
}

modalTeam();

// const modalOverlay = document.querySelectorAll(".modal-overlay-team");
// let closeBtn = document.querySelectorAll('.modal__team-close');

// closeBtn.forEach((elem) => {
//   elem.addEventListener('click', () => {
//     modalOverlay.forEach((el) => {
//       el.classList.remove("modal--visible");
//     })
//   })
// })

$(document).ready(function(){
  $('.team__slider').slick({
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="team-arrow team-arrow-prew"><img src="img/team/arrow.svg" alt=""></button>`,
    nextArrow: `<button type="button" class="team-arrow team-arrow-next"><img src="img/team/arrow.svg" alt=""></button>`,
  });
});

function modalTeamSertificats() {
  const btns = document.querySelectorAll(".btn-sertificat");
  const modalOverlay = document.querySelectorAll(".modal-overlay-sertificats");
  const modals = document.querySelectorAll(".modal__sertificats");
  let teamModal = document.querySelector('.sertificats-modal');
  let closeBtn = document.querySelectorAll('.modal__sert-close');

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

      if ((e.target == modalOverlay[id]) || (e.target == closeBtn[id])) {
        modalOverlay[id].classList.remove("modal-overlay--visible");
        modals.forEach((el) => {
          el.classList.remove("modal--visible");
        });
      }
    });
  });
}

modalTeamSertificats();

$(document).ready(function(){
  $('.sertificats__slider').slick({
    arrows: true,
    variableWidth: true,
    centerMode: true,
    prevArrow: `<button type="button" class="sertificat-arrow sertificat-arrow-prew"><img src="img/team/arrow.svg" alt=""></button>`,
    nextArrow: `<button type="button" class="sertificat-arrow sertificat-arrow-next"><img src="img/team/arrow.svg" alt=""></button>`,
  });
});

function moreReviews() {
  let btn = document.querySelector('.reviews__more-btn');
  let revievs = document.querySelector('.reviews_hide');

  btn.addEventListener('click', () => {
    revievs.classList.toggle('hide');

    if (revievs.classList.contains('hide')) {
      btn.innerHTML = 'Показать ещё';
    }
    else {
      btn.innerHTML = 'Скрыть';
    }
  })
}

moreReviews();

function moreReviewsMobile() {
  let btn = document.querySelector('.reviews__more-btn_mobile');
  let reviewsInners = document.querySelector('.reviews__inners');
  let revievs = document.querySelector('.reviews_hide');

  btn.addEventListener('click', () => {
    reviewsInners.classList.toggle('open');
    revievs.classList.toggle('hide');

    if (revievs.classList.contains('hide')) {
      btn.innerHTML = 'Показать ещё';
    }
    else {
      btn.innerHTML = 'Скрыть';
    }
  })
}

moreReviewsMobile();

$(document).ready(function(){
  $('.clients-slider').slick({
    arrows: false,
  });
});

$(document).ready(function(){
  $('.prices-mobile__slider-top').slick({
    arrows: false,
    variableWidth: true,
    // slidesToScroll: 1,
    focusOnSelect: true,
    infinite: false,
    asNavFor: '.prices-mobile__slider-bottom'
  });
  $('.prices-mobile__slider-bottom').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.prices-mobile__slider-top'
  });
});


function modalOrder() {
  const btns = document.querySelectorAll(".btn-order");
  const modalOverlay = document.querySelector(".modal-overlay-order");
  const modals = document.querySelectorAll(".modal-order");

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
modalOrder();

function slider() {
  const casesTabBody = document.querySelector(".cases__tab-body");
  let count = 0;

    //обертка кнопок фильтров
    let nameTab = casesTabBody.querySelectorAll(".name-tab");
    let bodyInfo = casesTabBody.querySelectorAll(".body-info");
    let btnPrev = casesTabBody.querySelector(".btn-prev");
    let btnNext = casesTabBody.querySelector(".btn-next");

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
        nameTab[k].classList.remove("tab--active");
        nameTab[count].classList.add("tab--active");
        bodyInfo[k].classList.remove("d-flex");
        bodyInfo[count].classList.add("d-flex");
      }
    });
}
slider();

function sliderMobile() {
  const casesTabBody = document.querySelector(".cases__tab-body-mini");
  let count = 0;

  for (let i = 0; i < casesTabBody.length; i++) {
    //обертка кнопок фильтров
    let nameTab = casesTabBody[i].querySelectorAll(".name-tab");
    let bodyInfo = casesTabBody[i].querySelectorAll(".body-info");
    let btnPrev = casesTabBody[i].querySelector(".btn-prev");
    let btnNext = casesTabBody[i].querySelector(".btn-next");

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
      }
    });
  }
}
sliderMobile();


