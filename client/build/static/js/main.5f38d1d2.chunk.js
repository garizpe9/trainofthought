(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,a,t){e.exports=t(216)},184:function(e,a){},185:function(e,a){},186:function(e,a){},199:function(e,a){},201:function(e,a){},216:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=t(36),i=t(12),m=t(51),u=t(52),s=t(56),p=t(53),d=t(57),E=t(15),f=t(20),h=t(256),v=t(17),g=t(261),b=t(260),y=t(262),x=t(264),w=t(263),j=t(142),O=t(277),k=t(265),C=t(276),N=t(131),B=t.n(N),S=t(132),T=t.n(S),I=t(133),W=t.n(I),F=t(134),M=t.n(F),R=t(135),L=t.n(R),D=t(136),A=t.n(D),G=t(141),H=t(129),P=t.n(H),z=t(130),U=t.n(z),q=Object(G.a)({typography:{fontFamily:["Shrikhand","cursive"]},palette:{primary:{main:P.a[500]},secondary:{main:U.a[700]},type:"light"}}),J=t(259),V=Object(h.a)(function(e){var a;return{text:{padding:e.spacing(2,2,0)},typography:{fontFamily:["Shrikhand","cursive"]},list:{marginBottom:e.spacing(2)},title:(a={display:"none"},Object(f.a)(a,e.breakpoints.up("sm"),{display:"block"}),Object(f.a)(a,"typography",{fontFamily:["Shrikhand","cursive"]}),Object(f.a)(a,"flexGrow",1),Object(f.a)(a,"alignSelf","flex-end"),a),appBar:{top:"auto",bottom:0},grow:{flexGrow:1},search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"})}});function Y(){var e=V(),a=r.a.useState(null),t=Object(E.a)(a,2),n=t[0],l=t[1],o=Boolean(n),c=function(){l(null)},i="primary-search-account-menu",m=r.a.createElement(j.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:i,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:c},r.a.createElement(C.a,{onClick:c},"Profile"),r.a.createElement(C.a,{onClick:c},"My account"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{theme:q},r.a.createElement(b.a,null),r.a.createElement(g.a,{position:"fixed",color:"primary",className:e.appBar},r.a.createElement(y.a,null,r.a.createElement(w.a,{edge:"start",color:"inherit","aria-label":"open drawer"},r.a.createElement(B.a,null)),r.a.createElement(w.a,{color:"inherit"},r.a.createElement("div",{className:e.searchIcon}),r.a.createElement(T.a,null),r.a.createElement(O.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement(J.a,{theme:q},r.a.createElement(x.a,{className:e.title,variant:"h3"},"Train of Thought")),r.a.createElement(w.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(k.a,{badgeContent:4,color:"secondary"},r.a.createElement(W.a,null))),r.a.createElement(w.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(k.a,{badgeContent:17,color:"secondary"},r.a.createElement(M.a,null))),r.a.createElement(w.a,{edge:"end","aria-label":"account of current user","aria-haspopup":"true","aria-controls":i,color:"inherit",onClick:function(e){l(e.currentTarget)}},r.a.createElement(L.a,null)),r.a.createElement(w.a,{"aria-label":"show more","aria-haspopup":"true",color:"inherit"},r.a.createElement(A.a,null)))),m))}var X=t(55),Z=t(61),$=t.n(Z),K={getEntries:function(){return $.a.get("/api/entries")},getEntry:function(e){return $.a.get("/api/entries/"+e)},deleteEntry:function(e){return $.a.delete("/api/entries/"+e)},saveEntry:function(e){return $.a.post("/api/entries",e)},getPhotos:function(){return $.a.create({baseURL:"https://api.pexels.com",headers:{Authorization:"563492ad6f91700001000001927c79f1b1dd445aa14fee7b9150cc15"}})}},Q=t(267),_=t(268),ee=t(269),ae=t(146),te=t(274),ne=t(270),re=t(266),le=Object(h.a)(function(e){return{}});var oe=function(){var e=Object(n.useState)({}),a=Object(E.a)(e,2),t=a[0],l=a[1],o=le();function c(e){var a=e.target,n=a.name,r=a.value;l(Object(X.a)({},t,Object(f.a)({},n,r)))}return r.a.createElement(J.a,{theme:q},r.a.createElement(b.a,null),r.a.createElement(re.a,{maxWidth:"lg",align:"center"},r.a.createElement(Q.a,{container:!0,spacing:3},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Q.a,{item:!0,xs:8},r.a.createElement(_.a,{color:"secondary"},r.a.createElement(ee.a,{id:"login"},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(ae.a,{className:o.paper},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(x.a,{gutterBottom:!0,variant:"h3",component:"h2"},"Login",r.a.createElement("h5",null,"username"),r.a.createElement(te.a,{controlId:"loginform",onChange:c,name:"username"}))),r.a.createElement(x.a,{gutterBottom:!0,variant:"h3",component:"h2"},"password",r.a.createElement("br",null),r.a.createElement(te.a,{controlid:"passwordform",onChange:c,name:"password"}),r.a.createElement("br",null)),r.a.createElement(ne.a,{controlId:"loginBtn",onClick:function(){},variant:"primary",size:"large",type:"submit"},"Submit")),r.a.createElement(ae.a,{className:o.paper},"Not Registered?",r.a.createElement(ne.a,{href:"/register",color:"primary",type:"submit"},"Click here!"))))))))))},ce=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(oe,null),r.a.createElement(Y,null)))}}]),a}(n.Component),ie=t(143),me=t(40),ue=t.n(me),se=t(66),pe=t(87),de=function(e){var a=Object(n.useState)(),t=Object(E.a)(a,2),r=t[0],l=t[1];return Object(n.useEffect)(function(){if(r)return function(){r.getTracks().forEach(function(e){return e.stop()})};!function(){var a=Object(se.a)(ue.a.mark(function a(){var t;return ue.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,navigator.mediaDevices.getUserMedia(e);case 3:t=a.sent,l(t),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),alert("Could not connect to camera: "+a.t0);case 10:case"end":return a.stop()}},a,null,[[0,7]])}));return function(){return a.apply(this,arguments)}}()()},[r,e]),r},Ee={audio:!1,video:{facingMode:"environment"}},fe={borderRadius:"50%",objectFit:"cover",width:"500px",height:"500px"},he=function(e){var a=e.videoRef,t=e.onReady,l=de(Ee);return Object(n.useEffect)(function(){l&&a.current&&(a.current.srcObject=l)},[l,a]),r.a.createElement("video",{ref:a,onCanPlay:function(){a.current.play(),t()},autoPlay:!0,playsInline:!0,muted:!0,style:fe})},ve={position:"absolute",top:"0",left:"0",objectFit:"cover"},ge=function(e){var a=e.canvasRef;return r.a.createElement("canvas",{ref:a,style:ve})},be=t(90),ye=t(67),xe=t(275),we=t(271),je=t(218),Oe=Object(h.a)(function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}),ke=function(e){var a=e.emotion,t=Oe(),l=Object(n.useState)(!1),o=Object(E.a)(l,2),c=o[0],i=o[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){i(!0)},5e3);return function(){return clearTimeout(e)}},[]),r.a.createElement("div",null,r.a.createElement(xe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:c,onClose:function(){i(!1)},closeAfterTransition:!0,BackdropComponent:we.a,BackdropProps:{timeout:500}},r.a.createElement(je.a,{in:c},r.a.createElement("div",{className:t.paper},r.a.createElement("h2",{id:"transition-modal-title"},"It looks like you're feeling ",a),r.a.createElement("p",{id:"transition-modal-description"},"Is that correct?"),r.a.createElement("button",null,"Yes")," ",r.a.createElement("button",{onClick:function(){return window.location.reload()}},"No, let me try again")))))};t(188);function Ce(){var e=Object(pe.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n"]);return Ce=function(){return e},e}function Ne(){var e=Object(pe.a)(["\n    position: relative;\n    height: 100%;\n    margin: 0;\n"]);return Ne=function(){return e},e}var Be=be.a.div(Ne()),Se=be.a.div(Ce()),Te=function(){var e=Object(n.useRef)(),a=Object(n.useRef)(),t=Object(n.useState)(!1),l=Object(E.a)(t,2),o=l[0],c=l[1],i=Object(n.useState)(),m=Object(E.a)(i,2),u=m[0],s=m[1],p=function(){var e=Object(se.a)(ue.a.mark(function e(){return ue.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye.d.tinyFaceDetector.load("/models/");case 2:return e.next=4,Object(ye.c)("/models/");case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),d=function(){var a=Object(se.a)(ue.a.mark(function a(){var t,n,r,l,o;return ue.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=new ye.a({inputSize:512,scoreThreshold:.5}),a.next=3,Object(ye.b)(e.current,t).withFaceExpressions();case 3:(n=a.sent)?(r=n.expressions,l=Math.max.apply(Math,Object(ie.a)(Object.values(r))),o=Object.keys(r).filter(function(e){return r[e]===l}),c=o[0],console.log(c),s(c)):setTimeout(function(){return d()});case 5:case"end":return a.stop()}var c},a)}));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)(function(){o&&d()},[o]),Object(n.useEffect)(function(){p()},[]),r.a.createElement(Be,{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"5px"}},r.a.createElement(he,{videoRef:e,onReady:function(){c(!0)}}),r.a.createElement(Se,null,r.a.createElement(ge,{canvasRef:a})),r.a.createElement(ke,{emotion:u}))},Ie=function(){return r.a.createElement("div",null,r.a.createElement(Te,null))},We=t(272),Fe=t(273),Me=Object(h.a)(function(e){return{root:{flexGrow:1},typography:{fontFamily:["Shrikhand","cursive"]},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.secondary},card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}});function Re(){var e=Me(),a=r.a.useState(2),t=Object(E.a)(a,2),n=t[0];t[1];return r.a.createElement(J.a,{theme:q},r.a.createElement(b.a,null),r.a.createElement("div",{className:e.root},r.a.createElement(Q.a,{container:!0,spacing:3},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(_.a,null,r.a.createElement(ee.a,null,r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(We.a,null,r.a.createElement(Fe.a,{className:e.media,image:"https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=1200&q=20",title:"Uplifting quote in book"})))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(ae.a,{className:e.paper},r.a.createElement(x.a,{gutterBottom:!0,variant:"h3",component:"h2",className:e.typography},"Journal Entries"))),r.a.createElement(Q.a,{container:!0,className:e.root,spacing:2},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Q.a,{container:!0,justify:"center",spacing:n},[0,1,2].map(function(a){return r.a.createElement(Q.a,{key:a,item:!0},r.a.createElement(ae.a,{className:e.paper}))}))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(ae.a,{className:e.control},r.a.createElement(Q.a,{container:!0})))))))))}var Le=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(Re,null),r.a.createElement(Y,null)))}}]),a}(n.Component),De=Object(h.a)(function(e){return{}});var Ae=function(){var e=De(),a=Object(n.useState)({}),t=Object(E.a)(a,2),l=t[0],o=t[1];function c(e){var a=e.target,t=a.name,n=a.value;o(Object(X.a)({},l,Object(f.a)({},t,n)))}return r.a.createElement(J.a,{theme:q},r.a.createElement(b.a,null),r.a.createElement(re.a,{maxWidth:"lg",align:"center"},r.a.createElement(Q.a,{container:!0,spacing:3},r.a.createElement(Q.a,{item:!0,xs:12})),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Q.a,{item:!0,xs:8},r.a.createElement(_.a,{color:"secondary"},r.a.createElement(ee.a,{id:"register"},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(ae.a,{className:e.paper},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(x.a,{gutterBottom:!0,variant:"h3",component:"h2"},"Register",r.a.createElement("h5",null,"username"),r.a.createElement(te.a,{onChange:c,name:"username"}))),r.a.createElement(x.a,{gutterBottom:!0,variant:"h3",component:"h2"},"password",r.a.createElement("br",null),r.a.createElement(te.a,{onChange:c,name:"password"}),r.a.createElement("br",null)),r.a.createElement(ne.a,{disabled:!(l.username&&l.password),onClick:function(e){e.preventDefault(),l.username&&l.password&&console.log("soop")}},"Submit")),r.a.createElement(ae.a,{className:e.paper},"Already registered?",r.a.createElement(ne.a,{href:"/login",color:"primary",type:"submit"},"Login Here!")))))))))},Ge=Object(h.a)(function(e){return{root:{flexGrow:1},typography:{fontFamily:["Shrikhand","cursive"]},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.secondary},card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"}}});function He(){var e=Object(n.useState)({}),a=Object(E.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)({intention:"",nurture:"",love1:"",love2:"",love3:"",well1:"",well2:"",well3:"",notWell:"",vent:""}),o=Object(E.a)(l,2),c=o[0],i=o[1];function m(){K.getEntries().then(function(e){return t(e.data)}).catch(function(e){return console.log(e)})}function u(e){var a=e.target,t=a.name,n=a.value;i(Object(X.a)({},c,Object(f.a)({},t,n)))}Object(n.useEffect)(function(){m()},[]);var s=Ge();return r.a.createElement(J.a,{theme:q},r.a.createElement(b.a,null),r.a.createElement("div",{className:s.root},r.a.createElement(Q.a,{container:!0,spacing:3},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(_.a,null,r.a.createElement(ee.a,null,r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(We.a,null,r.a.createElement(Fe.a,{className:s.media,image:"https://images.unsplash.com/photo-1517570544249-a47a3b5d8a8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=shrink&w=1200&q=50",title:"Uplifting quote in book"})))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(ae.a,{className:s.paper},r.a.createElement(x.a,{gutterBottom:!0,variant:"h3",component:"h2",className:s.typography},"Today's Journal"))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Q.a,{container:!0},r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(ae.a,{className:s.paper},r.a.createElement(x.a,{gutterBottom:!0,variant:"h4",component:"h2",className:s.typography},"My Daily Intention"),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"Energy Flows Where Intention Goes",variant:"outlined",color:"primary",name:"intention",value:c.intention}))),r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(ae.a,{className:s.paper,controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h4",component:"h2",className:s.typography},"To Nurture Myself"),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"Today I Will...",variant:"outlined",color:"primary",name:"nurture",value:c.nurture}))))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Q.a,{container:!0},r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(ae.a,{className:s.paper,controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:s.typography},"3 Things I Love About Myself"),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"1",variant:"outlined",color:"primary",name:"love1",value:c.love1}),r.a.createElement("br",null),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"2",variant:"outlined",color:"primary",name:"love2",value:c.love2}),r.a.createElement("br",null),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"3",variant:"outlined",color:"primary",name:"love3",value:c.love3}),r.a.createElement("br",null))),r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(ae.a,{className:s.paper,controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:s.typography},"What Went Well Today?"),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"1",variant:"outlined",color:"primary",name:"well1",value:c.well1}),r.a.createElement("br",null),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"2",variant:"outlined",color:"primary",name:"well2",value:c.well2}),r.a.createElement("br",null),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"3",variant:"outlined",color:"primary",name:"well3",value:c.well3}),r.a.createElement("br",null)))),r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(Q.a,{container:!0},r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(ae.a,{className:s.paper,controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:s.typography},"What Didn't and How Can We Adjust?"),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"Let Me Tell You",variant:"outlined",color:"primary",name:"notWell",value:c.notWell}),r.a.createElement("br",null))),r.a.createElement(Q.a,{item:!0,xs:6},r.a.createElement(ae.a,{className:s.paper,controlId:"exampleForm.ControlTextarea1"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:s.typography},"Let's Vent!"),r.a.createElement(te.a,{onChange:u,id:"outlined-secondary",label:"Here's the tea",variant:"outlined",color:"primary",name:"vent",value:c.vent}))))),r.a.createElement(Q.a,{container:!0},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(ae.a,{className:s.paper,controlId:"exampleForm.ControlTextarea1"},r.a.createElement(ne.a,{onClick:function(e){e.preventDefault(),K.saveEntry({intention:c.intention,nurture:c.nurture,love1:c.love1,love2:c.love2,love3:c.love3,well1:c.well1,well2:c.well2,well3:c.well3,notWell:c.notWell,vent:c.vent}).then(function(){return i({intention:"",nurture:"",love1:"",love2:"",love3:"",well1:"",well2:"",well3:"",notWell:"",vent:""})}).then(function(){return m()}).catch(function(e){return console.log(e)})},variant:"primary",type:"submit"},"Submit"))))))))))}var Pe=t(34),ze=t(92),Ue=t.n(ze),qe=t(140),Je=t.n(qe),Ve=t(91),Ye=t.n(Ve),Xe=Object(h.a)(function(e){return{root:{flexGrow:1},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}});function Ze(){var e=Xe(),a=Object(Pe.a)();return r.a.createElement("div",{className:e.root},r.a.createElement(Q.a,{container:!0,spacing:3},r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(_.a,{style:{display:"inline-block"}},r.a.createElement(ee.a,null,r.a.createElement("div",{className:e.details},r.a.createElement(x.a,{component:"h5",variant:"h5"},"Live From Space"),r.a.createElement(x.a,{variant:"subtitle1",color:"textSecondary"},"Mac Miller"),r.a.createElement("div",{className:e.controls},r.a.createElement(w.a,{"aria-label":"previous"},"rtl"===a.direction?r.a.createElement(Ye.a,null):r.a.createElement(Ue.a,null)),r.a.createElement(w.a,{"aria-label":"play/pause"},r.a.createElement(Je.a,{className:e.playIcon})),r.a.createElement(w.a,{"aria-label":"next"},"rtl"===a.direction?r.a.createElement(Ue.a,null):r.a.createElement(Ye.a,null))))),r.a.createElement(Fe.a,{className:e.cover,image:"/static/images/cards/live-from-space.jpg",title:"Live from space album cover"})))))}var $e=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(He,null),r.a.createElement(Ze,null),r.a.createElement(Y,null)))}}]),a}(n.Component);var Ke=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:["/"]},r.a.createElement(ce,null)),r.a.createElement(i.a,{exact:!0,path:"/facerec"},r.a.createElement(Ie,null)),r.a.createElement(i.a,{exact:!0,path:"/login"},r.a.createElement(oe,null)),r.a.createElement(i.a,{exact:!0,path:"/home"},r.a.createElement(Le,null)),r.a.createElement(i.a,{exact:!0,path:"/register"},r.a.createElement(Ae,null)),r.a.createElement(i.a,{exact:!0,path:"/createjournal"},r.a.createElement($e,null)))))},Qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(Ke,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Qe?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_e(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):_e(e)})}}()}},[[153,1,2]]]);
//# sourceMappingURL=main.5f38d1d2.chunk.js.map