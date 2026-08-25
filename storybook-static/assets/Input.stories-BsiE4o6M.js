import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{I as n,S as x}from"./Input-BCYU0trm.js";import{c as g}from"./createLucideIcon-Jqo6cJwR.js";import{L as v}from"./lock-BT0gptiC.js";import"./index-GiUgBvb1.js";import"./utils-CytzSlOG.js";import"./x-CggjiHlB.js";import"./circle-alert-BSJiutdC.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=g("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),E={title:"Design System/Input",component:n,tags:["autodocs"]},r={args:{label:"Email Address",placeholder:"you@example.com",helperText:"We will send your career updates here",startIcon:e.jsx(w,{className:"w-4 h-4"})},render:o=>e.jsx("div",{className:"w-[340px]",children:e.jsx(n,{...o})})},a={args:{label:"Phone Number",value:"12345",error:"Please enter a valid 10-digit phone number",startIcon:e.jsx(v,{className:"w-4 h-4"})},render:o=>e.jsx("div",{className:"w-[340px]",children:e.jsx(n,{...o})})},s={render:()=>e.jsx("div",{className:"w-[340px]",children:e.jsx(x,{placeholder:"Search skills, jobs, resources..."})})};var t,c,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    helperText: "We will send your career updates here",
    startIcon: <Mail className="w-4 h-4" />
  },
  render: args => <div className="w-[340px]">\r
      <Input {...args} />\r
    </div>
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Phone Number",
    value: "12345",
    error: "Please enter a valid 10-digit phone number",
    startIcon: <Lock className="w-4 h-4" />
  },
  render: args => <div className="w-[340px]">\r
      <Input {...args} />\r
    </div>
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="w-[340px]">\r
      <SearchInput placeholder="Search skills, jobs, resources..." />\r
    </div>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const L=["Default","WithError","Search"];export{r as Default,s as Search,a as WithError,L as __namedExportsOrder,E as default};
