(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{40:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},58:function(e,t,s){"use strict";s.r(t);var c=s(5),n=s.n(c),i=s(25),a=s.n(i),r=(s(51),s(1)),o=s(4),l=s(9),j=s(2),d=s(3),h=(s(52),s(53),s(40),s(15)),u=s(0),b=s(12),O=s(60),p=s(62),f=s(63),x=s(61),m=s(20),g=s(37),v=s(11),y=s(19),k=s.n(y),S=s(6),w=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;Object(r.a)(this,s);return(c=t.call(this,e)).choices2result={"0000":4,"0001":1,"0010":2,"0011":4,"0100":3,"0101":4,"0110":2,"0111":1,1e3:2,1001:1,1010:3,1011:4,1100:2,1101:1,1110:3,1111:4},c.state={current:0,dataSet:[{question:"Which dress catches your eyes?",answers:["evening_dress_1894/scene1.gltf","dress_with_shoes_2/scene2.gltf"],isModel:!0,scales:[2,25],rotation:!0},{question:"Pick an artwork you want to decorate your home.",answers:["Q1/A/scene10.gltf","Q1/B/scene2.gltf"],isModel:!0,scales:[43,1.9],rotation:!1,rotations:[-3.05,-.05]},{question:"If you can just bring one of the followings to the future, which one you will choose?",answers:["collection/1/scene4.gltf","collection/2/scene3.gltf"],isModel:!0,scales:[1500,150],rotation:!0},{question:"Which house would you prefer living in?",answers:["arch/2/scene.gltf","arch/1/scene.gltf"],isModel:!0,scales:[22,22],rotation:!0}],choices:"",finished:!1,final_result:0,lastClick:0,resultLoaded:!1,startLoading:0,results:[{model:Object(S.jsx)("mesh",{position:new u.Vector3(0,-5,-5),children:Object(S.jsx)("primitive",{object:Object(b.c)(m.a,"results/1/scene_1.gltf").scene,scale:5})}),environment:"night",cameraPos:[-1,0,0]},{model:Object(S.jsx)("mesh",{position:new u.Vector3(0,-100,0),children:Object(S.jsx)("primitive",{object:Object(b.c)(m.a,"results/2/5.gltf").scene,scale:.3})}),environment:"park",cameraPos:[-1,0,0]},{model:Object(S.jsx)("mesh",{position:new u.Vector3(5,-20,5),children:Object(S.jsx)("primitive",{object:Object(b.c)(m.a,"results/3/scene.gltf").scene,scale:5})}),environment:"park",cameraPos:[-1,0,0]},{model:Object(S.jsx)("mesh",{position:new u.Vector3(50,-15,80),children:Object(S.jsx)("primitive",{object:Object(b.c)(m.a,"results/4/t/scene.gltf").scene,scale:.3})}),environment:"dawn",cameraPos:[-1,0,0]}],models:[]},c.handleClick=c.handleClick.bind(Object(l.a)(c)),c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.setState({models:[Object(S.jsx)(D,{dataSet:{question:"Which dress catches your eyes?",answers:["evening_dress_1894/scene1.gltf","dress_with_shoes_2/scene2.gltf"],isModel:!0,scales:[2,25],rotation:!0},handleClick:this.handleClick}),Object(S.jsx)(D,{dataSet:{question:"Pick an artwork you want to decorate your home.",answers:["Q1/A/scene10.gltf","Q1/B/scene2.gltf"],isModel:!0,scales:[43,1.9],rotation:!1,rotations:[-3.05,-.05]},handleClick:this.handleClick}),Object(S.jsx)(D,{dataSet:{question:"If you can just bring one of the followings to the future, which one you will choose?",answers:["collection/1/scene4.gltf","collection/2/scene3.gltf"],isModel:!0,scales:[1500,150],rotation:!0},handleClick:this.handleClick}),Object(S.jsx)(D,{dataSet:{question:"Which house would you prefer living in?",answers:["arch/2/scene.gltf","arch/1/scene.gltf"],isModel:!0,scales:[22,22],rotation:!0},handleClick:this.handleClick})]}),console.log("loading done")}},{key:"handleClick",value:function(e){var t=Date.now();t-this.state.lastClick<100?console.log("catch"):this.state.current===this.state.dataSet.length-1?(this.setState({finished:!0,choices:this.state.choices+String(e),lastClick:t}),console.log(this.state.choices)):this.setState({current:this.state.current+1,choices:this.state.choices+String(e),lastClick:t})}},{key:"render",value:function(){var e=Object(S.jsx)("img",{class:"icon",src:"iconpng.png",height:"80px",style:{position:"absolute",marginLeft:"-49vw",marginTop:"-48vh"},onClick:function(){return window.location.reload(!1)},alt:!0});if(console.log("models: "+this.state.models),this.state.models===[])return Object(S.jsx)("h1",{children:"loading"});if(this.state.finished){var t=this.state.results[this.choices2result[this.state.choices]-1];return Object(S.jsx)(C,{modelconf:t,icon:e})}return Object(S.jsx)("div",{children:Object(S.jsx)(q,{handleClick:this.handleClick,dataSet:this.state.dataSet[this.state.current],current:this.state.current,answerList:this.state.models[this.state.current],icon:e})})}}]),s}(c.Component);function C(e){var t=e.modelconf,s=e.icon,n=Object(c.useState)(!1),i=Object(h.a)(n,2),a=i[0],r=i[1];console.log(t);var o=t.model;return Object(c.useEffect)((function(){var e=setTimeout((function(){return r(!0)}),1e4);return function(){clearTimeout(e)}}),[]),Object(S.jsx)("div",{children:a?Object(S.jsx)("div",{className:"App res",children:Object(S.jsxs)(b.a,{camera:{fov:50,position:t.cameraPos,far:3e3},children:[Object(S.jsxs)(c.Suspense,{fallback:null,children:[Object(S.jsxs)(O.a,{children:[s,Object(S.jsx)("div",{className:"script",style:{marginLeft:"-47vw",fontSize:"25px"},children:Object(S.jsx)(k.a,{cursorRenderer:function(e){return""},eraseDelay:7e3,cursor:"",speed:70,text:["Drag your mouse to look around your world!"],eraseSpeed:70})})]}),o,Object(S.jsx)("spotLight",{position:[1,1,1],angle:.15,penumbra:1}),Object(S.jsx)("spotLight",{position:[-1,-1,-1],angle:.15,penumbra:1}),Object(S.jsx)("pointLight",{position:[0,5,0]}),Object(S.jsx)(p.a,{enableZoom:!1}),Object(S.jsx)(f.a,{preset:t.environment,background:!0}),Object(S.jsx)(x.a,{all:!0})]}),Object(S.jsx)(x.a,{all:!0})]})}):Object(S.jsx)("div",{className:"script",style:{marginTop:"45vh",alignItems:"center",textAlign:"center",fontSize:"30px"},children:Object(S.jsx)(k.a,{cursorRenderer:function(e){return""},eraseDelay:1e7,cursor:"",speed:70,text:["Constructing Your Birthplace In the Metaverse..."]})})})}function L(e){return Object(S.jsx)("div",{class:"script",style:{width:"1000px",marginTop:"-340px",marginLeft:"-500px",textAlign:"center","font-size":"20px"},children:Object(S.jsx)("p",{children:e.question})})}function T(e){return Object(S.jsx)("img",{class:"choice",src:e.image,onClick:function(){return e.handleClick(e.choice)},style:{marginLeft:"100px",cursor:"pointer"}})}function P(e){for(var t=[],s=0;s<e.dataSet.answers.length;s++)t.push(Object(S.jsx)(T,{choice:s,handleClick:e.handleClick,image:e.dataSet.answers[s]}));return Object(S.jsx)("div",{style:{},children:t})}function q(e){if(!0===e.dataSet.isModel){var t=Object(S.jsx)("div",{className:"script",style:{marginTop:"45vh",alignItems:"center",textAlign:"center",fontSize:"30px"},children:"Loading..."});return Object(S.jsx)("div",{class:"modelQuestion"+String(e.current),children:Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(b.a,{style:{marginTop:"-200px"},camera:{position:[0,100,500]},children:[Object(S.jsx)("ambientLight",{intensity:.5}),Object(S.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),Object(S.jsx)("spotLight",{position:[-10,-10,-10],angle:.15,penumbra:1}),Object(S.jsx)("pointLight",{position:[-10,-10,-10]}),Object(S.jsx)(O.a,{children:Object(S.jsx)(L,{question:e.dataSet.question})}),Object(S.jsxs)(c.Suspense,{fallback:Object(S.jsx)(O.a,{children:t}),children:[Object(S.jsx)(O.a,{children:e.icon}),e.answerList,Object(S.jsx)(x.a,{all:!0})]}),Object(S.jsx)(x.a,{all:!0})]})})})}return Object(S.jsxs)("div",{children:[Object(S.jsx)(L,{dataSet:e.dataSet}),Object(S.jsx)(P,{dataSet:e.dataSet,handleClick:e.handleClick})]})}function D(e){var t=function(t){var s=Object(c.useState)(!1),i=Object(h.a)(s,2),a=i[0],r=i[1];if(e.dataSet.rotation){var o=n.a.useRef();Object(b.b)((function(e){var t=e.clock.getElapsedTime();o.current.rotation.y=t/3}));var l=Object(b.c)(m.a,e.dataSet.answers[t]),j=0===t?-250:250;return Object(S.jsx)("mesh",{ref:o,onClick:function(){e.handleClick(t)},onPointerOver:function(){return r(!0)},onPointerOut:function(){return r(!1)},position:new u.Vector3(j,0,0),scale:a?1.1*e.dataSet.scales[t]:e.dataSet.scales[t],children:Object(S.jsx)("primitive",{object:l.scene})})}var d=Object(b.c)(m.a,e.dataSet.answers[t]),O=0===t?-250:250,p=n.a.useRef();return Object(b.b)((function(s){s.clock.getElapsedTime();p.current.rotation.y=e.dataSet.rotations[t]})),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("mesh",{ref:p,onClick:function(){e.handleClick(t)},onPointerOver:function(){return r(!0)},onPointerOut:function(){return r(!1)},position:new u.Vector3(O,0,0),scale:a?1.1*e.dataSet.scales[t]:e.dataSet.scales[t],children:Object(S.jsx)("primitive",{object:d.scene})}),Object(S.jsx)(x.a,{all:!0})]})};return Object(S.jsxs)(S.Fragment,{children:[t(0),t(1)]})}function M(e){var t=function(){var e=n.a.useRef();Object(b.b)((function(e){e.clock}));var t=Object(b.c)(m.a,"console/5.gltf");return Object(S.jsx)("mesh",{ref:e,position:new u.Vector3(0,300,0),children:Object(S.jsx)("primitive",{object:t.scene,scale:205})})},s=Object(S.jsx)("div",{className:"script",style:{marginTop:"-585px",marginLeft:"950px",textAlign:"center","font-size":"25px"},children:Object(S.jsx)(k.a,{cursorRenderer:function(e){return""},text:["Hold down \u21e7 to start your journey."],eraseDelay:1e7,cursor:"",speed:70})}),i=Object(S.jsxs)("div",{className:"script",style:{marginTop:"-1150px",textAlign:"center","font-size":"25px"},children:[Object(S.jsx)(k.a,{cursorRenderer:function(e){return""},eraseDelay:1e7,cursor:"",speed:70,text:["Welcome, this is a channel to the Metaverse."]}),Object(S.jsx)("br",{}),Object(S.jsx)(k.a,{cursorRenderer:function(e){return""},eraseDelay:1e7,cursor:"",speed:70,typingDelay:6700,text:["Pay attention to the surroundings of you."]}),Object(S.jsx)("br",{}),Object(S.jsx)(k.a,{cursorRenderer:function(e){return""},eraseDelay:1e7,cursor:"",speed:70,typingDelay:1e4,text:["Click on the mystery cube to move forward."]})]});return Object(S.jsxs)("div",{className:"App ress",children:[Object(S.jsx)("h1",{}),Object(S.jsxs)(b.a,{camera:{position:[0,450,-500]},children:[Object(S.jsxs)(c.Suspense,{fallback:null,children:[Object(S.jsx)(t,{}),Object(S.jsx)("ambientLight",{intensity:.5}),Object(S.jsx)("spotLight",{position:[10,310,10],angle:.15,penumbra:1}),Object(S.jsx)("spotLight",{position:[-10,290,-10],angle:.15,penumbra:1}),Object(S.jsx)("pointLight",{position:[-10,290,-10]}),Object(S.jsx)(x.a,{all:!0}),Object(S.jsxs)(g.a,{children:[Object(S.jsx)(g.c,{premultiply:!0,blendFunction:v.a.ADD}),Object(S.jsx)(g.b,{dtSize:32,delay:[1.2,3],duration:[.6,1],strength:[0,.2]})]})]}),Object(S.jsx)(x.a,{all:!0})]}),!e&&s,e&&i]})}var A=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={start:!1,end:!1,parentStart:e.setStart,notSetParent:!0},c}return Object(o.a)(s,[{key:"render",value:function(){var e=this;if(this.state.end)return Object(S.jsx)("div",{children:"end"});var t=Object(S.jsx)("div",{className:"script",style:{marginTop:"45vh",alignItems:"center",textAlign:"center",fontSize:"30px"},children:"Uploading your mind to the server..."});return this.state.start?(this.state.notSetParent&&(this.state.parentStart(),this.setState({notSetParent:!1})),Object(S.jsx)(c.Suspense,{fallback:t,children:Object(S.jsx)(w,{})})):Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{href:"#",class:"cube",onClick:function(){e.setState({start:!0})},style:{marginTop:"250px"},children:[Object(S.jsx)("div",{class:"face top",children:Object(S.jsx)("h1",{style:{marginTop:"25%"},children:"?"})}),Object(S.jsx)("div",{class:"face bottom",children:Object(S.jsx)("h1",{style:{marginTop:"25%"},children:"?"})}),Object(S.jsx)("div",{class:"face left",children:Object(S.jsx)("h1",{style:{marginTop:"25%"},children:"?"})}),Object(S.jsx)("div",{class:"face right",children:Object(S.jsx)("h1",{style:{marginTop:"25%"},children:"?"})}),Object(S.jsx)("div",{class:"face front",children:Object(S.jsx)("h1",{style:{marginTop:"25%"},children:"?"})}),Object(S.jsx)("div",{class:"face back",children:Object(S.jsx)("h1",{style:{marginTop:"25%"},children:"?"})})]})})}}]),s}(c.Component),R=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={pressed:!1,start:!1,finish:!1},c.addSpeed=c.addSpeed.bind(Object(l.a)(c)),c.setStart=c.setStart.bind(Object(l.a)(c)),c}return Object(o.a)(s,[{key:"render",value:function(){try{document.title="YourBirthPlace",document.querySelector("video").playbackRate=1}catch(c){}var e,t=Object(S.jsxs)("div",{href:"#",class:"fakecube",style:{marginTop:"250px"},children:[Object(S.jsx)("div",{class:"fakeface top"}),Object(S.jsx)("div",{class:"fakeface bottom"}),Object(S.jsx)("div",{class:"fakeface left"}),Object(S.jsx)("div",{class:"fakeface right"}),Object(S.jsx)("div",{class:"fakeface front"}),Object(S.jsx)("div",{class:"fakeface back"})]});e=this.state.pressed?Object(S.jsx)(A,{setStart:this.setStart}):t,console.log(this.state.start);var s=Object(S.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo",children:Object(S.jsx)("source",{src:"Tube1.mp4",type:"video/mp4"})});return Object(S.jsxs)("div",{children:[!this.state.finish&&s,e,!this.state.start&&M(this.state.pressed)]})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.addSpeed),document.addEventListener("keyup",this.reduceSpeed)}},{key:"addSpeed",value:function(){if(!0!==this.state.start){this.setState({pressed:!0});try{document.querySelector("video").playbackRate=3}catch(e){}}}},{key:"reduceSpeed",value:function(){try{document.querySelector("video").playbackRate=1}catch(e){}}},{key:"setStart",value:function(){this.setState({start:!0})}}]),s}(c.Component);a.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(R,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.0317b75b.chunk.js.map