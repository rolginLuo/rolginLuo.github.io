(function ($, root){
    // play pause getAudio
    // 播放 暂停    获取音频
    function AudioManager(){
        // 创建音频对象
        this.audio = new Audio();
        // this.src = src;
        // audio 默认状态（默认为暂停）
        this.status = 'pause';
    }

    AudioManager.prototype = {
        play:function () {
            this.audio.play();
            this.status = 'play';
        },
        pause: function () {
            this.audio.pause();
            this.status = 'pause';
        },
        getAudio:function (src) {
            this.audio.src = src;
            this.audio.load();
        },
        playTo: function (time) {
            this.audio.currentTime = time;
            this.audio.play();
        }
    }

    root.audioManager = new AudioManager();

})(window.Zepto, window.player || (window.player == {}))