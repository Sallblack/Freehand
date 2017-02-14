//点击滚动到顶部
var overHead=document.getElementById('top')
overHead.onclick=function(){
	var oldScroll=getSt();
	tweenFn(-oldScroll);
}

//获取当前滚动条高度
function getSt(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}
//滚动效果
function tweenFn(change,fn) {
	var start=getSt();
	var change=change;
	var t=0;
	var endT=30;
	var timer=setInterval(function(){
		t++;
		if (t>endT) {
			clearInterval(timer);
		}else{
			var l=Tween.Cubic.easeOut(t,start,change,endT)
			document.documentElement.scrollTop=l;
			document.body.scrollTop=l;
		}
	},30);
}
// 联系我们
    var $contact = $(".fixed ul li");
    var $guanbi = $(".fixed .guanbi");
    $contact.click(
        function(){
        	$contact.find(".box").hide()
        	$contact.css({background:"url(images/contact_bg.png)"});
            $(this).css({background:"url(images/contact_bg1.png)"});

            $(this).find(".box").css({display:"block"});
        }
    );
    $guanbi.click(
            function(event){
                $contact.css({background:"url(images/contact_bg.png)"});
                $contact.find(".box").css({display:"none"});
                event.stopPropagation();
            }
    );
