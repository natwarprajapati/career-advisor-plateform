import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{w as m,u,e as x}from"./index-OXjLjbQp.js";import{T as p,s as g,t,u as n,c as r}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";const w={title:"Design System/Tabs",tags:["autodocs"]},a={render:()=>e.jsx("div",{className:"max-w-md w-full",children:e.jsxs(p,{defaultValue:"created",children:[e.jsxs(g,{className:"w-full grid grid-cols-2",children:[e.jsx(t,{value:"created",children:"Created Resumes (3)"}),e.jsx(t,{value:"uploaded",children:"Uploaded PDFs (5)"})]}),e.jsx(n,{value:"created",children:e.jsxs(r,{variant:"glass",className:"p-4 mt-3",children:[e.jsx("p",{className:"text-xs font-semibold text-foreground",children:"Interactive Builder Drafts"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"3 active ATS resume versions saved in local database."})]})}),e.jsx(n,{value:"uploaded",children:e.jsxs(r,{variant:"glass",className:"p-4 mt-3",children:[e.jsx("p",{className:"text-xs font-semibold text-foreground",children:"Scanned PDF Files"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"5 scanned PDFs with detailed keyword diagnostics."})]})})]})}),play:async({canvasElement:o})=>{const s=m(o),c=s.getByRole("tab",{name:/Uploaded PDFs/i});await u.click(c),await x(s.getByText(/Scanned PDF Files/i)).toBeInTheDocument()}};var d,l,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="max-w-md w-full">\r
      <Tabs defaultValue="created">\r
        <TabsList className="w-full grid grid-cols-2">\r
          <TabsTrigger value="created">Created Resumes (3)</TabsTrigger>\r
          <TabsTrigger value="uploaded">Uploaded PDFs (5)</TabsTrigger>\r
        </TabsList>\r
        <TabsContent value="created">\r
          <Card variant="glass" className="p-4 mt-3">\r
            <p className="text-xs font-semibold text-foreground">Interactive Builder Drafts</p>\r
            <p className="text-xs text-muted-foreground mt-1">\r
              3 active ATS resume versions saved in local database.\r
            </p>\r
          </Card>\r
        </TabsContent>\r
        <TabsContent value="uploaded">\r
          <Card variant="glass" className="p-4 mt-3">\r
            <p className="text-xs font-semibold text-foreground">Scanned PDF Files</p>\r
            <p className="text-xs text-muted-foreground mt-1">\r
              5 scanned PDFs with detailed keyword diagnostics.\r
            </p>\r
          </Card>\r
        </TabsContent>\r
      </Tabs>\r
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const uploadedTab = canvas.getByRole("tab", {
      name: /Uploaded PDFs/i
    });
    await userEvent.click(uploadedTab);
    await expect(canvas.getByText(/Scanned PDF Files/i)).toBeInTheDocument();
  }
}`,...(i=(l=a.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const N=["PillsTabs"];export{a as PillsTabs,N as __namedExportsOrder,w as default};
