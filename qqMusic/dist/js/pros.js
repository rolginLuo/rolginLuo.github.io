(function ($, root) {
    // 进度条模块 渲染左右时间 更新进度条
    var duration;
    var frameId;
    var lastPercent = 0;
    var startTime;
    // 渲染总时间
    function renderAllTime(time) {
        lastPercent = 0;
        duration = time;
        time = formatTime(time);
        $('.all-time').html(time);
    }

    // 处理时间格式     秒--分 + ':' + 秒
    function formatTime(t){
        t = Math.round(t);
        var m = Math.floor( t /60 );
        var s = t - m * 60;
        if( m < 10 ){
            m = '0' + m;
        }
        if( s < 10 ){
            s = '0' + s;
        }
        return m + ':' + s;
    }
    // 渲染
    function start(p){
        lastPercent = p === undefined ? lastPercent : p;
        cancelAnimationFrame(frameId);
        startTime = new Date().getTime();
        function frame () {
            var curTime = new Date().getTime();
            var per = lastPercent + (curTime - startTime) / (duration * 1000);
            
            if(per < 1) {
                frameId = requestAnimationFrame(frame);
                update(per);
            }else if(per >=  1) {
                cancelAnimationFrame(frameId);
                $(document.body).find(".next").trigger("click");
            }
        }
        frame();
    }
    // 渲染
    function stop(){
        stopTime = new Date().getTime();
        // startTime === undefined ? startTime = 0 : ''
        // console.log(lastPercent, typeof lastPercent)
        // console.log(stopTime, typeof stopTime)
        // console.log(startTime, typeof startTime)
        // console.log(duration, typeof duration)
        lastPercent = lastPercent + (stopTime - startTime) / (duration * 1000);
        // console.log(lastPercent, typeof lastPercent)
        cancelAnimationFrame(frameId);
    }

    // 渲染左侧时间  和 进度条
    function update(p) {
        var time = p * duration;
        time = formatTime(time);
        $('.cur-time').html(time);
        var perX = (p - 1) * 100 + '%';
        $('.pro-top').css({
            transform: 'translateX(' + perX + ')'
        })
    }

    root.pros = {
        renderAllTime: renderAllTime,
        start : start,
        stop : stop,
        update : update
    }
})(window.Zepto, window.player || (window.player = {}));