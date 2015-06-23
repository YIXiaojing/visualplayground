/**
 * Created by sachinpatney on 6/22/15.
 */

self.onmessage = function (e) {
    task();
    self.postMessage(e.data, []);
    self.close();
};

var task = function () {
    var str = '';
    for (var i = 0; i < 1000000; i++)
        str += '' + (i * i * i)
};
