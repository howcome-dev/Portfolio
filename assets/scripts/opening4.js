/*jshint esversion: 6 */

// 読み込みが終わってから初期化
window.addEventListener("load", init);

function init(){

  // Stageオブジェクトを作成。表示リストのルートになります。
  var stage = new createjs.Stage("set_layout");

  // タッチ操作をサポートしているブラウザーならば
  if (createjs.Touch.isSupported() == true) {
    // タッチ操作を有効にします。
    createjs.Touch.enable(stage);
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

  //----------------------------------------
  // パズルの土台を作成
  //----------------------------------------

  // とびら
  var bgEntrance = new createjs.Bitmap("assets/images/bgEntrance.svg");
  bgEntrance.x = 865;
  bgEntrance.y = 465;
  bgEntrance.scaleX = 0.95;
  bgEntrance.scaleY = 0.96;
  stage.addChild(bgEntrance);

  // ドアノブ
  var bgKnob = new createjs.Bitmap("assets/images/bgKnob.svg");
  bgKnob.x = 945;
  bgKnob.y = 553;
  bgKnob.scaleX = 0.94;
  bgKnob.scaleY = 0.938;
  stage.addChild(bgKnob);

  // ドアノブPLAYボタン
  var bgKnobBtn = new createjs.Bitmap("assets/images/bgKnobBtn.svg");
  bgKnobBtn.x = 954;
  bgKnobBtn.y = 562;
  bgKnobBtn.scaleX = 0.8;
  bgKnobBtn.scaleY = 0.8;
  stage.addChild(bgKnobBtn);

  // 柱ひだり
  var bgPillarLeft = new createjs.Bitmap("assets/images/bgPillarLeft.svg");
  bgPillarLeft.x = 690;
  bgPillarLeft.y = 349;
  bgPillarLeft.scaleX = 0.951;
  bgPillarLeft.scaleY = 1.05;
  stage.addChild(bgPillarLeft);

  // 柱みぎ
  var bgPillarRight = new createjs.Bitmap("assets/images/bgPillarRight.svg");
  bgPillarRight.x = 1152;
  bgPillarRight.y = 374;
  bgPillarRight.scaleX = 0.953;
  bgPillarRight.scaleY = 1.06;
  stage.addChild(bgPillarRight);

  // 基礎ひだり
  var bgBaseLeft = new createjs.Bitmap("assets/images/bgBaseLeft.svg");
  bgBaseLeft.x = 680;
  bgBaseLeft.y = 643;
  bgBaseLeft.scaleX = 0.97;
  bgBaseLeft.scaleY = 0.89;
  stage.addChild(bgBaseLeft);

  // 基礎みぎ
  var bgBaseRight = new createjs.Bitmap("assets/images/bgBaseRight.svg");
  bgBaseRight.x = 1040;
  bgBaseRight.y = 650;
  bgBaseRight.scaleX = 0.99;
  bgBaseRight.scaleY = 0.89;
  stage.addChild(bgBaseRight);

  // 屋根
  var bgRoofBase = new createjs.Bitmap("assets/images/bgRoofBase.svg");
  bgRoofBase.x = 660;
  bgRoofBase.y = 130;
  bgRoofBase.scaleX = 0.95;
  bgRoofBase.scaleY = 0.95;
  stage.addChild(bgRoofBase);

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
  bgSecretBerry.scaleX = 0.98;
  bgSecretBerry.scaleY = 1;
  stage.addChild(bgSecretBerry);

  // はしごの手すり
  var bgHandrail = new createjs.Bitmap("assets/images/bgHandrail.svg");
  bgHandrail.x = 1063;
  bgHandrail.y = 270;
  bgHandrail.scaleX = 0.9;
  bgHandrail.scaleY = 0.925;
  stage.addChild(bgHandrail);

  // 道
  var bgRoad1 = new createjs.Bitmap("assets/images/bgRoad1.svg");
  bgRoad1.x = 650;
  bgRoad1.y = 643;
  bgRoad1.scaleX = 0.924;
  bgRoad1.scaleY = 0.936;
  stage.addChild(bgRoad1);

  // 屋根裏
  var bgAttic = new createjs.Bitmap("assets/images/bgAttic.svg");
  bgAttic.x = 900;
  bgAttic.y = 198;
  stage.addChild(bgAttic);

  // 1階の窓
  var bgWindow = new createjs.Bitmap("assets/images/bgWindow.svg");
  bgWindow.x = 764;
  bgWindow.y = 421;
  bgWindow.scaleX = 0.95;
  bgWindow.scaleY = 0.951;
  stage.addChild(bgWindow);

  // 2階の窓
  var bgWindow2 = new createjs.Bitmap("assets/images/bgWindow2.svg");
  bgWindow2.x = 888;
  bgWindow2.y = 311.5;
  bgWindow2.scaleX = 0.96;
  bgWindow2.scaleY = 0.95;
  stage.addChild(bgWindow2);

  //----------------------------------------
  // パズルのピースを作成
  //----------------------------------------

  // とびら
  var entrance = new createjs.Bitmap("assets/images/entrance.svg");
  entrance.x = 256;
  entrance.y = 46;
  entrance.scaleX = 0.95;
  entrance.scaleY = 0.96;
  stage.addChild(entrance);

  // ドアノブ
  var knob = new createjs.Bitmap("assets/images/knob.svg");
  knob.x = 530;
  knob.y = 400;
  knob.scaleX = 0.94;
  knob.scaleY = 0.938;
  stage.addChild(knob);

  // ドアノブPLAYボタン
  var knobBtn = new createjs.Bitmap("assets/images/knobBtn.svg");
  knobBtn.x = 505;
  knobBtn.y = 650;
  knobBtn.scaleX = 0.8;
  knobBtn.scaleY = 0.8;
  stage.addChild(knobBtn);

  // 柱ひだり
  var pillarLeft = new createjs.Bitmap("assets/images/pillarLeft.svg");
  pillarLeft.x = 69;
  pillarLeft.y = 324;
  pillarLeft.scaleX = 0.951;
  pillarLeft.scaleY = 1.05;
  stage.addChild(pillarLeft);

  // 柱みぎ
  var pillarRight = new createjs.Bitmap("assets/images/pillarRight.svg");
  pillarRight.x = 115;
  pillarRight.y = 27;
  pillarRight.scaleX = 0.953;
  pillarRight.scaleY = 1.06;
  stage.addChild(pillarRight);

  // 基礎ひだり
  var baseLeft = new createjs.Bitmap("assets/images/baseLeft.svg");
  baseLeft.x = 10;
  baseLeft.y = 13;
  baseLeft.scaleX = 0.97;
  baseLeft.scaleY = 0.89;
  stage.addChild(baseLeft);

  // 基礎みぎ
  var baseRight = new createjs.Bitmap("assets/images/baseRight.svg");
  baseRight.x = 340;
  baseRight.y = 200;
  baseRight.scaleX = 0.99;
  baseRight.scaleY = 0.89;
  stage.addChild(baseRight);

  // 屋根
  var roofBase = new createjs.Bitmap("assets/images/roofBase.svg");
  roofBase.x = 66;
  roofBase.y = 253;
  roofBase.scaleX = 0.95;
  roofBase.scaleY = 0.95;
  stage.addChild(roofBase);

  // カップケーキのカップ
  var secretBase = new createjs.Bitmap("assets/images/secretBase.svg");
  secretBase.x = 129;
  secretBase.y = 217;
  secretBase.scaleX = 1;
  secretBase.scaleY = 1;
  stage.addChild(secretBase);

  // カップケーキのスポンジ
  var secretSponge = new createjs.Bitmap("assets/images/secretSponge.svg");
  secretSponge.x = 94;
  secretSponge.y = 3;
  secretSponge.scaleX = 1;
  secretSponge.scaleY = 1;
  stage.addChild(secretSponge);

  // カップケーキのいちご
  var secretBerry = new createjs.Bitmap("assets/images/secretBerry.svg");
  secretBerry.x = 386;
  secretBerry.y = 606;
  secretBerry.scaleX = 0.98;
  secretBerry.scaleY = 1;
  stage.addChild(secretBerry);

  // はしごの手すり
  var handrail = new createjs.Bitmap("assets/images/handrail.svg");
  handrail.x = 106;
  handrail.y = 27;
  handrail.scaleX = 0.9;
  handrail.scaleY = 0.925;
  stage.addChild(handrail);

  // 道
  var road1 = new createjs.Bitmap("assets/images/road1.svg");
  road1.x = 65;
  road1.y = 64;
  road1.scaleX = 0.924;
  road1.scaleY = 0.936;
  stage.addChild(road1);

  // 屋根裏
  var attic = new createjs.Bitmap("assets/images/attic.svg");
  attic.x = 90;
  attic.y = 19;
  stage.addChild(attic);

  // // 1階の窓
  // var window = new createjs.Bitmap("assets/images/window.svg");
  // window.x = 76;
  // window.y = 42;
  // window.scaleX = 0.95;
  // window.scaleY = 0.951;
  // stage.addChild(window);

  // // 2階の窓
  // var window2 = new createjs.Bitmap("assets/images/window2.svg");
  // window2.x = 88;
  // window2.y = 31;
  // window2.scaleX = 0.96;
  // window2.scaleY = 0.95;
  // stage.addChild(window2);

  // tick イベントを監視します
  createjs.Ticker.on("tick", function () {
    // Stageの描画を更新します
    stage.update();
  });

  //----------------------------------------
  // マウスイベントを登録
  //----------------------------------------
  entrance.addEventListener("mousedown", handleMouseDown);
  knob.addEventListener("mousedown", handleMouseDown);
  knobBtn.addEventListener("mousedown", handleMouseDown);
  pillarLeft.addEventListener("mousedown", handleMouseDown);
  // pillarRight.addEventListener("mousedown", handleMouseDown);
  //baseLeft.addEventListener("mousedown", handleMouseDown);
  //baseRight.addEventListener("mousedown", handleMouseDown);
  // handrail.addEventListener("mousedown", handleMouseDown);
  // road1.addEventListener("mousedown", handleMouseDown);
  // roofBase.addEventListener("mousedown", handleMouseDown);
  // attic.addEventListener("mousedown", handleMouseDown);
  // secretBase.addEventListener("mousedown", handleMouseDown);
  // secretSponge.addEventListener("mousedown", handleMouseDown);
  // secretBerry.addEventListener("mousedown", handleMouseDown);
  // window.addEventListener("mousedown", handleMouseDown);
  // window2.addEventListener("mousedown", handleMouseDown);

  function handleMouseDown(event) {
    
    // currentTarget を使うことで、どれがマウスダウンされたか判別できる
    var piece = event.currentTarget;

    // 目標の対象を判定する
    var targetBase;

    // マウスダウンされたものの形状にあわせて、目標のシェイプを選定
    if (piece == entrance) {
      targetBase = bgEntrance;
    }
    if (piece == knob) {
      targetBase = bgKnob;
    }
    if (piece == knobBtn) {
      targetBase = bgKnobBtn;
    }
    if (piece == pillarLeft) {
      targetBase = bgPillarLeft;
    }
    // if (piece == baseLeft) {
    //   targetBase = bgBaseLeft;
    // }
    // if (piece == baseRight) {
    //   targetBase = bgBaseRight;
    // }
    // if (piece == handrail) {
    //   targetBase = bgHandrail;
    // }
    // if (piece == pillarRight) {
    //   targetBase = bgPillarRight;
    // }
    // if (piece == road1) {
    //   targetBase = bgRoad1;
    // }
    // if (piece == roofBase) {
    //   targetBase = bgRoofBase;
    // }
    // if (piece == attic) {
    //   targetBase = bgAttic;
    // }
    // if (piece == secretBase) {
    //   targetBase = bgSecretBase;
    // }
    // if (piece == secretSponge) {
    //   targetBase = bgSecretSponge;
    // }
    // if (piece == secretBerry) {
    //   targetBase = bgSecretBerry;
    // }
    // if (piece == window) {
    //   targetBase = bgWindow;
    // }
    // if (piece == window2) {
    //   targetBase = bgWindow2;
    // }

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
      console.log(isHit);
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
}