(this["webpackJsonpeg-chat"]=this["webpackJsonpeg-chat"]||[]).push([[0],{16:function(e,a,t){e.exports=t(30)},21:function(e,a,t){},23:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(12),s=t.n(c),l=(t(21),t(6)),o=t.n(l),i=t(10),m=t(8),u=(t(23),t(5)),p=t.n(u),d=(t(24),t(28),t(31),t(14)),g=t(15);p.a.initializeApp({apiKey:"AIzaSyAcGTTbY39i_6j42j1t7HGKgxP518HSiuI",authDomain:"eg-chat-201ac.firebaseapp.com",projectId:"eg-chat-201ac",storageBucket:"eg-chat-201ac.appspot.com",messagingSenderId:"1090164715664",appId:"1:1090164715664:web:7eb8cea9727653ee182815",measurementId:"G-BVBB97NN1Y"});var h=p.a.auth(),f=p.a.firestore();function E(){return r.a.createElement("content-area-2",null,r.a.createElement("span",{className:"material-icons-round error"},"error"),r.a.createElement("sign-in-text",null,"you must sign in to use BJH Quizlets"),r.a.createElement("button",{className:"sign-in",onClick:Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new p.a.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(a);case 3:case"end":return e.stop()}}),e)})))},"sign in with Google"))}function v(){return h.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return h.signOut()}},r.a.createElement("span",{class:"material-icons-round"},"logout"),"sign out")}function b(){var e=Object(n.useRef)(),a=f.collection("messages"),t=a.orderBy("createdAt"),c=Object(g.a)(t,{idField:"id"}),s=Object(m.a)(c,1)[0],l=Object(n.useState)(""),u=Object(m.a)(l,2),d=u[0],E=u[1],v=function(){var t=Object(i.a)(o.a.mark((function t(n){var r,c,s,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=h.currentUser,c=r.uid,s=r.photoURL,l=r.displayName,t.next=4,a.add({text:d,createdAt:p.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:s,displayName:l,sentAt:Date.now()});case 4:E(""),e.current.scrollIntoView({behavior:"smooth"}),fetch("https://discord.com/api/webhooks/942562022242000897/stMTZH4YiZrY4ntjgCTrHZVzMYYFlRTT8qXzb_Q9_g_IYSseYkdT9jsA5seU9qDdLX5M",{method:"post",body:JSON.stringify({embeds:[{author:{name:l,icon_url:s},description:d}]}),headers:{"Content-Type":"application/json"}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,s&&s.map((function(a,t,n){return r.a.createElement(y,{key:a.id,message:a,dummy:e,index:t,array:n})})),r.a.createElement("span",{ref:e})),r.a.createElement("div",{className:"App"},r.a.createElement("message-bar",null,r.a.createElement("img",{className:"pfp",src:h.currentUser.photoURL,alt:"user avatar"}),r.a.createElement("input",{type:"file",id:"fileUpload",name:"avatar",hidden:!0}),r.a.createElement("label",{className:"upload-file",for:"fileUpload"},r.a.createElement("span",{class:"material-icons-round"},"file_upload")),r.a.createElement("form",{onSubmit:v},r.a.createElement("input",{className:"msg",value:d,onChange:function(e){return E(e.target.value)},placeholder:"say something..."})),r.a.createElement("message-bar-send-button",{onClick:v},r.a.createElement("span",{class:"material-icons-round"},"send")))))}function y(e){var a,t=e.message,n=t.text,c=t.uid,s=t.photoURL,l=null===(a=e.array[e.index-1])||void 0===a?void 0:a.uid,o=c===h.currentUser.uid?"sent":"received";return e.dummy.current.scrollIntoView({behavior:"smooth"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"name".concat(o)},r.a.createElement("p",{className:"msg-date"},"sent"==o?new Date(e.message.sentAt).toLocaleString("en-US"):""),r.a.createElement("p",null,l!=c?e.message.displayName:""," ","received"==o?new Date(e.message.sentAt).toLocaleString("en-US"):"")),r.a.createElement("div",{className:"message ".concat(o),style:{marginLeft:l==c?"50px":"0px",marginRight:l==c?"50px":"0px"}},l!=c?r.a.createElement("img",{className:"pfp",src:s||"https://api.adorable.io/avatars/23/abott@adorable.png",alt:"user avatar"}):r.a.createElement(r.a.Fragment,null),r.a.createElement("p",null,n)))}var w=function(){var e=Object(d.a)(h),a=Object(m.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"eg-verse"},"\ud83c\udf0c")," BJH Quizlets\uff5cprovided by Ethan Pinson"),r.a.createElement(v,null)),r.a.createElement("section",null,a?r.a.createElement(b,null):r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.e5057fc5.chunk.js.map