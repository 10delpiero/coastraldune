(this.webpackJsonpcoastraldune=this.webpackJsonpcoastraldune||[]).push([[0],{311:function(e,t){},312:function(e,t){},320:function(e,t){},328:function(e,t){},329:function(e,t){},330:function(e,t){},338:function(e,t){},342:function(e,t,n){},343:function(e,t,n){"use strict";n.r(t);var c=n(15),a=n(22),i=n.n(a),s=n(267),r=n.n(s),l=n(7),j=n(54),o=n(55),d=n(3),u=n.n(d),b=n(13),x=n(52),p=n(219),h=n(158);n(301),n(303),n(344);h.a.initializeApp({apiKey:"AIzaSyBWi7J3VZzJLzSD5LCTjI9wEemYn--6fqk",authDomain:"mkyj-3f505.firebaseapp.com",databaseURL:"https://mkyj-3f505.firebaseio.com",projectId:"mkyj-3f505",storageBucket:"mkyj-3f505.appspot.com",messagingSenderId:"194898239818",appId:"1:194898239818:web:e773ebd6e781bca92321b3"});var m=h.a,f=h.a.auth(),O=h.a.firestore(),g=h.a.storage(),v=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),j=r[0],o=r[1],d=Object(a.useState)(!0),x=Object(l.a)(d,2),p=x[0],h=x[1],m=Object(a.useState)(""),O=Object(l.a)(m,2),g=O[0],v=O[1],y=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?i(c):"password"===n&&o(c)},A=function(){var e=Object(b.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.signInWithEmailAndPassword(n,j);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,f.createUserWithEmailAndPassword(n,j);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:A,className:"container",children:[Object(c.jsx)("input",{name:"email",type:"email",placeholder:"\uc774\uba54\uc77c",required:!0,value:n,onChange:y,className:"authInput"}),Object(c.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:j,onChange:y,className:"authInput"}),Object(c.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"\ub85c\uadf8\uc778":"\ud68c\uc6d0\uac00\uc785"}),g&&Object(c.jsx)("span",{className:"authError",children:g})]}),Object(c.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:p?"\ud68c\uc6d0\uac00\uc785":"\ub85c\uadf8\uc778"})]})},y=n.p+"static/media/leaves.47b6c1ec.jpg",A=function(){var e=function(){var e=Object(b.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new m.auth.GoogleAuthProvider:"github"===n&&(c=new m.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"titleback",children:[Object(c.jsx)("div",{className:"titleImage",children:Object(c.jsx)("img",{width:"50px",height:"70px",src:y})}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("p",{children:"\ud574\uc548\uc0ac\uad6c"}),Object(c.jsx)("p",{children:"\uc2dd\ubb3c"})]}),Object(c.jsx)("div",{className:"title-sub",children:"\uc774\uc57c\uae30"})]}),Object(c.jsxs)("div",{className:"authContainer",children:[Object(c.jsx)(v,{}),Object(c.jsxs)("div",{className:"authBtns",children:[Object(c.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["\uad6c\uae00\ub85c \uac00\uc785\ud558\uae30 ",Object(c.jsx)(x.a,{icon:p.b})," "]}),Object(c.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["\uae43\ud5c8\ube0c\ub85c \uac00\uc785\ud558\uae30 ",Object(c.jsx)(x.a,{icon:p.a})," "]})]})]})]})},w=n.p+"static/media/icon1.a50225a0.jpg",E=n.p+"static/media/icon2.7443fcbd.jpg",k=n.p+"static/media/icon3.dd2b4ed4.jpg",B=n.p+"static/media/icon4.8b4f538c.jpg",I=function(e){var t=e.userObj;return Object(c.jsxs)("div",{className:"homeNav",style:{width:"100%",height:"100%",marginTop:"-90px",padding:"0px",border:"0px"},children:[Object(c.jsxs)("div",{className:"titleback",children:[Object(c.jsx)("div",{className:"titleImage",children:Object(c.jsx)("img",{width:"50px",height:"70px",src:y})}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("p",{children:"\ud574\uc548\uc0ac\uad6c"}),Object(c.jsx)("p",{children:"\uc2dd\ubb3c"})]}),Object(c.jsx)("div",{className:"title-sub",children:"\uc774\uc57c\uae30"})]}),Object(c.jsx)("div",{style:{paddingTop:10,textAlign:"center"},children:Object(c.jsx)("span",{children:t.displayName?"".concat(t.displayName,"\ub2d8 \ud658\uc601\ud569\ub2c8\ub2e4."):"\ud504\ub85c\ud544"})}),Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:20,width:"100%"},children:[Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/diary",style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"10px"},children:Object(c.jsx)("img",{src:w,width:"130px",height:"200px"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/DunesExpedition",style:{margin:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:Object(c.jsx)("img",{src:E,width:"130px",height:"200px"})})})]}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:10,marginBottom:10,width:"100%"},children:[Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/Explain",style:{margin:10,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(c.jsx)("img",{src:k,width:"130px",height:"200px"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/profile",style:{margin:10,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(c.jsx)("img",{src:B,width:"130px",height:"200px"})})})]})]})})})]})},N=n(51),C=n.p+"static/media/icon8.5d3d6e1e.jpg",S=function(e){var t=e.refreshUser,n=e.userObj,i=Object(o.f)(),s=Object(a.useState)(n.displayName),r=Object(l.a)(s,2),d=r[0],p=r[1],h=function(){var e=Object(b.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName===d){e.next=6;break}return e.next=4,n.updateProfile({displayName:d});case 4:t(),i.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/",style:{display:"flex",flexDirection:"column",alignItems:"left",marginLeft:"30px",marginBottom:"10px",fontSize:12},children:Object(c.jsx)(x.a,{icon:N.c,color:"#ffffff",size:"3x"})})})})})}),Object(c.jsx)("div",{className:"pageTitleBack",children:Object(c.jsx)("div",{className:"pageTitle",children:Object(c.jsxs)("div",{className:"in",children:[Object(c.jsx)("div",{style:{float:"left"},children:Object(c.jsx)("img",{width:"100px",height:"100px",src:C})}),Object(c.jsx)("div",{style:{float:"left",textAlign:"center",marginTop:"40px"},children:"\ub098\uc758 \ud504\ub85c\ud544"})]})})}),Object(c.jsxs)("form",{onSubmit:h,className:"profileForm",children:[Object(c.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},type:"text",autoFocus:!0,placeholder:"\ud504\ub85c\ud544\uc744 \uc801\uc5b4\uc8fc\uc138\uc694.",value:d,className:"formInput"}),Object(c.jsx)("input",{type:"submit",value:"\ud504\ub85c\ud544 \ubc14\uafb8\uae30",className:"formBtn",style:{marginTop:10}})]}),Object(c.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),i.push("/")},children:"\ub85c\uadf8\uc544\uc6c3"})]})},F=n(222),L=n.p+"static/media/icon6.3f8ecd06.jpg",J=n(131),T=n.n(J);window.$=T.a;var z=function(){var e,t,n,i,s=Object(a.useState)("data:image/jpeg;base64,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"),r=Object(l.a)(s,2),o=r[0],d=r[1],p=Object(a.useState)(null),h=Object(l.a)(p,2),m=h[0],f=h[1],O="https://teachablemachine.withgoogle.com/models/wY73i_ESl/";function g(){return(g=Object(b.a)(u.a.mark((function c(){var a,s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return T()(".Message").html(i),O+"model.json",O+"metadata.json",c.next=5,F.load("https://teachablemachine.withgoogle.com/models/wY73i_ESl/model.json","https://teachablemachine.withgoogle.com/models/wY73i_ESl/metadata.json");case 5:for(e=c.sent,n=e.getTotalClasses(),t=document.getElementById("label-container"),a=0;a<n;a++)(s=document.createElement("div")).classList.add("d-flex"),t.appendChild(s);case 9:case"end":return c.stop()}}),c)})))).apply(this,arguments)}function v(){return(v=Object(b.a)(u.a.mark((function c(){var a,i,s,r,l,j,o,d;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return O+"model.json",O+"metadata.json",c.next=4,F.load("https://teachablemachine.withgoogle.com/models/wY73i_ESl/model.json","https://teachablemachine.withgoogle.com/models/wY73i_ESl/metadata.json");case 4:return e=c.sent,n=e.getTotalClasses(),a=document.getElementById("goimage"),c.next=9,e.predict(a,!1);case 9:(i=c.sent).sort((function(e,t){return parseFloat(t.probability)-parseFloat(e.probability)})),c.t0=i[0].className,c.next="mae"===c.t0?14:"tong"===c.t0?16:"reed"===c.t0?18:"zom"===c.t0?20:"haedanghwa"===c.t0?22:"bigi"===c.t0?24:26;break;case 14:return s="\uc774 \uc2dd\ubb3c\uc740 \uac2f\uba54\uaf43\uacfc \uc77c\uce58\ud560 \ud655\ub960\uc774 "+Math.round(100*i[0].probability.toFixed(2))+"% \uc785\ub2c8\ub2e4.",c.abrupt("break",26);case 16:return s="\uc774 \uc2dd\ubb3c\uc740 \ud1b5\ubcf4\ub9ac\uc0ac\ucd08\uc640 \uc77c\uce58\ud560 \ud655\ub960\uc774 "+Math.round(100*i[0].probability.toFixed(2))+"% \uc785\ub2c8\ub2e4.",c.abrupt("break",26);case 18:return s="\uc774 \uc2dd\ubb3c\uc740 \uac08\ub300\uc640 \uc77c\uce58\ud560 \ud655\ub960\uc774 "+Math.round(100*i[0].probability.toFixed(2))+"% \uc785\ub2c8\ub2e4.",c.abrupt("break",26);case 20:return s="\uc774 \uc2dd\ubb3c\uc740 \uc880\ubcf4\ub9ac\uc0ac\ucd08\uc640 \uc77c\uce58\ud560 \ud655\ub960\uc774 "+Math.round(100*i[0].probability.toFixed(2))+"% \uc785\ub2c8\ub2e4.",c.abrupt("break",26);case 22:return s="\uc774 \uc2dd\ubb3c\uc740 \ud574\ub2f9\ud654\uc640 \uc77c\uce58\ud560 \ud655\ub960\uc774 "+Math.round(100*i[0].probability.toFixed(2))+"% \uc785\ub2c8\ub2e4.",c.abrupt("break",26);case 24:return s="\uc774 \uc2dd\ubb3c\uc740 \uc21c\ube44\uae30\ub098\ubb34\uc640 \uc77c\uce58\ud560 \ud655\ub960\uc774 "+Math.round(100*i[0].probability.toFixed(2))+"% \uc785\ub2c8\ub2e4.",c.abrupt("break",26);case 26:T()(".result-message").html(s),l=0;case 29:if(!(l<n)){c.next=53;break}r=i[l].probability.toFixed(2)>.1?Math.round(100*i[l].probability.toFixed(2))+"%":i[l].probability.toFixed(2)>=.01?"4%":"2%",c.t1=i[l].className,c.next="mae"===c.t1?34:"tong"===c.t1?36:"reed"===c.t1?38:"zom"===c.t1?40:"haedanghwa"===c.t1?42:"bigi"===c.t1?44:46;break;case 34:return j="\uac2f\uba54\uaf43",c.abrupt("break",46);case 36:return j="\ud1b5\ubcf4\ub9ac\uc0ac\ucd08",c.abrupt("break",46);case 38:return j="\uac08\ub300",c.abrupt("break",46);case 40:return j="\uc880\ubcf4\ub9ac\uc0ac\ucd08",c.abrupt("break",46);case 42:return j="\ud574\ub2f9\ud654",c.abrupt("break",46);case 44:return j="\uc21c\ube44\uae30\ub098\ubb34",c.abrupt("break",46);case 46:T()(".Message").html(""),o="<div class='animal-label d-flex'>"+j+"</div>",d="<div class='bar-container'><div class='"+i[l].className+"-box'></div><div class='d-flex "+i[l].className+"-bar' style='width: "+r+"'><span class='percent-text'>"+Math.round(100*i[l].probability.toFixed(2))+"%</span></div></div>",t.childNodes[l].innerHTML=o+d;case 50:l++,c.next=29;break;case 53:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return i="AI\uac00 \uc0ac\uad6c\uc2dd\ubb3c\uc744 \ucc3e\ub294 \uc911 \uc785\ub2c8\ub2e4.","",Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/",style:{display:"flex",flexDirection:"column",alignItems:"left",marginLeft:"30px",marginBottom:"10px",fontSize:12},children:Object(c.jsx)(x.a,{icon:N.c,color:"#ffffff",size:"3x"})})})})})}),Object(c.jsx)("div",{className:"page",children:Object(c.jsx)("div",{className:"pageTitleBack",children:Object(c.jsx)("div",{className:"pageTitle",children:Object(c.jsxs)("div",{className:"in",children:[Object(c.jsx)("div",{style:{float:"left"},children:Object(c.jsx)("img",{width:"100px",height:"100px",src:L})}),Object(c.jsx)("div",{style:{float:"left",textAlign:"center",marginTop:"40px"},children:"\uc0ac\uad6c \uc2dd\ubb3c \uac80\uc0c9\ud558\uae30"})]})})})}),Object(c.jsxs)("div",{className:"preview",children:[Object(c.jsx)("div",{children:Object(c.jsx)("p",{class:"Message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("p",{class:"result-message"})}),Object(c.jsxs)("div",{className:"imgFileContainer",children:[Object(c.jsx)("img",{className:"goimage",id:"goimage",src:o}),Object(c.jsx)("input",{type:"file",name:"imgFile",id:"imgFile",onChange:function(e){var t=new FileReader;t.onloadend=function(){var e=t.result;e&&d(e.toString())},e.target.files[0]&&(t.readAsDataURL(e.target.files[0]),f(e.target.files[0]))},onclick:null===m?null:function(){return g.apply(this,arguments)}().then(function(){return v.apply(this,arguments)}())})]})]}),Object(c.jsx)("div",{id:"label-container",class:"d-flex"})]})},R=n(132),Q=n(133);function U(){var e=Object(R.a)(["\n  width: 100%;\n  height: 70vh;\n"]);return U=function(){return e},e}function X(e){var t=e.img;return Object(c.jsx)(D,{src:t})}var D=Q.a.img(U()),P=n.p+"static/media/icon7.6f2f3608.jpg",K=n.p+"static/media/1.1b19e91f.jpg",G=n.p+"static/media/2.2937185a.jpg",V=n.p+"static/media/3.1c4a252a.jpg",W=n.p+"static/media/4.b4c3b52d.jpg",q=n.p+"static/media/5.b8d37b7f.jpg",Z=n.p+"static/media/6.0d96fccb.jpg",M=n.p+"static/media/7.467f1654.jpg",H=n.p+"static/media/8.8afaeb9b.jpg",Y=n.p+"static/media/9.43851c87.jpg",_=n.p+"static/media/10.e6148a24.jpg";function $(){var e=Object(R.a)(["\n  width: 100%;\n  display: flex; \n"]);return $=function(){return e},e}function ee(){var e=Object(R.a)(["\n  all: unset;\n  border: 1px solid white;\n  padding: 0.5em 2em;\n  color: white;\n  border-radius: 10px;\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    background-color: white;\n    color: #5ed1a1;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(R.a)(["\n  width: 60%;\n  overflow: hidden; \n"]);return te=function(){return e},e}function ne(){var e=Object(R.a)(["\n  width: 100%;\n  height: 70vh;\n"]);return ne=function(){return e},e}Q.a.img(ne()),Q.a.div(te());var ce=Q.a.button(ee()),ae=Q.a.div($());function ie(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(a.useRef)(null);return Object(a.useEffect)((function(){s.current.style.transition="all 0.5s ease-in-out",s.current.style.transform="translateX(-".concat(n,"00%)")}),[n]),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/",style:{display:"flex",flexDirection:"column",alignItems:"left",marginLeft:"30px",marginBottom:"10px",fontSize:12},children:Object(c.jsx)(x.a,{icon:N.c,color:"#ffffff",size:"3x"})})})})})}),Object(c.jsx)("div",{className:"pageTitleBack",children:Object(c.jsx)("div",{className:"pageTitle",children:Object(c.jsxs)("div",{className:"in",children:[Object(c.jsx)("div",{style:{float:"left"},children:Object(c.jsx)("img",{width:"100px",height:"100px",src:P})}),Object(c.jsx)("div",{style:{float:"left",textAlign:"center",marginTop:"40px"},children:"\uc0ac\uad6c \uc2dd\ubb3c \uacf5\ubd80\ud558\uae30"})]})})}),Object(c.jsx)("div",{children:Object(c.jsxs)("exContainer",{style:{float:"left",textAlign:"center",marginTop:"40px"},children:[Object(c.jsxs)(ae,{ref:s,children:[Object(c.jsx)(X,{img:K}),Object(c.jsx)(X,{img:G}),Object(c.jsx)(X,{img:V}),Object(c.jsx)(X,{img:W}),Object(c.jsx)(X,{img:q}),Object(c.jsx)(X,{img:Z}),Object(c.jsx)(X,{img:M}),Object(c.jsx)(X,{img:H}),Object(c.jsx)(X,{img:Y}),Object(c.jsx)(X,{img:_})]}),Object(c.jsx)(ce,{onClick:function(){i(0===n?9:n-1)},children:"\uc774\uc804"}),Object(c.jsx)(ce,{onClick:function(){i(n>=9?0:n+1)},children:"\ub2e4\uc74c"})]})})]})}var se=n(291),re=function(e){var t=e.nweetObj,n=e.isOwner,i=Object(a.useState)(!1),s=Object(l.a)(i,2),r=s[0],j=s[1],o=Object(a.useState)(t.text),d=Object(l.a)(o,2),p=d[0],h=d[1],m=function(){var e=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,g.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){return j((function(e){return!e}))},v=function(){var e=Object(b.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("nweets/".concat(t.id)).update({text:p});case 3:j(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"nweet",children:r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(c.jsx)("input",{type:"text",placeholder:"\uc218\uc815\ud560 \ub0b4\uc6a9\uc744 \uc801\uc73c\uc138\uc694.",value:p,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;h(t)},className:"formInput"}),Object(c.jsx)("input",{type:"submit",value:"\uc218\uc815",className:"formBtn"})]}),Object(c.jsx)("span",{onClick:f,className:"formBtn cancelBtn",children:"\ucde8\uc18c"})]}):Object(c.jsxs)(c.Fragment,{children:[t.attachmentUrl&&Object(c.jsx)("img",{src:t.attachmentUrl}),Object(c.jsx)("h4",{children:t.text}),n&&Object(c.jsxs)("div",{class:"nweet__actions",children:[Object(c.jsx)("span",{onClick:m,children:Object(c.jsx)(x.a,{icon:N.g})}),Object(c.jsx)("span",{onClick:f,children:Object(c.jsx)(x.a,{icon:N.d})})]})]})})},le=n(346);window.$=T.a;var je=function(e){var t=e.userObj,n=Object(a.useState)(""),i=Object(l.a)(n,2),s=i[0],r=i[1],j=Object(a.useState)(""),o=Object(l.a)(j,2),d=o[0],p=o[1],h=function(){var e=Object(b.a)(u.a.mark((function e(n){var c,a,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===d){e.next=12;break}return a=g.ref().child("".concat(t.uid,"/").concat(Object(le.a)())),e.next=8,a.putString(d,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:c=e.sent;case 12:return l={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.next=15,O.collection("nweets").add(l);case 15:return e.next=17,O.collection("nweets").orderBy("createdAt","desc");case 17:r(""),p("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(c.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(c.jsx)("span",{children:"\uc0ac\uc9c4 \ucd94\uac00"}),Object(c.jsx)(x.a,{icon:N.a,size:"3x"})]}),Object(c.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)},style:{opacity:0}}),d&&Object(c.jsxs)("div",{className:"factoryForm__attachment",children:[Object(c.jsx)("img",{src:d,style:{backgroundImage:d}}),Object(c.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(c.jsx)("span",{children:"\uc0ad\uc81c"}),Object(c.jsx)(x.a,{icon:N.f})]})]}),Object(c.jsxs)("div",{className:"factoryInput__container",children:[Object(c.jsx)("textarea",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;r(t)},type:"text",placeholder:"\ub0b4\uc6a9\uc744 \uc791\uc131\ud558\uc138\uc694.",maxLength:120}),Object(c.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]})]})},oe=n.p+"static/media/icon5.652a0426.jpg",de=function(e){var t=e.userObj,n=Object(a.useState)([]),i=Object(l.a)(n,2),s=i[0],r=i[1];return Object(a.useEffect)((function(){O.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(se.a)({id:e.id},e.data())}));r(t)}))}),[]),Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)(j.b,{to:"/",style:{display:"flex",flexDirection:"column",alignItems:"left",marginLeft:"30px",marginBottom:"10px",fontSize:12},children:Object(c.jsx)(x.a,{icon:N.c,color:"#ffffff",size:"3x"})})})})})}),Object(c.jsx)("div",{className:"pageTitleBack",children:Object(c.jsx)("div",{className:"pageTitle",children:Object(c.jsxs)("div",{className:"in",children:[Object(c.jsx)("div",{style:{float:"left"},children:Object(c.jsx)("img",{width:"100px",height:"100px",src:oe})}),Object(c.jsx)("div",{style:{float:"left",textAlign:"center",marginTop:"40px"},children:"\uc0ac\uad6c \uc2dd\ubb3c \uad00\ucc30 \uae30\ub85d\uc7a5"})]})})}),Object(c.jsx)("div",{className:"pageExplain",children:"\ub098\uc758 \uad00\ucc30\uae30\ub85d \ub4f1\ub85d\ud558\uae30"}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(je,{userObj:t}),Object(c.jsx)("div",{style:{marginTop:30,height:40},children:s.map((function(e){return Object(c.jsx)(re,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})]})},ue=function(e){var t=e.userObj;return Object(c.jsx)("div",{children:Object(c.jsx)(o.a,{path:"../routes/Home"})?null:Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(c.jsx)("li",{children:Object(c.jsxs)(j.b,{to:"/",style:{marginRight:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(c.jsx)(x.a,{icon:N.b,color:"#505050",size:"2x"}),Object(c.jsx)("span",{style:{marginTop:10},children:"\ud648"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(j.b,{to:"/diary",style:{marginRight:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(c.jsx)(x.a,{icon:N.b,color:"#505050",size:"2x"}),Object(c.jsx)("span",{style:{marginTop:10},children:"\ud648"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(j.b,{to:"/profile",style:{marginLeft:20,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(c.jsx)(x.a,{icon:N.h,color:"#505050",size:"2x"}),Object(c.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName):"\ud504\ub85c\ud544"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(j.b,{to:"/DunesExpedition",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(c.jsx)(x.a,{icon:N.a,color:"#505050",size:"2x"}),Object(c.jsx)("span",{style:{marginTop:10},children:"\uc0ac\uad6c\uc0dd\ubb3c\uac80\uc0c9"})]})}),Object(c.jsx)("li",{children:Object(c.jsxs)(j.b,{to:"/Explain",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(c.jsx)(x.a,{icon:N.e,color:"#505050",size:"2x"}),Object(c.jsx)("span",{style:{marginTop:10},children:"\uc0ac\uad6c\uc9c0\uc2dd"})]})})]})})})},be=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(c.jsxs)(j.a,{children:[n&&Object(c.jsx)(ue,{userObj:a}),Object(c.jsx)(o.c,{children:n?Object(c.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(c.jsx)(o.a,{exact:!0,path:"/",children:Object(c.jsx)(I,{userObj:a})}),Object(c.jsx)(o.a,{exact:!0,path:"/diary",children:Object(c.jsx)(de,{userObj:a})}),Object(c.jsx)(o.a,{exact:!0,path:"/profile",children:Object(c.jsx)(S,{userObj:a,refreshUser:t})}),Object(c.jsx)(o.a,{exact:!0,path:"/dunesExpedition",children:Object(c.jsx)(z,{})}),Object(c.jsx)(o.a,{exact:!0,path:"/explain",children:Object(c.jsx)(ie,{})})]}):Object(c.jsx)(o.a,{exact:!0,path:"/",children:Object(c.jsx)(A,{})})})]})};var xe=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),j=r[0],o=r[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),i(!0)}))}),[]),Object(c.jsx)(c.Fragment,{children:n?Object(c.jsx)(be,{refreshUser:function(){var e=f.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(j),userObj:j}):"\uc811\uc18d\uc911..."})};n(342);r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(xe,{})}),document.getElementById("root"))}},[[343,1,2]]]);
//# sourceMappingURL=main.403991f6.chunk.js.map