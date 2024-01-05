import{q as c,c as l,s as u,v as d,x as s,y as n,z as g,A as y,B as m}from"./index.46db3f21.js";var f=c({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(t,{slots:r}){const a=l(()=>parseInt(t.lines,10)),e=l(()=>"q-item__label"+(t.overline===!0?" q-item__label--overline text-overline":"")+(t.caption===!0?" q-item__label--caption text-caption":"")+(t.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),i=l(()=>t.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>u("div",{style:i.value,class:e.value},d(r.default))}}),x=c({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:r}){const{proxy:{$q:a}}=m(),e=s(g,n);if(e===n)return console.error("QPage needs to be a deep child of QLayout"),n;if(s(y,n)===n)return console.error("QPage needs to be child of QPageContainer"),n;const v=l(()=>{const o=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:a.screen.height;return t.styleFn(o,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-o+"px":a.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":a.screen.height-o+"px"}}),h=l(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>u("main",{class:h.value,style:v.value},d(r.default))}}),Q={};export{x as Q,f as a,Q as b};
