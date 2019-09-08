!function(s){"use strict";s.fn.instagramFeed=function(i){var t=s("#instagramImages"),a=s.extend({isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)},i);return this.each(function(){t.css("width",a.pluginWidth+"%");var i=a.accessToken;i=i.substring(0,i.indexOf(".")),setTimeout(function(s,t){o(i,a.accessToken)});var o=function(i,o){var e="default",c="true";!function i(o,n){s.ajax({url:"https://api.instagram.com/v1/users/"+o+"/media/recent/?count="+a.postsQuantity+"&access_token="+n,crossDomain:!0,dataType:"jsonp",success:function(l){var d="";s.each(l.data,function(s){d+='<div class="instaWrap"><a href="'+l.data[s].link+'" target="'+a.openLinks+'"><div class="instaOverlay"><div align="center" class="instaInfo"><div class="instaDi"><div class="instaLikes"><i class="fa fa-heart" style="font-size: calc(0.8vw + 0.8vh + 0.8vmin); line-height: inherit;"></i>&nbsp;<div class="instaNumL">'+l.data[s].likes.count+'</div></div></div><div class="instaGapI"></div><div class="instaDi"><div class="instaComment"><i class="fa fa-comments-o" aria-hidden="true" style="font-size: calc(1vw + 1vh + 1vmin); line-height: inherit;"></i>&nbsp;<div class="instaNumR">'+l.data[s].comments.count+'</div></div></div></div></div><div class="instaImgBgr" style="background-image:url('+l.data[s].images.low_resolution.url+')"></div></a></div>'}),"default"==e&&c!=a.loadmoreBtnHide&&(d+='<div class="insta_load_more">'+a.loadmoreBtnText+"</div>");var r=a.spaceBetweenImages;r>3&&(r=3),t.append(d).css({"padding-top":"calc("+r+"% / 2)","padding-right":"calc("+r+"% / 2)","margin-left":"calc("+-r+"% / 2)"});var h=s(".instaWrap"),u=s(".insta_load_more"),m=t.width();if("2"==a.columnsQuantity480&&m<480?h.removeClass("col"+a.columnsQuantity).addClass("col2"):h.removeClass("col2").addClass("col"+a.columnsQuantity),a.isMobile&&(h.removeClass("col"+a.columnsQuantity).addClass("col2"),setTimeout(function(){h.css({width:"calc(49.99% - "+r+"%)"});var i=s(".col2").css("width");s(".col2").css("height",i)},50)),h.css({"margin-bottom":r+"%","margin-left":r+"%","border-radius":a.borderRadius+"%"}),s(".col2").css({width:"calc(49.99% - "+r+"%)"}),s(".col3").css({width:"calc(33.33% - "+r+"%)"}),s(".instaLikes").css("color",a.likesColor),s(".instaComment").css("color",a.commentsColor),s("#instagramImages .fa").css("color",a.iconsColor),u.css({"background-color":a.loadmoreBtnBackground,color:a.loadmoreBtnTextColor,width:a.loadmoreBtnWidth,height:a.loadmoreBtnHeight,"line-height":a.loadmoreBtnHeight,"font-size":a.loadmoreBtnTextSize,"border-radius":a.loadmoreBtnBorderRadius,"font-family":a.loadmoreBtnFontFamily}),u.on("mouseenter",function(){s(this).css({color:a.loadmoreBtnTextOnHover,"background-color":a.loadmoreBtnBackgroundOnHover})}).on("mouseleave",function(){s(this).css({color:a.loadmoreBtnTextColor,"background-color":a.loadmoreBtnBackground})}),s(".instaOverlay").css({"background-color":a.overlayColor,"border-radius":a.borderRadius+"%"}),s(".instaOverlay").on("mouseenter",function(){s(this).css({opacity:a.overlayOpacity})}).on("mouseleave",function(){s(this).css({opacity:0})}),navigator.userAgent.search("Safari")>=0&&navigator.userAgent.search("Chrome")<0){var g=s(".col"+a.columnsQuantity).css("width");s(".col"+a.columnsQuantity).css("height",g),setTimeout(function(){var s=h.css("width");h.css("height",s)},500)}void 0!==l.pagination.next_url?u.unbind("click").on("click",function(){return i(o,n+"&max_id="+l.pagination.next_max_id),"default"==e&&u.css("display","none"),!1}):u.css("display","none"),a.isMobile&&(t.css({width:"100%",padding:0,"margin-left":"-1%"}),u.css({"font-size":"14px",height:"inherit",width:"90%","line-height":"calc("+a.loadmoreBtnHeight+" / 1.5)"}));var v=t.width();v<170?u.css({"font-size":"80%",height:"inherit",width:"90%","line-height":"calc("+a.loadmoreBtnHeight+" / 1.5)",margin:"10px auto 5px auto"}):u.css({width:a.loadmoreBtnWidth,height:a.loadmoreBtnHeight,"line-height":a.loadmoreBtnHeight,"font-size":a.loadmoreBtnTextSize,margin:"20px auto 5px auto"});var m=t.width();if("2"==a.columnsQuantity480&&m<480){h.removeClass("col"+a.columnsQuantity).addClass("col2");var f=s(".col2").css("width");s(".col2").css("height",f),h.css({width:"calc(49.99% - "+r+"%)"})}else if("2"==a.columnsQuantity){h.removeClass("col"+a.columnsQuantity).addClass("col2");var f=s(".col2").css("width");s(".col2").css("height",f),h.css({width:"calc(49.99% - "+r+"%)"})}else if(a.isMobile){h.css({width:"calc(49.99% - "+r+"%)"});var f=s(".col2").css("width");s(".col2").css("height",f)}else{h.removeClass("col2").addClass("col"+a.columnsQuantity);var g=s(".col"+a.columnsQuantity).css("width");s(".col"+a.columnsQuantity).css("height",g),h.css({width:"calc(33.33% - "+r+"%)"})}s(window).on("resize",function(){var i=t.width();if("2"==a.columnsQuantity480&&i<480){h.removeClass("col"+a.columnsQuantity).addClass("col2");var o=s(".col2").css("width");s(".col2").css("height",o),h.css({width:"calc(49.99% - "+r+"%)"})}else if("2"==a.columnsQuantity){h.removeClass("col"+a.columnsQuantity).addClass("col2");var o=s(".col2").css("width");s(".col2").css("height",o),h.css({width:"calc(49.99% - "+r+"%)"})}else if(a.isMobile){h.css({width:"calc(49.99% - "+r+"%)"});var o=s(".col2").css("width");s(".col2").css("height",o)}else{h.removeClass("col2").addClass("col"+a.columnsQuantity);var e=s(".col"+a.columnsQuantity).css("width");s(".col"+a.columnsQuantity).css("height",e),h.css({width:"calc(33.33% - "+r+"%)"})}var c=t.width();c<170?u.css({"font-size":"80%",height:"inherit",width:"90%","line-height":"calc("+a.loadmoreBtnHeight+" / 1.5)",margin:"10px auto 5px auto"}):u.css({width:a.loadmoreBtnWidth,height:a.loadmoreBtnHeight,"line-height":a.loadmoreBtnHeight,"font-size":a.loadmoreBtnTextSize,margin:"20px auto 5px auto"})})}})}(i,o)}})}}(jQuery);