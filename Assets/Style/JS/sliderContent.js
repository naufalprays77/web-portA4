let item = 0;

function slider_content() {
  let img = document.getElementsByClassName('size-img-content-right');
  let bullets = document.getElementsByClassName('bullet');

  for (let i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  }
  item++;
  if (item > img.length) {
    item = 1;
  }
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(' active', '');
  }
  img[item - 1].style.display = 'block';
  bullets[item - 1].className += ' active';
  setTimeout(slider_content, 3000);
}

slider_content();
