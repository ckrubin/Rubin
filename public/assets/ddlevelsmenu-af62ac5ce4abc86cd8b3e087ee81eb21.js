function ddlmGetRelAttributeValue(e){var t=e.getAttribute("rel");return"undefined"!=typeof t&&t||(t=e.getAttribute("data-rel")),t}if("undefined"==typeof dd_domreadycheck)var dd_domreadycheck=!1;var ddlevelsmenu={enableshim:!0,arrowpointers:{downarrow:["ddlevelsfiles/arrow-down.gif",11,7],rightarrow:["ddlevelsfiles/arrow-right.gif",12,12],showarrow:{toplevel:!1,sublevel:!1}},hideinterval:200,effects:{enableswipe:!0,enableslide:!0,enablefade:!0,duration:200},httpsiframesrc:"blank.htm",topmenuids:[],topitems:{},subuls:{},lastactivesubul:{},topitemsindex:-1,ulindex:-1,hidetimers:{},shimadded:!1,nonFF:!/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent),ismobile:null!=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),getoffset:function(e,t){return e.offsetParent?e[t]+this.getoffset(e.offsetParent,t):e[t]},getoffsetof:function(e){e._offsets={left:this.getoffset(e,"offsetLeft"),top:this.getoffset(e,"offsetTop")}},getwindowsize:function(){this.docwidth=window.innerWidth?window.innerWidth-10:this.standardbody.clientWidth-10,this.docheight=window.innerHeight?window.innerHeight-15:this.standardbody.clientHeight-18},gettopitemsdimensions:function(){for(var e=0;e<this.topmenuids.length;e++)for(var t=this.topmenuids[e],i=0;i<this.topitems[t].length;i++){var s=this.topitems[t][i],n=document.getElementById(ddlmGetRelAttributeValue(s));s._dimensions={w:s.offsetWidth,h:s.offsetHeight,submenuw:n.offsetWidth,submenuh:n.offsetHeight}}},isContained:function(e,t){for(var t=window.event||t,i=t.relatedTarget||("mouseover"==t.type?t.fromElement:t.toElement);i&&i!=e;)try{i=i.parentNode}catch(t){i=e}return i==e?!0:!1},addpointer:function(e,t,i){var s=document.createElement("span");s.innerHTML="&raquo;",s.className=t;var n=e.childNodes[1!=e.firstChild.nodeType?1:0];n&&"SPAN"==n.tagName&&(e=n),"before"==i?e.insertBefore(s,e.firstChild):e.appendChild(s)},css:function(e,t,i){var s=new RegExp("(^|\\s+)"+t+"($|\\s+)","ig");return"check"==i?s.test(e.className):void("remove"==i?e.className=e.className.replace(s,""):"add"!=i||s.test(e.className)||(e.className+=" "+t))},addshimmy:function(e){var t=document.createElement(window.opera?"div":"iframe");t.className="ddiframeshim",t.setAttribute("src","https:"==location.protocol?this.httpsiframesrc:"about:blank"),t.setAttribute("frameborder","0"),e.appendChild(t);try{t.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"}catch(i){}return t},positionshim:function(e,t,i,s,n){if(e._istoplevel){var n=window.pageYOffset?window.pageYOffset:this.standardbody.scrollTop,d=e._offsets.top-n,o=n+this.docheight-e._offsets.top-e._dimensions.h;d>0&&(this.shimmy.topshim.style.left=s+"px",this.shimmy.topshim.style.top=n+"px",this.shimmy.topshim.style.width="99%",this.shimmy.topshim.style.height=d+"px"),o>0&&(this.shimmy.bottomshim.style.left=s+"px",this.shimmy.bottomshim.style.top=e._offsets.top+e._dimensions.h+"px",this.shimmy.bottomshim.style.width="99%",this.shimmy.bottomshim.style.height=o+"px")}},hideshim:function(){this.shimmy.topshim.style.width=this.shimmy.bottomshim.style.width=0,this.shimmy.topshim.style.height=this.shimmy.bottomshim.style.height=0},buildmenu:function(e,t,i,s,n,d){t._master=e,t._pos=s,t._istoplevel=n,n&&!ddlevelsmenu.ismobile&&this.addEvent(t,function(){ddlevelsmenu.hidemenu(ddlevelsmenu.subuls[this._master][parseInt(this._pos)].parentNode)},"click"),this.subuls[e][s]=i,t._dimensions={w:t.offsetWidth,h:t.offsetHeight,submenuw:i.offsetWidth,submenuh:i.offsetHeight},this.getoffsetof(t),i.parentNode.style.left=0,i.parentNode.style.top=0,i.parentNode.style.visibility="hidden",i.style.visibility="hidden",this.addEvent(t,function(e){if(ddlevelsmenu.ismobile||!ddlevelsmenu.isContained(this,e)){var i=ddlevelsmenu.subuls[this._master][parseInt(this._pos)];this._istoplevel&&(ddlevelsmenu.css(this,"selected","add"),clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])),ddlevelsmenu.getoffsetof(t);var s=window.pageXOffset?window.pageXOffset:ddlevelsmenu.standardbody.scrollLeft,n=window.pageYOffset?window.pageYOffset:ddlevelsmenu.standardbody.scrollTop,o=this._offsets.left+this._dimensions.submenuw+(this._istoplevel&&"topbar"==d?0:this._dimensions.w),l=this._offsets.top+this._dimensions.submenuh,a=this._istoplevel?this._offsets.left+("sidebar"==d?this._dimensions.w:0):this._dimensions.w;o-s>ddlevelsmenu.docwidth&&(a+=-this._dimensions.submenuw+(this._istoplevel&&"topbar"==d?this._dimensions.w:-this._dimensions.w)),i.parentNode.style.left=a+"px";var h=this._istoplevel?this._offsets.top+("sidebar"==d?0:this._dimensions.h):this.offsetTop;if(l-n>ddlevelsmenu.docheight&&(h+=this._dimensions.submenuh<this._offsets.top+("sidebar"==d?this._dimensions.h:0)-n?-this._dimensions.submenuh+(this._istoplevel&&"topbar"==d?-this._dimensions.h:this._dimensions.h):-(this._offsets.top-n)+(this._istoplevel&&"topbar"==d?-this._dimensions.h:0)),i.parentNode.style.top=h+"px",ddlevelsmenu.enableshim&&(0==ddlevelsmenu.effects.enableswipe||ddlevelsmenu.nonFF)?ddlevelsmenu.positionshim(t,i,d,s,n):i.FFscrollInfo={x:s,y:n},ddlevelsmenu.ismobile){var r=!0;if("hidden"==i.style.visibility)ddlevelsmenu.showmenu(t,i,d);else{var m=i.getAttribute("data-href");m?r=!1:ddlevelsmenu.hidemenu(i.parentNode)}r&&(t._istoplevel||e.target.parentNode.getElementsByTagName("ul").length>0)&&(e.preventDefault(),e.stopPropagation())}else ddlevelsmenu.showmenu(t,i,d),e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation()}},this.ismobile?"click":"mouseover"),this.addEvent(t,function(e){var t=ddlevelsmenu.subuls[this._master][parseInt(this._pos)];this._istoplevel?ddlevelsmenu.isContained(this,e)||ddlevelsmenu.isContained(t.parentNode,e)||ddlevelsmenu.hidemenu(t.parentNode):this._istoplevel||ddlevelsmenu.isContained(this,e)||ddlevelsmenu.hidemenu(t.parentNode)},"mouseout")},setopacity:function(e,t){if(e.style.opacity=t,"string"!=typeof e.style.opacity){e.style.MozOpacity=t;try{e.filters&&(e.style.filter="progid:DXImageTransform.Microsoft.alpha(opacity="+100*t+")")}catch(i){}}},showmenu:function(e,t,i){if(this.effects.enableswipe||this.effects.enablefade){if(this.effects.enableswipe){var s=e._istoplevel&&"topbar"==i?e._dimensions.submenuh:e._dimensions.submenuw;t.parentNode.style.width=t.parentNode.style.height=0,t.parentNode.style.overflow="hidden"}this.effects.enablefade&&(t.parentNode.style.width=t.offsetWidth+"px",t.parentNode.style.height=t.offsetHeight+"px",this.setopacity(t.parentNode,0)),t._curanimatedegree=0,t.parentNode.style.visibility="visible",t.style.visibility="visible",clearInterval(t._animatetimer),t._starttime=(new Date).getTime(),t._animatetimer=setInterval(function(){ddlevelsmenu.revealmenu(e,t,s,i)},10)}else t.parentNode.style.visibility="visible",t.style.visibility="visible"},revealmenu:function(e,t,i,s){var n=(new Date).getTime()-t._starttime;n<this.effects.duration?(this.effects.enableswipe&&(0==t._curanimatedegree&&(t.parentNode.style[e._istoplevel&&"topbar"==s?"width":"height"]=(e._istoplevel&&"topbar"==s?t.offsetWidth:t.offsetHeight)+"px"),t.parentNode.style[e._istoplevel&&"topbar"==s?"height":"width"]=t._curanimatedegree*i+"px",this.effects.enableslide&&(t.style[e._istoplevel&&"topbar"==s?"top":"left"]=Math.floor((t._curanimatedegree-1)*i)+"px")),this.effects.enablefade&&this.setopacity(t.parentNode,t._curanimatedegree)):(clearInterval(t._animatetimer),this.effects.enableswipe&&(t.parentNode.style.width=t.offsetWidth+"px",t.parentNode.style.height=t.offsetHeight+"px",t.parentNode.style.overflow="visible",this.effects.enableslide&&(t.style.top=0,t.style.left=0)),this.effects.enablefade&&(this.setopacity(t.parentNode,1),t.parentNode.style.filter=""),this.enableshim&&t.FFscrollInfo&&this.positionshim(e,t,s,t.FFscrollInfo.x,t.FFscrollInfo.y)),t._curanimatedegree=(1-Math.cos(n/this.effects.duration*Math.PI))/2},hidemenu:function(e){"undefined"!=typeof e._pos&&(this.css(this.topitems[e._master][parseInt(e._pos)],"selected","remove"),this.enableshim&&this.hideshim()),clearInterval(e.firstChild._animatetimer),e.style.left=0,e.style.top="-1000px",e.style.visibility="hidden",e.firstChild.style.visibility="hidden"},addEvent:function(e,t,i){e.addEventListener?e.addEventListener(i,t,!1):e.attachEvent&&e.attachEvent("on"+i,function(){return t.call(e,window.event)})},domready:function(e){return dd_domreadycheck?void e():(document.addEventListener?document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),e(),dd_domreadycheck=!0},!1):document.attachEvent&&document.documentElement.doScroll&&window==window.top&&function(){if(dd_domreadycheck)return void e();try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}e(),dd_domreadycheck=!0}(),void(document.attachEvent&&parent.length>0&&this.addEvent(window,function(){e()},"load")))},init:function(e,t){this.enableshim=!this.ismobile,this.standardbody="CSS1Compat"==document.compatMode?document.documentElement:document.body,this.topitemsindex=-1,this.ulindex=-1,this.topmenuids.push(e),this.topitems[e]=[],this.subuls[e]=[],this.hidetimers[e]=[],this.enableshim&&!this.shimadded&&(this.shimmy={},this.shimmy.topshim=this.addshimmy(document.body),this.shimmy.bottomshim=this.addshimmy(document.body),this.shimadded=!0);var i=document.getElementById(e),s=i.getElementsByTagName("a");this.getwindowsize();for(var n=0;n<s.length;n++)if(ddlmGetRelAttributeValue(s[n])){var d=s[n].getAttribute("href");this.topitemsindex++,this.ulindex++;var o=s[n];this.topitems[e][this.topitemsindex]=o;var l=document.getElementById(ddlmGetRelAttributeValue(o));"#"!=d&&l.setAttribute("data-href",d);var a=document.createElement("div");a.className="ddsubmenustyle",l.removeAttribute("class"),a.appendChild(l),document.body.appendChild(a),a.style.zIndex=2e3,a._master=e,a._pos=this.topitemsindex,this.addEvent(a,function(){ddlevelsmenu.hidemenu(this)},"click");var h="sidebar"==t?"rightarrowpointer":"downarrowpointer";this.arrowpointers.showarrow.toplevel&&this.addpointer(o,h,"sidebar"==t?"before":"after"),this.buildmenu(e,o,l,this.ulindex,!0,t),a.onmouseover=function(){clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])},this.addEvent(a,function(e){if(!ddlevelsmenu.isContained(this,e)&&!ddlevelsmenu.isContained(ddlevelsmenu.topitems[this._master][parseInt(this._pos)],e)){var t=this;ddlevelsmenu.enableshim&&ddlevelsmenu.hideshim(),ddlevelsmenu.hidetimers[this._master][this._pos]=setTimeout(function(){ddlevelsmenu.hidemenu(t)},ddlevelsmenu.hideinterval)}},"mouseout");for(var r=l.getElementsByTagName("ul"),m=0;m<r.length;m++){this.ulindex++;var f=r[m].parentNode,u=f.getElementsByTagName("a");if(u.length>0){var p=u[0].getAttribute("href");"#"!=p&&r[m].setAttribute("data-href",p)}var c=document.createElement("div");c.appendChild(r[m]),f.appendChild(c),this.arrowpointers.showarrow.sublevel&&this.addpointer(f.getElementsByTagName("a")[0],"rightarrowpointer","before"),this.buildmenu(e,f,r[m],this.ulindex,!1,t)}}this.addEvent(window,function(){ddlevelsmenu.getwindowsize(),ddlevelsmenu.gettopitemsdimensions()},"resize")},setup:function(e,t){var i=!1;this.domready(function(){i||(i=!0,ddlevelsmenu.init(e,t))})}};