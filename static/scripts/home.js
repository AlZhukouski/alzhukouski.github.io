//home menu toggle
let homeMenuItems = document.querySelectorAll('.home-menu__item'),
  time;
function homeMenuSwitching() {
  document.querySelector('.home-menu__item.active').classList.remove('active');
  this.classList.add('active');
  document.querySelector('.home-menu__img.active').classList.remove('active');
  document.querySelector('.home-menu__img[data-index="' + this.dataset.index + '"]').classList.add('active');
}

if(window.screen.width > 900) {
  document.querySelector('.home-menu__item[data-index="0"]').classList.add('active');
  document.querySelector('.home-menu__img[data-index="0"]').classList.add('active');
  homeMenuItems.forEach(function (item, index) {
    let toggle = homeMenuSwitching.bind(item)
    item.onmouseenter = function () {
      time = setTimeout(toggle, 55);
    };
    item.onmouseleave = function () {
      clearTimeout(time);
    };
  })

  let nextItem = document.querySelector('.home-menu__item.active').nextElementSibling,
    swapNextItem = function () {
      if (  document.querySelector('.home-menu__item.active').nextElementSibling) {
        nextItem = document.querySelector('.home-menu__item.active').nextElementSibling
      } else {
        nextItem = document.querySelector('.home-menu__item')
      }

      swapItem = homeMenuSwitching.bind(nextItem)
      swapItem()
    }
  swapItem= homeMenuSwitching.bind(nextItem),
    autoSwitch = setInterval( swapNextItem, 3000);

  let homeMenuAutoPlayIndicator= true;
  $(document).on('keypress click mousemove resize scroll',function(){
    homeMenuAutoPlayIndicator = false;
    clearInterval(autoSwitch);
  });

  setInterval(function(){
    if(homeMenuAutoPlayIndicator == true){
      clearInterval(autoSwitch);
      autoSwitch = setInterval( swapNextItem, 3000);
    } else {
      clearInterval(autoSwitch);
    }
    homeMenuAutoPlayIndicator= true;
  },5000);
}
