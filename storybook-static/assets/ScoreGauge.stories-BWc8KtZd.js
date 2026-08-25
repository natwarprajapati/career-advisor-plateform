import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{m as z}from"./proxy-D54ufnhj.js";import"./index-GiUgBvb1.js";const r=({score:n,label:i="ATS Score",size:l=120})=>{const s=2*Math.PI*45,v=s-n/100*s,A=m=>m>=80?"#10B981":m>=65?"#F59E0B":"#EF4444";return e.jsxs("div",{className:"flex flex-col items-center justify-center p-4",children:[e.jsxs("div",{className:"relative flex items-center justify-center",style:{width:l,height:l},children:[e.jsxs("svg",{className:"w-full h-full -rotate-90",viewBox:"0 0 100 100",children:[e.jsx("circle",{cx:"50",cy:"50",r:45,className:"stroke-muted/30",strokeWidth:"8",fill:"transparent"}),e.jsx(z.circle,{cx:"50",cy:"50",r:45,stroke:A(n),strokeWidth:"8",strokeDasharray:s,initial:{strokeDashoffset:s},animate:{strokeDashoffset:v},transition:{duration:1.2,ease:"easeOut"},strokeLinecap:"round",fill:"transparent"})]}),e.jsxs("div",{className:"absolute flex flex-col items-center justify-center",children:[e.jsx("span",{className:"text-2xl font-bold text-primary",children:n}),e.jsx("span",{className:"text-[10px] text-muted-foreground uppercase font-semibold",children:"/ 100"})]})]}),i&&e.jsx("p",{className:"text-sm font-medium text-muted-foreground mt-2",children:i})]})};r.__docgenInfo={description:"",methods:[],displayName:"ScoreGauge",props:{score:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'ATS Score'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"120",computed:!1}}}};const E={title:"Features/Resume Screening/ScoreGauge",component:r,tags:["autodocs"],argTypes:{score:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"number"}}}},a={args:{score:88,label:"ATS Match Score",size:140}},t={args:{score:68,label:"ATS Match Score",size:140}},o={args:{score:42,label:"ATS Match Score",size:140}},c={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-8 items-center justify-center p-4",children:[e.jsx(r,{score:94,label:"Top Match (Emerald)",size:130}),e.jsx(r,{score:72,label:"Average Match (Amber)",size:130}),e.jsx(r,{score:45,label:"Low Match (Red)",size:130})]})};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    score: 88,
    label: "ATS Match Score",
    size: 140
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,x,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    score: 68,
    label: "ATS Match Score",
    size: 140
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,S,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    score: 42,
    label: "ATS Match Score",
    size: 140
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,y,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-8 items-center justify-center p-4">\r
      <ScoreGauge score={94} label="Top Match (Emerald)" size={130} />\r
      <ScoreGauge score={72} label="Average Match (Amber)" size={130} />\r
      <ScoreGauge score={45} label="Low Match (Red)" size={130} />\r
    </div>
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const G=["HighScore","AverageScore","LowScore","TierComparison"];export{t as AverageScore,a as HighScore,o as LowScore,c as TierComparison,G as __namedExportsOrder,E as default};
