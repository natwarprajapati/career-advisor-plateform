import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{v as n,y as i,z as k}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-GiUgBvb1.js";import"./index-B7pcWWqY.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=n("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),j={title:"Design System/StatCard",component:i,tags:["autodocs"],argTypes:{gradient:{control:"select",options:["sky","cyan","emerald","amber","rose","purple"]}}},a={args:{title:"Average ATS Score",value:"88%",icon:e.jsx(x,{className:"h-5 w-5"}),trend:{value:"+14%",isPositive:!0},subtitle:"vs previous resume draft",gradient:"emerald"}},r={args:{title:"Resumes Tailored",value:"12",icon:e.jsx(A,{className:"h-5 w-5"}),trend:{value:"+3 this week",isPositive:!0},gradient:"sky"}},s={args:{title:"Active Applications",value:"24",icon:e.jsx(S,{className:"h-5 w-5"}),trend:{value:"+8 new",isPositive:!0},gradient:"cyan"}},t={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full",children:[e.jsx(i,{title:"ATS Score",value:"92/100",icon:e.jsx(x,{className:"h-5 w-5"}),trend:{value:"+8%",isPositive:!0},subtitle:"Optimized",gradient:"emerald"}),e.jsx(i,{title:"Jobs Matched",value:"48",icon:e.jsx(S,{className:"h-5 w-5"}),trend:{value:"+12",isPositive:!0},subtitle:"Ready to apply",gradient:"sky"}),e.jsx(i,{title:"Skills Verified",value:"18/20",icon:e.jsx(k,{className:"h-5 w-5"}),trend:{value:"90% ready",isPositive:!0},gradient:"cyan"})]})};var o,l,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Average ATS Score",
    value: "88%",
    icon: <Award className="h-5 w-5" />,
    trend: {
      value: "+14%",
      isPositive: true
    },
    subtitle: "vs previous resume draft",
    gradient: "emerald"
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "Resumes Tailored",
    value: "12",
    icon: <FileText className="h-5 w-5" />,
    trend: {
      value: "+3 this week",
      isPositive: true
    },
    gradient: "sky"
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,v,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: "Active Applications",
    value: "24",
    icon: <Briefcase className="h-5 w-5" />,
    trend: {
      value: "+8 new",
      isPositive: true
    },
    gradient: "cyan"
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,y,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">\r
      <StatCard title="ATS Score" value="92/100" icon={<Award className="h-5 w-5" />} trend={{
      value: "+8%",
      isPositive: true
    }} subtitle="Optimized" gradient="emerald" />\r
      <StatCard title="Jobs Matched" value="48" icon={<Briefcase className="h-5 w-5" />} trend={{
      value: "+12",
      isPositive: true
    }} subtitle="Ready to apply" gradient="sky" />\r
      <StatCard title="Skills Verified" value="18/20" icon={<TrendingUp className="h-5 w-5" />} trend={{
      value: "90% ready",
      isPositive: true
    }} gradient="cyan" />\r
    </div>
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const P=["ATSScore","ResumesCreated","JobMatches","DashboardGrid"];export{a as ATSScore,t as DashboardGrid,s as JobMatches,r as ResumesCreated,P as __namedExportsOrder,j as default};
