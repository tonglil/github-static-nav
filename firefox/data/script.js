window.onload = runOnScroll();
window.addEventListener('scroll', runOnScroll);

function runOnScroll() {
  var nav = document.getElementsByClassName('pagehead repohead experiment-repo-nav');
  nav = nav[0];
  var targetOffset = nav.offsetTop;     // 49
  var targetOffsetMarginTop = 20;
  var heightOffset = nav.offsetHeight;  // 99

  var header = document.getElementsByClassName('header');
  header = header[0];
  var scrollbackHeight = header.offsetHeight; // 49

  var page = document.getElementById('js-repo-pjax-container');

  var newClass = 'github-shift-down';

  if (window.scrollY > targetOffset) {
    nav.classList.add(newClass);
    page.style.marginTop = heightOffset + targetOffsetMarginTop + 'px';

    if (window.scrollY < scrollbackHeight) {
      nav.classList.remove(newClass);
      page.style.marginTop = 0;
    }
  } else {
    nav.classList.remove(newClass);
    page.style.marginTop = 0;
  }
}
