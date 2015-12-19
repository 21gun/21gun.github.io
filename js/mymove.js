function move(obj,json,optional){
	optional = optional || {};	
	optional.time = optional.time || 700;
	optional.fn = optional.fn || null;
	optional.type=optional.type||'ease-out';
	optional.timeAfter=Math.round(optional.time/2)||350;
	
	
	var start={};
	var dis={};
	for(var attr in json){
		start[attr]=parseFloat(getStyle(obj,attr));
		dis[attr]=json[attr]-start[attr];	
	}
	var count=Math.round(optional.time/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;
		
		for(var attr in json){

			
			switch(optional.type){
				case 'linear':
					var a=n/count;
					var cur=start[attr]+dis[attr]*a;
					break;	
				case 'ease-in':
					var a=n/count;
					var cur=start[attr]+dis[attr]*a*a*a;
					break;	
				case 'ease-out':
					var a=1-n/count;
					var cur=start[attr]+dis[attr]*(1-a*a*a);
					break;	
				case 'ease-in-out':
					if(n/count<=0.8){

						var a=n/count;
						var cur=start[attr]+dis[attr]*a*a*a;
					}else{

						move(obj,json,{time:optional.timeAfter,type:'ease-out',fn:optional.fn});	
					}
					break;	
			}
			
			
			if(attr=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity='+cur*100+')';	
			}else{
				obj.style[attr]=cur+'px';	
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			optional.fn && optional.fn();
		}
	},30);
}

function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];	
}










