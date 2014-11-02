/*global define*/
define(['intern!object', 'intern/chai!assert', 'pathly'], function (registerSuite, assert, pathly) {
    'use strict';

    var doc;

    registerSuite({
        name: 'pathly',
        setup:      function () { doc = {};   },
        teardown:   function () { doc = null; },
        singlePath: function () {
            pathly(doc, 'person', 'John');
            assert.strictEqual(doc.person, 'John', 'single Path');
        },
        doublePath: function () {
            pathly(doc, 'person.name', 'Mike');
            assert(doc.person.name ===  'Mike', 'Blah');
        },
        toNativeNumber: function () {
            pathly(doc, 'person.age', '31');
            assert.strictEqual(doc.person.age, 31, 'Bar');
        },
        array: function () {
            pathly(doc, 'person[0].surname', 'Rambo');
            assert.strictEqual(doc.person[0].surname, 'Rambo', 'blah');
        },
        empty: function () {
            pathly(doc, 'person[0].friend', 'false');
            assert.strictEqual(doc.person[0].friend, undefined, 'blo');
        },
        nonNative: function () {
            pathly(doc, 'person.4.friend', 'false', {toNative: false});
            assert.strictEqual(doc.person[4].friend, 'false', 'blo');
        }
    });

});
