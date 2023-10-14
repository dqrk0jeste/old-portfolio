function scrollTo(elementClass) {
  document.querySelector(elementClass).scrollIntoView();
}

document.querySelector('.js-sidebar-button')
  .addEventListener('click', () => {
      document.body.classList.toggle('sidebar-open');
  });

document.querySelector('.js-home').addEventListener('click', () => {
  scrollTo('body');
  document.body.classList.remove('sidebar-open');
});
document.querySelector('.js-about-me').addEventListener('click', () => {
  scrollTo('.about-me-page');
  document.body.classList.remove('sidebar-open');
});
document.querySelector('.js-stack').addEventListener('click', () => {
  scrollTo('.my-stack');
  document.body.classList.remove('sidebar-open');
});
document.querySelector('.js-my-projects').addEventListener('click', () => {
  scrollTo('.my-projects-page');
  document.body.classList.remove('sidebar-open');
});
document.querySelector('.js-work').addEventListener('click', () => {
  scrollTo('.work-page');
  document.body.classList.remove('sidebar-open');
});
document.querySelectorAll('.js-contact').forEach((button) => {
  button.addEventListener('click', () => {
    scrollTo('.contact-page');
    document.body.classList.remove('sidebar-open');
  });
});