import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{B as a}from"./Badge-BR_9wnMm.js";import{S as u}from"./sparkles-CT5O2mlw.js";import{C as v}from"./circle-check-B1v4naI0.js";import{T as h}from"./triangle-alert-DPEoTJFX.js";import{c as x}from"./createLucideIcon-Jqo6cJwR.js";import"./index-GiUgBvb1.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=x("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),S={title:"Design System/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","primary","success","warning","destructive","cyan","outline","glass","glow","accent","pill"]},size:{control:"select",options:["default","sm","md","lg"]},dot:{control:"boolean"}}},r={args:{variant:"primary",children:"Featured Skill",dot:!0}},n={args:{variant:"glow",icon:e.jsx(u,{className:"w-3.5 h-3.5"}),children:"AI Powered"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{variant:"primary",dot:!0,children:"Primary"}),e.jsx(a,{variant:"success",icon:e.jsx(v,{className:"w-3 h-3"}),children:"Verified"}),e.jsx(a,{variant:"warning",icon:e.jsx(h,{className:"w-3 h-3"}),children:"Pending Review"}),e.jsx(a,{variant:"destructive",children:"Needs Work"}),e.jsx(a,{variant:"cyan",dot:!0,children:"Fast Track"}),e.jsx(a,{variant:"glass",icon:e.jsx(w,{className:"w-3 h-3 text-amber-400"}),children:"Trending Role"}),e.jsx(a,{variant:"glow",children:"AI Match 95%"}),e.jsx(a,{variant:"outline",children:"Remote Only"}),e.jsx(a,{variant:"pill",children:"Full Time"})]})};var t,i,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Featured Skill",
    dot: true
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var o,l,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "glow",
    icon: <Sparkles className="w-3.5 h-3.5" />,
    children: "AI Powered"
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,g,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">\r
      <Badge variant="primary" dot>Primary</Badge>\r
      <Badge variant="success" icon={<CheckCircle2 className="w-3 h-3" />}>Verified</Badge>\r
      <Badge variant="warning" icon={<AlertTriangle className="w-3 h-3" />}>Pending Review</Badge>\r
      <Badge variant="destructive">Needs Work</Badge>\r
      <Badge variant="cyan" dot>Fast Track</Badge>\r
      <Badge variant="glass" icon={<Flame className="w-3 h-3 text-amber-400" />}>Trending Role</Badge>\r
      <Badge variant="glow">AI Match 95%</Badge>\r
      <Badge variant="outline">Remote Only</Badge>\r
      <Badge variant="pill">Full Time</Badge>\r
    </div>
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const I=["Default","WithIcon","AllVariants"];export{s as AllVariants,r as Default,n as WithIcon,I as __namedExportsOrder,S as default};
