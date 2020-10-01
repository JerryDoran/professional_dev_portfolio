$('.menu').on('click', function () {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function () {
  $('.menu').removeClass('active');
  $('.overlay').removeClass('menu-open');
});

document.querySelector('.scroll-btn').addEventListener('click', () => {
  document.querySelector('html').style.scrollBehavior = 'smooth';
  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = 'unset';
  }, 1000);
});
