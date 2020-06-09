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
  bgAttic.x = 300;
  bgAttic.y = 0;
  stage.addChild(bgAttic);

  // 基礎ひだり
  var bgBaseLeft = new createjs.Bitmap("assets/images/bgBaseLeft.svg");
  bgBaseLeft.x = 50;
  bgBaseLeft.y = 600;
  bgBaseLeft.scaleX = 1;
  bgBaseLeft.scaleY = 1;
  stage.addChild(bgBaseLeft);

  // 基礎みぎ
  var bgBaseRight = new createjs.Bitmap("assets/images/bgBaseRight.svg");
  bgBaseRight.x = 50;
  bgBaseRight.y = 600;
  bgBaseRight.scaleX = 1;
  bgBaseRight.scaleY = 1;
  stage.addChild(bgBaseRight);

  // とびら
  var bgEntrance = new createjs.Bitmap("assets/images/bgEntrance.svg");
  bgEntrance.x = 50;
  bgEntrance.y = 600;
  bgEntrance.scaleX = 1;
  bgEntrance.scaleY = 1;
  stage.addChild(bgEntrance);

  // はしごの手すり
  var bgHandrail = new createjs.Bitmap("assets/images/bgHandrail.svg");
  bgHandrail.x = 50;
  bgHandrail.y = 600;
  bgHandrail.scaleX = 1;
  bgHandrail.scaleY = 1;
  stage.addChild(bgHandrail);

  // ドアノブ
  var bgKnob = new createjs.Bitmap("assets/images/bgKnob.svg");
  bgKnob.x = 50;
  bgKnob.y = 600;
  bgKnob.scaleX = 1;
  bgKnob.scaleY = 1;
  stage.addChild(bgKnob);

  // ドアノブPLAYボタン
  var bgKnobBtn = new createjs.Bitmap("assets/images/bgKnobBtn.svg");
  bgKnobBtn.x = 50;
  bgKnobBtn.y = 600;
  bgKnobBtn.scaleX = 1;
  bgKnobBtn.scaleY = 1;
  stage.addChild(bgKnobBtn);

  // 柱ひだり
  var bgPillarLeft = new createjs.Bitmap("assets/images/bgPillarLeft.svg");
  bgPillarLeft.x = 50;
  bgPillarLeft.y = 600;
  bgPillarLeft.scaleX = 1;
  bgPillarLeft.scaleY = 1;
  stage.addChild(bgPillarLeft);

  // 柱みぎ
  var bgPillarRight = new createjs.Bitmap("assets/images/bgPillarRight.svg");
  bgPillarRight.x = 50;
  bgPillarRight.y = 600;
  bgPillarRight.scaleX = 1;
  bgPillarRight.scaleY = 1;
  stage.addChild(bgPillarRight);

  // 道
  var bgRoad1 = new createjs.Bitmap("assets/images/bgRoad1.svg");
  bgRoad1.x = 50;
  bgRoad1.y = 600;
  bgRoad1.scaleX = 1;
  bgRoad1.scaleY = 1;
  stage.addChild(bgRoad1);

  // 屋根
  var bgRoofBase = new createjs.Bitmap("assets/images/bgRoofBase.svg");
  bgRoofBase.x = 50;
  bgRoofBase.y = 600;
  bgRoofBase.scaleX = 1;
  bgRoofBase.scaleY = 1;
  stage.addChild(bgRoofBase);

  // カップケーキのカップ
  var bgSecretBase = new createjs.Bitmap("assets/images/bgSecretBase.svg");
  bgSecretBase.x = 50;
  bgSecretBase.y = 600;
  bgSecretBase.scaleX = 1;
  bgSecretBase.scaleY = 1;
  stage.addChild(bgSecretBase);

  // カップケーキのいちご
  var bgSecretBerry = new createjs.Bitmap("assets/images/bgSecretBerry.svg");
  bgSecretBerry.x = 50;
  bgSecretBerry.y = 600;
  bgSecretBerry.scaleX = 1;
  bgSecretBerry.scaleY = 1;
  stage.addChild(bgSecretBerry);

  // カップケーキのスポンジ
  var bgSecretSponge = new createjs.Bitmap("assets/images/bgSecretSponge.svg");
  bgSecretSponge.x = 50;
  bgSecretSponge.y = 600;
  bgSecretSponge.scaleX = 1;
  bgSecretSponge.scaleY = 1;
  stage.addChild(bgSecretSponge);

  // 1階の窓
  var bgWindow = new createjs.Bitmap("assets/images/bgWindow.svg");
  bgWindow.x = 50;
  bgWindow.y = 600;
  bgWindow.scaleX = 1;
  bgWindow.scaleY = 1;
  stage.addChild(bgWindow);

  // 2階の窓
  var bgWindow2 = new createjs.Bitmap("assets/images/bgWindow2.svg");
  bgWindow2.x = 50;
  bgWindow2.y = 600;
  bgWindow2.scaleX = 1;
  bgWindow2.scaleY = 1;
  stage.addChild(bgWindow2);

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
    createjs.Touch.enable(stage);
  }
}