function main() {
    // clear view for re-render of objects
    view.clear();

    // render water
    for (var i in Water.all) Water.all[i].render(view.ctx);

    // render plants on level 1
    for (var i in Plant.all)
        if(Plant.all[i].z == 1) Plant.all[i].render(view.ctx, pframe);

    // render bubbles
    for (var i in Bubbles.all) Bubbles.all[i].render(view.ctx);

    // render fish
    for (var i in fishes) {
        if(all_stopped > 0) fishes[i].render(view.ctx, Fish.frames);
        else fishes[i].render(view.ctx, frame);

    }

    // render plants on level 2
    for (var i in Plant.all)
        if(Plant.all[i].z == 2) Plant.all[i].render(view.ctx, pframe);

    // render aquarium environment	
    aquarium.render(view.ctx);

    // increment frame counters
    frame = (frame + 1) % Fish.frames;
    pframe = (pframe + 1) % Plant.frames;
    overall_frames = (pframe + 1) % 100;
    if (all_stopped > 0) all_stopped++
    if (all_stopped > 75) all_stopped = 0

}

// setup frame counter variables
var frame,pframe,overall_frames,all_stopped;
frame = pframe = overall_frames = all_stopped = 0;

var addFish = 1;

var view,aquarium;

var fishes = [];
view = new View(document.getElementById('view'));

aquarium = new Aquarium(view.canvas.width,view.canvas.height);
aquarium.prepare();

// frames, x offset, y offset, wave height, wave length
new Water(55, -13, 30, 15, 55);
new Water(50, -13, 32, 10, 50);

//new Plant(1);
//new Plant(1);
// new Plant(1);
// new Plant(1);
// new Plant(2);
// new Plant(2);
// new Plant(2);

for (var i = view.canvas.height; i > 0 ; i-=Math.floor(FishUtility.rand(10,35))) {
    Bubbles.all.push(new Bubbles(FishUtility.rand(view.canvas.width-80,view.canvas.width-90), i, 8));
}

var f = function(){
    main();
    window.requestAnimationFrame(f)
};

window.requestAnimationFrame(f);

//setInterval(main, 1000 / 35);

function requestFish() {
   // all_stopped = 1;
    //addFish++;

    view.resize(300,300);
    aquarium.viewport(300,300)
    aquarium.prepare();
}

function newFish() {
    // x, y, length, width
    length = FishUtility.rand(60, 200);
    fishes.push(new Fish(FishUtility.rand(50,view.canvas.width*.7),
        FishUtility.rand(75,view.canvas.height-150),
        length,
        FishUtility.rand(length*.6, length*.9)));
}

newFish();newFish();newFish();newFish();newFish();newFish();