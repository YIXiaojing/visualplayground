var callbacks = [];
var forceLayoutIntervalId = 0;
var scatterIntervalId = 0;

window.requestAnimationFrame = function (callback) {
    callbacks.push(callback);
};

var flushAnimationFrames = function () {
    var now = Date.now;
    Date.now = function () {
        return Infinity;
    };
    callbacks.forEach(function (callback) {
        try {
            callback();
        } catch (e) {
            console.error(e);
        }
    });
    callbacks = [];
    Date.now = now;
};

var interText = 'Interpolators';

d3.interpolators.push(function(a, b) {
    var ma, mb;
    if (b === interText) {
        return function(t) {
            var s = "";
            for(var i=0; i< a.length;i++){
                ma = a.charCodeAt(i);
                mb = b.charCodeAt(i) - ma;

                s+= String.fromCharCode(ma + Math.round(mb * t));
            }

            return s;
        };
    }
});

stack()
    .on("activate", activate)
    .on("deactivate", deactivate);

$('section').css('visibility','visible');

var section = d3.selectAll("section"),
    cir = d3.select("#circles"),
    cirIndex = section[0].indexOf(cir.node());
    aniCir = d3.select("#aniCircles"),
    aniCirIndex = section[0].indexOf(aniCir.node()),
    theEnd = d3.select("#theend"),
    theEndIndex = section[0].indexOf(theEnd.node())
    theCanvas = d3.select("#canvas"),
    theCanvasIndex = section[0].indexOf(theCanvas.node()),
    interpolator = d3.select("#interpolator"),
    interpolatorIndex = section[0].indexOf(interpolator.node()),
    scatter = d3.select("#scatterPlot"),
    scatterIndex = section[0].indexOf(scatter.node());

//


createCircles();
createAxis();
createZoom();
createQuadTreeSearch();
enter();
update();
exit();
setUpClock();
expandSitePage();
createWebGL();

aniCir.on('click', function () {
        removeAnimatedCircles();
        createAnimatedCircles();
    }
)
;

theEnd.on('click', function () {
    killForceLayout();
    createForceLayout();
});

theCanvas.on('click', function () {
    destroyCanvas();
    setupCanvas();
});

function activate(d, i) {
    console.log('a: ' + i);
    if (i === aniCirIndex) {
        createAnimatedCircles();
    }
    else if (i === cirIndex) {
        //createCircles()
    } else if (i === theEndIndex) {
        createForceLayout();
    } else if (i === theCanvasIndex) {
        setupCanvas();
    }else if(i === interpolatorIndex){
        startInterpolator();
    }else if( i=== scatterIndex){
        createDots();
    }
}

function deactivate(d, i) {
    console.log('b: ' + i);
    if (i === aniCirIndex) {
        removeAnimatedCircles();
    } else if
    (i === cirIndex) { //removeCircles();
    } else if (i === theEndIndex) {
        killForceLayout();
    } else if (i === theCanvasIndex) {
        destroyCanvas();
    }else if( i=== scatterIndex){
        removeDots();
    }
}

function expandSitePage(){
    var site = $('#d3site');

    site.find('iframe').height(site.height()).width(site.width());
}

function stringFill(x, n) {
    var s = '';
    for (;;) {
        if (n & 1) s += x;
        n >>= 1;
        if (n) x += x;
        else break;
    }
    return s;
}

function startInterpolator(){
    d3.select('#interpolator h1')
        .data([interText])
        .style('color','white')
        .style('margin-left','0em')
        .text('A' + stringFill('a', interText.length - 1))
        .transition()
        .ease('bounce')
        .duration(3000)
        .style('color','#74c476')
        .style('margin-left','10em')
        .tween("text", function(d) {
            var i = d3.interpolate(this.textContent, d);

            return function(t) {
                this.textContent = i(t);
            };
        });
}

function createCircles() {
    var data = [10, 40, 30, 20, 60];
    var svg = d3.select('#svgCircles');

    var selection = svg.selectAll('.happycircles').data(data);
    selection
        .enter()
        .append('circle')
        .classed('happycircles', true);

    selection
        .attr({
            cx: function (d, i) {
                return (i + 1) * 100 * (1 / 32)
                    +
                    'em';
            },
            cy: 150 / 32 + 'em',
            r: function (d) {
                return d * 1 / 32 + 'em';
            }
            ,
            fill: 'purple'
        });
}

function removeCircles() {
    flushAnimationFrames();
    d3.select('#svgCircles').selectAll('*').remove();
}

function createAnimatedCircles() {
    var data = [10, 40, 30, 20,
        60];
    var svg = d3.select('#svgAniCircles');

    var selection = svg.selectAll('.happycircles').data(
        data);
    selection.enter().append(
        'circle')
        .attr({
            cx: 0,
            fill: '#ffffff'
        })
        .classed('happycircles', true);
    selection
        .transition(
    )
        .duration(5000)
        .attr(
        {
            cx: function (d, i) {

                return (i + 1) * 100 * (1 / 32) + 'em';
            },
            cy: 150 / 32 + 'em',
            r: function (d) {
                return d * 1 / 32 + 'em';
            },
            fill: 'purple'
        });
}

function removeAnimatedCircles() {
    flushAnimationFrames();
    d3.select(
        '#svgAniCircles').selectAll('*').remove();
}

function removeDots() {
    clearInterval(scatterIntervalId);
    flushAnimationFrames();
    $('#svgScatterPlot').empty();
}

function createAxis(){
    var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
    var svgAxis = $('#svgAxis');

    var margin = {top: 40, right: 40, bottom: 40, left: 40},
        width = svgAxis.width(),
        height = svgAxis.height();

    var svg = d3.select(svgAxis.get(0))
        .append("svg")
        .attr({
            "width": width,
            "height": height,
            "class": "dot chart"
        })
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + 0+ ")");

    var xScale = d3.scale.linear().domain([0, d3.max(data)]).
        range([0, width - margin.left - margin.right]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .tickPadding(8);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + 0+ ")")
        .call(xAxis);

}

function createDots() {

    var data = [
        {x: 10.0, y: 9.14, r: 0.4},
        {x: 8.0, y: 8.14, r: 0.4},
        {x: 13.0, y: 8.74, r: 0.4},
        {x: 9.0, y: 8.77, r: 0.4},
        {x: 11.0, y: 9.26, r: 0.4},
        {x: 14.0, y: 8.10, r: 0.4},
        {x: 6.0, y: 6.13, r: 0.4},
        {x: 4.0, y: 3.10, r: 0.4},
        {x: 12.0, y: 9.13, r: 0.4},
        {x: 7.0, y: 7.26, r: 0.4},
        {x: 5.0, y: 4.74, r: 0.4},
    ];

    var t = 1500;
    var scatter = $('#svgScatterPlot');
    var margin = {top: 40, right: 40, bottom: 40, left: 40},
        width = scatter.width(),
        height = scatter.height();

    var svg = d3.select(scatter.get(0))
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "dot chart")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xAxisG = svg.append("g")
        .attr("class", "x axis");

    var yAxisG = svg.append("g")
        .attr("class", "y axis");

    function renderScatter() {

        var xScale = pad(d3.scale.linear().domain(d3.extent(data,
            function (d) {
                return d.x;
            }))
            .range([0, width - margin.left - margin.right]), 40);

        var yScale = pad(d3.scale.linear().domain(d3.extent(data,
            function (d) {
                return d.y;
            }))
            .range([height - margin.top - margin.bottom, 0]), 40);

        var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .tickPadding(8);

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .tickPadding(8);

        var selection = svg.selectAll(".dot").data(data);

        selection.enter()
            .append("circle")
            .attr('opacity',0.8)
            .attr('fill','green')
            .attr("class", "dot")
            .attr('cy', yScale.range()[0])
            .attr("r",'0.4em');

        selection
            .transition()
            .duration(t)
            .attr('fill', 'purple')
            .attr("cx", function (d) {
                return xScale(d.x);
            })
            .attr("cy", function (d) {
                return yScale(d.y);
            })
            .attr("r", function(d){return d.r + 'em'});

        selection.exit()
            .transition()
            .duration(t)
            .attr('fill', 'red')
            .attr('opacity',0)
            .attr('r','3em')
            .remove();

        xAxisG
            .attr("transform", "translate(0," + yScale.range()[0] + ")")
            .transition()
            .duration(t)
            .call(xAxis);

        yAxisG
            .transition()
            .duration(t)
            .call(yAxis);

        function pad(scale, k) {
            var range
                = scale.range();
            if (range[0] >

                range[1]) k *= -1;
            return scale.domain([
                range[0] - k
                , range[1] + k].map(scale.invert)).nice();
        }
    }

    renderScatter();

    setInterval(function () {
        var i = Math.round(Math.random() * 10 + 2);

        data = [];

        for(var f=0; f < i;f++){
            data.push({
                x: Math.random() * 11,
                y: Math.random() * 20,
                r: Math.random() + 0.1
            })
        }

        renderScatter();

    }, 2500);
}

function createForceLayout() {
    var fly = $('#svgForce');
    var width = fly.width(),
        height = fly.height();
    var fill = d3.scale
        .category10()
        .range(["#C7F464", "#EB6841", "#F56991"]);

    var nodes = [],
        foci = [{
            x: width / 4, y: height /
            2
        }, {x: width / 4 * 2, y: height / 2}, {
            x: width / 4 * 3, y: height / 2
        }];

    var svg = d3.select(fly.get(0)).append("svg")
        .attr("width", width)
        .attr("height", height);

    var
        force = d3.layout.force()
            .nodes(nodes)
            .links([])
            .gravity(0)
            .size([width, height])
            .on("tick", tick
        );

    var node = svg.selectAll("circle");

    function tick(e) {
        var k = .1 * e.alpha;
        // Push nodes toward their designated focus.
        nodes.forEach(function (o, i) {
            o.y += ( foci[o.id].y - o.y) * k;
            o.x += (foci[o.id].x - o.x) * k;
        });

        node
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            });
    }

    forceLayoutIntervalId =
        setInterval(function () {
            nodes

                .push({
                    id: ~~(Math.random() *
                    foci.length)
                });
            force.start();

            node = node.data(nodes);

            node.enter().append("circle")
                .attr("class", "node")
                .attr("cx", function (d) {
                    return d.x;
                })
                .attr("cy", function (d) {
                    return d.y;
                })
                .attr("r", '0.25em')
                .

                style("fill", function (d) {
                    return fill(d.id);
                })
                .style("stroke", function (d) {
                    return d3.rgb(fill(d.id)).darker(2);
                })
                .call(force.drag);
        }, 250);
}

function killForceLayout() {
    clearInterval(forceLayoutIntervalId)
    ;
    var fly = $('#svgForce');

    fly.empty();
}

function exit() {
    d3.select("#exit div").call(joinChart().mode("exit"))
}

function enter() {
    d3.select("#enter div").
        call(joinChart
        ().mode("enter"))
}

function update() {
    d3.select("#update div").call(joinChart(

    ).mode("update"))
}

function joinChart() {
    var mode;

    function chart(selection) {
        var
            modes = {}; // mode can be space-separated, e.g., "enter update"
        mode.split(" ").forEach(function (m) {
            modes[
                m] = 1;
        });

        selection.each(
            function () {
                var exitDiv = $('#exit');
                var svg = d3.select(this).append("svg")
                    .attr("width", '35em')
                    .attr("height", '10em')
                    .attr("class", "join chart")
                    .append("g")
                    .attr("transform", "translate(" +
                    exitDiv.width(

                    ) / 2 + "," + exitDiv.height() / 3.5
                    + ")");
                var r1 = exitDiv.height() / 5;
                var r2 = exitDiv.height() / 6;

                svg.append("path")
                    .attr("d", "M0,-{R2}A{R1},{R1} 0 0 0 0,{R2}A{R1},{R1} 0 1 1 0,-{R2}"
                        .replace(/{R1}/g, r1)
                        .replace(/{R2}/g, r2))
                    .style("fill", "#9e9ac8")
                    .style("fill-opacity", "enter" in modes ? null : 0);

                svg.append("path")
                    .attr("d", "M0,-{R2}A{R1},{R1} 0 0 0 0,{R2}A{R1},{R1} 0 0 0 0,-{R2}"
                        .replace(/{R1}/g, r1)
                        .replace(/{R2}/g, r2))
                    .style("fill", "#e377c2")
                    .style("fill-opacity", "update" in modes ? null : 0);

                svg.append("path")
                    .attr("d", "M0,-{R2}A{R1},{R1} 0 1 1 0,{R2}A{R1},{R1} 0 0 0 0,-{R2}"
                        .replace(/{R1}/g, r1)
                        .replace(/{R2}/g, r2))
                    .style("fill", "#74c476")
                    .style("fill-opacity", "exit" in modes ? null : 0);

                svg.append("text")
                    .attr("x", -r1 / 2 * 1.25)
                    .attr("y", -r1 * 1.1)
                    .style("fill", "#fff")
                    .text("Data");

                svg.append("text")
                    .attr("x", r1 / 2 * 1.25)
                    .attr("y", -r1 * 1.1)
                    .style("fill", "#fff")
                    .text("Elements");

                svg.selectAll("path")
                    .style("stroke", "#fff")
                    .style("stroke-width", "0.1em");

                svg.selectAll("text")
                    .attr("text-anchor", "middle")
                    .style("font-size", "1em");
            });
    }

    chart.mode = function (_) {
        if (!arguments.length) return mode;
        mode = _ + "";
        return chart;
    };

    return chart;
}


function createSnake(){
    var snake = $('#svgSnake');
    var margin = {top: 40, right: 40, bottom: 40, left: 40},
        width = snake.width() - margin.left - margin.right,
        height = snake.height() - margin.top - margin.bottom;

    var y = d3.scale.ordinal()
        .domain(d3.range(50))
        .rangePoints([0, height]);

    var z = d3.scale.linear()
        .domain([10, 0])
        .range(["purple", "orange"])
        .interpolate(d3.interpolateHcl);

    var svg = d3.select(snake.get(0)).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.selectAll("circle")
        .data(y.domain())
        .enter().append("circle")
        .attr("r", 25)
        .attr("cx", 0)
        .attr("cy", y)
        .style("fill", function(d) { return z(Math.abs(d % 20 - 10)); })
        .transition()
        .duration(2500)
        .delay(function(d) { return d * 40; })
        .each(slide);

    function slide() {
        var circle = d3.select(this);
        (function repeat() {
            circle = circle.transition()
                .attr("cx", width)
                .transition()
                .attr("cx", 0)
                .each("end", repeat);
        })();
    }}

// Canvas rendering stuff

d3.ns.prefix.custom = "http://sachin";

var canvasDiv = $('#canvasDiv');
var canvasId = $('#canvas');

canvasDiv.height(canvasId.css('height'));
canvasDiv.width(canvasId.css('width'));

var w = canvasDiv.width(),
    h = canvasDiv.height(),
    surface;
var stopCanvasTimer;

function destroyCanvas() {
    stopCanvasTimer = true;
    canvasDiv.empty();
}

function setupCanvas() {
    stopCanvasTimer = false;
    surface = d3.select(canvasDiv.get(0)).append("custom:surface")
        .attr("width", w)
        .attr("height", h)
        .call(canvasRenderTarget);

}

function cloud(context, x, y, r, st, fill, sw) {
    context.save();
    context.beginPath();
    var factor = r / 200;
    var xf = x - (170 * factor) * 1.7;
    var yF = y - (80 * factor) * 1.5;
    context.moveTo(170 * factor + xf, 80 * factor + yF);
    context.bezierCurveTo(130 * factor + xf, 100 * factor + yF, 130 * factor + xf, 150 * factor + yF, 230 * factor + xf, 150 * factor + yF);
    context.bezierCurveTo(250 * factor + xf, 180 * factor + yF, 320 * factor + xf, 180 * factor + yF, 340 * factor + xf, 150 * factor + yF);
    context.bezierCurveTo(420 * factor + xf, 150 * factor + yF, 420 * factor + xf, 120 * factor
    + yF, 390 * factor + xf, 100 * factor + yF);
    context.bezierCurveTo(430 * factor + xf, 40 * factor + yF, 370 * factor + xf, 30 * factor + yF, 340 * factor + xf, 50 * factor + yF);
    context.bezierCurveTo(320 * factor + xf, 5 * factor + yF, 250 * factor + xf, 20 * factor + yF, 250 * factor + xf, 50 * factor + yF);
    context.bezierCurveTo(200 * factor + xf, 5 * factor + yF, 150 * factor + xf, 20 * factor + yF, 170 * factor + xf, 80 * factor + yF);
    context.closePath();
    context.lineWidth = sw;
    context.fillStyle = fill;
    context.fill();
    context.strokeStyle = st;
    context.stroke();
    context.restore();
}

function canvasRenderTarget(selection) {
    selection.each(function () {
        var root = this,
            canvas = root.parentNode.appendChild(document.createElement("canvas")),
            context = canvas.getContext("2d");

        canvas.style.position = "absolute";
        canvas.style.top = root.offsetTop + "px";
        canvas.style.left = root.offsetLeft + "px";

        d3.timer(redraw);

        // Clear the canvas and then iterate over child elements.
        function redraw() {
            canvas.width = root.getAttribute("width");
            canvas.height = root.getAttribute("height");
            for (var child = root.firstChild; child; child = child.nextSibling) draw(child);
            return stopCanvasTimer;
        }

        function draw(element) {
            switch (element.tagName) {
                case 'cloud':
                {
                    var r = element.getAttribute("r");
                    cloud(context, element.getAttribute("cx"), element.getAttribute("cy"), r, element.getAttribute("stroke"), element.getAttribute("fill"), element.getAttribute("stroke-width"));
                    break;
                }
                default :
                    console.log('drawing nothing')
                    console.log(element);
            }
        }
    });
}

d3.select(canvasDiv.get(0)).on("mousemove", function () {
    var pos = d3.mouse(this);
    surface.append('custom:cloud')
        .attr({"cx": pos[0], "cy": pos[1], "r": 0})
        .attr({"stroke": 'rgba(255,20,147,1)', "stroke-width": 5, 'fill': 'rgba(255,105,180,1)'})
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr({"r": 200, "stroke": "rgba(255,20,147,0)"})
        .attr('fill', 'rgba(255,105,180,0)')
        .remove();
});

function createQuadTreeSearch(){
    var quad = $('#quadTreeSvg');
    var width = quad.width(),
        height = quad.height();

    var data = d3.range(2000).map(function() {
        return [Math.random() * width, Math.random() * height];
    });

    var quadtree = d3.geom.quadtree()
        .extent([[-1, -1], [width + 1, height + 1]])
    (data);

    var svg = d3.select(quad.get(0)).append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.selectAll(".node")
        .data(nodes(quadtree))
        .enter().append("rect")
        .attr("class", "node")
        .attr("x", function(d) { return d.x0; })
        .attr("y", function(d) { return d.y0; })
        .attr("width", function(d) { return d.y1 - d.y0; })
        .attr("height", function(d) { return d.x1 - d.x0; });

    var point = svg.selectAll(".point")
        .data(data)
        .enter().append("circle")
        .attr("class", "point")
        .attr("cx", function(d) { return d[0]; })
        .attr("cy", function(d) { return d[1]; })
        .attr("r", '0.15em');

    svg.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mousemove", mousemoved);

    function mousemoved() {
        point.each(function(d) { d.scanned = false; });
        var p = quadtree.find(d3.mouse(this));
        point.classed("scanned", function(d) { return d.scanned; });
        point.classed("selected", function(d) { return d === p; });
    }

// Collapse the quadtree into an array of rectangles.
    function nodes(quadtree) {
        var nodes = [];
        quadtree.visit(function(node, x0, y0, x1, y1) {
            node.x0 = x0, node.y0 = y0;
            node.x1 = x1, node.y1 = y1;
            nodes.push(node);
        });
        return nodes;
    }
}

function setUpClock(){
    var clockDiv = $('#clock');

    var radians = 0.0174532925,
        clockRadius = clockDiv.height()/2 - 50,
        margin = 50,
        width = (clockRadius+margin)*2,
        height = (clockRadius+margin)*2,
        hourHandLength = 2*clockRadius/3,
        minuteHandLength = clockRadius,
        secondHandLength = clockRadius-12,
        secondHandBalance = 30,
        secondTickStart = clockRadius;
    secondTickLength = -10,
        hourTickStart = clockRadius,
        hourTickLength = -18
    secondLabelRadius = clockRadius + 16;
    secondLabelYOffset = 5
    hourLabelRadius = clockRadius - 40
    hourLabelYOffset = 7;


    var hourScale = d3.scale.linear()
        .range([0,330])
        .domain([0,11]);

    var minuteScale = secondScale = d3.scale.linear()
        .range([0,354])
        .domain([0,59]);

    var handData = [
        {
            type:'hour',
            value:0,
            length:-hourHandLength,
            scale:hourScale
        },
        {
            type:'minute',
            value:0,
            length:-minuteHandLength,
            scale:minuteScale
        },
        {
            type:'second',
            value:0,
            length:-secondHandLength,
            scale:secondScale,
            balance:secondHandBalance
        }
    ];

    function drawClock(){ //create all the clock elements
        updateData();	//draw them in the correct starting position
        var svg = d3.select(clockDiv.get(0)).append("svg")
            .attr("width", clockDiv.width())
            .attr("height", clockDiv.height());

        var face = svg.append('g')
            .attr('id','clock-face')
            .attr('transform','translate(' + ( (clockDiv.width() - clockRadius)/2 + margin * 2) + ',' + (  clockRadius + margin) + ')');

        //add marks for seconds
        face.selectAll('.second-tick')
            .data(d3.range(0,60)).enter()
            .append('line')
            .attr('class', 'second-tick')
            .attr('x1',0)
            .attr('x2',0)
            .attr('y1',secondTickStart)
            .attr('y2',secondTickStart + secondTickLength)
            .attr('transform',function(d){
                return 'rotate(' + secondScale(d) + ')';
            });
        //and labels

        face.selectAll('.second-label')
            .data(d3.range(5,61,5))
            .enter()
            .append('text')
            .attr('class', 'second-label')
            .attr('text-anchor','middle')
            .attr('x',function(d){
                return secondLabelRadius*Math.sin(secondScale(d)*radians);
            })
            .attr('y',function(d){
                return -secondLabelRadius*Math.cos(secondScale(d)*radians) + secondLabelYOffset;
            })
            .text(function(d){
                return d;
            });

        //... and hours
        face.selectAll('.hour-tick')
            .data(d3.range(0,12)).enter()
            .append('line')
            .attr('class', 'hour-tick')
            .attr('x1',0)
            .attr('x2',0)
            .attr('y1',hourTickStart)
            .attr('y2',hourTickStart + hourTickLength)
            .attr('transform',function(d){
                return 'rotate(' + hourScale(d) + ')';
            });

        face.selectAll('.hour-label')
            .data(d3.range(3,13,3))
            .enter()
            .append('text')
            .attr('class', 'hour-label')
            .attr('text-anchor','middle')
            .attr('x',function(d){
                return hourLabelRadius*Math.sin(hourScale(d)*radians);
            })
            .attr('y',function(d){
                return -hourLabelRadius*Math.cos(hourScale(d)*radians) + hourLabelYOffset;
            })
            .text(function(d){
                return d;
            });


        var hands = face.append('g').attr('id','clock-hands');

        face.append('g').attr('id','face-overlay')
            .append('circle').attr('class','hands-cover')
            .attr('x',0)
            .attr('y',0)
            .attr('r',clockRadius/20);

        hands.selectAll('line')
            .data(handData)
            .enter()
            .append('line')
            .attr('class', function(d){
                return d.type + '-hand';
            })
            .attr('x1',0)
            .attr('y1',function(d){
                return d.balance ? d.balance : 0;
            })
            .attr('x2',0)
            .attr('y2',function(d){
                return d.length;
            })
            .attr('transform',function(d){
                return 'rotate('+ d.scale(d.value) +')';
            });
    }

    function moveHands(){
        d3.select('#clock-hands').selectAll('line')
            .data(handData)
            .transition()
            .attr('transform',function(d){
                return 'rotate('+ d.scale(d.value) +')';
            });
    }

    function updateData(){
        var t = new Date();
        handData[0].value = (t.getHours() % 12) + t.getMinutes()/60 ;
        handData[1].value = t.getMinutes();
        handData[2].value = t.getSeconds();
    }

    drawClock();

    setInterval(function(){
        updateData();
        moveHands();
    }, 1000);

    d3.select(self.frameElement).style("height", height + "px");
}

function createZoom(){
    var zoomDiv = $('#zoomSvg');

    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = zoomDiv.width() - margin.left - margin.right,
        height = zoomDiv.height() - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .domain([-width / 2, width / 2])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([-height / 2, height / 2])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickSize(-height);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
        .tickSize(-width);

    var zoom = d3.behavior.zoom()
        .x(x)
        .y(y)
        .scaleExtent([1, 32])
        .on("zoom", zoomed);

    var svg = d3.select(zoomDiv.get(0)).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .call(zoom);

    svg.append("rect")
        .attr("width", width)
        .attr("height", height);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    function zoomed() {
        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
    }
}

function createWebGL() {
    var host = webGLHost = $('#webGlhost');
    var doRotate = false;

    var t = 1297110663,
        v = 50,
        N = 15,
        data = d3.range(N).map(next);

    function next() {
        return {
            time: ++t,
            value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
        };
    }

    setInterval(function() {
        data.shift();
        data.push(next());
        redrawGL();
    }, 1500);

    function redrawGL() {

        var bars = d3.select( chart3d )
            .selectAll("THREE.Mesh")
            .data(data, function(d) { return d.time; });

        bars.transition()
            .duration(1000)
            .attr("position.x", function(d, i) { return 30 * (i - N / 2); })

        bars.enter().append( newBar )
            .attr("position.x", function(d, i) { return 30 * (i - N / 2 + 1); })
            .attr("position.y", 0)
            .attr("scale.y", 1e-3)
            .transition()
            .duration(1000)
            .attr("position.x", function(d, i) { return 30 * (i - N / 2); })
            .attr("position.y", function(d, i) { return d.value; })
            .attr("scale.y", function(d, i) { return d.value / 10; })

        bars.exit().transition()
            .duration(1000)
            .attr("position.x", function(d, i) { return 30 * (i - N / 2 - 1); })
            .attr("position.y", 0)
            .attr("scale.y", 1e-3)
            .remove()
    }

    THREE.Object3D.prototype.appendChild = function (c) { this.add(c); c.parentNode = this; return c; };

    THREE.Object3D.prototype.removeChild = function (c) { this.remove(c); }

    THREE.Object3D.prototype.querySelectorAll = function (selector) {
        var matches = [];
        var type = eval(selector);
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (child instanceof type) {
                matches.push(child);
            }
        }
        return matches;
    }

    THREE.Object3D.prototype.locateAttribute = function (name) {
        var chain = name.split('.');
        var object = this;
        for (var i = 0; i < chain.length - 1; i++) {
            object = object[chain[i]];
        }
        return {
            object: object,
            name: chain[chain.length - 1]
        }
    }

    THREE.Object3D.prototype.getAttribute = function (name) {
        var attribute = this.locateAttribute (name);
        return attribute.object[attribute.name];
    }

    THREE.Object3D.prototype.setAttribute = function (name, value) {
        var attribute = this.locateAttribute (name);
        attribute.object[attribute.name] = value;
    }

    var camera, scene, renderer, chart3d, newBar;

    function init () {
        // standard THREE stuff, straight from examples
        try {
            renderer = new THREE.WebGLRenderer();
        } catch (oops) {
            renderer = new THREE.CanvasRenderer();
        }

        renderer.setSize( host.width(), host.height() );
        host.get(0).appendChild( renderer.domElement );

        camera = new THREE.PerspectiveCamera( 70, host.width()/ host.height(), 1, 1000 );
        camera.position.z = 400;

        scene = new THREE.Scene();

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0, 1 );
        scene.add( light );

        var geometry = new THREE.CubeGeometry( 20, 20, 20 );
        var material = new THREE.MeshLambertMaterial( {
            color: 0xBCC11F, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } );

        // create container for our 3D chart
        chart3d = new THREE.Object3D();
        chart3d.rotation.x = 0;
        scene.add( chart3d );

        // create function for D3 to set up 3D bars
        newBar = function() { return new THREE.Mesh( geometry, material ); }

        // continue with THREE stuff
        window.addEventListener( 'resize', onWindowResize, false );
    }

    function onWindowResize() {

        camera.aspect = host.width() / host.height();
        camera.updateProjectionMatrix();

        renderer.setSize( host.width(), host.height() );

    }

    function animate() {

        if (doRotate) {
            chart3d.rotation.y += 0.01;
        }

        renderer.render(scene, camera);
    }

    init();
    redrawGL();

    d3.timer(animate);

    var isDragging = false;
    var x = 0;
    var y = 0;

    host
        .mousedown(function(e) {
            x = e.offsetX;
            y = e.offsetY;
            host.mousemove(function(e) {
                isDragging = true;
                chart3d.rotation.y = -(x - e.offsetX)/50;
                chart3d.rotation.x = -(y - e.offsetY)/50;
            });
        })
        .mouseup(function() {
            var wasDragging = isDragging;
            isDragging = false;
            host.unbind("mousemove");
            if (!wasDragging) {
                console.log('click ...')
            }
        });
}