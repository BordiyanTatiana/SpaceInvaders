SI.Sprite = SI.Class.extend({


    init: function (src, width, height) {
        this.initImage(src, width, height);
        return this;
    },

    initImage: function (src, width, height) {
        this.image = new Image();
        this.image.src = src;
        this.width = width;
        this.height = height;
    },

    draw: function () {
        var x = this.x - (this.width / 2);
        var y = this.y - (this.height / 2);
        this._scene.context.drawImage(this.image, x, y);
    },

    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    },

    getPositionX: function () {
        return this.x;
    },
    getPositionY: function () {
        return this.y;
    },

    moveLeft: function (value) {
        this.setPosition(this.x - value, this.y);
    },


    moveRight: function (value) {
        this.setPosition(this.x + value, this.y);
    },


    moveFront: function (value) {
        this.setPosition(this.x, this.y + value);
    },

    addTo: function (scene) {
        this._scene = scene;
        this.setPosition(scene.getWidth()/2,scene.getHeight()/2);
        this.draw();
        return this;
    },

    update: function(){
        this.draw();
    }

});

SI.sprite = function (src, width, height) {
    return new SI.Sprite(src, width, height);
};