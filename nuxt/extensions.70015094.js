import{T as x,H as w}from"./components.da906116.js";import{a as $,a3 as B,b,e as s,w as a,u as l,aE as T,aC as C,h as e,o as _,f as t,U as f,aH as k,P as i,i as F,j as U}from"./entry.21858a4c.js";import{v as y}from"./vue-prism-component.common.6933ebda.js";import{_ as p}from"./sidebar.vue_vue_type_script_setup_true_lang.41bd9a76.js";import{_ as A}from"./_plugin-vue_export-helper.af303bb4.js";import"./composables.e4889afb.js";const o=d=>(T("data-v-1b3a7a32"),d=d(),C(),d),V={class:"w-100"},I=o(()=>e("div",{class:"uu-hero"},[e("h1",null,"Extensions")],-1)),M=o(()=>e("h1",{class:"uu-sidebar-header-linked d-lg-block d-none"},"Variables",-1)),S=o(()=>e("pre",null,`//// UU Color palette
// Primary colors
$yellow:              #FFCD00;
$red:                 #C00A35;
$black:               #000000;
$white:               #ffffff;
// Secondary colors
$cream:               #FFE6AB;
$orange:              #F3965E;
$bordeaux-red:        #AA1555;
$brown:               #6E3B23;
// Actually UU Green, but it looks teal
$teal:                #24A793;
$blue:                #5287C6;
$dark-blue:           #001240;
$purple:              #5B2182;
// Bootstrap defaults
$indigo:              #6610f2;
$pink:                #d63384;
$green:               #198754;
$cyan:                #0dcaf0;
// Theme colors
$primary:             $yellow;
$secondary:           $black;
$success:             $green;
$info:                $cyan;
$warning:             $orange;
$danger:              $red;
$light:               $gray-100;
$dark:                $gray-900;
`,-1)),E=o(()=>e("p",null," Shade variants are not included in the overview above as they're calculated on the fly. ",-1)),z=o(()=>e("h3",null,"See also",-1)),D={class:"nav"},J={class:"nav-item"},L={class:"nav-item"},H=o(()=>e("h1",{class:"uu-sidebar-header-linked"},"Colors",-1)),N=o(()=>e("code",null,"$colors",-1)),P=o(()=>e("code",null,"$theme-colors",-1)),j=o(()=>e("code",null,"$colors",-1)),K=o(()=>e("code",null,".text-red",-1)),q=o(()=>e("code",null,".bg-teal",-1)),G=o(()=>e("h3",{class:"hdr-underlined mt-3"},"Hover backgrounds",-1)),R=o(()=>e("p",null,[t(" A new set of helper classes for backgrounds on hover are added: "),e("code",null,".text-bg-hover-{color}"),t(". For example: ")],-1)),O=o(()=>e("p",null,"(note: animation is added on this page, it's not standard)",-1)),Q=o(()=>e("div",{class:"row fw-bold pb-4"},[e("div",{class:"col-6 color-demo-box text-bg-dark text-bg-hover-indigo"},[e("p",null,".text-bg-dark"),e("p",null,".text-bg-hover-indigo")]),e("div",{class:"col-6 color-demo-box text-bg-info text-bg-hover-purple"},[e("p",null,".text-bg-info"),e("p",null,".text-bg-hover-purple")]),e("div",{class:"col-6 color-demo-box text-bg-hover-dark-blue"},[e("p",null,".text-bg-hover-dark-blue")]),e("div",{class:"col-6 color-demo-box text-bg-brown text-bg-hover-orange"},[e("p",null,".text-bg-brown"),e("p",null,".text-bg-hover-orange")])],-1)),W=o(()=>e("h1",{class:"uu-sidebar-header-linked d-lg-block d-none"},"Links",-1)),X={class:"nav"},Y={class:"nav-item"},Z=o(()=>e("h1",{class:"uu-sidebar-header-linked"},"Table sticky header/footer",-1)),ee=o(()=>e("p",null,[t(" For big tables it might be handy to have the table header 'stick' to the top (or the footer to the bottom). For this usecase, "),e("code",{class:"text-nowrap"},".table-sticky-header"),t(" and "),e("code",{class:"text-nowrap"},".table-sticky-footer"),t(" have been added as modifiers for "),e("code",{class:"text-nowrap"},"table.table"),t(". ")],-1)),te=o(()=>e("p",null,[t(" By default tables have their background set to "),e("code",null,"transparant"),t("; as a consequence, the sticky header/footer will have no background resulting the table content being visible behind the sticky header/footer."),e("br"),t(" Thus, it is highly recommended you apply a table variant to the "),e("code",null,"table"),t(" or the 'sticky' "),e("code",null,"thead"),t("/"),e("code",null,"tfoot"),t(". ")],-1)),oe=o(()=>e("div",{class:"alert alert-warning"},[e("p",null," If the table is used inside an UU layout container, the header will automatically compensate for the sticky navbar to make sure the table header is just below the navbar. "),e("p",null,[t(" This can cause problems if the "),e("em",null,"nearest scrolling ancestor"),t(" of the table is not the UU layout root container. In which case, you should add "),e("code",{class:"text-nowrap"},".table-sticky-header-top-0"),t(" on the table to force the table to never compensate. ")]),e("p",null,[t(" There are also similar cases where the default "),e("code",null,"top"),t(" setting will force the header behind/on top of another element. In which case you should set the "),e("code",null,"top"),t(" value manually. ")])],-1)),ae={class:"table table-striped table-striped table-sticky-header table-sticky-footer"},se=o(()=>e("thead",{class:"table-primary"},[e("tr",null,[e("th",null,"First name"),e("th",null,"Last name"),e("th",null,"Age")])],-1)),ne=o(()=>e("tfoot",{class:"table-light"},[e("tr",null,[e("th",null,"First name"),e("th",null,"Last name"),e("th",null,"Age")])],-1)),le=o(()=>e("h1",{class:"uu-sidebar-header-linked d-lg-block d-none"},"Variables",-1)),re=o(()=>e("pre",null,`$utilities: map-merge(
  $utilities,
  (
    "cursor": (
      property: cursor,
      class: cursor,
      responsive: true,
      values: auto pointer grab copy default help text none not-allowed progress wait zoom-in zoom-out,
    )
  )
);`,-1)),ie=o(()=>e("h1",{class:"uu-sidebar-header-linked"},"Cursors",-1)),de=o(()=>e("p",null," Bootstrap is suspiciously missing some really useful cursor utility classes, so we added them! ",-1)),ce=o(()=>e("p",null,"The following cursor classes have been added:",-1)),ue={class:"text-nowrap"},he={class:"text-nowrap"},be=o(()=>e("h1",{class:"uu-sidebar-header-linked d-lg-block d-none"},"Variables",-1)),_e=o(()=>e("h1",{class:"uu-sidebar-header-linked"},"Text",-1)),pe=o(()=>e("p",null,"Just 2 small additions:",-1)),me=o(()=>e("ul",null,[e("li",null,[e("code",null,"h{i}.hdr-underlined"),t(" adds an underline to headers; see all the headers on this page. ")]),e("li",{class:"font-serif"},[e("code",null,".font-serif"),t(" sets font to a serif font. (Merriweather) ")])],-1)),ge=$({__name:"extensions",setup(d){function m(r){return r[Math.floor(Math.random()*r.length)]}const v=B(()=>{const r=["John","Jane","Tim","Agnes","Boy","Karin","Margaret","Boris","Mark","Sigrid","Dick","K.C."],g=["Doe","Thatcher","Johnson","Jameson","Fos","Marks","Thijs","Janssen","Denton"],c=[];for(let u=0;u<40;u++)c.push({firstname:m(r),lastname:m(g),age:Math.floor(Math.random()*100)});return c});return(r,g)=>{const c=x,u=w,h=U;return _(),b("div",V,[s(u,null,{default:a(()=>[s(c,null,{default:a(()=>[t("Extensions | Portaldev Bootstrap theme docs")]),_:1})]),_:1}),I,s(l(p),{id:"color",placement:"right","mobile-placement":"bottom"},{"sidebar-button":a(()=>[t(" Variables ")]),sidebar:a(()=>[M,s(l(y),{language:"scss",class:"w-100"},{default:a(()=>[S]),_:1}),E,z,e("ul",D,[e("li",J,[s(h,{class:"nav-link",to:"https://getbootstrap.com/docs/5.2/customize/color/",target:"_blank"},{default:a(()=>[t(" Bootstrap docs ")]),_:1})]),e("li",L,[s(h,{class:"nav-link",to:"https://www.uu.nl/en/organisation/corporate-identity/brand-policy/colour",target:"_blank"},{default:a(()=>[t(" UU Brand policy colour page ")]),_:1})])])]),default:a(()=>[H,e("p",null,[t(" All colors from the "),s(h,{to:"https://www.uu.nl/en/organisation/corporate-identity/brand-policy/colour",target:"_blank"},{default:a(()=>[t(" UU Colour Palette ")]),_:1}),t(" are added to "),N,t(". In addition, "),P,t(" are extended with all colors in "),j,t(", thus ensuring that they are present in all dynamic Bootstrap classes as well. (For example, "),K,t(" and "),q,t(" are now also available). ")]),G,R,O,Q]),_:1}),s(l(p),{id:"table",placement:"right","mobile-placement":"bottom"},{"sidebar-button":a(()=>[t(" Links ")]),sidebar:a(()=>[W,e("ul",X,[e("li",Y,[s(h,{href:"https://getbootstrap.com/docs/5.2/content/tables/",target:"_blank",class:"nav-link"},{default:a(()=>[t(" Bootstrap Table docs ")]),_:1})])])]),default:a(()=>[Z,ee,te,oe,e("table",ae,[se,e("tbody",null,[(_(!0),b(f,null,k(l(v),n=>(_(),b("tr",null,[e("td",null,i(n.firstname),1),e("td",null,i(n.lastname),1),e("td",null,i(n.age),1)]))),256))]),ne])]),_:1}),s(l(p),{id:"cursor",placement:"right","mobile-placement":"bottom"},{"sidebar-button":a(()=>[t(" Variables ")]),sidebar:a(()=>[le,s(l(y),{language:"scss",class:"w-100"},{default:a(()=>[re]),_:1})]),default:a(()=>[ie,de,ce,e("ul",null,[(_(),b(f,null,k(["pointer","not-allowed","progress","wait","grab","copy","zoom-in","zoom-out","help","text","default","auto","none"],n=>e("li",{key:n,class:F("cursor-md-"+n)},[e("code",ue,"cursor-"+i(n),1),t(" and "),e("code",he,"cursor-{sm|md|lg|xl|xxl}-"+i(n),1)],2)),64))])]),_:1}),s(l(p),{id:"text",placement:"right","mobile-placement":"bottom"},{"sidebar-button":a(()=>[t(" Variables ")]),sidebar:a(()=>[be,t(" None ")]),default:a(()=>[_e,pe,me]),_:1})])}}});const $e=A(ge,[["__scopeId","data-v-1b3a7a32"]]);export{$e as default};
