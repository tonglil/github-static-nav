window.onload = runOnScroll();
window.addEventListener('scroll', scrollNav);
window.addEventListener('scroll', scrollToolbar);

function runOnScroll() {
  scrollNav();
  scrollToolbar();
}

function scrollNav() {
  scrollToolbar();

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
  var toolbar = document.getElementsByClassName('pr-toolbar js-sticky');

  if (toolbar.length > 0) {
    newClass = 'github-shift-down-toolbar';
  }

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

function scrollToolbar() {
  var toolbar = document.getElementsByClassName('pr-toolbar js-sticky');

  if (toolbar.length > 0) {
    // Firefox only has one 'pr-toolbar' element
    toolbar = toolbar[0];
    var targetOffset = toolbar.offsetTop;

    var header = document.getElementsByClassName('header');
    header = header[0];
    var scrollbackHeight = header.offsetHeight;

    var newClass = 'github-shift-toolbar-down';

    if (window.scrollY > targetOffset) {
      toolbar.classList.add(newClass);

      if (window.scrollY < scrollbackHeight) {
        toolbar.classList.remove(newClass);
      }
    } else {
      toolbar.classList.remove(newClass);
    }
  }
}
