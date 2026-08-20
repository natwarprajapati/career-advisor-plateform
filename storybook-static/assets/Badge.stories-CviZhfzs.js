import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{B as a,S as A,C as j}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";const I={title:"Design System/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary","success","warning","destructive","cyan","glass","glow"]},size:{control:"select",options:["sm","md","lg"]},dot:{control:"boolean"}}},r={args:{children:"Featured Job",variant:"default",size:"md"}},s={args:{children:"94% ATS Match",variant:"success",dot:!0}},n={args:{children:"AI Recommended",variant:"glow",icon:e.jsx(A,{className:"h-3.5 w-3.5"})}},t={args:{children:"Missing 2 Keywords",variant:"warning",icon:e.jsx(j,{className:"h-3.5 w-3.5"})}},c={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center p-4",children:[e.jsx(a,{variant:"primary",dot:!0,children:"Primary"}),e.jsx(a,{variant:"success",dot:!0,children:"High Match"}),e.jsx(a,{variant:"warning",dot:!0,children:"Skill Gap"}),e.jsx(a,{variant:"destructive",dot:!0,children:"Action Required"}),e.jsx(a,{variant:"cyan",children:"Remote Role"}),e.jsx(a,{variant:"glass",children:"Glass Surface"}),e.jsx(a,{variant:"glow",icon:e.jsx(A,{className:"h-3 w-3"}),children:"AI Powered"})]})};var o,i,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Featured Job",
    variant: "default",
    size: "md"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,g,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "94% ATS Match",
    variant: "success",
    dot: true
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "AI Recommended",
    variant: "glow",
    icon: <Sparkles className="h-3.5 w-3.5" />
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,w,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Missing 2 Keywords",
    variant: "warning",
    icon: <AlertCircle className="h-3.5 w-3.5" />
  }
}`,...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var B,S,f;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center p-4">\r
      <Badge variant="primary" dot>Primary</Badge>\r
      <Badge variant="success" dot>High Match</Badge>\r
      <Badge variant="warning" dot>Skill Gap</Badge>\r
      <Badge variant="destructive" dot>Action Required</Badge>\r
      <Badge variant="cyan">Remote Role</Badge>\r
      <Badge variant="glass">Glass Surface</Badge>\r
      <Badge variant="glow" icon={<Sparkles className="h-3 w-3" />}>AI Powered</Badge>\r
    </div>
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const M=["Default","SuccessWithDot","GlowAI","Warning","AllBadges"];export{c as AllBadges,r as Default,n as GlowAI,s as SuccessWithDot,t as Warning,M as __namedExportsOrder,I as default};
