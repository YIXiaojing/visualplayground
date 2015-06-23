/**
 * Created by sachinpatney on 6/22/15.
 */

self.onmessage = function (e) {
    task();
    self.postMessage(e.data, []);
    self.close();
};
