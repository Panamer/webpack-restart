import _ from 'lodash';
import style from './style.css'
import Icon from './icon.jpg'
import c from './we.jpeg'

function component() {
  var element = document.createElement('div');
   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello,', 'webpack'], ' ');
  element.classList.add('hello')
  // 将图片添加到div里
  const image = new Image()
  image.src = c || Icon
  element.appendChild(image);
  return element;
}

document.body.appendChild(component());



