import _ from 'lodash';
import style from './css/style.css'
import Icon from './images/icon.jpg'
import c from './images/we.jpeg'
import {contant} from './js/about.js'
import { foo } from './js/foo';

function component() {
  var element = document.createElement('div');
   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
  element.innerHTML = _.join([foo, contant]);
  element.classList.add('hello')
  // 将图片添加到div里
  const image = new Image()
  image.src = c && Icon
  element.appendChild(image);
  return element;
}

document.body.appendChild(component());

// 这个作用是监听这个文件的修改 触发热更新 别的文件改动是不生效的
if (module.hot) {
  const dependencies = ['./js/about.js', './js/foo.js' ] // 注意: 只能把数组写在accept内
  module.hot.accept(['./js/about.js', './js/foo.js' ], function() {
    // 使用更新过的 library 模块执行某些操作...
    document.body.appendChild(component());
  })
}

