// howcomeのアニメーション
let howcomeTransform = [
  { transform: 'scale(0.2) translate3D(0, -20%, 0) rotate(20deg)' },
  { transform: 'translate3D(0, 20%, 0) rotate(80deg)' },
  { transform: 'translate3D(0, -10%, 0)' },
  { transform: 'translate3D(0, 10%, 0) rotate(20deg)' },
  { transform: 'translate3D(20%, 50%, 0)' },
  { transform: 'scale(0.1) translate3D(10%, -50%, 0) rotate(-180deg)' },
  { transform: 'translate3D(-18%, 80%, 0) rotate(30deg)' }
];

let howcomeTiming = {
  duration: 6000,
  iterations: 1
}

document.getElementById("howcome").animate(
  howcomeTransform,
  howcomeTiming
)