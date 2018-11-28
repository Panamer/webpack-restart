import _ from 'lodash';
import style from './style.css'
import Icon from './icon.jpg'

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
     navigator.serviceWorker.register('/service-worker.js').then(registration => {
       console.log('SW registered: ', registration);
     }).catch(registrationError => {
       console.log('SW registration failed: ', registrationError);
     });
   });
}

function component() {
  var element = document.createElement('div');
   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello,', 'webpack'], ' ');
  element.classList.add('hello')
  // 将图片添加到div里
  const image = new Image()
  image.src = Icon
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());
