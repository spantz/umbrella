'use strict';

var page;

function animate(message) {
    message.animate({
        opacity: 0,
        duration: 2000
    }).then(function () {
        message.animate({
            opacity: 1,
            duration:2000
        });
    });
}

exports.loaded = function (args) {
    page = args.object;

    var message = page.getViewById('message');
    animate(message);
    setInterval(function () {
        animate(message);
    }, 4250);
};