var callbacks = [];
var forceLayoutIntervalId = 0;
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
    theCanvasIndex = section[0].indexOf(theCanvas.node());


createCircles();
createDots();
createBar();
enter();
update();
exit();

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
    }
}

function createCircles() {
    var data = [10, 40, 30, 20, 60];
    var svg = d3.select('#svgCircles')
        ;

    var selection = svg.

        selectAll('.happycircles').data(data);
    selection.enter
    ().append('circle')
        .
        classed('happycircles', true
    );
    selection
        .attr({
            cx: function (d, i) {
                return (i + 1) * 100 * (1 / 32)
                    +
                    'em';
            },
            cy: 150 / 32 +
            'em',
            r: function (d) {
                return d * 1 /
                    32

                    + 'em';
            }
            ,
            fill: 'purple'
        });
}

function removeCircles() {
    flushAnimationFrames();
    d3.select('#svgCircles').selectAll(
        '*').remove();
}

function createAnimatedCircles() {
    var data = [10, 40, 30, 20,
        60];
    var svg = d3.select(
        '#svgAniCircles');

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

function

removeAnimatedCircles() {
    flushAnimationFrames();
    d3.select(
        '#svgAniCircles').selectAll('*').remove();
}

function
removeBar() {
    $('#svgBarChart').
        empty();
}

function

removeDots() {
    $(
        '#svgScatterPlot').empty();
}

function createBar() {
    var data = [1, 1, 2, 3, 5,

        8];

    var margin = {
            top: 40
            , right: 40, bottom: 40, left: 40
        },
        width = $('#svgBarChart').width(),

        height = $('#svgBarChart').height();

    var
        x = d3.
            scale.linear()
            .domain([0, d3.

                max(data)])
            .
            range([0,
                width - margin.
                    left - margin.
                    right]);

    var y = d3.scale.ordinal()
        .domain(d3.
            range(data.length))
        .rangeRoundBands([height -
        margin.top - margin.bottom, 0]
        , .2);

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient(
            "bottom")
            .
            tickPadding(8)
        ;

    var yAxis =
        d3.svg.axis()
            .scale(y)
            .orient
        ("left")
            .tickSize(0)
            .tickPadding(8);

    var svg = d3.

        select("#svgBarChart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class",

        "bar chart")
        .append("g")
        .attr(
        "transform",
        "translate(" + margin.left + "," + margin.
            top + ")");

    svg.selectAll(
        ".bar")
        .data(data)
        .enter().append(
        "rect")
        .attr("class", "bar")
        .attr("y", function (d,
                             i) {
            return y(i);
        })
        .attr("width",
        x)
        .
        attr("height", y.
            rangeBand());

    svg.append("g")
        .attr("class", "x axis")
        .attr(
        "transform", "translate(0," + y.rangeExtent()[1] + ")")
        .call(xAxis);

    svg.append("g")
        .
        attr("class", "y axis")
        .call(yAxis)
        .selectAll("text")
        .
        text(function (d) {
            return String.
                fromCharCode(d + 65);
        });
}

function createDots() {

    var data = [
        {x: 10.0, y: 9.14},
        {x: 8.0, y: 8.14},
        {x: 13.0, y: 8.74},
        {x: 9.0, y: 8.77},
        {x: 11.0, y: 9.26},
        {x: 14.0, y: 8.10},
        {x: 6.0, y: 6.13},
        {x: 4.0, y: 3.10},
        {x: 12.0, y: 9.13},
        {x: 7.0, y: 7.26},
        {x: 5.0, y: 4.74},
    ];

    var scatter = $(
        '#svgScatterPlot');
    var
        margin = {
            top: 40, right: 40
            , bottom: 40, left: 40
        },
        width = scatter
            .width(),
        height = scatter.height();

    var x = pad(d3.scale.linear()
        .domain(d3.extent(data, function (d) {
            return d.x;
        }))
        .range([0, width - margin.left - margin.right]), 40);
    var y = pad(d3.scale.
        linear()
        .domain(d3.extent(data, function (d) {
            return d.y;
        }))
        .range([height -

        margin.top - margin.
            bottom, 0]), 40);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .tickPadding(8);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickPadding(8);

    var
        svg = d3.select(scatter.get(0)).
            append("svg")
            .attr("width", width)
            .attr(
            "height", height)
            .attr("class",
            "dot chart")
            .append("g")
            .attr(
            "transform",

            "translate(" + margin.left + "," + margin.top + ")");

    svg.
        selectAll(".dot"
    )
        .data(data)
        .enter().append("circle")
        .
        attr("class",
        "dot")
        .attr

    ("cx", function (d) {
        return x(d.x);
    })
        .attr("cy", function (d) {
            return y(
                d.y);
        })
        .attr("r", '0.4em');

    svg.
        append("g")
        .attr("class",
        "x axis")
        .attr("transform",
        "translate(0," + y.

            range()[0] + ")")
        .

        call(xAxis);

    svg.append("g")
        .

        attr("class", "y axis")
        .
        call(yAxis);

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

function createForceLayout() {
    var fly = $('#svgForce');
    var width = fly.width(),
        height = fly.height();
    var fill = d3.scale.

        category10().range(["#C7F464", "#EB6841", "#F56991"]);
    ;

    var nodes = []
        ,
        foci = [{
            x: width / 4, y: height /
            2
        }, {x: width / 4 * 2, y: height / 2}, {
            x: width / 4 * 3, y: height / 2
        }];
    var svg = d3.select(fly.get(0)).append("svg")
        .
        attr("width", width)
        .attr("height", height);

    var
        force = d3.layout.force()
            .nodes(nodes)
            .links([])
            .

            gravity(0)
            .size([width,
                height])
            .on("tick", tick
        );

    var node =
        svg.
            selectAll

        ("circle");

    function tick(e) {
        var k = .1 * e.alpha;
        // Push nodes toward their designated focus.
        nodes.forEach(function (o, i) {
            o.y += ( foci[o.id].
                y - o.y) * k;
            o.x += (foci[o.id].x -
            o.x

            ) * k;
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

function
exit() {
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
                    .attr(
                    "height", '10em')
                    .attr("class", "join chart")
                    .append("g")
                    .attr("transform", "translate(" +
                    exitDiv.width(

                    ) / 2 + "," + exitDiv.height() / 3.5
                    + ")");
                var r1 = exitDiv.height() / 5;
                var r2 = exitDiv.height() / 6;

                svg.append("path")
                    .attr("d",
                    "M0,-{R2}A{R1},{R1} 0 0 0 0,{R2}A{R1},{R1} 0 1 1 0,-{R2}"
                        .
                        replace(/{R1}/g, r1)
                        .replace(/{R2}/g
                        , r2))
                    .style(
                    "fill", "#9e9ac8")
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

// Canvas rendering stuff

d3.ns.prefix.custom = "http://sachin";

var canvasDiv = $('#canvasDiv');
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
        .attr("cx", pos[0])
        .attr("cy", pos[1])
        .attr("r", 0)
        .attr("stroke", '#8ED6FF')
        .attr("stroke-width", 5)
        .attr('fill', 'hotpink')
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr("r", 200)
        .attr("stroke", "#000")
        .attr('fill', '#000')
        .remove();
});