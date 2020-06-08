/*jshint esversion: 6 */

// Howcomeが現れて消える
let howcome = {
  init: function(){
    howcome.container = document.createElement('div');
    howcome.container.className = 'howcome';
    let parent = document.querySelector('ttl');
    document.parent.appendChild(howcome.container);
    window.setInterval(howcome.add, 100);
  },
  add: function(){
    let ttl = 'How Come?';
    howcome.container.innerHTML = ttl;
    howcome.animate(element);
    window.setTimeout(howcome.remove, duration * 1000, element);
  },
  animate: function(element){
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
  },
  remove: function (element) {
    element.parentNode.removeChild(element); // spanの親要素からspanを削除する
  },
};
// howcome.animate(
//   {
//     opacity: [
//       1.0,
//       0
//     ]
//   },
//   {
//     delay: 4000, 
//     duration: 2000,
//     fill: 'forwards',
//     easing: 'ease'
//   }
// );

// Howcomeが上から小さく現れて下に移動する
// let howcomeTransform = [
//   { transform: 'scale(0.1) translate3D(-10%, 0, 0)' },
//   { transform: 'translate3D(-10%, 80vw, 0)', offset: 0.8 },
//   { transform: 'scale(1) translate3D(-10%, 80vw, 0)' }
// ];

// let howcomeTiming = {
//   delay: 1700,
//   duration: 1800,
//   iterations: 1,
//   fill: 'forwards'
// };

// document.getElementById('howcome').animate(
//   howcomeTransform,
//   howcomeTiming
// );

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
  duration: 6000,
  iterations: 1,
  fill: 'forwards',
  easing: 'linear'
};

document.getElementById('question').animate(
  questionTransform,
  questionTiming
);

const app = {

  // chars: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'],

  chars: ['?','Why?','How Come?','Warum?','Wozu?','Pourquoi?','Comment ça se fait?','왜?','어째서?','为什么?','怎么会?'],

  init: function () {
    app.container = document.createElement('div'); // 要素を生成する
    app.container.className = 'animation-container';
    document.body.appendChild(app.container); // body要素の末尾にdivを追加する
    window.setInterval(app.add, 100); // 0.1秒後にadd functionを実行する
  },

  add: function () {
    let element = document.createElement('span');
    app.container.appendChild(element); // div要素の末尾にspanを追加する
    app.animate(element); // Web Animations APIでspanをアニメーションさせる
  },

  animate: function (element) {
    let character = app.chars[Math.floor(Math.random() * app.chars.length)]; // Math.floor（切り捨てる。数値以下の最大の整数を返す）Math.random（浮動小数点の擬似乱数を返す0以上1未満）*app.charsの文字列の長さ
    let duration = Math.floor(Math.random() * 15) + 1;
    let offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    let size = 10 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element); // spanの親要素からspanを削除する
  },

};

document.addEventListener('DOMContentLoaded', app.init); // HTMLドキュメントの解析完了時

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

let promise = new Promise((resolve, reject) => { // #1
  resolve(howcome)
}, 1000)

promise.then((app) => { // #2
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(app)
    }, 500)
  })
}).then((question) => { // #3
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(question)
    }, 500)
  })
}).catch(() => { // エラーハンドリング
  console.error('Something wrong!')
})

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