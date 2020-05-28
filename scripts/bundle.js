/*jshint esversion: 6 */

// Howcomeが現れた6秒後に1.8秒間で消える
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

// Howcomeが1.8秒間で上から小さく現れて下に移動する
let howcomeTransform = [
  { transform: 'scale(0.1) translate3D(-10%, -50px, 0)' },
  { transform: 'translate3D(-10%, 80vw, 0)', offset: 0.8 },
  { transform: 'scale(1) translate3D(-10%, 80vw, 0)' }
];

let howcomeTiming = {
  duration: 1800,
  iterations: 1,
  fill: 'forwards'
};

document.getElementById('howcome').animate(
  howcomeTransform,
  howcomeTiming
);

// ？が6秒間で上からくるくる降ってきて傾いて止まる
let questionTransform = [
  { transform: 'scale(0.1) translate3D(50%, -100vw, 0) rotate(-50deg)' }, // 右に傾きながらフレームの上から降る
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

// 柱1が開始8秒後に左から1.8秒で上から降ってくる
let pillar1Transform = [
  { transform: 'translate3D(0, 0, 0)' },
  { transform: 'translate3D(0, 90vw, 0)' }
];

let pillar1Timing = {
  delay: 7200,
  duration: 1000,
  iterations: 1,
  fill: 'forwards'
};

document.getElementById('pillar1').animate(
  pillar1Transform,
  pillar1Timing
);

// 柱2が開始10秒後に1.8秒間で右から降ってくる
let pillar2Transform = [
  { transform: 'translate3D(0, 0, 0)' },
  { transform: 'translate3D(0, 90vw, 0)' }
];

let pillar2Timing = {
  delay: 7400,
  duration: 1000,
  iterations: 1,
  fill: 'forwards' // 終了時にプロパティーを保つ
};

document.getElementById('pillar2').animate(
  pillar2Transform,
  pillar2Timing
);