import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{A as s}from"./Alert-hFoeJVow.js";import"./index-GiUgBvb1.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./x-CggjiHlB.js";import"./createLucideIcon-Jqo6cJwR.js";import"./circle-check-B1v4naI0.js";import"./triangle-alert-DPEoTJFX.js";import"./circle-alert-BSJiutdC.js";const q={title:"Design System/Alert",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","info","success","warning","destructive"]}}},a={args:{variant:"info",title:"ATS Tip",children:"Including quantifiable metrics in your experience bullets boosts ATS score by 25%.",onClose:()=>{}},render:r=>e.jsx("div",{className:"max-w-md w-full",children:e.jsx(s,{...r})})},i={args:{variant:"success",title:"Profile Synced",children:"Your career details and skills were successfully updated to Supabase cloud."},render:r=>e.jsx("div",{className:"max-w-md w-full",children:e.jsx(s,{...r})})},t={args:{variant:"warning",title:"Missing Key Requirements",children:"You haven't uploaded a resume yet. Some recommendations will use default estimates."},render:r=>e.jsx("div",{className:"max-w-md w-full",children:e.jsx(s,{...r})})},n={args:{variant:"destructive",title:"Upload Failed",children:"The file exceeds 10MB limit or is corrupted. Please choose a valid PDF file."},render:r=>e.jsx("div",{className:"max-w-md w-full",children:e.jsx(s,{...r})})};var l,o,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "ATS Tip",
    children: "Including quantifiable metrics in your experience bullets boosts ATS score by 25%.",
    onClose: () => {}
  },
  render: args => <div className="max-w-md w-full">\r
      <Alert {...args} />\r
    </div>
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Profile Synced",
    children: "Your career details and skills were successfully updated to Supabase cloud."
  },
  render: args => <div className="max-w-md w-full">\r
      <Alert {...args} />\r
    </div>
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Missing Key Requirements",
    children: "You haven't uploaded a resume yet. Some recommendations will use default estimates."
  },
  render: args => <div className="max-w-md w-full">\r
      <Alert {...args} />\r
    </div>
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,x,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    title: "Upload Failed",
    children: "The file exceeds 10MB limit or is corrupted. Please choose a valid PDF file."
  },
  render: args => <div className="max-w-md w-full">\r
      <Alert {...args} />\r
    </div>
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const F=["Info","Success","Warning","Destructive"];export{n as Destructive,a as Info,i as Success,t as Warning,F as __namedExportsOrder,q as default};
