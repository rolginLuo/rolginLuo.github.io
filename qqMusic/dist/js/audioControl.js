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
        bindEvent:function(){
            $(this.audio).on("ended",function(){
                console.log(11)
                $(document.body).find(".next").trigger("click");
            }) 
        },
        play:function () {
            this.status = 'play';
            if(this.audio.readyState == 4){
                this.audio.play();
            }else {
                this.audio.oncanplay = function () {
                    this.play();
                }
            }
        },
        pause: function () {
            this.audio.pause();
            this.status = 'pause';
        },
        getAudio:function (src) {
            this.audio.src = src;
            this.audio.load();
            this.audio.oncanplay = function () {
                // console.log('getAudio canplay');
                loadAudio = true;
            }
            this.audio.oncanplaythrough = function () {
                // console.log('getAudio canplaythrough')
                loadAudio = true;
            }
        },
        playTo: function (time) {
            this.audio.currentTime = time;
            this.audio.play();
        }
    }

    root.audioManager = new AudioManager();

})(window.Zepto, window.player || (window.player == {}))