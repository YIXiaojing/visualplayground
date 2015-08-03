var drawCircle = function(stage, circleLayout, color){
    var circle = new createjs.Shape();
    circle.graphics.beginFill(color).drawCircle(circleLayout.x, circleLayout.y, circleLayout.r);
    stage.addChild(circle);
};

var drawComplexRect = function (stage, rectlayout, color) {
    var rect = new createjs.Shape();
    rect.graphics
        .beginFill(color)
        .drawRoundRectComplex(rectlayout.x, rectlayout.y, rectlayout.width, rectlayout.height,
        rectlayout.radiusTL, rectlayout.radiusTR, rectlayout.radiusBR, rectlayout.radiusBL);
    stage.addChild(rect);
};

var drawRect = function(stage, rectLayout, color){
    var rect = new createjs.Shape();
    rect.graphics
        .beginFill(color)
        .drawRect(rectLayout.x, rectLayout.y , rectLayout.width, rectLayout.height);
    stage.addChild(rect);
}

var drawText = function(layout, stage, fontSize, color){
    var text = new createjs.Text(layout.text, fontSize + "px san-serif", color);
    text.x = layout.x;
    text.y = layout.y;
    text.textBaseline = "alphabetic";

    stage.addChild(text);
};

var measureText = function(txt, c, fontSize){
    var ctx = c.getContext("2d");
    ctx.font = fontSize + "px san-serif";
    return ctx.measureText(txt)
}
