$(function() {
    var Didi = {
        init: function() {
            var that = this;
            var mySwiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                direction: 'vertical',
                loop: false,
                onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素 
                    swiperAnimate(swiper); //初始化完成开始动画
                    that.initPageMotion(); //初始化首页的蒙版效果
                    that.addSprite(1); //初始化首页的遮罩
                    $('.swiper-slide').eq(0).addClass('addbg').siblings().removeClass('addbg');
                },
                onSlideChangeEnd: function(swiper) {
                    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                    if (swiper.activeIndex == 0) {
                        that.initPageMotion(); //首页蒙版效果出现
                    }
                    if (swiper.activeIndex < 8) {
                        that.addSprite(swiper.activeIndex + 1); //每个页面的遮罩
                    }
                    $('.swiper-slide').eq(swiper.activeIndex).addClass('addbg').siblings().removeClass('addbg');
                }
            });
            this.dealMusic();
        },
        dealMusic: function() {
            // var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
            // var isAndroid = /Android/i.test(navigator.userAgent);
            // var touchstart = mobile ? "touchstart" : "mousedown";
            // var touchend = mobile ? "touchend" : "mouseup";
            // var touchmove = mobile ? "touchmove" : "mousemove";
            // var tap = mobile ? "tap" : "click";
            var musicOn = true;
            var mySound = $('#media')[0]; //音乐模块
            function music() {
                if (musicOn) {
                    mySound.play();
                    $('.musicicon').addClass('musicrotate');
                } else {
                    mySound.pause();
                    $('.musicicon').removeClass('musicrotate');
                }
            }

            $('.swiper-container').on("click", function(e) {
                music();
            });

            $('.musicicon').on("click", function() {
                ($(this).hasClass('musicrotate')) ? musicOn = false: musicOn = true;
                music();
            });
        },
        initPageMotion: function() {
            var timeline = new TimelineMax({ delay: 1.5 });
            timeline.add(TweenMax.from('.p1_1_1', 0.5, {
                onStart: function() {
                    $('.p1_1').show();
                },
                '-webkitMaskPosition': '-476px 105px',
                ease: Expo.easeOut
            }));
            timeline.add(TweenMax.from('.p1_1_2', 0.4, { '-webkitMaskPosition': '633px -77px', ease: Expo.easeOut }), '-=0.2');
            timeline.add(TweenMax.from('.p1_1_3', 0.5, { '-webkitMaskPosition': '-640px 250px', ease: Expo.easeOut }, '-=0.2'));
            timeline.add(TweenMax.from('.p1_1_4', 0.5, { '-webkitMaskPosition': '640px 90px', ease: Expo.easeOut }), '-=0.2');
            timeline.add(TweenMax.from('.p1_1_5', 0.4, { '-webkitMaskPosition': '-242px 419px', ease: Expo.easeOut }), '-=0.2');
            timeline.add(TweenMax.from('.p1_1_6', 0.5, { '-webkitMaskPosition': '527px 184px', ease: Expo.easeOut }), '-=0.2');
            // timeline.add(TweenMax.to('.p1_2', 0.8, {alpha:1, ease:Linear.easeNone}));
            // timeline.add(TweenMax.to('.p1_3', 0.8, {alpha:1, ease:Linear.easeNone,onComplete:function(){
            //     allowTouch=true;
            //     $('.shan').addClass('on')
            // }}));
        },
        addSprite: function(pageNum) {
            TweenMax.to('.swiper-container', 0.08, {
                onStart: function() {
                    $('.page' + pageNum).addClass('sprite4').show();
                    if (pageNum == 8) {
                        $('.page8>div').css('display', 'none');
                    }
                },
                repeat: 19,
                onRepeat: function() {
                    i++;
                    var a = i % 4;
                    var b = Math.floor(i / 4);
                    TweenMax.set('.page' + pageNum, { '-webkitMaskPosition': 33.3 * a + '% ' + 25 * b + '%' });
                },
                onComplete: function() {
                    allowTouch = true;
                    // $('.shan').addClass('on');
                    // if (isUp) {
                    //     $('.page' + (pageNum - 1)).remove();
                    // } else {
                    //     $('.page' + (pageNum + 1)).remove();
                    // }

                    // if (pageNum < 8) {
                    //     if (pageNum == 1) {
                    //         allowTouch = false;
                    //         initPageMotion()
                    //     } else {
                    //         TweenMax.to('.page' + pageNum + '_1', 0.4, { alpha: 1, ease: Linear.easeNone });
                    //         TweenMax.to('.page' + pageNum + '_2', textSpeed, { delay: .5, alpha: 1, ease: Linear.easeNone });
                    //         TweenMax.to('.page' + pageNum + '_3', textSpeed, { delay: 1.5, alpha: 1, ease: Linear.easeNone });
                    //         TweenMax.to('.page' + pageNum + '_4', textSpeed, { delay: 2.2, alpha: 1, ease: Linear.easeNone })
                    //     }
                    // } else if (pageNum == 8) {
                    //     $('.shan').removeClass('on');
                    //     initPage8Motion();
                    // }
                }
            })
        }
    }
    Didi.init();
})
