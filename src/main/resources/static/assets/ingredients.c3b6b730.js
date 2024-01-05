import{Q as k}from"./QSelect.8bcd1fcf.js";import{C as P,D as v,d as q,u as B,o as V,e as _,w as m,_ as I,g as a,f as u,t as x,n as p,E as b,h as g,Q as y,G as F,H as E,I as $,j as h,J as w,K as S,L as Q,c as N,M as j,p as K,r as O,F as L,N as M}from"./index.d24fbe54.js";import{e as R,Q as z,_ as G,l as H,i as C,I as A,a as n}from"./ingredient.ed0b9d9d.js";import{Q as J,b as U}from"./route-block.50262eb6.js";const D=P("ingredientPageStore",()=>{const f=v(!1),d=()=>{f.value=!0},c=()=>{f.value=!1},i=v(R),l=v(!1);return{createIngredientDialog:f,showCreateIngredientDialog:d,closeCreateIngredientDialog:c,updateIngredient:i,updateIngredientDialog:l,showUpdateIngredientDialog:s=>{console.log("showUpdateIngredientDialog",s),i.value=s,l.value=!0},closeUpdateIngredientDialog:()=>{l.value=!1}}}),T={class:"text-h5"},W={class:"text-caption"},X={class:"text-caption"},Y={class:"q-gutter-md"},Z=u("div",{class:"text-caption"},"\uBA54\uBAA8",-1),ee={style:{"min-height":"60px"}},le=q({__name:"IngredientCard",props:{id:{},name:{},category:{},calories:{},unitPrice:{},carbohydrates:{},sugar:{},fiber:{},protein:{},caffeine:{},fat:{},saturatedFat:{},memo:{},createdAt:{},updatedAt:{}},setup(f){const d=f;console.log("ingredient: ",d);const c=B(),i=D(),l=o=>{confirm("\uC815\uB9D0\uB85C \uC0AD\uC81C \uD558\uC2DC\uACA0\uC5B4\uC694?")&&c.remove(o)};return(o,r)=>(V(),_(I,{style:{width:"400px"}},{default:m(()=>[a(g,{class:"flex"},{default:m(()=>[u("div",null,[u("div",T,x(d.name),1),u("div",W,x(p(H)(d.category)),1),u("span",X,"\uB2E8\uAC00: "+x(d.unitPrice.toFixed(0)||"-")+"\uC6D0",1)]),a(z),u("div",Y,[a(b,{dense:"",outline:"",flat:"",color:"secondary",icon:"edit",onClick:r[0]||(r[0]=s=>p(i).showUpdateIngredientDialog(d))}),a(b,{dense:"",outline:"",flat:"",color:"red",icon:"delete",onClick:r[1]||(r[1]=s=>l(d.id))})])]),_:1}),a(y),a(g,null,{default:m(()=>[a(G,F(E(d)),null,16)]),_:1}),a(g,null,{default:m(()=>[Z,u("div",ee,x(d.memo),1)]),_:1})]),_:1}))}}),ae=u("div",null,[u("div",{class:"text-h6"},"\uC6D0\uC7AC\uB8CC \uB4F1\uB85D"),u("div",{class:"text-caption"},"100g\uB2F9")],-1),te={class:"q-gutter-md"},ue={class:"col-4 q-px-sm"},oe={class:"col-4 q-px-sm"},se={class:"col-4 q-px-sm"},ne={class:"col-6 q-px-sm"},de={class:"col-6 q-px-sm"},ie={class:"col-6 q-px-sm"},re={class:"col-6 q-px-sm"},me={class:"col-6 q-px-sm"},ce={class:"col-6 q-px-sm"},pe={class:"col-6 q-px-sm"},ve={class:"col-6 q-px-sm"},ge=q({__name:"CreateIngredientDialog",setup(f){const d=D(),c=B(),i=v(C[0]),l=()=>({category:A.fresh,name:"",calories:0,unitPrice:0,carbohydrates:0,sugar:0,fiber:0,protein:0,caffeine:0,fat:0,saturatedFat:0,memo:""}),o=v(l()),r=async()=>{const s={name:o.value.name,memo:o.value.memo,unitPrice:Number(o.value.unitPrice),calories:Number(o.value.calories),protein:Number(o.value.protein),fat:Number(o.value.fat),carbohydrates:Number(o.value.carbohydrates),sugar:Number(o.value.sugar),fiber:Number(o.value.fiber),caffeine:Number(o.value.caffeine),saturatedFat:Number(o.value.saturatedFat),category:i.value.value};await c.save(s),o.value=l(),d.closeCreateIngredientDialog()};return(s,e)=>(V(),_($,null,{default:m(()=>[a(I,{class:"q-pa-md",style:{width:"680px"}},{default:m(()=>[a(g,{class:"flex justify-between"},{default:m(()=>[ae,u("div",te,[a(b,{label:"\uB4F1\uB85D",color:"primary",onClick:r}),h(a(b,{label:"\uCDE8\uC18C"},null,512),[[w]])])]),_:1}),a(y),a(g,{class:"row q-gutter-y-sm"},{default:m(()=>[u("div",ue,[a(k,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),options:p(C),label:"\uCE74\uD14C\uACE0\uB9AC","stack-label":"",outlined:""},null,8,["modelValue","options"])]),u("div",oe,[a(n,{modelValue:o.value.name,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value.name=t),type:"text",label:"\uC774\uB984","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",se,[a(n,{modelValue:o.value.unitPrice,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.unitPrice=t),type:"number",label:"\uB2E8\uAC00(\uC6D0)","stack-label":"",outlined:""},null,8,["modelValue"])]),a(y),u("div",ne,[a(n,{modelValue:o.value.calories,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value.calories=t),type:"number",label:"\uCE7C\uB85C\uB9AC(Kcal)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",de,[a(n,{modelValue:o.value.carbohydrates,"onUpdate:modelValue":e[4]||(e[4]=t=>o.value.carbohydrates=t),type:"number",label:"\uD0C4\uC218\uD654\uBB3C(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",ie,[a(n,{modelValue:o.value.sugar,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value.sugar=t),type:"number",label:"\uB2F9\uB958(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",re,[a(n,{modelValue:o.value.fiber,"onUpdate:modelValue":e[6]||(e[6]=t=>o.value.fiber=t),type:"number",label:"\uC2DD\uC774\uC12C\uC720(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",me,[a(n,{modelValue:o.value.fat,"onUpdate:modelValue":e[7]||(e[7]=t=>o.value.fat=t),type:"number",label:"\uC9C0\uBC29(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",ce,[a(n,{modelValue:o.value.saturatedFat,"onUpdate:modelValue":e[8]||(e[8]=t=>o.value.saturatedFat=t),type:"number",label:"\uD3EC\uD654\uC9C0\uBC29(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",pe,[a(n,{modelValue:o.value.protein,"onUpdate:modelValue":e[9]||(e[9]=t=>o.value.protein=t),type:"number",label:"\uB2E8\uBC31\uC9C8(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",ve,[a(n,{modelValue:o.value.caffeine,"onUpdate:modelValue":e[10]||(e[10]=t=>o.value.caffeine=t),type:"number",label:"\uCE74\uD398\uC778(mg)","stack-label":"",outlined:""},null,8,["modelValue"])])]),_:1}),a(g,null,{default:m(()=>[a(n,{modelValue:o.value.memo,"onUpdate:modelValue":e[11]||(e[11]=t=>o.value.memo=t),type:"textarea",label:"\uBA54\uBAA8","stack-label":"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),fe=u("div",null,[u("div",{class:"text-h6"},"\uC6D0\uC7AC\uB8CC \uC218\uC815"),u("div",{class:"text-caption"},"100g\uB2F9")],-1),Ce={class:"q-gutter-md"},be={class:"col-4 q-px-sm"},Ve={class:"col-4 q-px-sm"},ye={class:"col-4 q-px-sm"},_e={class:"col-6 q-px-sm"},xe={class:"col-6 q-px-sm"},Be={class:"col-6 q-px-sm"},De={class:"col-6 q-px-sm"},ke={class:"col-6 q-px-sm"},qe={class:"col-6 q-px-sm"},Ue={class:"col-6 q-px-sm"},Ie={class:"col-6 q-px-sm"},$e=q({__name:"UpdateIngredientDialog",setup(f){const d=B(),c=D(),i=v(C[0]),l=v({category:A.fresh,name:"",calories:0,unitPrice:0,carbohydrates:0,sugar:0,fiber:0,protein:0,caffeine:0,fat:0,saturatedFat:0,memo:""}),o=()=>{const s=c.updateIngredient;console.log("beforeShow: ",s),i.value=C.find(e=>e.value===s.category)||C[0],l.value.name=s.name,l.value.calories=s.calories,l.value.unitPrice=s.unitPrice,l.value.carbohydrates=s.carbohydrates,l.value.sugar=s.sugar,l.value.fiber=s.fiber,l.value.protein=s.protein,l.value.caffeine=s.caffeine,l.value.fat=s.fat,l.value.saturatedFat=s.saturatedFat,l.value.memo=s.memo},r=async()=>{const s={name:l.value.name,memo:l.value.memo,unitPrice:l.value.unitPrice,calories:l.value.calories,protein:l.value.protein,fat:l.value.fat,carbohydrates:l.value.carbohydrates,sugar:l.value.sugar,fiber:l.value.fiber,caffeine:l.value.caffeine,saturatedFat:l.value.saturatedFat,category:i.value.value};console.log(s),await d.update(c.updateIngredient.id,s),c.closeUpdateIngredientDialog()};return(s,e)=>(V(),_($,{onBeforeShow:o},{default:m(()=>[a(S,{class:"q-pa-md",style:{width:"600px"}},{default:m(()=>[a(g,{class:"flex justify-between"},{default:m(()=>[fe,u("div",Ce,[a(b,{label:"\uC218\uC815",color:"primary",onClick:r}),h(a(b,{label:"\uCDE8\uC18C"},null,512),[[w]])])]),_:1}),a(y),a(g,{class:"row q-gutter-y-sm"},{default:m(()=>[u("div",be,[a(k,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),options:p(C),label:"\uCE74\uD14C\uACE0\uB9AC","stack-label":"",outlined:""},null,8,["modelValue","options"])]),u("div",Ve,[a(n,{modelValue:l.value.name,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.name=t),type:"text",label:"\uC774\uB984","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",ye,[a(n,{modelValue:l.value.unitPrice,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value.unitPrice=t),type:"number",label:"\uB2E8\uAC00(\uC6D0)","stack-label":"",outlined:""},null,8,["modelValue"])]),a(y),u("div",_e,[a(n,{modelValue:l.value.calories,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value.calories=t),type:"number",label:"\uCE7C\uB85C\uB9AC(Kcal)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",xe,[a(n,{modelValue:l.value.carbohydrates,"onUpdate:modelValue":e[4]||(e[4]=t=>l.value.carbohydrates=t),type:"number",label:"\uD0C4\uC218\uD654\uBB3C(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",Be,[a(n,{modelValue:l.value.sugar,"onUpdate:modelValue":e[5]||(e[5]=t=>l.value.sugar=t),type:"number",label:"\uB2F9\uB958(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",De,[a(n,{modelValue:l.value.sugar,"onUpdate:modelValue":e[6]||(e[6]=t=>l.value.sugar=t),type:"number",label:"\uC2DD\uC774\uC12C\uC720(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",ke,[a(n,{modelValue:l.value.fat,"onUpdate:modelValue":e[7]||(e[7]=t=>l.value.fat=t),type:"number",label:"\uC9C0\uBC29(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",qe,[a(n,{modelValue:l.value.saturatedFat,"onUpdate:modelValue":e[8]||(e[8]=t=>l.value.saturatedFat=t),type:"number",label:"\uD3EC\uD654\uC9C0\uBC29(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",Ue,[a(n,{modelValue:l.value.protein,"onUpdate:modelValue":e[9]||(e[9]=t=>l.value.protein=t),type:"number",label:"\uB2E8\uBC31\uC9C8(g)","stack-label":"",outlined:""},null,8,["modelValue"])]),u("div",Ie,[a(n,{modelValue:l.value.caffeine,"onUpdate:modelValue":e[10]||(e[10]=t=>l.value.caffeine=t),type:"number",label:"\uCE74\uD398\uC778(mg)","stack-label":"",outlined:""},null,8,["modelValue"])])]),_:1}),a(g,null,{default:m(()=>[a(n,{modelValue:l.value.memo,"onUpdate:modelValue":e[11]||(e[11]=t=>l.value.memo=t),type:"textarea",label:"\uBA54\uBAA8","stack-label":"",outlined:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}))}}),he=u("div",{class:"flex full-width q-mb-md"},[u("span",{class:"text-h4 text-bold"},"\uC6D0\uC7AC\uB8CC")],-1),we={class:"row"},Ae={class:"col-3 q-px-md"},Pe={class:"col-9"},Fe={class:"flex justify-end q-px-lg q-gutter-lg"},Ee={class:"q-gutter-md flex full-width"},Se={__name:"ingredients",setup(f){const d=v([]),c=v(""),i=D(),l=B();Q(()=>{l.fetchAll()});const o=N(()=>{let r=l.ingredients;return d.value.length>0&&(r=r.filter(s=>d.value.some(e=>s.category===e.value))),c.value&&(r=r.filter(s=>s.name.includes(c.value))),r});return(r,s)=>(V(),_(J,{class:"full-width q-pa-xl"},{default:m(()=>[he,u("div",we,[u("div",Ae,[a(k,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=e=>d.value=e),multiple:"",options:p(C),label:"\uCE74\uD14C\uACE0\uB9AC","stack-label":"",outlined:""},null,8,["modelValue","options"])]),u("div",Pe,[u("div",Fe,[a(n,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=e=>c.value=e),type:"text",label:"\uC7AC\uB8CC \uCC3E\uAE30(\uC7AC\uB8CC\uBA85)",style:{width:"300px"},"stack-label":"",dense:""},{append:m(()=>[a(j,{name:"search"})]),_:1},8,["modelValue"]),a(b,{color:"primary",label:"\uC6D0\uC7AC\uB8CC \uB4F1\uB85D\uD558\uAE30",onClick:p(i).showCreateIngredientDialog},null,8,["onClick"])])])]),a(y,{class:"q-my-md full-width"}),u("div",Ee,[(V(!0),K(L,null,O(o.value,e=>(V(),_(le,M({key:e.id},e),null,16))),128))]),a(ge,{modelValue:p(i).createIngredientDialog,"onUpdate:modelValue":s[2]||(s[2]=e=>p(i).createIngredientDialog=e)},null,8,["modelValue"]),a($e,{modelValue:p(i).updateIngredientDialog,"onUpdate:modelValue":s[3]||(s[3]=e=>p(i).updateIngredientDialog=e)},null,8,["modelValue"])]),_:1}))}};typeof U=="function"&&U(Se);export{Se as default};
