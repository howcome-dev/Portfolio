/*jshint esversion: 6 */

window.addEventListener("load", init);

function init() {
  // Stageオブジェクトを作成。表示リストのルートになります。
  var stage = new createjs.Stage("set_layout");

  //----------------------------------------
  // パズルの土台を作成
  //----------------------------------------

  // 基礎ひだり
  var bgBaseLeft = new createjs.Bitmap("assets/images/bgBaseLeft.svg");
  bgBaseLeft.x = 680;
  bgBaseLeft.y = 643;
  bgBaseLeft.scaleX = .97;
  bgBaseLeft.scaleY = .89;
  stage.addChild(bgBaseLeft);

  // 基礎みぎ
  var bgBaseRight = new createjs.Bitmap("assets/images/bgBaseRight.svg");
  bgBaseRight.x = 1040;
  bgBaseRight.y = 650;
  bgBaseRight.scaleX = .99;
  bgBaseRight.scaleY = .89;
  stage.addChild(bgBaseRight);

  // とびら
  var bgEntrance = new createjs.Bitmap("assets/images/bgEntrance.svg");
  bgEntrance.x = 865;
  bgEntrance.y = 465;
  bgEntrance.scaleX = .95;
  bgEntrance.scaleY = .96;
  stage.addChild(bgEntrance);

  // ドアノブ
  var bgKnob = new createjs.Bitmap("assets/images/bgKnob.svg");
  bgKnob.x = 945;
  bgKnob.y = 553;
  bgKnob.scaleX = .94;
  bgKnob.scaleY = .938;
  stage.addChild(bgKnob);

  // ドアノブPLAYボタン
  var bgKnobBtn = new createjs.Bitmap("assets/images/bgKnobBtn.svg");
  bgKnobBtn.x = 954;
  bgKnobBtn.y = 562;
  bgKnobBtn.scaleX = .8;
  bgKnobBtn.scaleY = .8;
  stage.addChild(bgKnobBtn);

  // はしごの手すり
  var bgHandrail = new createjs.Bitmap("assets/images/bgHandrail.svg");
  bgHandrail.x = 1063;
  bgHandrail.y = 270;
  bgHandrail.scaleX = .9;
  bgHandrail.scaleY = .925;
  stage.addChild(bgHandrail);

  // 柱ひだり
  var bgPillarLeft = new createjs.Bitmap("assets/images/bgPillarLeft.svg");
  bgPillarLeft.x = 690;
  bgPillarLeft.y = 349;
  bgPillarLeft.scaleX = .951;
  bgPillarLeft.scaleY = 1.05;
  stage.addChild(bgPillarLeft);

  // 柱みぎ
  var bgPillarRight = new createjs.Bitmap("assets/images/bgPillarRight.svg");
  bgPillarRight.x = 1152;
  bgPillarRight.y = 374;
  bgPillarRight.scaleX = .953;
  bgPillarRight.scaleY = 1.06;
  stage.addChild(bgPillarRight);

  // 道
  var bgRoad1 = new createjs.Bitmap("assets/images/bgRoad1.svg");
  bgRoad1.x = 650;
  bgRoad1.y = 643;
  bgRoad1.scaleX = .924;
  bgRoad1.scaleY = .936;
  stage.addChild(bgRoad1);

  // 屋根
  var bgRoofBase = new createjs.Bitmap("assets/images/bgRoofBase.svg");
  bgRoofBase.x = 660;
  bgRoofBase.y = 130;
  bgRoofBase.scaleX = .95;
  bgRoofBase.scaleY = .95;
  stage.addChild(bgRoofBase);

  // 屋根裏
  var bgAttic = new createjs.Bitmap("assets/images/bgAttic.svg");
  bgAttic.x = 900;
  bgAttic.y = 198;
  stage.addChild(bgAttic);

  // カップケーキのカップ
  var bgSecretBase = new createjs.Bitmap("assets/images/bgSecretBase.svg");
  bgSecretBase.x = 976;
  bgSecretBase.y = 175;
  bgSecretBase.scaleX = 1;
  bgSecretBase.scaleY = 1;
  stage.addChild(bgSecretBase);

  // カップケーキのスポンジ
  var bgSecretSponge = new createjs.Bitmap("assets/images/bgSecretSponge.svg");
  bgSecretSponge.x = 944;
  bgSecretSponge.y = 37;
  bgSecretSponge.scaleX = 1;
  bgSecretSponge.scaleY = 1;
  stage.addChild(bgSecretSponge);

  // カップケーキのいちご
  var bgSecretBerry = new createjs.Bitmap("assets/images/bgSecretBerry.svg");
  bgSecretBerry.x = 1068;
  bgSecretBerry.y = 60;
  bgSecretBerry.scaleX = .98;
  bgSecretBerry.scaleY = 1;
  stage.addChild(bgSecretBerry);

  // 1階の窓
  var bgWindow = new createjs.Bitmap("assets/images/bgWindow.svg");
  bgWindow.x = 764;
  bgWindow.y = 421;
  bgWindow.scaleX = .95;
  bgWindow.scaleY = .951;
  stage.addChild(bgWindow);

  // 2階の窓
  var bgWindow2 = new createjs.Bitmap("assets/images/bgWindow2.svg");
  bgWindow2.x = 888;
  bgWindow2.y = 311.5;
  bgWindow2.scaleX = .96;
  bgWindow2.scaleY = .95;
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