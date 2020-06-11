/*jshint esversion: 6 */

// ？が降ってくる
let questionTransform = [
  { transform: 'scale(0) translate3D(50%, 0, 0) rotate(-50deg)' },
  { transform: 'scale(3) translate3D(0, 1vh, 0) rotate(310deg)' }, // 大きくなって一回転しながら真ん中へ
  { transform: 'scale(5) translate3D(0, 3vh, 0) rotate(390deg)' }, // 真ん中でちょっと止まる
  { transform: 'scale(5) translate3D(0, 3vh, 0) rotate(400deg)' }, // 真ん中でちょっと止まる
  { transform: 'translate3D(100%, 6vh, 0) rotate(20deg)' }, // ぴょんぴょんする
  { transform: 'translate3D(300%, -5vh, 0) rotate(40deg)' },
  { transform: 'translate3D(-30%, 5vh, 0) rotate(-10deg)' },
  { transform: 'translate3D(-330%, -3vh, 0) rotate(-20deg)' },
  { transform: 'scale(2) translate3D(0, 0, 0) rotate(35deg)' },
  { transform: 'scale(25) translate3D(0, 3vh, 0) rotate(23deg)' },
  { transform: 'scale(0) translate3D(0, 0, 0) rotate(-10deg)' }
];
let questionTiming = {
  duration: 3200,
  iterations: 1,
  fill: 'forwards',
  easing: 'ease-in'
};
document.getElementById('question').animate(
  questionTransform,
  questionTiming
);