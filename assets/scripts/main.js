/*jshint esversion: 6 */

/******************************************************************************
  リンク
*******************************************************************************/
// a要素を一括取得する
const aElementList = document.querySelectorAll('a');

// 各a要素について処理する
aElementList.forEach((element) => {
  // aタグにtarget属性が存在しなかったらreturn
  if (element.hasAttribute('target') === false) {
    return;
  }

  // target属性_blankではなかったらreturn
  if (element.getAttribute('target') !== '_blank') {
    return;
  }

  // rel属性にnoopenerを付与する
  element.setAttribute('rel', 'noopener');
});

/******************************************************************************
  アコーディオン
*******************************************************************************/
let tabMenus,
		tabContents;
	// document.querySelectorAllでマッチしたclass名を持つ要素を取得
	tabMenus = document.querySelectorAll('.bl_intro_link');
	tabContents = document.querySelectorAll('.bl_intro_desc');
	
	// 取得した要素は配列のようなオブジェクトを保持しているため、
	// 要素の数の分だけループ処理をして値を取り出す
	for (let i = 0; i < tabMenus.length; i++) {
		// タブメニュークリック時
		tabMenus[i].addEventListener('click', function(e) {
			// リンクの無効化
			e.preventDefault();
			
			// すべてのタブメニューを非アクティブにする
			for (let i = 0; i < tabMenus.length; i++) {
				tabMenus[i].className = 'bl_intro_link';
			}
			// クリックしたタブメニューをアクティブにする
			this.className = 'bl_intro_link is-active';
			
			// タブコンテンツを非アクティブにする
			for (let i = 0; i < tabContents.length; i++) {
				tabContents[i].className = 'bl_intro_desc';
			}
			// タブメニューdata属性値と等しいid値を持つタブコンテンツを表示させる
			document.getElementById(this.dataset.id).className = 'bl_intro_desc is-active';

		});
	}
