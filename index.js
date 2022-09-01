// Import stylesheets
import './style.css';

$(document).ready(function () {
  console.log('Document ready!');
  window.addEventListener('hashchange', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('hash change', e);
    let hash = window.location.hash;
    let position = hash ? $(hash).offset().top : 0;
    console.log('position', position);
    if (hash) {
      $('html, body').stop().animate({ scrollTop: position }, 1000);
    }
  });

  btnClickHandler();
});
function btnClickHandler() {
  $('.btn').on('click', (e) => {
    let position = $('#nav').offset().top;
    $('html, body').stop().animate({ scrollTop: position }, 1000);
  });
}
