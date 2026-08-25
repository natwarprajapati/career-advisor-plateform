import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{E as t}from"./EmptyState-CLDPTbFv.js";import{c as d}from"./createLucideIcon-Jqo6cJwR.js";import{B as p}from"./briefcase-Cuv4Lo8c.js";import{S as u}from"./sparkles-CT5O2mlw.js";import"./index-GiUgBvb1.js";import"./Button-CuZ_qdAc.js";import"./index-G_QUMDSw.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./loader-circle-FaTuTqha.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=d("FileSearch",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=d("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),E={title:"Design System/EmptyState",component:t,tags:["autodocs"]},a={args:{icon:e.jsx(h,{className:"w-8 h-8"}),title:"No Resumes Uploaded Yet",description:"Upload your resume in PDF format to receive instant ATS evaluation and AI suggestions.",actionLabel:"Upload Resume",actionIcon:e.jsx(v,{className:"w-4 h-4"}),onAction:()=>alert("Upload clicked")},render:o=>e.jsx("div",{className:"max-w-md w-full",children:e.jsx(t,{...o})})},s={args:{icon:e.jsx(p,{className:"w-8 h-8 text-cyan-400"}),title:"No Saved Jobs Found",description:"Explore AI matched opportunities tailored specifically for your target domain.",actionLabel:"Discover Jobs",actionIcon:e.jsx(u,{className:"w-4 h-4"}),onAction:()=>alert("Discover clicked")},render:o=>e.jsx("div",{className:"max-w-md w-full",children:e.jsx(t,{...o})})};var r,c,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    icon: <FileSearch className="w-8 h-8" />,
    title: "No Resumes Uploaded Yet",
    description: "Upload your resume in PDF format to receive instant ATS evaluation and AI suggestions.",
    actionLabel: "Upload Resume",
    actionIcon: <Plus className="w-4 h-4" />,
    onAction: () => alert("Upload clicked")
  },
  render: args => <div className="max-w-md w-full">\r
      <EmptyState {...args} />\r
    </div>
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var n,l,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: <Briefcase className="w-8 h-8 text-cyan-400" />,
    title: "No Saved Jobs Found",
    description: "Explore AI matched opportunities tailored specifically for your target domain.",
    actionLabel: "Discover Jobs",
    actionIcon: <Sparkles className="w-4 h-4" />,
    onAction: () => alert("Discover clicked")
  },
  render: args => <div className="max-w-md w-full">\r
      <EmptyState {...args} />\r
    </div>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const I=["NoResumes","NoSavedJobs"];export{a as NoResumes,s as NoSavedJobs,I as __namedExportsOrder,E as default};
