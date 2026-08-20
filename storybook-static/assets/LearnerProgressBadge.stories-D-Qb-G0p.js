import{j as e}from"./jsx-runtime-dsZ8nYAA.js";import{w as o,e as i,u as E}from"./index-OXjLjbQp.js";import{r as j}from"./index-GiUgBvb1.js";import{L as a}from"./LearnerProgressBadge-DzFUWWBv.js";import"./index-B7pcWWqY.js";const V={title:"Design System/LearnerProgressBadge",component:a,tags:["autodocs"],argTypes:{status:{control:"select",options:["default","in-progress","completed","disabled"]},size:{control:"select",options:["sm","md","lg","card"]},progress:{control:{type:"range",min:0,max:100,step:5}},skillName:{control:"text"},category:{control:"text"},duration:{control:"text"},interactive:{control:"boolean"}}},c={args:{status:"default",size:"card",skillName:"TypeScript Generics & Utility Types",category:"Frontend Mastery",duration:"4 hours",interactive:!0},play:async({canvasElement:s})=>{const t=o(s);await i(t.getByText("Ready to Learn")).toBeInTheDocument(),await i(t.getByText("TypeScript Generics & Utility Types")).toBeInTheDocument()}},d={args:{status:"in-progress",size:"card",skillName:"Next.js App Router & Server Components",category:"Full Stack Architecture",progress:65,duration:"6 hours remaining",interactive:!0},play:async({canvasElement:s})=>{const t=o(s);await i(t.getByText("65% In Progress")).toBeInTheDocument()}},l={args:{status:"completed",size:"card",skillName:"REST & GraphQL API Architecture",category:"Backend Services",progress:100,duration:"Completed on Aug 18",interactive:!0},play:async({canvasElement:s})=>{const t=o(s);await i(t.getByText("Mastered & Verified")).toBeInTheDocument()}},u={args:{status:"disabled",size:"card",skillName:"Kubernetes Microservices Deployment",category:"DevOps & Cloud",duration:"Requires Docker Mastery",interactive:!1},play:async({canvasElement:s})=>{const t=o(s);await i(t.getByText("Prerequisites Locked")).toBeInTheDocument()}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center p-4 max-w-2xl",children:[e.jsx(a,{status:"default",size:"md",skillName:"React Hooks"}),e.jsx(a,{status:"in-progress",size:"md",skillName:"TypeScript",progress:45}),e.jsx(a,{status:"completed",size:"md",skillName:"Tailwind CSS"}),e.jsx(a,{status:"disabled",size:"md",skillName:"AWS Lambda"})]})},m={render:()=>{const s=()=>{const[t,g]=j.useState([{id:"1",name:"React 18 & Concurrent Features",cat:"Core Frontend",status:"completed",progress:100,dur:"Verified"},{id:"2",name:"Tailwind CSS & Design Tokens Studio",cat:"UI Engineering",status:"in-progress",progress:80,dur:"1 module left"},{id:"3",name:"State Management with Zustand & React Query",cat:"State Architecture",status:"default",progress:0,dur:"3 hours"},{id:"4",name:"Micro-Frontend Orchestration",cat:"Advanced System Design",status:"disabled",progress:0,dur:"Prerequisites locked"}]),R=r=>{g(z=>z.map(n=>n.id!==r?n:n.status==="default"?{...n,status:"in-progress",progress:25}:n.status==="in-progress"?n.progress<75?{...n,progress:n.progress+25}:{...n,status:"completed",progress:100,dur:"Verified"}:n))};return e.jsxs("div",{className:"space-y-4 max-w-xl w-full p-4",children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsxs("div",{children:[e.jsx("h3",{className:"font-extrabold text-foreground text-lg",children:"Frontend Architect Learning Track"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Click an active card below to simulate interactive learner progress updates."})]})}),t.map(r=>e.jsx(a,{status:r.status,size:"card",skillName:r.name,category:r.cat,progress:r.progress,duration:r.dur,interactive:r.status!=="disabled",onStartLearning:()=>R(r.id)},r.id))]})};return e.jsx(s,{})},play:async({canvasElement:s})=>{const g=o(s).getByText("Tailwind CSS & Design Tokens Studio");await E.click(g)}};var y,v,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: "default",
    size: "card",
    skillName: "TypeScript Generics & Utility Types",
    category: "Frontend Mastery",
    duration: "4 hours",
    interactive: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Ready to Learn")).toBeInTheDocument();
    await expect(canvas.getByText("TypeScript Generics & Utility Types")).toBeInTheDocument();
  }
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,k,f;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: "in-progress",
    size: "card",
    skillName: "Next.js App Router & Server Components",
    category: "Full Stack Architecture",
    progress: 65,
    duration: "6 hours remaining",
    interactive: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("65% In Progress")).toBeInTheDocument();
  }
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var T,h,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    status: "completed",
    size: "card",
    skillName: "REST & GraphQL API Architecture",
    category: "Backend Services",
    progress: 100,
    duration: "Completed on Aug 18",
    interactive: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Mastered & Verified")).toBeInTheDocument();
  }
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var B,N,D;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: "disabled",
    size: "card",
    skillName: "Kubernetes Microservices Deployment",
    category: "DevOps & Cloud",
    duration: "Requires Docker Mastery",
    interactive: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Prerequisites Locked")).toBeInTheDocument();
  }
}`,...(D=(N=u.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var b,C,L;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center p-4 max-w-2xl">\r
      <LearnerProgressBadge status="default" size="md" skillName="React Hooks" />\r
      <LearnerProgressBadge status="in-progress" size="md" skillName="TypeScript" progress={45} />\r
      <LearnerProgressBadge status="completed" size="md" skillName="Tailwind CSS" />\r
      <LearnerProgressBadge status="disabled" size="md" skillName="AWS Lambda" />\r
    </div>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,I,P;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const RoadmapComponent = () => {
      const [skills, setSkills] = useState<Array<{
        id: string;
        name: string;
        cat: string;
        status: LearnerStatus;
        progress: number;
        dur: string;
      }>>([{
        id: "1",
        name: "React 18 & Concurrent Features",
        cat: "Core Frontend",
        status: "completed",
        progress: 100,
        dur: "Verified"
      }, {
        id: "2",
        name: "Tailwind CSS & Design Tokens Studio",
        cat: "UI Engineering",
        status: "in-progress",
        progress: 80,
        dur: "1 module left"
      }, {
        id: "3",
        name: "State Management with Zustand & React Query",
        cat: "State Architecture",
        status: "default",
        progress: 0,
        dur: "3 hours"
      }, {
        id: "4",
        name: "Micro-Frontend Orchestration",
        cat: "Advanced System Design",
        status: "disabled",
        progress: 0,
        dur: "Prerequisites locked"
      }]);
      const advanceSkill = (id: string) => {
        setSkills(prev => prev.map(s => {
          if (s.id !== id) return s;
          if (s.status === "default") {
            return {
              ...s,
              status: "in-progress",
              progress: 25
            };
          }
          if (s.status === "in-progress") {
            if (s.progress < 75) return {
              ...s,
              progress: s.progress + 25
            };
            return {
              ...s,
              status: "completed",
              progress: 100,
              dur: "Verified"
            };
          }
          return s;
        }));
      };
      return <div className="space-y-4 max-w-xl w-full p-4">\r
          <div className="flex items-center justify-between mb-2">\r
            <div>\r
              <h3 className="font-extrabold text-foreground text-lg">\r
                Frontend Architect Learning Track\r
              </h3>\r
              <p className="text-xs text-muted-foreground">\r
                Click an active card below to simulate interactive learner progress updates.\r
              </p>\r
            </div>\r
          </div>\r
\r
          {skills.map(skill => <LearnerProgressBadge key={skill.id} status={skill.status} size="card" skillName={skill.name} category={skill.cat} progress={skill.progress} duration={skill.dur} interactive={skill.status !== "disabled"} onStartLearning={() => advanceSkill(skill.id)} />)}\r
        </div>;
    };
    return <RoadmapComponent />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const inProgressBadge = canvas.getByText("Tailwind CSS & Design Tokens Studio");
    await userEvent.click(inProgressBadge);
  }
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const O=["Default","InProgress","Completed","Disabled","AllBadgeStatesMatrix","InteractiveLearnerRoadmap"];export{p as AllBadgeStatesMatrix,l as Completed,c as Default,u as Disabled,d as InProgress,m as InteractiveLearnerRoadmap,O as __namedExportsOrder,V as default};
