/*Copyright (c) 2012, Michael Bostock
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

 * The name Michael Bostock may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
 INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function stack() {
    function e(e, t) {
        var n = b[0][t], i = e.sourceEvent = d3.event;
        try {
            d3.event = e, h[e.type].call(n, n.__data__, t)
        } finally {
            d3.event = i
        }
    }

    function t(e, t) {
        this.__stack__ = {index: t, active: !1}
    }

    function n() {
        this.__stack__.active || (this.__stack__.active = !0, e({type: "activate"}, this.__stack__.index))
    }

    function i() {
        this.__stack__.active && (this.__stack__.active = !1, e({type: "deactivate"}, this.__stack__.index))
    }

    function s() {
        var e = 20;
        o = p[1] / p[0] * innerWidth, r = innerHeight, b.style("height", o + "px").style("box-shadow", "0 4px 4px rgba(0,0,0,.3)").filter(function (e, t) {
            return k - 1 > t
        }).style("margin-bottom", e + "px"), z.style("font-size", innerWidth / p[0] * u + "px")
    }

    function l() {
        if (o)var e = _;
        o = p[1] / p[0] * innerWidth, r = innerHeight, w.style("top", (r - o) / 2 + "px").style("height", o + "px"), M.style("top", function (e) {
            return (e + (1 - g) / 2) * r + "px"
        }).style("height", r * g + "px"), z.style("font-size", innerWidth / p[0] * u + "px").style("height", r * k + "px"), isNaN(e) || scrollTo(0, (_ = e) * r)
    }

    function a() {
        var t = pageYOffset / r, s = Math.max(0, Math.min(k - 1, Math.floor(t + (1 + g) / 2)));
        v !== s && (s === v + 1 ? (K.interrupt().style("display", "none").style("opacity", 0).style("z-index", 0).each(i), K = N.interrupt().style("opacity", 1).style("z-index", 1), K.transition().each("end", i), N = W.interrupt().style("opacity", 0).style("z-index", 2).each(n), N.transition().style("opacity", 1), W = d3.select(b[0][s + 1]).interrupt().style("display", "block").style("opacity", 0).style("z-index", 0)) : s === v - 1 ? (W.interrupt().style("display", "none").style("opacity", 0).style("z-index", 0).each(i), W = N.interrupt().style("opacity", 1).style("z-index", 1), W.transition().each("end", i), N = K.interrupt().style("opacity", 0).style("z-index", 2).each(n), N.transition().style("opacity", 1), K = d3.select(b[0][s - 1]).interrupt().style("display", "block").style("opacity", 0).style("z-index", 0)) : (K.interrupt().style("display", "none").style("opacity", 0).style("z-index", 0).each(i), N.interrupt().style("display", "none").style("opacity", 0).style("z-index", 0).each(i), W.interrupt().style("display", "none").style("opacity", 0).style("z-index", 0).each(i), K = d3.select(b[0][s - 1]).interrupt().style("display", "block").style("opacity", 0).style("z-index", 0).each(i), N = d3.select(b[0][s]).interrupt().style("display", "block").style("opacity", 1).style("z-index", 2).each(n), W = d3.select(b[0][s + 1]).interrupt().style("display", "block").style("opacity", 0).style("z-index", 0).each(i)), v = s), e({
            type: "scroll",
            offset: _ = t
        }, v)
    }

    function c() {
        var e;
        switch (d3.event.keyCode) {
            case 39:
                if (d3.event.metaKey)return;
            case 40:
            case 34:
                e = d3.event.metaKey ? 1 / 0 : 1;
                break;
            case 37:
                if (d3.event.metaKey)return;
            case 38:
            case 33:
                e = d3.event.metaKey ? -1 / 0 : -1;
                break;
            case 32:
                e = d3.event.shiftKey ? -1 : 1;
                break;
            default:
                return
        }
        var t = isNaN(y) ? _ : y;
        y = Math.max(0, Math.min(k - 1, (e > 0 ? Math.floor(t + (1 + g) / 2) : Math.ceil(t - (1 - g) / 2)) + e)), d3.select(document.documentElement).interrupt().transition().duration(500).tween("scroll", function () {
            var e = d3.interpolateNumber(pageYOffset, y * r);
            return function (t) {
                scrollTo(0, e(t))
            }
        }).each("end", function () {
            y = 0 / 0
        }), d3.event.preventDefault()
    }

    var o, r, y, d = {}, p = [1280, 720], u = 32, h = d3.dispatch("scroll", "activate", "deactivate"), x = "ontouchstart"in document, f = x ? s : l, v = 0 / 0, _ = 0, g = 1 / 6, b = d3.selectAll("section").style("box-sizing", "border-box").style("line-height", "1.35em").each(t), k = b.size(), z = d3.select("body").style("margin", 0).style("padding", 0).style("background", "#333");
    if (x)b.style("position", "relative"), d3.select(window).on("resize.stack", f).each(f); else {
        var m = d3.select("body").insert("div", "section").style("background", "#000").style("box-shadow", "0 8px 16px rgba(0,0,0,.3)").style("padding", "1px 0").style("margin-top", "-1px").style("z-index", 0);
        b.style("display", "none").style("opacity", 0).style("z-index", 0);
        var w = d3.selectAll(b[0].concat(m.node())).style("position", "fixed").style("left", 0).style("top", 0).style("width", "100%"), M = d3.select("body").append("div").attr("class", "indicator").selectAll("div").data(d3.range(b.size())).enter().append("div").style("position", "absolute").style("z-index", 10).style("left", 0).style("width", "3px").style("background", "linear-gradient(to top,black,white)"), K = d3.select(null), N = d3.select(b[0][0]), W = d3.select(b[0][1]);
        d3.select(window).on("resize.stack", f).on("scroll.stack", a).on("keydown.stack", c).each(f), d3.timer(function () {
            return a(), !0
        })
    }
    return d.size = function (e) {
        return arguments.length ? (p = [+e[0], +e[1]], f(), d) : p
    }, d.scrollRatio = function (e) {
        return arguments.length ? (g = +e, f(), d) : g
    }, d.fontSize = function (e) {
        return arguments.length ? (u = +e, f(), d) : u
    }, d3.rebind(d, h, "on"), d
}