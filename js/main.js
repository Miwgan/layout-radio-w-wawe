new Accordion('.accordion-container');



  let burger = document.querySelector('.burger')

  let menu = document.querySelector('.header-nav')

  let menuLinks = document.querySelectorAll('.header-nav__link')

  burger.addEventListener('click',

  function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header-nav--active');

  document.body.classList.toggle('stop-scroll')

  })

  menuLinks.forEach(el=> {
    el.addEventListener('click', function() {
      document.body.classList.remove('stop-scroll')
      menu.classList.remove('header-nav--active');
      burger.classList.remove('burger--active');
    } )
  })

// Показать подкасты

const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.podcasts__item').length;
let items = 8;

showMore.addEventListener('click', () => {
	items += 4;
	const array = Array.from(document.querySelector('.podcasts__list').children);
	const visItems = array.slice(0, items);

	visItems.forEach(el => el.classList.add('podcasts__item--is-visible'));

	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}

});



// Селектор

  // Pass single element
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false
  });



  // Аккордион

  $(".accordion").accordion({
    heightStyle: "content",
    active: 0
});


// табы

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {

          btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
          tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


// Слайдер

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px

    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    1025: {
      slidesPerView: 4,
      spaceBetween: 30
    },

  }

});


// якорная прокрутка

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



//  form

const validation = new JustValidate('#form');

validation
  .addField('#', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);

