import{j as r}from"./jsx-runtime-dsZ8nYAA.js";import{C as n,a as p,b as u,c as x,d as g,e as h}from"./Card-Ukkn-HLT.js";import{B as t}from"./Button-CuZ_qdAc.js";import{A as C}from"./arrow-right-BHX80jsc.js";import{S as f}from"./sparkles-CT5O2mlw.js";import"./index-GiUgBvb1.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./index-G_QUMDSw.js";import"./loader-circle-FaTuTqha.js";import"./createLucideIcon-Jqo6cJwR.js";const F={title:"Design System/Card",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","glass","elevated","glow","interactive"]},hover:{control:"select",options:["none","lift","glow","subtle"]}}},e={args:{variant:"default"},render:a=>r.jsxs(n,{...a,className:"w-[380px]",children:[r.jsxs(p,{children:[r.jsx(u,{children:"AI Career Analysis"}),r.jsx(x,{children:"Get personalized recommendations based on your skillset"})]}),r.jsx(g,{children:r.jsx("p",{className:"text-muted-foreground text-sm",children:"Your profile matches 87% with Senior Frontend Engineer roles in top tech companies."})}),r.jsxs(h,{className:"justify-between",children:[r.jsx(t,{variant:"ghost",size:"sm",children:"Dismiss"}),r.jsx(t,{variant:"primary",size:"sm",rightIcon:r.jsx(C,{className:"w-3.5 h-3.5"}),children:"View Details"})]})]})},s={args:{variant:"glass",hover:"lift"},render:a=>r.jsxs(n,{...a,className:"w-[380px]",children:[r.jsxs(p,{children:[r.jsxs("div",{className:"flex items-center gap-2 text-sky-400 mb-1",children:[r.jsx(f,{className:"w-4 h-4"}),r.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider",children:"Premium Feature"})]}),r.jsx(u,{children:"ATS Resume Optimization"}),r.jsx(x,{children:"Score 90+ on automated recruiter parsing algorithms"})]}),r.jsx(g,{children:r.jsx("p",{className:"text-sm text-foreground/80",children:"Unlock instant keyword suggestions, layout fixes, and real-time score boosting."})}),r.jsx(h,{children:r.jsx(t,{variant:"glow",fullWidth:!0,children:"Optimize Now"})})]})};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "default"
  },
  render: args => <Card {...args} className="w-[380px]">\r
      <CardHeader>\r
        <CardTitle>AI Career Analysis</CardTitle>\r
        <CardDescription>Get personalized recommendations based on your skillset</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-muted-foreground text-sm">\r
          Your profile matches 87% with Senior Frontend Engineer roles in top tech companies.\r
        </p>\r
      </CardContent>\r
      <CardFooter className="justify-between">\r
        <Button variant="ghost" size="sm">Dismiss</Button>\r
        <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>\r
          View Details\r
        </Button>\r
      </CardFooter>\r
    </Card>
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "glass",
    hover: "lift"
  },
  render: args => <Card {...args} className="w-[380px]">\r
      <CardHeader>\r
        <div className="flex items-center gap-2 text-sky-400 mb-1">\r
          <Sparkles className="w-4 h-4" />\r
          <span className="text-xs font-semibold uppercase tracking-wider">Premium Feature</span>\r
        </div>\r
        <CardTitle>ATS Resume Optimization</CardTitle>\r
        <CardDescription>Score 90+ on automated recruiter parsing algorithms</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm text-foreground/80">\r
          Unlock instant keyword suggestions, layout fixes, and real-time score boosting.\r
        </p>\r
      </CardContent>\r
      <CardFooter>\r
        <Button variant="glow" fullWidth>Optimize Now</Button>\r
      </CardFooter>\r
    </Card>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["Default","Glass"];export{e as Default,s as Glass,B as __namedExportsOrder,F as default};
