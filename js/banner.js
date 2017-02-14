//banner 图js

function banner(obj,dra){
	var view=document.getElementById(obj);
	var img=view.getElementsByTagName('a');
	var tabBtn=document.getElementById(dra);
	var li=tabBtn.getElementsByTagName('li');
	var index=0;
	var bol=false;
	for (var i = 0; i < li.length; i++) {
		var temp=img[0];
		var old=li[0];
		li[i].index=i;
		li[i].onclick=function(){
			if (bol) {
				return;
			}
			old.className="";
			index=this.index;
			this.className="btn_selecet";
			if (temp==img[index]) {return};
			opacityFn(0.02,2,img[index],temp);
			old=li[index];
			temp=img[index];
		}
		
	};
	//渐隐渐现
	function opacityFn(num,numIe,obj,dra){
		bol=true;
		var o=0;
		var oIe=0;
		var otemp=1;
		var otempIe=100;
		var timer=setInterval(function(){
			o+=num;
			oIe+=numIe;
			otemp-=num;
			otempIe-=numIe;
			if (o>1||otemp<0) {
				o=1;
				otemp=0;
				clearInterval(timer);
				bol=false;

			}
			obj.style.opacity=o;
			obj.style.filter="alpha(opacity="+oIe+")";
			dra.style.opacity=otemp;
			dra.style.filter="alpha(opacity="+otempIe+")";

		},30)
	}
}