const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(from, to) {
  navItems.forEach((navItem, i) => {
    navItem.classList.replace(`slide-${from}-${i + 1}`, `slide-${to}-${i + 1}`);
  });
}

function toggleNav() {
  //  Toggle Menu Bars Open/Closed
  menuBars.classList.toggle('change');

  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - OVerlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');

    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(navItem => {
  navItem.addEventListener('click', toggleNav);
});
