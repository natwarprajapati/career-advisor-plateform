import{j as t}from"./jsx-runtime-dsZ8nYAA.js";import{w as y,u as v,e as E}from"./index-OXjLjbQp.js";import{v as b,I as f,w as I,x as T}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=b("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),L={title:"Design System/Input",component:f,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},error:{control:"text"},disabled:{control:"boolean"}}},e={args:{label:"Target Job Title",placeholder:"e.g. Senior Frontend Engineer",helperText:"Enter the role you are targeting for ATS optimization"},play:async({canvasElement:s})=>{const n=y(s).getByPlaceholderText("e.g. Senior Frontend Engineer");await v.type(n,"Full Stack Developer",{delay:50}),await E(n).toHaveValue("Full Stack Developer")}},a={args:{label:"Email Address",placeholder:"you@example.com",startIcon:t.jsx(k,{className:"h-4 w-4"})}},r={args:{label:"Password",type:"password",placeholder:"••••••••",startIcon:t.jsx(I,{className:"h-4 w-4"}),error:"Password must be at least 8 characters long"}},o={render:()=>t.jsx("div",{className:"max-w-md w-full",children:t.jsx(T,{placeholder:"Search jobs, skills, or mentors...",onSearchChange:s=>console.log("Searching for:",s)})})};var l,c,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Target Job Title",
    placeholder: "e.g. Senior Frontend Engineer",
    helperText: "Enter the role you are targeting for ATS optimization"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("e.g. Senior Frontend Engineer");
    await userEvent.type(input, "Full Stack Developer", {
      delay: 50
    });
    await expect(input).toHaveValue("Full Stack Developer");
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    startIcon: <Mail className="h-4 w-4" />
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,u,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    startIcon: <Lock className="h-4 w-4" />,
    error: "Password must be at least 8 characters long"
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,S,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="max-w-md w-full">\r
      <SearchInput placeholder="Search jobs, skills, or mentors..." onSearchChange={val => console.log("Searching for:", val)} />\r
    </div>
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const W=["Default","WithIcon","WithError","SearchField"];export{e as Default,o as SearchField,r as WithError,a as WithIcon,W as __namedExportsOrder,L as default};
