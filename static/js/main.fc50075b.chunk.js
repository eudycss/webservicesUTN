(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{198:function(e,t){},200:function(e,t){},212:function(e,t){},214:function(e,t){},242:function(e,t){},244:function(e,t){},245:function(e,t){},250:function(e,t){},252:function(e,t){},271:function(e,t){},283:function(e,t){},286:function(e,t){},339:function(e,t,c){},340:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(49),a=c(23),s=c(10),i=c(3),o=c(98),l=c(0),d=function(e){var t=e.isAuth,c=e.Component,n=Object(o.a)(e,["isAuth","Component"]);return Object(l.jsx)(s.b,Object(i.a)(Object(i.a)({},n),{},{component:function(){return t?c():Object(l.jsx)(s.a,{to:"/login"})}}))},j=function(e){var t=e.isAuth,c=e.Component,n=Object(o.a)(e,["isAuth","Component"]);return Object(l.jsx)(s.b,Object(i.a)(Object(i.a)({},n),{},{component:function(){return t?Object(l.jsx)(s.a,{to:"/"}):c()}}))},u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("hr",{className:"my-3"}),Object(l.jsx)("h1",{className:"display-2 text-center",children:" Bienvenido Administrador "})]})},b=c(6),h=c(8),O=c.n(h),m=c(14),x="https://app-bucetas.herokuapp.com/api",p=function(e){var t=e.url,c=e.method,n=void 0===c?"GET":c,r=e.data;return"GET"===n?fetch("".concat(x).concat(t)):fetch("".concat(x).concat(t),{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(r)})},v=function(e){var t=e.url,c=e.method,n=void 0===c?"GET":c,r=e.data,a=String(localStorage.getItem("token"));return"GET"===n?fetch("".concat(x).concat(t),{headers:{"Content-type":"application/json",token:a}}):fetch("".concat(x).concat(t),{method:n,headers:{"Content-type":"application/json",token:a},body:JSON.stringify(r)})},f={login:"[Auth] login",logout:"[Auth] logout",checking:"[Auth] Checking Token",startLoading:"[UI] Start loading",stopLoading:"[UI] Stop loading",setError:"[Err] Set Error",delError:"[Err] Del Error",loadStudents:"[Student] Load Students",setActiveStudent:"[Student] Active student",clearStudents:"[Student] Clear student",setPDF:"[PDF] Set Pdf",clearPDF:"[PDF] Clear Pdf",loadDrivers:"[Driver] load drivers",setActiveDriver:"[Driver] Active driver",clearDrivers:"[Driver] Clear driver",openModalDrivers:"[Driver] Open modal",clseModalDrivers:"[Driver] Close modal",clearActiveDriver:"[Driver] Clear active driver",updateDriver:"[Driver] Update driver",addDriver:"[Driver] Add driver",deleteDriver:"[Driver] delete driver",getAfluenciaStudent:"[Afluencia] afluencia student",clearAfluenciaStudent:"[Afluencia] clear afluencia student"},g=function(){return{type:f.startLoading}},N=function(){return{type:f.stopLoading}},y=c(63),S=c.n(y),D=function(e){return{type:f.loadDrivers,payload:{drivers:e}}},k=function(){return{type:f.openModalDrivers}},C=function(){return{type:f.clseModalDrivers}},_=function(){return{type:f.clearActiveDriver}},E=function(e){return{type:f.updateDriver,payload:{update:e}}},w=c(164),A=c.n(w),F=function(e){var t=e.type,c=e.color;return Object(l.jsx)(A.a,{type:t,color:c,height:"50px",width:"50px"})},J=c(21),L=c(62),M=c.n(L),P={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",margin:"0",padding:"0"}},T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},H=c(27),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),c=Object(J.a)(t,2),r=c[0],a=c[1],s=function(e){var t=e.target,c=t.type,n=t.checked,r=t.value,s=t.name,o=c&&"checkbox"===c?n:r;a((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(H.a)({},s,o))}))},o=function(){return a(e)};return[r,s,o]},R=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.drivers})),c=t.active,r=t.openModal,a={nombre_conductor:"",apellido_conductor:"",cedula_conductor:"",celular_conductor:"",email_conductor:"",numerorecorridomaximo:0,state_conductor:!1};c&&(a=c);var s=I(a),i=Object(J.a)(s,3),o=i[0],d=i[1],j=i[2],u=Object(n.useRef)(c);Object(n.useEffect)((function(){c!==u.current&&(j(c),u.current=c)}),[c,j]);var h=o.nombre_conductor,x=o.apellido_conductor,p=o.cedula_conductor,f=o.celular_conductor,g=o.email_conductor,N=o.numerorecorridomaximo,y=o.state_conductor,D=function(){e(C()),e(_())};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(M.a,{isOpen:Boolean(r),ariaHideApp:!1,onRequestClose:D,style:T,children:Object(l.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),e(c?(n=o,function(){var e=Object(m.a)(O.a.mark((function e(t){var c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({url:"/conductor/".concat(n.cedula_conductor),method:"PUT",data:n});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,S.a.fire({icon:"success",title:"Actividad completada",text:r.message}),t(E(n)),t(C()),t(_());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.fire({icon:"success",title:"Actividad completada"}),t(C());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var n},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"nombreid",className:"form-label",children:"Nombre"}),Object(l.jsx)("input",{id:"nombreid",type:"text",className:"form-control",name:"nombre_conductor",value:h,onChange:d,disabled:!!c})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"apellidoid",className:"form-label",children:"Apellido"}),Object(l.jsx)("input",{id:"apellidoid",type:"text",className:"form-control",name:"apellido_conductor",value:x,onChange:d,disabled:!!c})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"cedulaid",className:"form-label",children:"Cedula"}),Object(l.jsx)("input",{id:"cedulaid",type:"text",className:"form-control",name:"cedula_conductor",value:p,onChange:d,disabled:!!c,maxLength:10,minLength:0})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"correoid",className:"form-label",children:" Correo"}),Object(l.jsx)("input",{id:"correoid",type:"email",className:"form-control",name:"email_conductor",value:g,onChange:d,disabled:!!c})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"telefonoid",className:"form-label",children:"Telefono"}),Object(l.jsx)("input",{id:"telefonoid",type:"telf",className:"form-control",name:"celular_conductor",value:f,onChange:d,disabled:!!c,maxLength:10,minLength:0})]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsxs)("label",{children:["Estado:",Object(l.jsx)("input",{name:"state_conductor",type:"checkbox",checked:y,onChange:d})]})}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"recorridosid",className:"form-label",children:"max recorrido"}),Object(l.jsx)("input",{id:"recorridosid",type:"number",className:"form-control",name:"numerorecorridomaximo",value:N,onChange:d,min:0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-success mb-3",style:{width:"100%"},children:"Enviar"}),Object(l.jsx)("button",{type:"button",className:"btn btn-danger",onClick:D,style:{width:"100%"},children:"Cancelar"})]})})})},U=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.drivers})).drivers,c=function(t){e(function(e){return{type:f.setActiveDriver,payload:{active:e}}}(t)),e(k())};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("table",{className:"table table-striped table-hover",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Nombre"}),Object(l.jsx)("th",{children:"Apellido"}),Object(l.jsx)("th",{children:"Cedula"}),Object(l.jsx)("th",{children:"Correo"}),Object(l.jsx)("th",{children:"Telefono"}),Object(l.jsx)("th",{children:"Estado"}),Object(l.jsx)("th",{children:"Recorridos"}),Object(l.jsx)("th",{children:"Opciones"})]})}),Object(l.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.nombre_conductor}),Object(l.jsx)("td",{children:e.apellido_conductor}),Object(l.jsx)("td",{children:e.cedula_conductor}),Object(l.jsx)("td",{children:e.email_conductor}),Object(l.jsx)("td",{children:e.celular_conductor}),Object(l.jsx)("td",{children:e.state_conductor?"activo":"inactivo"}),Object(l.jsx)("td",{children:e.numerorecorridomaximo}),Object(l.jsx)("td",{children:Object(l.jsx)("i",{style:{cursor:"pointer",margin:"0 6px "},onClick:function(){return c(e)},className:"fa fa-edit"})})]},e.cedula_conductor)}))})]}),Object(l.jsx)(R,{})]})},G=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.ui})).loading;return Object(n.useEffect)((function(){e(function(){var e=Object(m.a)(O.a.mark((function e(t){var c,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({url:"/conductor"});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,r=n.conductoresAll,t(D(r)),t(N());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(g())}),[e]),Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(F,{type:"spin",color:"#48f542"}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"text-center",children:"Lista de Conductores"}),Object(l.jsx)("hr",{className:"my-3"}),Object(l.jsx)(U,{})]})})},B=function(e){var t=f.loadStudents;return{type:t,payload:{students:e}}},q=c(92),V=function(e){return function(){var t=Object(m.a)(O.a.mark((function t(c){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(X(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=function(e){return{type:f.setPDF,payload:{urlString:e,openModal:!0}}},z=function(){return{type:f.clearPDF}},K=c(165),Q=c.n(K),W=c(166),Y=c.n(W),Z=function(){var e=Object(n.useRef)(),t=Object(b.b)(),c=Object(b.c)((function(e){return e.pdf})),r=c.openModal,a=c.urlString;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(M.a,{isOpen:r,ariaHideApp:!1,onAfterOpen:function(){var t=e.current;a&&Y.a.embed(a,t,{width:"85vw",height:"85vh"})},onRequestClose:function(){t(z())},style:P,contentLabel:"Reporte pdf",children:Object(l.jsx)("div",{ref:e})})})},$=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.student})).students,c=function(){var c=Object(m.a)(O.a.mark((function c(){var n,r;return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:(n=new q.default).setProperties({title:"reporteEstudiante"}),n.text("Reporte de estudiantes",14,10,{align:"justify"}),Q()(n,{head:[["Nombre","Apellido","Cedula","Semestre","Ciudad","Facultad"]],body:null===t||void 0===t?void 0:t.map((function(e){return[e.nombre_estudiante,e.apellido_estudiante,e.cedula_estudiante,e.semestre.nombre,e.ciudad.nombre,e.facultade.nombre]}))}),r=n.output("datauristring"),e(V(r));case 6:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),n=function(t){e({type:f.setActiveStudent,payload:{active:t}})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"btn btn-info",onClick:c,children:"Descargar Listado en PDF"}),Object(l.jsxs)("table",{id:"mytable",className:"table table-striped table-hover table-sm ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Nombre"}),Object(l.jsx)("th",{children:"Apellido"}),Object(l.jsx)("th",{children:"Cedula"}),Object(l.jsx)("th",{children:"Semestre"}),Object(l.jsx)("th",{children:"Ciudad"}),Object(l.jsx)("th",{children:"Facultad"}),Object(l.jsx)("th",{children:"Opcion: Busqueda"})]})}),Object(l.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.nombre_estudiante}),Object(l.jsx)("td",{children:e.apellido_estudiante}),Object(l.jsx)("td",{children:e.cedula_estudiante}),Object(l.jsx)("td",{children:e.semestre.nombre}),Object(l.jsx)("td",{children:e.ciudad.nombre}),Object(l.jsx)("td",{children:e.facultade.nombre}),Object(l.jsx)("td",{children:Object(l.jsx)(a.b,{onClick:function(){return n(e)},style:{cursor:"pointer",textDecoration:"none"},className:"fa fa-search",to:"/students/student"})})]},e.cedula_estudiante)}))})]}),Object(l.jsx)(Z,{})]})},ee=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.ui})).loading;return Object(n.useEffect)((function(){e(function(){var e=Object(m.a)(O.a.mark((function e(t){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({url:"/estudiante"});case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,t(B(n.estudianteAll)),t(N());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(g())}),[e]),Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(F,{type:"spin",color:"#48f542"}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"text-center",children:"Lista de Estudiantes"}),Object(l.jsx)("hr",{className:"my-3"}),Object(l.jsx)($,{})]})})},te=function(){var e=Object(b.c)((function(e){return e.student})).active,t=e.comentarios,c=e.horarios;return console.log(c),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"text-center",children:"Datos Completos del Estudiante"}),Object(l.jsx)("hr",{className:"my-3"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row row-cols-2",children:[Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Cedula Estudiante:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.cedula_estudiante,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Nombre Estudiante:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.nombre_estudiante,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Apellido Estudiante:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.apellido_estudiante,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Celular Estudiante:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.celular_estudiante,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Email Estudiante:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.email_estudiante,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Ciudad:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.ciudad.nombre,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Facultad:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.facultade.nombre,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("strong",{children:" Semestre:"})}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.semestre.nombre,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Modalidad de Estudio:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[Object(l.jsx)("pre",{children:JSON.stringify(null===e||void 0===e?void 0:e.modalidad.nombre,null,4)}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[" ",Object(l.jsx)("strong",{children:"Calificacion del Servicio:"})," "]}),Object(l.jsxs)("div",{className:"col-10",children:[t&&t.length>1?t.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.gradosatisfacion,null,4)},t)})):Object(l.jsx)("div",{children:"No Existe Datos "}),Object(l.jsx)("hr",{className:"my-1"})]}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("strong",{children:"Horario"})," "]}),Object(l.jsxs)("table",{className:"table table-bordered ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Dia de la Semana"}),Object(l.jsx)("th",{scope:"col",children:"Hora de Entrada"}),Object(l.jsx)("th",{scope:"col",children:"Hora de Salida"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:c&&c.length>1?c.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.nombredia,null,4)},t)})):Object(l.jsx)("div",{children:"no existe datos "})}),Object(l.jsx)("td",{children:c&&c.length>1?c.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.horaentrata,null,4)},t)})):Object(l.jsx)("div",{children:"no existe datos "})}),Object(l.jsx)("td",{children:c&&c.length>1?c.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.horasalida,null,4)},t)})):Object(l.jsx)("div",{children:"no existe datos "})})]})})]})]})})]})},ce=function(){var e=Object(s.g)().url;return Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"".concat(e,"/list"),exact:!0,component:ee}),Object(l.jsx)(s.b,{path:"".concat(e,"/student"),exact:!0,component:te}),Object(l.jsx)(s.a,{to:"/"})]})},ne=c(96),re=function(e){var t=f.setError;return{type:t,payload:{err:e}}},ae=function(e){return{type:f.getAfluenciaStudent,payload:{horarios:e}}},se=function(e){return{type:f.login,payload:{uid:e}}},ie=function(){return function(e){localStorage.clear(),e(N()),e(oe()),e({type:f.clearStudents}),e(z()),e({type:f.clearDrivers}),e({type:f.clearAfluenciaStudent})}},oe=function(){return{type:f.logout}},le=function(){return{type:f.checking}},de=(c(303),function(){var e=Object(b.b)();return Object(l.jsx)("nav",{children:Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:"Pagina Principal"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{className:"nav-link",to:"/students/list",children:"Lista General de Estudiantes y Busqueda"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{className:"nav-link",to:"/drivers",children:"Autorizar Cuentas Conductores"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(a.b,{className:"nav-link",to:"/afluencia",children:"Afluencia de Estudiantes"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("button",{className:"btn btn-info",onClick:function(){return e(ie())},children:"Cerrar Sesion"})})]})})]})})})})}),je=c(167),ue=c.n(je),be=c(97),he=c.n(be),Oe=function(){var e=ue()().hour(0).minute(0).second(0),t=Object(b.b)(),c=Object(b.c)((function(e){return e})),r=c.horarios.horarios;c.ui.loading;console.log(r);var a={nombredia:"Lunes",horaentrada:e.format("H:mm"),horadalida:e.hour(5).format("H:mm")},s=Object(n.useState)(!1),i=Object(J.a)(s,2),o=i[0],d=i[1],j=Object(n.useState)(!1),u=Object(J.a)(j,2),h=u[0],x=u[1],p=Object(n.useState)(a.horaentrada),f=Object(J.a)(p,2),y=f[0],S=f[1],D=Object(n.useState)(a.horadalida),k=Object(J.a)(D,2),C=k[0],_=k[1],E=I(a),w=Object(J.a)(E,2),A=w[0],F=w[1],L=A.nombredia;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(e){var c;e.preventDefault(),A.horaentrada=y,A.horadalida=C,t((c=A,function(){var e=Object(m.a)(O.a.mark((function e(t){var n,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({url:"/consultahorarios",method:"POST",data:c});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a=r.horariosAll,t(ae(a)),t(N());case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t(g())},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("h3",{className:"text-center",children:"Afluencia"}),Object(l.jsx)("h5",{className:"",children:"Seleccione los filtros"}),Object(l.jsx)("hr",{className:"my-3"}),Object(l.jsx)("h6",{children:"Dia de la semana:"}),Object(l.jsx)("select",{className:"form-select form-select-lg mb-2","aria-label":".form-select-lg example",name:"nombredia",value:L,onChange:F,children:["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"].map((function(e){return Object(l.jsxs)("option",{value:e,children:[" ",e]},e)}))})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg",onClick:function(){return d(!o)},children:"Hora Entrada"}),o&&Object(l.jsx)(he.a,{time:y,onChange:function(e){return S(e.formatted24)},hour24Mode:!0})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg",onClick:function(){return x(!h)},children:"Hora Salida"}),h&&Object(l.jsx)(he.a,{time:C,onChange:function(e){return _(e.formatted24)},hour24Mode:!0})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-warning btn-lg",children:"Consultar"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("strong",{children:"Listado"})," "]}),Object(l.jsxs)("table",{className:"table table-bordered ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Cedula Estudiante"}),Object(l.jsx)("th",{scope:"col",children:"Dia de la Semana"}),Object(l.jsx)("th",{scope:"col",children:"Hora de Entrada"}),Object(l.jsx)("th",{scope:"col",children:"Hora de Salida"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:r&&r.length>1?r.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.cedula_estudiante,null,4)},t)})):Object(l.jsx)("div",{children:"No Existe Datos "})}),Object(l.jsx)("td",{children:r&&r.length>1?r.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.nombredia,null,4)},t)})):Object(l.jsx)("div",{children:"No Existe Datos "})}),Object(l.jsx)("td",{children:r&&r.length>1?r.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.horaentrata,null,4)},t)})):Object(l.jsx)("div",{children:"No Existe Datos "})}),Object(l.jsx)("td",{children:r&&r.length>1?r.map((function(e,t){return Object(l.jsx)("pre",{children:JSON.stringify(e.horasalida,null,4)},t)})):Object(l.jsx)("div",{children:"No Existe Datos "})})]})})]})]})},me=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(de,{}),Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/",exact:!0,component:u}),Object(l.jsx)(s.b,{path:"/students",exact:!1,component:ce}),Object(l.jsx)(s.b,{path:"/drivers",exact:!0,component:G}),Object(l.jsx)(s.b,{path:"/afluencia",exact:!0,component:Oe}),Object(l.jsx)(s.a,{to:"/"})]})]})},xe={email:"",password:""},pe=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.ui})).loading,c=I(xe),n=Object(J.a)(c,2),r=n[0],a=n[1],s=r.email,i=r.password,o=Object(b.c)((function(e){return e.err})).err;return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(F,{type:"spin",color:"#48f542"}):Object(l.jsx)("div",{className:"App container",children:Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("h1",{className:"font-weight-bold  text-center p-3 mb-2 bg-danger text-white",children:"Universidad T\xe9cnica Del Norte"}),Object(l.jsx)("hr",{className:"my-3"}),Object(l.jsx)("h1",{className:"text-center ",children:"Grupo de Transporte UTN"}),Object(l.jsx)("hr",{className:"my-3"}),o&&Object(l.jsxs)("p",{className:"text-center",children:[o," "]}),Object(l.jsxs)("form",{onSubmit:function(t){var c;t.preventDefault(),e(g()),e((c={email:s,password:i},function(){var e=Object(m.a)(O.a.mark((function e(t){var n,r,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({url:"/admin",method:"POST",data:c});case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).token?(localStorage.setItem("token",r.token),a=Object(ne.decode)(r.token),s=a.id,t(se(s)),t({type:f.delError,payload:{}})):t(re(r.message)),t(N());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email-id",className:"form-label",children:"Email"}),Object(l.jsx)("input",{id:"email-id",className:"form-control",type:"text",name:"email",placeholder:"Ingrese su email",onChange:a,value:s})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"password-id",className:"form-label",children:"Contrase\xf1a"}),Object(l.jsx)("input",{id:"password-id",className:"form-control",type:"password",name:"password",placeholder:"Ingrese su contrase\xf1a",onChange:a,value:i})]}),Object(l.jsx)("hr",{className:"my-3"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg btn-block",children:"Iniciar Sesion"})]})]})})})},ve=function(){var e=Object(b.c)((function(e){return e.auth})),t=e.uid,c=e.check,r=!!t,i=Object(b.b)();return Object(n.useEffect)((function(){i((function(e){var t=localStorage.getItem("token");if(t){var c=Object(ne.decode)(t).id;e(se(c))}else e(oe());e(le())}))}),[i]),c?Object(l.jsx)(F,{type:"spin",color:"#48f542"}):Object(l.jsx)(a.a,{children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(j,{isAuth:r,path:"/login",exact:!0,Component:pe}),Object(l.jsx)(d,{isAuth:r,path:"/",exact:!1,Component:me})]})})},fe=c(36),ge={uid:"",check:void 0},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,c=f.login,n=f.logout,r=f.checking;switch(t.type){case c:t.payload&&(e=Object(i.a)(Object(i.a)({},e),{},{uid:t.payload.uid}));break;case r:e=Object(i.a)(Object(i.a)({},e),{},{check:!1});break;case n:e=ge}return e},ye={err:void 0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,c=f.setError,n=f.delError;switch(t.type){case c:e=Object(i.a)(Object(i.a)({},e),{},{err:t.payload.err});break;case n:e=ye}return e},De={loading:void 0},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,c=f.startLoading,n=f.stopLoading;switch(t.type){case c:e=Object(i.a)(Object(i.a)({},e),{},{loading:!0});break;case n:e=De}return e},Ce=c(168),_e={},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,c=f.loadStudents,n=f.setActiveStudent,r=f.clearStudents;switch(t.type){case c:e=Object(i.a)(Object(i.a)({},e),{},{students:t.payload.students});break;case n:e=Object(i.a)(Object(i.a)({},e),t.payload);break;case r:e=_e}return e},we={openModal:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,c=f.setPDF,n=f.clearPDF;switch(t.type){case c:e=Object(i.a)(Object(i.a)({},e),t.payload);break;case n:e=we}return e},Fe={openModal:!1},Je=function(){var e,t,c,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,r=arguments.length>1?arguments[1]:void 0,a=f.loadDrivers,s=f.setActiveDriver,o=f.clearDrivers,l=f.openModalDrivers,d=f.clseModalDrivers,j=f.clearActiveDriver,u=f.updateDriver,b=f.deleteDriver,h=f.addDriver;switch(r.type){case a:case s:n=Object(i.a)(Object(i.a)({},n),r.payload);break;case l:n=Object(i.a)(Object(i.a)({},n),{},{openModal:!0});break;case d:n=Object(i.a)(Object(i.a)({},n),{},{openModal:!1});break;case j:n=Object(i.a)(Object(i.a)({},n),{},{active:void 0});break;case u:n=Object(i.a)(Object(i.a)({},n),{},{drivers:null===(e=n.drivers)||void 0===e?void 0:e.map((function(e){var t,c=null===(t=r.payload)||void 0===t?void 0:t.update;return c&&c.cedula_conductor===e.cedula_conductor?c:e}))});break;case b:n=Object(i.a)(Object(i.a)({},n),{},{drivers:null===(t=n.drivers)||void 0===t?void 0:t.filter((function(e){var t,c;return(null===(t=r.payload)||void 0===t||null===(c=t.update)||void 0===c?void 0:c.cedula_conductor)!==e.cedula_conductor}))});break;case h:n=Object(i.a)(Object(i.a)({},n),null===(c=r.payload)||void 0===c?void 0:c.update);break;case o:n=Fe}return n},Le={},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,c=f.getAfluenciaStudent,n=f.clearAfluenciaStudent,r=t.type,a=t.payload;switch(r){case c:e=Object(i.a)(Object(i.a)({},e),{},{horarios:null===a||void 0===a?void 0:a.horarios});break;case n:e=Le}return e},Pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,Te=Object(fe.c)({auth:Ne,err:Se,ui:ke,student:Ee,pdf:Ae,drivers:Je,horarios:Me}),He=Object(fe.e)(Te,Pe(Object(fe.a)(Ce.a))),Ie=(c(339),function(){return Object(l.jsx)(b.a,{store:He,children:Object(l.jsx)(ve,{})})}),Re=document.getElementById("root");Object(r.render)(Object(l.jsx)(Ie,{}),Re)}},[[340,1,3]]]);
//# sourceMappingURL=main.fc50075b.chunk.js.map