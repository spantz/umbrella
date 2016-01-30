'use strict';

var page;

function animate(message) {
    message.animate({
        opacity: .75,
        scale: {x:1, y:1},
        duration: 3000
    }).then(function () {
        message.animate({
            opacity: 1,
            scale: {x:1.5, y:1.5},
            duration: 3000
        });
    });
}

exports.loaded = function (args) {
    page = args.object;

    var message = page.getViewById('breathe');
    animate(message);
    setInterval(function () {
        animate(message);
    }, 6500);
};
