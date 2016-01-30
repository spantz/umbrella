'use strict';

var timer = require('timer');

var items = [
    'This too shall pass like all the times before.',
    'I am not my thoughts, I am my actions.',
    'I am capable of facing my fears.',
    'Thoughts are just thoughts, not facts.',
    'My best is good enough.',
    'I have control of this.',
    'It’s okay to be anxious.'
];

var index = 0;
var label;

function replaceAffirmation(label, text) {
    label.animate({
        opacity: 0,
        duration: 2000
    }).then(function () {
        label.text = text;
        label.animate({
            opacity: 1,
            duration: 2000
        });
    });
}

function loadNextAffirmation() {
    var length = items.length;
    if (index >= length) {
        index = 0;
    }

    var item = items[index];
    index++;

    return item;
}

exports.loaded = function (args) {
    label = args.object;

    label.text = loadNextAffirmation();
    timer.setInterval(function () {
        replaceAffirmation(label, loadNextAffirmation());
    }, 10000);
};