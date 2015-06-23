/**
 * Created by sachinpatney on 6/22/15.
 */

self.onmessage = function (e) {
    var str = '';
    var c = e.data.name;
    for (var i = 0; i < c; i++)
        str += '' + (i * i * i)
        
    self.postMessage(e.data, []);
    self.close();
};
