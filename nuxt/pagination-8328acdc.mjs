import{a as y,r as v,l as P,b as f,o as h,e as m,f as c,w as n,u as g,h as e,i as b,F as x,s as C,j as s,k as S,v as $,t as T}from"./entry-c0a3a061.mjs";import{_ as w}from"./sidebar-6058d88c.mjs";const L={class:"uu-content"},B=s("Pagination | Portaldev Bootstrap theme docs"),I=s(" Variables "),E=e("h1",{class:"uu-sidebar-header-linked d-lg-block d-none"}," Variables ",-1),N=e("pre",null,`$pagination-gap:            10px;
$pagination-size:           2.5rem;
$pagination-button-bg:      $black;
$pagination-ellipsis-color: $gray-700;
                    `,-1),V=e("p",null," These variables are in addition to Bootstrap's pagination vars. ",-1),D=e("h2",null,"See also",-1),j={class:"nav"},z={class:"nav-item"},F=s(" Bootstrap pagination docs "),H=e("h1",{class:"uu-sidebar-header-linked"}," Pagination ",-1),M=e("p",null," Pagination are mostly untouched aside from UU styling. Just a couple of small additions and notes; ",-1),U={class:"pagination justify-content-center",role:"navigation","aria-label":"pagination"},q=["onClick"],J=e("h2",{class:"hdr-underlined"}," Ellipsis ",-1),W=e("p",null,[s(" To display ellipsis (the three dots), add the "),e("code",null,".page-ellipsis"),s(" class to a "),e("code",null,".page-item"),s(". The item's content will automatically be hidden and replaced by the three dots. ")],-1),A=e("p",null,[s(" Please note that you still have to include an element with the "),e("code",null,".page-link"),s(" class to make this work. This can be an "),e("code",null,"a"),s(" or a "),e("code",null,"span"),s(" element. ")],-1),G=e("h2",{class:"hdr-underlined"}," Pagination Button ",-1),K=e("p",null,[s(" The prev/next buttons should be decorated by a "),e("code",null,".page-button"),s(" class. It will make it look pretty, but most importantly it will not force the item to be square. ")],-1),O=e("h3",null,"Datatables",-1),Q=e("p",null," There's some custom CSS to make Datatables' buttons work correctly; if you find them, please don't use them. ",-1),Z=y({__name:"pagination",setup(R){const o=v(1),d=v(10),k=P(()=>{const l=o.value-1,_=o.value+1+1,u=[],i=[];let t;for(let a=1;a<=d.value;a++)(a===1||a===d.value||a>=l&&a<_)&&u.push(a);for(const a of u)t&&(a-t===2?i.push(t+1):a-t!==1&&i.push("ELLIPSIS")),i.push(a),t=a;return i});function r(p){o.value=Math.min(Math.max(p,1),d.value)}return(p,l)=>{const _=f("Title"),u=f("Head"),i=S;return h(),m("div",L,[c(u,null,{default:n(()=>[c(_,null,{default:n(()=>[B]),_:1})]),_:1}),c(g(w),{id:"buttons",placement:"right","mobile-placement":"bottom"},{"sidebar-button":n(()=>[I]),sidebar:n(()=>[E,c(g($),{language:"scss"},{default:n(()=>[N]),_:1}),V,D,e("ul",j,[e("li",z,[c(i,{class:"nav-link",to:"https://getbootstrap.com/docs/5.2/components/pagination/",target:"_blank"},{default:n(()=>[F]),_:1})])])]),default:n(()=>[H,M,e("ul",U,[e("li",{class:b(["page-item page-button",o.value===1?"disabled":""])},[e("a",{class:"page-link",onClick:l[0]||(l[0]=t=>r(o.value-1))}," Previous ")],2),(h(!0),m(x,null,C(g(k),t=>(h(),m("li",{key:t,class:b(["page-item",(t==="ELLIPSIS"?"page-ellipsis ":"")+(t===o.value?"active":"")])},[e("a",{class:"page-link",onClick:a=>t!=="ELLIPSIS"?r(t):0},T(t),9,q)],2))),128)),e("li",{class:b(["page-item page-button",o.value===d.value?"disabled":""])},[e("a",{class:"page-link",onClick:l[1]||(l[1]=t=>r(o.value+1))}," Next ")],2)]),J,W,A,G,K,O,Q]),_:1})])}}});export{Z as default};
