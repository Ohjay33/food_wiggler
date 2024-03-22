$(document).ready(function () {
    var animations = ['shake',
        'hop',
        'spin',
        'grow',
        'hooray'];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $('.food').on('click', function () {
        var myFood = this;
        var animation = animations[getRandomInt(0, 4)];

        $(myFood).addClass(animation);

        setTimeout(function () {
            $(myFood).removeClass(animation);
        }, 2100);
    });


});