/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='xyz']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,n,e,o){"use strict";function i(t,n){return"sc-"+t.t+(n&&n!==E?"-"+n:"")}function f(t,n){return t+(n?"-h":"-s")}function r(t){return{n:t[0],e:t[1],o:!!t[2],i:!!t[3],f:!!t[4]}}function c(t,n){if(A(n)&&"object"!=typeof n&&"function"!=typeof n){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n);if(t===String||2===t)return n.toString()}return n}function s(t,n,e,o){const i=t.r.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.r.delete(n))}function l(t,n){let e,o,i=null,f=!1,r=!1;for(var c=arguments.length;c-- >2;)L.push(arguments[c]);for(;L.length>0;){let n=L.pop();if(n&&void 0!==n.pop)for(c=n.length;c--;)L.push(n[c]);else"boolean"==typeof n&&(n=null),(r="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(r=!1)),r&&f?i[i.length-1].vtext+=n:null===i?i=[r?{vtext:n}:n]:i.push(r?{vtext:n}:n),f=r}if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(c in n.class)n.class[c]&&L.push(c);n.class=L.join(" "),L.length=0}null!=n.key&&(e=n.key),null!=n.name&&(o=n.name)}return"function"==typeof t?t(n,i||[],q):{vtag:t,vchildren:i,vtext:void 0,vattrs:n,vkey:e,vname:o,c:void 0,s:!1}}function u(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function a(t,n){t.l.has(n)||(t.l.set(n,!0),t.u?t.queue.write(()=>p(t,n)):t.queue.tick(()=>p(t,n)))}function p(t,n,e,o,i,f){if(t.l.delete(n),!t.a.has(n)){if(o=t.p.get(n),e=!o){if((i=t.r.get(n))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{p(t,n)}),void(i.$onRender=i["s-rc"]);o=function r(t,n,e,o,i,f,c){try{o=new(i=t.v(n).d),function s(t,n,e,o,i,f,r){for(r in t.m.set(o,e),t.b.has(e)||t.b.set(e,{}),(f=Object.assign({color:{type:String}},n.properties)).mode={type:String},f)v(t,f[r],e,o,r,i)}(t,i,n,o,e)}catch(e){o={},t.y(e,7,n,!0)}return t.p.set(n,o),o}(t,n,t.g.get(n))}f&&f.then?f.then(()=>d(t,n,o,e)):d(t,n,o,e)}}function d(t,n,e,o){(function i(t,n,e,o){try{const i=n.d.host,r=n.d.encapsulation,c="shadow"===r&&t.M.w;let s,u;if(u=c?e.shadowRoot:e,!e["s-rn"]){t.k(t,t.M,n,e);const i=e["s-sc"];i&&(t.M.C(e,f(i,!0)),o.render||t.M.C(e,f(i)))}if(o.render||o.hostData||i||s){t.x=!0;const n=o.render&&o.render();let i;t.x=!1;const f=t.W.get(e)||{};f.c=u;const s=l(null,i,n);t.W.set(e,t.render(e,f,s,c,r))}e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.x=!1,t.y(n,8,e,!0)}})(t,t.v(n),n,e);try{o?n["s-init"]():k(t.W.get(n))}catch(e){t.y(e,6,n,!0)}}function v(t,n,e,o,i,f,r,s){if(n.type||n.state){const l=t.b.get(e);n.state||(!n.attr||void 0!==l[i]&&""!==l[i]||(r=f&&f.j)&&A(s=r[n.attr])&&(l[i]=c(n.type,s)),e.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=c(n.type,e[i])),"mode"!==i&&delete e[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),n.watchCallbacks&&(l[B+i]=n.watchCallbacks.slice()),b(o,i,function l(n){return(n=t.b.get(t.m.get(this)))&&n[i]},function u(e,o){(o=t.m.get(this))&&(n.state||n.mutable)&&m(t,o,i,e)})}else n.method&&h(e,i,o[i].bind(o))}function m(t,n,e,o,i,f,r){(i=t.b.get(n))||t.b.set(n,i={}),o!==i[e]&&(i[e]=o,t.p.get(n)&&(i[B+e],!t.x&&n["s-rn"]&&a(t,n)))}function h(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}function b(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function y(t,n,e,o,i,f,r){if("class"!==e||f)if("style"===e){for(const t in o)i&&null!=i[t]||(/-/.test(t)?n.style.N(t):n.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?n.style.setProperty(t,i[t]):n.style[t]=i[t])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!f&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.v(n);o&&o.O&&o.O[e]?w(n,e,i):"ref"!==e&&(w(n,e,null==i?"":i),null!=i&&!1!==i||t.M.S(n,e))}else null!=i&&"key"!==e?function c(t,n,e,o="boolean"==typeof e){const i=n!==(n=n.replace(/^xlink\:?/,""));null==e||o&&(!e||"false"===e)?i?t.removeAttributeNS(D,T(n)):t.removeAttribute(n):"function"!=typeof e&&(e=o?"":e.toString(),i?t.setAttributeNS(D,T(n),e):t.setAttribute(n,e))}(n,e,i):(f||t.M.A(n,e)&&(null==i||!1===i))&&t.M.S(n,e);else e=T(e)in n?T(e.substring(2)):T(e[2])+e.substring(3),i?i!==o&&t.M.T(n,e,i):t.M.R(n,e);else if(o!==i){const t=g(o),e=g(i),f=t.filter(t=>!e.includes(t)),r=g(n.className).filter(t=>!f.includes(t)),c=e.filter(n=>!t.includes(n)&&!r.includes(n));r.push(...c),n.className=r.join(" ")}}function g(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function w(t,n,e){try{t[n]=e}catch(t){}}function M(t,n,e,o,i){const f=11===e.c.nodeType&&e.c.host?e.c.host:e.c,r=n&&n.vattrs||O,c=e.vattrs||O;for(i in r)c&&null!=c[i]||null==r[i]||y(t,f,i,r[i],void 0,o,e.s);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?f[i]:r[i])||y(t,f,i,r[i],c[i],o,e.s)}function $(t,n){function e(i,f,r,c,s,l,p,h,b){if(h=f.vchildren[r],u||(d=!0,"slot"===h.vtag&&(a&&n.C(c,a+"-s"),h.vchildren?h.L=!0:h.q=!0)),A(h.vtext))h.c=n.B(h.vtext);else if(h.q)h.c=n.B("");else{if(l=h.c=P||"svg"===h.vtag?n.D("http://www.w3.org/2000/svg",h.vtag):n.P(h.L?"slot-fb":h.vtag),P="svg"===h.vtag||"foreignObject"!==h.vtag&&P,M(t,null,h,P),A(a)&&l["s-si"]!==a&&n.C(l,l["s-si"]=a),h.vchildren)for(s=0;s<h.vchildren.length;++s)(p=e(i,h,s,l))&&n.F(l,p);"svg"===h.vtag&&(P=!1)}return h.c["s-hn"]=v,(h.L||h.q)&&(h.c["s-sr"]=!0,h.c["s-cr"]=m,h.c["s-sn"]=h.vname||"",(b=i&&i.vchildren&&i.vchildren[r])&&b.vtag===h.vtag&&i.c&&o(i.c)),h.c}function o(e,i,f,r){t.H=!0;const l=n.I(e);for(f=l.length-1;f>=0;f--)(r=l[f])["s-hn"]!==v&&r["s-ol"]&&(n.U(r),n.Q(s(r),r,c(r)),n.U(r["s-ol"]),r["s-ol"]=null,d=!0),i&&o(r,i);t.H=!1}function i(t,o,i,f,r,s,l,u){const a=t["s-cr"]||t.$defaultHolder;for((l=a&&n.Z(a)||t).shadowRoot&&n.z(l)===v&&(l=l.shadowRoot);r<=s;++r)f[r]&&(u=A(f[r].vtext)?n.B(f[r].vtext):e(null,i,r,t))&&(f[r].c=u,n.Q(l,u,c(o)))}function f(t,e,i,f){for(;e<=i;++e)A(t[e])&&(f=t[e].c,p=!0,f["s-ol"]?n.U(f["s-ol"]):o(f,!0),n.U(f))}function r(t,n){return t.vtag===n.vtag&&t.vkey===n.vkey&&("slot"!==t.vtag||t.vname===n.vname)}function c(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return n.Z(t["s-ol"]?t["s-ol"]:t)}const l=[];let u,a,p,d,v,m;return function h(b,y,g,w,$,k,C,x,W,j,N,E){if(v=n.z(b),m=b["s-cr"],u=w,a=b["s-sc"],d=p=!1,function l(u,a,p){const d=a.c=u.c,v=u.vchildren,m=a.vchildren;P=a.c&&A(n.G(a.c))&&void 0!==a.c.ownerSVGElement,P="svg"===a.vtag||"foreignObject"!==a.vtag&&P,A(a.vtext)?(p=d["s-cr"]||d.$defaultHolder)?n.J(n.Z(p),a.vtext):u.vtext!==a.vtext&&n.J(d,a.vtext):("slot"!==a.vtag&&M(t,u,a,P),A(v)&&A(m)?function h(t,u,a,p,d,v,m,b){let y=0,g=0,w=u.length-1,M=u[0],$=u[w],k=p.length-1,C=p[0],x=p[k];for(;y<=w&&g<=k;)if(null==M)M=u[++y];else if(null==$)$=u[--w];else if(null==C)C=p[++g];else if(null==x)x=p[--k];else if(r(M,C))l(M,C),M=u[++y],C=p[++g];else if(r($,x))l($,x),$=u[--w],x=p[--k];else if(r(M,x))"slot"!==M.vtag&&"slot"!==x.vtag||o(n.Z(M.c)),l(M,x),n.Q(t,M.c,n.K($.c)),M=u[++y],x=p[--k];else if(r($,C))"slot"!==M.vtag&&"slot"!==x.vtag||o(n.Z($.c)),l($,C),n.Q(t,$.c,M.c),$=u[--w],C=p[++g];else{for(d=null,v=y;v<=w;++v)if(u[v]&&A(u[v].vkey)&&u[v].vkey===C.vkey){d=v;break}A(d)?((b=u[d]).vtag!==C.vtag?m=e(u&&u[g],a,d,t):(l(b,C),u[d]=void 0,m=b.c),C=p[++g]):(m=e(u&&u[g],a,g,t),C=p[++g]),m&&n.Q(s(M.c),m,c(M.c))}y>w?i(t,null==p[k+1]?null:p[k+1].c,a,p,g,k):g>k&&f(u,y,w)}(d,v,a,m):A(m)?(A(u.vtext)&&n.J(d,""),i(d,null,a,m,0,m.length-1)):A(v)&&f(v,0,v.length-1)),P&&"svg"===a.vtag&&(P=!1)}(y,g),d){for(function t(e,o,i,f,r,c,s,u,a,d){for(r=0,c=(o=n.I(e)).length;r<c;r++){if((i=o[r])["s-sr"]&&(f=i["s-cr"]))for(u=n.I(n.Z(f)),a=i["s-sn"],s=u.length-1;s>=0;s--)(f=u[s])["s-cn"]||f["s-nr"]||f["s-hn"]===i["s-hn"]||((3===(d=n.V(f))||8===d)&&""===a||1===d&&null===n.X(f,"slot")&&""===a||1===d&&n.X(f,"slot")===a)&&(l.some(t=>t.Y===f)||(p=!0,f["s-sn"]=a,l.push({_:i,Y:f})));1===n.V(i)&&t(i)}}(g.c),C=0;C<l.length;C++)(x=l[C]).Y["s-ol"]||((W=n.B(""))["s-nr"]=x.Y,n.Q(n.Z(x.Y),x.Y["s-ol"]=W,x.Y));for(t.H=!0,C=0;C<l.length;C++){for(x=l[C],N=n.Z(x._),E=n.K(x._),W=x.Y["s-ol"];W=n.tt(W);)if((j=W["s-nr"])&&j&&j["s-sn"]===x.Y["s-sn"]&&N===n.Z(j)&&(j=n.K(j))&&j&&!j["s-nr"]){E=j;break}(!E&&N!==n.Z(x.Y)||n.K(x.Y)!==E)&&x.Y!==E&&(n.U(x.Y),n.Q(N,x.Y,E))}t.H=!1}return p&&function t(e,o,i,f,r,c,s,l){for(f=0,r=(i=n.I(e)).length;f<r;f++)if(o=i[f],1===n.V(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,c=0;c<r;c++)if(i[c]["s-hn"]!==o["s-hn"])if(l=n.V(i[c]),""!==s){if(1===l&&s===n.X(i[c],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==n.nt(i[c]).trim()){o.hidden=!0;break}t(o)}}(g.c),l.length=0,g}}function k(t,n){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(n?null:t.c),t.vchildren&&t.vchildren.forEach(t=>{k(t,n)}))}function C(t,n,e,o,i){const f=t.V(n);let r,c,s,l;if(i&&1===f){(c=t.X(n,N))&&(s=c.split("."))[0]===o&&((l={}).vtag=t.z(l.c=n),e.vchildren||(e.vchildren=[]),e.vchildren[s[1]]=l,e=l,i=""!==s[2]);for(let f=0;f<n.childNodes.length;f++)C(t,n.childNodes[f],e,o,i)}else 3===f&&(r=n.previousSibling)&&8===t.V(r)&&"s"===(s=t.nt(r).split("."))[0]&&s[1]===o&&((l={vtext:t.nt(n)}).c=n,e.vchildren||(e.vchildren=[]),e.vchildren[s[2]]=l)}function x(t,n,e,o){e.connectedCallback=function(){(function e(t,n,o){t.a.delete(o),t.et.has(o)||(t.et.set(o,!0),o["s-id"]||(o["s-id"]=t.ot()),function i(t,n,e){for(e=n;e=t.M.G(e);)if(t.it(e)){t.ft.has(n)||(t.r.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.queue.tick(()=>{t.g.set(o,function e(t,n,o,i,f){return o.mode||(o.mode=t.rt(o)),o["s-cr"]||t.X(o,j)||t.w&&1===n.ct||(o["s-cr"]=t.B(""),o["s-cr"]["s-cn"]=!0,t.Q(o,o["s-cr"],t.I(o)[0])),t.w||1!==n.ct||(o.shadowRoot=o),1===n.ct&&t.w&&!o.shadowRoot&&t.st(o,{mode:"open"}),i={lt:o["s-id"],j:{}},n.O&&Object.keys(n.O).forEach(e=>{(f=n.O[e].ut)&&(i.j[f]=t.X(o,f))}),i}(t.M,n,o)),t.at(n,o)}))})(t,n,this)},e.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,f,r,s){if(t&&o!==f)for(r in t)if((s=t[r]).ut&&T(s.ut)===T(e)){n[r]=c(s.pt,f);break}})(n.O,this,t,e,o)},e.disconnectedCallback=function(){(function n(t,e){!t.H&&function o(t,n){for(;n;){if(!t.Z(n))return 9!==t.V(n);n=t.Z(n)}}(t.M,e)&&(t.a.set(e,!0),s(t,e),k(t.W.get(e),!0),t.M.R(e),t.dt.delete(e),[t.r,t.vt,t.g].forEach(t=>t.delete(e)))})(t,this)},e["s-init"]=function(){(function n(t,e,o,i,f){if(!t.ft.has(e)&&t.p.get(e)&&!t.a.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.ft.set(e,!0);try{k(t.W.get(e)),(f=t.vt.get(e))&&(f.forEach(t=>t(e)),t.vt.delete(e))}catch(n){t.y(n,4,e)}t.M.C(e,o),s(t,e)}})(t,this,o)},e.forceUpdate=function(){a(t,this)},function i(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o],f=i.mt;1===f||2===f?b(e,o,function n(){return(t.b.get(this)||{})[o]},function n(e){m(t,this,o,c(i.pt,e))}):6===f&&h(e,o,R)})}(t,n.O,e)}function W(t,n,e,o){return function(){const i=arguments;return function f(t,n,e){let o=n[e];const i=t.ht.body;return i?(o||(o=i.querySelector(e)),o||(o=n[e]=t.P(e),t.F(i,o)),o.componentOnReady()):Promise.resolve()}(t,n,e).then(t=>t[o].apply(t,i))}}const j="ssrv",N="ssrc",E="$",O={},S={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},A=t=>null!=t,T=t=>t.toLowerCase(),R=()=>{},L=[],q={forEach:(t,n)=>{t.forEach((t,e,o)=>n(u(t),e,o))},map:(t,n)=>{return t.map((t,e,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(n(u(t),e,o)))}},B="wc-",D="http://www.w3.org/1999/xlink";let P=!1;(function F(t,n,e,o,f,c){function s(t,n){if(!e.customElements.get(t.t)){x(y,u[t.t]=t,n.prototype,c);{const e=n.observedAttributes=[];for(const n in t.O)t.O[n].ut&&e.push(t.O[n].ut)}e.customElements.define(t.t,n)}}const u={html:{}},p={},d=e[t]=e[t]||{},v=function m(t,n,e){t.ael||(t.ael=((t,n,e,o)=>t.addEventListener(n,e,o)),t.rel=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={ht:e,bt:!1,V:t=>t.nodeType,P:t=>e.createElement(t),D:(t,n)=>e.createElementNS(t,n),B:t=>e.createTextNode(t),yt:t=>e.createComment(t),Q:(t,n,e)=>t.insertBefore(n,e),U:t=>t.remove(),F:(t,n)=>t.appendChild(n),C:(t,n)=>t.classList.add(n),I:t=>t.childNodes,Z:t=>t.parentNode,K:t=>t.nextSibling,tt:t=>t.previousSibling,z:t=>T(t.nodeName),nt:t=>t.textContent,J:(t,n)=>t.textContent=n,X:(t,n)=>t.getAttribute(n),gt:(t,n,e)=>t.setAttribute(n,e),wt:(t,n,e,o)=>t.setAttributeNS(n,e,o),S:(t,n)=>t.removeAttribute(n),A:(t,n)=>t.hasAttribute(n),rt:n=>n.getAttribute("mode")||(t.Context||{}).mode,Mt:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.G(t):"body"===o?e.body:"document"===o?e:"window"===o?n:t},T:(n,e,f,r,c,s,l,u)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Mt(n,s):"object"==typeof s?p=s:(u=e.split(":")).length>1&&(p=i.Mt(n,u[0]),e=u[1]),!p)return;let v=f;(u=e.split(".")).length>1&&(e=u[0],v=(t=>{t.keyCode===S[u[1]]&&f(t)})),l=i.bt?{capture:!!r,passive:!!c}:!!r,t.ael(p,e,v,l),d||o.set(n,d={}),d[a]=(()=>{p&&t.rel(p,e,v,l),d[a]=null})},R:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},st:(t,n)=>t.attachShadow(n)};return i.w=!!i.ht.documentElement.attachShadow,i.$t=((t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o))),i.G=((t,n)=>(n=i.Z(t))&&11===i.V(n)?n.host:n),i}(d,e,o);n.isServer=n.isPrerender=!(n.isClient=!0),n.window=e,n.location=e.location,n.document=o,n.resourcesUrl=n.publicPath=f,d.h=l,d.Context=n;const h=e["s-defined"]=e.$definedCmps=e["s-defined"]||e.$definedCmps||{};let b=0;const y={M:v,kt:s,Ct:n.emit,v:t=>u[v.z(t)],xt:t=>n[t],isClient:!0,it:t=>!(!h[v.z(t)]&&!y.v(t)),ot:()=>t+b++,y:(t,n,e)=>void 0,Wt:t=>(function n(t,e,o){return{create:W(t,e,o,"create"),componentOnReady:W(t,e,o,"componentOnReady")}})(v,p,t),queue:n.queue=function g(t,n){function e(t){for(let n=0;n<t.length;n++)try{t[n](f())}catch(t){}t.length=0}function o(t,n){let e,o=0;for(;o<t.length&&(e=f())<n;)try{t[o++](e)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function i(){a++,e(s);const n=f()+7*Math.ceil(a*(1/22));o(l,n),o(u,n),l.length>0&&(u.push(...l),l.length=0),(p=s.length+l.length+u.length>0)?t.raf(i):a=0}const f=()=>n.performance.now(),r=Promise.resolve(),c=[],s=[],l=[],u=[];let a=0,p=!1;return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{tick(t){c.push(t),1===c.length&&r.then(()=>e(c))},read(n){s.push(n),p||(p=!0,t.raf(i))},write(n){l.push(n),p||(p=!0,t.raf(i))}}}(d,e),at:function w(t,n,e){if(t.d)a(y,n);else{const e="string"==typeof t.jt?t.jt:t.jt[n.mode],o=2===t.ct||1===t.ct&&!v.w;import(f+e+(o?".sc":"")+".js").then(e=>{try{t.d=e[(t=>T(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e,i,f){if(i){const e=n.t+(f||E);if(!n[e]){const o=t.P("template");n[e]=o,o.innerHTML=`<style>${i}</style>`,t.F(t.ht.head,o)}}}(v,t,t.ct,t.d.style,t.d.styleMode)}catch(n){t.d=class{}}a(y,n)}).catch(t=>void 0)}},r:new WeakMap,Nt:new WeakMap,et:new WeakMap,dt:new WeakMap,ft:new WeakMap,m:new WeakMap,g:new WeakMap,p:new WeakMap,a:new WeakMap,l:new WeakMap,vt:new WeakMap,Et:new WeakMap,W:new WeakMap,b:new WeakMap};y.render=$(y,v);const M=v.ht.documentElement;M["s-ld"]=[],M["s-rn"]=!0,M["s-init"]=(()=>{y.ft.set(M,d.loaded=y.u=!0),v.$t(e,"appload",{detail:{namespace:t}})}),function k(t,n,e){const o=e.querySelectorAll(`[${j}]`),i=o.length;let f,r,c,s,l,u;if(i>0)for(t.ft.set(e,!0),s=0;s<i;s++)for(f=o[s],r=n.X(f,j),(c={}).vtag=n.z(c.c=f),t.W.set(f,c),l=0,u=f.childNodes.length;l<u;l++)C(n,f.childNodes[l],c,r,!0)}(y,v,M),y.k=((t,n,e,o)=>{(function f(t,n,e,o){const f=2===e.ct||1===e.ct&&!t.M.w;let r=e.t+o.mode,c=e[r];if(f&&(o["s-sc"]=i(e,o.mode)),c||(c=e[r=e.t+E],f&&(o["s-sc"]=i(e))),c){let i=n.ht.head;if(n.w)if(1===e.ct)i=o.shadowRoot;else{let t=o;for(;t=n.Z(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let f=t.Nt.get(i);if(f||t.Nt.set(i,f={}),!f[r]){let t;{t=c.content.cloneNode(!0),f[r]=!0;const e=i.querySelectorAll("[data-styles]");n.Q(i,t,e.length&&e[e.length-1].nextSibling||i.firstChild)}}}})(t,n,e,o)}),(d.components||[]).map(t=>{const n=function e(t,n,o){const i={t:t[0],O:{color:{ut:"color"}}};i.jt=t[1];const f=t[3];if(f)for(n=0;n<f.length;n++)o=f[n],i.O[o[0]]={mt:o[1],Ot:!!o[2],ut:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,pt:o[4]};return i.ct=t[4],t[5]&&(i.St=t[5].map(r)),i}(t);return u[n.t]=n}).forEach(t=>s(t,class extends HTMLElement{})),function N(t,n,e,o,i,f){if(n.componentOnReady=((n,e)=>{if(!n.nodeName.includes("-"))return e(null),!1;const o=t.v(n);if(o)if(t.ft.has(n))e(n);else{const o=t.vt.get(n)||[];o.push(e),t.vt.set(n,o)}return!!o}),i){for(f=i.length-1;f>=0;f--)n.componentOnReady(i[f][0],i[f][1])&&i.splice(f,1);for(f=0;f<o.length;f++)if(!e[o[f]].componentOnReady)return;for(f=0;f<i.length;f++)i[f][1](null);i.length=0}}(y,d,e,e["s-apps"],e["s-cr"]),d.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"xyz","hydrated");