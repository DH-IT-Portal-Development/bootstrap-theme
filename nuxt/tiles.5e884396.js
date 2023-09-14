import{T as f,H as g}from"./components.da906116.js";import{v as x}from"./vue-prism-component.common.6933ebda.js";import{a as w,r as c,b as l,e as d,w as u,h as e,U as o,aH as i,u as r,a9 as h,f as s,o as n,P as a}from"./entry.21858a4c.js";import"./composables.e4889afb.js";const k={class:"uu-content"},y=e("div",{class:"uu-hero"},[e("h1",null,"Tiles")],-1),S=e("div",{class:"uu-container"},[e("div",{class:"col-12"},"Tiles is an responsive navigational component.")],-1),T={class:"uu-container flex-nowrap"},V={class:"tiles"},C={class:"uu-container"},$={class:"col-12"},B=h('<h2 id="usage">Basic usage</h2><p> Tiles consist of a (<code>div</code>) container element with the <code>.tiles</code> class, containing a set of tiles with the <code>.tile</code> class. The actual tile element does not matter much, but it is recommended to use an <code>a</code> element. </p><p> If using a <code>span</code> or <code>div</code> element, you might want to manually add <code class="text-nowrap">.cursor-pointer</code> to the element. </p>',3),N=h('<div class="uu-container"><div class="col-12"><h2>Tile layout</h2><p> By default, tile contents will be centered using (column) FlexBox, so the standard methods for layouting can be used. A few examples: </p><div class="tiles"><a class="tile"><span>Default</span><span>Behaviour</span><span>Example</span></a><a class="tile"><span class="mb-auto">Margin</span><span>Auto</span><span>Example</span></a><a class="tile justify-content-between"><span>Flex</span><span>Between</span><span>Example</span></a><a class="tile justify-content-evenly"><span>Flex</span><span>Evenly</span><span>Example</span></a></div></div></div>',1),D={class:"uu-container"},E={class:"col-12"},A=e("h2",{id:"responsive"},"Responsive behaviour",-1),F=e("p",null," Tiles will automatically change the amount of tiles depending on screen width. The defaults can be viewed in the table below. ",-1),H=e("p",null,[s(" It is also possible to override the amount of tiles using the classes also listed in the table. "),e("code",null,"n"),s(" can be a number between 1 and 12 (inclusive). Alternatively, one can set an arbitrary number using the "),e("code",{class:"text-nowrap"},"bs-tiles-n-#{$breakpoint}"),s(" CSS variable per breakpoint, or globally using "),e("code",{class:"text-nowrap"},"bs-tiles-n"),s(". ")],-1),P={class:"table"},j=e("th",null,"Breakpoint",-1),I=e("th",null,"Default tiles per row",-1),Y=e("th",null,"CSS class",-1),L={class:"uu-container"},M={class:"col-12"},R=e("h2",{id:"variables"},"Variables",-1),U=e("p",null,[s(" The following variables are available. Not all of them are also exposed as CSS variables, which is indicated by the 'CSS var?' column. Color related variables also have dark theme variant SCSS variable, all with the "),e("code",null,"-dark"),s(" postfix. This is indicated by the 'Dark variant?' column. ")],-1),q=e("p",null,[s(" CSS vars can be overriden by setting them in CSS under the "),e("code",null,".tiles"),s(" class, using the default Bootstrap CSS var prefix. ")],-1),z={class:"table table-striped"},G=e("thead",null,[e("tr",null,[e("th",null,"Variable"),e("th",null,"Default value"),e("th",null,"Comment"),e("th",null,"CSS Var?"),e("th",null,"Dark variant?")])],-1),ee=w({__name:"tiles",setup(J){const p=c([...Array(5).keys()]),m=c(`<div class="tiles">
    <a class="tile">
        <strong class="mb-auto">Tile 1</strong>
        <span>Something </span>
    </a>
    <a class="tile">
        <strong class="mb-auto">Tile 2</strong>
        <span>Something </span>
    </a>
</div>`),v=c([{variable:"$tiles-gap",defaultValue:"0.0625rem",comment:"The gap between tiles",cssVar:!0,dark:!1},{variable:"$tiles-padding",defaultValue:"1rem",comment:"The padding applied to individual tiles",cssVar:!0,dark:!1},{variable:"$tiles-bg",defaultValue:"$light",comment:"The background of a tile. $dark for dark mode",cssVar:!0,dark:!0},{variable:"$tiles-color",defaultValue:`
color-contrast(
$tiles-color
)`,comment:"The text color of a tile",cssVar:!0,dark:!0},{variable:"$tiles-hover-bg",defaultValue:"$primary",comment:"The background of a tile when hovering over it.",cssVar:!0,dark:!0},{variable:"$tiles-hover-color",defaultValue:`
color-contrast(
$tiles-hover-bg
)`,comment:"The text color of a tile when hovering over it.",cssVar:!0,dark:!0},{variable:"$tiles-n-breakpoints-map",defaultValue:`(
    xs: 2,
    sm: 4,
    md: 5,
    lg: 6,
    xl: 7,
)`,comment:"Controls the default tiles per row per breakpoint",cssVar:!1,dark:!1}]);return(K,O)=>{const _=f,b=g;return n(),l("div",k,[d(b,null,{default:u(()=>[d(_,null,{default:u(()=>[s("Tiles | Portaldev Bootstrap theme docs")]),_:1})]),_:1}),y,S,e("div",T,[e("div",V,[(n(!0),l(o,null,i(r(p),t=>(n(),l("a",{key:t,class:"tile"},[e("strong",null,"Tile "+a(t),1)]))),128))])]),e("div",C,[e("div",$,[B,d(r(x),{language:"html",class:"w-100"},{default:u(()=>[s(a(r(m)),1)]),_:1})])]),N,e("div",D,[e("div",E,[A,F,H,e("table",P,[e("thead",null,[e("tr",null,[j,(n(),l(o,null,i(["xs","sm","md","lg","xl"],t=>e("th",null,a(t),1)),64))])]),e("tbody",null,[e("tr",null,[I,(n(),l(o,null,i([2,4,5,6,7],t=>e("td",null,a(t),1)),64))]),e("tr",null,[Y,(n(),l(o,null,i(["xs","sm","md","lg","xl"],t=>e("td",null," .tiles-n-"+a(t)+"-{n} ",1)),64))])])])])]),e("div",L,[e("div",M,[R,U,q,e("table",z,[G,e("tbody",null,[(n(!0),l(o,null,i(r(v),t=>(n(),l("tr",{key:t.variable},[e("td",null,[e("code",null,a(t.variable),1)]),e("td",null,[e("code",null,a(t.defaultValue),1)]),e("td",null,a(t.comment),1),e("td",null,a(t.cssVar?"Yes":"No"),1),e("td",null,a(t.dark?"Yes":"No"),1)]))),128))])])])])])}}});export{ee as default};
