var mockHost = {
    createSelectionIdBuilder: () => {
        return {
            withCategory: function () { return this },
            withSeries: function () { return this },
            withMeasure: function () { return this },
            createSelectionId: () => {
                return {
                    equals: () => false,
                    includes: () => false,
                    getKey: () => "fakekey",
                    getSelector: "",
                    getSelectorsByColumn: () => [],
                    hasIdentity: () => false
                }
            }
        }
    },
    createSelectionManager: () => {
        return {
            select: () => {
                return {
                    then: (fx) => fx([])
                }
            },
            hasSelection: () => false,
            clear: () => {
                return {
                    then: (fx) => fx([])
                }
            },
            getSelectionIds: () => []
        }
    },
    colors: [{ value: 'green' }, { value: 'blue' }]
}

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function load() {
    getJSON('viz.json', function (e, d) {
        var content = d.content;
        var js = content.js;

        addStyleString(content.css);
        eval(content.js);

        var guid = d.visual.guid;
        var plugin = powerbi.visuals.plugins[guid];
        var element = document.getElementById('host');
        element.className = 'visual-' + guid;
        var viz = plugin.create({
            element: element,
            host: mockHost
        });

        viz.update({ viewport: { height: window.innerHeight, width: window.innerWidth } });
    });
}

load();
