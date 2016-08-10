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
    console.log('loading ...');
    getJSON('visual.json', function (e, d) {
        var content = d.content;
        var js = content.js;

        addStyleString(content.css);
        eval(content.js);

        var guid = d.visual.guid;
        console.log(guid);
        var plugin = powerbi.visuals.plugins[guid];
        var element = document.getElementById('host');
        element.className = 'visual-' + guid;
        var viz = plugin.create({
            element: element,
            host: mockHost
        });

        var vm = {
            dataPoints: [{ category: 'one', color: '#FE4365', value: 10 },
                { category: 'two', color: '#FC9D9A', value: 7 },
                { category: 'three', color: '#F9CDAD', value: 5 },
                { category: 'four', color: '#C8C8A9', value: 3 },
                { category: 'five', color: '#83AF9B', value: 2 }],
            dataMax: 10,
            settings: { enableAxis: { show: true } }
        };

        viz.update({ viewport: { height: window.innerHeight, width: window.innerWidth } }, vm)
    });
}

load();
