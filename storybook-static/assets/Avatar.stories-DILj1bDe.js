import{j as a}from"./jsx-runtime-dsZ8nYAA.js";import{a as s,b as u}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";const d={title:"Design System/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},status:{control:"select",options:["online","offline","busy","away"]}}},r={args:{fallback:"Alex Morgan",size:"lg",status:"online"}},e={render:()=>a.jsx("div",{className:"flex items-center gap-6 p-4",children:a.jsxs(u,{max:4,children:[a.jsx(s,{fallback:"Sarah Connor",status:"online"}),a.jsx(s,{fallback:"John Doe",status:"online"}),a.jsx(s,{fallback:"Emily Watson",status:"busy"}),a.jsx(s,{fallback:"David Miller",status:"offline"}),a.jsx(s,{fallback:"Alex Vance"}),a.jsx(s,{fallback:"Bruce Wayne"})]})})};var t,l,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    fallback: "Alex Morgan",
    size: "lg",
    status: "online"
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var o,c,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-4">\r
      <AvatarGroup max={4}>\r
        <Avatar fallback="Sarah Connor" status="online" />\r
        <Avatar fallback="John Doe" status="online" />\r
        <Avatar fallback="Emily Watson" status="busy" />\r
        <Avatar fallback="David Miller" status="offline" />\r
        <Avatar fallback="Alex Vance" />\r
        <Avatar fallback="Bruce Wayne" />\r
      </AvatarGroup>\r
    </div>
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const b=["Default","AvatarStack"];export{e as AvatarStack,r as Default,b as __namedExportsOrder,d as default};
