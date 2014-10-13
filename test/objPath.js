/*global define*/
define(['intern!object', 'intern/chai!assert', 'objPath'], function (registerSuite, assert, objPath) {
    'use strict';

    var doc;

    registerSuite({
        name: 'objPath',
        setup:      function () { doc = {};   },
        teardown:   function () { doc = null; },
        singlePath: function () {
            objPath(doc, 'person', 'John');
            assert.strictEqual(doc.person, 'John', 'single Path');
        },
        doublePath: function () {
            objPath(doc, 'person.name', 'Mike');
            assert(doc.person.name ===  'Mike', 'Blah');
        },
        toNativeNumber: function () {
            objPath(doc, 'person.age', '31');
            assert.strictEqual(doc.person.age, 31, 'Bar');
        },
        array: function () {
            objPath(doc, 'person[0].surname', 'Rambo');
            assert.strictEqual(doc.person[0].surname, 'Rambo', 'blah');
        },
        empty: function () {
            objPath(doc, 'person[0].friend', 'false');
            assert.strictEqual(doc.person[0].friend, undefined, 'blo');
        },
        nonNative: function () {
            objPath(doc, 'person.4.friend', 'false', {toNative: false});
            assert.strictEqual(doc.person[4].friend, 'false', 'blo');
        }
    });

});
