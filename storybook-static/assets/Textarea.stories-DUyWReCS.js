import{j as a}from"./jsx-runtime-dsZ8nYAA.js";import{T as o}from"./Textarea-DzD4BSei.js";import"./index-GiUgBvb1.js";import"./utils-CytzSlOG.js";const g={title:"Design System/Textarea",component:o,tags:["autodocs"]},e={args:{label:"Professional Summary",placeholder:"Briefly describe your career experience, core competencies, and career goals...",helperText:"Keep it under 300 words for optimal recruiter readability."},render:s=>a.jsx("div",{className:"w-[380px]",children:a.jsx(o,{...s})})},r={args:{label:"Cover Letter Notes",value:"Too short",error:"Please provide at least 20 characters of input."},render:s=>a.jsx("div",{className:"w-[380px]",children:a.jsx(o,{...s})})};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Professional Summary",
    placeholder: "Briefly describe your career experience, core competencies, and career goals...",
    helperText: "Keep it under 300 words for optimal recruiter readability."
  },
  render: args => <div className="w-[380px]">\r
      <Textarea {...args} />\r
    </div>
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Cover Letter Notes",
    value: "Too short",
    error: "Please provide at least 20 characters of input."
  },
  render: args => <div className="w-[380px]">\r
      <Textarea {...args} />\r
    </div>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Default","WithError"];export{e as Default,r as WithError,f as __namedExportsOrder,g as default};
