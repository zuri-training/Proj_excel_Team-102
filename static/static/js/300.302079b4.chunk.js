"use strict";(self.webpackChunkfrontend_react=self.webpackChunkfrontend_react||[]).push([[300],{3300:function(e,a,n){n.r(a);var s=n(8152),l=n(9434),i=n(6871),t=n(2791),c=n(8890),r=n.n(c),d=n(7651),o=n(3700),u=n(393),f=n(5779),h=n(184);a.default=function(){var e=(0,i.UO)().operation_id,a=(0,l.I0)(),n=(0,l.v9)((function(e){return e.app_data.api_base_url})),c=(0,l.v9)((function(e){return e.user.access_token})),m=(0,l.v9)((function(e){return e.app_data.base_url})),x=(0,l.v9)((function(e){return e.user.user_info.id})),j=(0,t.useState)(!0),b=(0,s.Z)(j,2),_=b[0],p=b[1],v=(0,t.useState)(""),N=(0,s.Z)(v,2),g=N[0],w=N[1],k=(0,t.useRef)(),y=(0,t.useState)(!1),C=(0,s.Z)(y,2),R=C[0],Z=C[1],S=(0,t.useState)(null),A=(0,s.Z)(S,2),D=A[0],E=A[1],T=(0,t.useState)(""),F=(0,s.Z)(T,2),H=F[0],z=F[1],B=(0,t.useState)(""),J=(0,s.Z)(B,2),L=J[0],M=J[1],O=function(e,a){E(e),z(a),Z(!0)};return(0,t.useEffect)((function(){r().ajax({type:"GET",url:"".concat(n,"/operations/remove_duplicates2/").concat(e),headers:{Authorization:"Bearer ".concat(c)},success:function(e){w(e.data),p(!1)},statusCode:{401:function(){a(d.JV.logout())},404:function(){p(!1)}}})}),[c,n,a,e]),_?(0,h.jsxs)("div",{className:"preloader",children:[(0,h.jsx)("span",{className:"fas fa-spinner fa-spin"})," Fetching file contents"]}):g?(0,h.jsxs)(h.Fragment,{children:[R&&(0,h.jsxs)("div",{className:"modal modal-open",children:[(0,h.jsxs)("div",{className:"modal-header",children:["Rename File"," ",(0,h.jsx)("span",{onClick:function(){Z(!1),E(null),z("")},children:"\xd7"})]}),(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k.current.innerHTML='<span class="fas fa-spinner fa-spin"></span> Renaming file',r().ajax({type:"PATCH",url:"".concat(n,"/files/").concat(D,"?new_filename=").concat(H),headers:{Authorization:"Bearer ".concat(c)},success:function(){window.location.reload()},statusCode:{406:function(e){var a=e.responseJSON;M(a.message),k.current.innerHTML="Rename"}}}),e.stopPropagation()},children:[(0,h.jsxs)("div",{className:"modal-body",style:{textAlign:"left"},children:[(0,h.jsx)("label",{className:"modal-label",children:"New name"}),(0,h.jsx)("input",{type:"text",className:"modal-input",placeholder:"Enter new file name",value:H,onChange:function(e){return z(e.target.value)}})]}),(0,h.jsxs)("div",{className:"modal-footer",style:{textAlign:"right"},children:[L,"\xa0\xa0\xa0\xa0",(0,h.jsx)("button",{className:"modal-btn",ref:k,children:"Rename"})]})]})]}),(0,h.jsxs)("main",{className:"dashboard-container",children:[(0,h.jsx)(o.Z,{}),(0,h.jsxs)("div",{className:"dashboard-content",children:[(0,h.jsx)(u.Z,{}),(0,h.jsxs)("section",{className:"dashboard-main",children:[(0,h.jsxs)("div",{className:"dashboard-breadcrumb",children:[(0,h.jsxs)("div",{className:"dashboard-breadcrumb-left",children:[(0,h.jsx)("h3",{className:"dashboard-breadcrumb-title",children:"Remove Duplicates 2"}),(0,h.jsx)("p",{className:"dashboard-breadcrumb-text",children:"A remove duplicates and return 2 files operation performed by you"})]}),(0,h.jsx)("div",{className:"dashboard-breadcrumb-right"})]}),(0,h.jsx)("div",{className:"files-preview mb-3",children:(0,h.jsxs)("div",{className:"file",children:[(0,h.jsxs)("div",{className:"file-header",children:[(0,h.jsx)("h3",{className:"file-name",children:g.file_details.file_name}),(0,h.jsxs)("div",{className:"file-action-btns",children:[(0,h.jsx)("button",{className:"change-file-btn",onClick:function(){return O(g.file_details.id,g.file_details.file_name)},children:"Rename"}),(0,h.jsx)("a",{href:"".concat(m,"dc/").concat(x,"/").concat(g.file_details.file_name),target:"_new",className:"change-file-btn",children:"Download"})]})]}),(0,h.jsx)("div",{className:"file-preview-box",children:(0,h.jsxs)("table",{className:"file-table",children:[(0,h.jsx)("thead",{children:(0,h.jsx)("tr",{children:g.file_details.file_content[0].map((function(e,a){return(0,h.jsx)("th",{style:{backgroundColor:"#".concat(e.background)},children:e.value},a)}))})}),(0,h.jsx)("tbody",{children:g.file_details.file_content.slice(1).map((function(e,a){return(0,h.jsx)("tr",{children:e.map((function(e,a){return(0,h.jsx)("td",{style:{backgroundColor:"#".concat(e.background)},children:e.value},a)}))},a)}))})]})})]})}),(0,h.jsxs)("div",{className:"files-preview",children:[(0,h.jsxs)("div",{className:"file",children:[(0,h.jsxs)("div",{className:"file-header",children:[(0,h.jsx)("h3",{className:"file-name",children:g.without_duplicates_file_details.file_name}),(0,h.jsxs)("div",{className:"file-action-btns",children:[(0,h.jsx)("button",{className:"change-file-btn",onClick:function(){return O(g.without_duplicates_file_details.id,g.without_duplicates_file_details.file_name)},children:"Rename"}),(0,h.jsx)("a",{href:"".concat(m,"dc/").concat(x,"/").concat(g.without_duplicates_file_details.file_name),target:"_new",className:"change-file-btn",children:"Download"})]})]}),(0,h.jsx)("div",{className:"file-preview-box",children:(0,h.jsxs)("table",{className:"file-table",children:[(0,h.jsx)("thead",{children:(0,h.jsx)("tr",{children:g.without_duplicates_file_details.file_content[0].map((function(e,a){return(0,h.jsx)("th",{style:{backgroundColor:"#".concat(e.background)},children:e.value},a)}))})}),(0,h.jsx)("tbody",{children:g.without_duplicates_file_details.file_content.slice(1).map((function(e,a){return(0,h.jsx)("tr",{children:e.map((function(e,a){return(0,h.jsx)("td",{style:{backgroundColor:"#".concat(e.background)},children:e.value},a)}))},a)}))})]})})]}),(0,h.jsxs)("div",{className:"file",children:[(0,h.jsxs)("div",{className:"file-header",children:[(0,h.jsx)("h3",{className:"file-name",children:g.duplicates_file_details.file_name}),(0,h.jsxs)("div",{className:"file-action-btns",children:[(0,h.jsx)("button",{className:"change-file-btn",onClick:function(){return O(g.duplicates_file_details.id,g.duplicates_file_details.file_name)},children:"Rename"}),(0,h.jsx)("a",{href:"".concat(m,"dc/").concat(x,"/").concat(g.duplicates_file_details.file_name),target:"_new",className:"change-file-btn",children:"Download"})]})]}),(0,h.jsx)("div",{className:"file-preview-box",children:(0,h.jsxs)("table",{className:"file-table",children:[(0,h.jsx)("thead",{children:(0,h.jsx)("tr",{children:g.duplicates_file_details.file_content[0].map((function(e,a){return(0,h.jsx)("th",{style:{backgroundColor:"#".concat(e.background)},children:e.value},a)}))})}),(0,h.jsx)("tbody",{children:g.duplicates_file_details.file_content.slice(1).map((function(e,a){return(0,h.jsx)("tr",{children:e.map((function(e,a){return(0,h.jsx)("td",{style:{backgroundColor:"#".concat(e.background)},children:e.value},a)}))},a)}))})]})})]})]})]}),(0,h.jsx)(f.Z,{})]})]})]}):(0,h.jsx)("div",{className:"preloader",children:"Error fetching file"})}}}]);
//# sourceMappingURL=300.302079b4.chunk.js.map