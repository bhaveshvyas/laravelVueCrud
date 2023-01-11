import{_ as m}from"./AuthenticatedLayout-7b609724.js";import{u as y,o as d,g as l,a as s,b as c,w as a,F as n,H as g,d as e,L as p,e as i,x as f,t as r}from"./app-bfb632b8.js";import{_}from"./PrimaryButton-1999c5cc.js";import"./ApplicationLogo-e312a162.js";const b=e("h2",{class:"text-xl font-semibold leading-tight text-gray-800"}," Customer List ",-1),w={class:"py-12"},k={class:"mx-auto max-w-7xl sm:px-6 lg:px-8"},v={class:"overflow-hidden bg-white shadow-sm sm:rounded-lg"},C={class:"p-6 bg-white border-b border-gray-200"},L={class:"mb-2"},N={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},D={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},F=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"#"),e("th",{scope:"col",class:"px-6 py-3"}," First Name "),e("th",{scope:"col",class:"px-6 py-3"}," Last Name "),e("th",{scope:"col",class:"px-6 py-3"}," Age "),e("th",{scope:"col",class:"px-6 py-3"}," Edit "),e("th",{scope:"col",class:"px-6 py-3"}," Delete ")])],-1),A={scope:"row",class:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"},B={scope:"row",class:"px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"},E={class:"px-6 py-4"},V={class:"px-6 py-4"},$={class:"px-6 py-4"},H={class:"px-6 py-4"},z={__name:"Index",props:{customers:{type:Object,default:()=>({})}},setup(h){const u=y();function x(o){confirm("Are you sure you want to Delete")&&u.delete(route("customers.destroy",o))}return(o,j)=>(d(),l(n,null,[s(c(g),{title:"Customers"}),s(m,null,{header:a(()=>[b]),default:a(()=>[e("div",w,[e("div",k,[e("div",v,[e("div",C,[e("div",L,[s(c(p),{href:o.route("customers.create")},{default:a(()=>[s(_,null,{default:a(()=>[i("Add Customer")]),_:1})]),_:1},8,["href"])]),e("div",N,[e("table",D,[F,e("tbody",null,[(d(!0),l(n,null,f(h.customers,t=>(d(),l("tr",{key:t.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[e("th",A,r(t.id),1),e("th",B,r(t.first_name),1),e("td",E,r(t.last_name),1),e("td",V,r(t.age),1),e("td",$,[s(c(p),{href:o.route("customers.edit",t.id),class:"px-4 py-2 text-white bg-blue-600 rounded-lg"},{default:a(()=>[i("Edit")]),_:2},1032,["href"])]),e("td",H,[s(_,{class:"bg-red-700",onClick:I=>x(t.id)},{default:a(()=>[i(" Delete ")]),_:2},1032,["onClick"])])]))),128))])])])])])])])]),_:1})],64))}};export{z as default};
