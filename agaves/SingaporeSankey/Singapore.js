var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var SingaporeSankey1451190378295;
        (function (SingaporeSankey1451190378295) {
            var SingaporeSankey = (function () {
                function SingaporeSankey() {
                    this.flag = false;
                }
                SingaporeSankey.isAirplane = function (name) {
                    if (name === 'Budget')
                        return true;
                    if (name === 'Domestic')
                        return true;
                    if (name === 'Premium')
                        return true;
                    if (name === 'Freight')
                        return true;
                    return false;
                };
                SingaporeSankey.extractIdentity = function (dataView, name) {
                    var categories = dataView.categorical.categories[0].values;
                    var found = undefined;
                    for (var i = 0, len = categories.length; i < len; i++) {
                        if (categories[i] === name) {
                            found = i;
                            break;
                        }
                    }
                    if (found !== undefined) {
                        return visuals.SelectionId.createWithId(dataView.categorical.categories[0].identity[i]);
                    }
                    window.console.log('not found');
                    return null;
                };
                SingaporeSankey.converter = function (dataView) {
                    //return AirPaneMockData;
                    var start = [];
                    var end = [];
                    var middle = [];
                    var links = [];
                    var rows = dataView.table.rows;
                    var StartRole = 0;
                    var EndRole = 1;
                    var WeightRole = 2;
                    var columns = dataView.metadata.columns;
                    for (var i = 0; i < columns.length; i++) {
                        var column = columns[i];
                        if (column.roles['From'])
                            StartRole = i;
                        if (column.roles['To'])
                            EndRole = i;
                        if (column.roles['Weight'])
                            WeightRole = i;
                    }
                    for (var i = 0, len = rows.length; i < len; i++) {
                        var row = rows[i];
                        links.push({
                            id: row[StartRole] + ' - ' + row[EndRole],
                            weight: row[WeightRole]
                        });
                        if (SingaporeSankey.isAirplane(row[StartRole])) {
                            middle.push({ name: row[StartRole] });
                            end.push({ name: row[EndRole] });
                        }
                        else if (SingaporeSankey.isAirplane(row[EndRole])) {
                            start.push({ name: row[StartRole] });
                            middle.push({ name: row[EndRole] });
                        }
                    }
                    start = _.uniq(start, 'name');
                    end = _.uniq(end, 'name');
                    middle = _.uniq(middle, 'name');
                    var max = _.max(links, 'weight').weight;
                    for (var i = 0, len = middle.length; i < len; i++) {
                        middle[i].identity = SingaporeSankey.extractIdentity(dataView, middle[i].name);
                    }
                    return { start: start, end: end, middle: middle, links: links, max: max };
                };
                /** This is called once when the visual is initialially created */
                SingaporeSankey.prototype.init = function (options) {
                    this.svg = d3.select(options.element.get(0)).append('svg');
                    this.selectionManager = new visuals.utility.SelectionManager({ hostServices: options.host });
                    this.linkZone = this.svg.append('g');
                    this.startNodes = this.svg.append('g');
                    this.endNodes = this.svg.append('g');
                    this.middleZone = this.svg.append('g');
                    this.titleNodes = this.svg.append('g');
                    this.color = options.style.colorPalette.dataColors;
                };
                /** Update is called for data updates, resizes & formatting changes */
                SingaporeSankey.prototype.update = function (options) {
                    var viewport = this.viewport = options.viewport;
                    var dataView = options.dataViews[0];
                    if (!dataView || !dataView.table)
                        return;
                    this.svg.attr({ 'height': viewport.height, 'width': viewport.width });
                    var data = this.data = SingaporeSankey.converter(dataView);
                    this.render(data, viewport, 0);
                };
                SingaporeSankey.prototype.render = function (data, viewport, duration) {
                    this.drawStart(data.start, viewport);
                    this.drawEnd(data.end, viewport);
                    this.drawMiddleRectange(data.middle, viewport, duration);
                    this.drawTitles(data, viewport, duration);
                    this.drawLinks(data, viewport, duration);
                };
                SingaporeSankey.prototype.polyLineBuilder = function (line) {
                    var lineLayout = d3.svg.line().x(function (d) { return d.x; }).y(function (d) { return d.y; }).interpolate("monotone");
                    var data = [
                        { x: line.x1, y: line.y1 },
                        { x: line.x1 + (SingaporeSankey.LineStraightLength * ((line.x1 > line.x2) ? -1 : 1)), y: line.y1 },
                        { x: line.x2, y: line.y2 }
                    ];
                    return lineLayout(data);
                };
                SingaporeSankey.prototype.drawTitles = function (viewModel, viewport, duration) {
                    var start = viewModel.start;
                    var end = viewModel.end;
                    var dim = SingaporeSankey.SquareDim;
                    var padding = SingaporeSankey.Padding;
                    var radius = 10;
                    var startSpace = start.length > 1 ? ((viewport.height - padding * 2 - SingaporeSankey.TopBoxMargin) - (start.length * dim)) / (start.length - 1) : 0;
                    var endSpace = end.length > 1 ? ((viewport.height - padding * 2 - SingaporeSankey.TopBoxMargin) - (end.length * dim)) / (end.length - 1) : 0;
                    var startTextSelection = this.titleNodes.selectAll('.startText').data(start);
                    startTextSelection.enter().append('text').classed('startText', true);
                    startTextSelection.attr({
                        y: function (d, i) { return i * (dim + startSpace) + SingaporeSankey.TextTopMargin; },
                        x: SingaporeSankey.TextPadding,
                    }).text(function (d) { return d.name; });
                    startTextSelection.exit().remove();
                    var endTextSelection = this.titleNodes.selectAll('.endText').data(end);
                    endTextSelection.enter().append('text').style('text-anchor', 'end').classed('endText', true);
                    endTextSelection.attr({
                        y: function (d, i) { return i * (dim + endSpace) + SingaporeSankey.TextTopMargin; },
                        x: viewport.width - SingaporeSankey.TextPadding,
                    }).text(function (d) { return d.name; });
                    endTextSelection.exit().remove();
                    var startLineSelection = this.titleNodes.selectAll('line').data(start);
                    startLineSelection.enter().append('line');
                    startLineSelection.attr({
                        y1: function (d, i) { return i * (dim + startSpace) + 25; },
                        x1: 5,
                        y2: function (d, i) { return i * (dim + startSpace) + 25; },
                        x2: 150 + dim / 2
                    }).style({
                        'stroke': 'grey',
                        'stroke-width': 2,
                        'stroke-linecap': 'round'
                    });
                    startLineSelection.exit().remove();
                    var endLineSelection = this.titleNodes.selectAll('.endLine').data(end);
                    endLineSelection.enter().append('line').classed('endLine', true);
                    endLineSelection.attr({
                        y1: function (d, i) { return i * (dim + endSpace) + 25; },
                        x1: viewport.width - 5,
                        y2: function (d, i) { return i * (dim + endSpace) + 25; },
                        x2: viewport.width - 150 - dim / 2
                    }).style({
                        'stroke': 'grey',
                        'stroke-width': 2,
                        'stroke-linecap': 'round'
                    });
                    endLineSelection.exit().remove();
                };
                SingaporeSankey.prototype.drawLinks = function (viewModel, viewport, duration) {
                    var _this = this;
                    var start = viewModel.start;
                    var end = viewModel.end;
                    var middle = viewModel.middle;
                    var links = viewModel.links;
                    var dim = SingaporeSankey.SquareDim;
                    var data = [];
                    for (var i = 0; i < start.length; i++) {
                        for (var f = 0; f < middle.length; f++) {
                            var key = start[i].name + ' - ' + middle[f].name;
                            var filterd = links.filter(function (d) { return d.id === key; });
                            if (filterd.length > 0) {
                                var width = filterd[0].weight / viewModel.max * 9 + 1;
                                data.push({
                                    line: {
                                        x1: dim / 2,
                                        y1: start[i].cy + (f * 10 - ((middle.length - 1) * 5)) + SingaporeSankey.Padding,
                                        x2: viewport.width / 2,
                                        y2: middle[f].cy
                                    },
                                    key: key,
                                    color: this.color.getColorByIndex(i).value,
                                    width: width
                                });
                            }
                        }
                    }
                    for (var i = 0; i < end.length; i++) {
                        for (var f = 0; f < middle.length; f++) {
                            var key = middle[f].name + ' - ' + end[i].name;
                            var filterd = links.filter(function (d) { return d.id === key; });
                            if (filterd.length > 0) {
                                var width = filterd[0].weight / viewModel.max * 9 + 1;
                                data.push({
                                    line: {
                                        x1: viewport.width - dim / 2,
                                        y1: end[i].cy + (f * 10 - ((middle.length - 1) * 5)) + SingaporeSankey.Padding,
                                        x2: viewport.width / 2,
                                        y2: middle[f].cy
                                    },
                                    key: key,
                                    color: this.color.getColorByIndex(i).value,
                                    width: width
                                });
                            }
                        }
                    }
                    var selection = this.linkZone.selectAll('.polyline').data(data, function (d) { return d.key; });
                    selection.enter().append('path').classed('polyline', true).style('opacity', 0).attr('d', function (d) {
                        var line = powerbi.Prototype.inherit(d.line);
                        line.y2 = viewport.height / 2 - d.width / 2;
                        return _this.polyLineBuilder(line);
                    });
                    selection.transition().delay(duration / 2).duration(duration).style('opacity', 1).attr('d', function (d) { return _this.polyLineBuilder(d.line); });
                    selection.style({
                        fill: 'none',
                        stroke: function (d, i) { return d.color; },
                        'stroke-width': function (d) { return d.width; }
                    });
                    selection.exit().transition().duration(duration / 2).style('opacity', 0).remove();
                    this.linkZone.attr('transform', visuals.SVGUtil.translate(0, +SingaporeSankey.TopBoxMargin));
                };
                SingaporeSankey.prototype.drawMiddleRectange = function (nodes, viewport, duration) {
                    var _this = this;
                    var selection = this.middleZone.selectAll('rect').data([0]);
                    var dim = SingaporeSankey.MiddleWidth;
                    var space = SingaporeSankey.Special;
                    var height = (nodes.length) * space + SingaporeSankey.MiddleInnerCirclePadding - -0 /*Manual */;
                    var padding = (this.viewport.height - height - SingaporeSankey.TopBoxMargin) / 2;
                    selection.enter().append('rect');
                    selection.style({
                        fill: 'rgba(125,125,125,0.8)',
                        stroke: 'cccccc',
                        'stroke-width': '2',
                        opacity: 1
                    }).transition().delay(duration / 2).duration(duration).attr({
                        x: 0,
                        y: 0,
                        height: height,
                        width: dim,
                        ry: dim / 2,
                        rx: dim / 2
                    });
                    selection.exit().remove();
                    var texts = this.middleZone.selectAll('text').data(nodes, function (d) { return d.name; });
                    texts.enter().append('text').attr({
                        x: SingaporeSankey.MiddleWidth / 2,
                        y: SingaporeSankey.MiddleCircleRadius + SingaporeSankey.MiddleInnerCirclePadding + 40
                    }).style('opacity', 0);
                    texts.style({
                        'text-anchor': 'middle',
                        fill: 'white',
                        'font-weight': 'bold'
                    }).text(function (d) { return d.name; }).transition().delay(duration / 2).duration(duration).style('opacity', 1).attr({
                        r: SingaporeSankey.MiddleCircleRadius,
                        x: SingaporeSankey.MiddleWidth / 2,
                        y: function (d, i) {
                            var cy = SingaporeSankey.MiddleCircleRadius + i * space + SingaporeSankey.MiddleInnerCirclePadding;
                            return cy + 40;
                        }
                    });
                    texts.exit().transition().duration(duration / 2).style('opacity', 0).remove();
                    var circles = this.middleZone.selectAll('circle').data(nodes, function (d) { return d.name; });
                    circles.enter().append('circle').attr({
                        cx: SingaporeSankey.MiddleWidth / 2,
                        cy: SingaporeSankey.MiddleCircleRadius + SingaporeSankey.MiddleInnerCirclePadding
                    }).style('opacity', 0);
                    circles.style({
                        'fill': '#FFFDE8'
                    }).transition().delay(duration / 2).duration(duration).style('opacity', 1).attr({
                        r: SingaporeSankey.MiddleCircleRadius,
                        cx: SingaporeSankey.MiddleWidth / 2,
                        cy: function (d, i) {
                            var cy = SingaporeSankey.MiddleCircleRadius + i * space + SingaporeSankey.MiddleInnerCirclePadding;
                            d.cy = cy + padding;
                            return cy;
                        }
                    });
                    circles.exit().transition().duration(duration / 2).style('opacity', 0).remove();
                    var points = this.middleZone.selectAll('.airImage').data(nodes, function (d) { return d.name; });
                    points.enter().append("svg:image").classed('airImage', true).attr({
                        x: SingaporeSankey.MiddleWidth / 2 - SingaporeSankey.MiddleImageRadius / 2,
                        y: SingaporeSankey.MiddleInnerCirclePadding * 1.5 + SingaporeSankey.MiddleImageRadius / 2
                    }).style('opacity', 0);
                    points.on('click', function (d, i) {
                        var data = powerbi.Prototype.inherit(_this.data);
                        if (!_this.flag) {
                            data.middle = [data.middle[i]];
                        }
                        _this.flag = !_this.flag;
                        _this.render(data, _this.viewport, 500);
                        _this.selectionManager.select(d.identity);
                    }).style('cursor', 'pointer').transition().delay(duration / 2).duration(duration).attr({
                        height: SingaporeSankey.MiddleImageRadius,
                        width: SingaporeSankey.MiddleImageRadius,
                        x: SingaporeSankey.MiddleWidth / 2 - SingaporeSankey.MiddleImageRadius / 2,
                        y: function (d, i) {
                            var cy = i * space + SingaporeSankey.MiddleInnerCirclePadding * 1.5 + SingaporeSankey.MiddleImageRadius / 2;
                            d.cy = cy + padding;
                            return cy - SingaporeSankey.MiddleImageRadius / 2;
                        },
                        "xlink:href": AirPlaneIcon
                    }).style('opacity', 1);
                    points.exit().transition().duration(duration / 2).style('opacity', 0).remove();
                    this.middleZone.transition().delay(duration / 2).duration(duration).attr('transform', visuals.SVGUtil.translate(viewport.width / 2 - dim / 2, padding + SingaporeSankey.TopBoxMargin));
                };
                SingaporeSankey.prototype.drawSideNodes = function (nodes, viewport, selection) {
                    var _this = this;
                    var dim = SingaporeSankey.SquareDim;
                    var padding = SingaporeSankey.Padding;
                    var radius = 10;
                    var space = nodes.length > 1 ? ((viewport.height - padding * 2 - SingaporeSankey.TopBoxMargin) - (nodes.length * dim)) / (nodes.length - 1) : 0;
                    selection.enter().append('rect');
                    selection.attr({
                        y: function (d, i) {
                            var y = i * (dim + space);
                            d.cy = y + dim / 2;
                            return y;
                        },
                        x: 0,
                        ry: radius,
                        rx: radius,
                        height: dim,
                        width: dim,
                    }).style({
                        fill: function (d, i) { return _this.color.getColorByIndex(i).value; },
                        stroke: 'black',
                        'stroke-width': '5',
                    });
                    selection.exit().remove();
                };
                SingaporeSankey.prototype.drawEnd = function (nodes, viewport) {
                    var selection = this.endNodes.selectAll('rect').data(nodes);
                    this.drawSideNodes(nodes, viewport, selection);
                    this.endNodes.attr('transform', visuals.SVGUtil.translate(viewport.width - (SingaporeSankey.SquareDim + SingaporeSankey.Padding), SingaporeSankey.Padding + SingaporeSankey.TopBoxMargin));
                };
                SingaporeSankey.prototype.drawStart = function (nodes, viewport) {
                    var selection = this.startNodes.selectAll('rect').data(nodes);
                    this.drawSideNodes(nodes, viewport, selection);
                    this.startNodes.attr('transform', visuals.SVGUtil.translate(SingaporeSankey.Padding, SingaporeSankey.Padding + SingaporeSankey.TopBoxMargin));
                };
                SingaporeSankey.capabilities = {
                    // This is what will appear in the 'Field Wells' in reports
                    dataRoles: [{
                        name: 'From',
                        kind: powerbi.VisualDataRoleKind.Grouping,
                        displayName: 'From'
                    }, {
                            name: 'To',
                            kind: powerbi.VisualDataRoleKind.Grouping,
                            displayName: 'To'
                        }, {
                            name: 'Weight',
                            kind: powerbi.VisualDataRoleKind.Measure,
                            displayName: 'Weight'
                        }],
                    // This tells power bi how to map your roles above into the dataview you will receive
                    dataViewMappings: [
                        {
                            conditions: [
                                { "From": { min: 0, max: 1 }, "To": { min: 0, max: 1 }, "Weight": { min: 0, max: 0 } },
                                { "From": { min: 0, max: 1 }, "To": { min: 0, max: 1 }, "Weight": { min: 1, max: 1 } }
                            ],
                            categorical: {
                                categories: {
                                    for: { in: 'From' },
                                    dataReductionAlgorithm: { top: {} }
                                },
                                values: {
                                    select: [
                                        { bind: { to: 'To' } },
                                        { bind: { to: 'Weight' } }
                                    ]
                                }
                            }
                        }
                    ],
                };
                SingaporeSankey.SquareDim = 50;
                SingaporeSankey.TopBoxMargin = 30;
                SingaporeSankey.Padding = 5;
                SingaporeSankey.MiddleEdgePadding = 40;
                SingaporeSankey.MiddleInnerCirclePadding = 10;
                SingaporeSankey.MiddleWidth = 160;
                SingaporeSankey.MiddleImageRadius = 40;
                SingaporeSankey.MiddleCircleRadius = 25;
                SingaporeSankey.LineStraightLength = 150;
                SingaporeSankey.TextPadding = 10;
                SingaporeSankey.TextTopMargin = 20;
                SingaporeSankey.Special = 80;
                return SingaporeSankey;
            })();
            SingaporeSankey1451190378295.SingaporeSankey = SingaporeSankey;
        })(SingaporeSankey1451190378295 = visuals.SingaporeSankey1451190378295 || (visuals.SingaporeSankey1451190378295 = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
var AirPaneMockData = {
    max: 1,
    start: [
        { name: 'Start' },
        { name: 'Start2' },
        { name: 'Start3' },
        { name: 'Start4' },
        { name: 'Start5' }
    ],
    middle: [
        { name: 'SQ 142' },
        { name: 'SQ 12' },
        { name: 'SQ 999' },
        { name: 'SQ 41' },
        { name: 'SQ 10' }
    ],
    end: [
        { name: 'End' },
        { name: 'End2' },
        { name: 'End3' },
    ],
    links: [
        { id: 'Start - SQ 142', weight: 0.7 },
        { id: 'Start2 - SQ 142', weight: 0.2 },
        { id: 'Start3 - SQ 142', weight: 0.2 },
        { id: 'Start4 - SQ 142', weight: 0.2 },
        { id: 'Start5 - SQ 142', weight: 0.2 },
        { id: 'Start - SQ 12', weight: 0.2 },
        { id: 'Start2 - SQ 12', weight: 0.2 },
        { id: 'Start3 - SQ 12', weight: 0.2 },
        { id: 'Start4 - SQ 12', weight: 0.2 },
        { id: 'Start5 - SQ 12', weight: 0.2 },
        { id: 'Start - SQ 999', weight: 0.2 },
        { id: 'Start2 - SQ 999', weight: 0.2 },
        { id: 'Start3 - SQ 999', weight: 0.2 },
        { id: 'Start4 - SQ 999', weight: 0.2 },
        { id: 'Start5 - SQ 999', weight: 0.2 },
        { id: 'Start - SQ 41', weight: 0.2 },
        { id: 'Start2 - SQ 41', weight: 0.7 },
        { id: 'Start3 - SQ 41', weight: 0.2 },
        { id: 'Start4 - SQ 41', weight: 0.2 },
        { id: 'Start5 - SQ 41', weight: 0.7 },
        { id: 'Start - SQ 10', weight: 0.2 },
        { id: 'Start2 - SQ 10', weight: 0.7 },
        { id: 'Start3 - SQ 10', weight: 0.2 },
        { id: 'Start4 - SQ 10', weight: 0.7 },
        { id: 'Start5 - SQ 10', weight: 0.2 },
        { id: 'SQ 142 - End', weight: 0.2 },
        { id: 'SQ 12 - End', weight: 0.2 },
        { id: 'SQ 999 - End', weight: 0.2 },
        { id: 'SQ 41 - End', weight: 0.2 },
        { id: 'SQ 10 - End', weight: 0.2 },
        { id: 'SQ 142 - End2', weight: 0.2 },
        { id: 'SQ 12 - End2', weight: 0.2 },
        { id: 'SQ 999 - End2', weight: 0.2 },
        { id: 'SQ 41 - End2', weight: 0.2 },
        { id: 'SQ 10 - End2', weight: 0.2 },
        { id: 'SQ 142 - End3', weight: 0.2 },
        { id: 'SQ 12 - End3', weight: 0.2 },
        { id: 'SQ 999 - End3', weight: 0.2 },
        { id: 'SQ 41 - End3', weight: 0.2 },
        { id: 'SQ 10 - End3', weight: 0.2 },
        { id: 'SQ 142 - End4', weight: 0.2 },
        { id: 'SQ 12 - End4', weight: 0.2 },
        { id: 'SQ 999 - End4', weight: 0.2 },
        { id: 'SQ 41 - End4', weight: 0.7 },
        { id: 'SQ 10 - End4', weight: 0.2 },
        { id: 'SQ 142 - End5', weight: 0.2 },
        { id: 'SQ 12 - End5', weight: 0.2 },
        { id: 'SQ 999 - End5', weight: 0.2 },
        { id: 'SQ 41 - End5', weight: 0.7 },
        { id: 'SQ 10 - End5', weight: 0.2 }
    ]
};
var AirPlaneIcon = "data:image/png;base64,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";
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.SingaporeSankey1451190378295 = {
                name: 'SingaporeSankey1451190378295',
                class: 'SingaporeSankey1451190378295',
                capabilities: powerbi.visuals.SingaporeSankey1451190378295.SingaporeSankey.capabilities,
                custom: true,
                create: function () { return new powerbi.visuals.SingaporeSankey1451190378295.SingaporeSankey(); }
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));