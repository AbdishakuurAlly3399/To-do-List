(this.webpackJsonpbeginner=this.webpackJsonpbeginner||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(9),a=n.n(c),s=n(8),o=n(11),i=n(2),u=n.n(i),l=n(4),d=n(3),j=n(0),b=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],b=Object(r.useState)(!1),h=Object(d.a)(b,2),f=h[0],p=h[1];return Object(j.jsxs)("form",{className:"add-task",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:f}),s(""),l(""),p(!1)):alert("please add task")},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Add Task"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Add Day"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Day & time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control form-control-check",children:[Object(j.jsx)("label",{children:"Set reminder"}),Object(j.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},h=function(e){var t=e.color,n=e.text,r=e.onAdd;return Object(j.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:r,children:n})};h.defaultProps={color:"steelblue"};var f=h,p=function(e){var t=e.onAdd,n=e.ShowAdd;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:"To do List "}),Object(j.jsx)(f,{color:n?"red":"green",text:n?"Close":"Add",onAdd:t})]})},O=n(10),x=function(e){var t=e.taskList,n=e.onDelete,r=e.onToggle;return Object(j.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(j.jsxs)("h3",{children:[t.text," ",Object(j.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(j.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(j.jsx)(j.Fragment,{children:t.map((function(e,t){return Object(j.jsx)(x,{taskList:e,onDelete:n,onToggle:r},t)}))})},v=(n(18),function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("p",{style:{textAlign:"end",marginTop:"20%"},children:[" ","Copyright \xa9 AbdiShakuur Ally"," "]})})}),k=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(d.a)(a,2),h=i[0],f=i[1];Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var O=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(o.a)(h),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:f(h.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(p,{onAdd:function(){return c(!n)},ShowAdd:n}),n&&Object(j.jsx)(b,{onAdd:x}),h.length>0?Object(j.jsx)(m,{tasks:h,onDelete:k,onToggle:function(e){f(h.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(j.jsxs)("h3",{style:{textAlign:"center",marginTop:"20%",fontWeight:"300"},children:["please add a task..........\u270b"," "]}),Object(j.jsx)(v,{})]})};a.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b7a5caed.chunk.js.map