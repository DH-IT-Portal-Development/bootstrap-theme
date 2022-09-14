import{A as c,b as a,o as l,e as h,f as o,w as s,h as e,x as n,j as t,k as p}from"./entry.8fb6a948.js";const u=""+new URL("cover3.caa8ad13.jpg",import.meta.url).href,m={},g={class:"w-100"},_=t("Portaldev Bootstrap theme docs"),b=e("div",{class:"uu-cover align-items-center"},[e("img",{class:"uu-cover-image",alt:"cover",src:u}),e("div",{class:"uu-cover-copyright"}," Cover by Dick Boetekees "),e("div",{class:"uu-cover-hero"},[e("h1",null,"Home")])],-1),v={class:"uu-sidebar-container"},f=n('<div class="uu-sidebar"><button class="uu-sidebar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-expanded="false"> Toggle sidebar mobile </button><div id="sidebar" class="uu-sidebar-collapse collapse"><h2>Disclaimer</h2><p class="mt-2"> The UU branding is protected by copyright, with Utrecht University having the right of use. This is why the corporate style cannot be used and/or applied by third parties without permission granted in advance. </p><p> This theme&#39;s code itself is available under the EUPL v1.2 license, and can be used in other projects as long as it&#39;s not used to recreate the UU branding outside the UU without permission granted in advance. </p><h2> Cat! </h2><img src="https://thecatapi.com/api/images/get?format=src" alt="Cat!" class="mt-2"><p> Every project must contain a cat </p></div></div>',1),y={class:"uu-sidebar-content"},S=n(`<p> Welcome to the official docs (/dev environment) for the DH-IT Portaldev UU Bootstrap theme! </p><p> This documentation can be used to review changes from standard Bootstrap, extra components and more! </p><h2 class="hdr-underlined"> Quick start </h2><p>The theme can be used as part of your larger SASS setup, or standalone by including the compiled CSS.</p><p>Bootstrap 5 is included in this library (either as a dependency or bundled), you don&#39;t need to import it&#39;s CSS separately. The JS side does need manual loading, more info down below.</p><h3 class="hdr-underlined"> CSS </h3><h4 class="hdr-underlined"> Using SASS (recommended) </h4><p> Using SASS is recommended for easily extending and overriding variables. </p><p> Add the library using yarn, replacing <code>&lt;tag&gt;</code> with the latest release tag. (Or leave out the tag to track develop) </p><pre class="code"><code># Using SSH
yarn add &quot;git+ssh://git@github.com/DH-IT-Portal-Development/bootstrap-theme.git#&lt;tag&gt;&quot;
# Using HTTPS
yarn add &quot;git+https://git@github.com/DH-IT-Portal-Development/bootstrap-theme.git#&lt;tag&gt;&quot;</code></pre><p class="mt-3"> Then, in your main SASS file, include the main file: </p><pre class="code"><code>// Put any variable overrides here

// Import the library
@import &quot;node_modules/uu-bootstrap/scss/bootstrap&quot;;</code></pre><h4 class="hdr-underlined mt-4"> Using compiled CSS </h4><p> If you can&#39;t use SASS, you can simply include the compiled versions in <code>/dist/css/bootstrap(.min).css</code></p><h3 class="mt-3 hdr-underlined"> Fonts </h3>`,15),w=t(" We don't ship the required fonts (Open Sans and Merriweather) with this library. Please supply them yourself. "),T=t(" Hint "),U=e("p",null,[t(" By default, we expect fonts to be hosted from "),e("code",null,"/fonts/{font-name}"),t(". This can be overriden by the "),e("code",null,"$merriweather-font-dir"),t(" and "),e("code",null,"$open-sans-font-dir"),t(" Sass variables. ")],-1),x=e("h3",{class:"hdr-underlined"}," JavaScript ",-1),B=e("p",null,[t("The Bootstrap javascript files aren't bundled with this project. You'll either have to retrieve them from "),e("code",null,"node_modules"),t(" (if using sass/yarn), or download them from Bootstrap's website.")],-1);function k(C,H){const i=a("Title"),r=a("Head"),d=p;return l(),h("div",g,[o(r,null,{default:s(()=>[o(i,null,{default:s(()=>[_]),_:1})]),_:1}),b,e("div",v,[f,e("div",y,[S,e("p",null,[w,o(d,{to:"https://google-webfonts-helper.herokuapp.com/fonts",target:"_blank"},{default:s(()=>[T]),_:1})]),U,x,B])])])}const q=c(m,[["render",k]]);export{q as default};
