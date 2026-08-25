import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{P as m,C as s}from"./Progress-z3V5l16f.js";import"./index-GiUgBvb1.js";import"./index-CT5jkvGL.js";import"./index-B7pcWWqY.js";import"./index-G_QUMDSw.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";const C={title:"Design System/Progress",component:m,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","gradient","success","warning","destructive","cyan"]},value:{control:{type:"range",min:0,max:100}}}},r={args:{value:75,label:"Profile Completion",showValue:!0,variant:"gradient"},render:d=>e.jsx("div",{className:"w-[340px]",children:e.jsx(m,{...d})})},a={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-center justify-center p-4",children:[e.jsx(s,{score:92,size:"md",label:"ATS Compatibility"}),e.jsx(s,{score:68,size:"md",label:"Keyword Density"}),e.jsx(s,{score:35,size:"md",label:"Formatting Score"})]})};var t,i,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: "Profile Completion",
    showValue: true,
    variant: "gradient"
  },
  render: args => <div className="w-[340px]">\r
      <ProgressBar {...args} />\r
    </div>
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 items-center justify-center p-4">\r
      <CircularGauge score={92} size="md" label="ATS Compatibility" />\r
      <CircularGauge score={68} size="md" label="Keyword Density" />\r
      <CircularGauge score={35} size="md" label="Formatting Score" />\r
    </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const b=["LinearGradient","CircularGaugeShowcase"];export{a as CircularGaugeShowcase,r as LinearGradient,b as __namedExportsOrder,C as default};
