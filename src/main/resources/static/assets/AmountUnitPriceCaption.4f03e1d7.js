import{q as h,O as x,S as m,c as b,s as d,v as p,B,d as _,u as f,o,p as l,f as t,g as n,w as i,M as g,F as q,r as k,n as C,t as a}from"./index.46db3f21.js";import{a as D,l as v}from"./ingredient.8bee550d.js";const y=["horizontal","vertical","cell","none"];var E=h({name:"QMarkupTable",props:{...x,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:s=>y.includes(s)}},setup(s,{slots:r}){const c=B(),u=m(s,c.proxy.$q),e=b(()=>`q-markup-table q-table__container q-table__card q-table--${s.separator}-separator`+(u.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(s.dense===!0?" q-table--dense":"")+(s.flat===!0?" q-table--flat":"")+(s.bordered===!0?" q-table--bordered":"")+(s.square===!0?" q-table--square":"")+(s.wrapCells===!1?" q-table--no-wrap":""));return()=>d("div",{class:e.value},[d("table",{class:"q-table"},p(r.default))])}});const A={class:"q-px-md"},I={class:"row justify-end q-mb-lg"},$={class:"col-3"},S=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"\uC6D0\uC7AC\uB8CC\uBA85"),t("th",{class:"text-center"},"\uCE74\uD14C\uACE0\uB9AC"),t("th",{class:"text-center"},"\uCE7C\uB85C\uB9AC(Kcal)"),t("th",{class:"text-center"},"\uD0C4\uC218\uD654\uBB3C(g)"),t("th",{class:"text-center"},"\uB2F9\uB958(g)"),t("th",{class:"text-center"},"\uC2DD\uC774\uC12C\uC720(g)"),t("th",{class:"text-center"},"\uC9C0\uBC29(g)"),t("th",{class:"text-center"},"\uD3EC\uD654\uC9C0\uBC29(g)"),t("th",{class:"text-center"},"\uB2E8\uBC31\uC9C8(g)"),t("th",{class:"text-center"},"\uCE74\uD398\uC778(mg)"),t("th",{class:"text-center"},"\uB2E8\uAC00(\uC6D0)")])],-1),w=["onClick"],F={class:"text-center"},N={class:"text-center"},P={class:"text-right"},Q={class:"text-right"},M={class:"text-right"},T={class:"text-right"},V={class:"text-right"},z={class:"text-right"},O={class:"text-right"},j={class:"text-right"},K={class:"text-right"},W=_({__name:"IngredientSearchTable",emits:["onIngredientClick"],setup(s){const r=f();return(c,u)=>(o(),l("div",A,[t("div",I,[t("div",$,[n(D,{type:"text",label:"\uC6D0\uC7AC\uB8CC \uCC3E\uAE30","stack-label":""},{default:i(()=>[n(g,{name:"search",color:"secondary"})]),_:1})])]),n(E,null,{default:i(()=>[S,t("tbody",null,[(o(!0),l(q,null,k(C(r).ingredients,e=>(o(),l("tr",{key:e.name,onClick:H=>c.$emit("onIngredientClick",e)},[t("td",F,a(e.name),1),t("td",N,a(C(v)(e.category)),1),t("td",P,a(e.calories),1),t("td",Q,a(e.carbohydrates),1),t("td",M,a(e.sugar),1),t("td",T,a(e.fiber),1),t("td",V,a(e.fat),1),t("td",z,a(e.saturatedFat),1),t("td",O,a(e.protein),1),t("td",j,a(e.caffeine),1),t("td",K,a(e.unitPrice),1)],8,w))),128))])]),_:1})]))}}),L={class:"q-gutter-x-md"},U={class:"text-caption"},G={class:"text-caption"},X=_({__name:"AmountUnitPriceCaption",props:{amount:{type:Number,default:0},unitPrice:{type:Number}},setup(s){return(r,c)=>(o(),l("div",L,[t("span",U,"\uC911\uB7C9: "+a(Number(s.amount).toFixed(0))+"g",1),t("span",G,"\uB2E8\uAC00: "+a(Number(s.unitPrice).toFixed(0)||"-")+"\uC6D0",1)]))}});export{E as Q,W as _,X as a};
