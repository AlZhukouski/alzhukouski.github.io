//home menu toggle
let contactItems = document.querySelectorAll('.contacts__btn');

document.querySelector('.contacts__btn[data-tab="0"]').classList.add('active');
document.querySelector('.contacts__tab[data-tab="0"]').classList.add('active');
document.querySelector('.contacts__map[data-tab="0"]').classList.add('active');
document.querySelectorAll('.contacts__btn').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelector('.contacts__btn.active').classList.remove('active');
    this.classList.add('active');
    document.querySelector('.contacts__tab.active').classList.remove('active');
    document.querySelector('.contacts__tab[data-tab="' + this.dataset.tab + '"]').classList.add('active');
    document.querySelector('.contacts__map.active').classList.remove('active');
    document.querySelector('.contacts__map[data-tab="' + this.dataset.tab + '"]').classList.add('active');
  })
})


$('.form__file-input').each(function () {
  $(this).change(function () {
    const inputFile = $(this)[0].files[0]
    const nameInputFile = inputFile.name
    $(this).parents('.form__file-wrap').find('.form__file-text-input').text(nameInputFile)
  })
})
