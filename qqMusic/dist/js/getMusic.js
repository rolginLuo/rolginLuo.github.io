// 传进来音乐列表 修改音乐路径和图片
(function ($, root) {
    function renderImg(src) {
        var img = new Image();
        img.src = src;
        img.onload = function () {
            $('.img-box img').attr('src',src);
            root.blurImg(img, $('body'));
        }
    }
    // 返回修复好的对象，这个对象包含修复好的MP3路径，以及图片
    function getList(songName){

        return {
            audioSrc,
            imageSrc
        }
    }
    function getmusicList (musicList) {
        musicList.forEach(function(item, index){
            item.song
        })
    }
    root.fixMusic = function (musicList) {
        getmusicList(musicList)
    }

})(window.Zepto, window.player || (window.player = {}))