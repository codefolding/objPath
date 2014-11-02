/*global define*/
if (typeof define === 'undefined') { define = function(init) { var r = function () {}, e = this, m = {}; if (this.require) { r = require; e = exports; m = module; } init(r, e, m); if (m.exports) { this.pathly = m.exports; }}; }

define(function (require, exports, module) {
    'use strict';

    function compress(a) {
        var n = [], i;
        for (i = 0; i <= a.length; i += 1) { if (a[i]) { n.push(a[i]); } }
        return n;
    }

    function merge(a, b) {
        if (a.substring) { return b; }
        var p;
        for (p in b) {
            if (b.hasOwnProperty(p)) {
                if (!a[p]) {
                    // Add if not found
                    a[p] = b[p];
                } else {
                    // If found, merge again
                    a[p] = merge(a[p], b[p]);
                }
            }
        }
        return a.join ? compress(a) : a;
    }

    function run(obj, path, value, opts) {
        var tempObj,
            key;

        path = path.replace(/\[(\d)\]/g, '.$1').split('.');

        while (key = path.pop()) {
            tempObj = isNaN(key) ? {} : [];

            if ((opts || {}).toNative !== false) {
                if (!isNaN(value))      { value = parseFloat(value, 10); }
                if (value === 'true')   { value = true; }
                if (value === 'false')  { value = false; }
            }

            if (!value) { break; }

            tempObj[key] = value;
            value = tempObj;
            if (!path.length) { merge(obj, tempObj); }
        }
    }

    module.exports = run;
});