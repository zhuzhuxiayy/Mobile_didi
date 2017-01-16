$(function(){
    var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var isAndroid=/Android/i.test(navigator.userAgent);
    var touchstart = mobile ? "touchstart" : "mousedown";
    var touchend = mobile ? "touchend" : "mouseup";
    var touchmove = mobile ? "touchmove" : "mousemove";
    var tap = mobile ? "tap" : "click";
    var allowTouch=false;
    var pageNum=1;
    var textSpeed=1.5;
    var pageArray=[];
    var musicOn=true;

    $('.page>div').each(function(){
        pageArray.push($(this));
    });

    $('.page1').remove();

    //阻止屏幕滑动
    $('html,body').on(touchmove,function(e){
        e.preventDefault()
    });
    var stageW=$(window).width();
    var stageH=$(window).height();

    var loadingPath='images/';
    var manifest=[
         {src:loadingPath+'fu.png'},
         {src:loadingPath+'logo.png'},
         {src:loadingPath+'musicicon.png'},
         {src:loadingPath+'p1_1.png'},
         {src:loadingPath+'p1_2.png'},
         {src:loadingPath+'p1_3.png'},
         {src:loadingPath+'p1_4.png'},
         {src:loadingPath+'p1_5.png'},
         {src:loadingPath+'p1_6.png'},
         {src:loadingPath+'p1_7.png'},
         {src:loadingPath+'p1_8.png'},
         {src:loadingPath+'p1_9.png'},
         {src:loadingPath+'p1.jpg'},
         {src:loadingPath+'p2_1.png'},
         {src:loadingPath+'p2_2.png'},
         {src:loadingPath+'p2_3.png'},
         {src:loadingPath+'p2_4.png'},
         {src:loadingPath+'p2.jpg'},
         {src:loadingPath+'p3_1.png'},
         {src:loadingPath+'p3_2.png'},
         {src:loadingPath+'p3_3.png'},
         {src:loadingPath+'p3_4.png'},
         {src:loadingPath+'p3.jpg'},
         {src:loadingPath+'p4_1.png'},
         {src:loadingPath+'p4_2.png'},
         {src:loadingPath+'p4_3.png'},
         {src:loadingPath+'p4_4.png'},
         {src:loadingPath+'p4.jpg'},
         {src:loadingPath+'p5_1.png'},
         {src:loadingPath+'p5_2.png'},
         {src:loadingPath+'p5_3.png'},
         {src:loadingPath+'p5.jpg'},
         {src:loadingPath+'p6_1.png'},
         {src:loadingPath+'p6_2.png'},
         {src:loadingPath+'p6_3.png'},
         {src:loadingPath+'p6_4.png'},
         {src:loadingPath+'p6.jpg'},
         {src:loadingPath+'p7_1.png'},
         {src:loadingPath+'p7_2.png'},
         {src:loadingPath+'p7_3.png'},
         {src:loadingPath+'p7.jpg'},
         {src:loadingPath+'p8_1.png'},
         {src:loadingPath+'p8_2.png'},
         {src:loadingPath+'p8_3.png'},
         {src:loadingPath+'p8_4.png'},
         {src:loadingPath+'p8_5.png'},
         {src:loadingPath+'p8_6.png'},
         {src:loadingPath+'p8_7.png'},
         {src:loadingPath+'p8.jpg'},
         {src:loadingPath+'sharepop.png'},
         {src:loadingPath+'Touch4.png'}

    ];

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("progress", handleOverallProgress);
    loader.addEventListener("complete", handleOverallComplete);
    loader.setMaxConnections(1);
    loader.loadManifest(manifest);

    function handleOverallProgress(event){
        $('.loadingtxt').text(Math.ceil(event.loaded*100)+"%");
    }
    function handleOverallComplete(event){
        $('.loading').remove();
        $('.page>div').remove();
        $('.page').append(pageArray[0]);
        $('.main').fadeIn(function(){
            initPageMotion();
        })
    }

    //音乐模块
    var mySound = $('#media')[0];

    function yinyue(){
        if(musicOn){
            mySound.play();
        }else{
            mySound.pause();
        }
    }

    $('.main').on(touchstart,function(e){
        yinyue();
    });

    $('.musicicon').on(touchstart,function(){
        if($(this).hasClass('musicrotate')){
            musicOn=false;
            mySound.pause();
            $(this).removeClass('musicrotate');
        }else{
            musicOn=true;
            mySound.play();
            $(this).addClass('musicrotate');
        }
    });

    function initPageMotion() {
        var timeline=new TimelineMax();
        timeline.add(TweenMax.from('.p1_1_1', 0.5, {onStart:function(){
            $('.p1_1').show();
        },'-webkitMaskPosition':'-476px 105px',ease:Expo.easeOut}));
        timeline.add(TweenMax.from('.p1_1_2', 0.4, {'-webkitMaskPosition':'633px -77px',ease:Expo.easeOut}),'-=0.2');
        timeline.add(TweenMax.from('.p1_1_3', 0.5, {'-webkitMaskPosition':'-640px 250px',ease:Expo.easeOut},'-=0.2'));
        timeline.add(TweenMax.from('.p1_1_4', 0.5, {'-webkitMaskPosition':'640px 90px',ease:Expo.easeOut}),'-=0.2');
        timeline.add(TweenMax.from('.p1_1_5', 0.4, {'-webkitMaskPosition':'-242px 419px',ease:Expo.easeOut}),'-=0.2');
        timeline.add(TweenMax.from('.p1_1_6', 0.5, {'-webkitMaskPosition':'527px 184px',ease:Expo.easeOut}),'-=0.2');
        timeline.add(TweenMax.to('.p1_2', 0.8, {alpha:1, ease:Linear.easeNone}));
        timeline.add(TweenMax.to('.p1_3', 0.8, {alpha:1, ease:Linear.easeNone,onComplete:function(){
            allowTouch=true;
            $('.shan').addClass('on')
        }}));
    }

    function initPage8Motion(){
         var timeline8=new TimelineMax();
         timeline8.add(TweenMax.from('.page8_1', 1.2, {onStart:function(){
             $('.page8>div').css('display','block');
         },x:-100,y:100,alpha:0,ease:Expo.easeOut}));
         timeline8.add(TweenMax.from('.page8_2', 1.2, {x:100,y:100,alpha:0,ease:Expo.easeOut}));
         timeline8.add(TweenMax.from('.page8_3', 0.8, {alpha:0,ease:Linear.easeNone}));
         timeline8.add(TweenMax.from('.page8_4', 0.8, {alpha:0,ease:Linear.easeNone}));
         timeline8.add(TweenMax.from('.page8_5', 0.8, {alpha:0,ease:Linear.easeNone}));
         timeline8.add(TweenMax.from('.page8_6', 0.8, {alpha:0,y:20,ease:Expo.easeOut}));
         timeline8.add(TweenMax.from('.page8_7', 0.8, {alpha:0,y:20,ease:Expo.easeOut}),'-=0.6');
    }


    $('.main').swipeUp(function(e){
        if(pageNum<8){
            fogMask(true)
        }
    });

    $('.main').swipeDown(function(e){
        if(pageNum>1){
            fogMask(false)
        }
    });

    function fogMask(isUp){
        yinyue();
        if(allowTouch){
            allowTouch=false;
            $('.shan').removeClass('on');
            var i=0;
            if(isUp){
                pageNum++;
            }else{
                pageNum--
            }
            pageArray[pageNum-1].attr('style','');
            pageArray[pageNum-1].children().attr('style','');
            $('.page').append(pageArray[pageNum-1]);

            TweenMax.killAll()

            if(isAndroid && isInDidi()){
                TweenMax.set('.page'+pageNum,{ display:'block',alpha:0});
                     TweenMax.to('.page'+pageNum,1,{onStart:function(){
                     if(pageNum==8){
                         $('.page8>div').css('display','none');
                         }
                         },alpha:1,onComplete:function(){
                         allowTouch=true;
                         $('.shan').addClass('on')
                         if(isUp){
                         $('.page'+(pageNum-1)).remove();
                         }else{
                         $('.page'+(pageNum+1)).remove();
                         }

                         if(pageNum<8){
                         if(pageNum==1){
                         allowTouch=false;
                         initPageMotion()
                     }else{
                         TweenMax.to('.page'+pageNum+'_1', 0.4, {alpha:1, ease:Linear.easeNone});
                         TweenMax.to('.page'+pageNum+'_2', textSpeed, {delay:.5, alpha:1, ease:Linear.easeNone});
                         TweenMax.to('.page'+pageNum+'_3', textSpeed, {delay:1.5, alpha:1, ease:Linear.easeNone});
                         TweenMax.to('.page'+pageNum+'_4', textSpeed, {delay:2.2, alpha:1, ease:Linear.easeNone})
                         }

                         }else if(pageNum==8){
                         $('.shan').removeClass('on');
                         initPage8Motion();
                     }
                 }})
            }else{
                TweenMax.to('.main',0.08,{onStart:function(){
                    $('.page'+pageNum).addClass('sprite4').show();
                    if(pageNum==8){
                        $('.page8>div').css('display','none');
                    }
                },repeat:19,onRepeat:function(){
                    i++;
                    var a=i%4;
                    var b=Math.floor(i/4);
                    TweenMax.set('.page'+pageNum,{'-webkitMaskPosition':33.3*a+'% '+25*b+'%'});
                },onComplete:function(){
                    allowTouch=true;
                    $('.shan').addClass('on')
                    if(isUp){
                        $('.page'+(pageNum-1)).remove();
                    }else{
                        $('.page'+(pageNum+1)).remove();
                    }

                    if(pageNum<8){
                        if(pageNum==1){
                            allowTouch=false;
                            initPageMotion()
                        }else{
                            TweenMax.to('.page'+pageNum+'_1', 0.4, {alpha:1, ease:Linear.easeNone});
                            TweenMax.to('.page'+pageNum+'_2', textSpeed, {delay:.5, alpha:1, ease:Linear.easeNone});
                            TweenMax.to('.page'+pageNum+'_3', textSpeed, {delay:1.5, alpha:1, ease:Linear.easeNone});
                            TweenMax.to('.page'+pageNum+'_4', textSpeed, {delay:2.2, alpha:1, ease:Linear.easeNone})
                        }

                    }else if(pageNum==8){
                        $('.shan').removeClass('on');
                        initPage8Motion();
                    }
                }})
            }
        }
    }

    $('.page8_6').on(tap,function(){
		_czc.push(["_trackEvent", "按钮", "马上开启按钮", "马上开启按钮", 0, "btn"]);
		var urlParse = function(url) {
            url = url || location.search;
            var obj = {},
                arr = url.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+", "g")) || [];
            arr.forEach(function(item) {
                var _obj = item.slice(1).split('='),
                    key = decodeURIComponent(_obj[0]),
                    val = decodeURIComponent(_obj[1]);
                obj[key] = val;
            });
            return obj;
        }
        var params = urlParse();
        $.ajax({
            type: 'get',
            url: '//pay.xiaojukeji.com/api/v2/weixinapi/collect_log',
            data: {
                type: 'taxi_aged_service_open',
                aged_service_type: 114
            },
            timeout: 3000,
            complete: function(){
                if(params.token){
                    location.href = 'http://pay.xiaojukeji.com/api/v2/p_parent?view=view_add_base_info&special_share=1&token=' + params.token + '&maptype=' + (params.maptype || '');
                }else{
                    location.href='http://common.diditaxi.com.cn/general/webEntry?page=valid&title=%E8%AF%B7%E8%BE%93%E5%85%A5%E6%82%A8%E7%9A%84%E6%89%8B%E6%9C%BA%E5%8F%B7&desc=%E7%99%BB%E5%BD%95%E5%90%8E%E4%B8%BA%E7%88%B6%E6%AF%8D%E5%BC%80%E9%80%9A%E6%95%AC%E8%80%81%E7%89%88&redirecturl=http%3A%2F%2Fpay.xiaojukeji.com%2Fapi%2Fv2%2Fp_parent%3Fview%3Dview_add_base_info%26special_share%3D1';
                }
            }
        });
    });

    $('.page8_7').on(tap,function(){
		var tempIsDidi = isInDidi();
		if(tempIsDidi)
		{
			shareInDidi();
		}
		else
		{
			$('.sharemask').show();
		}
		_czc.push(["_trackEvent", "按钮", "分享按钮", "分享按钮", 0, "btn"]);
    });

    $('.sharemask').on(tap,function(){
        $('.sharemask').hide();
    });




});