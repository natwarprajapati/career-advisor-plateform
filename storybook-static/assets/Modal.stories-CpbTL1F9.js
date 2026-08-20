import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{w as d,e as c,u as p}from"./index-OXjLjbQp.js";import{M as m,k as g,i as t,S as u,l as h,m as M,n as v,o as x,I as r,p as y,q as j}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";const B={title:"Design System/Modal",tags:["autodocs"]},a={render:()=>e.jsxs(m,{children:[e.jsx(g,{asChild:!0,children:e.jsx(t,{variant:"glow",leftIcon:e.jsx(u,{className:"h-4 w-4"}),children:"Optimize Resume for Target Role"})}),e.jsxs(h,{size:"md",children:[e.jsxs(M,{children:[e.jsx(v,{children:"AI Resume Optimization"}),e.jsx(x,{children:"Enter the job title and company description to analyze keyword coverage and match rates."})]}),e.jsxs("div",{className:"space-y-4 py-2",children:[e.jsx(r,{label:"Target Job Title",placeholder:"e.g. Senior Frontend Architect",defaultValue:"Staff Software Engineer"}),e.jsx(r,{label:"Target Company",placeholder:"e.g. Stripe, Google, Linear",defaultValue:"OpenAI"})]}),e.jsxs(y,{children:[e.jsx(j,{asChild:!0,children:e.jsx(t,{variant:"ghost",children:"Cancel"})}),e.jsx(t,{variant:"glow",children:"Start Deep Analysis"})]})]})]}),play:async({canvasElement:i})=>{const n=d(i).getByRole("button",{name:/Optimize Resume/i});await c(n).toBeInTheDocument(),await p.click(n)}};var o,l,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Modal>\r
      <ModalTrigger asChild>\r
        <Button variant="glow" leftIcon={<Sparkles className="h-4 w-4" />}>\r
          Optimize Resume for Target Role\r
        </Button>\r
      </ModalTrigger>\r
      <ModalContent size="md">\r
        <ModalHeader>\r
          <ModalTitle>AI Resume Optimization</ModalTitle>\r
          <ModalDescription>\r
            Enter the job title and company description to analyze keyword coverage and match rates.\r
          </ModalDescription>\r
        </ModalHeader>\r
        <div className="space-y-4 py-2">\r
          <Input label="Target Job Title" placeholder="e.g. Senior Frontend Architect" defaultValue="Staff Software Engineer" />\r
          <Input label="Target Company" placeholder="e.g. Stripe, Google, Linear" defaultValue="OpenAI" />\r
        </div>\r
        <ModalFooter>\r
          <ModalClose asChild>\r
            <Button variant="ghost">Cancel</Button>\r
          </ModalClose>\r
          <Button variant="glow">Start Deep Analysis</Button>\r
        </ModalFooter>\r
      </ModalContent>\r
    </Modal>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: /Optimize Resume/i
    });
    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const R=["InteractiveModal"];export{a as InteractiveModal,R as __namedExportsOrder,B as default};
