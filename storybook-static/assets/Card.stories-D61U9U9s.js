import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{c as i,d as o,B as a,S as c,e as l,f as m,g as p,h as g,i as x,j as h}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";const w={title:"Design System/Card",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","glass","glow","flat"]},hover:{control:"select",options:["none","lift","glow","scale"]}}},r={render:d=>e.jsxs(i,{...d,className:"max-w-md w-full",children:[e.jsxs(o,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a,{variant:"glow",icon:e.jsx(c,{className:"h-3 w-3"}),children:"AI Recommended"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Updated 2h ago"})]}),e.jsx(l,{className:"mt-2",children:"Senior Full Stack Engineer"}),e.jsx(m,{children:"Acme Corp • San Francisco, CA (Remote Friendly)"})]}),e.jsxs(p,{children:[e.jsx("p",{className:"text-xs text-muted-foreground line-clamp-2",children:"Seeking an experienced React & Node.js architect with experience building scalable, high-throughput cloud single-page applications."}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-4",children:[e.jsx(a,{variant:"secondary",size:"sm",children:"React"}),e.jsx(a,{variant:"secondary",size:"sm",children:"TypeScript"}),e.jsx(a,{variant:"secondary",size:"sm",children:"Node.js"}),e.jsx(a,{variant:"secondary",size:"sm",children:"Supabase"})]})]}),e.jsxs(g,{className:"justify-between pt-4",children:[e.jsx("span",{className:"text-sm font-extrabold text-foreground",children:"$140k - $180k/yr"}),e.jsx(x,{variant:"glow",size:"sm",rightIcon:e.jsx(h,{className:"h-3.5 w-3.5"}),children:"Apply Now"})]})]}),args:{variant:"glass",hover:"lift"}};var s,n,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Card {...args} className="max-w-md w-full">\r
      <CardHeader>\r
        <div className="flex items-center justify-between">\r
          <Badge variant="glow" icon={<Sparkles className="h-3 w-3" />}>\r
            AI Recommended\r
          </Badge>\r
          <span className="text-xs text-muted-foreground">Updated 2h ago</span>\r
        </div>\r
        <CardTitle className="mt-2">Senior Full Stack Engineer</CardTitle>\r
        <CardDescription>\r
          Acme Corp • San Francisco, CA (Remote Friendly)\r
        </CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-xs text-muted-foreground line-clamp-2">\r
          Seeking an experienced React & Node.js architect with experience building scalable, high-throughput cloud single-page applications.\r
        </p>\r
        <div className="flex flex-wrap gap-2 mt-4">\r
          <Badge variant="secondary" size="sm">React</Badge>\r
          <Badge variant="secondary" size="sm">TypeScript</Badge>\r
          <Badge variant="secondary" size="sm">Node.js</Badge>\r
          <Badge variant="secondary" size="sm">Supabase</Badge>\r
        </div>\r
      </CardContent>\r
      <CardFooter className="justify-between pt-4">\r
        <span className="text-sm font-extrabold text-foreground">$140k - $180k/yr</span>\r
        <Button variant="glow" size="sm" rightIcon={<ArrowRight className="h-3.5 w-3.5" />}>\r
          Apply Now\r
        </Button>\r
      </CardFooter>\r
    </Card>,
  args: {
    variant: "glass",
    hover: "lift"
  }
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const N=["GlassCard"];export{r as GlassCard,N as __namedExportsOrder,w as default};
