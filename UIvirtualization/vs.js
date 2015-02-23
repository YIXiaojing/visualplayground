d3.VirtualScroller = function () {
    var enter = null,
        update = null,
        exit = null,
        data = [],
        dataid = null,
        svg = null,
        container = null,
        viewport = null,
        totalRows = 0,
        position = 0,
        rowHeight = 24,
        totalHeight = 0,
        minHeight = 0,
        viewportHeight = 0,
        visibleRows = 0,
        delta = 0,
        mode = 1,
        onScroll

    function virtualscroller() {
        function render(resize) {
            if (resize) {
                viewportHeight = parseInt(viewport.style("height"));
                visibleRows = Math.ceil(viewportHeight / rowHeight) + 1;
                //visibleRows = Math.max(minHeight, (totalRows * rowHeight));
            }
            var scrollTop = viewport.node().scrollTop;
            totalHeight = Math.max(minHeight, (totalRows * rowHeight));
            svg.style("height", totalHeight + "px")
                .attr("height", totalHeight);
            var lastPosition = position;
            position = Math.floor(scrollTop / rowHeight);
            delta = position - lastPosition;
            scrollRenderFrame(position);
        }

        function scrollRenderFrame(scrollPosition) {
            container
                .attr("transform", "translate(0," + (scrollPosition * rowHeight) + ")")
                .style(
                {
                    "transform": "translate(0," + (scrollPosition * rowHeight) + "px)",
                    "-webkit-transform": "translate(0," + (scrollPosition * rowHeight) + "px)"
                });

            var position0 = Math.max(0, Math.min(scrollPosition, totalRows - visibleRows + 1)),
                position1 = position0 + visibleRows;
            var rowSelection = container.selectAll(".row")
                .data(data.slice(position0, Math.min(position1, totalRows)), dataid);

            rowSelection
                .enter()
                .append('g')
                .attr("class", "row")
                .call(enter);
            rowSelection.order();

            var rowUpdateSelection = container.selectAll(".row:not(.transitioning)");

            rowUpdateSelection.call(update);

            if (mode === 0) { // Divs will stack by default
                rowUpdateSelection.each(function (d, i) {
                    d3.select(this).attr("transform", function (d) {
                        return "translate(0," + ((i * rowHeight)) + ")";
                    }).style("transform", function (d) {
                        return "translate(0," + ((i * rowHeight)) + ")";
                    });
                });
            }

            rowSelection
                .exit()
                .call(exit)
                .remove();

            if (onScroll) {
                var direction = 0; // Same
                if (position1 > (data.length - visibleRows)) {
                    direction = 1; // Up
                } else if (position0 < visibleRows) {
                    direction = 2; // Down
                }
                onScroll(position0, position1, delta, direction);
            }
        }

        virtualscroller.render = render;
        viewport.on("scroll", render);
        render(true);
    }

    virtualscroller.render = function (resize) {
    };

    virtualscroller.init = function () {
        svg = viewport.append(mode === 0 ? 'svg' : 'div')
            .attr("class", "scrollRegion");
        container = svg.append(mode === 0 ? 'g' : 'div')
            .attr("class", "visibleGroup");
        virtualscroller();
    }

    virtualscroller.data = function (_, __) {
        if (!arguments.length) return data;
        data = _;
        dataid = __;
        totalRows = data.length;
        return virtualscroller;
    };

    virtualscroller.dataid = function (_) {
        if (!arguments.length) return dataid;
        dataid = _;
        return virtualscroller;
    };

    virtualscroller.enter = function (_) {
        if (!arguments.length) return enter;
        enter = _;
        return virtualscroller;
    };

    virtualscroller.update = function (_) {
        if (!arguments.length) return update;
        update = _;
        return virtualscroller;
    };

    virtualscroller.exit = function (_) {
        if (!arguments.length) return exit;
        exit = _;
        return virtualscroller;
    };

    virtualscroller.totalRows = function (_) {
        if (!arguments.length) return totalRows;
        totalRows = _;
        return virtualscroller;
    };

    virtualscroller.rowHeight = function (_) {
        if (!arguments.length) return rowHeight;
        rowHeight = +_;
        return virtualscroller;
    };

    virtualscroller.minHeight = function (_) {
        if (!arguments.length) return minHeight;
        minHeight = +_;
        return virtualscroller;
    };

    virtualscroller.position = function (_) {
        if (!arguments.length) return position;
        position = +_;
        if (viewport) {
            viewport.node().scrollTop = position;
        }
        return virtualscroller;
    };

    virtualscroller.svg = function (_) {
        if (!arguments.length) return svg;
        svg = _;
        return virtualscroller;
    };

    virtualscroller.viewport = function (_) {
        if (!arguments.length) return viewport;
        viewport = _;
        return virtualscroller;
    };

    virtualscroller.mode = function (_) {
        if (!arguments.length) return mode;
        mode = _;
        return virtualscroller;
    };

    virtualscroller.onScroll = function (_) {
        if (!arguments.length) return onScroll;
        onScroll = _;
        return virtualscroller;
    };

    return virtualscroller;
};