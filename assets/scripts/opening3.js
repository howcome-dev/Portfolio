/*jshint esversion: 6 */

// 下からわく？たち
const floating = {
  chars: ['?','Why?','How Come?','Warum?','Wozu?','Pourquoi?','Comment ça se fait?','왜?','어째서?','为什么?','怎么会?'],

  init: function () {
    floating.container = document.createElement('div'); // 要素を生成する
    floating.container.className = 'intro_floating';
    const intro_desc = document.querySelector('.intro_desc');
    intro_desc.after(floating.container); // .intro_descのあとにdivを追加する
    window.setInterval(floating.add, 100); // 0.1秒後にadd functionを実行する
  },

  add: function () {
    let element = document.createElement('span');
    floating.container.appendChild(element); // div要素の末尾にspanを追加する
    floating.animate(element); // Web Animations APIでspanをアニメーションさせる
  },

  animate: function (element) {
    let character = floating.chars[Math.floor(Math.random() * floating.chars.length)]; // Math.floor（切り捨てる。数値以下の最大の整数を返す）Math.random（浮動小数点の擬似乱数を返す0以上1未満）*floating.charsの文字列の長さ
    let duration = Math.floor(Math.random() * 15) + 1;
    let offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    let size = 10 + (15 - duration);
    element.style.cssText = 'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(floating.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element); // spanの親要素からspanを削除する
  },
};
document.addEventListener('DOMContentLoaded', floating.init); // HTMLドキュメントの解析完了時

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
          t = this.settings, this.bindEvents(); // tに文字列を分割して入れる
      },
      bindEvents: function() {
          Spanizer.letters();
      },
      letters: function() {
          t.letters.html(function(t, n) { // nが文章
              let e = $.trim(n).split(""),// 文字列から空白を取り除く 
                  i = [];
              return e.forEach(function(t) {
                  " " !== t ? i.push("<span>" + t + "</span>") : i.push("<span>&nbsp;</span>");
              }), i.join("");
          });
      }
  };
}();

// Init Spanizer
Spanizer.init();