/*jshint esversion: 6 */

window.addEventListener("load", init);

function init() {
  // Stageオブジェクトを作成。表示リストのルートになります。
  var stage = new createjs.Stage("set_layout");

  //----------------------------------------
  // パズルの土台を作成
  //----------------------------------------

  // 屋根裏
  var bgAttic = new createjs.Bitmap("assets/images/bgAttic.svg");
  bgAttic.x = 0;
  bgAttic.y = 0;
  stage.addChild(bgAttic);

  // 屋根の基礎
  var bgBaseLeft = new createjs.Bitmap("assets/images/bgBaseLeft.svg");
  bgBaseLeft.x = 0;
  bgBaseLeft.y = 100;
  bgBaseLeft.scaleX = 2; // 横幅を2倍
  bgBaseLeft.scaleY = 2; // 縦幅を2倍
  stage.addChild(bgBaseLeft);

  //----------------------------------------
  // パズルのピースを作成
  //----------------------------------------
  // 円のピース
  var attic = new createjs.Bitmap("assets/images/attic.svg");
  attic.x = 100;
  attic.y = 100;
  stage.addChild(attic);

  // tick イベントを監視します
  createjs.Ticker.on("tick", function () {
    // Stageの描画を更新します
    stage.update();
  });

  //----------------------------------------
  // マウスイベントを登録
  //----------------------------------------
  attic.addEventListener("mousedown", handleMouseDown);

  function handleMouseDown(event) {
    // currentTarget を使うことで、どれがマウスダウンされたか判別できる
    var piece = event.currentTarget;

    // 目標の対象を判定する
    var targetBase;
    // マウスダウンされたものの形状にあわせて、目標のシェイプを選定
    if (piece == attic) {
      targetBase = attic;
    }

    // マウスが押された場所を保存しておく
    var mouseDownX = stage.mouseX - piece.x;
    var mouseDownY = stage.mouseY - piece.y;

    // ドラッグ関連イベントを登録
    piece.addEventListener("pressmove", handlePressMove);
    piece.addEventListener("pressup", handlePressUp);

    function handlePressMove(event) {
      updateMousePosition(); // マウスの座標に追随
    }

    function handlePressUp(event) {
      updateMousePosition(); // マウスの座標に追随

      // マウスアップされたときに、目標のシェイプとの当たり判定をとる
      var pt = targetBase.localToLocal(0, 0, piece);
      var isHit = piece.hitTest(pt.x, pt.y);
      if (isHit == true) {
        // 吸着させる
        piece.x = targetBase.x;
        piece.y = targetBase.y;
      }

      // ドラッグ関連イベントを解除
      piece.removeEventListener("pressmove", handlePressMove);
      piece.removeEventListener("pressup", handlePressUp);
    }

    // マウスのドラッグ処理
    function updateMousePosition() {
      // オブジェクトの座標はマウスの座標に追随
      // ただしマウスダウンした場所のズレを補正
      piece.x = stage.mouseX - mouseDownX;
      piece.y = stage.mouseY - mouseDownY;
    }
  }

  //----------------------------------------
  // 時間経過
  //----------------------------------------
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
    // Stageの描画を更新
    stage.update();
  }

  // リサイズイベントを検知してリサイズ処理を実行
window.addEventListener("resize", handleResize);
handleResize(); // 起動時にもリサイズしておく

  // リサイズ処理
  function handleResize(event) {
    // 画面幅・高さを取得
    var w = window.innerWidth;
    var h = window.innerHeight;
    // Canvas要素の大きさを画面幅・高さに合わせる
    stage.canvas.width = w;
    stage.canvas.height = h;
    // 画面更新する
    stage.update();
  }

  // タッチ操作をサポートしているブラウザーならば
  if (createjs.Touch.isSupported() == true) {
    // タッチ操作を有効にします。
    createjs.Touch.enable(stage)
  }
}