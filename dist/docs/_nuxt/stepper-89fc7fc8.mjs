import{_ as x,d as S,u as $,r as g,o as z,a as _,b as T,c as C,e as d,w as c,f as e,v as I,p as N,g as k,h as o,i as a,j as A,t as y}from"./entry-8cb1dcc6.mjs";const B=S({__name:"stepper",setup(p,{expose:r}){r();const i=$(),t=g(`<div class="stepper">
    <ul>
        <li>
            <a class="stepper-item">
                <span class="stepper-bubble stepper-bubble-largest">1</span>
                <span>Hello</span>
            </a>
        </li>
        <li>
            <a class="stepper-item">
                <span class="stepper-bubble stepper-bubble-largest">2</span>
                <span>World</span>
            </a>
        </li>
        <li>
            <a class="stepper-item">
                <span class="stepper-bubble stepper-bubble-largest">3</span>
                <span>This has children</span>
            </a>
            <ul>
                <li>
                    <a class="stepper-item">
                        <span class="stepper-bubble stepper-bubble-large"></span>
                        <span>Child 1</span>
                    </a>
                </li>
                <li>
                    <a class="stepper-item">
                        <span class="stepper-bubble stepper-bubble-large"></span>
                        <span>Child 2</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>`),v=g(`<div class="d-md-none">
    <button
            id="stepper-button"
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#stepper"
            aria-controls="stepper"
    >
        Stepper
    </button>
</div>

<div id="stepper" class="offcanvas-md offcanvas-start" tabindex="-1" aria-labelledby="stepperLabel">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="stepperLabel">Stepper</h5>
        <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#stepper"
                aria-label="Close"
        ></button>
    </div>
    <div class="offcanvas-body">
        <div class="stepper">
            <ul>
                <!-- Stepper content -->
            </ul>
        </div>
    </div>
</div>`);z(()=>{var l;const s=document.getElementById("content");(l=i.$bootstrap.ScrollSpy.getInstance(s))==null||l.refresh(),s==null||s.addEventListener("activate.bs.scrollspy",u=>{var h;const w=document.querySelectorAll(".stepper-item");let m=!0;for(const f of w)f.classList.contains("active")&&(m=!1),(h=f.querySelector(".stepper-bubble"))==null||h.classList.toggle("complete",m)})});const n={nuxt:i,example1:t,example2:v,Prism:I};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),b=p=>(N("data-v-455e13bc"),p=p(),k(),p),P={class:"uu-content"},V=a("Stepper | Portaldev Bootstrap theme docs"),L=b(()=>e("div",{class:"uu-hero"},[e("h1",null,"Stepper")],-1)),U={class:"uu-container flex-nowrap"},Y=o('<div class="stepper-container" data-v-455e13bc><div class="stepper" id="stepper" data-v-455e13bc><ul data-v-455e13bc><li data-v-455e13bc><a class="stepper-item" href="#introduction" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc>1</span><span data-v-455e13bc>Introduction</span></a></li><li data-v-455e13bc><a class="stepper-item" href="#usage" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc>2</span><span data-v-455e13bc>Usage</span></a></li><li data-v-455e13bc><a class="stepper-item" href="#tree" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc>3</span><span data-v-455e13bc>Tree</span></a></li><li data-v-455e13bc><a class="stepper-item" href="#status" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc>4</span><span data-v-455e13bc>Status</span></a><ul data-v-455e13bc><li data-v-455e13bc><a class="stepper-item" href="#text-status" data-v-455e13bc><span class="stepper-bubble stepper-bubble-large" data-v-455e13bc></span><span data-v-455e13bc>Text</span></a><ul data-v-455e13bc><li data-v-455e13bc><a class="stepper-item" href="#incomplete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-medium" data-v-455e13bc></span><span data-v-455e13bc>Active</span></a></li><li data-v-455e13bc><a class="stepper-item" href="#complete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-medium" data-v-455e13bc></span><span data-v-455e13bc>Disabled</span></a></li></ul></li><li data-v-455e13bc><a class="stepper-item" href="#bubble-status" data-v-455e13bc><span class="stepper-bubble stepper-bubble-large" data-v-455e13bc></span><span data-v-455e13bc>Bubble</span></a><ul data-v-455e13bc><li data-v-455e13bc><a class="stepper-item" href="#incomplete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-medium" data-v-455e13bc></span><span data-v-455e13bc>Incomplete</span></a></li><li data-v-455e13bc><a class="stepper-item" href="#complete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-medium" data-v-455e13bc></span><span data-v-455e13bc>Complete</span></a></li></ul></li></ul></li><li data-v-455e13bc><a class="stepper-item" href="#responsive" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc>5</span><span data-v-455e13bc>Responsive</span></a></li><li data-v-455e13bc><a class="stepper-item" href="#variables" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc>6</span><span data-v-455e13bc>Variables</span></a></li></ul></div></div>',1),q={class:"scrollspy-content",id:"content","data-bs-target":"#stepper","data-bs-spy":"scroll"},D=o('<h1 id="introduction" data-v-455e13bc>Introduction</h1><p data-v-455e13bc> The stepper is meant for navigation in a multi-page process (forms) to visualize where a user is in a process and (optionally) navigate between the steps. In addition, it can provide feedback on the status of the individual steps (e.g. if a step is complete, incomplete or not yet started). </p><div class="alert alert-info mb-4" data-v-455e13bc><p class="fw-bold" data-v-455e13bc> Note </p><p class="mb-0" data-v-455e13bc> This component was designed for multi-page applications, thus the actual component itself is <i data-v-455e13bc>static</i>. For demo purposes this page uses custom js/css and Bootstrap&#39;s ScrollSpy to demo the stepper in a single page; normally you need to program any dynamic changes yourself. </p></div><h1 id="usage" data-v-455e13bc>Usage</h1>',4),j=o('<p data-v-455e13bc> Some notes: </p><ul data-v-455e13bc><li data-v-455e13bc><code data-v-455e13bc>.stepper-item</code> elements don&#39;t have to be a <code data-v-455e13bc>a</code> tag, <code data-v-455e13bc>div</code> or <code data-v-455e13bc>span</code> work just as well. </li><li data-v-455e13bc> Bubbles can optionally have content (e.g. step number), however it is recommended (for readability) you limit this to the top-level items only. </li><li data-v-455e13bc> Both <code data-v-455e13bc>.stepper-bubble</code> and <code data-v-455e13bc>.stepper-bubble-{size}</code> are required. </li><li data-v-455e13bc> Nesting <code data-v-455e13bc>ul</code> elements for nested items is not strictly necessary (see below for more), but is recommended </li></ul><h1 id="tree" class="mt-3" data-v-455e13bc>Tree</h1><p data-v-455e13bc> By default, the stepper supports five levels of &#39;depth&#39;. This is done by setting one of five bubble &#39;size&#39; classes: </p><ul data-v-455e13bc><li data-v-455e13bc><code data-v-455e13bc>.stepper-bubble-largest</code></li><li data-v-455e13bc><code data-v-455e13bc>.stepper-bubble-large</code></li><li data-v-455e13bc><code data-v-455e13bc>.stepper-bubble-medium</code></li><li data-v-455e13bc><code data-v-455e13bc>.stepper-bubble-small</code></li><li data-v-455e13bc><code data-v-455e13bc>.stepper-bubble-smallest</code></li></ul><p data-v-455e13bc> It is recommended to use the largest size for your root items, going down a level for each level of tree depth. If you only have 3 levels of depth, it&#39;s possible to skip the large and small sizes for increased distinction between levels. </p><p data-v-455e13bc> As the bubbles are responsible for creating the visual hierarchy, using nested <code data-v-455e13bc>ul</code> elements is not required. In other words, a flat <code data-v-455e13bc>ul</code> with different sizes is possible. <br data-v-455e13bc> However, for accessibility reasons it is recommended you use nested lists (mostly because screenreaders understand those better). </p><h1 id="status" class="mt-3" data-v-455e13bc>Status</h1><p data-v-455e13bc> The main function of the stepper (besides navigation) is status indications. These statuses can be represented using either the text styling or the bubble styling. In total, there are 5 statuses, 4 of which are achieved using modifier classes. The fifth is the default styling, which represents a navigable unstarted step. </p><div class="row" data-v-455e13bc><div class="col-8 pe-4" data-v-455e13bc><h2 id="text-status" data-v-455e13bc>Text</h2><h3 id="active" data-v-455e13bc>Active</h3><p data-v-455e13bc> The active state means &#39;you are here&#39;, and is achieved by adding the <code data-v-455e13bc>.active</code> class to the <code data-v-455e13bc>.stepper-item</code> element. This status can be mixed with both bubble status modifiers. (Well, also with disabled, but that doesn&#39;t make any sense) </p><h3 id="disabled" data-v-455e13bc>Disabled</h3><p data-v-455e13bc> The disabled state means &#39;this step exists, but is not navigable&#39;, for steps that require other steps to be completed first. Use by adding <code data-v-455e13bc>.disabled</code> to the <code data-v-455e13bc>.stepper-item</code> element. </p><h2 id="bubble-status" data-v-455e13bc>Bubble</h2><h3 id="incomplete" data-v-455e13bc>Incomplete</h3><p data-v-455e13bc> An incomplete status means a user has reached this step, but has not completed it yet. </p><p data-v-455e13bc> Use by adding the <code data-v-455e13bc>.incomplete</code> class to either the <code data-v-455e13bc>.item-stepper</code> element or the <code data-v-455e13bc>.stepper-bubble</code> element directly. </p><h3 id="complete" data-v-455e13bc>Complete</h3><p data-v-455e13bc> An incomplete status means a user has completed this step. </p><p data-v-455e13bc> Use by adding the <code data-v-455e13bc>.complete</code> class to either the <code data-v-455e13bc>.item-stepper</code> element or the <code data-v-455e13bc>.stepper-bubble</code> element directly. </p></div><div class="col-4" data-v-455e13bc><h2 class="mb-3" data-v-455e13bc>Examples</h2><div class="stepper" data-v-455e13bc><ul data-v-455e13bc><li data-v-455e13bc><span class="stepper-item active" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc></span><span data-v-455e13bc>Active step</span></span></li><li data-v-455e13bc><span class="stepper-item active incomplete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc></span><span data-v-455e13bc>Active incompleted step</span></span></li><li data-v-455e13bc><span class="stepper-item active complete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc></span><span data-v-455e13bc>Active completed step</span></span></li><li data-v-455e13bc><span class="stepper-item disabled" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc></span><span data-v-455e13bc>Disabled step</span></span></li><li data-v-455e13bc><span class="stepper-item incomplete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc></span><span data-v-455e13bc>Incompleted step</span></span></li><li data-v-455e13bc><span class="stepper-item complete" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc></span><span data-v-455e13bc>Completed step</span></span></li><li data-v-455e13bc><span class="stepper-item" data-v-455e13bc><span class="stepper-bubble stepper-bubble-largest" data-v-455e13bc></span><span data-v-455e13bc>Unreached step</span></span></li></ul></div></div></div><h1 id="responsive" class="mt-3" data-v-455e13bc>Responsive</h1>',11),E=a(" This component has no native responsive abilities, as it's vertical layout would not really work as inline content on a small screen. Instead, it is recommended to wrap the stepper in a responsive Bootstrap "),H=a("Offcanvas"),O=a(" component. "),F=b(()=>e("p",null,[a(" An example that moves the stepper into an Offcanvas from breakpoint "),e("code",null,"md"),a(" and lower: ")],-1)),R=b(()=>e("h1",{id:"variables",class:"mt-3"},"Variables",-1)),W=b(()=>e("p",null," The following variables are availabe. Not all of them are also exposed as CSS variables, which is indicated by the 'CSS var?' column. ",-1)),M=b(()=>e("p",null,[a(" CSS vars can be overriden by setting them in CSS under the "),e("code",null,".stepper"),a(" class, using the default Bootstrap CSS var prefix. For example: ")],-1)),G=b(()=>e("pre",null,`.stepper {
    --bs-stepper-complete-bg: pink;
}`,-1)),J=o('<table class="table" data-v-455e13bc><thead data-v-455e13bc><tr data-v-455e13bc><th data-v-455e13bc>Variable</th><th data-v-455e13bc>Default value</th><th data-v-455e13bc>Comment</th><th data-v-455e13bc>CSS Var?</th></tr></thead><tbody data-v-455e13bc><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-disabled-color</code></td><td data-v-455e13bc><code data-v-455e13bc>$text-muted</code></td><td data-v-455e13bc></td><td data-v-455e13bc>Yes</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-inactive-bg</code></td><td class="text-nowrap" data-v-455e13bc><code data-v-455e13bc>$gray-400</code></td><td data-v-455e13bc> Color for the background of bubbles and the vertical line </td><td data-v-455e13bc>Yes</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-complete-bg</code></td><td class="text-nowrap" data-v-455e13bc><code data-v-455e13bc>$green-300</code></td><td data-v-455e13bc> Color for the background of completed bubbles </td><td data-v-455e13bc>Yes</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-incomplete-bg</code></td><td class="text-nowrap" data-v-455e13bc><code data-v-455e13bc>$yellow</code></td><td data-v-455e13bc> Color for the background of incompleted bubbles </td><td data-v-455e13bc>Yes</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-min-width</code></td><td data-v-455e13bc><code data-v-455e13bc>250px</code></td><td data-v-455e13bc></td><td data-v-455e13bc>Yes</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-padding-y</code></td><td data-v-455e13bc><code data-v-455e13bc>0.75rem</code></td><td data-v-455e13bc> Padding between items </td><td data-v-455e13bc>Yes</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-max-indent</code></td><td data-v-455e13bc><code data-v-455e13bc>3rem</code></td><td data-v-455e13bc> The maximum amount of horizontal padding between root items and child items. All padding is evenly spread over the 5 levels of depth. </td><td data-v-455e13bc>No</td></tr><tr data-v-455e13bc><td class="text-nowrap" data-v-455e13bc><code data-v-455e13bc>$stepper-bubble-max-size</code></td><td data-v-455e13bc><code data-v-455e13bc>2rem</code></td><td data-v-455e13bc> The size of the largest bubble. </td><td data-v-455e13bc>No</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-bubble-min-size</code></td><td data-v-455e13bc><code data-v-455e13bc>.3rem</code></td><td data-v-455e13bc> Not actually the smallest size, but a calculation helper:<br data-v-455e13bc><code data-v-455e13bc>($stepper-bubble-max-size - $stepper-bubble-min-size) * math.div($size-number, $stepper-bubble-num-sizes) + $stepper-bubble-min-size;</code><br data-v-455e13bc></td><td data-v-455e13bc>No</td></tr><tr data-v-455e13bc><td data-v-455e13bc><code data-v-455e13bc>$stepper-bubble-size-map</code></td><td class="text-nowrap" data-v-455e13bc><code data-v-455e13bc> (<br data-v-455e13bc> &#39;largest&#39;: 5,<br data-v-455e13bc> &#39;large&#39;: 4, <br data-v-455e13bc> &#39;medium&#39;: 3, <br data-v-455e13bc> &#39;normal&#39;: 3, <br data-v-455e13bc> &#39;small&#39;: 2, <br data-v-455e13bc> &#39;smallest&#39;: 1, <br data-v-455e13bc> ) </code></td><td data-v-455e13bc> A map of all sizes, the number represents <code data-v-455e13bc>$size-number</code> in the calculation above. </td><td data-v-455e13bc>No</td></tr><tr data-v-455e13bc><td class="text-nowrap" data-v-455e13bc><code data-v-455e13bc>$stepper-bubble-num-sizes</code></td><td data-v-455e13bc><code data-v-455e13bc>5</code></td><td data-v-455e13bc> Another calculation helper, should match the highest <code data-v-455e13bc>$size-number</code> in <code data-v-455e13bc>$stepper-bubble-size-map</code></td><td data-v-455e13bc>No</td></tr></tbody></table>',1);function K(p,r,i,t,v,n){const s=_("Title"),l=_("Head"),u=A;return T(),C("div",P,[d(l,null,{default:c(()=>[d(s,null,{default:c(()=>[V]),_:1})]),_:1}),L,e("div",U,[Y,e("div",q,[D,d(t.Prism,{language:"html",class:"w-100"},{default:c(()=>[a(y(t.example1),1)]),_:1}),j,e("p",null,[E,d(u,{to:"https://getbootstrap.com/docs/5.2/components/offcanvas/",target:"_blank"},{default:c(()=>[H]),_:1}),O]),F,d(t.Prism,{language:"html",class:"w-100"},{default:c(()=>[a(y(t.example2),1)]),_:1}),R,W,M,d(t.Prism,{lang:"css"},{default:c(()=>[G]),_:1}),J])])])}var X=x(B,[["render",K],["__scopeId","data-v-455e13bc"]]);export{X as default};
