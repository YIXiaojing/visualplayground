function Aquarium(w, h) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = w;
    this.canvas.height = h;
}
Aquarium.prototype.prepare = function () {
    var c = this.canvas,
        ctx = c.getContext('2d');

    var cw = c.width;
    var ch = c.height;

    // Rocks on bottom of tank
    for (var i = 0; i < cw*10; i++) {
        var xPos = FishUtility.rand(0, cw);
        var yPos = FishUtility.rand(ch-FishUtility.rand(65,72),ch);
        var size = FishUtility.rand(2,4);

        var grad = ctx.createRadialGradient(
            xPos, yPos, 0,
            xPos, yPos, size);
        var rc1 = "rgba("+Math.ceil(FishUtility.rand(90, 110))+","+Math.ceil(FishUtility.rand(50, 70))+",00,1)";
        var rc2 = "rgba("+Math.ceil(FishUtility.rand(34, 54))+","+Math.ceil(FishUtility.rand(27, 47))+","+Math.ceil(FishUtility.rand(19, 39))+",1)";
        grad.addColorStop(.4, rc1);
        grad.addColorStop(1, rc2);

        ctx.fillStyle = grad;
        FishUtility.circle(ctx, xPos, yPos, size);
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#2f251c";
        ctx.stroke();
    }
};
Aquarium.prototype.render = function(ctx) {
    var c = this.canvas;
    ctx.drawImage(c, 0, 0, c.width, c.height);
};

Aquarium.prototype.viewport = function(w,h){
    this.canvas.width = w;
    this.canvas.height = h;
}

//

Bubbles.all = []
function Bubbles(x, y, s, d) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = view.canvas.width;
    this.canvas.height = view.canvas.height;
    this.x = x;
    this.y = y;
    this.s = FishUtility.rand(s*.9, s*1.1);
    this.prepare();
}

Bubbles.prototype._draw_bubble = function(c, ctx) {
    ctx.globalAlpha = .15;
    var offset = this.s+5;
    FishUtility.circle(ctx, offset, offset, this.s);
    ctx.fillStyle = "#FFF";
    ctx.fill();
    ctx.strokeStyle = "#77c1ff";
    ctx.globalAlpha = .3;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#FFF";
    ctx.globalAlpha = .15;
    ctx.fillRect(offset*0.7,
        offset*0.7,
        this.s*.4,
        this.s*.4);

}
Bubbles.prototype.prepare = function () {
    var c = this.canvas,
        ctx = c.getContext('2d');

    this._draw_bubble(c, ctx);
}
Bubbles.prototype.render = function(ctx) {
    var c = this.canvas;

    if(this.y < 0) {
        this.y = Math.floor(FishUtility.rand(view.canvas.height-20,view.canvas.height));
        this.x = Math.floor(FishUtility.rand(view.canvas.width-80,view.canvas.width-90));
    } else {
        this.y = Math.floor(FishUtility.rand(this.y-2,this.y-5));
        this.x = Math.floor(FishUtility.rand(this.x-1,this.x+2));
    }
    ctx.drawImage(c, this.x , this.y);
}

//

// !Fish

function Fish(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.z = ~~FishUtility.rand(1, 3.9);
    this.w = w;
    this.h = h;
    this.s = FishUtility.rand(0, 3);
    this.d = 1;
    this.vertDir = 0;
    this.stopped = 0;
    this.canvas = [];

    this._fingerprint();

    for (var i = 0; i < Fish.frames; i++) {
        this.prepare(i);
    }
    this.prepare(Fish.frames);

    //
}
Fish.frames = 60;
Fish.all = [];
Fish.prototype._fingerprint = function() {
    this.fins = [];
    var h_space = 10;
    this.fingerprint = {
        nx: this.w - h_space,							// Nose X
        ny: this.h * .5,					// Nose Y
        fb: this.w * FishUtility.rand(.3, .75),			// Front body bulge X
        rb: this.w * FishUtility.rand(.15, .25),		// Rear body bulge X
        f: this.h * FishUtility.rand(0, 0.35),			// Fat Y
        px: h_space,						// Tail point X
        pt: this.h * FishUtility.rand(0.25, .75),		// Tail point distance
        tc: this.h * FishUtility.rand(0, 0.4),			// Tail cut center size
        td: this.w * FishUtility.rand(0, .2),			// Tail depth
        grad: ~~FishUtility.rand(0, 5),
        fins: []
    };
    var fin_space = this.w - this.fingerprint.rb;
    for (var i = ~~FishUtility.rand(0, 5); i > 0; i--) {
        var f = {
            s: this.w - fin_space * FishUtility.rand(.1, .3),		// Start point
            y: this.h * FishUtility.rand(0, 1),		// direction / multiplier
            l: fin_space * FishUtility.rand(.2, .5)		// Length of each point
        }
        this.fingerprint.fins.push(f);
    }
    this.fingerprint.eye = {
        h: this.h * FishUtility.rand(.04, .15),				// Eye height
        x: this.w * .8,	// Eye X
        s: this.h * FishUtility.rand(.05, .10) 			// Eye size
    };
    this.fingerprint.pupil = {
        s: this.fingerprint.eye.s * FishUtility.rand(.5, .8),				// Pupil size
        a: FishUtility.rand(0, Math.PI * 2)				// Pupil angle
    };
    this.fingerprint.pupil.o = (this.fingerprint.eye.s - this.fingerprint.pupil.s) * FishUtility.rand(.2, .5);	// Pupil offset from center
};
Fish.prototype._draw_shape = function(c, ctx, b, frame) {
    var angle = ((Math.PI * 2) / (Fish.frames)) * frame,
        r = this.w * 0.1;
    var top_pt = [b.px + r * Math.cos(angle), b.pt], // + r * Math.sin(angle)],
        bottom_pt = [b.px + r * Math.cos(angle + Math.PI * .5), c.height - b.pt]; // + r * Math.sin(angle * Math.PI)];

    ctx.beginPath();
    ctx.moveTo(b.nx, b.ny);					// Nose
    ctx.bezierCurveTo(						// Nose -> Top tail point
        b.fb, c.height + b.f,
        b.rb, c.height * .15,
        top_pt[0], top_pt[1]				// Top tail point
    );
    ctx.bezierCurveTo(						// Top tail point -> Bottom tail point
        b.td, c.height * .5 - b.tc,
        b.td, c.height * .5 + b.tc,
        bottom_pt[0], bottom_pt[1]				// Bottom tail point
    );
    ctx.bezierCurveTo(						// Bottom tail point -> Nose
        b.rb, c.height - c.height * .15,
        b.fb, -b.f,
        b.nx, b.ny
    );
    var grad = this._build_gradients(c, ctx, b);
    if (ctx.globalCompositeOperation) ctx.fillStyle = "#FFF";
    else ctx.fillStyle = grad[b.grad];
    ctx.fill();
};
Fish.prototype._draw_profile = function(c, ctx, b, frame) {
    var angle = ((Math.PI * 2) / (Fish.frames)) * frame,
        r = this.w * 0.1;
    var top_pt = [b.px + r * Math.cos(angle), b.pt], // + r * Math.sin(angle)],
        bottom_pt = [b.px + r * Math.cos(angle + Math.PI * .5), c.height - b.pt]; // + r * Math.sin(angle * Math.PI)];
    ctx.save();
    ctx.translate(c.width* .15,0);
    ctx.scale(.2,1);
    FishUtility.circle(ctx, c.width*.5, c.height * .5, this.h*.3);
    var grad = this._build_gradients(c, ctx, b);
    ctx.restore();
    ctx.fillStyle = grad[b.grad];
    ctx.fill();

};
Fish.prototype._draw_fins = function(c, ctx, b, frame) {
    var angle = ((Math.PI * 2) / (Fish.frames)) * frame,
        r = this.w * .025;
    var dx = r * Math.cos(angle);

    ctx.globalCompositeOperation = 'destination-over';
    for (var i in b.fins) {
        var f = b.fins[i];
        var grad = ctx.createLinearGradient(0.5 * c.width, 0, 0.5 * c.width, c.height);
        grad.addColorStop(0, 'rgba(255,255,255,.35)');
        grad.addColorStop(.5, 'rgba(255,255,255,.2)');
        grad.addColorStop(1, 'rgba(255,255,255,.6)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(f.s, c.height * .5);
        ctx.quadraticCurveTo(
            f.s - f.l * .5, f.y,
            f.s - f.l * 1.35 - dx, f.y
        );
        ctx.lineTo(
            f.s - f.l, c.height * .5
        );
        ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
};
Fish.prototype._draw_scales = function(canvas, target_ctx, b) {
    var c = document.createElement('canvas'),
        ctx = c.getContext('2d');
    c.width = canvas.width;
    c.height = canvas.height;

    var scale_size = this.h/10;
    ctx.strokeStyle = '#000';
    for (var x = 0; x < c.width * 2 / scale_size; x += 1) {
        for (var y = 0; y < c.height / scale_size; y += 1) {
            FishUtility.circle(ctx,
                x * scale_size * .5,
                y * scale_size + scale_size * .5 * (x % 2),
                scale_size * .5 - 1
            );
            FishUtility.glow(ctx, 3, '#000');
            var opacity = (1 - (Math.abs((y * scale_size) - c.height * .5) / (c.height * .5)) * 1.25);
            opacity *= (1 - Math.abs((x * scale_size * .5) - c.width * .6) / (c.width * .7)) * 1.25;
            ctx.fillStyle = 'rgba(255,255,255,' + opacity + ')';
            ctx.fill();

        }
    }

    target_ctx.globalCompositeOperation = 'source-atop';
    target_ctx.drawImage(c, 0, 0, c.width, c.height);
    target_ctx.globalCompositeOperation = 'source-over';
};
Fish.prototype._draw_colors = function(c, ctx, b) {
    var grad = this._build_gradients(c, ctx, b);

    ctx.globalAlpha = 0.9;
    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = grad[b.grad];
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.globalAlpha = 1;
};
Fish.prototype._build_gradients = function(c, ctx, b) {
    var cw = c.width;
    var ch = c.height;
    var grad = [];

    grad[0] = ctx.createRadialGradient(
        0.64 * cw, 0.45 * ch, cw * .1,
        0.5 * cw, 0.5 * ch, cw * .8
    );
    FishUtility.gcs(grad[0],0,255,204,0,.7)
    FishUtility.gcs(grad[0],.25,230, 152, 0, .9)
    FishUtility.gcs(grad[0],.8,146,62,0,1)

    grad[1] = ctx.createRadialGradient(
        0.64 * cw, 0.7 * ch, cw * .1,
        0.5 * cw, 0.5 * ch, cw * .8
    );
    FishUtility.gcs(grad[1],.6,129,153,33,.9);
    FishUtility.gcs(grad[1],.45,252,229,127,1);
    FishUtility.gcs(grad[1],.3,232,135,20,.8);
    FishUtility.gcs(grad[1],0,67,106,103,1);

    grad[2] = ctx.createLinearGradient(
        0, ch * .45, cw, ch
    );
    FishUtility.gcs(grad[2],.3,254,186,18,.9)
    FishUtility.gcs(grad[2],.32,0,0,0,.7);
    FishUtility.gcs(grad[2],.35,255,255,255,.9);
    FishUtility.gcs(grad[2],.43,255,255,255,.9);
    FishUtility.gcs(grad[2],.45,0,0,0,.7);
    FishUtility.gcs(grad[2],.47,254,186,18,.9);
    FishUtility.gcs(grad[2],.55,254,186,18,.9);
    FishUtility.gcs(grad[2],.57,0,0,0,.7);
    FishUtility.gcs(grad[2],.60,255,255,255,.9);
    FishUtility.gcs(grad[2],.62,255,255,255,.9);
    FishUtility.gcs(grad[2],.64,0,0,0,.7);
    FishUtility.gcs(grad[2],.66,254,186,18,.9);

    grad[3] = ctx.createRadialGradient(
        0.8 * cw, ch, cw * .1,
        0.8 * cw, ch, cw * .8
    );
    FishUtility.gcs(grad[3],0,255,255,255,.9);
    FishUtility.gcs(grad[3],.65,128,128,128,.9);
    FishUtility.gcs(grad[3],.7,0,0,0,.7);
    FishUtility.gcs(grad[3],.75,255,255,255,.5);
    FishUtility.gcs(grad[3],.8,255,255,255,.5);
    FishUtility.gcs(grad[3],.95,128,128,128,.8);

    grad[4] = ctx.createRadialGradient(
        0.8 * cw, .5 * ch, cw * .1,
        0.8 * cw, .5 * ch, cw * .6
    );
    FishUtility.gcs(grad[4],.3,200,0,0,.9);
    FishUtility.gcs(grad[4],.4,255,100,0,.8);
    FishUtility.gcs(grad[4],.75,255, 0,0,.9);
    FishUtility.gcs(grad[4],1,200,0,0,.7);
    return grad;
}
Fish.prototype._de = function(c, ctx, b, offset) {
    var grad = ctx.createRadialGradient(
        b.eye.x, c.height * .5 - b.eye.h, 0,
        b.eye.x, c.height * .5 - b.eye.h, b.eye.s);
    FishUtility.gcs(grad,.7,255,255,255,1);
    FishUtility.gcs(grad,1,255,255,255,.5);

    ctx.fillStyle = grad;
    FishUtility.circle(ctx, b.eye.x-offset, c.height * .5 - b.eye.h, b.eye.s);
    FishUtility.glow(ctx, 5, 'rgba(0,0,0,.7)');
    ctx.fill();
    FishUtility.glow(ctx, 0, '');

    ctx.fillStyle = '#000';
    FishUtility.circle(ctx, b.eye.x + Math.cos(b.pupil.a) * b.pupil.o-offset, c.height * .5 - b.eye.h + Math.sin(b.pupil.a) * b.pupil.o, b.pupil.s);
    ctx.fill();
};
Fish.prototype._draw_glow = function(c, ctx, b, frame) {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalCompositeOperation = 'destination-over';
    //FishUtility.glow(ctx, 30, 'rgba(255,255,255,0.35)');
    FishUtility.glow(ctx, 10, 'rgba(0,0,0,0.2)');
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 7;
    this._draw_shape(c, ctx, b, frame);
    ctx.globalCompositeOperation = 'source-over';
};
Fish.prototype.prepare = function(frame) {
    this.canvas[frame] = document.createElement('canvas');
    this.canvas[frame].width = this.w;
    this.canvas[frame].height = this.h;

    var c = this.canvas[frame],
        ctx = c.getContext('2d'),
        b = this.fingerprint;

    if (frame == Fish.frames) {
        this._draw_profile(c, ctx, b, frame);
        this._de(c, ctx, b,c.width/2);
        this._de(c, ctx, b,b.eye.s*2+c.width/2);
    } else {
        this._draw_shape(c, ctx, b, frame);
        this._draw_scales(c, ctx, b);
        this._draw_colors(c, ctx, b);
        this._draw_glow(c, ctx, b, frame);
        this._draw_fins(c, ctx, b, frame);
        this._de(c, ctx, b,0);
    }
};

Fish.prototype.render = function(ctx, frame) {
    var c = this.canvas[frame];
    if (this.x >= view.canvas.width - c.width - 5 && this.stopped == 0) {
        this.d = (this.d == 1) ? 0 : 1;
        this.x = 0;
        this.stopped = 1;
    }

    if (this.stopped > 20 && FishUtility.rand(-2, 1) > 0) {
        this.stopped = 0;
        c = this.canvas[frame];
    } else if (this.stopped > 0){
        this.stopped++;
        c = this.canvas[Fish.frames];
    }

    if (frame == 2) {
        if (this.y > 50 && this.y < view.canvas.height - 175) this.vertDir = FishUtility.rand(-1,1);
        else if (this.y < 50) this.vertDir = 2;
        else this.vertDir = -2;
        if (FishUtility.rand(-1, 1) > 0) this.s = FishUtility.rand(this.s-1, this.s+1);
        if (FishUtility.rand(-1, 15) < 0) {
            this.d = (this.d == 1) ? 0 : 1;
            this.x = view.canvas.width - this.x - c.width;
            this.stopped = 1
        }
    }

    if (this.s < 1) this.s = 1
    if (this.s > 5) this.s = 3
    if (frame < Fish.frames && this.stopped == 0) this.x += this.s;

    if (frame < Fish.frames) this.y += this.vertDir;
    ctx.save();


    if (!this.d) {
        ctx.translate(view.canvas.width,1);
        ctx.scale(-1,1);
    }

    ctx.drawImage(c, this.x, this.y);
    ctx.restore();
};

//

function Plant(z) {
    //this.canvas = document.createElement('canvas');
    //this.canvas.width = view.canvas.width;
    //this.canvas.height = view.canvas.height;
    this.x = ~~FishUtility.rand(35,view.canvas.width-35);
    this.y = ~~FishUtility.rand(view.canvas.height-100,view.canvas.height-150);
    this.z = ~~FishUtility.rand(1, 2.9);
    this.h = view.canvas.height;
    this.canvas = [];

    this._fingerprint(this.h);

    for (var i = 0; i < Plant.frames; i++) {
        this.prepare(i);
    }
    // Don't need, I only did this with Fish to build extra "profile" frame
    // this.prepare(Plant.frames);

    Plant.all.push(this);
}
Plant.frames = 26;
Plant.all = [];


Plant.prototype._fingerprint = function(h) {
    this.main = {
        bottom: Math.floor(FishUtility.rand(h-20,h)),
        xpos: this.x,
        top: this.y

    }

    this.stem = {
        stemThickness: 7,
        randx1: ~~FishUtility.rand(this.main.xpos-35,this.main.xpos),
        randx2: ~~FishUtility.rand(this.main.xpos+35,this.main.xpos),
        curve: this.main.top-this.main.bottom
    }

    this.leaf1 = {
        rleafx: this.stem.randx1+ ~~FishUtility.rand(-100,100),
        rleafy: this.main.top- ~~FishUtility.rand(100, 400),
        rleafcurveup: this.main.top,
        rleafx2: this.stem.randx1+ ~~FishUtility.rand(-100,100),
        rleafy2: this.main.top- ~~FishUtility.rand(100, 400),
        rleafcurveup2: this.main.top,
        rleafx3: this.stem.randx1+ ~~FishUtility.rand(-100,100),
        rleafy3: this.main.top- ~~FishUtility.rand(100, 400),
        rleafcurveup3: this.main.top

    }

    this.leaf2 = {
        rleafup: this.stem.randx1+ ~~((this.leaf1.rleafx-this.stem.randx1)/7),
        rleafback: this.stem.randx1,
        rleafcurveback:this.main.top- ~~((this.main.top-this.leaf1.rleafy)/6),
        rleafup2: this.stem.randx1+ ~~((this.leaf1.rleafx-this.stem.randx1)/7),
        rleafback2: this.stem.randx1,
        rleafcurveback2:this.main.top- ~~((this.main.top-this.leaf1.rleafy)/6),
        rleafup3: this.stem.randx1+ ~~((this.leaf1.rleafx-this.stem.randx1)/7),
        rleafback3: this.stem.randx1,
        rleafcurveback3:this.main.top- ~~((this.main.top-this.leaf1.rleafy)/6)
    }


}

Plant.prototype._draw_plant = function(c, ctx, w, h, m, s) {


    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#365B31";

    ctx.strokeStyle = "#0A520A";
    var lineCap = 'round';
    ctx.lineCap = lineCap;
    ctx.lineWidth = s.stemThickness ;

    ctx.beginPath();

    ctx.moveTo(m.xpos,m.bottom);
    ctx.bezierCurveTo(s.randx1,m.bottom-s.curve,s.randx2,m.top-(s.curve*2),s.randx1,m.top);
    ctx.stroke();

    ctx.globalCompositeOperation = "source-over";
}


Plant.prototype._draw_leaf = function(c, ctx, m, s, l1, l2, frame)	{

    ctx.lineWidth = 1;
    ctx.beginPath();

    ctx.moveTo(s.randx1,m.top);

    var framerev = frame;

    //if (frame % 2 == 0){
    if (frame<13)	{
        framerev = frame;

    }
    else	{
        framerev = 26-frame;

    }
    //}

    ctx.quadraticCurveTo(l2.rleafup-(~~framerev/2),l1.rleafcurveup-(~~framerev/6),l1.rleafx+(~~framerev/2),l1.rleafy+(~~framerev/6));
    ctx.quadraticCurveTo(l2.rleafback-(~~framerev/2),l2.rleafcurveback-(~~framerev/6),s.randx1,m.top);

    ctx.quadraticCurveTo(l2.rleafup2-(~~framerev/2),l1.rleafcurveup2-(~~framerev/6),l1.rleafx2+(~~framerev/3),l1.rleafy2+(~~framerev/8));
    ctx.quadraticCurveTo(l2.rleafback2-(~~framerev/2),l2.rleafcurveback2-(~~framerev/6),s.randx1,m.top);

    ctx.quadraticCurveTo(l2.rleafup3-(~~framerev/2),l1.rleafcurveup3-(~~framerev/6),l1.rleafx3+(~~framerev/3),l1.rleafy3+(~~framerev/8));
    ctx.quadraticCurveTo(l2.rleafback3-(~~framerev/2),l2.rleafcurveback3-(~~framerev/6),s.randx1,m.top);

    ctx.fillStyle = "#003300";
    ctx.fill();

    ctx.strokeStyle = "#0A520A";
    ctx.stroke();

    ctx.globalCompositeOperation = "source-over";
}

Plant.prototype.prepare = function (frame) {

    this.canvas[frame] = document.createElement('canvas');
    this.canvas[frame].width = view.canvas.width;
    this.canvas[frame].height = view.canvas.height;

    var c = this.canvas[frame],
        ctx = c.getContext('2d');
    var m = this.main;
    var s = this.stem;
    var l1 = this.leaf1;
    var l2 = this.leaf2;

    this._draw_plant(c, ctx, c.width , c.height, m, s);
    this._draw_leaf(c, ctx, m, s, l1, l2, frame);

}

Plant.prototype.render = function(ctx, frame) {
    var c = this.canvas[frame];
    //ctx.drawImage(c, this.x, this.y);
    ctx.drawImage(c, 0, 0);
}

//

function FishUtility(){
}

FishUtility.rand = function(a, b) {
    return Math.random() * (b - a) + a;
}

FishUtility.circle = function(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(
        x, y,
        r, 0, Math.PI * 2,
        false
    );
}

// When precomputing, seems to lock transparency so you can't do this in the original sprites =(
FishUtility.glow = function(ctx, dist, color) {
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = dist;
    ctx.shadowColor = color;
}

FishUtility.gcs = function(grad,p,r,g,b,a) {
    grad.addColorStop(p, 'rgba('+r+','+g+','+b+','+a+')');
}

FishUtility.ma = function(o,n) {
    var fn = o ? o[n] : null;
    if (typeof fn == 'undefined') return function () {}
    return function () {return fn.apply(o, arguments)}
}

//

// !View
function View(el) {
    this.canvas = el
    this.ctx = this.canvas.getContext('2d');

    //var canvas = document.getElementById('view');
    // this.ctx.canvas.width = window.innerWidth;
    // this.ctx.canvas.height = window.innerHeight;
}
View.prototype.resize = function(w, h) {
    this.canvas.width = w;
    this.canvas.height = h;
};
View.prototype.clear = function() {
    this.canvas.width = this.canvas.width;
};

//

function Water(f, x, y, h, w) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = view.canvas.width;
    this.canvas.height = view.canvas.height;
    this.f = f;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.m = 0;
    this.p = x;
    this.prepare();
    Water.all.push(this);
}
Water.all = [];
Water.prototype._draw_water = function(c, ctx) {

    ctx.globalAlpha = .4;
    ctx.strokeStyle = "#157dd2";
    ctx.lineWidth = 3;
    for(var i = this.x; i < c.width; i += this.w) {
        ctx.moveTo(i, this.y);
        ctx.bezierCurveTo(
            i + this.w*.2, this.y + this.h,
            i + this.w*.8, this.y + this.h,
            i + this.w, this.y
        );
    }
    ctx.lineTo(c.width, c.height);
    ctx.lineTo(0, c.height);
    ctx.lineTo(0, this.y);

    ctx.stroke();

    var grad = ctx.createLinearGradient(0.5 * c.width, 0, 0.5 * c.width, c.height);
    grad.addColorStop(0, '#67c1e9');
    grad.addColorStop(.04, '#65c1e9');
    grad.addColorStop(.5, '#7dcbec');
    grad.addColorStop(1, '#2d95ea');

    ctx.fillStyle = grad;
    ctx.fill();
    ctx.globalCompositeOperation = "destination-over";
}
Water.prototype.prepare = function () {
    var c = this.canvas,
        ctx = c.getContext('2d');

    this._draw_water(c, ctx);
};
Water.prototype.render = function(ctx, frame) {
    var c = this.canvas;

    if (this.m > this.f) this.m = 0;
    if (this.m > this.f / 2) this.p = this.m - ((this.m - this.f / 2) * 2) + this.x;
    else this.p = this.m + this.x;
    this.m++;

    ctx.drawImage(c, this.p - 60, 0, c.width+120, c.height);
};