import{j as a}from"./jsx-runtime-dsZ8nYAA.js";import{A as s,a as b}from"./Avatar-B8NlUq6Z.js";import"./index-GiUgBvb1.js";import"./index-CT5jkvGL.js";import"./index-B7pcWWqY.js";import"./index-G_QUMDSw.js";import"./index-Bn8IrqKP.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";const y={title:"Design System/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"]},status:{control:"select",options:["online","offline","busy","away"]}}},r={args:{fallback:"Natwar Prajapati",size:"lg",status:"online"}},t={args:{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",alt:"User Photo",size:"xl",status:"online"}},o={render:()=>a.jsxs(b,{max:3,children:[a.jsx(s,{fallback:"Alex Dev",status:"online"}),a.jsx(s,{fallback:"Sara Lee",status:"busy"}),a.jsx(s,{fallback:"John Doe",status:"offline"}),a.jsx(s,{fallback:"Emma Stone"}),a.jsx(s,{fallback:"Rahul Sharma"})]})};var e,n,l;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    fallback: "Natwar Prajapati",
    size: "lg",
    status: "online"
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    alt: "User Photo",
    size: "xl",
    status: "online"
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,u,f;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>\r
      <Avatar fallback="Alex Dev" status="online" />\r
      <Avatar fallback="Sara Lee" status="busy" />\r
      <Avatar fallback="John Doe" status="offline" />\r
      <Avatar fallback="Emma Stone" />\r
      <Avatar fallback="Rahul Sharma" />\r
    </AvatarGroup>
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const w=["Fallback","Image","Group"];export{r as Fallback,o as Group,t as Image,w as __namedExportsOrder,y as default};
