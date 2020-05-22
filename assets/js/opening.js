// 要素を取得
const element = document.querySelector('.home');
element.animate(
  {
    transform: [
      'translateY(0px)', // 開始値
      'translateY(800px)' // 終了値
    ]
  },
  {
    duration: 3000, // ミリ秒指定
    iterations: 1, // 繰り返し回数
    direction: 'normal', // 繰り返し挙動
    easing: 'ease' // 加減速種類
  }
);
