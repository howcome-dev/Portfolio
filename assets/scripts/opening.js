/*jshint esversion: 6 */

// .intro_desc letter-glowアニメーション
let textbox = document.querySelector('.intro_desc');
let text = textbox.textContent;

// .intro_disc内のテキストを1文字ずつspanタグで囲って文字を光らせる
let Spanizer = function() {
  let t;
  return {
      settings: {
          letters: $(".js-letters")
      },
      init: function() {
          t = this.settings, this.bindEvents() // tに文字列を分割して入れる
      },
      bindEvents: function() {
          Spanizer.letters()
      },
      letters: function() {
          t.letters.html(function(t, n) { // nが文章
              let e = $.trim(n).split(""),// 文字列から空白を取り除く 
                  i = [];
              return e.forEach(function(t) {
                  " " !== t ? i.push("<span>" + t + "</span>") : i.push("<span>&nbsp;</span>")
              }), i.join("")
          })
      }
  }
}();

// Init Spanizer
Spanizer.init();

// Howcomeが現れて消える
const howcome = document.getElementById('howcome');
howcome.animate(
  {
    opacity: [
      1.0,
      0
    ]
  },
  {
    delay: 4000, 
    duration: 2000,
    fill: 'forwards',
    easing: 'ease'
  }
);

// Howcomeが上から小さく現れて下に移動する
let howcomeTransform = [
  { transform: 'scale(0.1) translate3D(-10%, 0, 0)' },
  { transform: 'translate3D(-10%, 80vw, 0)', offset: 0.8 },
  { transform: 'scale(1) translate3D(-10%, 80vw, 0)' }
];

let howcomeTiming = {
  delay: 1700,
  duration: 1800,
  iterations: 1,
  fill: 'forwards'
};

document.getElementById('howcome').animate(
  howcomeTransform,
  howcomeTiming
);

// ？が降ってきて止まる
let questionTransform = [
  { transform: 'scale(0.1) translate3D(50%, 0, 0) rotate(-50deg)' }, // 右に傾きながらフレームの上から降る
  { transform: 'translate3D(0, 20vw, 0) rotate(160deg)' }, // 右にかたむきながらHowcomeと一緒におちる
  { transform: 'scale(5) translate3D(0, 10vw, 0) rotate(360deg)' }, // 大きくなって一回転しながら真ん中へ
  { transform: 'translate3D(0, 70vw, 0) rotate(-360deg)' }, // 元の大きさに戻って逆回転
  { transform: 'translate3D(40%, 75vw, 0) rotate(10deg)' }, // Howcome?の位置へ
  { transform: 'translate3D(30%, 70vw, 0) rotate(-80deg)' }, // 左へぽんぽん進む
  { transform: 'translate3D(20%, 75vw, 0) rotate(10deg)' },
  { transform: 'translate3D(10%, 70vw, 0) rotate(10deg)' },
  { transform: 'translate3D(0, 75vw, 0) rotate(10deg)' },
  { transform: 'translate3D(-10%, 70vw, 0) rotate(185deg)' },
  { transform: 'translate3D(-40%, 75vw, 0) rotate(-10deg)' }
];

let questionTiming = {
  delay: 1700,
  duration: 6000,
  iterations: 1,
  fill: 'forwards',
  easing: 'linear'
};

document.getElementById('question').animate(
  questionTransform,
  questionTiming
);

// // ？をマウスで動かす
// const moveQuestion = document.getElementById('question');

// // ページ上でマウスボタンを押したら、？の移動開始
// document.addEventListener('mousedown', () => {
//   // マウスの動きに合わせて？を動かす
//   document.addEventListener('mousemove', onMouseMove);

//   // ページ上でマウスボタンを離したら、？の移動を終了
//   document.addEventListener('mouseup', () => {
//     document.removeEventListener('mousemove', onMouseMove);
//   });
// });

// // マウスが動いたときの処理
// function onMouseMove(event) {
//   question.style.left = `${event.clientX - 100}px`;
//   question.style.top = `${event.clientY - 100}px`;
// }

// // ？をタップで動かす
// const log = document.querySelector('.log');

// // 画面上でタッチ位置を移動したら、ログを表示
// question.addEventListener('touchstart', () => {
//   moveQuestion.style.width = '5rem';
//   moveQuestion.style.height = '5rem';
//   moveQuestion.style.lineHeight = '1';
//   document.addEventListener('touchmove', (event));

//   document.addEventListener('touchend', () => {
//     document.removeEventListener('touchmove', (event));
//   });
// });

// moveQuestion.addEventListener('touchmove', () => {
//   const touch = event.changedTouches;

//   log.innerHTML = `
//    ${touch[0].pageX.toFixed(2)}<br>
//    ${touch[0].pageY.toFixed(2)}
//   `;
// });

// 柱ひだりが上から降ってくる
// let pillarLTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 90vw, 0)' }
// ];

// let pillarLTiming = {
//   delay: 7200,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('pillarLeft').animate(
//   pillarLTransform,
//   pillarLTiming
// );

// // 柱みぎが降ってくる
// let pillarRTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 90vw, 0)' }
// ];

// let pillarRTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('pillarRight').animate(
//   pillarRTransform,
//   pillarRTiming
// );

// // 屋根の基礎が降ってくる
// let roofBaseTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let roofBaseTiming = {
//   delay: 7200,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('roofBase').animate(
//   roofBaseTransform,
//   roofBaseTiming
// );

// // 基礎ひだりが上から降ってくる
// let baseLTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 115vw, 0)' }
// ];

// let baseLTiming = {
//   delay: 7200,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('baseLeft').animate(
//   baseLTransform,
//   baseLTiming
// );

// // 基礎みぎが降ってくる
// let baseRTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 115vw, 0)' }
// ];

// let baseRTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('baseRight').animate(
//   baseRTransform,
//   baseRTiming
// );

// // 屋根のナッツが降ってくる
// let roofNutsTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let roofNutsTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('roofNuts').animate(
//   roofNutsTransform,
//   roofNutsTiming
// );

// // 屋根のとびらが降ってくる
// let roofDoorTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let roofDoorTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('roofDoor').animate(
//   roofDoorTransform,
//   roofDoorTiming
// );

// // まんなかのとびらが降ってくる
// let middleDoorTransform = [
//   { transform: 'translate3D(0, 0, 0)' },
//   { transform: 'translate3D(0, 50vw, 0)' }
// ];

// let middleDoorTiming = {
//   delay: 7400,
//   duration: 1000,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('middleDoor').animate(
//   middleDoorTransform,
//   middleDoorTiming
// );