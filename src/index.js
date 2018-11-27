
import style from './style.css'
import Icon from './icon.jpg'

function component() {
  var element = document.createElement('div');
   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
  element.innerHTML = 'wqewqewqrwrew';
  element.classList.add('hello')

  return element;
}

document.body.appendChild(component());
