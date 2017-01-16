var wxDefault = {
    title: '教您便利出行，我才放心远行——滴滴老人打车暖心上线！',
    desc: '这次春节回家，要让爸妈的出行不再难。',
	link:"http://static.diditaxi.com.cn/site/pages/laorendache/index.html",
    imgUrl:"http://static.diditaxi.com.cn/site/pages/laorendache/images/share.jpg",	
    success: function () {
		_czc.push(["_trackEvent", "按钮", "分享回调", "分享回调", 0, "btn"]);
    }
};
didi.setShare({
	url: wxDefault.link, // 分享地址
	icon: wxDefault.imgUrl, // 分享图标
	title: wxDefault.title, // 分享标题
	content: wxDefault.desc, // 分享文案
	success: wxDefault.success,
	sina_weibo:false,
	qzone: false,
	qq_appmsg: false
});
function getQueryString(name) {  
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
	var r = location.search.substr(1).match(reg);  
	if (r != null) return unescape(decodeURI(r[2])); return null;  
}  
//判断滴滴端内外
function isInDidi(){
    if(window.DidiJSBridge || (window.KDShare != undefined && window.KDShare.share != undefined) || (navigator.userAgent.indexOf('kd.passenger') > -1 )){
        return true;
    }else{
        return false;
    }
}
//拉起端内分享
function shareInDidi(){
	didi.bridge("invoke_entrance");
    console.log('拉起分享');
}
