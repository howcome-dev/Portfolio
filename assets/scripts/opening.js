// howcomeのアニメーション
let howcomeTransform = [
  { transform: 'scale(0.1) translate3D(0, -50px, 0)' },
  { transform: 'translate3D(0, 200vw, 0)', offset: 0.8 },
  { transform: 'scale(1) translate3D(0, 100vw, 0)' },
];

let howcomeTiming = {
  duration: 1800,
  iterations: 1,
  fill: 'forwards' // 終了時にプロパティーを保つ
}

document.getElementById("howcome").animate(
  howcomeTransform,
  howcomeTiming
)

// ?のアニメーション
let questionTransform = [
  { transform: 'scale(0.2) translate3D(0, -20%, 0) rotate(20deg)' },
  { transform: 'translate3D(0, 20%, 0) rotate(80deg)' },
  { transform: 'translate3D(0, -10%, 0)' },
  { transform: 'translate3D(0, 10%, 0) rotate(20deg)' },
  { transform: 'translate3D(20%, 50%, 0)' },
  { transform: 'scale(0.1) translate3D(10%, -50%, 0) rotate(-180deg)' },
  { transform: 'translate3D(-18%, 80%, 0) rotate(30deg)' },
  { transform: 'translate3D(0, 100vw, 0) rotate(-10deg)' },
  { transform: 'translate3D(0, 100vw, 0) rotate(10deg)' }
];

let questionTiming = {
  duration: 6000,
  iterations: 1,
  fill: 'forwards' // 終了時にプロパティーを保つ
}

document.getElementById("question").animate(
  questionTransform,
  questionTiming
)