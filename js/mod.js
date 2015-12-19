define(function(require, exports, moduel){
    var mymove=require("mymove");
    moduel.exports= {
        //banner
        banner: function () {
            var oBanWrap=document.getElementById("js-ban-wrap");
            var oBanner=document.getElementById("js-banner");
            var oBanBtn=document.getElementById("js-ban-btn");
            var oUl=oBanner.getElementsByTagName("ul")[0];
            var aUlLi=oBanner.getElementsByTagName("li");
            var aBtn=oBanBtn.getElementsByTagName("li");
            oUl.innerHTML+=oUl.innerHTML;
            oUl.style.width=oUl.children.length*oUl.children[0].offsetWidth+"px";
            var now=0;
            var timer=null;
            for(var i=0;i<aBtn.length;i++){
                (function(index){
                    aBtn[i].onclick=function(){
                        now=index;
                        tab();
                    }
                })(i)
            }
            function tab(){
                for(var i=0;i<aBtn.length;i++){
                    aBtn[i].className="";
                }
                if(now==3){
                    aBtn[0].className="active";
                }else{
                    aBtn[now].className="active";
                }
                move(oUl,{"left":-now*aUlLi[0].offsetWidth},{fn:function(){
                    if(now==3){
                        oUl.style.left=0;
                        now=0;
                    }
                }});
            }
            function next(){
                now++;
                tab();
            }

            timer=setInterval(next,3000);
            oBanWrap.onmouseover=function(){clearInterval(timer)};
            oBanWrap.onmouseout=function(){timer=setInterval(next,3000)};

        },
        //topNav
        topNav: function (){
            var headerNav=document.getElementById("js-top-nav");
            var aNavs=headerNav.getElementsByTagName("a");
            for(var i=0;i<aNavs.length;i++){
                aNavs[i].onmouseover=function(){
                    for(var i=0;i<aNavs.length;i++){
                        aNavs[i].style.borderBottom="none";        
                    }
                    this.style.borderBottom="1px solid #d21b69";
                    var oB=this.getElementsByTagName("b")[0];
                    oB.style.color="#ffffff";
                }
                aNavs[i].onmouseout=function(){
                    for(var i=0;i<aNavs.length;i++){
                        aNavs[i].style.borderBottom="none";
                    }
                    var oB=this.getElementsByTagName("b")[0];
                    oB.style.color="#818180";
                }
            }
        },
        //menuLeft
        menuLeft: function(){
            var menuLeft=document.getElementById("js-lt-menu");
            var aMenu=menuLeft.getElementsByTagName("a");
            for(var i=0;i<aMenu.length;i++){
                aMenu[i].onmouseover=function(){
                    for(var i=0;i<aMenu.length;i++){
                        aMenu[i].style.width="97px";
                    }
                    this.style.width="117px";
                }
                aMenu[i].onmouseout=function(){
                    this.style.width="97px";
                }
            }
        },
        //case
        myCase: function(){
            var oCase=document.getElementById("js-case");
            var aLi=oCase.getElementsByTagName("li");
            var aDiv=oCase.getElementsByTagName("div");
            for(var i=0;i<aLi.length;i++){
                (function(index){
                    aLi[i].onmouseover=function(){
                        move(aDiv[index],{"bottom":0});
                    }
                    aLi[i].onmouseout=function(){
                        move(aDiv[index],{"bottom":-155});
                    }
                })(i)

            }
        },
        //backtop
        backTop:function(){
            var oBackTop=document.getElementById("js-backtop");
            var timer=null;
            var ok=true;
            var scrollH=document.body.scrollTop||document.documentElement.scrollTop;
            oBackTop.style.display="none";
            oBackTop.onmouseover=function(){
                this.style.backgroundPosition="-34px -65px";
            }
            oBackTop.onmouseout=function(){
                this.style.backgroundPosition="-34px 0";
            }

            window.onscroll=function(){
                oBackTop.style.display="block";
                if(ok) clearInterval(timer);
                ok=true;
            };
            oBackTop.onclick=function(){
                var start=document.documentElement.scrollTop||document.body.scrollTop;
                var dis=0-start;
                var count=Math.round(1000/30);
                var n=0;
                clearInterval(timer);
                timer=setInterval(function(){
                    n++;
                    var a=1-n/count;
                    var cur=start+dis*(1-a*a*a);
                    document.documentElement.scrollTop=cur;
                    document.body.scrollTop=cur;
                    ok=false;
                    if(n==count){
                        clearInterval(timer);
                        oBackTop.style.display="none";
                    }
                },30);
            }
        },
        //form
        myForm:function(){
            var formIpt01=document.getElementById("js-ipt01");
            var formIpt02=document.getElementById("js-ipt02");
            var formIpt03=document.getElementById("ft-ta");
            var formBtn=document.getElementById("js-submit");
            formIpt01.onfocus=function(){
                this.value="";
            }
            formIpt01.onblur=function(){
                this.value="MESSAGE TITLE";

            }
            formIpt02.onfocus=function(){
                this.value="";
            }
            formIpt02.onblur=function(){
                this.value="NAME";
            }
            formIpt03.onfocus=function(){
                this.innerHTML="";
            }
            formIpt03.onblur=function(){
                this.innerHTML="MESSAGE";
            }
            formBtn.onclick=function(){
                alert("谢谢您的光临！")
            }
        },
        //right fixed
        rtFixed:function(){
            var rtFd=document.getElementById("js-rFixed");
            var oWeiXin=rtFd.getElementsByTagName("li")[0];
            var oTel=rtFd.getElementsByTagName("li")[1];
            var oQq=rtFd.getElementsByTagName("li")[2];
            var oWeiXin02=rtFd.getElementsByTagName("div")[0];
            var oTel02=rtFd.getElementsByTagName("div")[1];
            var oQq02=rtFd.getElementsByTagName("div")[2];
            oWeiXin.onmouseover=function(){
                move(oWeiXin02,{"left":-(oWeiXin02.offsetWidth+8)});
            }
            oWeiXin.onmouseout=function(){
                move(oWeiXin02,{"left":30});
            }
            oTel.onmouseover=function(){
                move(oTel02,{"left":-(oTel02.offsetWidth+8)});
            }
            oTel.onmouseout=function(){
                move(oTel02,{"left":30});
            }
            oQq.onmouseover=function(){
                move(oQq02,{"left":-(oQq02.offsetWidth+8)});
            }
            oQq.onmouseout=function(){
                move(oQq02,{"left":30});
            }
        }
    }
})
