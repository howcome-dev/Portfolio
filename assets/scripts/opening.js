/*jshint esversion: 6 */
// ？が降ってくる
let questionTransform = [
  { transform: 'scale(0) translate3D(50%, 0, 0) rotate(-50deg)' },
  { transform: 'scale(5) translate3D(0, 3vh, 0) rotate(390deg)' }, // 真ん中でちょっと止まる
  { transform: 'scale(5) translate3D(0, 3vh, 0) rotate(400deg)' }, // 真ん中でちょっと止まる
  { transform: 'translate3D(100%, -8vh, 0) rotate(5deg)' }, // ぴょんぴょんする
  { transform: 'translate3D(-20%, 0, 0) rotate(10deg)' },
  { transform: 'translate3D(-250%, -8vh, 0) rotate(-5deg)' },
  { transform: 'scale(2) translate3D(-380%, -25vh, 0) rotate(35deg)' },
  { transform: 'scale(20) translate3D(0, 5vh, 0) rotate(23deg)' },
  { transform: 'scale(0) translate3D(0, 0, 0) rotate(-10deg)' }
];
let questionTiming = {
  delay: 1500,
  duration: 3500,
  iterations: 1,
  fill: 'forwards',
  easing: 'linear'
};
document.getElementById('question').animate(
  questionTransform,
  questionTiming
);

// 下からわく？たち
const floating = {
  chars: ['なんで','Why?','Warum?', 'Pourquoi?','왜?','为什么?'],

  init: function () {
    floating.container = document.createElement('div'); // 要素を生成する
    floating.container.className = 'in_my_head';
    const skip = document.querySelector('.skip');
    skip.after(floating.container); // .skipのあとにdivを追加する
    window.setInterval(floating.add, 100); // 0.1秒後にadd functionを実行する
  },

  add: function () {
    let element = document.createElement('span');
    floating.container.appendChild(element); // div要素の末尾にspanを追加する
    floating.animate(element); // Web Animations APIでspanをアニメーションさせる
  },

  animate: function (element) {
    let character = floating.chars[Math.floor(Math.random() * floating.chars.length)]; // Math.floor（切り捨てる。数値以下の最大の整数を返す）Math.random（浮動小数点の擬似乱数を返す0以上1未満）*floating.charsの文字列の長さ
    let duration = Math.floor(Math.random() * 35) + 1;
    let offset = Math.floor(Math.random() * (50 - duration * 1)) + 3;
    let size = 20 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(floating.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element); // spanの親要素からspanを削除する
  },
};
document.addEventListener('DOMContentLoaded', floating.init); // HTMLドキュメントの解析完了時

// アニメーションをSkipする
const skip = document.querySelector(".skip");
// skip.addEventListener('click', handleClick);
// const animate = document.querySelectorAll('#animate');

// function handleClick() {
//   animate.addEventListener('animationend', () => {
//     animate.classList.remove('active');
//   });
// };
const animation = document.querySelector('#animate');

// animation.addEventListener('animationend', () => {
//   animation.classList.remove('active');
// });

skip.addEventListener('click', () => {
  animation.classList.remove('active');
  let active = animation.classList.contains('active');
  if (active) {
    animation.classList.remove('active');
  } else {
    animation.classList.add('active');
  }
});