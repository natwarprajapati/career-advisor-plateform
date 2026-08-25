import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{U as C}from"./user-CEck5PcO.js";import{B as D}from"./briefcase-Cuv4Lo8c.js";import{C as T}from"./cpu-BkfBzSJ0.js";import{G as _}from"./graduation-cap-Ds8oviwc.js";import{F as I}from"./file-text-BEav9mf1.js";import{c as g}from"./profile-utils-Dwl_IvzB.js";import{c as p}from"./utils-CytzSlOG.js";import{c as F}from"./createLucideIcon-Jqo6cJwR.js";import"./index-GiUgBvb1.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=F("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),u=[{id:1,title:"Personal Info",icon:C,weight:"20%"},{id:2,title:"Career & Work",icon:D,weight:"20%"},{id:3,title:"Skills & Domain",icon:T,weight:"20%"},{id:4,title:"Education",icon:_,weight:"20%"},{id:5,title:"Resume & Links",icon:I,weight:"20%"}];Array.from({length:15},(r,i)=>`${new Date().getFullYear()+3-i}`);const a=({currentStep:r,onSelectStep:i,formData:f})=>e.jsxs("div",{className:"mb-8 pb-6 border-b border-border/60",children:[e.jsxs("div",{className:"hidden sm:flex items-start justify-between relative",children:[e.jsx("div",{className:"absolute top-5 left-[10%] right-[10%] h-[2px] bg-border z-0",children:e.jsx("div",{className:"h-full bg-primary transition-all duration-500 ease-out",style:{width:`${(r-1)/(u.length-1)*100}%`}})}),u.map(t=>{const m=t.icon,o=r===t.id,n=g(t.id,f),s=n.isComplete;return e.jsxs("button",{type:"button",onClick:()=>i(t.id),className:"relative flex flex-col items-center group flex-1 cursor-pointer focus:outline-none",children:[e.jsx("div",{className:p("w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 border-2 z-10",o?"bg-primary text-primary-foreground border-primary ring-4 ring-primary/10 shadow-sm":s?"bg-emerald-600 border-emerald-600 text-white":"bg-card border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground"),children:s?e.jsx(h,{className:"w-4 h-4 stroke-[2.5]"}):o?e.jsxs("span",{className:"text-[11px] font-extrabold",children:[Math.round(n.points),"%"]}):e.jsx(m,{className:"w-4 h-4"})}),e.jsx("div",{className:"flex flex-col items-center text-center mt-2",children:e.jsx("span",{className:p("text-xs transition-colors max-w-[90px]",o?"text-primary font-bold":s?"text-foreground font-semibold":"text-muted-foreground group-hover:text-foreground font-medium"),children:t.title})})]},t.id)})]}),e.jsx("div",{className:"flex sm:hidden items-center gap-2 overflow-x-auto pb-1 no-scrollbar",children:u.map(t=>{const m=t.icon,o=r===t.id,n=g(t.id,f),s=n.isComplete;return e.jsxs("button",{type:"button",onClick:()=>i(t.id),className:p("flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all shrink-0 cursor-pointer",o?"border-primary bg-primary/10 text-primary font-semibold":s?"border-emerald-600/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400":"border-border/60 bg-card text-muted-foreground"),children:[e.jsx("div",{className:"w-4 h-4 rounded-full flex items-center justify-center shrink-0",children:s?e.jsx(h,{className:"w-3.5 h-3.5 text-emerald-600 stroke-[2.5]"}):o?e.jsxs("span",{className:"text-[10px] font-bold text-primary",children:[Math.round(n.points),"%"]}):e.jsx(m,{className:"w-3.5 h-3.5"})}),e.jsx("span",{children:t.title})]},t.id)})})]});a.__docgenInfo={description:"",methods:[],displayName:"ProfileStepProgress",props:{currentStep:{required:!0,tsType:{name:"number"},description:""},onSelectStep:{required:!0,tsType:{name:"signature",type:"function",raw:"(stepId: number) => void",signature:{arguments:[{type:{name:"number"},name:"stepId"}],return:{name:"void"}}},description:""},formData:{required:!0,tsType:{name:"Partial",elements:[{name:"UserProfile"}],raw:"Partial<UserProfile>"},description:""}}};const $={title:"Features/Profile/ProfileStepProgress",component:a,tags:["autodocs"]},x={name:"Natwar Prajapati",phone:"+919876543210",email:"natwar@example.com",experience_level:"experienced",current_role:"Senior Full Stack Engineer",primary_domain:"Full Stack Development",skills:["React","TypeScript","Node.js","Tailwind CSS"]},l={args:{currentStep:1,formData:x,onSelectStep:r=>console.log("Selected step:",r)},render:r=>e.jsx("div",{className:"w-full max-w-3xl",children:e.jsx(a,{...r})})},c={args:{currentStep:3,formData:x,onSelectStep:r=>console.log("Selected step:",r)},render:r=>e.jsx("div",{className:"w-full max-w-3xl",children:e.jsx(a,{...r})})},d={args:{currentStep:5,formData:{...x,degree:"B.Tech in Computer Science",institution:"Tech University",resume_text:"Experienced software engineer..."},onSelectStep:r=>console.log("Selected step:",r)},render:r=>e.jsx("div",{className:"w-full max-w-3xl",children:e.jsx(a,{...r})})};var S,b,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    formData: mockPartialProfile,
    onSelectStep: step => console.log("Selected step:", step)
  },
  render: args => <div className="w-full max-w-3xl">\r
      <ProfileStepProgress {...args} />\r
    </div>
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,y,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    currentStep: 3,
    formData: mockPartialProfile,
    onSelectStep: step => console.log("Selected step:", step)
  },
  render: args => <div className="w-full max-w-3xl">\r
      <ProfileStepProgress {...args} />\r
    </div>
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var P,N,k;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    currentStep: 5,
    formData: {
      ...mockPartialProfile,
      degree: "B.Tech in Computer Science",
      institution: "Tech University",
      resume_text: "Experienced software engineer..."
    },
    onSelectStep: step => console.log("Selected step:", step)
  },
  render: args => <div className="w-full max-w-3xl">\r
      <ProfileStepProgress {...args} />\r
    </div>
}`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const O=["Step1Active","Step3Active","Step5Completed"];export{l as Step1Active,c as Step3Active,d as Step5Completed,O as __namedExportsOrder,$ as default};
