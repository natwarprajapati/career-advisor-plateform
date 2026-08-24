import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{S as a}from"./StatCard-Bre1w_2c.js";import{c as m}from"./createLucideIcon-Jqo6cJwR.js";import{B as p}from"./briefcase-Cuv4Lo8c.js";import{T as u}from"./target-BpFOc6Si.js";import{S as g}from"./sparkles-CT5O2mlw.js";import"./index-GiUgBvb1.js";import"./Card-Ukkn-HLT.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./Badge-BR_9wnMm.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=m("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),b={title:"Design System/StatCard",component:a,tags:["autodocs"],argTypes:{gradient:{control:"select",options:["sky","cyan","emerald","amber","rose","purple"]}}},r={args:{title:"ATS Resume Score",value:"92/100",gradient:"emerald",icon:e.jsx(v,{className:"w-5 h-5"}),trend:{value:"+14% vs last week",isPositive:!0},subtitle:"Top 5% of applicants"},render:d=>e.jsx("div",{className:"w-[320px]",children:e.jsx(a,{...d})})},t={render:()=>e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl",children:[e.jsx(a,{title:"Jobs Applied",value:"24",gradient:"sky",icon:e.jsx(p,{className:"w-5 h-5"}),trend:{value:"+4 this week",isPositive:!0}}),e.jsx(a,{title:"Skill Match Rate",value:"88%",gradient:"cyan",icon:e.jsx(u,{className:"w-5 h-5"}),trend:{value:"+6% optimized",isPositive:!0}}),e.jsx(a,{title:"Profile Strength",value:"Level 4",gradient:"purple",icon:e.jsx(g,{className:"w-5 h-5"}),subtitle:"1 step to Master tier"})]})};var s,i,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "ATS Resume Score",
    value: "92/100",
    gradient: "emerald",
    icon: <Award className="w-5 h-5" />,
    trend: {
      value: "+14% vs last week",
      isPositive: true
    },
    subtitle: "Top 5% of applicants"
  },
  render: args => <div className="w-[320px]">\r
      <StatCard {...args} />\r
    </div>
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,n,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">\r
      <StatCard title="Jobs Applied" value="24" gradient="sky" icon={<Briefcase className="w-5 h-5" />} trend={{
      value: "+4 this week",
      isPositive: true
    }} />\r
      <StatCard title="Skill Match Rate" value="88%" gradient="cyan" icon={<Target className="w-5 h-5" />} trend={{
      value: "+6% optimized",
      isPositive: true
    }} />\r
      <StatCard title="Profile Strength" value="Level 4" gradient="purple" icon={<Sparkles className="w-5 h-5" />} subtitle="1 step to Master tier" />\r
    </div>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const A=["Default","GridShowcase"];export{r as Default,t as GridShowcase,A as __namedExportsOrder,b as default};
