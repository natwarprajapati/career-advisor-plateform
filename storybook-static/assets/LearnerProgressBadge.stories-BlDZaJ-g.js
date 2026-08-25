import{j as a}from"./jsx-runtime-dsZ8nYAA.js";import{L as n}from"./LearnerProgressBadge-dx8u9FPm.js";import"./index-GiUgBvb1.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./graduation-cap-Ds8oviwc.js";import"./createLucideIcon-Jqo6cJwR.js";import"./arrow-right-BHX80jsc.js";import"./sparkles-CT5O2mlw.js";import"./circle-check-B1v4naI0.js";import"./lock-BT0gptiC.js";const h={title:"Design System/LearnerProgressBadge",component:n,tags:["autodocs"],argTypes:{status:{control:"select",options:["default","in-progress","completed","disabled"]},size:{control:"select",options:["sm","md","lg","card"]}}},r={args:{status:"default",size:"md",skillName:"TypeScript Generics & Patterns"}},e={args:{status:"in-progress",size:"card",category:"Frontend Architecture",skillName:"React 18 Concurrent Features & Server Components",progress:65,duration:"2.5 hours",interactive:!0,onStartLearning:()=>alert("Start learning clicked")},render:t=>a.jsx("div",{className:"max-w-xl w-full",children:a.jsx(n,{...t})})},s={args:{status:"completed",size:"card",category:"Backend & Database",skillName:"PostgreSQL Indexing & Query Optimization",progress:100,duration:"4 hours",interactive:!0},render:t=>a.jsx("div",{className:"max-w-xl w-full",children:a.jsx(n,{...t})})};var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    status: "default",
    size: "md",
    skillName: "TypeScript Generics & Patterns"
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: "in-progress",
    size: "card",
    category: "Frontend Architecture",
    skillName: "React 18 Concurrent Features & Server Components",
    progress: 65,
    duration: "2.5 hours",
    interactive: true,
    onStartLearning: () => alert("Start learning clicked")
  },
  render: args => <div className="max-w-xl w-full">\r
      <LearnerProgressBadge {...args} />\r
    </div>
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: "completed",
    size: "card",
    category: "Backend & Database",
    skillName: "PostgreSQL Indexing & Query Optimization",
    progress: 100,
    duration: "4 hours",
    interactive: true
  },
  render: args => <div className="max-w-xl w-full">\r
      <LearnerProgressBadge {...args} />\r
    </div>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const w=["Default","InProgressCard","CompletedCard"];export{s as CompletedCard,r as Default,e as InProgressCard,w as __namedExportsOrder,h as default};
