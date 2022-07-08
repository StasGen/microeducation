(this["webpackJsonpjsonforms-react-seed"]=this["webpackJsonpjsonforms-react-seed"]||[]).push([[0],{613:function(e){e.exports=JSON.parse('{"type":"object","properties":{"version":{"type":"number","minimum":0,"default":1},"contentURL":{"type":"string"},"courses":{"type":"array","items":{"type":"object","properties":{"flowTopic":{"type":"string","default":"newTopic"},"version":{"type":"number","default":1,"minimum":0},"id":{"type":"string","default":"$uuid"},"card":{"type":"object","properties":{"title":{"type":"string","default":"New card title"},"imageURL":{"type":"string","default":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg"},"description":{"type":"string","default":"New card description"},"header":{"type":"string","default":"Microlearning"}},"default":{"title":"New card title","imageURL":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg","overview":"New card overview","header":"Microlearning"},"required":["title","imageURL","description"]},"preview":{"type":"object","properties":{"title":{"type":"string"},"imageURL":{"type":"string"},"overview":{"type":"string"}},"default":{"title":"New preview title","imageURL":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg","overview":"New preview overview"},"required":["title","imageURL","overview"]},"episodes":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string","default":"New episode title"},"description":{"type":"string","default":"New episode description"},"position":{"type":"integer","minimum":0,"default":1},"id":{"type":"string","default":"$uuid"},"stories":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","default":"$uuid"},"version":{"type":"number","minimum":0,"default":1},"position":{"type":"integer","minimum":0,"default":1},"content":{"type":"object","properties":{"type":{"type":"string","enum":["textIllustration","question","quote"]},"illustrationURL":{"type":"string"},"question":{"type":"string"},"questionFooter":{"type":"string"},"header":{"type":"string"},"text":{"type":"string"},"title":{"type":"string"},"quote":{"type":"string"},"answerOptions":{"type":"array","items":{"type":"object","properties":{"text":{"type":"string","default":""},"isCorrect":{"type":"boolean","default":true},"explanation":{"type":"object","properties":{"header":{"type":"string","default":""},"text":{"type":"string","default":""}},"default":{"header":"","text":""}}}}},"continueButtonTitle":{"type":"string"}},"default":{"type":"textIllustration","illustrationURL":"https://i.onthe.io/ttmdhw747dgvun60p.f9d74fae.jpeg","header":"New story header","text":"New story text"},"required":["type"]}},"required":["id","version","position","content"],"default":{"id":"60e5daf0-ac93-4550-b443-aaf7158cf356","version":1,"position":1}}}},"required":["id","position","title","description","stories"]}}},"required":["version","id","flowTopic","card","preview","episodes"]}}},"required":["version","courses"]}')},614:function(e){e.exports=JSON.parse('{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/version"},{"type":"Control","scope":"#/properties/contentURL"},{"type":"ListWithDetail","scope":"#/properties/courses","options":{"detail":{"type":"Categorization","elements":[{"type":"Category","label":"Data","elements":[{"type":"Control","scope":"#/properties/flowTopic"},{"type":"Control","scope":"#/properties/version"},{"type":"Control","scope":"#/properties/id","options":{"readonly":true}}]},{"type":"Category","label":"Card","elements":[{"type":"Control","scope":"#/properties/card","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/header"},{"type":"Control","scope":"#/properties/title"},{"type":"Control","scope":"#/properties/imageURL"},{"type":"Control","scope":"#/properties/description"}]}}}]},{"type":"Category","label":"Preview","elements":[{"type":"Control","scope":"#/properties/preview","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/title"},{"type":"Control","scope":"#/properties/imageURL"},{"type":"Control","scope":"#/properties/overview","options":{"multi":true}}]}}}]},{"type":"Category","label":"Episodes","elements":[{"type":"Control","scope":"#/properties/episodes","options":{"showSortButtons":true,"detail":{"type":"Categorization","elements":[{"type":"Category","label":"Data","elements":[{"type":"Control","scope":"#/properties/id","options":{"readonly":true}},{"type":"Control","scope":"#/properties/title"},{"type":"Control","scope":"#/properties/description","options":{"multi":true}}]},{"type":"Category","label":"Stories","elements":[{"type":"Control","scope":"#/properties/stories","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/id","options":{"readonly":true}},{"type":"Control","scope":"#/properties/version"},{"type":"Control","scope":"#/properties/content","options":{"detail":{"type":"VerticalLayout","elements":[{"type":"Control","scope":"#/properties/type"},{"type":"Control","scope":"#/properties/illustrationURL","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"textIllustration"},{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/header","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"textIllustration"}]}}}},{"type":"Control","scope":"#/properties/text","options":{"multi":true},"rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"textIllustration"},{"const":"quote"}]}}}},{"type":"Control","scope":"#/properties/question","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/questionFooter","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/answerOptions","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"question"}]}}}},{"type":"Control","scope":"#/properties/title","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"quote"}]}}}},{"type":"Control","scope":"#/properties/continueButtonTitle","rule":{"effect":"SHOW","condition":{"scope":"#/properties/type","schema":{"anyOf":[{"const":"quote"}]}}}}]}}}]},"showSortButtons":true}}]}]}}}]}]}}}]}')},975:function(e,t,o){},976:function(e,t,o){"use strict";o.r(t);var i,r=o(1),n=o(161),s=o(1023),a=o(420),c=o(137),p=o.n(c),l=o(211),d=o(10),u=o(20),j=o(17),m=o(604),y=o(249),f=o(22),b=y.Unwrapped.MaterialTextControl,O=Object(j.rankWith)(5,Object(j.and)(j.isStringControl,Object(j.scopeEndsWith)("URL"))),h=Object(f.withJsonFormsControlProps)((function(e){e.schema;return Object(r.jsxs)(m.a,{container:!0,children:[Object(r.jsx)("img",{style:{maxWidth:250},src:e.data}),Object(r.jsx)(b,Object(l.a)({},e))]})})),x=o(0),g=o(558),v=o(336),w=o(574),C=(o(975),o(613)),N=o(614),S=o(410),L=function(e){var t=e.id,o=e.value,i=e.updateValue,n=Object(x.useState)(null),s=Object(d.a)(n,2),a=s[0],c=s[1];return Object(r.jsxs)("div",{id:"#/properties/rating",className:"rating",children:[Object(r.jsx)(S.a,{shrink:!0,style:{marginTop:"0.8em"},children:"Rating"}),Object(r.jsx)("div",{style:{cursor:"pointer",fontSize:"18px"},children:[0,1,2,3,4].map((function(e){var n=null!==a&&void 0!==a?a:o;return Object(r.jsx)("span",{onMouseOver:function(){return c(e+1)},onMouseOut:function(){return c(null)},onClick:function(){return i(e+1)},children:e<n?"\u2605":"\u2606"},"".concat(t,"_").concat(e))}))})]})},q=Object(f.withJsonFormsControlProps)((function(e){var t=e.data,o=e.handleChange,i=e.path;return Object(r.jsx)(L,{value:t,updateValue:function(e){return o(i,e)}})})),k=Object(j.rankWith)(3,Object(j.scopeEndsWith)("rating")),J=o(1021),R=o(1022),U=o(559),W=o(560),B=o(561),H=Object(j.createAjv)({useDefaults:!0}),D=Object(J.a)({episodeDescription:{textAlign:"left",overflowY:"auto",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":5,"line-clamp":5,"-webkit-box-orient":"vertical"},storyDescription:{textAlign:"left",overflowY:"auto",textOverflow:"ellipsis",display:"-webkit-box","-webkit-line-clamp":15,"line-clamp":15,"-webkit-box-orient":"vertical"},fauxButton:{textTransform:(i="none","".concat(i," !important"))},container:{padding:"1em",width:"100%",height:"auto"},title:{textAlign:"left"},dataContent:{overflow:"auto",display:"flex",justifyContent:"left",borderRadius:"0.25em",backgroundColor:"#fefefe",marginBottom:"1rem",maxHeight:"300px",width:"100%"},resetButton:{margin:"auto !important",display:"block !important"},demoform:{margin:"auto",padding:"1rem"}}),I=localStorage.getItem("initial-data")?JSON.parse(localStorage.getItem("initial-data")):{},T=[].concat(Object(u.a)(y.materialRenderers),[{tester:k,renderer:q},{tester:O,renderer:h}]),F=function(){var e=D(),t=Object(x.useState)(I),o=Object(d.a)(t,2),i=o[0],n=o[1],s=Object(x.useMemo)((function(){return JSON.stringify(i,null,2)}),[i]);Object(x.useEffect)((function(){localStorage.setItem("initial-data",JSON.stringify(i))}),[i]);var a=Object(x.useState)({preview:!1}),c=Object(d.a)(a,2),p=c[0],u=c[1];console.log(JSON.stringify(p));var j=Object(x.useState)(!0),b=Object(d.a)(j,2),O=b[0],h=b[1];function S(t){if(t)return t.map((function(t,o){var i,n=p;return Object(r.jsx)(m.a,{item:!0,children:Object(r.jsx)(g.a,{className:e.fauxButton,onClick:function(){n.course=""+o,n.episode=null,u(Object(l.a)({},n)),console.log(n)},children:Object(r.jsxs)(U.a,{sx:{maxWidth:345},raised:o==p.course,children:[Object(r.jsx)(B.a,{component:"img",height:"140",image:t.card.imageURL,alt:"green iguana"}),Object(r.jsxs)(W.a,{children:[Object(r.jsx)(v.a,{gutterBottom:!0,variant:"h6",className:e.title,component:"div",children:t.card.title}),Object(r.jsx)(v.a,{variant:"body1",className:e.title,color:"text.secondary",children:t.card.description}),Object(r.jsxs)(v.a,{variant:"body2",className:e.title,color:"text.secondary",children:["Episodes: ",(null===(i=t.episodes)||void 0===i?void 0:i.length)||0]})]})]})})})}))}function L(t,o){var i=p;if(t)return t.map((function(t,o){var n;return Object(r.jsx)(m.a,{item:!0,children:Object(r.jsx)(g.a,{className:e.fauxButton,onClick:function(){i.episode=""+o,u(Object(l.a)({},i)),console.log(i)},children:Object(r.jsx)(U.a,{sx:{maxWidth:345},raised:o==p.episode,children:Object(r.jsxs)(W.a,{children:[Object(r.jsx)(v.a,{gutterBottom:!0,variant:"h6",className:e.title,component:"div",children:t.title}),Object(r.jsx)(v.a,{variant:"caption",className:e.episodeDescription,color:"text.secondary",children:t.description}),Object(r.jsxs)(v.a,{variant:"caption",className:e.title,color:"text.secondary",children:["Stories: ",(null===(n=t.stories)||void 0===n?void 0:n.length)||0]})]})})})})}))}function q(t,o){if(t)return t.map((function(t,o){return Object(r.jsx)(m.a,{item:!0,children:Object(r.jsx)(g.a,{className:e.fauxButton,children:Object(r.jsxs)(U.a,{sx:{maxWidth:250},children:[Object(r.jsx)(B.a,{component:"img",height:"200",image:t.content.illustrationURL,alt:"green iguana"}),Object(r.jsxs)(W.a,{children:[Object(r.jsx)(v.a,{gutterBottom:!0,variant:"h6",className:e.title,component:"div",children:t.content.header}),Object(r.jsx)(v.a,{variant:"caption",className:e.storyDescription,color:"text.secondary",children:t.content.text})]})]})})})}))}function k(){var e=i.courses;return console.log(e),Object(r.jsxs)(m.a,{container:!0,direction:"row",xs:12,children:[Object(r.jsx)(m.a,{container:!0,children:Object(r.jsxs)("a",{children:[" ",JSON.stringify(p)," "]})}),Object(r.jsx)(m.a,{item:!0,direction:"column",xs:2,children:S(e)}),Object(r.jsx)(m.a,{item:!0,direction:"column",xs:2,children:Object(r.jsx)(J,{})}),Object(r.jsx)(m.a,{item:!0,direction:"column",xs:8,children:Object(r.jsx)(F,{})})]})}function J(){var e=p;if(console.log("cp:"+JSON.stringify(e)),e.course){var t=i.courses[e.course||0].episodes;if(console.log(t),e.course)return Object(r.jsx)(m.a,{children:Object(r.jsx)(m.a,{container:!0,direction:"column",children:p.course?L(t,e.course):null})})}return null}function F(){if(console.log(p),p.episode&&p.course){var e=i.courses[p.course||0].episodes[p.episode||0].stories;return console.log(e),Object(r.jsx)(m.a,{children:Object(r.jsx)(m.a,{item:!0,direction:"row",container:!0,children:q(e,p.episode)})})}return null}return Object(r.jsxs)(x.Fragment,{children:[Object(r.jsx)(v.a,{variant:"h6",className:e.title,children:"Adminka Last Update: 20:31, 8 Jul, 2022"}),Object(r.jsxs)(m.a,{container:!0,direction:"row",children:[Object(r.jsxs)(m.a,{item:!0,direction:"column",justifyContent:"center",spacing:2,className:e.container,xs:p.preview?4:12,children:[Object(r.jsxs)(m.a,{item:!0,sm:6,children:[O&&Object(r.jsx)(v.a,{variant:"h4",className:e.title,children:"JSON"}),O&&Object(r.jsx)(w.a,{className:e.dataContent,id:"boundData",multiline:!0,variant:"outlined",value:s,onChange:function(e){n(JSON.parse(e.target.value))}}),Object(r.jsxs)(m.a,{container:!0,justifyContent:"center",direction:"row",spacing:2,children:[Object(r.jsx)(m.a,{item:!0,children:Object(r.jsx)(g.a,{onClick:function(){n({})},color:"primary",variant:"contained",children:"Clear data"})}),Object(r.jsx)(m.a,{item:!0,children:Object(r.jsxs)(g.a,{onClick:function(){h(!O)},color:"secondary",variant:"contained",children:[O?"Hide":"Show"," JSON"]})}),Object(r.jsx)(m.a,{item:!0,children:Object(r.jsx)(g.a,{color:"success",variant:"contained",onClick:function(){p.preview=!p.preview,u(Object(l.a)({},p))},children:"Preview"})})]})]}),Object(r.jsxs)(m.a,{item:!0,xs:!0,children:[Object(r.jsx)(v.a,{variant:"h4",className:e.title,children:"MicroEd Form"}),!p.preview&&Object(r.jsx)("div",{className:e.demoform,children:Object(r.jsx)(f.JsonForms,{schema:C,uischema:N,data:i,renderers:T,cells:y.materialCells,onChange:function(e){e.errors;!function(e){var t=e;t.courses&&(t.courses=t.courses.map((function(e){return e.episodes&&e.episodes.map((function(e,t){return e.position=t,e.stories&&(e.stories=e.stories.map((function(e,t){return e.position=t,e}))),e})),e})));var o=JSON.stringify(t).replaceAll(/\$uuid/g,Object(R.a)()),i=JSON.parse(o),r=JSON.stringify(e);n(r!=o?i:e)}(e.data)},ajv:H})})]})]}),Object(r.jsx)(m.a,{item:!0,direction:"row",xs:8,children:p.preview&&Object(r.jsx)(k,{})})]})]})},M=Object(n.b)({components:{MuiFormControl:{styleOverrides:{root:{margin:"0.8em 0"}}}}});p.a.render(Object(r.jsxs)(s.a,{theme:M,children:[Object(r.jsx)(a.b,{}),Object(r.jsx)(F,{})]}),document.getElementById("root"))}},[[976,1,2]]]);
//# sourceMappingURL=main.b0349f0a.chunk.js.map