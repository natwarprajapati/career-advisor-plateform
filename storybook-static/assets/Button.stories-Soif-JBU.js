import{j as a}from"./jsx-runtime-dsZ8nYAA.js";import{w as z,e as E,u as L}from"./index-OXjLjbQp.js";import{v as P,i as r,S as N,j as V}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=P("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),F={title:"Design System/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","glow","glass","outline","ghost","destructive","link"]},size:{control:"select",options:["sm","md","lg","icon","icon-sm"]},isLoading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},e={args:{variant:"primary",children:"Primary Button",size:"md"},play:async({canvasElement:T})=>{const l=z(T).getByRole("button");await E(l).toBeInTheDocument(),await L.hover(l)}},n={args:{variant:"glow",children:"Generate AI Resume",leftIcon:a.jsx(N,{className:"h-4 w-4"}),size:"lg"}},t={args:{variant:"secondary",children:"View Career Roadmap",rightIcon:a.jsx(V,{className:"h-4 w-4"})}},s={args:{variant:"glass",children:"Glassmorphic Action"}},o={args:{variant:"primary",isLoading:!0,children:"Analyzing ATS Score..."}},c={args:{variant:"destructive",children:"Delete Resume Draft",leftIcon:a.jsx(C,{className:"h-4 w-4"})}},i={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-4 items-center p-4",children:[a.jsx(r,{variant:"primary",children:"Primary"}),a.jsx(r,{variant:"secondary",children:"Secondary"}),a.jsx(r,{variant:"glow",leftIcon:a.jsx(N,{className:"h-4 w-4"}),children:"Glow AI"}),a.jsx(r,{variant:"glass",children:"Glass"}),a.jsx(r,{variant:"outline",children:"Outline"}),a.jsx(r,{variant:"ghost",children:"Ghost"}),a.jsx(r,{variant:"destructive",children:"Destructive"})]})};var m,d,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "md"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await expect(button).toBeInTheDocument();
    await userEvent.hover(button);
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,h,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "glow",
    children: "Generate AI Resume",
    leftIcon: <Sparkles className="h-4 w-4" />,
    size: "lg"
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,y,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "View Career Roadmap",
    rightIcon: <ArrowRight className="h-4 w-4" />
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,B,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "glass",
    children: "Glassmorphic Action"
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,I,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    isLoading: true,
    children: "Analyzing ATS Score..."
  }
}`,...(j=(I=o.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var A,G,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete Resume Draft",
    leftIcon: <Trash2 className="h-4 w-4" />
  }
}`,...(D=(G=c.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var R,b,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center p-4">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="glow" leftIcon={<Sparkles className="h-4 w-4" />}>\r
        Glow AI\r
      </Button>\r
      <Button variant="glass">Glass</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="destructive">Destructive</Button>\r
    </div>
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const J=["Primary","GlowCTA","SecondaryWithIcon","Glass","LoadingState","Destructive","AllVariants"];export{i as AllVariants,c as Destructive,s as Glass,n as GlowCTA,o as LoadingState,e as Primary,t as SecondaryWithIcon,J as __namedExportsOrder,F as default};
