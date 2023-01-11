import{u as _,o as a,g as l,a as u,b as s,w as c,F as g,H as x,d as e,f as p,h as d,q as i,t as n,k as m,n as f}from"./app-bfb632b8.js";import{_ as y}from"./AuthenticatedLayout-7b609724.js";import"./ApplicationLogo-e312a162.js";const h=e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Customer Create ",-1),k={class:"py-12"},v={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},w={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},C={class:"p-6 bg-white border-b border-gray-200"},N=["onSubmit"],V={class:"mb-6"},F=e("label",{for:"First Name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"First Name",-1),S={key:0,class:"text-sm text-red-600"},B={class:"mb-6"},U=e("label",{for:"Last Name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Last Name",-1),A={key:0,class:"text-sm text-red-600"},D={class:"mb-6"},H=e("label",{for:"Age",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Age",-1),L={key:0,class:"text-sm text-red-600"},M=["disabled"],T={__name:"Create",props:{customers:{type:Object,default:()=>({})}},setup(j){const t=_({first_name:"",last_name:"",age:""}),b=()=>{t.post(route("customers.store"))};return(q,o)=>(a(),l(g,null,[u(s(x),{title:"Customer Create"}),u(y,null,{header:c(()=>[h]),default:c(()=>[e("div",k,[e("div",v,[e("div",w,[e("div",C,[e("form",{onSubmit:p(b,["prevent"])},[e("div",V,[F,d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>s(t).first_name=r),name:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:""},null,512),[[i,s(t).first_name]]),s(t).errors.first_name?(a(),l("div",S,n(s(t).errors.first_name),1)):m("",!0)]),e("div",B,[U,d(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=r=>s(t).last_name=r),name:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:""},null,512),[[i,s(t).last_name]]),s(t).errors.last_name?(a(),l("div",A,n(s(t).errors.last_name),1)):m("",!0)]),e("div",D,[H,d(e("textarea",{type:"text","onUpdate:modelValue":o[2]||(o[2]=r=>s(t).age=r),name:"age",id:"",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[i,s(t).age]]),s(t).errors.age?(a(),l("div",L,n(s(t).errors.age),1)):m("",!0)]),e("button",{type:"submit",class:f(["text-white bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5",{"opacity-25":s(t).processing}]),disabled:s(t).processing}," Submit ",10,M)],40,N)])])])])]),_:1})],64))}};export{T as default};
