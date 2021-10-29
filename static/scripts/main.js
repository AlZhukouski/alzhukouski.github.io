//use window.scrollY
let scrollpos = window.scrollY;
let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Adaptive menu opening
document.querySelector('.header__menu-btn').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.header__mob-menu').classList.toggle('active');
  document.querySelector('.page').classList.toggle('page--compensate-for-scrollbar');
});

let indicator = document.querySelectorAll('.indicator');

if (indicator.length > 0) {
  let amount = indicator.length,
    width = 100 / amount;
  indicator.forEach(function (item, index) {
    item.querySelector('.indicator__current-value').innerHTML = '0' + (index + 1);
    item.querySelector('.indicator__amount').innerHTML = '0' + amount;
    item.querySelector('.indicator__line').style.width = width + '%';
    item.querySelector('.indicator__line').style.marginRight = index * width.toFixed(1) + '%';
  })
}

function removeNoscroll() {
  let body = document.querySelector('body.page');
  body.classList.remove('compensate-for-scrollbar');
  body.style.removeProperty('margin-right');
  document.querySelector('.header').style.removeProperty('margin-right');
}

document.querySelectorAll('.header__result-btn').forEach(function (item) {
  item.addEventListener('click', function () {
    this.closest('.header__result-wrap').classList.toggle('show');
  })
})

document.querySelector('.header__search-close').addEventListener('click', function () {
  document.querySelector('#search-input').value = "";
  removeNoscroll()
})

document.querySelector('.header__search-back').addEventListener('click', function () {
  document.querySelector('#search-input').value = document.querySelector('#search-input').value.slice(0, -1);
  if (document.querySelector('#search-input').value < 1) {
    removeNoscroll()
  }
})

document.querySelector('.header__search-dark-bg').addEventListener('click', function () {
  document.querySelector('#search-input').value = "";
  removeNoscroll()
})

let body = document.querySelector('.page');


// создадим элемент с прокруткой
let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

let input = document.querySelector('#search-input');

input.oninput = function () {
  if (input.value.length >= 1 && !document.querySelector('body.page').classList.contains('compensate-for-scrollbar')) {
    document.querySelector('body.page').classList.add('compensate-for-scrollbar');
    document.querySelector('body.page').style.marginRight = scrollWidth + 'px';
    document.querySelector('.header').style.marginRight = scrollWidth + 'px';
  } else if (input.value.length < 1) {
    removeNoscroll()
  }
};
