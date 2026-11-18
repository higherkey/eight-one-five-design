var fg=Object.defineProperty;var du=i=>{throw TypeError(i)};var ug=(i,e,t)=>e in i?fg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var E=(i,e,t)=>ug(i,typeof e!="symbol"?e+"":e,t),Ec=(i,e,t)=>e.has(i)||du("Cannot "+t);var Oe=(i,e,t)=>(Ec(i,e,"read from private field"),t?t.call(i):e.get(i)),bt=(i,e,t)=>e.has(i)?du("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Tt=(i,e,t,n)=>(Ec(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Fr=(i,e,t)=>(Ec(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function hg(i){return i==="localhost"||i==="127.0.0.1"}function dg(){if(typeof window<"u"&&hg(window.location.hostname)){const i=new URLSearchParams(window.location.search).get("server");if(i)return i}return"https://colyseus-games-server.onrender.com"}function pg(i){return new Promise(e=>i.onStateChange.once(()=>e()))}async function mg(i,e=3e3){const t=i.replace(/^ws(s?):/,"http$1:").replace(/\/$/,"");try{return(await fetch(`${t}/health`,{signal:AbortSignal.timeout(e)})).ok}catch{return!1}}const _i=0,Eo=1,bs=2,wi=3,Pf=4,br=i=>i>=wi,gr=16,qs=12,Ns=gr*2+1,Os=qs*2+1,ht=40,eo=12;function Pa(i){i.rng=i.rng+1831565813|0;let e=Math.imul(i.rng^i.rng>>>15,1|i.rng);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}function qd(i){const e={rng:i|0};return()=>Pa(e)}function Sc(){return globalThis.crypto.getRandomValues(new Uint32Array(1))[0]}const Ys=(i,e,t)=>t*i.cols+e,Hi=(i,e)=>({x:(e%i.cols+.5)*ht,y:(Math.floor(e/i.cols)+.5)*ht}),xl=(i,e,t)=>Ys(i,e*2+1,t*2+1);function If(i,e,t){const n=Math.floor(e/ht),r=Math.floor(t/ht);return n<0||n>=i.cols||r<0||r>=i.rows?wi:i.tiles[r*i.cols+n]}function to(i,e,t){const n=Math.max(0,Math.min(i.cols-1,Math.floor(e/ht)));return Math.max(0,Math.min(i.rows-1,Math.floor(t/ht)))*i.cols+n}function gg(i,e,t){const n=If(i,e,t);return br(n)?_i:n}function _g(i,e){for(let t=e.cy*2+1;t<=(e.cy+e.h)*2-1;t++)for(let n=e.cx*2+1;n<=(e.cx+e.w)*2-1;n++)i.tiles[Ys(i,n,t)]=_i}function xg(i){const e=qd(i),t={cols:Ns,rows:Os,tiles:new Uint8Array(Ns*Os).fill(wi)},n=new Uint8Array(gr*qs),r=[[0,0]];n[0]=1,t.tiles[xl(t,0,0)]=_i;const s=[[1,0],[-1,0],[0,1],[0,-1]];for(;r.length;){const[f,h]=r[r.length-1],u=s.filter(([d,w])=>{const b=f+d,v=h+w;return b>=0&&v>=0&&b<gr&&v<qs&&!n[v*gr+b]});if(!u.length){r.pop();continue}const[m,g]=u[Math.floor(e()*u.length)],_=f+m,p=h+g;n[p*gr+_]=1,t.tiles[Ys(t,f*2+1+m,h*2+1+g)]=_i,t.tiles[xl(t,_,p)]=_i,r.push([_,p])}for(let f=1;f<Os-1;f++)for(let h=1;h<Ns-1;h++){const u=Ys(t,h,f);if(t.tiles[u]!==wi)continue;const m=f%2===1&&h%2===0,g=f%2===0&&h%2===1;(m||g)&&e()<.07&&(t.tiles[u]=_i)}const o=[{cx:0,cy:0,w:2,h:2}];for(let f=0;f<40&&o.length<7;f++){const h=2+Math.floor(e()*2),u=2+Math.floor(e()*2),m={cx:Math.floor(e()*(gr-h+1)),cy:Math.floor(e()*(qs-u+1)),w:h,h:u};o.some(_=>m.cx<=_.cx+_.w&&_.cx<=m.cx+m.w&&m.cy<=_.cy+_.h&&_.cy<=m.cy+m.h)||o.push(m)}for(const f of o)_g(t,f);const a=(f,h,u)=>{for(let m=0;m<h;m++){const g=5+Math.floor(e()*(Ns-7)),_=1+Math.floor(e()*(Os-2)),p=1+e()*u;for(let d=Math.floor(_-p);d<=_+p;d++)for(let w=Math.floor(g-p);w<=g+p;w++){if(d<1||w<5||d>=Os-1||w>=Ns-1||(w-g)**2+(d-_)**2>p*p)continue;const b=Ys(t,w,d);t.tiles[b]===_i&&(t.tiles[b]=f)}}};a(Eo,5+Math.floor(e()*3),2.2),a(bs,5+Math.floor(e()*3),2.2);const c=2*ht+ht/2,l=[[-20,-20],[20,-20],[-20,20],[20,20]].map(([f,h])=>({x:c+f,y:c+h}));return{grid:t,spawns:l}}function Yd(i,e){const t=new Int32Array(i.tiles.length).fill(-1);if(br(i.tiles[e]))return t;const n=new Int32Array(i.tiles.length);let r=0,s=0;for(n[s++]=e,t[e]=0;r<s;){const o=n[r++],a=o%i.cols;for(const c of[o-1,o+1,o-i.cols,o+i.cols])c<0||c>=i.tiles.length||c===o-1&&a===0||c===o+1&&a===i.cols-1||t[c]!==-1||br(i.tiles[c])||(t[c]=t[o]+1,n[s++]=c)}return t}function jd(i,e,t){if(e===t||br(i.tiles[t]))return[];const n=Yd(i,t);if(n[e]<0)return[];const r=[];let s=e;for(;s!==t;){const o=s%i.cols;let a=-1;for(const c of[s+1,s-1,s+i.cols,s-i.cols])if(!(c<0||c>=i.tiles.length)&&!(c===s-1&&o===0||c===s+1&&o===i.cols-1)&&n[c]>=0&&n[c]===n[s]-1){a=c;break}if(a<0)return[];r.push(a),s=a}return r}function yg(i,e,t=2){const n=qd(e),{grid:r}=i,s=to(r,i.spawns[0].x,i.spawns[0].y),o=Yd(r,s),a=[];for(let R=0;R<qs;R++)for(let T=0;T<gr;T++){const D=xl(r,T,R);if(o[D]<0)continue;const M=[D-1,D+1,D-r.cols,D+r.cols].filter(y=>r.tiles[y]!==wi).length;a.push({idx:D,d:o[D],deadEnd:M===1})}const c=Math.max(...a.map(R=>R.d)),l=a.map(R=>({c:R,k:n()})).sort((R,T)=>R.k-T.k).map(R=>R.c),f=[],h=(R,T)=>f.every(D=>{const M=Hi(r,D),y=Hi(r,R);return Math.hypot(M.x-y.x,M.y-y.y)>=T*ht}),u=i.spawns[0],m=R=>{const T=Hi(r,R);return Math.hypot(T.x-u.x,T.y-u.y)},g=R=>{for(let T=R.length;T>=0;T--){const D=l.find(M=>!f.includes(M.idx)&&R.slice(0,T).every(y=>y(M)));if(D)return f.push(D.idx),D.idx}throw new Error("maze has no free cell")},_=g([R=>R.d>=c*.75]),p=[0,1,2].map(()=>g([R=>R.d>=c*.3,R=>R.deadEnd,R=>h(R.idx,7),R=>m(R.idx)>320])),d=Array.from({length:Math.max(0,Math.min(4,t))},()=>g([R=>m(R.idx)>520,R=>R.d>=c*.35,R=>h(R.idx,5)])),w=R=>[R-1,R+1,R-r.cols,R+r.cols].find(T=>r.tiles[T]!==wi),b=R=>a.some(T=>T.idx===R&&T.deadEnd),v=[],I=p.find(b);I!==void 0&&v.push(w(I));for(const R of l){if(v.length>=3)break;R.deadEnd&&!f.includes(R.idx)&&m(R.idx)>320&&h(R.idx,4)&&(f.push(R.idx),v.push(w(R.idx)))}return{exit:Hi(r,_),relics:p.map((R,T)=>({id:`relic_${T}`,...Hi(r,R)})),automatons:d.map((R,T)=>({id:`automaton_${T}`,...Hi(r,R)})),hollows:v,melody:Array.from({length:4},()=>Math.floor(n()*3))}}function vg(i,e){for(const t of e)i.tiles[t]=Pf}function pu(i,e,t,n=eo){const r=Math.floor((e-n)/ht),s=Math.floor((e+n)/ht),o=Math.floor((t-n)/ht),a=Math.floor((t+n)/ht);for(let c=o;c<=a;c++)for(let l=r;l<=s;l++){if(l<0||l>=i.cols||c<0||c>=i.rows)return!0;if(!br(i.tiles[c*i.cols+l]))continue;const f=Math.max(l*ht,Math.min(e,(l+1)*ht)),h=Math.max(c*ht,Math.min(t,(c+1)*ht));if((e-f)**2+(t-h)**2<n*n)return!0}return!1}function Kd(i,e,t,n,r){let s=Math.cos(n),o=Math.sin(n);Math.abs(s)<1e-9&&(s=1e-9),Math.abs(o)<1e-9&&(o=1e-9);let a=Math.floor(e/ht),c=Math.floor(t/ht);const l=Math.abs(ht/s),f=Math.abs(ht/o),h=s<0?-1:1,u=o<0?-1:1;let m=(s<0?e-a*ht:(a+1)*ht-e)/ht*l,g=(o<0?t-c*ht:(c+1)*ht-t)/ht*f,_=If(i,e,t);for(;;){let p;if(m<g?(p=m,m+=l,a+=h):(p=g,g+=f,c+=u),p>=r)return{distance:r,hit:!1,floor:_,tile:wi};const w=a<0||c<0||a>=i.cols||c>=i.rows?wi:i.tiles[c*i.cols+a];if(br(w))return{distance:p,hit:!0,floor:br(_)?_i:_,tile:w};_=w}}function Zd(i,e,t,n,r){const s=Math.hypot(n-e,r-t);return s<1?!0:!Kd(i,e,t,Math.atan2(r-t,n-e),s).hit}const Eg=30,yl=1e3/Eg,Sg=3,Mg=120,Tg=55,wg=160,bg=40,Ag=1.6,Rg=1.3,Cg=340,Dg=40,Yi=440,Pg=192,Bo=8,Ig=45,Lg=60,Ug=600,Ng=40,Og=26,Fg=30,Bg=22,kg=14,Jd=380,zg=40,Qd=90,Vg=80,Hg=24,Gg=20,Wg=9,$g=60,Xg=70,qg=12,Yg=eo+18,jg=120,Kg=380,Zg=800,Jg=260,Qg=700,e0=90,t0=700,mu=140,n0=180,gu=0,Qa=1,ec=2,Ar=3,ms=4;function i0(i,e,t){vg(i.grid,e.hollows);const n=new Map;return e.automatons.forEach((r,s)=>n.set(r.id,{path:[],investigating:!1,lingerUntil:0,nextClick:20+s*27,nextStep:0,pulseUntil:0})),{layout:i,secrets:e,collected:new Set,ai:n,lit:new Map,budget:new Map,nextAction:new Map,rng:t|0}}function r0(i){return i.automatons.map(e=>({id:e.id,x:e.x,y:e.y,heading:0,hunting:!1}))}function s0(i,e,t){const n=e.spawns[t%e.spawns.length];Object.assign(i,{x:n.x,y:n.y,heading:0,surface:_i,noiseRadius:0,alive:!0,clapCooldown:0,moving:!1,sneak:!1})}function o0(i,e){const{world:t}=i;if(t.phase!=="PLAYING"||t.explorers.size===0)return[];let n=!1;return t.explorers.forEach(r=>{n||(n=r.alive)}),n?[]:(t.phase="DEFEATED",[{type:"phase",to:"*",phase:"DEFEATED",by:e}])}const bi=i=>Math.atan2(Math.sin(i),Math.cos(i));function a0(i,e,t){if(!t)return 0;const n=e?bg:wg;return i===Eo?n*Ag:i===bs?n*Rg:n}function c0(i,e,t,n){const r=t.layout.grid,s=Number.isFinite(e.dx)?e.dx:0,o=Number.isFinite(e.dy)?e.dy:0,a=Math.hypot(s,o),c=e.sneak===!0,l=a>.05;if(Number.isFinite(e.facing)&&(i.heading=bi(e.facing)),l){const f=(c?Tg:Mg)*n*Math.min(1,a)/a;pu(r,i.x+s*f,i.y,eo)||(i.x+=s*f),pu(r,i.x,i.y+o*f,eo)||(i.y+=o*f)}i.surface=gg(r,i.x,i.y),i.sneak=c,i.moving=l,i.noiseRadius=Math.max(i.noiseRadius,a0(i.surface,c,l))}function ya(i,e,t){const n=Math.PI/16,r=()=>t?Math.floor(Pa(t)*3)-1:0,s=bi((Math.round(Math.atan2(e.y-i.y,e.x-i.x)/n)+r())*n),o=Math.max(1,Math.round(Math.hypot(e.x-i.x,e.y-i.y)/ht)+r());return{angle:Math.round(s*1e3)/1e3,dist:o*ht}}function l0(i,e,t,n){const{world:r,hidden:s}=i;s.secrets.relics.forEach((o,a)=>{s.collected.has(o.id)||Math.hypot(t.x-o.x,t.y-o.y)>Og||(s.collected.add(o.id),r.relics.set(o.id,Object.assign(i.newRelic(),{x:o.x,y:o.y,tone:a,by:e})),r.relicsRemaining=s.secrets.relics.length-s.collected.size,n.push({type:"relic",to:"*",id:o.id,tone:a,by:e,remaining:r.relicsRemaining}))}),r.exitOpen&&r.phase==="PLAYING"&&Math.hypot(t.x-r.exitX,t.y-r.exitY)<=Fg&&(r.phase="EXTRACTED",n.push({type:"phase",to:"*",phase:"EXTRACTED",by:e}))}function Lf(i,e){if(i.world.phase!=="PLAYING")return"NOT_PLAYING";const t=i.world.explorers.get(e);return t?t.alive?t:"CAUGHT":"UNKNOWN_EXPLORER"}function vl(i,e,t){i.world.automatons.forEach((n,r)=>{Math.hypot(n.x-e.x,n.y-e.y)<=t&&Uf(i,r,n,e)})}function tc(i,e,t,n){const r=[];return i.world.explorers.forEach((s,o)=>{Math.hypot(s.x-e.x,s.y-e.y)<=t&&r.push(n(o))}),r}function f0(i,e,t){const n=i.hidden.layout.grid,r=Pg/Bo,s=[],o=[],a=[];i.world.automatons.forEach(c=>a.push(c));for(let c=0;c<Bo;c++){const l=c*Math.PI*2/Bo,f=Math.round(l*1e3)/1e3;let h=null,u=null,m=null,g=!1;for(let _=0;_<r;_++){const p=l+((_+.5)/r-.5)*(Math.PI*2/Bo),d=Kd(n,e,t,p,Yi);let w=d.hit?d.distance:-1,b=d.tile===Pf?ms:d.floor===Eo?Qa:d.floor===bs?ec:gu;const v=Math.cos(p),I=Math.sin(p);for(const T of a){const D=(T.x-e)*v+(T.y-t)*I,M=Math.abs((T.y-t)*v-(T.x-e)*I);D>0&&M<=kg&&D<=Yi&&(w<0||D<w)&&(w=D,b=Ar)}if(w<0){g=!0;continue}o.push({x:Math.round(e+v*w),y:Math.round(t+I*w),m:b});const R={a:f,d:Math.round(w),m:b};b===Ar?(!u||w<u.d)&&(u=R):b===ms?(!m||w<m.d)&&(m=R):(!h||w>h.d)&&(h=R)}s.push(u??m??(g||!h?{a:f,d:-1,m:gu}:h))}return{sectors:s,hits:o}}function u0(i,e){const t=Lf(i,e);if(typeof t=="string")return t;if(t.clapCooldown>0)return"CLAP_ON_COOLDOWN";const{world:n,hidden:r}=i;t.clapCooldown=Dg;const s=r.layout.grid,{sectors:o,hits:a}=f0(i,t.x,t.y);let c=r.lit.get(e);c||r.lit.set(e,c=new Map);const l=[{type:"echo",to:e,x:Math.round(t.x),y:Math.round(t.y),sectors:o,hits:a}];n.automatons.forEach((h,u)=>{const m=Math.hypot(h.x-t.x,h.y-t.y);m<=Yi&&Zd(s,t.x,t.y,h.x,h.y)&&c.set(u,n.tick+Ig),m<=Cg&&Uf(i,u,h,t)});const f=r.secrets.exit;return!n.exitOpen&&Math.hypot(t.x-f.x,t.y-f.y)<=mu&&l.push(...tc(i,f,mu*2,h=>({type:"melody",to:h,tones:[...r.secrets.melody],...ya(n.explorers.get(h),f)}))),l}function El(i,e){i.hidden.nextAction.set(e,i.world.tick+qg)}const ep=(i,e)=>(i.hidden.nextAction.get(e)??0)<=i.world.tick;function h0(i,e){const t=Lf(i,e);if(typeof t=="string")return t;if(!ep(i,e))return"ACTION_COOLDOWN";const n=i.hidden.layout.grid,r=Math.cos(t.heading),s=Math.sin(t.heading);for(const o of[eo+6,Yg]){const a=t.x+r*o,c=t.y+s*o,l=If(n,a,c);if(l===Pf){El(i,e);const f=to(n,a,c);n.tiles[f]=bs;const h=Hi(n,f);return vl(i,h,Kg),tc(i,h,Zg,u=>({type:"crumble",to:u,x:Math.round(h.x),y:Math.round(h.y)}))}if(l===wi)return El(i,e),vl(i,t,jg),[{type:"knock",to:e,x:Math.round(a),y:Math.round(c)}]}return"NOTHING_IN_REACH"}function d0(i,e,t){var h;const n=Lf(i,e);if(typeof n=="string")return n;if(t!==0&&t!==1&&t!==2)return"BAD_TONE";const{world:r,hidden:s}=i;let o;if(r.relics.forEach(u=>{u.tone===t&&(o=u)}),!o)return"NO_SUCH_BELL";if(o.by!==e&&((h=r.explorers.get(o.by))!=null&&h.alive))return"NOT_YOUR_BELL";if(!ep(i,e))return"ACTION_COOLDOWN";El(i,e),vl(i,n,Jg);const a=tc(i,n,Qg,u=>({type:"ring",to:u,x:Math.round(n.x),y:Math.round(n.y),tone:t,by:e})),c=s.secrets.exit;if(r.exitOpen||r.relicsRemaining>0||Math.hypot(n.x-c.x,n.y-c.y)>n0)return a;const l=s.secrets.melody,f=l[r.doorProgress]===t;return r.doorProgress=f?r.doorProgress+1:t===l[0]?1:0,a.push({type:"door",to:"*",progress:r.doorProgress,length:l.length,wrong:!f}),r.doorProgress>=l.length&&(r.exitOpen=!0,r.exitX=c.x,r.exitY=c.y,a.push({type:"exit-open",to:"*",x:c.x,y:c.y})),a}function Uf(i,e,t,n){const r=i.hidden.ai.get(e);if(!r)return;const s=i.hidden.layout.grid,o=to(s,n.x,n.y);r.investigating&&r.path[r.path.length-1]===o||(r.path=jd(s,to(s,t.x,t.y),o),r.investigating=!0,r.lingerUntil=0,t.hunting=!0)}function p0(i,e,t){const n=i.hidden.layout.grid,r=to(n,e.x,e.y),s=r%n.cols,o=Math.floor(r/n.cols);for(let a=0;a<12;a++){const c=s+Math.round((Pa(i.hidden)-.5)*16),l=o+Math.round((Pa(i.hidden)-.5)*12);if(c<1||l<1||c>=n.cols-1||l>=n.rows-1)continue;const f=jd(n,r,l*n.cols+c);if(f.length){t.path=f;return}}}function m0(i,e,t,n){const r=i.hidden.layout.grid;let s=(e.hunting?Qd:zg)*n,o=!1;for(;s>0&&t.path.length;){const a=Hi(r,t.path[0]),c=a.x-e.x,l=a.y-e.y,f=Math.hypot(c,l);f<=s?(e.x=a.x,e.y=a.y,s-=f,t.path.shift()):(e.x+=c/f*s,e.y+=l/f*s,s=0),f>0&&(e.heading=Math.atan2(l,c)),o=!0}return o}function g0(i,e,t){const{world:n,hidden:r}=i;n.automatons.forEach((s,o)=>{const a=r.ai.get(o);if(!a)return;let c=null;n.explorers.forEach(u=>{!u.alive||u.noiseRadius<=0||Math.hypot(u.x-s.x,u.y-s.y)<=u.noiseRadius&&(!c||u.noiseRadius>c.noiseRadius)&&(c=u)}),c&&Uf(i,o,s,c);let l=null;s.hunting&&n.explorers.forEach(u=>{const m=Math.hypot(u.x-s.x,u.y-s.y);!u.alive||m>Xg||l&&m>=Math.hypot(l.x-s.x,l.y-s.y)||Zd(r.layout.grid,s.x,s.y,u.x,u.y)&&(l=u)});let f;if(l){const u=l,m=Math.hypot(u.x-s.x,u.y-s.y),g=Math.min(m,Qd*e);m>0&&(s.heading=Math.atan2(u.y-s.y,u.x-s.x),s.x+=(u.x-s.x)/m*g,s.y+=(u.y-s.y)/m*g),a.path=[],a.lingerUntil=0,f=!0}else f=m0(i,s,a,e);a.path.length||(a.investigating?a.lingerUntil?n.tick>=a.lingerUntil&&(a.investigating=!1,s.hunting=!1,a.lingerUntil=0):a.lingerUntil=n.tick+$g:p0(i,s,a));let h=null;n.tick>=a.nextClick?(h="click",a.nextClick=n.tick+(s.hunting?Hg:Vg)):f&&n.tick>=a.nextStep&&(h="step",a.nextStep=n.tick+Gg),h&&(a.pulseUntil=n.tick+Wg,t.push(...tc(i,s,Jd,u=>({type:"automaton",to:u,id:o,x:Math.round(s.x),y:Math.round(s.y),kind:h,hunting:s.hunting})))),n.explorers.forEach((u,m)=>{!u.alive||n.phase!=="PLAYING"||Math.hypot(u.x-s.x,u.y-s.y)>Bg||(u.alive=!1,u.noiseRadius=0,u.moving=!1,t.push({type:"caught",to:"*",sessionId:m}),t.push(...o0(i,o)))})})}function _0(i,e,t){var c;const{world:n,hidden:r}=i;if((((c=r.lit.get(e))==null?void 0:c.get(t))??0)>n.tick)return!0;const s=r.ai.get(t),o=n.automatons.get(t),a=n.explorers.get(e);return!!(s&&o&&a&&s.pulseUntil>n.tick&&Math.hypot(a.x-o.x,a.y-o.y)<=Jd)}function x0(i,e,t){const{world:n,hidden:r}=i,s=[];if(n.phase!=="PLAYING"||(n.tick++,n.explorers.forEach((a,c)=>{if(a.clapCooldown>0&&a.clapCooldown--,a.noiseRadius=0,a.moving=!1,!a.alive){for(;t(c););return}let l=Math.min(Sg,(r.budget.get(c)??0)+1);for(;l>=1&&n.phase==="PLAYING";){const f=t(c);if(!f)break;l--,c0(a,f,r,e),l0(i,c,a,s)}r.budget.set(c,l)}),n.phase!=="PLAYING"))return s;g0(i,e,s),n.tick%Lg===0&&n.explorers.forEach((a,c)=>{if(!a.alive)return;const l=[];r.secrets.relics.forEach((f,h)=>{r.collected.has(f.id)||Math.hypot(f.x-a.x,f.y-a.y)>Ug||l.push({tone:h,...ya(a,f,r)})}),l.length&&s.push({type:"chime",to:c,cues:l.sort((f,h)=>f.dist-h.dist)})});const o=r.secrets.exit;!n.exitOpen&&n.tick%e0===0&&n.explorers.forEach((a,c)=>{a.alive&&Math.hypot(a.x-o.x,a.y-o.y)<=t0&&s.push({type:"hum",to:c,...ya(a,o,r)})}),n.exitOpen&&n.tick%Ng===0&&n.explorers.forEach((a,c)=>{a.alive&&s.push({type:"beacon",to:c,...ya(a,{x:n.exitX,y:n.exitY})})});for(const a of r.lit.values())for(const[c,l]of a)l<=n.tick&&a.delete(c);return s}const Br=40,_u=[523.25,659.25,783.99];function tp(i){return .07+i/Yi*.5}class y0{constructor(){E(this,"ctx",null);E(this,"master",null);E(this,"noise",null);E(this,"verb",null);E(this,"verbSeconds",0);E(this,"lx",0);E(this,"ly",0);E(this,"heading",-Math.PI/2)}unlock(){if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.9;const t=this.ctx.createDynamicsCompressor();this.master.connect(t),t.connect(this.ctx.destination),this.noise=this.ctx.createBuffer(1,this.ctx.sampleRate,this.ctx.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;this.verb=this.ctx.createConvolver();const r=this.ctx.createGain();r.gain.value=.55,this.verb.connect(r),r.connect(t),this.setSpace(Yi*.4)}this.ctx.state==="suspended"&&this.ctx.resume()}get ready(){var e;return((e=this.ctx)==null?void 0:e.state)==="running"}setSpace(e){const t=this.ctx;if(!t||!this.verb)return;const n=Math.round((.8+e/Yi*3.2)*4)/4;if(n===this.verbSeconds)return;this.verbSeconds=n;const r=Math.floor(t.sampleRate*n),s=t.createBuffer(2,r,t.sampleRate);for(let o=0;o<2;o++){const a=s.getChannelData(o);for(let c=0;c<r;c++){const f=c/t.sampleRate<.12&&Math.random()<.004?1.5:0;a[c]=(Math.random()*2-1+f)*Math.pow(1-c/r,3.2)}}this.verb.buffer=s}setListener(e,t,n){this.lx=e,this.ly=t,this.heading=n;const r=this.ctx;if(!r)return;const s=r.listener,o=r.currentTime,a=Math.cos(n),c=Math.sin(n);s.positionX?(s.positionX.setTargetAtTime(e/Br,o,.02),s.positionY.setTargetAtTime(0,o,.02),s.positionZ.setTargetAtTime(t/Br,o,.02),s.forwardX.setTargetAtTime(a,o,.02),s.forwardY.setTargetAtTime(0,o,.02),s.forwardZ.setTargetAtTime(c,o,.02),s.upX.value=0,s.upY.value=1,s.upZ.value=0):(s.setPosition(e/Br,0,t/Br),s.setOrientation(a,0,c,0,1,0))}spatial(e,t,n){const r=this.ctx,s=this.master;if(!r||!s)return null;const o=r.createPanner();o.panningModel="HRTF",o.distanceModel="linear",o.rolloffFactor=0;const a=e/Br,c=t/Br;o.positionX?(o.positionX.value=a,o.positionY.value=0,o.positionZ.value=c):o.setPosition(a,0,c);let l=Math.atan2(t-this.ly,e-this.lx)-this.heading;l=Math.atan2(Math.sin(l),Math.cos(l));const f=Math.max(0,(Math.abs(l)-Math.PI/2)/(Math.PI/2)),h=r.createBiquadFilter();h.type="lowpass",h.frequency.value=16e3-f*13500;const u=r.createGain();return u.gain.value=n,u.connect(h),h.connect(o),o.connect(s),this.verb&&o.connect(this.verb),u}direct(e){if(!this.ctx||!this.master)return null;const t=this.ctx.createGain();return t.gain.value=e,t.connect(this.master),this.verb&&t.connect(this.verb),t}toward(e,t){return[this.lx+Math.cos(e)*t,this.ly+Math.sin(e)*t]}bell(e,t,n,r=.6){const s=_u[n]??_u[0];this.tone(e,t,1.4,"sine",s,s,r),this.tone(e,t,.9,"sine",s*2.76,s*2.76,r*.3)}burst(e,t,n,r,s,o,a=1){const c=this.ctx,l=c.createBufferSource();l.buffer=this.noise;const f=c.createBiquadFilter();f.type=r,f.frequency.value=s,f.Q.value=o;const h=c.createGain();h.gain.setValueAtTime(a,t),h.gain.exponentialRampToValueAtTime(.001,t+n),l.connect(f),f.connect(h),h.connect(e),l.start(t,Math.random()*.5,n+.02)}tone(e,t,n,r,s,o,a=1){const c=this.ctx,l=c.createOscillator();l.type=r,l.frequency.setValueAtTime(s,t),o!==s&&l.frequency.exponentialRampToValueAtTime(o,t+n);const f=c.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.exponentialRampToValueAtTime(a,t+.004),f.gain.exponentialRampToValueAtTime(1e-4,t+n),l.connect(f),f.connect(e),l.start(t),l.stop(t+n+.02)}clap(){const e=this.direct(.5);if(!e)return;const t=this.ctx.currentTime;this.burst(e,t,.06,"bandpass",1800,.8,1),this.tone(e,t,.05,"triangle",300,120,.4)}echo(e,t,n){if(!this.ctx)return;const r=this.ctx.currentTime;for(const s of n){if(s.d<0)continue;const o=e+Math.cos(s.a)*Math.max(s.d,30),a=t+Math.sin(s.a)*Math.max(s.d,30),c=this.spatial(o,a,.75*(1-s.d/Yi*.75));if(!c)return;const l=r+tp(s.d);if(s.m===ms)this.tone(c,l,.55,"sine",140,95,.9),this.burst(c,l,.3,"lowpass",380,3,.7);else if(s.m===Ar)this.tone(c,l,.35,"sine",1240,1240,.5),this.tone(c,l,.25,"sine",1873,1873,.3),this.burst(c,l,.02,"highpass",4e3,.7,.6);else if(s.m===Qa)this.tone(c,l,.12,"sine",950,380,.7),this.burst(c,l,.08,"lowpass",900,2,.4);else if(s.m===ec)for(let f=0;f<3;f++)this.burst(c,l+f*.018,.025,"highpass",3200,.8,.7-f*.15);else this.burst(c,l,.045,"bandpass",2200,5,1.2),this.tone(c,l,.04,"triangle",2200,1800,.25)}}footstep(e,t,n,r,s){const o=Math.max(.1,1-Math.hypot(n-this.lx,r-this.ly)/700),a=s?this.direct(t?.18:.42):this.spatial(n,r,(t?.12:.3)*o);if(!a)return;const c=this.ctx.currentTime;if(e===Eo)this.burst(a,c,.16,"lowpass",700,4,1.1),this.tone(a,c+.01,.1,"sine",520,220,.35);else if(e===bs)for(let l=0;l<4;l++)this.burst(a,c+l*.022,.03,"bandpass",2600+l*400,1.2,.9-l*.15);else this.burst(a,c,.035,"bandpass",1200,3,.9),this.tone(a,c,.05,"sine",140,90,.4)}bump(){const e=this.direct(.35);e&&this.tone(e,this.ctx.currentTime,.09,"sine",110,60,.9)}chime(e,t,n,r=0){const s=this.spatial(...this.toward(t,n),Math.max(.12,.6-n/1400));s&&this.bell(s,this.ctx.currentTime+r,e)}hum(e,t){const n=this.spatial(...this.toward(e,t),Math.max(.2,.7-t/1600));if(!n)return;const r=this.ctx.currentTime;this.tone(n,r,1.8,"sine",73.4,73.4,.8),this.tone(n,r,1.8,"sine",75.4,75.4,.6),this.tone(n,r,1.2,"triangle",146.8,146.8,.15)}melody(e,t,n){const r=this.spatial(...this.toward(t,n),.7);if(!r)return;const s=this.ctx.currentTime+.4;e.forEach((o,a)=>this.bell(r,s+a*.7,o,.5))}ring(e,t,n,r){const s=r?this.direct(.6):this.spatial(t,n,Math.max(.15,.7-Math.hypot(t-this.lx,n-this.ly)/1e3));s&&this.bell(s,this.ctx.currentTime,e,.7)}door(e){const t=this.direct(.5);if(!t)return;const n=this.ctx.currentTime+.5;e?(this.tone(t,n,.9,"sawtooth",90,45,.5),this.burst(t,n,.6,"lowpass",300,1,.5)):(this.burst(t,n,.35,"bandpass",500,1.5,.7),this.tone(t,n,.3,"triangle",220,330,.25))}knock(e,t){const n=this.spatial(e,t,.8);if(!n)return;const r=this.ctx.currentTime;this.tone(n,r,.08,"sine",180,90,.9),this.burst(n,r,.04,"bandpass",900,2,.6)}crumble(e,t){const n=this.spatial(e,t,Math.max(.3,1-Math.hypot(e-this.lx,t-this.ly)/900));if(!n)return;const r=this.ctx.currentTime;this.tone(n,r,.7,"sine",120,40,.9);for(let s=0;s<9;s++)this.burst(n,r+s*.05+Math.random()*.04,.12,"bandpass",700+Math.random()*2400,1.2,.8-s*.07)}beacon(e,t){const n=this.spatial(...this.toward(e,t),Math.max(.25,.7-t/2400));if(!n)return;const r=this.ctx.currentTime;this.tone(n,r,.22,"square",330,330,.25),this.tone(n,r+.25,.3,"square",440,440,.25)}automaton(e,t,n,r){const s=Math.hypot(e-this.lx,t-this.ly),o=this.spatial(e,t,Math.max(.15,.8-s/500));if(!o)return;const a=this.ctx.currentTime;if(n==="click"){const c=r?2600:1700;this.tone(o,a,.03,"square",c,c,.5),this.tone(o,a+.07,.03,"square",c,c,.5)}else this.tone(o,a,.18,"sawtooth",95,60,.6),this.burst(o,a,.06,"bandpass",600,2,.6)}relic(e){const t=this.direct(.5);if(!t)return;const n=this.ctx.currentTime;this.bell(t,n,e,.5),this.bell(t,n+.5,e,.35)}fanfare(){const e=this.direct(.5);if(!e)return;const t=this.ctx.currentTime;[440,554.37,659.25,880].forEach((n,r)=>this.tone(e,t+r*.12,1.6,"sine",n,n,.35))}caught(){const e=this.direct(.6);e&&this.tone(e,this.ctx.currentTime,.9,"sawtooth",180,40,.6)}}function Tn(i){var e;try{(e=navigator.vibrate)==null||e.call(navigator,i)}catch{}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="170",v0=0,xu=1,E0=2,np=1,S0=2,di=3,tr=0,fn=1,xi=2,ji=0,ss=1,Ia=2,yu=3,vu=4,M0=5,_r=100,T0=101,w0=102,b0=103,A0=104,R0=200,C0=201,D0=202,P0=203,Sl=204,Ml=205,I0=206,L0=207,U0=208,N0=209,O0=210,F0=211,B0=212,k0=213,z0=214,Tl=0,wl=1,bl=2,gs=3,Al=4,Rl=5,Cl=6,Dl=7,ip=0,V0=1,H0=2,Ki=0,G0=1,W0=2,$0=3,X0=4,q0=5,Y0=6,j0=7,rp=300,_s=301,xs=302,Pl=303,Il=304,nc=306,Ll=1e3,vr=1001,Ul=1002,kn=1003,K0=1004,ko=1005,ei=1006,Mc=1007,Er=1008,Ai=1009,sp=1010,op=1011,no=1012,Of=1013,Rr=1014,yi=1015,So=1016,Ff=1017,Bf=1018,ys=1020,ap=35902,cp=1021,lp=1022,Fn=1023,fp=1024,up=1025,os=1026,vs=1027,hp=1028,kf=1029,dp=1030,zf=1031,Vf=1033,va=33776,Ea=33777,Sa=33778,Ma=33779,Nl=35840,Ol=35841,Fl=35842,Bl=35843,kl=36196,zl=37492,Vl=37496,Hl=37808,Gl=37809,Wl=37810,$l=37811,Xl=37812,ql=37813,Yl=37814,jl=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,ef=37820,tf=37821,Ta=36492,nf=36494,rf=36495,pp=36283,sf=36284,of=36285,af=36286,Z0=3200,J0=3201,Q0=0,e_=1,$i="",Mn="srgb",As="srgb-linear",ic="linear",pt="srgb",kr=7680,Eu=519,t_=512,n_=513,i_=514,mp=515,r_=516,s_=517,o_=518,a_=519,Su=35044,cf=35048,Mu="300 es",vi=2e3,La=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,lf=180/Math.PI;function Mo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function cn(i,e,t){return Math.max(e,Math.min(t,i))}function c_(i,e){return(i%e+e)%e}function wc(i,e,t){return(1-t)*i+t*e}function Fs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],h=n[7],u=n[2],m=n[5],g=n[8],_=r[0],p=r[3],d=r[6],w=r[1],b=r[4],v=r[7],I=r[2],R=r[5],T=r[8];return s[0]=o*_+a*w+c*I,s[3]=o*p+a*b+c*R,s[6]=o*d+a*v+c*T,s[1]=l*_+f*w+h*I,s[4]=l*p+f*b+h*R,s[7]=l*d+f*v+h*T,s[2]=u*_+m*w+g*I,s[5]=u*p+m*b+g*R,s[8]=u*d+m*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*s*f+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=f*o-a*l,u=a*c-f*s,m=l*s-o*c,g=t*h+n*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-f*n)*_,e[2]=(a*n-r*o)*_,e[3]=u*_,e[4]=(f*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bc.makeScale(e,t)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new Ge;function gp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l_(){const i=Ua("canvas");return i.style.display="block",i}const Tu={};function $s(i){i in Tu||(Tu[i]=!0,console.warn(i))}function f_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function u_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function h_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=as(i.r),i.g=as(i.g),i.b=as(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?ic:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const wu=[.64,.33,.3,.6,.15,.06],bu=[.2126,.7152,.0722],Au=[.3127,.329],Ru=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[As]:{primaries:wu,whitePoint:Au,transfer:ic,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:bu,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:wu,whitePoint:Au,transfer:pt,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:bu,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}});let zr;class d_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zr===void 0&&(zr=Ua("canvas")),zr.width=e.width,zr.height=e.height;const n=zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let p_=0;class _p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Mo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ac(r[o].image)):s.push(Ac(r[o]))}else s=Ac(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?d_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;class un extends Rs{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=vr,r=vr,s=ei,o=Er,a=Fn,c=Ai,l=un.DEFAULT_ANISOTROPY,f=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Mo(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=rp;un.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],h=c[8],u=c[1],m=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,v=(m+1)/2,I=(d+1)/2,R=(f+u)/4,T=(h+_)/4,D=(g+p)/4;return b>v&&b>I?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=T/n):v>I?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=D/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=T/s,r=D/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(h-_)/w,this.z=(u-f)/w,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class g_ extends Rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new un(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _p(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends g_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xp extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class __ extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],f=n[r+2],h=n[r+3];const u=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==u||l!==m||f!==g){let p=1-a;const d=c*u+l*m+f*g+h*_,w=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const I=Math.sqrt(b),R=Math.atan2(I,d*w);p=Math.sin(p*R)/I,a=Math.sin(a*R)/I}const v=a*w;if(c=c*p+u*v,l=l*p+m*v,f=f*p+g*v,h=h*p+_*v,p===1-a){const I=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=I,l*=I,f*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],f=n[r+3],h=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+f*h+c*m-l*u,e[t+1]=c*g+f*u+l*h-a*m,e[t+2]=l*g+f*m+a*u-c*h,e[t+3]=f*g-a*h-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(r/2),h=a(s/2),u=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=u*f*h+l*m*g,this._y=l*m*h-u*f*g,this._z=l*f*g+u*m*h,this._w=l*f*h-u*m*g;break;case"YXZ":this._x=u*f*h+l*m*g,this._y=l*m*h-u*f*g,this._z=l*f*g-u*m*h,this._w=l*f*h+u*m*g;break;case"ZXY":this._x=u*f*h-l*m*g,this._y=l*m*h+u*f*g,this._z=l*f*g+u*m*h,this._w=l*f*h-u*m*g;break;case"ZYX":this._x=u*f*h-l*m*g,this._y=l*m*h+u*f*g,this._z=l*f*g-u*m*h,this._w=l*f*h+u*m*g;break;case"YZX":this._x=u*f*h+l*m*g,this._y=l*m*h+u*f*g,this._z=l*f*g-u*m*h,this._w=l*f*h-u*m*g;break;case"XZY":this._x=u*f*h-l*m*g,this._y=l*m*h-u*f*g,this._z=l*f*g+u*m*h,this._w=l*f*h+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],h=t[10],u=n+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(f-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-n*l,this._z=s*f+o*l+n*c-r*a,this._w=o*f-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),h=Math.sin((1-t)*f)/l,u=Math.sin(t*f)/l;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=r*h+this._y*u,this._z=s*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),f=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*f,this.y=n+c*f+a*l-s*h,this.z=r+c*h+s*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new K,Du=new To;class wo{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Vo.subVectors(this.max,Bs),Vr.subVectors(e.a,Bs),Hr.subVectors(e.b,Bs),Gr.subVectors(e.c,Bs),Oi.subVectors(Hr,Vr),Fi.subVectors(Gr,Hr),sr.subVectors(Vr,Gr);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-sr.z,sr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,sr.z,0,-sr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-sr.y,sr.x,0];return!Cc(t,Vr,Hr,Gr,Vo)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,Vr,Hr,Gr,Vo))?!1:(Ho.crossVectors(Oi,Fi),t=[Ho.x,Ho.y,Ho.z],Cc(t,Vr,Hr,Gr,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new K,new K,new K,new K,new K,new K,new K,new K],Cn=new K,zo=new wo,Vr=new K,Hr=new K,Gr=new K,Oi=new K,Fi=new K,sr=new K,Bs=new K,Vo=new K,Ho=new K,or=new K;function Cc(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){or.fromArray(i,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),c=e.dot(or),l=t.dot(or),f=n.dot(or);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const x_=new wo,ks=new K,Dc=new K;class bo{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):x_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ks,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Dc)),this.expandByPoint(ks.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new K,Pc=new K,Go=new K,Bi=new K,Ic=new K,Wo=new K,Lc=new K;class yp{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pc.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Pc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=Bi.dot(this.direction),c=-Bi.dot(Go),l=Bi.lengthSq(),f=Math.abs(1-o*o);let h,u,m,g;if(f>0)if(h=o*c-a,u=o*a-c,g=s*f,h>=0)if(u>=-g)if(u<=g){const _=1/f;h*=_,u*=_,m=h*(h+o*u+2*a)+u*(o*h+u+2*c)+l}else u=s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*c)+l;else u=-s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*c)+l;else u<=-g?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+u*(u+2*c)+l):u<=g?(h=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+u*(u+2*c)+l);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Pc).addScaledVector(Go,u),m}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,r,s){Ic.subVectors(t,e),Wo.subVectors(n,e),Lc.crossVectors(Ic,Wo);let o=this.direction.dot(Lc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,e);const c=a*this.direction.dot(Wo.crossVectors(Bi,Wo));if(c<0)return null;const l=a*this.direction.dot(Ic.cross(Bi));if(l<0||c+l>o)return null;const f=-a*Bi.dot(Lc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,r,s,o,a,c,l,f,h,u,m,g,_,p){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,f,h,u,m,g,_,p)}set(e,t,n,r,s,o,a,c,l,f,h,u,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),o=1/Wr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*h,g=a*f,_=a*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*f,m=c*h,g=l*f,_=l*h;t[0]=u+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=m*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*f,m=c*h,g=l*f,_=l*h;t[0]=u-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*f,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*f,m=o*h,g=a*f,_=a*h;t[0]=c*f,t[4]=g*l-m,t[8]=u*l+_,t[1]=c*h,t[5]=_*l+u,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*f,t[4]=_-u*h,t[8]=g*h+m,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=u*h+_,t[5]=o*f,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*f,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y_,e,v_)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ki.crossVectors(n,pn),ki.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ki.crossVectors(n,pn)),ki.normalize(),$o.crossVectors(pn,ki),r[0]=ki.x,r[4]=$o.x,r[8]=pn.x,r[1]=ki.y,r[5]=$o.y,r[9]=pn.y,r[2]=ki.z,r[6]=$o.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],h=n[5],u=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],w=n[3],b=n[7],v=n[11],I=n[15],R=r[0],T=r[4],D=r[8],M=r[12],y=r[1],L=r[5],ie=r[9],J=r[13],ce=r[2],oe=r[6],se=r[10],le=r[14],A=r[3],W=r[7],$=r[11],X=r[15];return s[0]=o*R+a*y+c*ce+l*A,s[4]=o*T+a*L+c*oe+l*W,s[8]=o*D+a*ie+c*se+l*$,s[12]=o*M+a*J+c*le+l*X,s[1]=f*R+h*y+u*ce+m*A,s[5]=f*T+h*L+u*oe+m*W,s[9]=f*D+h*ie+u*se+m*$,s[13]=f*M+h*J+u*le+m*X,s[2]=g*R+_*y+p*ce+d*A,s[6]=g*T+_*L+p*oe+d*W,s[10]=g*D+_*ie+p*se+d*$,s[14]=g*M+_*J+p*le+d*X,s[3]=w*R+b*y+v*ce+I*A,s[7]=w*T+b*L+v*oe+I*W,s[11]=w*D+b*ie+v*se+I*$,s[15]=w*M+b*J+v*le+I*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],h=e[6],u=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*c*h-r*l*h-s*a*u+n*l*u+r*a*m-n*c*m)+_*(+t*c*m-t*l*u+s*o*u-r*o*m+r*l*f-s*c*f)+p*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*f-n*l*f)+d*(-r*a*f-t*c*h+t*a*u+r*o*h-n*o*u+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=e[9],u=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],w=h*p*l-_*u*l+_*c*m-a*p*m-h*c*d+a*u*d,b=g*u*l-f*p*l-g*c*m+o*p*m+f*c*d-o*u*d,v=f*_*l-g*h*l+g*a*m-o*_*m-f*a*d+o*h*d,I=g*h*c-f*_*c-g*a*u+o*_*u+f*a*p-o*h*p,R=t*w+n*b+r*v+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=w*T,e[1]=(_*u*s-h*p*s-_*r*m+n*p*m+h*r*d-n*u*d)*T,e[2]=(a*p*s-_*c*s+_*r*l-n*p*l-a*r*d+n*c*d)*T,e[3]=(h*c*s-a*u*s-h*r*l+n*u*l+a*r*m-n*c*m)*T,e[4]=b*T,e[5]=(f*p*s-g*u*s+g*r*m-t*p*m-f*r*d+t*u*d)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*d-t*c*d)*T,e[7]=(o*u*s-f*c*s+f*r*l-t*u*l-o*r*m+t*c*m)*T,e[8]=v*T,e[9]=(g*h*s-f*_*s-g*n*m+t*_*m+f*n*d-t*h*d)*T,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*d+t*a*d)*T,e[11]=(f*a*s-o*h*s-f*n*l+t*h*l+o*n*m-t*a*m)*T,e[12]=I*T,e[13]=(f*_*r-g*h*r+g*n*u-t*_*u-f*n*p+t*h*p)*T,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*p-t*a*p)*T,e[15]=(o*h*r-f*a*r+f*n*c-t*h*c-o*n*u+t*a*u)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+n,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,f=o+o,h=a+a,u=s*l,m=s*f,g=s*h,_=o*f,p=o*h,d=a*h,w=c*l,b=c*f,v=c*h,I=n.x,R=n.y,T=n.z;return r[0]=(1-(_+d))*I,r[1]=(m+v)*I,r[2]=(g-b)*I,r[3]=0,r[4]=(m-v)*R,r[5]=(1-(u+d))*R,r[6]=(p+w)*R,r[7]=0,r[8]=(g+b)*T,r[9]=(p-w)*T,r[10]=(1-(u+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const o=Wr.set(r[4],r[5],r[6]).length(),a=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const l=1/s,f=1/o,h=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=f,Dn.elements[5]*=f,Dn.elements[6]*=f,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=vi){const c=this.elements,l=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),u=(n+r)/(n-r);let m,g;if(a===vi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===La)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=vi){const c=this.elements,l=1/(t-e),f=1/(n-r),h=1/(o-s),u=(t+e)*l,m=(n+r)*f;let g,_;if(a===vi)g=(o+s)*h,_=-2*h;else if(a===La)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wr=new K,Dn=new Ut,y_=new K(0,0,0),v_=new K(1,1,1),ki=new K,$o=new K,pn=new K,Pu=new Ut,Iu=new To;class Ri{constructor(e=0,t=0,n=0,r=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E_=0;const Lu=new K,$r=new To,li=new Ut,Xo=new K,zs=new K,S_=new K,M_=new To,Uu=new K(1,0,0),Nu=new K(0,1,0),Ou=new K(0,0,1),Fu={type:"added"},T_={type:"removed"},Xr={type:"childadded",child:null},Uc={type:"childremoved",child:null};class hn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new K,t=new Ri,n=new To,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ge}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Nu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Nu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xo.copy(e):Xo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(zs,Xo,this.up):li.lookAt(Xo,zs,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(li),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T_),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}hn.DEFAULT_UP=new K(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new K,fi=new K,Nc=new K,ui=new K,qr=new K,Yr=new K,Bu=new K,Oc=new K,Fc=new K,Bc=new K,kc=new It,zc=new It,Vc=new It;class On{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),fi.subVectors(n,t),Nc.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(fi),c=Pn.dot(Nc),l=fi.dot(fi),f=fi.dot(Nc),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(l*c-a*f)*u,g=(o*f-a*c)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return kc.setScalar(0),zc.setScalar(0),Vc.setScalar(0),kc.fromBufferAttribute(e,t),zc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(kc,s.x),o.addScaledVector(zc,s.y),o.addScaledVector(Vc,s.z),o}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),fi.subVectors(e,t),Pn.cross(fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Pn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return On.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,n),Yr.subVectors(s,n),Oc.subVectors(e,n);const c=qr.dot(Oc),l=Yr.dot(Oc);if(c<=0&&l<=0)return t.copy(n);Fc.subVectors(e,r);const f=qr.dot(Fc),h=Yr.dot(Fc);if(f>=0&&h<=f)return t.copy(r);const u=c*h-f*l;if(u<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(qr,o);Bc.subVectors(e,s);const m=qr.dot(Bc),g=Yr.dot(Bc);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Yr,a);const p=f*g-m*h;if(p<=0&&h-f>=0&&m-g>=0)return Bu.subVectors(s,r),a=(h-f)/(h-f+(m-g)),t.copy(r).addScaledVector(Bu,a);const d=1/(p+_+u);return o=_*d,a=u*d,t.copy(n).addScaledVector(qr,o).addScaledVector(Yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=c_(e,1),t=cn(t,0,1),n=cn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hc(o,s,e+1/3),this.g=Hc(o,s,e),this.b=Hc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=Ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return tt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(cn(Zt.r*255,0,255))*65536+Math.round(cn(Zt.g*255,0,255))*256+Math.round(cn(Zt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=f<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Mn){tt.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,r=Zt.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(qo);const n=wc(zi.h,qo.h,t),r=wc(zi.s,qo.s,t),s=wc(zi.l,qo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new dt;dt.NAMES=Ep;let w_=0;class Ao extends Rs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Mo(),this.name="",this.blending=ss,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=Ml,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ml&&(n.blendDst=this.blendDst),this.blendEquation!==_r&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sp extends Ao{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new K,Yo=new xt;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Su,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Su&&(e.usage=this.usage),e}}class Mp extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tp extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wr extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let b_=0;const En=new Ut,Gc=new hn,jr=new K,mn=new wo,Vs=new wo,Ht=new K;class ri extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gp(e)?Tp:Mp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wr(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(mn.min,Vs.min),mn.expandByPoint(Ht),Ht.addVectors(mn.max,Vs.max),mn.expandByPoint(Ht)):(mn.expandByPoint(Vs.min),mn.expandByPoint(Vs.max))}mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Ht.fromBufferAttribute(a,l),c&&(jr.fromBufferAttribute(e,l),Ht.add(jr)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new K,c[D]=new K;const l=new K,f=new K,h=new K,u=new xt,m=new xt,g=new xt,_=new K,p=new K;function d(D,M,y){l.fromBufferAttribute(n,D),f.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),u.fromBufferAttribute(s,D),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),f.sub(l),h.sub(l),m.sub(u),g.sub(u);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(L),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(L),a[D].add(_),a[M].add(_),a[y].add(_),c[D].add(p),c[M].add(p),c[y].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,M=w.length;D<M;++D){const y=w[D],L=y.start,ie=y.count;for(let J=L,ce=L+ie;J<ce;J+=3)d(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new K,v=new K,I=new K,R=new K;function T(D){I.fromBufferAttribute(r,D),R.copy(I);const M=a[D];b.copy(M),b.sub(I.multiplyScalar(I.dot(M))).normalize(),v.crossVectors(R,M);const L=v.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,M=w.length;D<M;++D){const y=w[D],L=y.start,ie=y.count;for(let J=L,ce=L+ie;J<ce;J+=3)T(e.getX(J+0)),T(e.getX(J+1)),T(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new K,s=new K,o=new K,a=new K,c=new K,l=new K,f=new K,h=new K;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(f),c.add(f),l.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,h=a.normalized,u=new l.constructor(c.length*f);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*f;for(let d=0;d<f;d++)u[g++]=l[m++]}return new Yt(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,h=l.length;f<h;f++){const u=l[f],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,u=l.length;h<u;h++){const m=l[h];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],h=s[l];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ku=new Ut,ar=new yp,jo=new bo,zu=new K,Ko=new K,Zo=new K,Jo=new K,Wc=new K,Qo=new K,Vu=new K,ea=new K;class Ei extends hn{constructor(e=new ri,t=new Sp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=a[c],h=s[c];f!==0&&(Wc.fromBufferAttribute(h,e),o?Qo.addScaledVector(Wc,f):Qo.addScaledVector(Wc.sub(t),f))}t.add(Qo)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(jo.containsPoint(ar.origin)===!1&&(ar.intersectSphere(jo,zu)===null||ar.origin.distanceToSquared(zu)>(e.far-e.near)**2))&&(ku.copy(s).invert(),ar.copy(e.ray).applyMatrix4(ku),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],d=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,I=b;v<I;v+=3){const R=a.getX(v),T=a.getX(v+1),D=a.getX(v+2);r=ta(this,d,e,n,l,f,h,R,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=a.getX(p),b=a.getX(p+1),v=a.getX(p+2);r=ta(this,o,e,n,l,f,h,w,b,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],d=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,I=b;v<I;v+=3){const R=v,T=v+1,D=v+2;r=ta(this,d,e,n,l,f,h,R,T,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=p,b=p+1,v=p+2;r=ta(this,o,e,n,l,f,h,w,b,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function A_(i,e,t,n,r,s,o,a){let c;if(e.side===fn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===tr,a),c===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ea);return l<t.near||l>t.far?null:{distance:l,point:ea.clone(),object:i}}function ta(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Ko),i.getVertexPosition(c,Zo),i.getVertexPosition(l,Jo);const f=A_(i,e,t,n,Ko,Zo,Jo,Vu);if(f){const h=new K;On.getBarycoord(Vu,Ko,Zo,Jo,h),r&&(f.uv=On.getInterpolatedAttribute(r,a,c,l,h,new xt)),s&&(f.uv1=On.getInterpolatedAttribute(s,a,c,l,h,new xt)),o&&(f.normal=On.getInterpolatedAttribute(o,a,c,l,h,new K),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new K,materialIndex:0};On.getNormal(Ko,Zo,Jo,u.normal),f.face=u,f.barycoord=h}return f}class Ro extends ri{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],h=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new wr(l,3)),this.setAttribute("normal",new wr(f,3)),this.setAttribute("uv",new wr(h,2));function g(_,p,d,w,b,v,I,R,T,D,M){const y=v/T,L=I/D,ie=v/2,J=I/2,ce=R/2,oe=T+1,se=D+1;let le=0,A=0;const W=new K;for(let $=0;$<se;$++){const X=$*L-J;for(let Z=0;Z<oe;Z++){const pe=Z*y-ie;W[_]=pe*w,W[p]=X*b,W[d]=ce,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[d]=R>0?1:-1,f.push(W.x,W.y,W.z),h.push(Z/T),h.push(1-$/D),le+=1}}for(let $=0;$<D;$++)for(let X=0;X<T;X++){const Z=u+X+oe*$,pe=u+X+oe*($+1),H=u+(X+1)+oe*($+1),q=u+(X+1)+oe*$;c.push(Z,pe,q),c.push(pe,H,q),A+=6}a.addGroup(m,A,M),m+=A,u+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=Es(i[t]);for(const r in n)e[r]=n[r]}return e}function R_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const C_={clone:Es,merge:nn};var D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends Ao{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bp extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new K,Hu=new xt,Gu=new xt;class wn extends bp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lf*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Gu),t.subVectors(Gu,Hu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tc*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class I_ extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Kr,Zr,e,t);r.layers=this.layers,this.add(r);const s=new wn(Kr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new wn(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new wn(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const c=new wn(Kr,Zr,e,t);c.layers=this.layers,this.add(c);const l=new wn(Kr,Zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(h,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ap extends un{constructor(e,t,n,r,s,o,a,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,r,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L_ extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ap(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ro(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:ji});s.uniforms.tEquirect.value=t;const o=new Ei(r,s),a=t.minFilter;return t.minFilter===Er&&(t.minFilter=ei),new I_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const $c=new K,U_=new K,N_=new Ge;class pr{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=$c.subVectors(n,t).cross(U_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($c),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||N_.getNormalMatrix(e),r=this.coplanarPoint($c).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new bo,na=new K;class Rp{constructor(e=new pr,t=new pr,n=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],f=r[5],h=r[6],u=r[7],m=r[8],g=r[9],_=r[10],p=r[11],d=r[12],w=r[13],b=r[14],v=r[15];if(n[0].setComponents(c-s,u-l,p-m,v-d).normalize(),n[1].setComponents(c+s,u+l,p+m,v+d).normalize(),n[2].setComponents(c+o,u+f,p+g,v+w).normalize(),n[3].setComponents(c-o,u-f,p-g,v-w).normalize(),n[4].setComponents(c-a,u-h,p-_,v-b).normalize(),t===vi)n[5].setComponents(c+a,u+h,p+_,v+b).normalize();else if(t===La)n[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function O_(i){const e=new WeakMap;function t(a,c){const l=a.array,f=a.usage,h=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,f),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const f=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,f);else{h.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<h.length;m++){const g=h[u],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];i.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class rc extends ri{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,f=c+1,h=e/a,u=t/c,m=[],g=[],_=[],p=[];for(let d=0;d<f;d++){const w=d*u-o;for(let b=0;b<l;b++){const v=b*h-s;g.push(v,-w,0),_.push(0,0,1),p.push(b/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<a;w++){const b=w+l*d,v=w+l*(d+1),I=w+1+l*(d+1),R=w+1+l*d;m.push(b,v,R),m.push(v,I,R)}this.setIndex(m),this.setAttribute("position",new wr(g,3)),this.setAttribute("normal",new wr(_,3)),this.setAttribute("uv",new wr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}var F_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ax=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Px=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ly=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,my=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ey=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,My=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,by=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Py=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ky=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,av=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:F_,alphahash_pars_fragment:B_,alphamap_fragment:k_,alphamap_pars_fragment:z_,alphatest_fragment:V_,alphatest_pars_fragment:H_,aomap_fragment:G_,aomap_pars_fragment:W_,batching_pars_vertex:$_,batching_vertex:X_,begin_vertex:q_,beginnormal_vertex:Y_,bsdfs:j_,iridescence_fragment:K_,bumpmap_pars_fragment:Z_,clipping_planes_fragment:J_,clipping_planes_pars_fragment:Q_,clipping_planes_pars_vertex:ex,clipping_planes_vertex:tx,color_fragment:nx,color_pars_fragment:ix,color_pars_vertex:rx,color_vertex:sx,common:ox,cube_uv_reflection_fragment:ax,defaultnormal_vertex:cx,displacementmap_pars_vertex:lx,displacementmap_vertex:fx,emissivemap_fragment:ux,emissivemap_pars_fragment:hx,colorspace_fragment:dx,colorspace_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:_x,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Cx,envmap_vertex:yx,fog_vertex:vx,fog_pars_vertex:Ex,fog_fragment:Sx,fog_pars_fragment:Mx,gradientmap_pars_fragment:Tx,lightmap_pars_fragment:wx,lights_lambert_fragment:bx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Px,lights_phong_fragment:Ix,lights_phong_pars_fragment:Lx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Nx,lights_fragment_begin:Ox,lights_fragment_maps:Fx,lights_fragment_end:Bx,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Hx,map_fragment:Gx,map_pars_fragment:Wx,map_particle_fragment:$x,map_particle_pars_fragment:Xx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:jx,morphcolor_vertex:Kx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Jx,morphtarget_vertex:Qx,normal_fragment_begin:ey,normal_fragment_maps:ty,normal_pars_fragment:ny,normal_pars_vertex:iy,normal_vertex:ry,normalmap_pars_fragment:sy,clearcoat_normal_fragment_begin:oy,clearcoat_normal_fragment_maps:ay,clearcoat_pars_fragment:cy,iridescence_pars_fragment:ly,opaque_fragment:fy,packing:uy,premultiplied_alpha_fragment:hy,project_vertex:dy,dithering_fragment:py,dithering_pars_fragment:my,roughnessmap_fragment:gy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:xy,shadowmap_pars_vertex:yy,shadowmap_vertex:vy,shadowmask_pars_fragment:Ey,skinbase_vertex:Sy,skinning_pars_vertex:My,skinning_vertex:Ty,skinnormal_vertex:wy,specularmap_fragment:by,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:Dy,transmission_pars_fragment:Py,uv_pars_fragment:Iy,uv_pars_vertex:Ly,uv_vertex:Uy,worldpos_vertex:Ny,background_vert:Oy,background_frag:Fy,backgroundCube_vert:By,backgroundCube_frag:ky,cube_vert:zy,cube_frag:Vy,depth_vert:Hy,depth_frag:Gy,distanceRGBA_vert:Wy,distanceRGBA_frag:$y,equirect_vert:Xy,equirect_frag:qy,linedashed_vert:Yy,linedashed_frag:jy,meshbasic_vert:Ky,meshbasic_frag:Zy,meshlambert_vert:Jy,meshlambert_frag:Qy,meshmatcap_vert:ev,meshmatcap_frag:tv,meshnormal_vert:nv,meshnormal_frag:iv,meshphong_vert:rv,meshphong_frag:sv,meshphysical_vert:ov,meshphysical_frag:av,meshtoon_vert:cv,meshtoon_frag:lv,points_vert:fv,points_frag:uv,shadow_vert:hv,shadow_frag:dv,sprite_vert:pv,sprite_frag:mv},ge={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Kn={basic:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new dt(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:nn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:nn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new dt(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:nn([ge.points,ge.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:nn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:nn([ge.common,ge.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:nn([ge.sprite,ge.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:nn([ge.common,ge.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:nn([ge.lights,ge.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Kn.physical={uniforms:nn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const ia={r:0,b:0,g:0},lr=new Ri,gv=new Ut;function _v(i,e,t,n,r,s,o){const a=new dt(0);let c=s===!0?0:1,l,f,h=null,u=0,m=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?t:e).get(b)),b}function _(w){let b=!1;const v=g(w);v===null?d(a,c):v&&v.isColor&&(d(v,1),b=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===nc)?(f===void 0&&(f=new Ei(new Ro(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Es(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),lr.copy(b.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(gv.makeRotationFromEuler(lr)),f.material.toneMapped=tt.getTransfer(v.colorSpace)!==pt,(h!==v||u!==v.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,h=v,u=v.version,m=i.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ei(new rc(2,2),new Ci({name:"BackgroundMaterial",uniforms:Es(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=tt.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,m=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,b){w.getRGB(ia,wp(i)),n.buffers.color.setClear(ia.r,ia.g,ia.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),c=b,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(a,c)},render:_,addToRenderList:p}}function xv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,o=!1;function a(y,L,ie,J,ce){let oe=!1;const se=h(J,ie,L);s!==se&&(s=se,l(s.object)),oe=m(y,J,ie,ce),oe&&g(y,J,ie,ce),ce!==null&&e.update(ce,i.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,v(y,L,ie,J),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function h(y,L,ie){const J=ie.wireframe===!0;let ce=n[y.id];ce===void 0&&(ce={},n[y.id]=ce);let oe=ce[L.id];oe===void 0&&(oe={},ce[L.id]=oe);let se=oe[J];return se===void 0&&(se=u(c()),oe[J]=se),se}function u(y){const L=[],ie=[],J=[];for(let ce=0;ce<t;ce++)L[ce]=0,ie[ce]=0,J[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:ie,attributeDivisors:J,object:y,attributes:{},index:null}}function m(y,L,ie,J){const ce=s.attributes,oe=L.attributes;let se=0;const le=ie.getAttributes();for(const A in le)if(le[A].location>=0){const $=ce[A];let X=oe[A];if(X===void 0&&(A==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),A==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),$===void 0||$.attribute!==X||X&&$.data!==X.data)return!0;se++}return s.attributesNum!==se||s.index!==J}function g(y,L,ie,J){const ce={},oe=L.attributes;let se=0;const le=ie.getAttributes();for(const A in le)if(le[A].location>=0){let $=oe[A];$===void 0&&(A==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),A==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const X={};X.attribute=$,$&&$.data&&(X.data=$.data),ce[A]=X,se++}s.attributes=ce,s.attributesNum=se,s.index=J}function _(){const y=s.newAttributes;for(let L=0,ie=y.length;L<ie;L++)y[L]=0}function p(y){d(y,0)}function d(y,L){const ie=s.newAttributes,J=s.enabledAttributes,ce=s.attributeDivisors;ie[y]=1,J[y]===0&&(i.enableVertexAttribArray(y),J[y]=1),ce[y]!==L&&(i.vertexAttribDivisor(y,L),ce[y]=L)}function w(){const y=s.newAttributes,L=s.enabledAttributes;for(let ie=0,J=L.length;ie<J;ie++)L[ie]!==y[ie]&&(i.disableVertexAttribArray(ie),L[ie]=0)}function b(y,L,ie,J,ce,oe,se){se===!0?i.vertexAttribIPointer(y,L,ie,ce,oe):i.vertexAttribPointer(y,L,ie,J,ce,oe)}function v(y,L,ie,J){_();const ce=J.attributes,oe=ie.getAttributes(),se=L.defaultAttributeValues;for(const le in oe){const A=oe[le];if(A.location>=0){let W=ce[le];if(W===void 0&&(le==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),le==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const $=W.normalized,X=W.itemSize,Z=e.get(W);if(Z===void 0)continue;const pe=Z.buffer,H=Z.type,q=Z.bytesPerElement,fe=H===i.INT||H===i.UNSIGNED_INT||W.gpuType===Of;if(W.isInterleavedBufferAttribute){const re=W.data,ve=re.stride,Pe=W.offset;if(re.isInstancedInterleavedBuffer){for(let Ue=0;Ue<A.locationSize;Ue++)d(A.location+Ue,re.meshPerAttribute);y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<A.locationSize;Ue++)p(A.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Ue=0;Ue<A.locationSize;Ue++)b(A.location+Ue,X/A.locationSize,H,$,ve*q,(Pe+X/A.locationSize*Ue)*q,fe)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<A.locationSize;re++)d(A.location+re,W.meshPerAttribute);y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<A.locationSize;re++)p(A.location+re);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let re=0;re<A.locationSize;re++)b(A.location+re,X/A.locationSize,H,$,X*q,X/A.locationSize*re*q,fe)}}else if(se!==void 0){const $=se[le];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(A.location,$);break;case 3:i.vertexAttrib3fv(A.location,$);break;case 4:i.vertexAttrib4fv(A.location,$);break;default:i.vertexAttrib1fv(A.location,$)}}}}w()}function I(){D();for(const y in n){const L=n[y];for(const ie in L){const J=L[ie];for(const ce in J)f(J[ce].object),delete J[ce];delete L[ie]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const ie in L){const J=L[ie];for(const ce in J)f(J[ce].object),delete J[ce];delete L[ie]}delete n[y.id]}function T(y){for(const L in n){const ie=n[L];if(ie[y.id]===void 0)continue;const J=ie[y.id];for(const ce in J)f(J[ce].object),delete J[ce];delete ie[y.id]}}function D(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function yv(i,e,t){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function o(l,f,h){h!==0&&(i.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function a(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=f[g];t.update(m,n,1)}function c(l,f,h,u){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],f[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,f,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_]*u[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const D=T===So&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yi&&!D)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:I,maxSamples:R}}function Ev(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new pr,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||r;return r=u,n=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?f(null):l();else{const w=s?0:n,b=w*4;let v=d.clippingState||null;c.value=v,v=f(g,u,b,m);for(let I=0;I!==b;++I)v[I]=t[I];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,u,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const d=m+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,v=m;b!==_;++b,v+=4)o.copy(h[b]).applyMatrix4(w,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Sv(i){let e=new WeakMap;function t(o,a){return a===Pl?o.mapping=_s:a===Il&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pl||a===Il)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new L_(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Mv extends bp{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,Wu=[.125,.215,.35,.446,.526,.582],xr=20,Xc=new Mv,$u=new dt;let qc=null,Yc=0,jc=0,Kc=!1;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,Xu=[new K(-mr,Jr,0),new K(mr,Jr,0),new K(-Jr,0,mr),new K(Jr,0,mr),new K(0,mr,-Jr),new K(0,mr,Jr),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class qu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,jc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:So,format:Fn,colorSpace:As,depthBuffer:!1},r=Yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tv(s)),this._blurMaterial=wv(s,e,t)}return r}_compileMaterial(e){const t=new Ei(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,n,r){const a=new wn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor($u),f.toneMapping=Ki,f.autoClear=!1;const m=new Sp({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Ei(new Ro,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy($u),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):w===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const b=this._cubeSize;ra(r,w*b,d>2?b:0,b,b),f.setRenderTarget(r),_&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_s||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ra(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xu[(r-s-1)%Xu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ei(this._lodPlanes[r],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xr-1),_=s/g,p=isFinite(s)?1+Math.floor(f*_):xr;p>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const d=[];let w=0;for(let T=0;T<xr;++T){const D=T/_,M=Math.exp(-D*D/2);d.push(M),T===0?w+=M:T<p&&(w+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/w;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const v=this._sizeLods[r],I=3*v*(r>b-rs?r-b+rs:0),R=4*(this._cubeSize-v);ra(t,I,R,3*v,2*v),c.setRenderTarget(t),c.render(h,Xc)}}function Tv(i){const e=[],t=[],n=[];let r=i;const s=i-rs+1+Wu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-rs?c=Wu[o-i+rs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,h=1+l,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,g=6,_=3,p=2,d=1,w=new Float32Array(_*g*m),b=new Float32Array(p*g*m),v=new Float32Array(d*g*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,D=R>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];w.set(M,_*g*R),b.set(u,p*g*R);const y=[R,R,R,R,R,R];v.set(y,d*g*R)}const I=new ri;I.setAttribute("position",new Yt(w,_)),I.setAttribute("uv",new Yt(b,p)),I.setAttribute("faceIndex",new Yt(v,d)),e.push(I),r>rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yu(i,e,t){const n=new Cr(i,e,t);return n.texture.mapping=nc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ra(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wv(i,e,t){const n=new Float32Array(xr),r=new K(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ju(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ku(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pl||c===Il,f=c===_s||c===xs;if(l||f){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new qu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new qu(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Av(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Rv(i,e,t,n){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(h){const u=h.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const u=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let b=0,v=w.length;b<v;b+=3){const I=w[b+0],R=w[b+1],T=w[b+2];u.push(I,R,R,T,T,I)}}else if(g!==void 0){const w=g.array;_=g.version;for(let b=0,v=w.length/3-1;b<v;b+=3){const I=b+0,R=b+1,T=b+2;u.push(I,R,R,T,T,I)}}else return;const p=new(gp(u)?Tp:Mp)(u,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function Cv(i,e,t){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,m){i.drawElements(n,m,s,u*o),t.update(m,n,1)}function l(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,u*o,g),t.update(m,n,g))}function f(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,u,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function h(u,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<u.length;d++)l(u[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,u,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=m[w]*_[w];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Dv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Pv(i,e,t){const n=new WeakMap,r=new It;function s(o,a,c){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let I=a.attributes.position.count*v,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const T=new Float32Array(I*R*4*h),D=new xp(T,I,R,h);D.type=yi,D.needsUpdate=!0;const M=v*4;for(let L=0;L<h;L++){const ie=d[L],J=w[L],ce=b[L],oe=I*R*4*L;for(let se=0;se<ie.count;se++){const le=se*M;g===!0&&(r.fromBufferAttribute(ie,se),T[oe+le+0]=r.x,T[oe+le+1]=r.y,T[oe+le+2]=r.z,T[oe+le+3]=0),_===!0&&(r.fromBufferAttribute(J,se),T[oe+le+4]=r.x,T[oe+le+5]=r.y,T[oe+le+6]=r.z,T[oe+le+7]=0),p===!0&&(r.fromBufferAttribute(ce,se),T[oe+le+8]=r.x,T[oe+le+9]=r.y,T[oe+le+10]=r.z,T[oe+le+11]=ce.itemSize===4?r.w:1)}}u={count:h,texture:D,size:new xt(I,R)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Iv(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Dp extends un{constructor(e,t,n,r,s,o,a,c,l,f=os){if(f!==os&&f!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===os&&(n=Rr),n===void 0&&f===vs&&(n=ys),super(null,r,s,o,a,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kn,this.minFilter=c!==void 0?c:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Pp=new un,Zu=new Dp(1,1),Ip=new xp,Lp=new __,Up=new Ap,Ju=[],Qu=[],eh=new Float32Array(16),th=new Float32Array(9),nh=new Float32Array(4);function Cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ju[r];if(s===void 0&&(s=new Float32Array(r),Ju[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sc(i,e){let t=Qu[e];t===void 0&&(t=new Int32Array(e),Qu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Fv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;nh.set(n),i.uniformMatrix2fv(this.addr,!1,nh),Vt(t,n)}}function Bv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Vt(t,n)}}function kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),Vt(t,n)}}function zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function Yv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zu.compareFunction=mp,s=Zu):s=Pp,t.setTexture2D(e||s,r)}function jv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lp,r)}function Kv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Up,r)}function Zv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ip,r)}function Jv(i){switch(i){case 5126:return Lv;case 35664:return Uv;case 35665:return Nv;case 35666:return Ov;case 35674:return Fv;case 35675:return Bv;case 35676:return kv;case 5124:case 35670:return zv;case 35667:case 35671:return Vv;case 35668:case 35672:return Hv;case 35669:case 35673:return Gv;case 5125:return Wv;case 36294:return $v;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}function Qv(i,e){i.uniform1fv(this.addr,e)}function eE(i,e){const t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function tE(i,e){const t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function nE(i,e){const t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function iE(i,e){const t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rE(i,e){const t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sE(i,e){const t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function oE(i,e){i.uniform1iv(this.addr,e)}function aE(i,e){i.uniform2iv(this.addr,e)}function cE(i,e){i.uniform3iv(this.addr,e)}function lE(i,e){i.uniform4iv(this.addr,e)}function fE(i,e){i.uniform1uiv(this.addr,e)}function uE(i,e){i.uniform2uiv(this.addr,e)}function hE(i,e){i.uniform3uiv(this.addr,e)}function dE(i,e){i.uniform4uiv(this.addr,e)}function pE(i,e,t){const n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Pp,s[o])}function mE(i,e,t){const n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Lp,s[o])}function gE(i,e,t){const n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Up,s[o])}function _E(i,e,t){const n=this.cache,r=e.length,s=sc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ip,s[o])}function xE(i){switch(i){case 5126:return Qv;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return cE;case 35669:case 35673:return lE;case 5125:return fE;case 36294:return uE;case 36295:return hE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return _E}}class yE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jv(t.type)}}class vE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xE(t.type)}}class EE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function ih(i,e){i.seq.push(e),i.map[e.id]=e}function SE(i,e,t){const n=i.name,r=n.length;for(Zc.lastIndex=0;;){const s=Zc.exec(n),o=Zc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ih(t,l===void 0?new yE(a,i,e):new vE(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new EE(a),ih(t,h)),t=h}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);SE(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function rh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ME=37297;let TE=0;function wE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const sh=new Ge;function bE(i){tt._getMatrix(sh,tt.workingColorSpace,i);const e=`mat3( ${sh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case ic:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wE(i.getShaderSource(e),o)}else return r}function AE(i,e){const t=bE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RE(i,e){let t;switch(e){case G0:t="Linear";break;case W0:t="Reinhard";break;case $0:t="Cineon";break;case X0:t="ACESFilmic";break;case Y0:t="AgX";break;case j0:t="Neutral";break;case q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new K;function CE(){tt.getLuminanceCoefficients(sa);const i=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function PE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function IE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xs(i){return i!==""}function ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(i){return i.replace(LE,NE)}const UE=new Map;function NE(i,e){let t=Xe[e];if(t===void 0){const n=UE.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ff(t)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(OE,FE)}function FE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===np?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===S0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function kE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function VE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ip:e="ENVMAP_BLENDING_MULTIPLY";break;case V0:e="ENVMAP_BLENDING_MIX";break;case H0:e="ENVMAP_BLENDING_ADD";break}return e}function HE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function GE(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=BE(t),l=kE(t),f=zE(t),h=VE(t),u=HE(t),m=DE(t),g=PE(s),_=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),d.length>0&&(d+=`
`)):(p=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),d=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Ki?RE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,AE("linearToOutputTexel",t.outputColorSpace),CE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=ff(o),o=ah(o,t),o=ch(o,t),a=ff(a),a=ah(a,t),a=ch(a,t),o=lh(o),a=lh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=w+p+o,v=w+d+a,I=rh(r,r.VERTEX_SHADER,b),R=rh(r,r.FRAGMENT_SHADER,v);r.attachShader(_,I),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(L){if(i.debug.checkShaderErrors){const ie=r.getProgramInfoLog(_).trim(),J=r.getShaderInfoLog(I).trim(),ce=r.getShaderInfoLog(R).trim();let oe=!0,se=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,I,R);else{const le=oh(r,I,"vertex"),A=oh(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ie+`
`+le+`
`+A)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(J===""||ce==="")&&(se=!1);se&&(L.diagnostics={runnable:oe,programLog:ie,vertexShader:{log:J,prefix:p},fragmentShader:{log:ce,prefix:d}})}r.deleteShader(I),r.deleteShader(R),D=new wa(r,_),M=IE(r,_)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,ME)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}let WE=0;class $E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new XE(e),t.set(e,n)),n}}class XE{constructor(e){this.id=WE++,this.code=e,this.usedTimes=0}}function qE(i,e,t,n,r,s,o){const a=new vp,c=new $E,l=new Set,f=[],h=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,y,L,ie,J){const ce=ie.fog,oe=J.geometry,se=M.isMeshStandardMaterial?ie.environment:null,le=(M.isMeshStandardMaterial?t:e).get(M.envMap||se),A=le&&le.mapping===nc?le.image.height:null,W=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,X=$!==void 0?$.length:0;let Z=0;oe.morphAttributes.position!==void 0&&(Z=1),oe.morphAttributes.normal!==void 0&&(Z=2),oe.morphAttributes.color!==void 0&&(Z=3);let pe,H,q,fe;if(W){const lt=Kn[W];pe=lt.vertexShader,H=lt.fragmentShader}else pe=M.vertexShader,H=M.fragmentShader,c.update(M),q=c.getVertexShaderID(M),fe=c.getFragmentShaderID(M);const re=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Pe=J.isInstancedMesh===!0,Ue=J.isBatchedMesh===!0,Qe=!!M.map,Ye=!!M.matcap,gt=!!le,O=!!M.aoMap,At=!!M.lightMap,Ne=!!M.bumpMap,qe=!!M.normalMap,Ae=!!M.displacementMap,ct=!!M.emissiveMap,Le=!!M.metalnessMap,C=!!M.roughnessMap,x=M.anisotropy>0,U=M.clearcoat>0,te=M.dispersion>0,ne=M.iridescence>0,ee=M.sheen>0,Te=M.transmission>0,me=x&&!!M.anisotropyMap,Me=U&&!!M.clearcoatMap,je=U&&!!M.clearcoatNormalMap,ue=U&&!!M.clearcoatRoughnessMap,we=ne&&!!M.iridescenceMap,Fe=ne&&!!M.iridescenceThicknessMap,ke=ee&&!!M.sheenColorMap,be=ee&&!!M.sheenRoughnessMap,Je=!!M.specularMap,$e=!!M.specularColorMap,yt=!!M.specularIntensityMap,N=Te&&!!M.transmissionMap,_e=Te&&!!M.thicknessMap,Q=!!M.gradientMap,ae=!!M.alphaMap,Ee=M.alphaTest>0,xe=!!M.alphaHash,Ve=!!M.extensions;let Dt=Ki;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const jt={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:H,defines:M.defines,customVertexShaderID:q,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ue,batchingColor:Ue&&J._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&J.instanceColor!==null,instancingMorph:Pe&&J.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:As,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:Ye,envMap:gt,envMapMode:gt&&le.mapping,envMapCubeUVHeight:A,aoMap:O,lightMap:At,bumpMap:Ne,normalMap:qe,displacementMap:u&&Ae,emissiveMap:ct,normalMapObjectSpace:qe&&M.normalMapType===e_,normalMapTangentSpace:qe&&M.normalMapType===Q0,metalnessMap:Le,roughnessMap:C,anisotropy:x,anisotropyMap:me,clearcoat:U,clearcoatMap:Me,clearcoatNormalMap:je,clearcoatRoughnessMap:ue,dispersion:te,iridescence:ne,iridescenceMap:we,iridescenceThicknessMap:Fe,sheen:ee,sheenColorMap:ke,sheenRoughnessMap:be,specularMap:Je,specularColorMap:$e,specularIntensityMap:yt,transmission:Te,transmissionMap:N,thicknessMap:_e,gradientMap:Q,opaque:M.transparent===!1&&M.blending===ss&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ee,alphaHash:xe,combine:M.combine,mapUv:Qe&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:At&&_(M.lightMap.channel),bumpMapUv:Ne&&_(M.bumpMap.channel),normalMapUv:qe&&_(M.normalMap.channel),displacementMapUv:Ae&&_(M.displacementMap.channel),emissiveMapUv:ct&&_(M.emissiveMap.channel),metalnessMapUv:Le&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:me&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(M.sheenRoughnessMap.channel),specularMapUv:Je&&_(M.specularMap.channel),specularColorMapUv:$e&&_(M.specularColorMap.channel),specularIntensityMapUv:yt&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:_e&&_(M.thicknessMap.channel),alphaMapUv:ae&&_(M.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(qe||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!oe.attributes.uv&&(Qe||ae),fog:!!ce,useFog:M.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ve,skinning:J.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Z,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:ct&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xi,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&M.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function d(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(w(y,M),b(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=g[M.type];let L;if(y){const ie=Kn[y];L=C_.clone(ie.uniforms)}else L=M.uniforms;return L}function I(M,y){let L;for(let ie=0,J=f.length;ie<J;ie++){const ce=f[ie];if(ce.cacheKey===y){L=ce,++L.usedTimes;break}}return L===void 0&&(L=new GE(i,y,M,s),f.push(L)),L}function R(M){if(--M.usedTimes===0){const y=f.indexOf(M);f[y]=f[f.length-1],f.pop(),M.destroy()}}function T(M){c.remove(M)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:I,releaseProgram:R,releaseShaderCache:T,programs:f,dispose:D}}function YE(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function jE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,u,m,g,_,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:u,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function a(h,u,m,g,_,p){const d=o(h,u,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,u,m,g,_,p){const d=o(h,u,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,u){t.length>1&&t.sort(h||jE),n.length>1&&n.sort(u||uh),r.length>1&&r.sort(u||uh)}function f(){for(let h=e,u=i.length;h<u;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:f,sort:l}}function KE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new hh,i.set(n,[o])):r>=s.length?(o=new hh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ZE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new dt};break;case"SpotLight":t={position:new K,direction:new K,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function JE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let QE=0;function eS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tS(i){const e=new ZE,t=JE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new K);const r=new K,s=new Ut,o=new Ut;function a(l){let f=0,h=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,w=0,b=0,v=0,I=0,R=0,T=0;l.sort(eS);for(let M=0,y=l.length;M<y;M++){const L=l[M],ie=L.color,J=L.intensity,ce=L.distance,oe=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=ie.r*J,h+=ie.g*J,u+=ie.b*J;else if(L.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(L.sh.coefficients[se],J);T++}else if(L.isDirectionalLight){const se=e.get(L);if(se.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const le=L.shadow,A=t.get(L);A.shadowIntensity=le.intensity,A.shadowBias=le.bias,A.shadowNormalBias=le.normalBias,A.shadowRadius=le.radius,A.shadowMapSize=le.mapSize,n.directionalShadow[m]=A,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=se,m++}else if(L.isSpotLight){const se=e.get(L);se.position.setFromMatrixPosition(L.matrixWorld),se.color.copy(ie).multiplyScalar(J),se.distance=ce,se.coneCos=Math.cos(L.angle),se.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),se.decay=L.decay,n.spot[_]=se;const le=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,le.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=le.matrix,L.castShadow){const A=t.get(L);A.shadowIntensity=le.intensity,A.shadowBias=le.bias,A.shadowNormalBias=le.normalBias,A.shadowRadius=le.radius,A.shadowMapSize=le.mapSize,n.spotShadow[_]=A,n.spotShadowMap[_]=oe,v++}_++}else if(L.isRectAreaLight){const se=e.get(L);se.color.copy(ie).multiplyScalar(J),se.halfWidth.set(L.width*.5,0,0),se.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=se,p++}else if(L.isPointLight){const se=e.get(L);if(se.color.copy(L.color).multiplyScalar(L.intensity),se.distance=L.distance,se.decay=L.decay,L.castShadow){const le=L.shadow,A=t.get(L);A.shadowIntensity=le.intensity,A.shadowBias=le.bias,A.shadowNormalBias=le.normalBias,A.shadowRadius=le.radius,A.shadowMapSize=le.mapSize,A.shadowCameraNear=le.camera.near,A.shadowCameraFar=le.camera.far,n.pointShadow[g]=A,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=se,g++}else if(L.isHemisphereLight){const se=e.get(L);se.skyColor.copy(L.color).multiplyScalar(J),se.groundColor.copy(L.groundColor).multiplyScalar(J),n.hemi[d]=se,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==v||D.numSpotMaps!==I||D.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=v,D.numSpotMaps=I,D.numLightProbes=T,n.version=QE++)}function c(l,f){let h=0,u=0,m=0,g=0,_=0;const p=f.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){const b=l[d];if(b.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),h++}else if(b.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function dh(i){const e=new tS(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function nS(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new dh(i),e.set(r,[a])):s>=o.length?(a=new dh(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class iS extends Ao{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends Ao{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aS(i,e,t){let n=new Rp;const r=new xt,s=new xt,o=new It,a=new iS({depthPacking:J0}),c=new rS,l={},f=t.maxTextureSize,h={[tr]:fn,[fn]:tr,[xi]:xi},u=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:sS,fragmentShader:oS}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new ri;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ei(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=np;let d=this.type;this.render=function(R,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),ie=i.state;ie.setBlending(ji),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const J=d!==di&&this.type===di,ce=d===di&&this.type!==di;for(let oe=0,se=R.length;oe<se;oe++){const le=R[oe],A=le.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);const W=A.getFrameExtents();if(r.multiply(W),s.copy(A.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,A.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,A.mapSize.y=s.y)),A.map===null||J===!0||ce===!0){const X=this.type!==di?{minFilter:kn,magFilter:kn}:{};A.map!==null&&A.map.dispose(),A.map=new Cr(r.x,r.y,X),A.map.texture.name=le.name+".shadowMap",A.camera.updateProjectionMatrix()}i.setRenderTarget(A.map),i.clear();const $=A.getViewportCount();for(let X=0;X<$;X++){const Z=A.getViewport(X);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),ie.viewport(o),A.updateMatrices(le,X),n=A.getFrustum(),v(T,D,A.camera,le,this.type)}A.isPointLightShadow!==!0&&this.type===di&&w(A,D),A.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,L)};function w(R,T){const D=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Cr(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,D,u,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,D,m,_,null)}function b(R,T,D,M){let y=null;const L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const ie=y.uuid,J=T.uuid;let ce=l[ie];ce===void 0&&(ce={},l[ie]=ce);let oe=ce[J];oe===void 0&&(oe=y.clone(),ce[J]=oe,T.addEventListener("dispose",I)),y=oe}if(y.visible=T.visible,y.wireframe=T.wireframe,M===di?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const ie=i.properties.get(y);ie.light=D}return y}function v(R,T,D,M,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===di)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const J=e.update(R),ce=R.material;if(Array.isArray(ce)){const oe=J.groups;for(let se=0,le=oe.length;se<le;se++){const A=oe[se],W=ce[A.materialIndex];if(W&&W.visible){const $=b(R,W,M,y);R.onBeforeShadow(i,R,T,D,J,$,A),i.renderBufferDirect(D,null,J,$,R,A),R.onAfterShadow(i,R,T,D,J,$,A)}}}else if(ce.visible){const oe=b(R,ce,M,y);R.onBeforeShadow(i,R,T,D,J,oe,null),i.renderBufferDirect(D,null,J,oe,R,null),R.onAfterShadow(i,R,T,D,J,oe,null)}}const ie=R.children;for(let J=0,ce=ie.length;J<ce;J++)v(ie[J],T,D,M,y)}function I(R){R.target.removeEventListener("dispose",I);for(const D in l){const M=l[D],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const cS={[Tl]:wl,[bl]:Cl,[Al]:Dl,[gs]:Rl,[wl]:Tl,[Cl]:bl,[Dl]:Al,[Rl]:gs};function lS(i,e){function t(){let N=!1;const _e=new It;let Q=null;const ae=new It(0,0,0,0);return{setMask:function(Ee){Q!==Ee&&!N&&(i.colorMask(Ee,Ee,Ee,Ee),Q=Ee)},setLocked:function(Ee){N=Ee},setClear:function(Ee,xe,Ve,Dt,jt){jt===!0&&(Ee*=Dt,xe*=Dt,Ve*=Dt),_e.set(Ee,xe,Ve,Dt),ae.equals(_e)===!1&&(i.clearColor(Ee,xe,Ve,Dt),ae.copy(_e))},reset:function(){N=!1,Q=null,ae.set(-1,0,0,0)}}}function n(){let N=!1,_e=!1,Q=null,ae=null,Ee=null;return{setReversed:function(xe){if(_e!==xe){const Ve=e.get("EXT_clip_control");_e?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Ee;Ee=null,this.setClear(Dt)}_e=xe},getReversed:function(){return _e},setTest:function(xe){xe?re(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(xe){Q!==xe&&!N&&(i.depthMask(xe),Q=xe)},setFunc:function(xe){if(_e&&(xe=cS[xe]),ae!==xe){switch(xe){case Tl:i.depthFunc(i.NEVER);break;case wl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Al:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=xe}},setLocked:function(xe){N=xe},setClear:function(xe){Ee!==xe&&(_e&&(xe=1-xe),i.clearDepth(xe),Ee=xe)},reset:function(){N=!1,Q=null,ae=null,Ee=null,_e=!1}}}function r(){let N=!1,_e=null,Q=null,ae=null,Ee=null,xe=null,Ve=null,Dt=null,jt=null;return{setTest:function(lt){N||(lt?re(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(lt){_e!==lt&&!N&&(i.stencilMask(lt),_e=lt)},setFunc:function(lt,An,si){(Q!==lt||ae!==An||Ee!==si)&&(i.stencilFunc(lt,An,si),Q=lt,ae=An,Ee=si)},setOp:function(lt,An,si){(xe!==lt||Ve!==An||Dt!==si)&&(i.stencilOp(lt,An,si),xe=lt,Ve=An,Dt=si)},setLocked:function(lt){N=lt},setClear:function(lt){jt!==lt&&(i.clearStencil(lt),jt=lt)},reset:function(){N=!1,_e=null,Q=null,ae=null,Ee=null,xe=null,Ve=null,Dt=null,jt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let f={},h={},u=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,b=null,v=null,I=null,R=null,T=new dt(0,0,0),D=0,M=!1,y=null,L=null,ie=null,J=null,ce=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const A=i.getParameter(i.VERSION);A.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(A)[1]),se=le>=1):A.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),se=le>=2);let W=null,$={};const X=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),pe=new It().fromArray(X),H=new It().fromArray(Z);function q(N,_e,Q,ae){const Ee=new Uint8Array(4),xe=i.createTexture();i.bindTexture(N,xe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Q;Ve++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(_e+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return xe}const fe={};fe[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(gs),Ne(!1),qe(xu),re(i.CULL_FACE),O(ji);function re(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function ve(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function Pe(N,_e){return h[N]!==_e?(i.bindFramebuffer(N,_e),h[N]=_e,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_e),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ue(N,_e){let Q=m,ae=!1;if(N){Q=u.get(_e),Q===void 0&&(Q=[],u.set(_e,Q));const Ee=N.textures;if(Q.length!==Ee.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ve=Ee.length;xe<Ve;xe++)Q[xe]=i.COLOR_ATTACHMENT0+xe;Q.length=Ee.length,ae=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Q)}function Qe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Ye={[_r]:i.FUNC_ADD,[T0]:i.FUNC_SUBTRACT,[w0]:i.FUNC_REVERSE_SUBTRACT};Ye[b0]=i.MIN,Ye[A0]=i.MAX;const gt={[R0]:i.ZERO,[C0]:i.ONE,[D0]:i.SRC_COLOR,[Sl]:i.SRC_ALPHA,[O0]:i.SRC_ALPHA_SATURATE,[U0]:i.DST_COLOR,[I0]:i.DST_ALPHA,[P0]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[N0]:i.ONE_MINUS_DST_COLOR,[L0]:i.ONE_MINUS_DST_ALPHA,[F0]:i.CONSTANT_COLOR,[B0]:i.ONE_MINUS_CONSTANT_COLOR,[k0]:i.CONSTANT_ALPHA,[z0]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,_e,Q,ae,Ee,xe,Ve,Dt,jt,lt){if(N===ji){_===!0&&(ve(i.BLEND),_=!1);return}if(_===!1&&(re(i.BLEND),_=!0),N!==M0){if(N!==p||lt!==M){if((d!==_r||v!==_r)&&(i.blendEquation(i.FUNC_ADD),d=_r,v=_r),lt)switch(N){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,b=null,I=null,R=null,T.set(0,0,0),D=0,p=N,M=lt}return}Ee=Ee||_e,xe=xe||Q,Ve=Ve||ae,(_e!==d||Ee!==v)&&(i.blendEquationSeparate(Ye[_e],Ye[Ee]),d=_e,v=Ee),(Q!==w||ae!==b||xe!==I||Ve!==R)&&(i.blendFuncSeparate(gt[Q],gt[ae],gt[xe],gt[Ve]),w=Q,b=ae,I=xe,R=Ve),(Dt.equals(T)===!1||jt!==D)&&(i.blendColor(Dt.r,Dt.g,Dt.b,jt),T.copy(Dt),D=jt),p=N,M=!1}function At(N,_e){N.side===xi?ve(i.CULL_FACE):re(i.CULL_FACE);let Q=N.side===fn;_e&&(Q=!Q),Ne(Q),N.blending===ss&&N.transparent===!1?O(ji):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ae=N.stencilWrite;a.setTest(ae),ae&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function qe(N){N!==v0?(re(i.CULL_FACE),N!==L&&(N===xu?i.cullFace(i.BACK):N===E0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),L=N}function Ae(N){N!==ie&&(se&&i.lineWidth(N),ie=N)}function ct(N,_e,Q){N?(re(i.POLYGON_OFFSET_FILL),(J!==_e||ce!==Q)&&(i.polygonOffset(_e,Q),J=_e,ce=Q)):ve(i.POLYGON_OFFSET_FILL)}function Le(N){N?re(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+oe-1),W!==N&&(i.activeTexture(N),W=N)}function x(N,_e,Q){Q===void 0&&(W===null?Q=i.TEXTURE0+oe-1:Q=W);let ae=$[Q];ae===void 0&&(ae={type:void 0,texture:void 0},$[Q]=ae),(ae.type!==N||ae.texture!==_e)&&(W!==Q&&(i.activeTexture(Q),W=Q),i.bindTexture(N,_e||fe[N]),ae.type=N,ae.texture=_e)}function U(){const N=$[W];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){pe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),pe.copy(N))}function be(N){H.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),H.copy(N))}function Je(N,_e){let Q=l.get(_e);Q===void 0&&(Q=new WeakMap,l.set(_e,Q));let ae=Q.get(N);ae===void 0&&(ae=i.getUniformBlockIndex(_e,N.name),Q.set(N,ae))}function $e(N,_e){const ae=l.get(_e).get(N);c.get(_e)!==ae&&(i.uniformBlockBinding(_e,ae,N.__bindingPointIndex),c.set(_e,ae))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},W=null,$={},h={},u=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,b=null,v=null,I=null,R=null,T=new dt(0,0,0),D=0,M=!1,y=null,L=null,ie=null,J=null,ce=null,pe.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:ve,bindFramebuffer:Pe,drawBuffers:Ue,useProgram:Qe,setBlending:O,setMaterial:At,setFlipSided:Ne,setCullFace:qe,setLineWidth:Ae,setPolygonOffset:ct,setScissorTest:Le,activeTexture:C,bindTexture:x,unbindTexture:U,compressedTexImage2D:te,compressedTexImage3D:ne,texImage2D:we,texImage3D:Fe,updateUBOMapping:Je,uniformBlockBinding:$e,texStorage2D:je,texStorage3D:ue,texSubImage2D:ee,texSubImage3D:Te,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:ke,viewport:be,reset:yt}}function ph(i,e,t,n){const r=fS(n);switch(t){case cp:return i*e;case fp:return i*e;case up:return i*e*2;case hp:return i*e/r.components*r.byteLength;case kf:return i*e/r.components*r.byteLength;case dp:return i*e*2/r.components*r.byteLength;case zf:return i*e*2/r.components*r.byteLength;case lp:return i*e*3/r.components*r.byteLength;case Fn:return i*e*4/r.components*r.byteLength;case Vf:return i*e*4/r.components*r.byteLength;case va:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Nl:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ta:case nf:case rf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pp:case sf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case of:case af:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fS(i){switch(i){case Ai:case sp:return{byteLength:1,components:1};case no:case op:case So:return{byteLength:2,components:1};case Ff:case Bf:return{byteLength:2,components:4};case Rr:case Of:case yi:return{byteLength:4,components:1};case ap:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function uS(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,f=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return m?new OffscreenCanvas(C,x):Ua("canvas")}function _(C,x,U){let te=1;const ne=Le(C);if((ne.width>U||ne.height>U)&&(te=U/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(te*ne.width),Te=Math.floor(te*ne.height);h===void 0&&(h=g(ee,Te));const me=x?g(ee,Te):h;return me.width=ee,me.height=Te,me.getContext("2d").drawImage(C,0,0,ee,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ee+"x"+Te+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,x,U,te,ne=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=x;if(x===i.RED&&(U===i.FLOAT&&(ee=i.R32F),U===i.HALF_FLOAT&&(ee=i.R16F),U===i.UNSIGNED_BYTE&&(ee=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.R8UI),U===i.UNSIGNED_SHORT&&(ee=i.R16UI),U===i.UNSIGNED_INT&&(ee=i.R32UI),U===i.BYTE&&(ee=i.R8I),U===i.SHORT&&(ee=i.R16I),U===i.INT&&(ee=i.R32I)),x===i.RG&&(U===i.FLOAT&&(ee=i.RG32F),U===i.HALF_FLOAT&&(ee=i.RG16F),U===i.UNSIGNED_BYTE&&(ee=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.RG8UI),U===i.UNSIGNED_SHORT&&(ee=i.RG16UI),U===i.UNSIGNED_INT&&(ee=i.RG32UI),U===i.BYTE&&(ee=i.RG8I),U===i.SHORT&&(ee=i.RG16I),U===i.INT&&(ee=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),U===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),U===i.UNSIGNED_INT&&(ee=i.RGB32UI),U===i.BYTE&&(ee=i.RGB8I),U===i.SHORT&&(ee=i.RGB16I),U===i.INT&&(ee=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),U===i.UNSIGNED_INT&&(ee=i.RGBA32UI),U===i.BYTE&&(ee=i.RGBA8I),U===i.SHORT&&(ee=i.RGBA16I),U===i.INT&&(ee=i.RGBA32I)),x===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),x===i.RGBA){const Te=ne?ic:tt.getTransfer(te);U===i.FLOAT&&(ee=i.RGBA32F),U===i.HALF_FLOAT&&(ee=i.RGBA16F),U===i.UNSIGNED_BYTE&&(ee=Te===pt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(C,x){let U;return C?x===null||x===Rr||x===ys?U=i.DEPTH24_STENCIL8:x===yi?U=i.DEPTH32F_STENCIL8:x===no&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rr||x===ys?U=i.DEPTH_COMPONENT24:x===yi?U=i.DEPTH_COMPONENT32F:x===no&&(U=i.DEPTH_COMPONENT16),U}function I(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==kn&&C.minFilter!==ei?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),D(x),x.isVideoTexture&&f.delete(x)}function T(C){const x=C.target;x.removeEventListener("dispose",T),y(x)}function D(C){const x=n.get(C);if(x.__webglInit===void 0)return;const U=C.source,te=u.get(U);if(te){const ne=te[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(C),Object.keys(te).length===0&&u.delete(U)}n.remove(C)}function M(C){const x=n.get(C);i.deleteTexture(x.__webglTexture);const U=C.source,te=u.get(U);delete te[x.__cacheKey],o.memory.textures--}function y(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ne=0;ne<x.__webglFramebuffer[te].length;ne++)i.deleteFramebuffer(x.__webglFramebuffer[te][ne]);else i.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)i.deleteFramebuffer(x.__webglFramebuffer[te]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=C.textures;for(let te=0,ne=U.length;te<ne;te++){const ee=n.get(U[te]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(U[te])}n.remove(C)}let L=0;function ie(){L=0}function J(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function ce(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function oe(C,x){const U=n.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(U,C,x);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function se(C,x){const U=n.get(C);if(C.version>0&&U.__version!==C.version){H(U,C,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function le(C,x){const U=n.get(C);if(C.version>0&&U.__version!==C.version){H(U,C,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function A(C,x){const U=n.get(C);if(C.version>0&&U.__version!==C.version){q(U,C,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const W={[Ll]:i.REPEAT,[vr]:i.CLAMP_TO_EDGE,[Ul]:i.MIRRORED_REPEAT},$={[kn]:i.NEAREST,[K0]:i.NEAREST_MIPMAP_NEAREST,[ko]:i.NEAREST_MIPMAP_LINEAR,[ei]:i.LINEAR,[Mc]:i.LINEAR_MIPMAP_NEAREST,[Er]:i.LINEAR_MIPMAP_LINEAR},X={[t_]:i.NEVER,[a_]:i.ALWAYS,[n_]:i.LESS,[mp]:i.LEQUAL,[i_]:i.EQUAL,[o_]:i.GEQUAL,[r_]:i.GREATER,[s_]:i.NOTEQUAL};function Z(C,x){if(x.type===yi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ei||x.magFilter===Mc||x.magFilter===ko||x.magFilter===Er||x.minFilter===ei||x.minFilter===Mc||x.minFilter===ko||x.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[x.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,$[x.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,$[x.minFilter]),x.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,X[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kn||x.minFilter!==ko&&x.minFilter!==Er||x.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function pe(C,x){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const te=x.source;let ne=u.get(te);ne===void 0&&(ne={},u.set(te,ne));const ee=ce(x);if(ee!==C.__cacheKey){ne[ee]===void 0&&(ne[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ne[ee].usedTimes++;const Te=ne[C.__cacheKey];Te!==void 0&&(ne[C.__cacheKey].usedTimes--,Te.usedTimes===0&&M(x)),C.__cacheKey=ee,C.__webglTexture=ne[ee].texture}return U}function H(C,x,U){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);const ne=pe(C,x),ee=x.source;t.bindTexture(te,C.__webglTexture,i.TEXTURE0+U);const Te=n.get(ee);if(ee.version!==Te.__version||ne===!0){t.activeTexture(i.TEXTURE0+U);const me=tt.getPrimaries(tt.workingColorSpace),Me=x.colorSpace===$i?null:tt.getPrimaries(x.colorSpace),je=x.colorSpace===$i||me===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ue=_(x.image,!1,r.maxTextureSize);ue=ct(x,ue);const we=s.convert(x.format,x.colorSpace),Fe=s.convert(x.type);let ke=b(x.internalFormat,we,Fe,x.colorSpace,x.isVideoTexture);Z(te,x);let be;const Je=x.mipmaps,$e=x.isVideoTexture!==!0,yt=Te.__version===void 0||ne===!0,N=ee.dataReady,_e=I(x,ue);if(x.isDepthTexture)ke=v(x.format===vs,x.type),yt&&($e?t.texStorage2D(i.TEXTURE_2D,1,ke,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ke,ue.width,ue.height,0,we,Fe,null));else if(x.isDataTexture)if(Je.length>0){$e&&yt&&t.texStorage2D(i.TEXTURE_2D,_e,ke,Je[0].width,Je[0].height);for(let Q=0,ae=Je.length;Q<ae;Q++)be=Je[Q],$e?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,we,Fe,be.data):t.texImage2D(i.TEXTURE_2D,Q,ke,be.width,be.height,0,we,Fe,be.data);x.generateMipmaps=!1}else $e?(yt&&t.texStorage2D(i.TEXTURE_2D,_e,ke,ue.width,ue.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,we,Fe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,ke,ue.width,ue.height,0,we,Fe,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$e&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ke,Je[0].width,Je[0].height,ue.depth);for(let Q=0,ae=Je.length;Q<ae;Q++)if(be=Je[Q],x.format!==Fn)if(we!==null)if($e){if(N)if(x.layerUpdates.size>0){const Ee=ph(be.width,be.height,x.format,x.type);for(const xe of x.layerUpdates){const Ve=be.data.subarray(xe*Ee/be.data.BYTES_PER_ELEMENT,(xe+1)*Ee/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,xe,be.width,be.height,1,we,Ve)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,ue.depth,we,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ke,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,ue.depth,we,Fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ke,be.width,be.height,ue.depth,0,we,Fe,be.data)}else{$e&&yt&&t.texStorage2D(i.TEXTURE_2D,_e,ke,Je[0].width,Je[0].height);for(let Q=0,ae=Je.length;Q<ae;Q++)be=Je[Q],x.format!==Fn?we!==null?$e?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be.width,be.height,we,Fe,be.data):t.texImage2D(i.TEXTURE_2D,Q,ke,be.width,be.height,0,we,Fe,be.data)}else if(x.isDataArrayTexture)if($e){if(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,ke,ue.width,ue.height,ue.depth),N)if(x.layerUpdates.size>0){const Q=ph(ue.width,ue.height,x.format,x.type);for(const ae of x.layerUpdates){const Ee=ue.data.subarray(ae*Q/ue.data.BYTES_PER_ELEMENT,(ae+1)*Q/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ue.width,ue.height,1,we,Fe,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,we,Fe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,we,Fe,ue.data);else if(x.isData3DTexture)$e?(yt&&t.texStorage3D(i.TEXTURE_3D,_e,ke,ue.width,ue.height,ue.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,we,Fe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,we,Fe,ue.data);else if(x.isFramebufferTexture){if(yt)if($e)t.texStorage2D(i.TEXTURE_2D,_e,ke,ue.width,ue.height);else{let Q=ue.width,ae=ue.height;for(let Ee=0;Ee<_e;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,ke,Q,ae,0,we,Fe,null),Q>>=1,ae>>=1}}else if(Je.length>0){if($e&&yt){const Q=Le(Je[0]);t.texStorage2D(i.TEXTURE_2D,_e,ke,Q.width,Q.height)}for(let Q=0,ae=Je.length;Q<ae;Q++)be=Je[Q],$e?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,we,Fe,be):t.texImage2D(i.TEXTURE_2D,Q,ke,we,Fe,be);x.generateMipmaps=!1}else if($e){if(yt){const Q=Le(ue);t.texStorage2D(i.TEXTURE_2D,_e,ke,Q.width,Q.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Fe,ue)}else t.texImage2D(i.TEXTURE_2D,0,ke,we,Fe,ue);p(x)&&d(te),Te.__version=ee.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function q(C,x,U){if(x.image.length!==6)return;const te=pe(C,x),ne=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+U);const ee=n.get(ne);if(ne.version!==ee.__version||te===!0){t.activeTexture(i.TEXTURE0+U);const Te=tt.getPrimaries(tt.workingColorSpace),me=x.colorSpace===$i?null:tt.getPrimaries(x.colorSpace),Me=x.colorSpace===$i||Te===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const je=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,we=[];for(let ae=0;ae<6;ae++)!je&&!ue?we[ae]=_(x.image[ae],!0,r.maxCubemapSize):we[ae]=ue?x.image[ae].image:x.image[ae],we[ae]=ct(x,we[ae]);const Fe=we[0],ke=s.convert(x.format,x.colorSpace),be=s.convert(x.type),Je=b(x.internalFormat,ke,be,x.colorSpace),$e=x.isVideoTexture!==!0,yt=ee.__version===void 0||te===!0,N=ne.dataReady;let _e=I(x,Fe);Z(i.TEXTURE_CUBE_MAP,x);let Q;if(je){$e&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Je,Fe.width,Fe.height);for(let ae=0;ae<6;ae++){Q=we[ae].mipmaps;for(let Ee=0;Ee<Q.length;Ee++){const xe=Q[Ee];x.format!==Fn?ke!==null?$e?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,xe.width,xe.height,ke,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Je,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,xe.width,xe.height,ke,be,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Je,xe.width,xe.height,0,ke,be,xe.data)}}}else{if(Q=x.mipmaps,$e&&yt){Q.length>0&&_e++;const ae=Le(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ue){$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,we[ae].width,we[ae].height,ke,be,we[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,we[ae].width,we[ae].height,0,ke,be,we[ae].data);for(let Ee=0;Ee<Q.length;Ee++){const Ve=Q[Ee].image[ae].image;$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,Ve.width,Ve.height,ke,be,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Je,Ve.width,Ve.height,0,ke,be,Ve.data)}}else{$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke,be,we[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,ke,be,we[ae]);for(let Ee=0;Ee<Q.length;Ee++){const xe=Q[Ee];$e?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,ke,be,xe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Je,ke,be,xe.image[ae])}}}p(x)&&d(i.TEXTURE_CUBE_MAP),ee.__version=ne.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function fe(C,x,U,te,ne,ee){const Te=s.convert(U.format,U.colorSpace),me=s.convert(U.type),Me=b(U.internalFormat,Te,me,U.colorSpace),je=n.get(x),ue=n.get(U);if(ue.__renderTarget=x,!je.__hasExternalTextures){const we=Math.max(1,x.width>>ee),Fe=Math.max(1,x.height>>ee);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ee,Me,we,Fe,x.depth,0,Te,me,null):t.texImage2D(ne,ee,Me,we,Fe,0,Te,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),qe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,ue.__webglTexture,0,Ne(x)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,ue.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(C,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,C),x.depthBuffer){const te=x.depthTexture,ne=te&&te.isDepthTexture?te.type:null,ee=v(x.stencilBuffer,ne),Te=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=Ne(x);qe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ee,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ee,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,C)}else{const te=x.textures;for(let ne=0;ne<te.length;ne++){const ee=te[ne],Te=s.convert(ee.format,ee.colorSpace),me=s.convert(ee.type),Me=b(ee.internalFormat,Te,me,ee.colorSpace),je=Ne(x);U&&qe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Me,x.width,x.height):qe(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(x.depthTexture);te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),oe(x.depthTexture,0);const ne=te.__webglTexture,ee=Ne(x);if(x.depthTexture.format===os)qe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(x.depthTexture.format===vs)qe(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Pe(C){const x=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",ne)};te.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=te}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ve(x.__webglFramebuffer,C)}else if(U){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),re(x.__webglDepthbuffer[te],C,!1);else{const ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),re(x.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(C,x,U){const te=n.get(C);x!==void 0&&fe(te.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Pe(C)}function Qe(C){const x=C.texture,U=n.get(C),te=n.get(x);C.addEventListener("dispose",T);const ne=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,o.memory.textures++),ee){U.__webglFramebuffer=[];for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[me]=[];for(let Me=0;Me<x.mipmaps.length;Me++)U.__webglFramebuffer[me][Me]=i.createFramebuffer()}else U.__webglFramebuffer[me]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let me=0;me<x.mipmaps.length;me++)U.__webglFramebuffer[me]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Te)for(let me=0,Me=ne.length;me<Me;me++){const je=n.get(ne[me]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&qe(C)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const Me=ne[me];U.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[me]);const je=s.convert(Me.format,Me.colorSpace),ue=s.convert(Me.type),we=b(Me.internalFormat,je,ue,Me.colorSpace,C.isXRRenderTarget===!0),Fe=Ne(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,we,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,U.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),re(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Z(i.TEXTURE_CUBE_MAP,x);for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)fe(U.__webglFramebuffer[me][Me],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else fe(U.__webglFramebuffer[me],C,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let me=0,Me=ne.length;me<Me;me++){const je=ne[me],ue=n.get(je);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),Z(i.TEXTURE_2D,je),fe(U.__webglFramebuffer,C,je,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),p(je)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,te.__webglTexture),Z(me,x),x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)fe(U.__webglFramebuffer[Me],C,x,i.COLOR_ATTACHMENT0,me,Me);else fe(U.__webglFramebuffer,C,x,i.COLOR_ATTACHMENT0,me,0);p(x)&&d(me),t.unbindTexture()}C.depthBuffer&&Pe(C)}function Ye(C){const x=C.textures;for(let U=0,te=x.length;U<te;U++){const ne=x[U];if(p(ne)){const ee=w(C),Te=n.get(ne).__webglTexture;t.bindTexture(ee,Te),d(ee),t.unbindTexture()}}}const gt=[],O=[];function At(C){if(C.samples>0){if(qe(C)===!1){const x=C.textures,U=C.width,te=C.height;let ne=i.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(C),me=x.length>1;if(me)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const je=n.get(x[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,U,te,0,0,U,te,ne,i.NEAREST),c===!0&&(gt.length=0,O.length=0,gt.push(i.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(gt.push(ee),O.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Me]);const je=n.get(x[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ne(C){return Math.min(r.maxSamples,C.samples)}function qe(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(C){const x=o.render.frame;f.get(C)!==x&&(f.set(C,x),C.update())}function ct(C,x){const U=C.colorSpace,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==As&&U!==$i&&(tt.getTransfer(U)===pt?(te!==Fn||ne!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=A,this.rebindTextures=Ue,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=qe}function hS(i,e){function t(n,r=$i){let s;const o=tt.getTransfer(r);if(n===Ai)return i.UNSIGNED_BYTE;if(n===Ff)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ap)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sp)return i.BYTE;if(n===op)return i.SHORT;if(n===no)return i.UNSIGNED_SHORT;if(n===Of)return i.INT;if(n===Rr)return i.UNSIGNED_INT;if(n===yi)return i.FLOAT;if(n===So)return i.HALF_FLOAT;if(n===cp)return i.ALPHA;if(n===lp)return i.RGB;if(n===Fn)return i.RGBA;if(n===fp)return i.LUMINANCE;if(n===up)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===hp)return i.RED;if(n===kf)return i.RED_INTEGER;if(n===dp)return i.RG;if(n===zf)return i.RG_INTEGER;if(n===Vf)return i.RGBA_INTEGER;if(n===va||n===Ea||n===Sa||n===Ma)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Ol||n===Fl||n===Bl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===zl||n===Vl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kl||n===zl)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===Gl||n===Wl||n===$l||n===Xl||n===ql||n===Yl||n===jl||n===Kl||n===Zl||n===Jl||n===Ql||n===ef||n===tf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$l)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ef)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===nf||n===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ta)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pp||n===sf||n===of||n===af)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===of)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===af)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class dS extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oa extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pS={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pS)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new oa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ci({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ei(new rc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xS extends Rs{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,f=null,h=null,u=null,m=null,g=null;const _=new _S,p=t.getContextAttributes();let d=null,w=null;const b=[],v=[],I=new xt;let R=null;const T=new wn;T.viewport=new It;const D=new wn;D.viewport=new It;const M=[T,D],y=new dS;let L=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let q=b[H];return q===void 0&&(q=new Jc,b[H]=q),q.getTargetRaySpace()},this.getControllerGrip=function(H){let q=b[H];return q===void 0&&(q=new Jc,b[H]=q),q.getGripSpace()},this.getHand=function(H){let q=b[H];return q===void 0&&(q=new Jc,b[H]=q),q.getHandSpace()};function J(H){const q=v.indexOf(H.inputSource);if(q===-1)return;const fe=b[q];fe!==void 0&&(fe.update(H.inputSource,H.frame,l||o),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function ce(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",oe);for(let H=0;H<b.length;H++){const q=v[H];q!==null&&(v[H]=null,b[H].disconnect(q))}L=null,ie=null,_.reset(),e.setRenderTarget(d),m=null,u=null,h=null,r=null,w=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",oe),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Cr(m.framebufferWidth,m.framebufferHeight,{format:Fn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,fe=null,re=null;p.depth&&(re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=p.stencil?vs:os,fe=p.stencil?ys:Rr);const ve={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(ve),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new Cr(u.textureWidth,u.textureHeight,{format:Fn,type:Ai,depthTexture:new Dp(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(H){for(let q=0;q<H.removed.length;q++){const fe=H.removed[q],re=v.indexOf(fe);re>=0&&(v[re]=null,b[re].disconnect(fe))}for(let q=0;q<H.added.length;q++){const fe=H.added[q];let re=v.indexOf(fe);if(re===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=v.length){v.push(fe),re=Pe;break}else if(v[Pe]===null){v[Pe]=fe,re=Pe;break}if(re===-1)break}const ve=b[re];ve&&ve.connect(fe)}}const se=new K,le=new K;function A(H,q,fe){se.setFromMatrixPosition(q.matrixWorld),le.setFromMatrixPosition(fe.matrixWorld);const re=se.distanceTo(le),ve=q.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,Ue=ve[14]/(ve[10]-1),Qe=ve[14]/(ve[10]+1),Ye=(ve[9]+1)/ve[5],gt=(ve[9]-1)/ve[5],O=(ve[8]-1)/ve[0],At=(Pe[8]+1)/Pe[0],Ne=Ue*O,qe=Ue*At,Ae=re/(-O+At),ct=Ae*-O;if(q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(ct),H.translateZ(Ae),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ve[10]===-1)H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Le=Ue+Ae,C=Qe+Ae,x=Ne-ct,U=qe+(re-ct),te=Ye*Qe/C*Le,ne=gt*Qe/C*Le;H.projectionMatrix.makePerspective(x,U,te,ne,Le,C),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function W(H,q){q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let q=H.near,fe=H.far;_.texture!==null&&(_.depthNear>0&&(q=_.depthNear),_.depthFar>0&&(fe=_.depthFar)),y.near=D.near=T.near=q,y.far=D.far=T.far=fe,(L!==y.near||ie!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,ie=y.far),T.layers.mask=H.layers.mask|2,D.layers.mask=H.layers.mask|4,y.layers.mask=T.layers.mask|D.layers.mask;const re=H.parent,ve=y.cameras;W(y,re);for(let Pe=0;Pe<ve.length;Pe++)W(ve[Pe],re);ve.length===2?A(y,T,D):y.projectionMatrix.copy(T.projectionMatrix),$(H,y,re)};function $(H,q,fe){fe===null?H.matrix.copy(q.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(q.projectionMatrix),H.projectionMatrixInverse.copy(q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=lf*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(H){c=H,u!==null&&(u.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let X=null;function Z(H,q){if(f=q.getViewerPose(l||o),g=q,f!==null){const fe=f.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let re=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Pe=0;Pe<fe.length;Pe++){const Ue=fe[Pe];let Qe=null;if(m!==null)Qe=m.getViewport(Ue);else{const gt=h.getViewSubImage(u,Ue);Qe=gt.viewport,Pe===0&&(e.setRenderTargetTextures(w,gt.colorTexture,u.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(w))}let Ye=M[Pe];Ye===void 0&&(Ye=new wn,Ye.layers.enable(Pe),Ye.viewport=new It,M[Pe]=Ye),Ye.matrix.fromArray(Ue.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ue.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Pe===0&&(y.matrix.copy(Ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(Ye)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Pe=h.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,r.renderState)}}for(let fe=0;fe<b.length;fe++){const re=v[fe],ve=b[fe];re!==null&&ve!==void 0&&ve.update(re,q,l||o)}X&&X(H,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const pe=new Cp;pe.setAnimationLoop(Z),this.setAnimationLoop=function(H){X=H},this.dispose=function(){}}}const fr=new Ri,yS=new Ut;function vS(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,wp(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,b,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),f(p,d)):d.isMeshStandardMaterial?(s(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,w,b):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===fn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===fn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),b=w.envMap,v=w.envMapRotation;b&&(p.envMap.value=b,fr.copy(v),fr.x*=-1,fr.y*=-1,fr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),p.envMapRotation.value.setFromMatrix4(yS.makeRotationFromEuler(fr)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,w,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ES(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,b){const v=b.program;n.uniformBlockBinding(w,v)}function l(w,b){let v=r[w.id];v===void 0&&(g(w),v=f(w),r[w.id]=v,w.addEventListener("dispose",p));const I=b.program;n.updateUBOMapping(w,I);const R=e.render.frame;s[w.id]!==R&&(u(w),s[w.id]=R)}function f(w){const b=h();w.__bindingPointIndex=b;const v=i.createBuffer(),I=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const b=r[w.id],v=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,T=v.length;R<T;R++){const D=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,y=D.length;M<y;M++){const L=D[M];if(m(L,R,M,I)===!0){const ie=L.__offset,J=Array.isArray(L.value)?L.value:[L.value];let ce=0;for(let oe=0;oe<J.length;oe++){const se=J[oe],le=_(se);typeof se=="number"||typeof se=="boolean"?(L.__data[0]=se,i.bufferSubData(i.UNIFORM_BUFFER,ie+ce,L.__data)):se.isMatrix3?(L.__data[0]=se.elements[0],L.__data[1]=se.elements[1],L.__data[2]=se.elements[2],L.__data[3]=0,L.__data[4]=se.elements[3],L.__data[5]=se.elements[4],L.__data[6]=se.elements[5],L.__data[7]=0,L.__data[8]=se.elements[6],L.__data[9]=se.elements[7],L.__data[10]=se.elements[8],L.__data[11]=0):(se.toArray(L.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ie,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,b,v,I){const R=w.value,T=b+"_"+v;if(I[T]===void 0)return typeof R=="number"||typeof R=="boolean"?I[T]=R:I[T]=R.clone(),!0;{const D=I[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return I[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(w){const b=w.uniforms;let v=0;const I=16;for(let T=0,D=b.length;T<D;T++){const M=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,L=M.length;y<L;y++){const ie=M[y],J=Array.isArray(ie.value)?ie.value:[ie.value];for(let ce=0,oe=J.length;ce<oe;ce++){const se=J[ce],le=_(se),A=v%I,W=A%le.boundary,$=A+W;v+=W,$!==0&&I-$<le.storage&&(v+=I-$),ie.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=v,v+=le.storage}}}const R=v%I;return R>0&&(v+=I-R),w.__size=v,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class SS{constructor(e={}){const{canvas:t=l_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let I=!1,R=0,T=0,D=null,M=-1,y=null;const L=new It,ie=new It;let J=null;const ce=new dt(0);let oe=0,se=t.width,le=t.height,A=1,W=null,$=null;const X=new It(0,0,se,le),Z=new It(0,0,se,le);let pe=!1;const H=new Rp;let q=!1,fe=!1;const re=new Ut,ve=new Ut,Pe=new K,Ue=new It,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function gt(){return D===null?A:1}let O=n;function At(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nf}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){const k="webgl2";if(O=At(k,S),O===null)throw At(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ne,qe,Ae,ct,Le,C,x,U,te,ne,ee,Te,me,Me,je,ue,we,Fe,ke,be,Je,$e,yt,N;function _e(){Ne=new Av(O),Ne.init(),$e=new hS(O,Ne),qe=new vv(O,Ne,e,$e),Ae=new lS(O,Ne),qe.reverseDepthBuffer&&u&&Ae.buffers.depth.setReversed(!0),ct=new Dv(O),Le=new YE,C=new uS(O,Ne,Ae,Le,qe,$e,ct),x=new Sv(v),U=new bv(v),te=new O_(O),yt=new xv(O,te),ne=new Rv(O,te,ct,yt),ee=new Iv(O,ne,te,ct),ke=new Pv(O,qe,C),ue=new Ev(Le),Te=new qE(v,x,U,Ne,qe,yt,ue),me=new vS(v,Le),Me=new KE,je=new nS(Ne),Fe=new _v(v,x,U,Ae,ee,m,c),we=new aS(v,ee,qe),N=new ES(O,ct,qe,Ae),be=new yv(O,Ne,ct),Je=new Cv(O,Ne,ct),ct.programs=Te.programs,v.capabilities=qe,v.extensions=Ne,v.properties=Le,v.renderLists=Me,v.shadowMap=we,v.state=Ae,v.info=ct}_e();const Q=new xS(v,O);this.xr=Q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=Ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(S){S!==void 0&&(A=S,this.setSize(se,le,!1))},this.getSize=function(S){return S.set(se,le)},this.setSize=function(S,k,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=S,le=k,t.width=Math.floor(S*A),t.height=Math.floor(k*A),Y===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(se*A,le*A).floor()},this.setDrawingBufferSize=function(S,k,Y){se=S,le=k,A=Y,t.width=Math.floor(S*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(X)},this.setViewport=function(S,k,Y,j){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,k,Y,j),Ae.viewport(L.copy(X).multiplyScalar(A).round())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,k,Y,j){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,k,Y,j),Ae.scissor(ie.copy(Z).multiplyScalar(A).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(S){Ae.setScissorTest(pe=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(S=!0,k=!0,Y=!0){let j=0;if(S){let z=!1;if(D!==null){const de=D.texture.format;z=de===Vf||de===zf||de===kf}if(z){const de=D.texture.type,ye=de===Ai||de===Rr||de===no||de===ys||de===Ff||de===Bf,Re=Fe.getClearColor(),Ce=Fe.getClearAlpha(),ze=Re.r,He=Re.g,De=Re.b;ye?(g[0]=ze,g[1]=He,g[2]=De,g[3]=Ce,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=ze,_[1]=He,_[2]=De,_[3]=Ce,O.clearBufferiv(O.COLOR,0,_))}else j|=O.COLOR_BUFFER_BIT}k&&(j|=O.DEPTH_BUFFER_BIT),Y&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Me.dispose(),je.dispose(),Le.dispose(),x.dispose(),U.dispose(),ee.dispose(),yt.dispose(),N.dispose(),Te.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",su),Q.removeEventListener("sessionend",ou),rr.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=ct.autoReset,k=we.enabled,Y=we.autoUpdate,j=we.needsUpdate,z=we.type;_e(),ct.autoReset=S,we.enabled=k,we.autoUpdate=Y,we.needsUpdate=j,we.type=z}function xe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const k=S.target;k.removeEventListener("dispose",Ve),Dt(k)}function Dt(S){jt(S),Le.remove(S)}function jt(S){const k=Le.get(S).programs;k!==void 0&&(k.forEach(function(Y){Te.releaseProgram(Y)}),S.isShaderMaterial&&Te.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,Y,j,z,de){k===null&&(k=Qe);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Re=ag(S,k,Y,j,z);Ae.setMaterial(j,ye);let Ce=Y.index,ze=1;if(j.wireframe===!0){if(Ce=ne.getWireframeAttribute(Y),Ce===void 0)return;ze=2}const He=Y.drawRange,De=Y.attributes.position;let nt=He.start*ze,vt=(He.start+He.count)*ze;de!==null&&(nt=Math.max(nt,de.start*ze),vt=Math.min(vt,(de.start+de.count)*ze)),Ce!==null?(nt=Math.max(nt,0),vt=Math.min(vt,Ce.count)):De!=null&&(nt=Math.max(nt,0),vt=Math.min(vt,De.count));const St=vt-nt;if(St<0||St===1/0)return;yt.setup(z,j,Re,Y,Ce);let sn,rt=be;if(Ce!==null&&(sn=te.get(Ce),rt=Je,rt.setIndex(sn)),z.isMesh)j.wireframe===!0?(Ae.setLineWidth(j.wireframeLinewidth*gt()),rt.setMode(O.LINES)):rt.setMode(O.TRIANGLES);else if(z.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),Ae.setLineWidth(Ie*gt()),z.isLineSegments?rt.setMode(O.LINES):z.isLineLoop?rt.setMode(O.LINE_LOOP):rt.setMode(O.LINE_STRIP)}else z.isPoints?rt.setMode(O.POINTS):z.isSprite&&rt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ie=z._multiDrawStarts,oi=z._multiDrawCounts,st=z._multiDrawCount,Rn=Ce?te.get(Ce).bytesPerElement:1,Or=Le.get(j).currentProgram.getUniforms();for(let dn=0;dn<st;dn++)Or.setValue(O,"_gl_DrawID",dn),rt.render(Ie[dn]/Rn,oi[dn])}else if(z.isInstancedMesh)rt.renderInstances(nt,St,z.count);else if(Y.isInstancedBufferGeometry){const Ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,oi=Math.min(Y.instanceCount,Ie);rt.renderInstances(nt,St,oi)}else rt.render(nt,St)};function lt(S,k,Y){S.transparent===!0&&S.side===xi&&S.forceSinglePass===!1?(S.side=fn,S.needsUpdate=!0,Fo(S,k,Y),S.side=tr,S.needsUpdate=!0,Fo(S,k,Y),S.side=xi):Fo(S,k,Y)}this.compile=function(S,k,Y=null){Y===null&&(Y=S),d=je.get(Y),d.init(k),b.push(d),Y.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),S!==Y&&S.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const j=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Re=de[ye];lt(Re,Y,z),j.add(Re)}else lt(de,Y,z),j.add(de)}),b.pop(),d=null,j},this.compileAsync=function(S,k,Y=null){const j=this.compile(S,k,Y);return new Promise(z=>{function de(){if(j.forEach(function(ye){Le.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){z(S);return}setTimeout(de,10)}Ne.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let An=null;function si(S){An&&An(S)}function su(){rr.stop()}function ou(){rr.start()}const rr=new Cp;rr.setAnimationLoop(si),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(S){An=S,Q.setAnimationLoop(S),S===null?rr.stop():rr.start()},Q.addEventListener("sessionstart",su),Q.addEventListener("sessionend",ou),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,k,D),d=je.get(S,b.length),d.init(k),b.push(d),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H.setFromProjectionMatrix(ve),fe=this.localClippingEnabled,q=ue.init(this.clippingPlanes,fe),p=Me.get(S,w.length),p.init(),w.push(p),Q.enabled===!0&&Q.isPresenting===!0){const de=v.xr.getDepthSensingMesh();de!==null&&vc(de,k,-1/0,v.sortObjects)}vc(S,k,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(W,$),Ye=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ye&&Fe.addToRenderList(p,S),this.info.render.frame++,q===!0&&ue.beginShadows();const Y=d.state.shadowsArray;we.render(Y,S,k),q===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,z=p.transmissive;if(d.setupLights(),k.isArrayCamera){const de=k.cameras;if(z.length>0)for(let ye=0,Re=de.length;ye<Re;ye++){const Ce=de[ye];cu(j,z,S,Ce)}Ye&&Fe.render(S);for(let ye=0,Re=de.length;ye<Re;ye++){const Ce=de[ye];au(p,S,Ce,Ce.viewport)}}else z.length>0&&cu(j,z,S,k),Ye&&Fe.render(S),au(p,S,k);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(v,S,k),yt.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],q===!0&&ue.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function vc(S,k,Y,j){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){j&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const ye=ee.update(S),Re=S.material;Re.visible&&p.push(S,ye,Re,Y,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const ye=ee.update(S),Re=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ue.copy(ye.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){const Ce=ye.groups;for(let ze=0,He=Ce.length;ze<He;ze++){const De=Ce[ze],nt=Re[De.materialIndex];nt&&nt.visible&&p.push(S,ye,nt,Y,Ue.z,De)}}else Re.visible&&p.push(S,ye,Re,Y,Ue.z,null)}}const de=S.children;for(let ye=0,Re=de.length;ye<Re;ye++)vc(de[ye],k,Y,j)}function au(S,k,Y,j){const z=S.opaque,de=S.transmissive,ye=S.transparent;d.setupLightsView(Y),q===!0&&ue.setGlobalState(v.clippingPlanes,Y),j&&Ae.viewport(L.copy(j)),z.length>0&&Oo(z,k,Y),de.length>0&&Oo(de,k,Y),ye.length>0&&Oo(ye,k,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function cu(S,k,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new Cr(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?So:Ai,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const de=d.state.transmissionRenderTarget[j.id],ye=j.viewport||L;de.setSize(ye.z,ye.w);const Re=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(ce),oe=v.getClearAlpha(),oe<1&&v.setClearColor(16777215,.5),v.clear(),Ye&&Fe.render(Y);const Ce=v.toneMapping;v.toneMapping=Ki;const ze=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),q===!0&&ue.setGlobalState(v.clippingPlanes,j),Oo(S,Y,j),C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let De=0,nt=k.length;De<nt;De++){const vt=k[De],St=vt.object,sn=vt.geometry,rt=vt.material,Ie=vt.group;if(rt.side===xi&&St.layers.test(j.layers)){const oi=rt.side;rt.side=fn,rt.needsUpdate=!0,lu(St,Y,j,sn,rt,Ie),rt.side=oi,rt.needsUpdate=!0,He=!0}}He===!0&&(C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de))}v.setRenderTarget(Re),v.setClearColor(ce,oe),ze!==void 0&&(j.viewport=ze),v.toneMapping=Ce}function Oo(S,k,Y){const j=k.isScene===!0?k.overrideMaterial:null;for(let z=0,de=S.length;z<de;z++){const ye=S[z],Re=ye.object,Ce=ye.geometry,ze=j===null?ye.material:j,He=ye.group;Re.layers.test(Y.layers)&&lu(Re,k,Y,Ce,ze,He)}}function lu(S,k,Y,j,z,de){S.onBeforeRender(v,k,Y,j,z,de),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(v,k,Y,j,S,de),z.transparent===!0&&z.side===xi&&z.forceSinglePass===!1?(z.side=fn,z.needsUpdate=!0,v.renderBufferDirect(Y,k,j,z,S,de),z.side=tr,z.needsUpdate=!0,v.renderBufferDirect(Y,k,j,z,S,de),z.side=xi):v.renderBufferDirect(Y,k,j,z,S,de),S.onAfterRender(v,k,Y,j,z,de)}function Fo(S,k,Y){k.isScene!==!0&&(k=Qe);const j=Le.get(S),z=d.state.lights,de=d.state.shadowsArray,ye=z.state.version,Re=Te.getParameters(S,z.state,de,k,Y),Ce=Te.getProgramCacheKey(Re);let ze=j.programs;j.environment=S.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(S.isMeshStandardMaterial?U:x).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Ve),ze=new Map,j.programs=ze);let He=ze.get(Ce);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===ye)return uu(S,Re),He}else Re.uniforms=Te.getUniforms(S),S.onBeforeCompile(Re,v),He=Te.acquireProgram(Re,Ce),ze.set(Ce,He),j.uniforms=Re.uniforms;const De=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=ue.uniform),uu(S,Re),j.needsLights=lg(S),j.lightsStateVersion=ye,j.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function fu(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=wa.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function uu(S,k){const Y=Le.get(S);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function ag(S,k,Y,j,z){k.isScene!==!0&&(k=Qe),C.resetTextureUnits();const de=k.fog,ye=j.isMeshStandardMaterial?k.environment:null,Re=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:As,Ce=(j.isMeshStandardMaterial?U:x).get(j.envMap||ye),ze=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,He=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!Y.morphAttributes.position,nt=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color;let St=Ki;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(St=v.toneMapping);const sn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rt=sn!==void 0?sn.length:0,Ie=Le.get(j),oi=d.state.lights;if(q===!0&&(fe===!0||S!==y)){const vn=S===y&&j.id===M;ue.setState(j,S,vn)}let st=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==oi.state.version||Ie.outputColorSpace!==Re||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==Ce||j.fog===!0&&Ie.fog!==de||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ue.numPlanes||Ie.numIntersection!==ue.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==He||Ie.morphTargets!==De||Ie.morphNormals!==nt||Ie.morphColors!==vt||Ie.toneMapping!==St||Ie.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ie.__version=j.version);let Rn=Ie.currentProgram;st===!0&&(Rn=Fo(j,k,z));let Or=!1,dn=!1,Ls=!1;const Mt=Rn.getUniforms(),Wn=Ie.uniforms;if(Ae.useProgram(Rn.program)&&(Or=!0,dn=!0,Ls=!0),j.id!==M&&(M=j.id,dn=!0),Or||y!==S){Ae.buffers.depth.getReversed()?(re.copy(S.projectionMatrix),u_(re),h_(re),Mt.setValue(O,"projectionMatrix",re)):Mt.setValue(O,"projectionMatrix",S.projectionMatrix),Mt.setValue(O,"viewMatrix",S.matrixWorldInverse);const Ui=Mt.map.cameraPosition;Ui!==void 0&&Ui.setValue(O,Pe.setFromMatrixPosition(S.matrixWorld)),qe.logarithmicDepthBuffer&&Mt.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Mt.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,dn=!0,Ls=!0)}if(z.isSkinnedMesh){Mt.setOptional(O,z,"bindMatrix"),Mt.setOptional(O,z,"bindMatrixInverse");const vn=z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Mt.setValue(O,"boneTexture",vn.boneTexture,C))}z.isBatchedMesh&&(Mt.setOptional(O,z,"batchingTexture"),Mt.setValue(O,"batchingTexture",z._matricesTexture,C),Mt.setOptional(O,z,"batchingIdTexture"),Mt.setValue(O,"batchingIdTexture",z._indirectTexture,C),Mt.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(O,"batchingColorTexture",z._colorsTexture,C));const Us=Y.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&ke.update(z,Y,Rn),(dn||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,Mt.setValue(O,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wn.envMap.value=Ce,Wn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Wn.envMapIntensity.value=k.environmentIntensity),dn&&(Mt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&cg(Wn,Ls),de&&j.fog===!0&&me.refreshFogUniforms(Wn,de),me.refreshMaterialUniforms(Wn,j,A,le,d.state.transmissionRenderTarget[S.id]),wa.upload(O,fu(Ie),Wn,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(wa.upload(O,fu(Ie),Wn,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Mt.setValue(O,"center",z.center),Mt.setValue(O,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(O,"normalMatrix",z.normalMatrix),Mt.setValue(O,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const vn=j.uniformsGroups;for(let Ui=0,Ni=vn.length;Ui<Ni;Ui++){const hu=vn[Ui];N.update(hu,Rn),N.bind(hu,Rn)}}return Rn}function cg(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function lg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,k,Y){Le.get(S.texture).__webglTexture=k,Le.get(S.depthTexture).__webglTexture=Y;const j=Le.get(S);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const Y=Le.get(S);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,Y=0){D=S,R=k,T=Y;let j=!0,z=null,de=!1,ye=!1;if(S){const Ce=Le.get(S);if(Ce.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(O.FRAMEBUFFER,null),j=!1;else if(Ce.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(Ce.__hasExternalTextures)C.rebindTextures(S,Le.get(S.texture).__webglTexture,Le.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const De=S.depthTexture;if(Ce.__boundDepthTexture!==De){if(De!==null&&Le.has(De)&&(S.width!==De.image.width||S.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);const He=Le.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[k])?z=He[k][Y]:z=He[k],de=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?z=Le.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[Y]:z=He,L.copy(S.viewport),ie.copy(S.scissor),J=S.scissorTest}else L.copy(X).multiplyScalar(A).floor(),ie.copy(Z).multiplyScalar(A).floor(),J=pe;if(Ae.bindFramebuffer(O.FRAMEBUFFER,z)&&j&&Ae.drawBuffers(S,z),Ae.viewport(L),Ae.scissor(ie),Ae.setScissorTest(J),de){const Ce=Le.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,Y)}else if(ye){const Ce=Le.get(S.texture),ze=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,ze)}M=-1},this.readRenderTargetPixels=function(S,k,Y,j,z,de,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ae.bindFramebuffer(O.FRAMEBUFFER,Re);try{const Ce=S.texture,ze=Ce.format,He=Ce.type;if(!qe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-j&&Y>=0&&Y<=S.height-z&&O.readPixels(k,Y,j,z,$e.convert(ze),$e.convert(He),de)}finally{const Ce=D!==null?Le.get(D).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,k,Y,j,z,de,ye){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Le.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){const Ce=S.texture,ze=Ce.format,He=Ce.type;if(!qe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-j&&Y>=0&&Y<=S.height-z){Ae.bindFramebuffer(O.FRAMEBUFFER,Re);const De=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.bufferData(O.PIXEL_PACK_BUFFER,de.byteLength,O.STREAM_READ),O.readPixels(k,Y,j,z,$e.convert(ze),$e.convert(He),0);const nt=D!==null?Le.get(D).__webglFramebuffer:null;Ae.bindFramebuffer(O.FRAMEBUFFER,nt);const vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await f_(O,vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,de),O.deleteBuffer(De),O.deleteSync(vt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,Y=0){S.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const j=Math.pow(2,-Y),z=Math.floor(S.image.width*j),de=Math.floor(S.image.height*j),ye=k!==null?k.x:0,Re=k!==null?k.y:0;C.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,ye,Re,z,de),Ae.unbindTexture()},this.copyTextureToTexture=function(S,k,Y=null,j=null,z=0){S.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,S=arguments[1],k=arguments[2],z=arguments[3]||0,Y=null);let de,ye,Re,Ce,ze,He,De,nt,vt;const St=S.isCompressedTexture?S.mipmaps[z]:S.image;Y!==null?(de=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Re=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,ze=Y.min.y,He=Y.isBox3?Y.min.z:0):(de=St.width,ye=St.height,Re=St.depth||1,Ce=0,ze=0,He=0),j!==null?(De=j.x,nt=j.y,vt=j.z):(De=0,nt=0,vt=0);const sn=$e.convert(k.format),rt=$e.convert(k.type);let Ie;k.isData3DTexture?(C.setTexture3D(k,0),Ie=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Ie=O.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Ie=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const oi=O.getParameter(O.UNPACK_ROW_LENGTH),st=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Rn=O.getParameter(O.UNPACK_SKIP_PIXELS),Or=O.getParameter(O.UNPACK_SKIP_ROWS),dn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);const Ls=S.isDataArrayTexture||S.isData3DTexture,Mt=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Wn=Le.get(S),Us=Le.get(k),vn=Le.get(Wn.__renderTarget),Ui=Le.get(Us.__renderTarget);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ni=0;Ni<Re;Ni++)Ls&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(S).__webglTexture,z,He+Ni),S.isDepthTexture?(Mt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Le.get(k).__webglTexture,z,vt+Ni),O.blitFramebuffer(Ce,ze,de,ye,De,nt,de,ye,O.DEPTH_BUFFER_BIT,O.NEAREST)):Mt?O.copyTexSubImage3D(Ie,z,De,nt,vt+Ni,Ce,ze,de,ye):O.copyTexSubImage2D(Ie,z,De,nt,vt+Ni,Ce,ze,de,ye);Ae.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Mt?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Ie,z,De,nt,vt,de,ye,Re,sn,rt,St.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,z,De,nt,vt,de,ye,Re,sn,St.data):O.texSubImage3D(Ie,z,De,nt,vt,de,ye,Re,sn,rt,St):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,De,nt,de,ye,sn,rt,St.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,De,nt,St.width,St.height,sn,St.data):O.texSubImage2D(O.TEXTURE_2D,z,De,nt,de,ye,sn,rt,St);O.pixelStorei(O.UNPACK_ROW_LENGTH,oi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Or),O.pixelStorei(O.UNPACK_SKIP_IMAGES,dn),z===0&&k.generateMipmaps&&O.generateMipmap(Ie),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,k,Y=null,j=null,z=0){return S.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,S=arguments[2],k=arguments[3],z=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,Y,j,z)},this.initRenderTarget=function(S){Le.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){R=0,T=0,D=null,Ae.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class MS extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Np extends Ao{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mh=new Ut,uf=new yp,aa=new bo,ca=new K;class Op extends hn{constructor(e=new ri,t=new Np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;mh.copy(r).invert(),uf.copy(e.ray).applyMatrix4(mh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=u,_=m;g<_;g++){const p=l.getX(g);ca.fromBufferAttribute(h,p),gh(ca,p,c,r,e,t,this)}}else{const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=u,_=m;g<_;g++)ca.fromBufferAttribute(h,g),gh(ca,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gh(i,e,t,n,r,s,o){const a=uf.distanceSqToPoint(i);if(a<t){const c=new K;uf.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);const Rt=40,Qc=1.4,TS=.62,Qr=4e4,el=4.5,_h=7,qt={stone:[1,.62,.05],wet:[.35,.75,1],gravel:[1,.85,.5],metal:[1,.18,.08],hollow:[.78,.45,1],chime:[.45,.95,1],door:[.5,1,.55],knock:[.9,.9,.8],self:[1,.75,.3]},wS=i=>i===Ar?qt.metal:i===ms?qt.hollow:i===Qa?qt.wet:i===ec?qt.gravel:qt.stone,hf=i=>.25+Math.max(0,Math.min(2,i))*.45,bS=`
attribute vec3 color;
attribute float born;
attribute float life;
attribute float size;
uniform float uNow;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float age = uNow - born;
  vAlpha = (age < 0.0 || age > life) ? 0.0 : pow(1.0 - age / life, 1.6);
  float flash = (age >= 0.0 && age < 0.15) ? 1.0 - age / 0.15 : 0.0;
  vColor = color * (1.0 + flash * 1.5);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = vAlpha > 0.0 ? max(1.5, size * uScale * (1.0 + flash) / max(0.1, -mv.z)) : 0.0;
  gl_Position = projectionMatrix * mv;
}`,AS=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5 || vAlpha <= 0.0) discard;
  gl_FragColor = vec4(vColor, vAlpha * smoothstep(0.5, 0.1, d));
}`;class RS{constructor(){E(this,"points");E(this,"pos",new Float32Array(Qr*3));E(this,"col",new Float32Array(Qr*3));E(this,"born",new Float32Array(Qr).fill(-1e6));E(this,"life",new Float32Array(Qr).fill(1));E(this,"size",new Float32Array(Qr));E(this,"attrs");E(this,"next",0);E(this,"dirtyFrom",-1);E(this,"dirtyTo",-1);E(this,"wrapped",!1);E(this,"material");const e=new ri;this.attrs=[new Yt(this.pos,3),new Yt(this.col,3),new Yt(this.born,1),new Yt(this.life,1),new Yt(this.size,1)],["position","color","born","life","size"].forEach((t,n)=>{this.attrs[n].setUsage(cf),e.setAttribute(t,this.attrs[n])}),e.boundingSphere=new bo(new K,1e6),this.material=new Ci({vertexShader:bS,fragmentShader:AS,uniforms:{uNow:{value:0},uScale:{value:300}},transparent:!0,depthWrite:!1,blending:Ia}),this.points=new Op(e,this.material),this.points.frustumCulled=!1}add(e,t,n,r,s,o,a){const c=this.next;this.pos[c*3]=e,this.pos[c*3+1]=t,this.pos[c*3+2]=n,this.col[c*3]=r[0],this.col[c*3+1]=r[1],this.col[c*3+2]=r[2],this.born[c]=s,this.life[c]=o,this.size[c]=a,this.dirtyFrom<0&&(this.dirtyFrom=c),this.dirtyTo=c,this.next=(c+1)%Qr,this.next===0&&(this.wrapped=!0)}clear(){this.born.fill(-1e6),this.wrapped=!0}flush(){if(!(this.dirtyFrom<0&&!this.wrapped)){for(const e of this.attrs)e.clearUpdateRanges(),!this.wrapped&&this.dirtyTo>=this.dirtyFrom&&e.addUpdateRange(this.dirtyFrom*e.itemSize,(this.dirtyTo-this.dirtyFrom+1)*e.itemSize),e.needsUpdate=!0;this.dirtyFrom=this.dirtyTo=-1,this.wrapped=!1}}}class CS{constructor(){E(this,"points");E(this,"pos",new Float32Array(2048*3));E(this,"col",new Float32Array(2048*4));E(this,"n",0);E(this,"g",new ri);this.g.setAttribute("position",new Yt(this.pos,3).setUsage(cf)),this.g.setAttribute("color",new Yt(this.col,4).setUsage(cf)),this.points=new Op(this.g,new Np({size:.07,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ia})),this.points.frustumCulled=!1}begin(){this.n=0}add(e,t,n,r,s){if(this.n>=2048)return;const o=this.n++;this.pos.set([e,t,n],o*3),this.col.set([r[0],r[1],r[2],s],o*4)}end(){this.g.setDrawRange(0,this.n),this.g.attributes.position.needsUpdate=!0,this.g.attributes.color.needsUpdate=!0}}const la=Array.from({length:36},(i,e)=>{const t=e*.618034%1,n=e*2.39996,r=.12*Math.sin(Math.PI*t)+.04;return[Math.cos(n)*r,.1+t*.95,Math.sin(n)*r]});class DS{constructor(e){E(this,"renderer");E(this,"scene",new MS);E(this,"camera",new wn(75,1,.05,60));E(this,"pool",new RS);E(this,"live",new CS);E(this,"t0",performance.now());E(this,"smooth",new Map);E(this,"teammateHeard",new Map);E(this,"bob",0);E(this,"blind",!1);this.canvas=e,this.renderer=new SS({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setClearColor(197121),this.scene.add(this.pool.points,this.live.points),this.camera.rotation.order="YXZ";const t=()=>{const n=e.clientWidth||1,r=e.clientHeight||1;this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.setSize(n,r,!1),this.camera.aspect=n/r,this.camera.updateProjectionMatrix(),this.pool.material.uniforms.uScale.value=r*this.renderer.getPixelRatio()*.012};new ResizeObserver(t).observe(e),t()}sec(e){return(e-this.t0)/1e3}echo(e,t,n,r){const s=this.sec(r);for(const o of n){const a=Math.hypot(o.x-e,o.y-t),c=s+tp(a),l=wS(o.m),f=(o.x-e)/(a||1),h=(o.y-t)/(a||1);if(o.m===Ar){for(const[u,m,g]of la)this.pool.add(o.x/Rt+u,m,o.y/Rt+g,l,c,el*.5,5);continue}for(let u=0;u<_h;u++){const m=((o.x*31+o.y*17+u*13)%7/7-.5)*.12;this.pool.add(o.x/Rt,(u+.5)/_h*Qc+m,o.y/Rt,l,c,el,o.m===ms?6:4)}for(const u of[6,26,52]){if(u>=a)break;this.pool.add((o.x-f*u)/Rt,.01,(o.y-h*u)/Rt,l,c,el*.8,3)}}}footstep(e,t,n,r,s,o){const a=this.sec(s);o&&this.teammateHeard.set(o,s);const c=r===Eo?qt.wet:r===bs?qt.gravel:qt.stone,l=Math.max(n,30)/Rt;for(let f=1;f<=3;f++)for(let h=0;h<20;h++){const u=h/20*Math.PI*2+f;this.pool.add(e/Rt+Math.cos(u)*l*f/3,.01,t/Rt+Math.sin(u)*l*f/3,c,a+f*.06,.45,2.5)}}automaton(e,t,n,r){const s=this.sec(r);for(const[o,a,c]of la)this.pool.add(e/Rt+o,a,t/Rt+c,qt.metal,s,n?1.1:.8,5)}cue(e,t,n,r,s,o,a){const c=this.sec(a),l=(e+Math.cos(n)*r)/Rt,f=(t+Math.sin(n)*r)/Rt,h=s==="door"?qt.door:qt.chime;for(let u=0;u<18;u++){const m=u*2.39996,g=.05+u/18*.25;this.pool.add(l+Math.cos(m)*g,o+Math.sin(m)*g*.6,f,h,c,1.4,7)}}ring(e,t,n,r){this.cue(e,t,0,0,"chime",hf(n),r)}burst(e,t,n,r){const s=this.sec(r),o=n==="crumble"?90:14;for(let a=0;a<o;a++){const c=a*2.39996,l=a*.618%1*(n==="crumble"?.5:.12),f=n==="crumble"?a%3?qt.gravel:qt.hollow:qt.knock;this.pool.add(e/Rt+Math.cos(c)*l,a*.37%1*Qc,t/Rt+Math.sin(c)*l,f,s,n==="crumble"?2.5:.6,5)}}reset(){this.pool.clear(),this.smooth.clear(),this.teammateHeard.clear()}lerp(e,t,n,r=.3){let s=this.smooth.get(e);return(!s||Math.hypot(s.x-t,s.y-n)>80)&&(s={x:t,y:n},this.smooth.set(e,s)),s.x+=(t-s.x)*r,s.y+=(n-s.y)*r,s}render(e,t,n,r){if(this.blind){this.renderer.setClearColor(0),this.renderer.clear();return}this.renderer.setClearColor(197121);const s=this.sec(t);this.pool.material.uniforms.uNow.value=s;const o=e.world.explorers.get(e.selfId);if(o){const a=this.lerp(e.selfId,o.x,o.y,.4);o.moving&&(this.bob+=o.sneak?.09:.18),this.camera.position.set(a.x/Rt,TS+Math.sin(this.bob)*.025-(o.alive?0:.45),a.y/Rt)}this.camera.rotation.set(r,-n-Math.PI/2,0),this.live.begin();for(const a of e.automatons()){const c=this.lerp(a.id,a.x,a.y),l=a.hunting?.7+.3*Math.sin(t/80):.6;for(const[f,h,u]of la)this.live.add(c.x/Rt+f,h,c.y/Rt+u,qt.metal,l)}if(e.world.explorers.forEach((a,c)=>{if(c===e.selfId||!a.alive)return;const l=this.teammateHeard.get(c),f=l===void 0?0:Math.max(0,1-(t-l)/900);if(f<=0)return;const h=this.lerp(c,a.x,a.y);for(const[u,m,g]of la)this.live.add(h.x/Rt+u*.8,m*.95,h.y/Rt+g*.8,qt.self,f*.8)}),e.world.exitOpen){const a=e.world.exitX/Rt,c=e.world.exitY/Rt;for(let l=0;l<60;l++){const f=l*2.39996+s*1.5,h=(l*.618+s*.4)%1*Qc;this.live.add(a+Math.cos(f)*.3,h,c+Math.sin(f)*.3,qt.door,.5+.4*Math.sin(s*4+l))}}this.live.end(),this.pool.flush(),this.renderer.render(this.scene,this.camera)}}ArrayBuffer.isView||(ArrayBuffer.isView=i=>i!==null&&typeof i=="object"&&i.buffer instanceof ArrayBuffer);typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window);typeof FormData>"u"&&(globalThis.FormData=class{});var kt={JOIN_ROOM:10,ERROR:11,LEAVE_ROOM:12,ROOM_DATA:13,ROOM_STATE:14,ROOM_STATE_PATCH:15,ROOM_DATA_BYTES:17,PING:18,ROOM_INPUT_RELIABLE:19,ROOM_INPUT_UNRELIABLE:20,ROOM_REQUEST:21,ROOM_RESPONSE:22},df={TIMED:128,UNRELIABLE:64},PS=31,xh={OK:0,ERROR:2},yh={INPUT_REFLECTION:1,INPUT_OPTIONS:2},Hs={RENDER_TIME:1,FIXED_TIMESTEP:2,PATCH_RATE:4,SUB_STEPS:8,RECKON_TIME:16},Jt={NORMAL_CLOSURE:1e3,GOING_AWAY:1001,NO_STATUS_RECEIVED:1005,ABNORMAL_CLOSURE:1006,CONSENTED:4e3,SERVER_SHUTDOWN:4001,WITH_ERROR:4002,FAILED_TO_RECONNECT:4003,MAY_TRY_RECONNECT:4010};class js extends Error{constructor(t,n,r){super(n);E(this,"code");E(this,"headers");E(this,"status");E(this,"response");E(this,"data");this.name="ServerError",this.code=t,r&&(this.headers=r.headers,this.status=r.status,this.response=r.response,this.data=r.data)}}class Gf extends Error{constructor(t,n){super(t);E(this,"code");this.code=n,this.name="MatchMakeError",Object.setPrototypeOf(this,Gf.prototype)}}const Sr=255,Na=213;var V;(function(i){i[i.ADD=128]="ADD",i[i.REPLACE=0]="REPLACE",i[i.DELETE=64]="DELETE",i[i.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",i[i.MOVE_AND_ADD=160]="MOVE_AND_ADD",i[i.DELETE_AND_ADD=192]="DELETE_AND_ADD",i[i.CLEAR=10]="CLEAR",i[i.REVERSE=15]="REVERSE",i[i.MOVE=32]="MOVE",i[i.DELETE_BY_REFID=33]="DELETE_BY_REFID",i[i.ADD_BY_REFID=129]="ADD_BY_REFID"})(V||(V={}));Symbol.metadata??(Symbol.metadata=Symbol.for("Symbol.metadata"));function Fp(i){Object.defineProperty(i,Symbol.metadata,{value:void 0,writable:!0,configurable:!0,enumerable:!1})}const vh=(function(){return typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{}})();if(typeof Symbol=="function"&&typeof Symbol.for!="function"){const i="colyseus.symbolRegistry",e=vh[i]||(vh[i]=Object.create(null));Symbol.for=function(t){return e[t]||(e[t]=Symbol(t))},Symbol.keyFor=function(t){for(const n in e)if(e[n]===t)return n}}const Se=Symbol.for("$refId"),ti="~track",ni="~encoder",zn="~decoder",Nr="~filter",Lt="~getByIndex",Hn="~deleteByIndex",Ds="~resyncPrune",B=Symbol.for("$changes"),Be=Symbol.for("$childType"),Bt=Symbol.for("$proxyTarget"),Zi="~onEncodeEnd",Vn="~reset",Oa="~onDecodeEnd",yn=Symbol.for("$values"),Bp="~builder",_n="~descriptors",Ks="~__encodeDescriptor",pi="~encoders",en="~__numFields",Mi="~__refTypeFieldIndexes",Un="~__viewFieldIndexes",hi="$__fieldIndexesByViewTag",Mr="~__unreliableFieldIndexes",io="~__patchOnlyFieldIndexes",Fa="~__fullSyncSkipIndexes",Ss="~__fullStateOnlyFieldIndexes",xn="~__streamFieldIndexes",fa="~__streamPriorities";let IS;try{IS=new TextEncoder}catch{}const oc=new ArrayBuffer(8),Dr=new Int32Array(oc),pf=new Float32Array(oc),LS=new Float64Array(oc),kp=new BigInt64Array(oc),US=typeof Buffer<"u"&&Buffer.byteLength,zp=US?Buffer.byteLength:function(i,e){for(var t=0,n=0,r=0,s=i.length;r<s;r++)t=i.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n};function Vp(i,e,t){for(var n=0,r=0,s=e.length;r<s;r++)n=e.charCodeAt(r),n<128?i[t.offset++]=n:n<2048?(i[t.offset]=192|n>>6,i[t.offset+1]=128|n&63,t.offset+=2):n<55296||n>=57344?(i[t.offset]=224|n>>12,i[t.offset+1]=128|n>>6&63,i[t.offset+2]=128|n&63,t.offset+=3):(r++,n=65536+((n&1023)<<10|e.charCodeAt(r)&1023),i[t.offset]=240|n>>18,i[t.offset+1]=128|n>>12&63,i[t.offset+2]=128|n>>6&63,i[t.offset+3]=128|n&63,t.offset+=4)}function Hp(i,e,t){i[t.offset++]=e&255}function NS(i,e,t){i[t.offset++]=e&255}function Gp(i,e,t){i[t.offset++]=e&255,i[t.offset++]=e>>8&255}function Wf(i,e,t){i[t.offset++]=e&255,i[t.offset++]=e>>8&255}function Di(i,e,t){i[t.offset++]=e&255,i[t.offset++]=e>>8&255,i[t.offset++]=e>>16&255,i[t.offset++]=e>>24&255}function Pr(i,e,t){const n=e>>24,r=e>>16,s=e>>8,o=e;i[t.offset++]=o&255,i[t.offset++]=s&255,i[t.offset++]=r&255,i[t.offset++]=n&255}function Wp(i,e,t){const n=Math.floor(e/Math.pow(2,32)),r=e>>>0;Pr(i,r,t),Pr(i,n,t)}function $p(i,e,t){const n=e/Math.pow(2,32)>>0,r=e>>>0;Pr(i,r,t),Pr(i,n,t)}function OS(i,e,t){kp[0]=BigInt.asIntN(64,e),Di(i,Dr[0],t),Di(i,Dr[1],t)}function FS(i,e,t){kp[0]=BigInt.asIntN(64,e),Di(i,Dr[0],t),Di(i,Dr[1],t)}function Xp(i,e,t){pf[0]=e,Di(i,Dr[0],t)}function qp(i,e,t){LS[0]=e,Di(i,Dr[0],t),Di(i,Dr[1],t)}function BS(i,e,t){i[t.offset++]=e?1:0}function kS(i,e,t){e||(e="");let n=zp(e,"utf8"),r=0;if(n<32)i[t.offset++]=n|160,r=1;else if(n<256)i[t.offset++]=217,i[t.offset++]=n,r=2;else if(n<65536)i[t.offset++]=218,Wf(i,n,t),r=3;else if(n<4294967296)i[t.offset++]=219,Pr(i,n,t),r=5;else throw new Error("String too long");return Vp(i,e,t),r+n}function mf(i,e,t){if(isNaN(e))return mf(i,0,t);if(isFinite(e)){if(e!==(e|0))return Math.abs(e)<=34028235e31&&(pf[0]=e,Math.abs(Math.abs(pf[0])-Math.abs(e))<1e-4)?(i[t.offset++]=202,Xp(i,e,t),5):(i[t.offset++]=203,qp(i,e,t),9)}else return mf(i,e>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,t);return e>=0?e<128?(i[t.offset++]=e&255,1):e<256?(i[t.offset++]=204,i[t.offset++]=e&255,2):e<65536?(i[t.offset++]=205,Wf(i,e,t),3):e<4294967296?(i[t.offset++]=206,Pr(i,e,t),5):(i[t.offset++]=207,$p(i,e,t),9):e>=-32?(i[t.offset++]=224|e+32,1):e>=-128?(i[t.offset++]=208,Hp(i,e,t),2):e>=-32768?(i[t.offset++]=209,Gp(i,e,t),3):e>=-2147483648?(i[t.offset++]=210,Di(i,e,t),5):(i[t.offset++]=211,Wp(i,e,t),9)}const We={int8:Hp,uint8:NS,int16:Gp,uint16:Wf,int32:Di,uint32:Pr,int64:Wp,uint64:$p,bigint64:OS,biguint64:FS,float32:Xp,float64:qp,boolean:BS,string:kS,number:mf,utf8Write:Vp,utf8Length:zp},Co=new ArrayBuffer(8),Ir=new Int32Array(Co),zS=new Float32Array(Co),VS=new Float64Array(Co),HS=new BigUint64Array(Co),GS=new BigInt64Array(Co);function Yp(i,e,t){t>i.length-e.offset&&(t=i.length-e.offset);for(var n="",r=0,s=e.offset,o=e.offset+t;s<o;s++){var a=i[s];if((a&128)===0){n+=String.fromCharCode(a);continue}if((a&224)===192){n+=String.fromCharCode((a&31)<<6|i[++s]&63);continue}if((a&240)===224){n+=String.fromCharCode((a&15)<<12|(i[++s]&63)<<6|(i[++s]&63)<<0);continue}if((a&248)===240){r=(a&7)<<18|(i[++s]&63)<<12|(i[++s]&63)<<6|(i[++s]&63)<<0,r>=65536?(r-=65536,n+=String.fromCharCode((r>>>10)+55296,(r&1023)+56320)):n+=String.fromCharCode(r);continue}console.error("decode.utf8Read(): Invalid byte "+a+" at offset "+s+". Skip to end of string: "+(e.offset+t));break}return e.offset+=t,n}function jp(i,e){return Do(i,e)<<24>>24}function Do(i,e){return i[e.offset++]}function Kp(i,e){return ac(i,e)<<16>>16}function ac(i,e){return i[e.offset++]|i[e.offset++]<<8}function Gn(i,e){return i[e.offset++]|i[e.offset++]<<8|i[e.offset++]<<16|i[e.offset++]<<24}function Ms(i,e){return Gn(i,e)>>>0}function Zp(i,e){return Ir[0]=Gn(i,e),zS[0]}function Jp(i,e){return Ir[0]=Gn(i,e),Ir[1]=Gn(i,e),VS[0]}function Qp(i,e){const t=Ms(i,e);return Gn(i,e)*Math.pow(2,32)+t}function em(i,e){const t=Ms(i,e);return Ms(i,e)*Math.pow(2,32)+t}function WS(i,e){return Ir[0]=Gn(i,e),Ir[1]=Gn(i,e),GS[0]}function $S(i,e){return Ir[0]=Gn(i,e),Ir[1]=Gn(i,e),HS[0]}function XS(i,e){return Do(i,e)>0}function qS(i,e){const t=i[e.offset++];let n;return t<192?n=t&31:t===217?n=Do(i,e):t===218?n=ac(i,e):t===219&&(n=Ms(i,e)),Yp(i,e,n)}function YS(i,e){const t=i[e.offset++];if(t<128)return t;if(t===202)return Zp(i,e);if(t===203)return Jp(i,e);if(t===204)return Do(i,e);if(t===205)return ac(i,e);if(t===206)return Ms(i,e);if(t===207)return em(i,e);if(t===208)return jp(i,e);if(t===209)return Kp(i,e);if(t===210)return Gn(i,e);if(t===211)return Qp(i,e);if(t>223)return(255-t+1)*-1}function jS(i,e){const t=i[e.offset];return t<192&&t>160||t===217||t===218||t===219}const et={utf8Read:Yp,int8:jp,uint8:Do,int16:Kp,uint16:ac,int32:Gn,uint32:Ms,float32:Zp,float64:Jp,int64:Qp,uint64:em,bigint64:WS,biguint64:$S,boolean:XS,string:qS,number:YS,stringCheck:jS},lc={},KS=new Map;function Li(i,e){e.constructor&&(Object.prototype.hasOwnProperty.call(e,"constructor")&&e.constructor[Symbol.metadata]==null&&Fp(e.constructor),KS.set(e.constructor,i),lc[i]=e),e.encode&&(We[i]=e.encode),e.decode&&(et[i]=e.decode)}function ZS(i){return lc[i]}const tm="ArraySchema does not support streaming — positional ops (splice / unshift / reverse) shift subsequent indexes, so holding ADDs back for a later tick under `maxPerTick` would desync the decoder. Use `t.stream(X)` (stable monotonic positions) or `t.map(X).stream()` (stable keys) instead.";function Pi(){return{pendingByView:new Map,sentByView:new Map,broadcastPending:new Set,sentBroadcast:new Set,broadcastDeletes:new Set,maxPerTick:32}}function $f(i){return i._stream??(i._stream=Pi())}function fc(i,e,t){e.activeViews.size===0&&$f(i).broadcastPending.add(t)}function uc(i,e,t,n){const r=i._stream;if(r===void 0)return!0;let s=!1;return r.broadcastPending.delete(n)?s=!0:r.sentBroadcast.delete(n)&&r.broadcastDeletes.add(n),e.forEachActiveView(o=>{const a=r.pendingByView.get(o.id);if(a!=null&&a.has(n)){a.delete(n),s=!0;return}const c=r.sentByView.get(o.id);if(c!=null&&c.has(n)){c.delete(n);let l=o.changes.get(t);l===void 0&&(l=new Map,o.changes.set(t,l)),l.set(n,V.DELETE)}}),s}function JS(i,e,t){const n=i._stream;if(n!==void 0){n.broadcastPending.clear();for(const r of n.sentBroadcast)n.broadcastDeletes.add(r);n.sentBroadcast.clear(),e.forEachActiveView(r=>{var o;(o=n.pendingByView.get(r.id))==null||o.clear();const s=n.sentByView.get(r.id);if(s!==void 0&&s.size>0){let a=r.changes.get(t);a===void 0&&(a=new Map,r.changes.set(t,a));for(const c of s)a.set(c,V.DELETE);s.clear()}})}}function QS(i,e){var n,r;const t=(n=i._stream)==null?void 0:n.pendingByView;if(t===void 0)return!1;for(const[s,o]of t)if(o.size>0&&((r=e.activeViews.get(s))==null?void 0:r.deref())!==void 0)return!0;return!1}function eM(i){const e=i._stream;return e!==void 0&&(e.broadcastPending.size>0||e.broadcastDeletes.size>0)}function tM(i,e,t){const n=$f(i);let r=n.pendingByView.get(e);r===void 0&&(r=new Set,n.pendingByView.set(e,r)),r.add(t)}function hc(i,e){var n;const t=i._stream;t!==void 0&&(t.pendingByView.delete(e),t.sentByView.delete(e),(n=t.priorityByView)==null||n.delete(e))}const nM={8:"uint8",16:"uint16",32:"uint32"};function Xf(i){if(i==null||typeof i!="object")throw new Error("t.quantized(): options object with { min, max } is required.");const{min:e,max:t}=i;if(typeof e!="number"||typeof t!="number"||!(t>e)||!Number.isFinite(e)||!Number.isFinite(t))throw new Error(`t.quantized(): require finite min < max (got min=${e}, max=${t}).`);const n=i.bits??16;if(n!==8&&n!==16&&n!==32)throw new Error(`t.quantized(): bits must be 8, 16 or 32 (got ${n}).`);const r=i.mode??"clamp";if(r!=="clamp"&&r!=="wrap")throw new Error(`t.quantized(): mode must be "clamp" or "wrap" (got ${JSON.stringify(r)}).`);const s=r==="wrap",o=Math.pow(2,n);return{min:e,max:t,bits:n,wrap:s,wire:nM[n],range:t-e,span:s?o:e===-t?o-2:o-1}}function Lr(i){return i!==null&&typeof i=="object"&&i.quantized!==void 0}function nm(i,e){if(i.wrap){if(!Number.isFinite(e))return 0;const n=i.range;let r=(e-i.min)%n;r<0&&(r+=n);const s=i.span;return Math.floor(r/n*s+.5)%s}if(e!==e)return 0;const t=e<i.min?i.min:e>i.max?i.max:e;return Math.floor((t-i.min)/i.range*i.span+.5)}function im(i,e){return i.min+e/i.span*i.range}function iM(i){const e=We[i.wire];return(t,n,r)=>e(t,nm(i,n),r)}function rM(i,e,t){const n=et[i.wire];return im(i,n(e,t))}const $n=class $n{constructor(e){E(this,"types",{});E(this,"schemas",new Map);E(this,"hasFilters",!1);e&&this.discoverTypes(e)}static register(e){const t=Object.getPrototypeOf(e);if(t!==wt){let n=$n.inheritedTypes.get(t);n||(n=new Set,$n.inheritedTypes.set(t,n)),n.add(e)}}static cache(e){let t=$n.cachedContexts.get(e);return t||(t=new $n(e),$n.cachedContexts.set(e,t)),t}has(e){return this.schemas.has(e)}get(e){return this.types[e]}add(e,t=this.schemas.size){return this.schemas.has(e)?!1:(this.types[t]=e,e[Symbol.metadata]==null&&it.initialize(e),this.schemas.set(e,t),!0)}getTypeId(e){return this.schemas.get(e)}discoverTypes(e){var r;if(!this.add(e))return;(r=$n.inheritedTypes.get(e))==null||r.forEach(s=>{this.discoverTypes(s)});let t=e;for(;(t=Object.getPrototypeOf(t))&&t!==wt&&t!==Function.prototype;)this.discoverTypes(t);const n=e[Symbol.metadata];(n[Un]||n[xn])&&(this.hasFilters=!0);for(const s in n){const a=n[s].type;if(typeof a!="string"&&!Lr(a))if(typeof a=="function")this.discoverTypes(a);else{const c=Object.values(a)[0];if(typeof c=="string")continue;this.discoverTypes(c)}}}debug(){return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}`}};E($n,"inheritedTypes",new WeakMap),E($n,"cachedContexts",new WeakMap);let Ur=$n;const Eh=63;function rm(i){const e=Ba(i);return e?{complexTypeKlass:lc[e],childType:i[e]}:{complexTypeKlass:!1,childType:i}}function sm(i,e){const t=ba(i),n=Ba(t),r=n&&Ba(t[n]);if(r)throw new Error(`${e?`${e}: `:""}@colyseus/schema: nested collections are not supported ("${n}" of "${r}"). Collections can only hold primitive types or Schema classes, wrap the inner ${r} in a Schema class.`);return t}function Ba(i){return typeof i=="object"&&i!==null?Object.keys(i).find(e=>lc[e]!==void 0):void 0}function ba(i){if(typeof i!="object"||i===null)return i;if(Array.isArray(i))return{array:ba(i[0])};const e=sM(i);if(e)return e;if(Lr(i))return typeof i.quantized.wire=="string"?i:{quantized:Xf(i.quantized)};if(i.type!==void 0)return ba(i.type);const t=Ba(i);return t&&(i[t]=ba(i[t])),i}function sM(i){const e=Object.keys(i),t=e.filter(n=>/\d+/.test(n));if(t.length>0&&t.length===e.length/2&&i[i[t[0]]]==t[0])return"number";if(e.length>0&&e.every(n=>i[n]===n))return"string"}const oM=[Mi,Mr,io,Fa,Ss,xn,pi];function ua(i,e,t){i[e]||Object.defineProperty(i,e,{value:[],enumerable:!1,configurable:!0,writable:!0}),i[e].push(t)}const it={addField(i,e,t,n,r){if(e>=Eh)throw new Error(`Can't define field '${t}'.
Schema instances may only have up to ${Eh} fields.`);i[e]=Object.assign(i[e]||{},{type:n,index:e,name:t}),Object.defineProperty(i,_n,{value:i[_n]||{},enumerable:!1,configurable:!0}),r?i[_n][t]=r:i[_n][t]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(i,en,{value:e,enumerable:!1,configurable:!0}),Object.defineProperty(i,t,{value:e,enumerable:!1,configurable:!0}),typeof i[e].type!="string"&&!Lr(i[e].type)&&(i[Mi]===void 0&&Object.defineProperty(i,Mi,{value:[],enumerable:!1,configurable:!0}),i[Mi].push(e));const s=i[e].type;if(s&&typeof s=="object"&&s.stream!==void 0){if(s.array!==void 0)throw new Error(tm);i[e].stream=!0,i[xn]||Object.defineProperty(i,xn,{value:[],enumerable:!1,configurable:!0,writable:!0}),i[xn].includes(e)||i[xn].push(e);const o=n==null?void 0:n.priority;typeof o=="function"&&it.setStreamPriority(i,t,o)}},setTag(i,e,t){const n=i[e],r=i[n];if(r.tag=t,i[Un]||(Object.defineProperty(i,Un,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(i,hi,{value:{},enumerable:!1,configurable:!0})),i[Un].push(n),t<0)i[hi][t]||(i[hi][t]=[]),i[hi][t].push(n);else for(let s=t;s>0;s&=s-1){const o=s&-s;i[hi][o]||(i[hi][o]=[]),i[hi][o].push(n)}},setUnreliable(i,e){const t=i[e];if(typeof i[t].type!="string")throw new Error(`@unreliable cannot be applied to ref-type field "${e}". For ref-type fields, mark each primitive sub-field with @unreliable instead. See README "Limitations and best practices".`);i[t].unreliable=!0,i[Mr]||Object.defineProperty(i,Mr,{value:[],enumerable:!1,configurable:!0,writable:!0}),i[Mr].push(t)},setPatchOnly(i,e){const t=i[e];if(i[t].fullStateOnly)throw new Error(`field "${e}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);i[t].patchOnly=!0,ua(i,io,t),ua(i,Fa,t)},setDeprecated(i,e){const t=i[e];i[t].deprecated=!0,ua(i,Fa,t),Object.defineProperty(i,t,{value:i[t],enumerable:!1,configurable:!0})},setFullStateOnly(i,e){const t=i[e];if(i[t].patchOnly)throw new Error(`field "${e}" cannot be both patchOnly and fullStateOnly — those are the only two delivery channels, so the field would never reach a client.`);i[t].fullStateOnly=!0,ua(i,Ss,t)},setStream(i,e){const t=i[e];i[t].stream=!0,i[xn]||Object.defineProperty(i,xn,{value:[],enumerable:!1,configurable:!0,writable:!0}),i[xn].push(t)},setStreamPriority(i,e,t){const n=i[e];i[fa]||Object.defineProperty(i,fa,{value:{},enumerable:!1,configurable:!0,writable:!0}),i[fa][n]=t},getStreamPriority(i,e){var t;return(t=i==null?void 0:i[fa])==null?void 0:t[e]},defineField(i,e,t,n,r){const s=sm(r,`${i.name}.${n}`),{complexTypeKlass:o,childType:a}=rm(s);it.addField(e,t,n,s,sT(n,t,a,o)),e[_n][n]&&Object.defineProperty(i.prototype,n,e[_n][n]),(typeof s=="string"||Lr(s))&&(e[pi]||Object.defineProperty(e,pi,{value:[],enumerable:!1,configurable:!0,writable:!0}),e[pi][t]=typeof s=="string"?We[s]:iM(s.quantized))},setFields(i,e){const t=i.prototype.constructor;Ur.register(t);const n=Object.getPrototypeOf(t),r=n&&n[Symbol.metadata],s=it.initialize(t);t[ti]||(t[ti]=wt[ti]),t[ni]||(t[ni]=wt[ni]),t[zn]||(t[zn]=wt[zn]),t.prototype.toJSON||(t.prototype.toJSON=wt.prototype.toJSON);let o=s[en]??(r&&r[en])??-1;o++,s[pi]||Object.defineProperty(s,pi,{value:r!=null&&r[pi]?[...r[pi]]:[],enumerable:!1,configurable:!0,writable:!0});for(const a in e){if(s[a]!==void 0)throw new Error(`@colyseus/schema: Duplicate '${a}' definition on '${t.name||"(anonymous)"}'.`);it.defineField(t,s,o,a,e[a]),o++}return i},isDeprecated(i,e){return i[e].deprecated===!0},initialize(i){const e=Object.getPrototypeOf(i),t=e[Symbol.metadata];let n=i[Symbol.metadata]??Object.create(null);if(e!==wt&&n===t&&(n=Object.create(null),t)){Object.setPrototypeOf(n,t),Object.defineProperty(n,en,{value:t[en],enumerable:!1,configurable:!0,writable:!0}),t[Un]!==void 0&&(Object.defineProperty(n,Un,{value:[...t[Un]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(n,hi,{value:{...t[hi]},enumerable:!1,configurable:!0,writable:!0}));for(const r of oM){const s=t[r];s!==void 0&&Object.defineProperty(n,r,{value:[...s],enumerable:!1,configurable:!0,writable:!0})}Object.defineProperty(n,_n,{value:{...t[_n]},enumerable:!1,configurable:!0,writable:!0})}return Object.defineProperty(i,Symbol.metadata,{value:n,writable:!1,configurable:!0}),n},isValidInstance(i){return i.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(i.constructor[Symbol.metadata],en)},getFields(i){const e=i[Symbol.metadata],t={};for(let n=0;n<=e[en];n++)t[e[n].name]=e[n].type;return t},hasViewTagAtIndex(i,e){var t;return(t=i==null?void 0:i[Un])==null?void 0:t.includes(e)},hasUnreliableAtIndex(i,e){var t;return(t=i==null?void 0:i[Mr])==null?void 0:t.includes(e)},hasPatchOnlyAtIndex(i,e){var t;return(t=i==null?void 0:i[io])==null?void 0:t.includes(e)},hasFullStateOnlyAtIndex(i,e){var t;return(t=i==null?void 0:i[Ss])==null?void 0:t.includes(e)},hasStreamAtIndex(i,e){var t;return(t=i==null?void 0:i[xn])==null?void 0:t.includes(e)}},om=(i,e,t)=>i(e,t);class aM{constructor(e){E(this,"dirtyLow",0);E(this,"dirtyHigh",0);E(this,"ops");this.ops=new Uint8Array(Math.max(e+1,1))}record(e,t){const n=this.ops[e];n===0?this.ops[e]=t:n===V.DELETE?this.ops[e]=V.DELETE_AND_ADD:n===V.ADD&&t===V.DELETE_AND_ADD&&(this.ops[e]=V.DELETE_AND_ADD),e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordDelete(e,t){this.ops[e]=t,e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}recordRaw(e,t){this.record(e,t)}operationAt(e){const t=this.ops[e];return t===0?void 0:t}setOperationAt(e,t){this.ops[e]=t}forEach(e){this.forEachWithCtx(e,om)}forEachWithCtx(e,t){let n=this.dirtyLow,r=this.dirtyHigh;const s=this.ops;for(;n!==0;){const o=n&-n,a=31-Math.clz32(o);n^=o,t(e,a,s[a])}for(;r!==0;){const o=r&-r,a=31-Math.clz32(o)+32;r^=o,t(e,a,s[a])}}size(){return ka(this.dirtyLow)+ka(this.dirtyHigh)}has(){return(this.dirtyLow|this.dirtyHigh)!==0}reset(){this.dirtyLow=0,this.dirtyHigh=0,this.ops.fill(0)}}class cM{constructor(){E(this,"dirty",new Map);E(this,"pureOps",[])}record(e,t){const n=this.dirty.get(e);n===void 0?this.dirty.set(e,t):n===V.DELETE?this.dirty.set(e,V.DELETE_AND_ADD):n===V.ADD&&t===V.DELETE_AND_ADD&&this.dirty.set(e,V.DELETE_AND_ADD)}recordDelete(e,t){this.dirty.set(e,t)}recordRaw(e,t){this.dirty.set(e,t)}recordPure(e){this.pureOps.push([this.dirty.size,e])}operationAt(e){return this.dirty.get(e)}setOperationAt(e,t){this.dirty.has(e)&&this.dirty.set(e,t)}forEach(e){this.forEachWithCtx(e,om)}forEachWithCtx(e,t){const n=this.pureOps;if(n.length>0){let r=0,s=0;for(const[o,a]of this.dirty){for(;r<n.length&&n[r][0]<=s;){const c=n[r++][1];t(e,-c,c)}t(e,o,a),s++}for(;r<n.length;){const o=n[r++][1];t(e,-o,o)}}else for(const[r,s]of this.dirty)t(e,r,s)}size(){return this.dirty.size+this.pureOps.length}has(){return this.dirty.size>0||this.pureOps.length>0}reset(){this.dirty.clear(),this.pureOps.length=0}shift(e){const t=new Map;for(const[n,r]of this.dirty)t.set(n+e,r);this.dirty=t}}function ka(i){return i=i-(i>>>1&1431655765),i=(i&858993459)+(i>>>2&858993459),(i+(i>>>4)&252645135)*16843009>>>24}function ha(i){if(i===void 0)return 0;let e=0;for(let t=0,n=i.length;t<n;t++){const r=i[t];r<32&&(e|=1<<r)}return e}function lM(i){const e=[],t=[],n=[],r=[],s=i==null?void 0:i[en];if(s===void 0)return{names:e,types:t,tags:n,encoders:r};const o=i[pi];for(let a=0;a<=s;a++){const c=i[a];if(c===void 0){e[a]=void 0,t[a]=void 0,n[a]=void 0,r[a]=void 0;continue}e[a]=c.name,t[a]=c.type,n[a]=c.tag,r[a]=o==null?void 0:o[a]}return{names:e,types:t,tags:n,encoders:r}}function fM(i){const e=i==null?void 0:i[Mi];if(e===void 0)return;let t;for(const n of e){const r=i[n];r.tag!==void 0||it.hasStreamAtIndex(i,n)||typeof rm(r.type).childType=="string"&&(t??(t=[])).push(n)}return t}function am(i){var c,l,f,h;const e=i.constructor;if(Object.prototype.hasOwnProperty.call(e,Ks))return e[Ks];const t=e[Symbol.metadata],n=it.isValidInstance(i),r=(((c=t==null?void 0:t[Un])==null?void 0:c.length)??0)>0,s=lM(t),o=n&&!r?void 0:e[Nr],a={encoder:e[ni],filter:o,metadata:t,isSchema:n,filterBitmask:n?ha(t==null?void 0:t[Un]):0,hasAnyFullStateOnly:(((l=t==null?void 0:t[Ss])==null?void 0:l.length)??0)>0,hasAnyUnreliable:(((f=t==null?void 0:t[Mr])==null?void 0:f.length)??0)>0,hasAnyStream:(((h=t==null?void 0:t[xn])==null?void 0:h.length)??0)>0,hasAnyView:r,fullStateOnlyBitmask:ha(t==null?void 0:t[Ss]),unreliableBitmask:ha(t==null?void 0:t[Mr]),streamBitmask:ha(t==null?void 0:t[xn]),names:s.names,types:s.types,tags:s.tags,encoders:s.encoders,viewInheritFields:fM(t)};return Object.defineProperty(e,Ks,{value:a,enumerable:!1,writable:!0,configurable:!0}),a}function uM(i,e,t){return i.parentRef&&(i.parentRef[B]===e[B]||cm(i,(n,r)=>n[B]===e[B]))?(i._parentIndex=t,!0):(i.parentRef===void 0?(i.parentRef=e,i._parentIndex=t):(i.extraParents={ref:i.parentRef,index:i._parentIndex,next:i.extraParents},i.parentRef=e,i._parentIndex=t),!1)}function hM(i,e,t){if(i.extraParents===void 0){i._parentIndex=t;return}if(i.parentRef[B]===e[B]){i._parentIndex=t;return}for(let n=i.extraParents;n!==void 0;n=n.next)if(n.ref[B]===e[B]){n.index=t;return}}function dM(i,e){if(i.parentRef&&i.parentRef[B]===e[B])return i.extraParents?(i.parentRef=i.extraParents.ref,i._parentIndex=i.extraParents.index,i.extraParents=i.extraParents.next):(i.parentRef=void 0,i._parentIndex=void 0),!0;let t=i.extraParents,n=null;for(;t;){if(t.ref[B]===e[B])return n?n.next=t.next:i.extraParents=t.next,!0;n=t,t=t.next}return i.parentRef===void 0}function pM(i,e){if(i.parentRef!==void 0&&e(i.parentRef,i._parentIndex))return{ref:i.parentRef,index:i._parentIndex};for(let t=i.extraParents;t!==void 0;t=t.next)if(e(t.ref,t.index))return{ref:t.ref,index:t.index}}function cm(i,e){if(i.parentRef!==void 0&&e(i.parentRef,i._parentIndex))return!0;for(let t=i.extraParents;t!==void 0;t=t.next)if(e(t.ref,t.index))return!0;return!1}function mM(i,e){if(i.parentRef&&i.parentRef[B]===e[B])return i._parentIndex;for(let t=i.extraParents;t!==void 0;t=t.next)if(t.ref[B]===e[B])return t.index}function gM(i){const e=[];i.parentRef&&e.push({ref:i.parentRef,index:i._parentIndex});let t=i.extraParents;for(;t;)e.push({ref:t.ref,index:t.index}),t=t.next;return e}function _M(i,e,t){const n=e.refTarget;if(e.isArray){const s=n.items,o=s[t];if(o!==void 0&&o[B]===i)return!0;for(let a=0,c=s.length;a<c;a++){const l=s[a];if(l!==void 0&&l[B]===i)return!0}return!1}const r=e.getValue(t);return r!==void 0&&r[B]===i}const lm=(i,e)=>{i.isFieldUnreliable(e)?i.ensureUnreliableRecorder().record(e,V.ADD):i.record(e,V.ADD)},xM=(i,e)=>i(e);function yM(i,e){qf(i,e,xM)}function qf(i,e,t){const n=i.refTarget;if(n[Be]!==void 0){if(i.isPatchOnly)return;if(Array.isArray(n.items)){const r=n.items;for(let s=0,o=r.length;s<o;s++)r[s]!==void 0&&t(e,s)}else if(n.journal!==void 0)for(const[r,s]of n.journal.keyByIndex)n.$items.has(s)&&t(e,r);else if(n.$items!==void 0)for(const r of n.$items.keys())t(e,r)}else{const r=i.metadata;if(!r)return;const s=r[en]??-1,o=r[Fa],a=i.encDescriptor.names;for(let c=0;c<=s;c++){const l=a[c];if(l===void 0||o&&o.includes(c))continue;const f=n[l];f!=null&&t(e,c)}}}function fm(i,e,t,n){var r,s,o,a,c;vM(i,e,t),!i.isFullStateOnly&&(i.has()&&((r=i.root)==null||r.enqueueChangeTree(i)),(s=i.unreliableRecorder)!=null&&s.has()&&((o=i.root)==null||o.enqueueUnreliable(i)),!i.has()&&!((a=i.unreliableRecorder)!=null&&a.has())&&((c=i.root)==null||c.enqueueChangeTree(i)))}function vM(i,e,t){var g,_,p,d,w,b,v;if(!e)return;const n=e[B],r=!n._isSchema;let s;r?(e=n.parent,t=n.parentIndex,s=e==null?void 0:e[B].metadata):s=n.metadata;const o=((g=s==null?void 0:s[io])!=null&&g.includes(t)?Zs:0)|((_=s==null?void 0:s[Ss])!=null&&_.includes(t)?cs:0),a=n.flags&IM|o,c=i.flags;i.flags=c|a,a&~c&cs&&(i.reset(),(p=i.unreliableRecorder)==null||p.reset());const f=(d=i.root)==null?void 0:d.types;if(!(f!=null&&f.hasFilters))return;const h=((w=s==null?void 0:s[Un])==null?void 0:w.includes(t))??!1,u=((b=s==null?void 0:s[xn])==null?void 0:b.includes(t))??!1,m=n.isFiltered||h||u;if(i.isFiltered=m,u&&!r){i.isStreamCollection=!0;const I=$f(i.ref);if(I.priority===void 0){const R=it.getStreamPriority(s,t);R!==void 0&&(I.priority=R)}(v=i.root)==null||v.registerStream(i.ref)}if(m){const I=hm(i),R=n.isFiltered&&!u&&(!h||r&&s[t].tag!==gc);i.isVisibilitySharedWithParent=R&&I,R&&!I&&um(i,n)}}function um(i,e){const t=e.visibleViews;if(t===void 0)return;const n=i.visibleViews;if(n===void 0){i.visibleViews=t.slice();return}for(let r=0;r<t.length;r++)n[r]|=t[r]}function Sh(i){const e=i.pendingFilterRefresh;for(let t=0;t<e.length;t++){const n=e[t];(n.flags&ro)!==0&&Yf(n)}e.length=0}function hm(i){return i._isSchema||typeof i.refTarget[Be]!="string"}function Yf(i){var s;i.flags&=~ro;const e=i.root;if(e===void 0||i.parentRef===void 0)return;const t=hm(i);let n=Mh(i,i.parentRef,i._parentIndex,t);for(let o=i.extraParents;o!==void 0&&n!==EM;o=o.next)n|=Mh(i,o.ref,o.index,t);if(n===0)return;i.isVisibilitySharedWithParent=(n&Va)!==0;const r=(n&za)===0;r!==i.isFiltered&&(i.isFiltered=r,!r&&!i.isFullStateOnly&&(i.forEachLiveWithCtx(i,lm),i.has()&&e.enqueueChangeTree(i),(s=i.unreliableRecorder)!=null&&s.has()&&e.enqueueUnreliable(i)),i.forEachChildWithCtx(i,SM))}const dm=1,za=2,Va=4,EM=dm|za|Va;function Mh(i,e,t,n){var o;const r=e[B];if(r.root!==i.root||!_M(i,r,t))return 0;r.flags&ro&&Yf(r);let s=dm;if(r._isSchema)r.encDescriptor.tags[t]!==void 0||r.isFieldStream(t)||(r.isFiltered?n?s|=Va:um(i,r):s|=za);else if(!r.isFiltered)s|=za;else if(n&&!r.isStreamCollection){const a=(o=r.parent)==null?void 0:o[B];(a!=null&&a._isSchema?a.encDescriptor.tags[r.parentIndex]:void 0)!==gc&&(s|=Va)}return s}const SM=(i,e,t)=>{Yf(e)};function MM(i,e,t,n){const r=i.subscribedViews;if(r===void 0)return;const s=i.isStreamCollection,o=s?i.ref:void 0,a=s?void 0:t[B];for(let c=0,l=r.length;c<l;c++){let f=r[c];for(;f!==0;){const h=f&-f;f^=h;const u=c*32+(31-Math.clz32(h)),m=n.activeViews.get(u),g=m==null?void 0:m.deref();if(g===void 0){r[c]&=~h;continue}s?tM(o,u,e):a!==void 0&&g.grantVisible(a)}}}function TM(i,e){i.root=e;const t=e.add(i);fm(i,i.parent,i.parentIndex),t&&Po(i,e,RM)}function wM(i,e,t,n){const r=i.addParent(e,n);if(!t)return r;const s=t.add(i);t!==i.root&&(i.root=t,fm(i,e,n));const o=e==null?void 0:e[B];if(o!==void 0&&o.subscribedViews!==void 0&&e[Be]!==void 0&&MM(o,n,i.ref,t),s){let a=Th[da];a===void 0&&(a={parentRef:void 0,root:void 0},Th[da]=a),a.parentRef=i.ref,a.root=t,da++,Po(i,a,CM),da--}return r}function bM(i,e){Po(i,e,AM)}function AM(i,e,t){i(e,t)}function Po(i,e,t){const n=i.refTarget;if(n[Be]){if(typeof n[Be]!="string"){const r=n.items;if(r!==void 0)for(let s=0,o=r.length;s<o;s++){const a=r[s];a&&t(e,a[B],s)}else{const s=n.$items,o=n._collectionIndexes;for(const a of s.keys()){const c=s.get(a);c&&t(e,c[B],(o==null?void 0:o[a])??a)}}}}else{const r=i.metadata,s=r==null?void 0:r[Mi];if(!s)return;const o=i.encDescriptor.names;for(let a=0,c=s.length;a<c;a++){const l=s[a],f=n[o[l]];f&&t(e,f[B],l)}}}function RM(i,e,t){e.root!==i?e.setRoot(i):i.add(e)}const Th=[];let da=0;function CM(i,e,t){if(e.root===i.root){i.root.add(e),i.root.moveNextToParent(e);return}e.setParent(i.parentRef,i.root,t)}function DM(i,e,t){const n=(t&3)<<3;return t<4?i>>>n&255:e>>>n&255}const PM=(i,e,t)=>i(e,t);function wh(){return{next:void 0,tail:void 0,nextPosition:0}}const tl=1,nl=2,Gs=4,il=8,Zs=16,cs=32,Aa=64,pa=128,ro=256,jf=512,ns=1024,IM=Zs|cs;class Ps{constructor(e,t=e){E(this,"ref");E(this,"refTarget");E(this,"metadata");E(this,"encDescriptor");E(this,"root");E(this,"parentRef");E(this,"_parentIndex");E(this,"extraParents");E(this,"flags",Gs);E(this,"refCount",0);E(this,"_fullSyncGen",0);E(this,"_isSchema",!1);E(this,"dirtyLow",0);E(this,"dirtyHigh",0);E(this,"opsLow",0);E(this,"opsHigh",0);E(this,"ops");E(this,"collDirty");E(this,"collPureOps");E(this,"unreliableRecorder");E(this,"paused",!1);E(this,"changesNode");E(this,"unreliableChangesNode");E(this,"visibleViews");E(this,"tagViews");E(this,"subscribedViews");var s;this.ref=e,this.refTarget=t;const n=am(e);this.encDescriptor=n,this.metadata=n.metadata;const r=n.isSchema;if(this._isSchema=r,this.ops=void 0,this.collDirty=void 0,this.collPureOps=void 0,r){const o=((s=this.metadata)==null?void 0:s[en])??0;o>7&&(this.ops=new Uint8Array(o+1))}else this.collDirty=new Map}get isArray(){return this.refTarget!==this.ref}get isFiltered(){return(this.flags&tl)!==0}set isFiltered(e){this.flags=e?this.flags|tl:this.flags&~tl}get isVisibilitySharedWithParent(){return(this.flags&nl)!==0}set isVisibilitySharedWithParent(e){this.flags=e?this.flags|nl:this.flags&~nl}get isNew(){return(this.flags&Gs)!==0}set isNew(e){this.flags=e?this.flags|Gs:this.flags&~Gs}get isUnreliable(){return(this.flags&il)!==0}set isUnreliable(e){this.flags=e?this.flags|il:this.flags&~il}get isPatchOnly(){return(this.flags&Zs)!==0}set isPatchOnly(e){this.flags=e?this.flags|Zs:this.flags&~Zs}get isFullStateOnly(){return(this.flags&cs)!==0}set isFullStateOnly(e){this.flags=e?this.flags|cs:this.flags&~cs}get isStreamCollection(){return(this.flags&Aa)!==0}set isStreamCollection(e){this.flags=e?this.flags|Aa:this.flags&~Aa}get needsRestage(){return(this.flags&pa)!==0}set needsRestage(e){this.flags=e?this.flags|pa:this.flags&~pa}get hasFilteredFields(){return this.isFiltered||this.encDescriptor.hasAnyView}ensureUnreliableRecorder(){var e;return this.unreliableRecorder===void 0&&(this.unreliableRecorder=this._isSchema?new aM(((e=this.metadata)==null?void 0:e[en])??0):new cM),this.unreliableRecorder}isFieldUnreliable(e){const t=this.encDescriptor;return t.hasAnyUnreliable?e<32?(t.unreliableBitmask&1<<e)!==0:it.hasUnreliableAtIndex(this.metadata,e):!1}isFieldFullStateOnly(e){if(this.isFullStateOnly)return!0;const t=this.encDescriptor;return t.hasAnyFullStateOnly?e<32?(t.fullStateOnlyBitmask&1<<e)!==0:it.hasFullStateOnlyAtIndex(this.metadata,e):!1}isFieldStream(e){const t=this.encDescriptor;return t.hasAnyStream?e<32?(t.streamBitmask&1<<e)!==0:it.hasStreamAtIndex(this.metadata,e):!1}_opAt(e){const t=this.ops;if(t!==void 0)return t[e];const n=(e&3)<<3;return e<4?this.opsLow>>>n&255:this.opsHigh>>>n&255}_opPut(e,t){const n=this.ops;if(n!==void 0){n[e]=t;return}const r=(e&3)<<3,s=~(255<<r);e<4?this.opsLow=this.opsLow&s|t<<r:this.opsHigh=this.opsHigh&s|t<<r}_markDirty(e){e<32?this.dirtyLow|=1<<e:this.dirtyHigh|=1<<e-32}record(e,t){if(this._isSchema){const n=this._opAt(e);n===0?this._opPut(e,t):n===V.DELETE?this._opPut(e,V.DELETE_AND_ADD):n===V.ADD&&t===V.DELETE_AND_ADD&&this._opPut(e,V.DELETE_AND_ADD),this._markDirty(e)}else{const n=this.collDirty,r=n.get(e);let s;r===void 0?s=t:r===V.DELETE||r===V.ADD&&t===V.DELETE_AND_ADD?s=V.DELETE_AND_ADD:s=r,n.set(e,s)}}recordDelete(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordRaw(e,t){this._isSchema?(this._opPut(e,t),this._markDirty(e)):this.collDirty.set(e,t)}recordPure(e){if(this._isSchema)throw new Error("ChangeTree (Schema): pure operations are not supported");(this.collPureOps??(this.collPureOps=[])).push([this.collDirty.size,e])}operationAt(e){if(this._isSchema){const t=this._opAt(e);return t===0?void 0:t}return this.collDirty.get(e)}setOperationAt(e,t){if(this._isSchema)this._opPut(e,t);else{const n=this.collDirty;n.has(e)&&n.set(e,t)}}forEach(e){this.forEachWithCtx(e,PM)}forEachWithCtx(e,t){if(this._isSchema){let s=this.dirtyLow,o=this.dirtyHigh;const a=this.ops;if(a!==void 0){for(;s!==0;){const c=s&-s,l=31-Math.clz32(c);s^=c,t(e,l,a[l])}for(;o!==0;){const c=o&-o,l=31-Math.clz32(c)+32;o^=c,t(e,l,a[l])}}else{const c=this.opsLow,l=this.opsHigh;for(;s!==0;){const f=s&-s,h=31-Math.clz32(f);s^=f,t(e,h,DM(c,l,h))}}return}const n=this.collDirty,r=this.collPureOps;if(r!==void 0&&r.length>0){let s=0,o=0;for(const[a,c]of n){for(;s<r.length&&r[s][0]<=o;){const l=r[s++][1];t(e,-l,l)}t(e,a,c),o++}for(;s<r.length;){const a=r[s++][1];t(e,-a,a)}}else for(const[s,o]of n)t(e,s,o)}size(){var e;return this._isSchema?ka(this.dirtyLow)+ka(this.dirtyHigh):this.collDirty.size+(((e=this.collPureOps)==null?void 0:e.length)??0)}has(){return this._isSchema?(this.dirtyLow|this.dirtyHigh)!==0:this.collDirty.size>0||this.collPureOps!==void 0&&this.collPureOps.length>0}reset(){if(this._isSchema){this.dirtyLow=0,this.dirtyHigh=0,this.ops!==void 0?this.ops.fill(0):(this.opsLow=0,this.opsHigh=0);return}this.collDirty.clear(),this.collPureOps!==void 0&&(this.collPureOps.length=0),this.flags&=~jf}recycle(){var e,t,n;if(this.root!==void 0)throw new Error(`@colyseus/schema: cannot recycle an attached ChangeTree (${(t=(e=this.ref)==null?void 0:e.constructor)==null?void 0:t.name}). Remove the instance from its parent collection before releasing it to a pool.`);this.reset(),(n=this.unreliableRecorder)==null||n.reset(),this.flags=Gs|pa,this._fullSyncGen=0,this.parentRef=void 0,this._parentIndex=void 0,this.extraParents=void 0,this.changesNode=void 0,this.unreliableChangesNode=void 0,this.paused=!1,this.visibleViews=void 0,this.tagViews=void 0,this.subscribedViews=void 0}insertAt(e,t){var o;if(this._isSchema)throw new Error("ChangeTree (Schema): insertAt is not supported");const n=this.collDirty,r=new Map,s=!this.paused&&!this.isFullStateOnly;if(e>0)for(const[a,c]of n)a<e&&r.set(a,c);if(s)for(let a=0;a<t;a++)r.set(e+a,V.ADD);for(const[a,c]of n)a>=e&&r.set(a+t,c);this.collDirty=r,s&&((o=this.root)==null||o.enqueueChangeTree(this))}removeAt(e,t){if(this._isSchema)throw new Error("ChangeTree (Schema): removeAt is not supported");const n=this.collDirty,r=e+t;let s=!1;for(const a of n.keys())if(a>=r){s=!0;break}if(!s){for(let a=e;a<r;a++)n.delete(a);return}const o=new Map;for(const[a,c]of n)a<e?o.set(a,c):a>=r&&o.set(a-t,c);this.collDirty=o}setRoot(e){TM(this,e)}setParent(e,t,n){return wM(this,e,t,n)}forEachChild(e){bM(this,e)}forEachChildWithCtx(e,t){Po(this,e,t)}forEachLive(e){yM(this,e)}forEachLiveWithCtx(e,t){qf(this,e,t)}operation(e){var t;this.paused||this.isFullStateOnly||(this.recordPure(e),(t=this.root)==null||t.enqueueChangeTree(this))}_routeAndRecord(e,t,n){var r,s;if(!(this.paused||this.isFieldFullStateOnly(e))){if(this.isFieldUnreliable(e)&&!this.isNew){const o=this.ensureUnreliableRecorder();n?o.recordRaw(e,t):o.record(e,t),(r=this.root)==null||r.enqueueUnreliable(this);return}n?this.recordRaw(e,t):this.record(e,t),(s=this.root)==null||s.enqueueChangeTree(this)}}change(e,t=V.ADD){this._routeAndRecord(e,t,!1)}indexedOperation(e,t){this._routeAndRecord(e,t,!0)}getChange(e){return this.operationAt(e)}pause(){this.paused=!0}resume(){this.paused=!1}untracked(e){const t=this.paused;this.paused=!0;try{return e()}finally{this.paused=t}}markDirty(e,t=V.ADD){const n=this.paused;this.paused=!1;try{this.change(e,t)}finally{this.paused=n}}getValue(e,t=!1){return this.refTarget[Lt](e,t)}delete(e,t){var s,o,a;if(e===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${e}'`)}catch(c){console.warn(c)}return}if(this.paused||this.isFieldFullStateOnly(e))return this.getValue(e);const n=this.isFieldUnreliable(e)&&!this.isNew;n?this.ensureUnreliableRecorder().recordDelete(e,t??V.DELETE):this.recordDelete(e,t??V.DELETE);const r=this.getValue(e);return r&&r[B]&&((s=this.root)==null||s.remove(r[B])),n?(o=this.root)==null||o.enqueueUnreliable(this):(a=this.root)==null||a.enqueueChangeTree(this),r}endEncode(){var e,t;this.reset(),this.changesNode=void 0,this._isSchema||(t=(e=this.refTarget)[Zi])==null||t.call(e),this.isNew=!1}endEncodeUnreliable(){var e,t,n;(e=this.unreliableRecorder)==null||e.reset(),this.unreliableChangesNode=void 0,this._isSchema||(n=(t=this.refTarget)[Zi])==null||n.call(t)}discard(){var e,t,n;this._isSchema||(t=(e=this.refTarget)[Zi])==null||t.call(e),this.reset(),(n=this.unreliableRecorder)==null||n.reset()}discardAll(){var t;const e=n=>{if(n<0)return;const r=this.getValue(n);r&&r[B]&&r[B].discardAll()};this.forEach(e),(t=this.unreliableRecorder)==null||t.forEach(e),this.discard()}get changed(){var e;return this.has()||(((e=this.unreliableRecorder)==null?void 0:e.has())??!1)}get parent(){return this.parentRef}get parentIndex(){return this._parentIndex}addParent(e,t){return uM(this,e,t)}setParentIndex(e,t){hM(this,e,t)}removeParent(e=this.parent){return dM(this,e)}findParent(e){return pM(this,e)}hasParent(e){return cm(this,e)}indexInParent(e){return mM(this,e)}getAllParents(){return gM(this)}}class LM{constructor(e){E(this,"ref");E(this,"root");E(this,"parentRef");E(this,"paused",!1);E(this,"isNew",!1);E(this,"flags",0);this.ref=e}change(){}delete(){}indexedOperation(){}operation(){}setParent(){return!1}addParent(){return!1}setParentIndex(){}removeParent(){return!1}getChange(){return 0}discard(){}discardAll(){}pause(){}resume(){}untracked(e){return e()}markDirty(){}forEachChild(e){var o;const t=this.ref;if(t[Be]){if(typeof t[Be]!="string")for(const[a,c]of t.entries())c&&e(c[B],((o=t._collectionIndexes)==null?void 0:o[a])??a);return}const n=t.constructor,r=n==null?void 0:n[Symbol.metadata];if(!r)return;const s=r[Mi]??[];for(let a=0;a<s.length;a++){const c=s[a],l=t[r[c].name];l&&e(l[B],c)}}forEachChildWithCtx(e,t){this.forEachChild((n,r)=>t(e,n,r))}forEachLive(){}forEachLiveWithCtx(){}forEach(){}}function UM(i){return new LM(i)}function Is(i,e=i){Object.defineProperty(i,B,{value:UM(e),enumerable:!1,writable:!0})}function dc(i,e,t,n,r,s,o){var a;o!==void 0?o(e,n,s):typeof t=="string"?(a=We[t])==null||a.call(We,e,n,s):t[Symbol.metadata]!=null?(We.number(e,n[Se],s),(r&V.ADD)===V.ADD&&i.tryEncodeTypeId(e,t,n.constructor,s)):We.number(e,n[Se],s)}const NM=function(i,e,t,n,r,s,o,a){const c=(n|r)&255;if(c===Na&&i.untypedRefEnd===s.offset&&(e[s.offset++]=Na,We.number(e,i.untypedRefTypeId,s)),e[s.offset++]=c,r===V.DELETE)return;const l=t.encDescriptor,f=t.ref,h=f[yn][n]??f[l.names[n]];dc(i,e,l.types[n],h,r,s,l.encoders[n])},OM=function(i,e,t,n,r,s){if(e[s.offset++]=r&255,We.number(e,n,s),r===V.DELETE)return;const o=t.ref;if((r&V.ADD)===V.ADD){const a=o.$indexes.get(n);We.string(e,a,s)}dc(i,e,o[Be],o[Lt](n),r,s)},Kf=function(i,e,t,n,r,s){if(e[s.offset++]=r&255,We.number(e,n,s),r===V.DELETE)return;const o=t.ref;dc(i,e,o[Be],o[Lt](n),r,s)};function bh(i,e){var t;return((t=i.replacedItems)==null?void 0:t[e])??i.tmpItems[e]}function FM(i,e,t){var s;const n=i.tmpItems.indexOf(e);if(n!==-1&&n<t)return!0;const r=((s=i.replacedItems)==null?void 0:s.indexOf(e))??-1;return r!==-1&&r<t}const BM=function(i,e,t,n,r,s,o,a){const c=t.refTarget,l=c[Be],f=typeof l!="string",h=a&&t.isFiltered&&f;let u;if(h){const g=r===V.DELETE?bh(c,n):c.tmpItems[n];if(!g)return;if(u=g[Se],r===V.DELETE)r=V.DELETE_BY_REFID;else if((r&V.ADD)===V.ADD)r=V.ADD_BY_REFID;else return}else if(r===V.DELETE&&f){const g=bh(c,n);if(!g)return;(t.flags&ns)!==0&&g[B].root!==void 0&&FM(c,g,n)?u=n:(u=g[Se],r=V.DELETE_BY_REFID)}else u=n;if(e[s.offset++]=r&255,We.number(e,u,s),r===V.DELETE||r===V.DELETE_BY_REFID)return;const m=c[Lt](n,o);dc(i,e,l,m,r,s)};function pm(i,e,t,n,r,s,o){const a=i.resyncVisited;let c=a.get(i.currentRefId);if(c===void 0&&a.set(i.currentRefId,c=new Set),c.add(n),r!==void 0&&t===V.ADD&&r!==s){const l=r[Se];l!==void 0&&(i.root.removeRef(l),o==null||o.push({ref:e,refId:i.currentRefId,op:V.DELETE,dynamicIndex:n,value:void 0,previousValue:r}))}}function kM(i,e){const t=i.resyncVisited;t.has(e)||t.set(e,new Set)}function zM(i,e){if(i.resyncDamaged){console.warn("@colyseus/schema: resync sweep skipped — parts of the payload could not be decoded. Stale entries may persist until the next resync.");return}Zf(i,i.state,new Set,e)}function Zf(i,e,t,n){const r=e[Se];if(r===void 0||t.has(r))return;t.add(r);const s=e.constructor[Symbol.metadata],o=s==null?void 0:s[Mi];if(o===void 0)return;const a=s[io];for(let c=0;c<o.length;c++){const l=o[c];if(a!==void 0&&a.includes(l))continue;const f=s[l],h=e[f.name];h&&(wt.is(f.type)?Zf(i,h,t,n):VM(i,h,t,n))}}function VM(i,e,t,n){const r=e[Bt]??e,s=r[Se];if(s===void 0||t.has(s))return;t.add(s);const o=i.resyncVisited.get(s);if(o===void 0)return;const a=i.root;r[Ds](o,(c,l)=>{n==null||n.push({ref:e,refId:s,op:V.DELETE,dynamicIndex:l,value:void 0,previousValue:c});const f=c==null?void 0:c[Se];f!==void 0&&a.removeRef(f)},c=>{wt.isSchema(c)&&Zf(i,c,t,n)})}const mm=-1,Nn={Map:1,Array:2,Set:3,Collection:4,Stream:5};function Jf(i,e,t,n,r,s,o,a,c){const l=i.root;let f;if((e&V.DELETE)===V.DELETE){const h=r==null?void 0:r[Se];h!==void 0&&l.removeRef(h),e!==V.DELETE_AND_ADD&&t[Hn](n),f=void 0}if(e!==V.DELETE)if(typeof s=="string")f=et[s](o,a);else if(Lr(s))f=rM(s.quantized,o,a);else if(wt.is(s)){const h=et.number(o,a);if(f=l.refs.get(h),(e&V.ADD)===V.ADD){const u=i.getInstanceType(o,a,s);f||(f=i.createInstanceOfType(u)),l.addRef(h,f,f!==r||e===V.DELETE_AND_ADD&&f===r)}}else{const h=ZS(Object.keys(s)[0]),u=et.number(o,a);i.resyncVisited!==null&&kM(i,u);const m=l.refs.has(u)?r||l.refs.get(u):h.constructor.initializeForDecoder();if(f=m.clone(!0),f[Be]=Object.values(s)[0],r){let g=r[Se];if(g!==void 0&&u!==g){(e&V.DELETE)!==V.DELETE&&l.removeRef(g);const _=r.entries();let p;for(;(p=_.next())&&!p.done;){const[d,w]=p.value;typeof w=="object"&&(g=w[Se]),c==null||c.push({ref:r,refId:g,op:V.DELETE,field:d,value:void 0,previousValue:w})}}}l.addRef(u,f,m!==r||e===V.DELETE_AND_ADD&&m===r)}return f}const HM=function(i,e,t,n,r){const s=e[t.offset++],o=n.constructor[Symbol.metadata],a=s>>6<<6,c=s%(a||255),l=o[c];if(l===void 0)return console.warn("@colyseus/schema: field not defined at",{index:c,ref:n.constructor.name,metadata:o}),mm;const f=l.deprecated===!0,h=f?void 0:n[Lt](c),u=Jf(i,a,n,c,h,l.type,e,t,r);f||(u!=null&&(n[l.name]=u),h!==u&&(r==null||r.push({ref:n,refId:i.currentRefId,op:a,field:l.name,value:u,previousValue:h})))},pc=function(i,e,t,n,r){var m;const s=n[Bt]??n,o=e[t.offset++];if(o===V.CLEAR){i.removeChildRefs(s,r),s.clear();return}const a=et.number(e,t),c=s[Be],l=s.constructor.COLLECTION_KIND;let f;(o&V.ADD)===V.ADD?l===Nn.Map?(f=et.string(e,t),s.setIndex(a,f)):f=a:f=s.getIndex(a);const h=s[Lt](a),u=Jf(i,o,n,a,h,c,e,t,r);if(i.resyncVisited!==null&&pm(i,n,o,f,h,u,r),u!=null)switch(l){case Nn.Map:s.$items.set(f,u);break;case Nn.Array:s.$setAt(a,u,i.resyncVisited!==null&&o===V.ADD?V.REPLACE:o);break;case Nn.Set:case Nn.Collection:case Nn.Stream:s.$items.has(a)||(s.$items.set(a,u),typeof s.$refId=="number"&&a>=s.$refId&&(s.$refId=a+1));break;default:console.warn(`@colyseus/schema: missing COLLECTION_KIND on ${(m=s.constructor)==null?void 0:m.name} — item at index ${a} was not stored.`);break}h!==u&&(r==null||r.push({ref:n,refId:i.currentRefId,op:o,dynamicIndex:f,value:u,previousValue:h}))},GM=function(i,e,t,n,r){const s=n[Bt]??n;let o=e[t.offset++],a;if(o===V.CLEAR){i.removeChildRefs(s,r),s.clear();return}else if(o===V.REVERSE){s.items.reverse();return}else if(o===V.DELETE_BY_REFID){const u=et.number(e,t),m=i.root.refs.get(u);if(m===void 0||(i.root.removeRef(u),a=s.findIndex(g=>g===m),a===-1))return;s[Hn](a),r==null||r.push({ref:n,refId:i.currentRefId,op:V.DELETE,dynamicIndex:a,value:void 0,previousValue:m});return}else if(o===V.ADD_BY_REFID){const u=et.number(e,t),m=i.root.refs.get(u);m&&(a=s.findIndex(g=>g===m)),(a===-1||a===void 0)&&(a=s.length)}else a=et.number(e,t);const c=s[Be];let l=a;const f=s.items[a],h=Jf(i,o,n,a,f,c,e,t,r);i.resyncVisited!==null&&pm(i,n,o,a,f,h,r),h!=null&&h!==f&&s.$setAt(a,h,i.resyncVisited!==null&&o===V.ADD?V.REPLACE:o),f!==h&&(r==null||r.push({ref:n,refId:i.currentRefId,op:o,dynamicIndex:l,value:h,previousValue:f}))};class Qf extends Error{}function mc(i,e,t,n){if(!(i instanceof e))throw new Qf(`a '${e.name}' was expected, but '${i&&i.constructor.name}' was provided in ${t.constructor.name}#${n}`)}const WM=(i,e)=>{const t=i.toString(),n=e.toString();return t<n?-1:t>n?1:0};function rl(i){if(typeof i=="symbol")return!1;let e=i.charCodeAt(0);if(!(e>=48&&e<=57))return!1;if(e===48)return i.length===1;for(let t=1,n=i.length;t<n;t++)if(e=i.charCodeAt(t),e<48||e>57)return!1;return!0}const Ah={get:(i,e)=>rl(e)?i.items[e]:Reflect.get(i,e),set:(i,e,t)=>{var n;if(rl(e)){if(t==null){const r=Number(e);r<i.items.length&&i.splice(r,1)}else{let r;if(t[B]){mc(t,i[Be],i,e);const s=i.items[e];i.isMovingItems?(r=i.$wireIndex(Number(e)),s!==void 0?t[B].isNew?i[B].indexedOperation(r,V.MOVE_AND_ADD):(i[B].getChange(r)&V.DELETE)===V.DELETE?i[B].indexedOperation(r,V.DELETE_AND_MOVE):i[B].indexedOperation(r,V.MOVE):t[B].isNew&&i[B].indexedOperation(r,V.ADD),t[B].setParent(i,i[B].root,r)):r=i.$changeAt(Number(e),t),s!==void 0&&((n=s[B].root)==null||n.remove(s[B]))}else r=i.$changeAt(Number(e),t);i.items[e]=t,r!==void 0&&(i.tmpItems[r]=t)}return!0}return Reflect.set(i,e,t)},deleteProperty:(i,e)=>(delete i[e],!0),has:(i,e)=>rl(e)?Reflect.has(i.items,e):Reflect.has(i,e)};var pd,md,gd,_d,xd,yd,vd;const gn=class gn{constructor(...e){E(this,vd);E(this,yd);E(this,xd);E(this,_d);E(this,"items",[]);E(this,"tmpItems",[]);E(this,"deletedIndexes",[]);E(this,"replacedItems");E(this,"isMovingItems",!1);E(this,"_needsCompaction",!1);E(this,pd);this[Be]=void 0,this[Bt]=this;const t=new Proxy(this,Ah);return Object.defineProperty(this,B,{value:new Ps(t,this),enumerable:!1,writable:!0}),e.length>0&&this.push(...e),t}static[(vd=B,yd=Se,xd=Bt,_d=Be,gd=ni,md=zn,Nr)](e,t,n){var s;if(!n)return!0;const r=e[Bt]??e;return typeof r[Be]=="string"||n.isChangeTreeVisible((s=r.tmpItems[t])==null?void 0:s[B])}static is(e){return Array.isArray(e)||e.array!==void 0}static from(e){return new gn(...Array.from(e))}static initializeForDecoder(){const e=Object.create(gn.prototype);e.items=[],e.isMovingItems=!1,e._needsCompaction=!1,e[Be]=void 0,e[Bt]=e;const t=new Proxy(e,Ah);return Is(e,t),t}set length(e){e===0?this.clear():e<this.items.length?this.splice(e,this.length-e):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}pauseTracking(){this[B].pause()}resumeTracking(){this[B].resume()}untracked(e){return this[B].untracked(e)}get isTrackingPaused(){return this[B].paused}push(...e){var c;const t=this[Bt],n=t.items,r=t.tmpItems,s=t[B],o=t[Be];let a=r.length;for(let l=0,f=e.length;l<f;l++,a++){const h=e[l];if(h==null)return;typeof h=="object"&&o&&mc(h,o,t,l),s.indexedOperation(a,V.ADD),n.push(h),r.push(h),(c=h[B])!=null&&c.setParent(this,s.root,a)&&(s.flags|=ns)}return a}pop(){const e=this[Bt],t=e.tmpItems,n=e.deletedIndexes;let r=-1;for(let o=t.length-1;o>=0;o--)if(n[o]!==!0){r=o;break}if(r<0)return;if(e.$settleReorder(r))return this.pop();const s=e.$isUnsentAdd(r);return e[B].delete(r),s?e.$cancelAdd(r):n[r]=!0,e.items.pop()}at(e){return e<0&&(e+=this.length),this.items[e]}$wireIndex(e){const t=this.deletedIndexes;if(t.length===0)return e;const n=this.tmpItems;let r=0;for(let s=0;s<n.length;s++)if(t[s]!==!0){if(r===e)return s;r++}return n.length+(e-r)}$canReorderInPlace(){if(this.deletedIndexes.length>0)return!1;if(typeof this[Be]=="string")return!0;for(const e of this[B].collDirty.values())if((e&(V.ADD|V.DELETE))!==0)return!1;return!0}$settleReorder(e){if(typeof this[Be]=="string")return!1;const t=this[B];return t.paused||t.operationAt(e)!==V.REPLACE?!1:(this.$restate(this.items.slice()),!0)}$restate(e){const t=this[B].ref;t.clear(),t.push(...e)}$isUnsentAdd(e){const t=this[B];return(t.flags&(jf|Aa))===0&&!t.paused&&t.operationAt(e)===V.ADD}$cancelAdd(e,t=!0){var o;const n=this[B],r=this.tmpItems[e];this.tmpItems.splice(e,1),this.deletedIndexes.length>0&&this.deletedIndexes.splice(e,1),n.removeAt(e,1),(o=this.replacedItems)==null||o.splice(e,1);const s=r==null?void 0:r[B];s!==void 0&&s.root===void 0&&s.removeParent(this),t&&this.$reindexChildren(e)}$stashReplaced(e){if(typeof this[Be]=="string")return;const t=this[B];if(t.paused||t.isFullStateOnly)return;const n=this.replacedItems??(this.replacedItems=[]);n[e]===void 0&&(n[e]=this.tmpItems[e])}$insertSlots(e,t,n){var o,a,c;const r=this[B],s=n.length;r.insertAt(t,s);for(let l=0;l<s;l++)(a=(o=n[l])==null?void 0:o[B])!=null&&a.setParent(e,r.root,t+l)&&(r.flags|=ns);t===0?this.tmpItems.unshift(...n):this.tmpItems.splice(t,0,...n),this.deletedIndexes.length>0&&this.deletedIndexes.splice(t,0,...new Array(s).fill(!1)),(c=this.replacedItems)==null||c.splice(t,0,...new Array(s)),this.$reindexChildren(t+s)}$reindexChildren(e,t){var s,o;if(!this[B].hasFilteredFields||typeof this[Be]=="string")return;const n=this.tmpItems,r=n.length;if(t!==void 0)for(;e<r&&n[e]===t[e];)e++;for(let a=e;a<r;a++)(o=(s=n[a])==null?void 0:s[B])==null||o.setParentIndex(this,a)}$changeAt(e,t){var a;if(t==null){console.error("ArraySchema items cannot be null nor undefined; Use `splice(index, 1)` instead.");return}if(this.items[e]===t)return;const n=this.$wireIndex(e);if(this.$settleReorder(n))return this.$changeAt(e,t);const r=this[B],s=this.items[e]!==void 0;let o=V.ADD;return s&&typeof t!="object"?o=V.REPLACE:s&&r.operationAt(n)!==V.ADD&&(this.$stashReplaced(n),o=V.DELETE_AND_ADD),r.change(n,o),(a=t[B])!=null&&a.setParent(this,r.root,n)&&(r.flags|=ns),n}$setAt(e,t,n){n===V.ADD&&this.items[e]!==void 0?this.items.splice(e,0,t):n===V.DELETE_AND_MOVE?(this.items.splice(e,1),this.items[e]=t):(e>this.items.length&&(this._needsCompaction=!0),this.items[e]=t)}clear(){const e=this[Bt];if(e.items.length===0)return;const t=e[B];t.forEachChild((n,r)=>{var s;(s=t.root)==null||s.remove(n),n.removeParent(e)}),t.flags&=~ns,t.discard(),t.operation(V.CLEAR),e.items.length=0,e.tmpItems.length=0,e.replacedItems=void 0}[Vn](){var r,s;const e=this[Bt]??this,t=e[B];if(t.isStreamCollection)throw new Error("@colyseus/schema: cannot reset a streamed ArraySchema (pooling not supported).");const n=e.items;for(let o=0;o<n.length;o++)(s=(r=n[o])==null?void 0:r[Vn])==null||s.call(r);e.items.length=0,e.tmpItems.length=0,e.deletedIndexes.length=0,e.replacedItems=void 0,t.recycle(),e[Se]=void 0}concat(...e){return new gn(...this.items.concat(...e))}join(e){return this.items.join(e)}reverse(){const e=this[Bt],t=e[B];return t.paused?(e.items.reverse(),this):t.has()||e.deletedIndexes.length>0?(e.$restate(e.items.slice().reverse()),this):(t.operation(V.REVERSE),e.items.reverse(),e.tmpItems.reverse(),e.$reindexChildren(0),this)}shift(){const e=this[Bt],t=e.items;if(t.length===0)return;const n=e[B],r=e.deletedIndexes;let s=0;for(;r[s]===!0;)s++;if(e.$settleReorder(s))return this.shift();const o=e.$isUnsentAdd(s);return n.delete(s,V.DELETE),o?e.$cancelAdd(s):r[s]=!0,t.shift()}slice(e,t){const n=new gn;return n.push(...this.items.slice(e,t)),n}sort(e=WM){const t=this[Bt],n=t.items,r=t[B];if(r.paused)return n.sort(e),this;if(!t.$canReorderInPlace())return t.$restate(n.slice().sort(e)),this;const s=t.tmpItems,o=typeof t[Be]=="string"&&r.has();n.sort(e);let a=-1;for(let c=0,l=n.length;c<l;c++){const f=s[c]!==n[c];!f&&!o||(f&&a<0&&(a=c),r.change(c,V.REPLACE),s[c]=n[c])}return a>=0&&t.$reindexChildren(a),this}splice(e,t,...n){var p,d;const r=this[Bt],s=r[B],o=r.items,a=r.tmpItems,c=r.deletedIndexes,l=o.length,f=a.length,h=n.length,u=Math.trunc(e)||0;e=u<0?Math.max(l+u,0):Math.min(u,l),t=arguments.length===1?l-e:Math.min(Math.max(Math.trunc(t)||0,0),l-e);const m=[];for(let w=0;w<f;w++)c[w]!==!0&&m.push(w);let g;const _=e+t;for(let w=e;w<_;w++)if(r.$settleReorder(m[w]))return this.splice(e,t,...n);for(let w=e;w<_;w++){const b=m[w],v=r.$isUnsentAdd(b);s.delete(b,V.DELETE),v?(g??(g=[])).push(b):c[b]=!0}if(h>0){const w=m[e]??f,b=Math.min(h,t);for(let v=0;v<b;v++){const I=w+v,R=g!==void 0?g.indexOf(I):-1;R!==-1&&g.splice(R,1);let T=V.ADD;c[I]&&(r.$stashReplaced(I),T=V.DELETE_AND_ADD),s.indexedOperation(I,T),a[I]=n[v],c[I]=!1,(p=n[v][B])!=null&&p.setParent(this,s.root,I)&&(s.flags|=ns)}h>b&&r.$insertSlots(this,w+b,n.slice(b))}if(g!==void 0&&g.length>0){for(let w=g.length-1;w>=0;w--)r.$cancelAdd(g[w],!1);r.$reindexChildren(g[0])}return(d=s.root)==null||d.enqueueChangeTree(s),o.splice(e,t,...n)}unshift(...e){const t=this[Bt];return t.$insertSlots(this,t.$wireIndex(0),e),t.items.unshift(...e)}indexOf(e,t){return this.items.indexOf(e,t)}lastIndexOf(e,t=this.length-1){return this.items.lastIndexOf(e,t)}every(e,t){return this.items.every(e,t)}some(e,t){return this.items.some(e,t)}forEach(e,t){return this.items.forEach(e,t)}map(e,t){return this.items.map(e,t)}filter(e,t){return this.items.filter(e,t)}reduce(e,t){return this.items.reduce.apply(this.items,arguments)}reduceRight(e,t){return this.items.reduceRight.apply(this.items,arguments)}find(e,t){return this.items.find(e,t)}findIndex(e,t){return this.items.findIndex(e,t)}fill(e,t,n){throw new Error("ArraySchema#fill() not implemented")}copyWithin(e,t,n){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return gn}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(e,t){return this.items.includes(e,t)}flatMap(e,t){throw new Error("ArraySchema#flatMap() is not supported.")}flat(e){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...e){return this.items.findLastIndex.apply(this.items,arguments)}with(e,t){const n=this.items.slice();return e<0&&(e+=this.length),n[e]=t,new gn(...n)}toReversed(){return this.items.slice().reverse()}toSorted(e){return this.items.slice().sort(e)}toSpliced(e,t,...n){const r=this.items.slice();return r.splice.apply(r,arguments),r}shuffle(){return this.move(e=>{let t=this.items.length;for(;t!=0;){let n=Math.floor(Math.random()*t);t--,[this[t],this[n]]=[this[n],this[t]]}})}move(e){return this.isMovingItems=!0,e(this),this.isMovingItems=!1,this}[(pd=Symbol.unscopables,Lt)](e,t=!1){const n=this[Bt]??this;return t||n.deletedIndexes[e]?n.items[e]:n.tmpItems[e]||n.items[e]}[Hn](e){const t=this[Bt]??this;t.items[e]=void 0,t._needsCompaction=!0}[Zi](){const e=this.tmpItems;this.tmpItems=this.items.slice(),this.replacedItems=void 0,this.deletedIndexes.length>0&&(this.$reindexChildren(0,e),this.deletedIndexes.length=0)}[Oa](){const e=this[Bt]??this;e._needsCompaction&&(e._needsCompaction=!1,e.items=e.items.filter(t=>t!==void 0))}[Ds](e,t,n){const r=this[Bt]??this,s=r.items;let o=!1;for(let a=0;a<s.length;a++){const c=s[a];if(e.has(a)){n(c);continue}o=!0,t(c,a),r[Hn](a)}o&&r[Oa]()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(e=>typeof e.toJSON=="function"?e.toJSON():e)}clone(e){let t;return e?(t=new gn,t.push(...this.items)):t=new gn(...this.map(n=>n[B]?n.clone():n)),t}};E(gn,gd,BM),E(gn,md,GM),E(gn,"COLLECTION_KIND",Nn.Array);let Ji=gn;Li("array",{constructor:Ji});class Rh{constructor(){E(this,"keyByIndex",new Map);E(this,"indexByKey",Object.create(null));E(this,"nextIndex",0);E(this,"snapshots")}indexOf(e){const t=this.indexByKey[e];return t===void 0?void 0:t}assign(e){const t=this.nextIndex++;return this.indexByKey[e]=t,this.keyByIndex.set(t,e),t}snapshot(e,t){(this.snapshots??(this.snapshots=new Map)).set(e,t)}forgetSnapshot(e){var t;(t=this.snapshots)==null||t.delete(e)}snapshotAt(e){var t;return(t=this.snapshots)==null?void 0:t.get(e)}setIndex(e,t){this.keyByIndex.set(e,t),this.indexByKey[t]=e}keyOf(e){return this.keyByIndex.get(e)}cleanupAfterEncode(){if(this.snapshots!==void 0){for(const[e]of this.snapshots){const t=this.keyByIndex.get(e);t!==void 0&&(delete this.indexByKey[t],this.keyByIndex.delete(e))}this.snapshots.clear()}}reset(){var e;this.indexByKey=Object.create(null),this.keyByIndex.clear(),(e=this.snapshots)==null||e.clear(),this.nextIndex=0}}var Ed,Sd,Md,Td,wd;const Xn=class Xn{constructor(e){E(this,wd);E(this,Td);E(this,"childType");E(this,Md);E(this,"$items",new Map);E(this,"journal",new Rh);E(this,"_stream");if(Object.defineProperty(this,B,{value:new Ps(this),enumerable:!1,writable:!0}),this[Be]=void 0,e)if(e instanceof Map||e instanceof Xn)e.forEach((t,n)=>this.set(n,t));else for(const t in e)this.set(t,e[t])}get maxPerTick(){var e;return((e=this._stream)==null?void 0:e.maxPerTick)??32}set maxPerTick(e){(this._stream??(this._stream=Pi())).maxPerTick=e}get priority(){var e;return(e=this._stream)==null?void 0:e.priority}set priority(e){(this._stream??(this._stream=Pi())).priority=e}get $indexes(){return this.journal.keyByIndex}get _collectionIndexes(){return this.journal.indexByKey}static[(wd=B,Td=Se,Md=Be,Sd=ni,Ed=zn,Nr)](e,t,n){if(!n||typeof e[Be]=="string")return!0;const r=e[Lt](t)??e.journal.snapshotAt(t);return n.isChangeTreeVisible(r[B])}static is(e){return e.map!==void 0}static initializeForDecoder(){const e=Object.create(Xn.prototype);return e.$items=new Map,e.journal=new Rh,e[Be]=void 0,Is(e),e}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return Xn}set(e,t){var c;if(t==null)throw new Error(`MapSchema#set('${e}', ${t}): trying to set ${t} value on '${e}'.`);typeof t=="object"&&this[Be]&&mc(t,this[Be],this,e),e=e.toString();const n=this[B],r=t[B]!==void 0,s=this.journal;let o=s.indexOf(e),a;if(o!==void 0){a=V.REPLACE;const l=this.$items.get(e);if(l===t)return;r&&(a=V.DELETE_AND_ADD,l!==void 0&&((c=l[B].root)==null||c.remove(l[B]))),s.snapshotAt(o)!==void 0&&s.forgetSnapshot(o)}else o=s.assign(e),a=V.ADD;return this.$items.set(e,t),a===V.ADD&&n.isStreamCollection?n.root!==void 0&&fc(this,n.root,o):n.change(o,a),r&&t[B].setParent(this,n.root,o),this}get(e){return this.$items.get(e)}getOrInsert(e,t){return this.$items.has(e)?this.$items.get(e):(this.set(e,t),t)}getOrInsertComputed(e,t){if(this.$items.has(e))return this.$items.get(e);const n=t(e);return this.set(e,n),n}delete(e){if(!this.$items.has(e))return!1;const t=this.journal.indexOf(e),n=this.$items.get(e),r=this[B];if(r.isStreamCollection){const s=r.root;let o=!1;return s!==void 0&&(o=uc(this,s,this[Se],t)),(n==null?void 0:n[B])!==void 0&&(s==null||s.remove(n[B])),this.$items.delete(e),o||this.journal.snapshot(t,n),!0}return this.journal.snapshot(t,n),r.delete(t),this.$items.delete(e)}clear(){const e=this[B];e.discard(),e.forEachChild((t,n)=>{var r;(r=e.root)==null||r.remove(t)}),this.journal.reset(),this.$items.clear(),e.operation(V.CLEAR)}[Vn](){const e=this[B];if(e.isStreamCollection)throw new Error("@colyseus/schema: cannot reset a streamed MapSchema (pooling not supported).");this.$items.forEach(t=>{var n;return(n=t==null?void 0:t[Vn])==null?void 0:n.call(t)}),this.$items.clear(),this.journal.reset(),e.recycle(),this[Se]=void 0}has(e){return this.$items.has(e)}forEach(e){this.$items.forEach(e)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[B].pause()}resumeTracking(){this[B].resume()}untracked(e){return this[B].untracked(e)}get isTrackingPaused(){return this[B].paused}setIndex(e,t){this.journal.setIndex(e,t)}getIndex(e){return this.journal.keyOf(e)}[Lt](e){const t=this.journal.keyOf(e);return t!==void 0?this.$items.get(t):void 0}[Hn](e){const t=this.journal.keyOf(e);t!==void 0&&(this.$items.delete(t),this.journal.keyByIndex.delete(e))}[Ds](e,t,n){let r=null;if(this.$items.forEach((s,o)=>{if(e.has(o)){n(s);return}(r??(r=new Set)).add(o),t(s,o)}),r!==null){r.forEach(o=>{this.$items.delete(o),delete this.journal.indexByKey[o]});const s=[];this.journal.keyByIndex.forEach((o,a)=>{r.has(o)&&s.push(a)});for(let o=0;o<s.length;o++)this.journal.keyByIndex.delete(s[o])}}[Zi](){this.journal.cleanupAfterEncode()}_dropView(e){hc(this,e)}_unregister(){}toJSON(){return Object.fromEntries(Array.from(this,([t,n])=>[t,typeof n.toJSON=="function"?n.toJSON():n]))}clone(e){let t;return e?t=Object.assign(new Xn,this):(t=new Xn,this.forEach((n,r)=>{n[B]?t.set(r,n.clone()):t.set(r,n)})),t}};E(Xn,Sd,OM),E(Xn,Ed,pc),E(Xn,"COLLECTION_KIND",Nn.Map);let Qi=Xn;Li("map",{constructor:Qi});var bd,Ad,Rd,Cd,Dd;const Gi=class Gi{constructor(e){E(this,Dd);E(this,Cd);E(this,Rd);E(this,"$items",new Map);E(this,"deletedItems",{});E(this,"$refId",0);E(this,"_stream");Object.defineProperty(this,B,{value:new Ps(this),enumerable:!1,writable:!0}),this[Be]=void 0,e&&e.forEach(t=>this.add(t))}get maxPerTick(){var e;return((e=this._stream)==null?void 0:e.maxPerTick)??32}set maxPerTick(e){(this._stream??(this._stream=Pi())).maxPerTick=e}get priority(){var e;return(e=this._stream)==null?void 0:e.priority}set priority(e){(this._stream??(this._stream=Pi())).priority=e}static[(Dd=B,Cd=Se,Rd=Be,Ad=ni,bd=zn,Nr)](e,t,n){return!n||typeof e[Be]=="string"||n.isChangeTreeVisible((e[Lt](t)??e.deletedItems[t])[B])}static is(e){return e.collection!==void 0}static initializeForDecoder(){const e=Object.create(Gi.prototype);return e.$items=new Map,e.deletedItems={},e.$refId=0,e[Be]=void 0,Is(e),e}add(e){const t=this.$refId++,n=this[B];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&fc(this,n.root,t):n.change(t),e[B]!==void 0&&e[B].setParent(this,n.root,t),t}at(e){const t=Array.from(this.$items.keys())[e];return this.$items.get(t)}entries(){return this.$items.entries()}delete(e){const t=this.$items.entries();let n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;const s=this[B];if(s.isStreamCollection){const o=s.root,a=this.$items.get(n);return o!==void 0&&uc(this,o,this[Se],n),(a==null?void 0:a[B])!==void 0&&(o==null||o.remove(a[B])),this.deletedItems[n]=a,this.$items.delete(n)}return this.deletedItems[n]=s.delete(n),this.$items.delete(n)}clear(){const e=this[B];e.discard(),e.forEachChild((t,n)=>{var r;(r=e.root)==null||r.remove(t)}),this.$items.clear(),e.operation(V.CLEAR)}[Vn](){const e=this[B];if(e.isStreamCollection)throw new Error("@colyseus/schema: cannot reset a streamed CollectionSchema (pooling not supported).");this.$items.forEach(t=>{var n;return(n=t==null?void 0:t[Vn])==null?void 0:n.call(t)}),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[Se]=void 0}has(e){return Array.from(this.$items.values()).some(t=>t===e)}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[B].pause()}resumeTracking(){this[B].resume()}untracked(e){return this[B].untracked(e)}get isTrackingPaused(){return this[B].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[Lt](e){return this.$items.get(e)}[Hn](e){this.$items.delete(e)}[Ds](e,t,n){let r=null;if(this.$items.forEach((s,o)=>{if(e.has(o)){n(s);return}(r??(r=[])).push(o),t(s,o)}),r!==null)for(let s=0;s<r.length;s++)this[Hn](r[s])}[Zi](){for(const e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){hc(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){const e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON=="function"?t.toJSON():t)}),e}clone(e){let t;return e?t=Object.assign(new Gi,this):(t=new Gi,this.forEach(n=>{n[B]?t.add(n.clone()):t.add(n)})),t}};E(Gi,Ad,Kf),E(Gi,bd,pc),E(Gi,"COLLECTION_KIND",Nn.Collection);let so=Gi;Li("collection",{constructor:so});var Pd,Id,Ld,Ud,Nd;const Wi=class Wi{constructor(e){E(this,Nd);E(this,Ud);E(this,Ld);E(this,"$items",new Map);E(this,"deletedItems",{});E(this,"$refId",0);E(this,"_stream");Object.defineProperty(this,B,{value:new Ps(this),enumerable:!1,writable:!0}),this[Be]=void 0,e&&e.forEach(t=>this.add(t))}get maxPerTick(){var e;return((e=this._stream)==null?void 0:e.maxPerTick)??32}set maxPerTick(e){(this._stream??(this._stream=Pi())).maxPerTick=e}get priority(){var e;return(e=this._stream)==null?void 0:e.priority}set priority(e){(this._stream??(this._stream=Pi())).priority=e}static[(Nd=B,Ud=Se,Ld=Be,Id=ni,Pd=zn,Nr)](e,t,n){return!n||typeof e[Be]=="string"||n.isVisible((e[Lt](t)??e.deletedItems[t])[B])}static is(e){return e.set!==void 0}static initializeForDecoder(){const e=Object.create(Wi.prototype);return e.$items=new Map,e.deletedItems={},e.$refId=0,e[Be]=void 0,Is(e),e}add(e){if(this.has(e))return!1;const t=this.$refId++,n=this[B];return this.$items.set(t,e),n.isStreamCollection?n.root!==void 0&&fc(this,n.root,t):n.change(t,V.ADD),e[B]!==void 0&&e[B].setParent(this,n.root,t),t}entries(){return this.$items.entries()}delete(e){const t=this.$items.entries();let n,r;for(;(r=t.next())&&!r.done;)if(e===r.value[1]){n=r.value[0];break}if(n===void 0)return!1;const s=this[B];if(s.isStreamCollection){const o=s.root,a=this.$items.get(n);return o!==void 0&&uc(this,o,this[Se],n),(a==null?void 0:a[B])!==void 0&&(o==null||o.remove(a[B])),this.deletedItems[n]=a,this.$items.delete(n)}return this.deletedItems[n]=s.delete(n),this.$items.delete(n)}clear(){const e=this[B];e.discard(),this.$items.clear(),e.operation(V.CLEAR)}[Vn](){const e=this[B];if(e.isStreamCollection)throw new Error("@colyseus/schema: cannot reset a streamed SetSchema (pooling not supported).");this.$items.forEach(t=>{var n;return(n=t==null?void 0:t[Vn])==null?void 0:n.call(t)}),this.$items.clear(),this.deletedItems={},this.$refId=0,e.recycle(),this[Se]=void 0}has(e){const t=this.$items.values();let n=!1,r;for(;(r=t.next())&&!r.done;)if(e===r.value){n=!0;break}return n}forEach(e){this.$items.forEach((t,n,r)=>e(t,n,this))}values(){return this.$items.values()}get size(){return this.$items.size}pauseTracking(){this[B].pause()}resumeTracking(){this[B].resume()}untracked(e){return this[B].untracked(e)}get isTrackingPaused(){return this[B].paused}[Symbol.iterator](){return this.$items.values()}setIndex(e,t){}getIndex(e){return e}[Lt](e){return this.$items.get(e)}[Hn](e){this.$items.delete(e)}[Ds](e,t,n){let r=null;if(this.$items.forEach((s,o)=>{if(e.has(o)){n(s);return}(r??(r=[])).push(o),t(s,o)}),r!==null)for(let s=0;s<r.length;s++)this[Hn](r[s])}[Zi](){for(const e in this.deletedItems)delete this.deletedItems[e]}_dropView(e){hc(this,e)}_unregister(){}toArray(){return Array.from(this.$items.values())}toJSON(){const e=[];return this.forEach((t,n)=>{e.push(typeof t.toJSON=="function"?t.toJSON():t)}),e}clone(e){let t;return e?t=Object.assign(new Wi,this):(t=new Wi,this.forEach(n=>{n[B]?t.add(n.clone()):t.add(n)})),t}};E(Wi,Id,Kf),E(Wi,Pd,pc),E(Wi,"COLLECTION_KIND",Nn.Set);let oo=Wi;Li("set",{constructor:oo});var Od,Fd,Bd,kd,zd;const mi=class mi{constructor(){E(this,zd);E(this,kd);E(this,Bd);E(this,"$items",new Map);E(this,"$nextPosition",0);E(this,"_itemIndex",new Map);E(this,"_stream");Object.defineProperty(this,B,{value:new Ps(this),enumerable:!1,writable:!0}),this[Be]=void 0}get maxPerTick(){var e;return((e=this._stream)==null?void 0:e.maxPerTick)??32}set maxPerTick(e){(this._stream??(this._stream=Pi())).maxPerTick=e}get priority(){var e;return(e=this._stream)==null?void 0:e.priority}set priority(e){(this._stream??(this._stream=Pi())).priority=e}static[(zd=B,kd=Se,Bd=Be,Fd=ni,Od=zn,Nr)](e,t,n){if(!n)return!0;const r=e[Lt](t);return r===void 0?!1:n.isVisible(r[B])}static is(e){return e&&e.stream!==void 0}static initializeForDecoder(){const e=Object.create(mi.prototype);return e.$items=new Map,e.$nextPosition=0,e._itemIndex=new Map,e[Be]=void 0,Is(e),e}add(e){if(this._itemIndex.has(e))return-1;const t=this.$nextPosition++;this.$items.set(t,e),this._itemIndex.set(e,t);const r=this[B].root;return e[B]!==void 0&&e[B].setParent(this,r,t),r!==void 0&&fc(this,r,t),t}remove(e){const t=this._itemIndex.get(e);if(t===void 0)return!1;this._itemIndex.delete(e),this.$items.delete(t);const n=this[B].root;return n!==void 0&&(uc(this,n,this[Se],t),e[B]!==void 0&&n.remove(e[B])),!0}has(e){return this._itemIndex.has(e)}clear(){const e=this[B].root;if(e!==void 0){JS(this,e,this[Se]);for(const t of this.$items.values())t[B]!==void 0&&e.remove(t[B])}this.$items.clear(),this._itemIndex.clear()}forEach(e){for(const[t,n]of this.$items)e(n,t,this)}values(){return this.$items.values()}entries(){return this.$items.entries()}[Symbol.iterator](){return this.$items.values()}get size(){return this.$items.size}get length(){return this.$items.size}setIndex(e,t){}getIndex(e){return e}[Lt](e){return this.$items.get(e)}[Hn](e){const t=this.$items.get(e);t!==void 0&&(this._itemIndex.delete(t),this.$items.delete(e))}[Ds](){}[Zi](){}toArray(){return Array.from(this.$items.values())}toJSON(){const e=[];return this.forEach(t=>{e.push(typeof(t==null?void 0:t.toJSON)=="function"?t.toJSON():t)}),e}clone(e){if(e)return Object.assign(new mi,this);const t=new mi;return t.maxPerTick=this.maxPerTick,this.forEach(n=>{t.add(typeof(n==null?void 0:n.clone)=="function"?n.clone():n)}),t}_dropView(e){hc(this,e)}_unregister(){}};E(mi,"$isStream",!0),E(mi,Fd,Kf),E(mi,Od,pc),E(mi,"COLLECTION_KIND",Nn.Stream);let Ha=mi;Li("stream",{constructor:Ha});var Vd;Vd=Bp;class ir{constructor(e){E(this,Vd,!0);E(this,"_type");E(this,"_default");E(this,"_hasDefault",!1);E(this,"_view");E(this,"_unreliable",!1);E(this,"_patchOnly",!1);E(this,"_deprecated",!1);E(this,"_deprecatedThrows",!0);E(this,"_fullStateOnly",!1);E(this,"_stream",!1);E(this,"_optional",!1);E(this,"_noSync",!1);E(this,"_streamPriority");this._type=e}default(e){return this._default=e,this._hasDefault=!0,this}view(e){return this._view=e??-1,this}unreliable(){return this._unreliable=!0,this}patchOnly(){return this._patchOnly=!0,this}fullStateOnly(){return this._fullStateOnly=!0,this}noSync(){return this._noSync=!0,this}stream(){const e=this._type;if(e&&typeof e=="object"&&e.array!==void 0)throw new Error(tm);return this._stream=!0,this}priority(e){return this._streamPriority=e,this}deprecated(e=!0){return this._deprecated=!0,this._deprecatedThrows=e,this}optional(){return this._optional=!0,this}toDefinition(){return{type:this._type,default:this._default,hasDefault:this._hasDefault,view:this._view,unreliable:this._unreliable,patchOnly:this._patchOnly,deprecated:this._deprecated,deprecatedThrows:this._deprecatedThrows,fullStateOnly:this._fullStateOnly,stream:this._stream,optional:this._optional,noSync:this._noSync,streamPriority:this._streamPriority}}}function gm(i){return i!=null&&i[Bp]===!0}function tn(i){return(()=>new ir(i))}function Io(i){if(gm(i)){const e=i._type,t=typeof e=="string"?`use the type name instead: t.array("${e}")`:'collections accept a Schema class or a primitive type name ("string", "number", …)';throw new Error(`t.array/map/set/collection(): a t.* builder is not a valid element type — ${t}.`)}return i}const $M=(i=>new ir({array:Io(i)})),XM=(i=>new ir({map:Io(i)})),qM=(i=>new ir({set:Io(i)})),YM=(i=>new ir({collection:Io(i)})),jM=(i=>{const e=new ir({stream:Io(i)});return e._stream=!0,e}),KM=(i=>new ir(i));function Ch(i){return new ir({quantized:Xf(i)})}const ln=Object.freeze({string:tn("string"),number:tn("number"),boolean:tn("boolean"),int8:tn("int8"),uint8:tn("uint8"),int16:tn("int16"),uint16:tn("uint16"),int32:tn("int32"),uint32:tn("uint32"),int64:tn("int64"),uint64:tn("uint64"),float32:tn("float32"),float64:tn("float64"),bigint64:tn("bigint64"),biguint64:tn("biguint64"),ref:KM,array:$M,map:XM,set:qM,collection:YM,stream:jM,quantized:Ch,angle:i=>Ch({min:0,max:Math.PI*2,mode:"wrap",bits:(i==null?void 0:i.bits)??16})}),gc=-1;function ZM(i=gc){return function(e,t){const n=it.initialize(e.constructor);it.setTag(n,t,i)}}function JM(i,e){const t=it.initialize(i.constructor);it.setUnreliable(t,e)}function QM(i,e){const t=it.initialize(i.constructor);it.setPatchOnly(t,e)}const eT={number:"number",int8:"number",uint8:"number",int16:"number",uint16:"number",int32:"number",uint32:"number",int64:"number",uint64:"number",float32:"number",float64:"number",bigint64:"bigint",biguint64:"bigint",string:"string",boolean:"boolean"};function tT(i,e,t){const n=eT[t],r=t==="string",s=t==="boolean";return function(o){const a=this[yn],c=a[e];if(o!==c){if(o!=null){if(!s&&n!==void 0&&typeof o!==n&&!(r&&o===null)){const l=o&&o.constructor?` (${o.constructor.name})`:"";throw new Qf(`a '${n}' was expected, but '${JSON.stringify(o)}'${l} was provided in ${this.constructor.name}#${i}`)}this.constructor[ti](this[B],e,V.ADD)}else c!=null&&this[B].delete(e);a[e]=o}}}function nT(i,e,t){return function(n){var o,a;const r=this[yn],s=r[e];if(n!==s){if(n!=null){mc(n,t,this,i);const c=this[B],l=this.constructor;s!=null&&s[B]?((o=c.root)==null||o.remove(s[B]),l[ti](c,e,V.DELETE_AND_ADD)):l[ti](c,e,V.ADD),(a=n[B])==null||a.setParent(this,c.root,e)}else s!=null&&this[B].delete(e);r[e]=n}}}function iT(i,e,t,n){const r=n.constructor===Ji,s=n.constructor===Qi;return function(o){var l,f;const a=this[yn],c=a[e];if(o!==c){if(o!=null){if(r&&!(o instanceof Ji)){const m=new Ji;m[Be]=t,m.push(...o),o=m}else if(s&&!(o instanceof Qi)){const m=new Qi;if(m[Be]=t,o instanceof Map)o.forEach((g,_)=>m.set(_,g));else for(const g in o)m.set(g,o[g]);o=m}else o[Be]=t;const h=this[B],u=this.constructor;c!=null&&c[B]?((l=h.root)==null||l.remove(c[B]),u[ti](h,e,V.DELETE_AND_ADD)):u[ti](h,e,V.ADD),(f=o[B])==null||f.setParent(this,h.root,e)}else c!=null&&this[B].delete(e);a[e]=o}}}function rT(i,e,t){return function(n){const r=this[yn],s=r[e];if(n!=null){if(typeof n!="number")throw new Qf(`a 'number' was expected, but '${JSON.stringify(n)}' was provided in ${this.constructor.name}#${i}`);if(n=im(t,nm(t,n)),n===s)return;this.constructor[ti](this[B],e,V.ADD)}else{if(n===s)return;s!=null&&this[B].delete(e)}r[e]=n}}function sT(i,e,t,n){let r;return n?r=iT(i,e,t,n):typeof t=="string"?r=tT(i,e,t):Lr(t)?r=rT(i,e,t.quantized):r=nT(i,e,t),{get:function(){return this[yn][e]},set:r,enumerable:!0,configurable:!0}}function oT(i=!0){return function(e,t){const n=it.initialize(e.constructor);it.setDeprecated(n,t),i&&(n[_n]??(n[_n]={}),n[_n][t]={get:function(){throw new Error(`${t} is deprecated.`)},set:function(r){},enumerable:!1,configurable:!0},Object.defineProperty(e,t,n[_n][t]))}}function aT(i){if(i&&typeof i=="object"){if(i.array!==void 0)return()=>new Ji;if(i.map!==void 0)return()=>new Qi;if(i.set!==void 0)return()=>new oo;if(i.collection!==void 0)return()=>new so;if(i.stream!==void 0)return()=>new Ha}else if(typeof i=="function"&&wt.is(i)&&(!i.prototype.initialize||i.prototype.initialize.length===0))return()=>new i}function Lo(i,e,t=wt){if(i==null||typeof i!="object")throw new Error(`schema(): first argument must be a fields object (got ${typeof i}).`);const n={},r={},s={},o={},a=(T,D)=>{typeof D=="function"?o[T]=D:D&&typeof D.clone=="function"?o[T]=()=>D.clone():s[T]=D},c=(T,D)=>{if(D.hasDefault)a(T,D.default);else if(!D.optional){const M=aT(D.type);M&&(o[T]=M)}},l={},f=[],h=[],u={},m=[],g=[],_={},p=[];for(const T in i){const D=i[T],M=`schema(${e?`'${e}'`:""}): field '${T}'`;if(gm(D)){const y=D.toDefinition();if(y.noSync){if(y.view!==void 0||y.unreliable||y.patchOnly||y.fullStateOnly||y.stream)throw new Error(`${M} uses .noSync() together with a sync-only modifier (.view/.unreliable/.patchOnly/.fullStateOnly/.stream). A local-only field cannot be synchronized.`);c(T,y);continue}if(y.patchOnly&&y.fullStateOnly)throw new Error(`${M} uses .patchOnly() together with .fullStateOnly(). Those are the only two delivery channels, so the field would never reach a client — use .noSync() if that is intended.`);const L=sm(y.type,M);if(typeof L=="function"&&!wt.is(L))throw new Error(`${M} is a synced ref to non-Schema class '${L.name||"(anonymous)"}' — use .noSync(), or Metadata.setFields().`);n[T]=L,y.view!==void 0&&(l[T]=y.view),y.unreliable&&f.push(T),y.patchOnly&&h.push(T),y.deprecated&&(u[T]=y.deprecatedThrows),y.fullStateOnly&&m.push(T),y.stream&&g.push(T),y.streamPriority!==void 0&&(_[T]=y.streamPriority),y.optional&&p.push(T),c(T,y)}else if(typeof D=="function")wt.is(D)?(n[T]=D,(!D.prototype.initialize||D.prototype.initialize.length===0)&&(o[T]=()=>new D)):r[T]=D;else throw new Error(`${M} must be a t.* builder, Schema subclass, or method (got ${typeof D}).`)}const d=T=>{for(const D in s)T[D]=s[D];for(const D in o)T[D]=o[D]()},w=()=>{const T={};return d(T),T},b=T=>{const D=Object.keys(n),M={};for(const y in T)D.includes(y)||(M[y]=T[y]);return M},v=typeof r.initialize=="function",I=r.initialize??t._initialize,R=class extends t{constructor(...T){const D=T[0];D===void 0?(super(),d(this)):super(Object.assign(w(),v?b(D):D)),I&&new.target===R&&I.apply(this,T)}};e&&Object.defineProperty(R,"name",{value:e}),it.setFields(R,n),R._getDefaultValues=w,R._initialize=I,Object.assign(R.prototype,r);for(const T in l)ZM(l[T])(R.prototype,T);for(const T of f)JM(R.prototype,T);for(const T of h)QM(R.prototype,T);for(const T in u)oT(u[T])(R.prototype,T);if(m.length>0||g.length>0){const T=R[Symbol.metadata];for(const D of m)it.setFullStateOnly(T,D);for(const D of g)it.setStream(T,D);for(const D in _)it.setStreamPriority(T,D,_[D])}if(p.length>0){const T=R[Symbol.metadata];for(const D of p)T[T[D]].optional=!0}return R.extend=(T,D)=>Lo(T,D,R),R}function cT(i){return new Array(i).fill(0).map((e,t)=>t===i-1?"└─ ":"   ").join("")}var Hd,Gd,Wd,$d;const In=class In{constructor(e){E(this,Gd);E(this,Hd);In.initialize(this),e&&In.assignProps(this,e)}static initialize(e){Object.defineProperty(e,B,{value:new Ps(e),enumerable:!1,writable:!0}),e[yn]=[]}static initializeForDecoder(){const e=Object.create(this.prototype);return Is(e),e[yn]=[],e}static reset(e){const t=e==null?void 0:e[B];if(t===void 0||typeof t.recycle!="function")throw new Error("@colyseus/schema: Schema.reset() requires a tracked (encoder-side) instance.");if(t.extraParents!==void 0)throw new Error(`@colyseus/schema: cannot reset a shared instance (${e.constructor.name}) with multiple parents.`);e[Vn]()}[($d=ni,Wd=zn,Gd=Se,Hd=yn,Vn)](){var r;const e=this.constructor[Symbol.metadata],t=(e==null?void 0:e[Mi])??[],n=this[yn];for(let s=0;s<t.length;s++){const o=n[t[s]];(r=o==null?void 0:o[Vn])==null||r.call(o)}this[B].recycle(),this[Se]=void 0}static is(e){const t=e[Symbol.metadata];return typeof t=="object"&&t!==null}static isSchema(e){return typeof(e==null?void 0:e.assign)=="function"}static[ti](e,t,n=V.ADD){e.change(t,n)}static[Nr](e,t,n){var o;const s=(o=e.constructor[Symbol.metadata][t])==null?void 0:o.tag;return n===void 0?s===void 0:s===void 0?!0:s===gc?n.isChangeTreeVisible(e[B]):n.hasTagOnTree(e[B],s)}assign(e){return In.assignProps(this,e),this}static assignProps(e,t){const n=e.constructor[Symbol.metadata];if(n&&n[en]!==void 0)for(let s=0;s<=n[en];s++){const o=n[s];if(!o)continue;const a=t[o.name];a!==void 0&&(e[o.name]=a)}const r=Object.keys(t);for(let s=0;s<r.length;s++){const o=r[s];n&&n[o]!==void 0||(e[o]=t[o])}}restore(e){const t=this.constructor[Symbol.metadata];for(const n in t){const r=t[n],s=r.name,o=r.type,a=e[s];if(a!=null){if(typeof o=="string")this[s]=a;else if(In.is(o)){const c=new o;c.restore(a),this[s]=c}else if(typeof o=="object"){const c=Object.keys(o)[0],l=o[c];if(c==="map"){const f=this[s];for(const h in a)if(In.is(l)){const u=new l;u.restore(a[h]),f.set(h,u)}else f.set(h,a[h])}else if(c==="array"){const f=this[s];for(let h=0;h<a.length;h++)if(In.is(l)){const u=new l;u.restore(a[h]),f.push(u)}else f.push(a[h])}}}}return this}setDirty(e,t){const n=this.constructor[Symbol.metadata];this[B].change(n[n[e]].index,t)}pauseTracking(){this[B].pause()}resumeTracking(){this[B].resume()}untracked(e){return this[B].untracked(e)}get isTrackingPaused(){return this[B].paused}clone(){var n;const e=Object.create(this.constructor.prototype);In.initialize(e);const t=this.constructor[Symbol.metadata];for(const r in t){const s=t[r].name;typeof this[s]=="object"&&typeof((n=this[s])==null?void 0:n.clone)=="function"?e[s]=this[s].clone():e[s]=this[s]}return e}toJSON(){const e={},t=this.constructor[Symbol.metadata];for(const n in t){const r=t[n],s=r.name;!r.deprecated&&this[s]!==null&&typeof this[s]<"u"&&(e[s]=typeof this[s].toJSON=="function"?this[s].toJSON():this[s])}return e}discardAllChanges(){this[B].discardAll()}[Lt](e){const t=this.constructor[Symbol.metadata];return this[t[e].name]}[Hn](e){const t=this.constructor[Symbol.metadata];this[t[e].name]=void 0}static debugRefIds(e,t=!1,n=0,r,s=""){const o=t?` - ${JSON.stringify(e.toJSON())}`:"",a=e[B],c=e[Se],l=r?r.root.refCount[c]:a.refCount,f=l>1?` [×${l}]`:"";let h=`${cT(n)}${s}${e.constructor.name} (refId: ${c})${f}${o}
`;return a.forEachChild((u,m)=>{let g=m;typeof m=="number"&&e.$indexes&&(g=e.$indexes.get(m)??m);const _=e.forEach!==void 0&&g!==void 0?`["${g}"]: `:"";h+=this.debugRefIds(u.ref,t,n+1,r,_)}),h}static debugRefIdEncodingOrder(e,t="allChanges"){var c;const n=[],r=e[B];if(t==="changes"){let l=(c=r.root.changes)==null?void 0:c.next;for(;l;)l.changeTree&&n.push(l.changeTree.ref[Se]),l=l.next;return n}const s=t==="allFilteredChanges",o=new Set,a=l=>{o.has(l)||(o.add(l),l.isFiltered===s&&n.push(l.ref[Se]),l.forEachChild((f,h)=>a(f)))};return a(r),n}static debugRefIdsFromDecoder(e){return this.debugRefIds(e.state,!1,0,e)}static debugChanges(e,t=!1){const n=e[B],r=t?"allChanges":"changes";let s=`${e.constructor.name} (${e[Se]}) -> .${r}:
`;return t?n.forEachLive(o=>{s+=`- [${o}]: ADD (${JSON.stringify(n.getValue(Number(o),!0))})
`}):n.forEach((o,a)=>{o<0||!a||(s+=`- [${o}]: ${V[a]} (${JSON.stringify(n.getValue(Number(o),!1))})
`)}),s}};E(In,$d,NM),E(In,Wd,HM);let wt=In;Fp(wt);const Dh={value:0,enumerable:!1,writable:!0};class lT{constructor(e,t=0){E(this,"types");E(this,"nextUniqueId",0);E(this,"changeTrees",{});E(this,"changes",wh());E(this,"unreliableChanges",wh());E(this,"pendingFilterRefresh",[]);E(this,"_nodePool",[]);E(this,"_nextViewId",0);E(this,"_freeViewIds",[]);E(this,"activeViews",new Map);E(this,"streamTrees",new Set);this.types=e,this.nextUniqueId=t}get refCount(){const e={};for(const t in this.changeTrees)e[t]=this.changeTrees[t].refCount;return e}enqueueFilterRefresh(e){this.types.hasFilters&&(e.flags&ro||(e.flags|=ro,this.pendingFilterRefresh.push(e)))}acquireViewId(){return this._freeViewIds.length>0?this._freeViewIds.pop():this._nextViewId++}releaseViewId(e){this._freeViewIds.push(e)}registerView(e){this.activeViews.set(e.id,new WeakRef(e))}unregisterView(e){this.activeViews.delete(e.id);const t=e.id;for(const n of this.streamTrees)n._dropView(t)}forEachActiveView(e){for(const[t,n]of this.activeViews){const r=n.deref();if(r===void 0){this.activeViews.delete(t);for(const s of this.streamTrees)s._dropView(t);continue}e(r)}}registerStream(e){this.streamTrees.add(e)}unregisterStream(e){this.streamTrees.delete(e)}add(e){const t=e.ref;t[Se]===void 0&&(Dh.value=this.nextUniqueId++,Object.defineProperty(t,Se,Dh));const n=t[Se],r=this.changeTrees[n]===void 0;r&&(this.changeTrees[n]=e),e.needsRestage&&(e.needsRestage=!1,e.forEachLiveWithCtx(e,lm));const s=r?0:e.refCount;return e.refCount=s+1,s>0&&this.enqueueFilterRefresh(e),r}remove(e){var n;const t=e.refCount-1;if(t<=0){if(e.root=void 0,delete this.changeTrees[e.ref[Se]],e.isStreamCollection){const r=e.ref;(n=r._unregister)==null||n.call(r),this.unregisterStream(r)}this.removeFromQueue(e),this.removeFromUnreliableQueue(e),e.refCount=0,e.needsRestage=!0,e.forEachChild((r,s)=>{r.removeParent(e.ref)&&(r.parentRef===void 0||r.refCount>0?this.remove(r):this.moveNextToParent(r))})}else e.refCount=t,this.enqueueFilterRefresh(e),this.recursivelyMoveNextToParent(e);return t}recursivelyMoveNextToParent(e){this.moveNextToParent(e),e.forEachChild((t,n)=>this.recursivelyMoveNextToParent(t))}moveNextToParent(e){e.changesNode&&this._moveNextToParentInList(this.changes,e,e.changesNode,"changesNode"),e.unreliableChangesNode&&this._moveNextToParentInList(this.unreliableChanges,e,e.unreliableChangesNode,"unreliableChangesNode")}_moveNextToParentInList(e,t,n,r){const s=t.parent;if(!s||!s[B])return;const o=s[B][r];!o||o===n||n.position>o.position||(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,n.prev=e.tail,n.next=void 0,e.tail.next=n,e.tail=n,n.position=e.nextPosition++)}enqueueChangeTree(e,t=e.changesNode){t||(e.changesNode=this._appendToList(this.changes,e))}enqueueUnreliable(e,t=e.unreliableChangesNode){t||(e.unreliableChangesNode=this._appendToList(this.unreliableChanges,e))}_appendToList(e,t){const n=this._nodePool;let r;return n.length>0?(r=n.pop(),r.changeTree=t,r.next=void 0,r.prev=void 0):r={changeTree:t,next:void 0,prev:void 0,position:0},e.next?(r.prev=e.tail,e.tail.next=r,e.tail=r):(e.nextPosition=0,e.next=r,e.tail=r),r.position=e.nextPosition++,r}releaseNode(e){e.changeTree=void 0,e.prev=void 0,e.next=void 0,this._nodePool.push(e)}removeFromQueue(e){return this._removeNode(this.changes,e,e.changesNode,"changesNode")}removeFromUnreliableQueue(e){return this._removeNode(this.unreliableChanges,e,e.unreliableChangesNode,"unreliableChangesNode")}_removeNode(e,t,n,r){return!n||n.changeTree!==t?!1:(n.prev?n.prev.next=n.next:e.next=n.next,n.next?n.next.prev=n.prev:e.tail=n.prev,t[r]=void 0,this.releaseNode(n),!0)}}function fT(i,e){if(e===-1||e>=i.length)return!1;const t=i.length-1;for(let n=e;n<t;n++)i[n]=i[n+1];return i.length=t,!0}function uT(i,e,t){const n=~t,r=i.changeTrees;for(const s in r){const o=r[s],a=o.visibleViews;a!==void 0&&e<a.length&&(a[e]&=n);const c=o.subscribedViews;c!==void 0&&e<c.length&&(c[e]&=n);const l=o.tagViews;l!==void 0&&l.forEach(f=>{e<f.length&&(f[e]&=n)})}}new FinalizationRegistry(({root:i,id:e,slot:t,bit:n})=>{uT(i,t,n),i.activeViews.delete(e);for(const r of i.streamTrees)r._dropView(e);i.releaseViewId(e)});const hT=-1;function Ph(i){i.structSwitchEmitted||(i.shouldEmitSwitch&&(i.buffer[i.it.offset++]=Sr&255,We.number(i.buffer,i.ref[Se],i.it)),i.structSwitchEmitted=!0)}function dT(i,e){xm(i,e,V.ADD)}function _m(i,e){if(e._fullSyncGen===i.gen)return;if(e._fullSyncGen=i.gen,!i.hasView||i.view.isChangeTreeVisible(e)){const n=e.encDescriptor;i.changeTree=e,i.ref=e.ref,i.encoder=n.encoder,i.filter=n.filter,i.metadata=n.metadata,i.treeIsFiltered=e.isFiltered,i.isSchema=n.isSchema,i.filterBitmask=n.filterBitmask,i.tags=n.tags,i.structSwitchEmitted=!1,i.shouldEmitSwitch=i.hasView||i.it.offset>i.initialOffset||e!==i.rootChangeTree,e.isArray&&e.collDirty.size>0&&(e.flags|=jf),qf(e,i,dT)}Po(e,i,pT)}function pT(i,e,t){_m(i,e)}function xm(i,e,t){if(e<0){if(i.treeIsFiltered!==i.emitFiltered)return;Ph(i),i.buffer[i.it.offset++]=Math.abs(e)&255;return}if((i.isSchema?i.treeIsFiltered||(e<32?(i.filterBitmask&1<<e)!==0:i.tags[e]!==void 0):i.treeIsFiltered)!==i.emitFiltered)return;const r=i.isEncodeAll?V.ADD:t;r!==void 0&&(i.filter!==void 0&&!i.filter(i.ref,e,i.view)||(Ph(i),i.encoder(i.self,i.buffer,i.changeTree,e,r,i.it,i.isEncodeAll,i.hasView,i.metadata)))}function sl(i,e){const t=new Uint8Array(i.length+e.length);return t.set(i,0),t.set(e,i.length),t}const qn=class qn{constructor(e,t){E(this,"sharedBuffer",new Uint8Array(qn.BUFFER_SIZE));E(this,"context");E(this,"state");E(this,"root");E(this,"_encodeCtx",{self:void 0,buffer:void 0,it:void 0,changeTree:void 0,ref:void 0,encoder:void 0,filter:void 0,metadata:void 0,view:void 0,isEncodeAll:!1,hasView:!1,treeIsFiltered:!1,isSchema:!1,emitFiltered:!1,filterBitmask:0,tags:void 0,structSwitchEmitted:!1,isRootTree:!1,shouldEmitSwitch:!1,gen:0,initialOffset:0,rootChangeTree:void 0});E(this,"_fullSyncGen",0);E(this,"untypedRefEnd",-1);E(this,"untypedRefTypeId",0);this.context=Ur.cache(e.constructor),this.root=t??new lT(this.context),this.setState(e)}setState(e){this.state=e,this.state[B].setRoot(this.root)}encode(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!1)}encodeUnreliable(e={offset:0},t,n=this.sharedBuffer,r=e.offset){return this._encodeChannel(e,t,n,r,!0)}_encodeChannel(e,t,n,r,s){this.root.pendingFilterRefresh.length>0&&Sh(this.root),this.untypedRefEnd=-1;const o=t!==void 0,a=this.state[B],c=this._encodeCtx;c.self=this,c.buffer=n,c.it=e,c.view=t,c.isEncodeAll=!1,c.hasView=o,c.emitFiltered=o;let f=s?this.root.unreliableChanges:this.root.changes;for(;f=f.next;){const h=f.changeTree;if(o&&!t.isChangeTreeVisible(h))continue;const u=s?h.unreliableRecorder:h;if(!u||!u.has())continue;const m=h.encDescriptor;c.changeTree=h,c.ref=h.ref,c.encoder=m.encoder,c.filter=m.filter,c.metadata=m.metadata,c.treeIsFiltered=h.isFiltered,c.isSchema=m.isSchema,c.filterBitmask=m.filterBitmask,c.tags=m.tags,c.structSwitchEmitted=!1,c.isRootTree=h===a,c.shouldEmitSwitch=o||e.offset>r||!c.isRootTree,u.forEachWithCtx(c,xm)}return!s&&!o&&this._isStreamBroadcastMode&&this._emitStreamBroadcast(n,e),e.offset>n.byteLength?(n=this._resizeBuffer(n,e.offset),e.offset=r,this._encodeChannel(e,t,n,r,s)):n.subarray(0,e.offset)}encodeFullSync(e,t,n,r,s=e.offset){this.root.pendingFilterRefresh.length>0&&Sh(this.root);const o=r!==void 0,a=this.state[B],c=this._encodeCtx;return c.self=this,c.buffer=t,c.it=e,c.view=r,c.isEncodeAll=!0,c.hasView=o,c.emitFiltered=n,c.gen=++this._fullSyncGen,c.initialOffset=s,c.rootChangeTree=a,_m(c,a),e.offset>t.byteLength?(t=this._resizeBuffer(t,e.offset),e.offset=s,this.encodeFullSync(e,t,n,r,s)):t.subarray(0,e.offset)}_resizeBuffer(e,t){const n=Math.ceil(t/qn.BUFFER_SIZE)*qn.BUFFER_SIZE;console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(n/1024)} * 1024; // ${Math.round(n/1024)} KB
`);const r=new Uint8Array(n);return r.set(e),e===this.sharedBuffer&&(this.sharedBuffer=r),r}encodeAll(e={offset:0},t=this.sharedBuffer){return this.encodeFullSync(e,t,!1)}encodeAllView(e,t,n,r=this.sharedBuffer){const s=n.offset;return r=this.encodeFullSync(n,r,!0,e,s),sl(r.subarray(0,t),r.subarray(s,n.offset))}ensureCapacity(e,t){if(t+qn.BUFFER_SIZE<=e.byteLength)return e;const n=Math.ceil((t+qn.BUFFER_SIZE)/qn.BUFFER_SIZE)*qn.BUFFER_SIZE,r=new Uint8Array(n);return r.set(e.subarray(0,t)),e===this.sharedBuffer&&(this.sharedBuffer=r),r}encodeView(e,t,n,r=this.sharedBuffer){const s=n.offset;this._emitStreamPriority(e);for(const o of e.changes.keys()){const a=e.changes.get(o),c=this.root.changeTrees[o];if(c===void 0){e.changes.delete(o);continue}if(a.size===0)continue;const l=c.encDescriptor,f=l.encoder,h=l.metadata,u=c.ref,m=c.refTarget;r=this.ensureCapacity(r,n.offset),r[n.offset++]=Sr&255,We.number(r,u[Se],n);for(const[g,_]of a){let p;if(g===hT){const b=m.tmpItems,v=m.deletedIndexes;for(let I=0;I<b.length;I++)b[I]===void 0||v[I]===!0||f(this,r,c,I,V.ADD,n,!1,!0,h);continue}if(typeof g=="number")p=g;else{const b=g.indexInParent(u);if(b===void 0)continue;if(p=b,_===V.ADD&&c.getChange(p)===V.DELETE){e.changes.delete(g.ref[Se]);continue}}const w=m[Lt](p)!==void 0&&_||V.DELETE;f(this,r,c,p,w,n,!1,!0,h)}}return e.changes.clear(),r=this.encode(n,e,r),sl(r.subarray(0,t),r.subarray(s,n.offset))}encodeUnreliableView(e,t,n,r=this.sharedBuffer){const s=n.offset;return r=this.encodeUnreliable(n,e,r,s),sl(r.subarray(0,t),r.subarray(s,n.offset))}_emitStreamBroadcast(e,t){const n=this.root.streamTrees;for(const r of n){const s=r,o=s[B],a=s[Se];if(a===void 0)continue;const c=s._stream,l=c.broadcastDeletes,f=c.broadcastPending,h=c.sentBroadcast,u=l.size>0,m=f.size>0,g=o.encDescriptor,_=g.encoder,p=g.metadata;if(u||m){if(e[t.offset++]=Sr&255,We.number(e,a,t),u){for(const I of l)_(this,e,o,I,V.DELETE,t,!1,!1,p);l.clear()}const d=c.maxPerTick,w=[];let b=0;const v=[];for(const I of f){if(b>=d)break;const R=s[Lt](I);if(R===void 0){v.push(I);continue}_(this,e,o,I,V.ADD,t,!1,!1,p),h.add(I),w.push(R),v.push(I),b++}for(const I of v)f.delete(I);for(const I of w){const R=I[B];if(R===void 0)continue;const T=I[Se];if(T===void 0)continue;e[t.offset++]=Sr&255,We.number(e,T,t);const D=R.encDescriptor,M=D.encoder,y=D.metadata;R.forEachLive(L=>{it.hasUnreliableAtIndex(y,L)||M(this,e,R,L,V.ADD,t,!1,!1,y)})}}for(const d of h){const w=s[Lt](d);if(w===void 0)continue;const b=w[B];if(b===void 0||!b.has())continue;const v=w[Se];if(v===void 0)continue;e[t.offset++]=Sr&255,We.number(e,v,t);const I=b.encDescriptor,R=I.encoder,T=I.metadata;b.forEach((D,M)=>{D<0||it.hasUnreliableAtIndex(T,D)||R(this,e,b,D,M,t,!1,!1,T)})}}}_emitStreamPriority(e){var r;const t=this.root.streamTrees;if(t.size===0)return;const n=e.id;for(const s of t){const o=s,a=o._stream,c=a.pendingByView.get(n);if(c===void 0||c.size===0)continue;const l=(r=a.priorityByView)==null?void 0:r.get(n),f=l!==void 0,h=a.priority,u=a.maxPerTick,m=[],g=[];if(f||h!==void 0){const d=[],w=[];let b=0;for(const v of c){const I=o[Lt](v);if(I===void 0){g.push(v);continue}const R=f?l(I):h(e,I);if(b<u){let T=b++;for(;T>0&&w[T-1]<R;)w[T]=w[T-1],d[T]=d[T-1],T--;w[T]=R,d[T]=v}else if(R>w[u-1]){let T=u-1;for(;T>0&&w[T-1]<R;)w[T]=w[T-1],d[T]=d[T-1],T--;w[T]=R,d[T]=v}}for(let v=0;v<b;v++)m.push(d[v])}else for(const d of c){if(m.length>=u)break;m.push(d)}for(const d of g)c.delete(d);const _=m.length;let p=a.sentByView.get(n);p===void 0&&(p=new Set,a.sentByView.set(n,p));for(let d=0;d<_;d++){const w=m[d],b=o[Lt](w);if(b===void 0){c.delete(w);continue}e._addImmediate(b);const v=b[B];if(v!==void 0){const I=b[Se];let R=e.changes.get(I);R===void 0&&(R=new Map,e.changes.set(I,R));const T=v.metadata;v.forEachLive(D=>{it.hasUnreliableAtIndex(T,D)||R.set(D,V.ADD)})}c.delete(w),p.add(w)}}}discardChanges(){const e=this.root.changes;let t=e.next;const n=this.root;for(;t;){const r=t.next;t.changeTree.endEncode(),n.releaseNode(t),t=r}e.next=void 0,e.tail=void 0}discardUnreliableChanges(){const e=this.root.unreliableChanges;let t=e.next;const n=this.root;for(;t;){const r=t.next;t.changeTree.endEncodeUnreliable(),n.releaseNode(t),t=r}e.next=void 0,e.tail=void 0}tryEncodeTypeId(e,t,n,r){const s=this.context.getTypeId(t),o=this.context.getTypeId(n);if(o===void 0){console.warn(`@colyseus/schema WARNING: Class "${n.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}s!==o?(e[r.offset++]=Na&255,We.number(e,o,r)):(this.untypedRefEnd=r.offset,this.untypedRefTypeId=o)}get hasChanges(){return this.root.changes.next!==void 0||this._hasStreamBacklog()}get _isStreamBroadcastMode(){return this.root.activeViews.size===0&&this.root.streamTrees.size>0}_hasStreamBacklog(){const e=this.root;if(e.streamTrees.size===0)return!1;const t=e.activeViews.size===0;for(const n of e.streamTrees)if(t?eM(n):QS(n,e))return!0;return!1}get hasUnreliableChanges(){return this.root.unreliableChanges.next!==void 0}};E(qn,"BUFFER_SIZE",16*1024);let Ga=qn;class Ih extends Error{constructor(e){super(e),this.name="DecodingWarning"}}const Lh={value:0,enumerable:!1,writable:!0};class mT{constructor(){E(this,"refs",new Map);E(this,"refCount",{});E(this,"deletedRefs",new Set);E(this,"callbacks",{});E(this,"nextUniqueId",0)}getNextUniqueId(){return this.nextUniqueId++}addRef(e,t,n=!0){this.refs.set(e,t),t[Se]===void 0?(Lh.value=e,Object.defineProperty(t,Se,Lh)):t[Se]!==e&&(t[Se]=e),n&&(this.refCount[e]=(this.refCount[e]||0)+1),this.deletedRefs.has(e)&&this.deletedRefs.delete(e)}removeRef(e){const t=this.refCount[e];if(t===void 0){try{throw new Ih("trying to remove refId that doesn't exist: "+e)}catch(n){console.warn(n)}return}if(t===0){try{const n=this.refs.get(e);throw new Ih(`trying to remove refId '${e}' with 0 refCount (${n.constructor.name}: ${JSON.stringify(n)})`)}catch(n){console.warn(n)}return}(this.refCount[e]=t-1)<=0&&this.deletedRefs.add(e)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(e=>{if(this.refCount[e]>0)return;const t=this.refs.get(e),n=t.constructor[Symbol.metadata];if(n!=null)for(const r in n){const s=n[r].name,o=t[s];if(typeof o=="object"&&o){const a=o[Se];a!==void 0&&!this.deletedRefs.has(a)&&this.removeRef(a)}}else typeof t[Be]=="function"&&Array.from(t.values()).forEach(r=>{const s=r[Se];s!==void 0&&!this.deletedRefs.has(s)&&this.removeRef(s)});this.refs.delete(e),delete this.refCount[e],delete this.callbacks[e]}),this.deletedRefs.clear()}addCallback(e,t,n){if(e===void 0){const r=typeof t=="number"?V[t]:t;throw new Error(`Can't addCallback on '${r}' (refId is undefined)`)}return this.callbacks[e]||(this.callbacks[e]={}),this.callbacks[e][t]||(this.callbacks[e][t]=[]),this.callbacks[e][t].push(n),()=>this.removeCallback(e,t,n)}removeCallback(e,t,n){var s,o,a;const r=(a=(o=(s=this.callbacks)==null?void 0:s[e])==null?void 0:o[t])==null?void 0:a.indexOf(n);r!==void 0&&r!==-1&&fT(this.callbacks[e][t],r)}}class Ts{constructor(e,t){E(this,"context");E(this,"state");E(this,"root");E(this,"currentRefId",0);E(this,"triggerChanges");E(this,"resyncVisited",null);E(this,"resyncDamaged",!1);this.setState(e),this.context=t||new Ur(e.constructor)}setState(e){this.state=e,this.root=new mT,this.root.addRef(0,e)}decode(e,t={offset:0},n=this.state){var c,l,f;const r=this.triggerChanges!==void 0?[]:null,s=this.root,o=e.byteLength;let a=n.constructor[zn];for(this.currentRefId=0;t.offset<o;){if(e[t.offset]==Sr){t.offset++,(c=n[Oa])==null||c.call(n);const u=et.number(e,t),m=s.refs.get(u);m?(n=m,a=n.constructor[zn],this.currentRefId=u):(console.error(`"refId" not found: ${u}`,{previousRef:n,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(e,t,o));continue}if(a(this,e,t,n,r)===mm){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(e,t,o);continue}}return(l=n[Oa])==null||l.call(n),this.resyncVisited!==null&&zM(this,r),r!==null&&((f=this.triggerChanges)==null||f.call(this,r)),s.garbageCollectDeletedRefs(),r}decodeResync(e,t={offset:0}){this.resyncVisited=new Map,this.resyncDamaged=!1;try{return this.decode(e,t)}finally{this.resyncVisited=null}}skipCurrentStructure(e,t,n){this.resyncVisited!==null&&(this.resyncDamaged=!0);const r={offset:t.offset};for(;t.offset<n&&!(e[t.offset]===Sr&&(r.offset=t.offset+1,this.root.refs.has(et.number(e,r))));)t.offset++}getInstanceType(e,t,n){let r;if(e[t.offset]===Na){t.offset++;const s=et.number(e,t);r=this.context.get(s)}return r||n}createInstanceOfType(e){return e.initializeForDecoder()}removeChildRefs(e,t){const n=typeof e[Be]!="string",r=e[Se];e.forEach((s,o)=>{t==null||t.push({ref:e,refId:r,op:V.DELETE,field:o,value:void 0,previousValue:s}),n&&this.root.removeRef(s[Se])})}}const ym=Lo({min:ln.float64(),max:ln.float64(),bits:ln.uint8(),mode:ln.uint8()},"QuantizedDescriptor"),vm=Lo({name:ln.string(),type:ln.string(),referencedType:ln.number(),childPrimitive:ln.string(),quantized:ln.ref(ym).optional()},"ReflectionField"),Em=Lo({id:ln.number(),extendsId:ln.number(),fields:ln.array(vm)},"ReflectionType"),Ii=Lo({types:ln.array(Em),rootType:ln.number()},"Reflection");Ii.encode=function(i,e={offset:0}){const t=i.context,n=new Ii,r=new Ga(n),s=t.schemas.get(i.state.constructor);s>0&&(n.rootType=s);const o=new Set,a={},c=f=>{if(f.extendsId===void 0||o.has(f.extendsId)){o.add(f.id),n.types.push(f);const h=a[f.id];h!==void 0&&(delete a[f.id],h.forEach(u=>c(u)))}else a[f.extendsId]===void 0&&(a[f.extendsId]=[]),a[f.extendsId].push(f)};t.schemas.forEach((f,h)=>{const u=new Em;u.id=Number(f);const m=Object.getPrototypeOf(h);m!==wt&&(u.extendsId=t.schemas.get(m));const g=h[Symbol.metadata];if(g!==m[Symbol.metadata]){const _=g[en]??-1;for(let p=0;p<=_;p++){const d=g[p];if(d===void 0)continue;const w=d.name;if(!Object.prototype.hasOwnProperty.call(g,w))continue;const b=new vm;b.name=w;let v;if(typeof d.type=="string")v=d.type;else if(Lr(d.type)){const I=d.type.quantized;v="quantized";const R=new ym;R.min=I.min,R.max=I.max,R.bits=I.bits,R.mode=I.wrap?1:0,b.quantized=R}else{let I;wt.is(d.type)?(v="ref",I=d.type):(v=Object.keys(d.type)[0],typeof d.type[v]=="string"?b.childPrimitive=d.type[v]:I=d.type[v]),b.referencedType=I?t.getTypeId(I):-1}b.type=v,u.fields.push(b)}}c(u)});for(const f in a)a[f].forEach(h=>n.types.push(h));return r.encodeAll(e).slice(0,e.offset)};Ii.decode=function(i,e){const t=new Ii;new Ts(t).decode(i,e);const r=new Ur;t.types.forEach(a=>{const c=r.get(a.extendsId)??wt,l=class extends c{};Ur.register(l),r.add(l,a.id)},{});const s=(a,c,l)=>{c.fields.forEach((f,h)=>{const u=l+h;if(f.quantized!==void 0){const m=f.quantized;it.addField(a,u,f.name,{quantized:Xf({min:m.min,max:m.max,bits:m.bits,mode:m.mode===1?"wrap":"clamp"})})}else if(f.referencedType!==void 0){const m=f.type,g=r.get(f.referencedType)??f.childPrimitive;m==="ref"?it.addField(a,u,f.name,g):it.addField(a,u,f.name,{[m]:g})}else it.addField(a,u,f.name,f.type)})};t.types.forEach(a=>{const c=r.get(a.id),l=it.initialize(c),f=[];let h=a;do f.push(h),h=t.types.find(m=>m.id===h.extendsId);while(h);let u=0;f.reverse().forEach(m=>{s(l,m,u),u+=m.fields.length})});const o=new(r.get(t.rootType||0));return new Ts(o,r)};Ii.makeEncodable=function(i){const e=i[Symbol.metadata];if(!e)return i;const t=e[en];if(t===void 0)return i;for(let n=0;n<=t;n++){const r=e[n];r&&it.defineField(i,e,n,r.name,r.type)}return Object.prototype.hasOwnProperty.call(i,Ks)&&delete i[Ks],i};function Uh(i){const e=i.root,t=e.callbacks,n=new WeakMap;let r;i.triggerChanges=function(a){var l;const c=new Set;for(let f=0,h=a.length;f<h;f++){const u=a[f],m=u.refId,g=u.ref,_=t[m];if(_){if((u.op&V.DELETE)===V.DELETE&&wt.isSchema(u.previousValue)){const p=(l=t[u.previousValue[Se]])==null?void 0:l[V.DELETE];for(let d=(p==null?void 0:p.length)-1;d>=0;d--)p[d]()}if(wt.isSchema(g)){if(!c.has(m)){const p=_==null?void 0:_[V.REPLACE];for(let d=(p==null?void 0:p.length)-1;d>=0;d--)p[d]()}if(_.hasOwnProperty(u.field)){const p=_[u.field];for(let d=(p==null?void 0:p.length)-1;d>=0;d--)p[d](u.value,u.previousValue)}}else{if((u.op&V.DELETE)===V.DELETE){if(u.previousValue!==void 0){const p=_[V.DELETE];for(let d=(p==null?void 0:p.length)-1;d>=0;d--)p[d](u.previousValue,u.dynamicIndex??u.field)}if((u.op&V.ADD)===V.ADD){const p=_[V.ADD];for(let d=(p==null?void 0:p.length)-1;d>=0;d--)p[d](u.value,u.dynamicIndex??u.field)}}else if((u.op&V.ADD)===V.ADD&&u.previousValue!==u.value){const p=_[V.ADD];for(let d=(p==null?void 0:p.length)-1;d>=0;d--)p[d](u.value,u.dynamicIndex??u.field)}if(u.value!==u.previousValue&&(u.value!==void 0||u.previousValue!==void 0)){const p=_[V.REPLACE];for(let d=(p==null?void 0:p.length)-1;d>=0;d--)p[d](u.value,u.dynamicIndex??u.field)}}c.add(m)}}};function s(a,c){var h;let l=((h=c.instance)==null?void 0:h.constructor[Symbol.metadata])||a,f=c.instance&&typeof c.instance.forEach=="function"||a&&!wt.is(a);if(l&&!f){const u=function(m,g,_,p){return p&&c.instance[g]!==void 0&&!n.has(r)&&_(c.instance[g],void 0),e.addCallback(m[Se],g,_)};return new Proxy({listen:function(g,_,p=!0){if(c.instance)return u(c.instance,g,_,p);{let d=()=>{};return c.onInstanceAvailable((w,b)=>{d=u(w,g,_,p&&b&&!n.has(r))}),()=>d()}},onChange:function(g){return e.addCallback(c.instance[Se],V.REPLACE,g)},bindTo:function(g,_){return _||(_=Object.keys(l).map(p=>l[p].name)),e.addCallback(c.instance[Se],V.REPLACE,()=>{_.forEach(p=>g[p]=c.instance[p])})}},{get(m,g){var p;const _=l[l[g]];if(_){const d=(p=c.instance)==null?void 0:p[g],w=(b=>{const v=o(c.instance).listen(g,(I,R)=>{b(I,!1),v==null||v()},!1);(d==null?void 0:d[Se])!==void 0&&b(d,!0)});return s(_.type,{instance:(d==null?void 0:d[Se])!==void 0&&d,parentInstance:c.instance,onInstanceAvailable:w})}else return m[g]},has(m,g){return l[g]!==void 0},set(m,g,_){throw new Error("not allowed")},deleteProperty(m,g){throw new Error("not allowed")}})}else{const u=function(_,p,d){return d&&_.forEach((w,b)=>p(w,b)),e.addCallback(_[Se],V.ADD,(w,b)=>{n.set(p,!0),r=p,p(w,b),n.delete(p),r=void 0})},m=function(_,p){return e.addCallback(_[Se],V.DELETE,p)},g=function(_,p){return e.addCallback(_[Se],V.REPLACE,p)};return new Proxy({onAdd:function(_,p=!0){if(c.instance)return u(c.instance,_,p&&!n.has(r));if(c.onInstanceAvailable){let d=()=>{};return c.onInstanceAvailable((w,b)=>{d=u(w,_,p&&b&&!n.has(r))}),()=>d()}},onRemove:function(_){if(c.instance)return m(c.instance,_);if(c.onInstanceAvailable){let p=()=>{};return c.onInstanceAvailable(d=>{p=m(d,_)}),()=>p()}},onChange:function(_){if(c.instance)return g(c.instance,_);if(c.onInstanceAvailable){let p=()=>{};return c.onInstanceAvailable(d=>{p=g(d,_)}),()=>p()}}},{get(_,p){if(!_[p])throw new Error(`Can't access '${p}' through callback proxy. access the instance directly.`);return _[p]},has(_,p){return _[p]!==void 0},set(_,p,d){throw new Error("not allowed")},deleteProperty(_,p){throw new Error("not allowed")}})}}function o(a){return s(void 0,{instance:a})}return o}function gT(i,e){i.triggerChanges=e}class Nh{constructor(e){E(this,"decoder");E(this,"uniqueRefIds",new Set);E(this,"isTriggering",!1);this.decoder=e,this.decoder.triggerChanges=this.triggerChanges.bind(this)}get callbacks(){return this.decoder.root.callbacks}get state(){return this.decoder.state}addCallback(e,t,n){return this.decoder.root.addCallback(e,t,n)}addCallbackOrWaitCollectionAvailable(e,t,n,r,s=!0){let o=()=>{};const a=()=>o(),c=e[t];if(!c||c[Se]===void 0){let l;return l=this.addCallback(e[Se],t,(f,h)=>{f!=null&&(l(),o=this.addCallback(f[Se],n,r))}),o=l,a}else return s=s&&this.isTriggering===!1,n===V.ADD&&s&&c.forEach((l,f)=>{r(l,f)}),this.addCallback(c[Se],n,r)}listen(...e){return typeof e[0]=="string"?this.listenInstance(this.state,e[0],e[1],e[2]):this.listenInstance(e[0],e[1],e[2],e[3])}listenInstance(e,t,n,r=!0){r=r&&this.isTriggering===!1;const s=e[t];return r&&s!==null&&s!==void 0&&n(s,void 0),this.addCallback(e[Se],t,n)}onChange(...e){if(e.length===2&&typeof e[0]!="string"){const t=e[0],n=e[1];return this.addCallback(t[Se],V.REPLACE,n)}return typeof e[0]=="string"?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],V.REPLACE,e[1]):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],V.REPLACE,e[2])}onAdd(...e){return typeof e[0]=="string"?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],V.ADD,e[1],e[2]!==!1):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],V.ADD,e[2],e[3]!==!1)}onRemove(...e){return typeof e[0]=="string"?this.addCallbackOrWaitCollectionAvailable(this.state,e[0],V.DELETE,e[1]):this.addCallbackOrWaitCollectionAvailable(e[0],e[1],V.DELETE,e[2])}bindTo(e,t,n,r=!0){const s=e.constructor[Symbol.metadata];n||(n=Object.keys(s).filter(a=>!isNaN(Number(a))).map(a=>s[a].name));const o=()=>{for(const a of n){const c=e[a];c!==void 0&&(t[a]=c)}};return r&&o(),this.addCallback(e[Se],V.REPLACE,o)}triggerChanges(e){var t;this.uniqueRefIds.clear(),this.isTriggering=!0;for(let n=0,r=e.length;n<r;n++){const s=e[n],o=s.refId,a=s.ref,c=this.callbacks[o];if(c){if((s.op&V.DELETE)===V.DELETE&&wt.isSchema(s.previousValue)){const l=s.previousValue[Se],f=(t=this.callbacks[l])==null?void 0:t[V.DELETE];if(f)for(let h=f.length-1;h>=0;h--)try{f[h]()}catch(u){console.error(u)}}if(wt.isSchema(a)){if(!this.uniqueRefIds.has(o)){const f=c[V.REPLACE];if(f)for(let h=f.length-1;h>=0;h--)try{f[h]()}catch(u){console.error(u)}}const l=c[s.field];if(l)for(let f=l.length-1;f>=0;f--)try{l[f](s.value,s.previousValue)}catch(h){console.error(h)}}else{const l=s.dynamicIndex??s.field;if((s.op&V.DELETE)===V.DELETE){if(s.previousValue!==void 0){const f=c[V.DELETE];if(f)for(let h=f.length-1;h>=0;h--)try{f[h](s.previousValue,l)}catch(u){console.error(u)}}if((s.op&V.ADD)===V.ADD){const f=c[V.ADD];if(f)for(let h=f.length-1;h>=0;h--)try{f[h](s.value,l)}catch(u){console.error(u)}}}else if((s.op&V.ADD)===V.ADD&&s.previousValue!==s.value){const f=c[V.ADD];if(f)for(let h=f.length-1;h>=0;h--)try{f[h](s.value,l)}catch(u){console.error(u)}}if(s.value!==s.previousValue){const f=c[V.REPLACE];if(f)for(let h=f.length-1;h>=0;h--)try{f[h](l,s.value)}catch(u){console.error(u)}}}this.uniqueRefIds.add(o)}}this.isTriggering=!1}}const _T={get(i){if(i instanceof Ts)return new Nh(i);if("decoder"in i.serializer)return new Nh(i.serializer.decoder);throw new Error("Invalid room or decoder")},getLegacy(i){if(i instanceof Ts)return Uh(i);if("decoder"in i.serializer)return Uh(i.serializer.decoder);throw new Error("Invalid room or decoder")},getRawChanges(i,e){return gT(i,e)}};Li("map",{constructor:Qi});Li("array",{constructor:Ji});Li("set",{constructor:oo});Li("collection",{constructor:so});const Oh=256,ol=5,yr=class yr{constructor(e,t={}){E(this,"instance");E(this,"mode");E(this,"historySize");E(this,"_desc");E(this,"_numFields");E(this,"_slots");E(this,"_slotLens");E(this,"_slotHead",0);E(this,"_slotCount",0);E(this,"_outBuffer");E(this,"_seq",0);E(this,"_encoder");var r;this.instance=e,this.mode=t.mode??"reliable",this.historySize=this.mode==="unreliable"?Math.max(1,t.historySize??3):1,this._desc=am(e);const n=(r=this._desc.metadata)==null?void 0:r[en];if(n===void 0)throw new Error(`InputEncoder: '${e.constructor.name}' has no fields`);this._numFields=n;for(let s=0;s<=n;s++)if(this._desc.names[s]!==void 0&&this._desc.encoders[s]===void 0)throw new Error(`InputEncoder: non-primitive field '${this._desc.names[s]}' on '${e.constructor.name}' is not supported. Use Encoder for state containing refs/collections.`);if(this.mode==="unreliable"){this._slots=new Array(this.historySize),this._slotLens=new Array(this.historySize).fill(0);for(let s=0;s<this.historySize;s++)this._slots[s]=new Uint8Array(Oh);this._outBuffer=new Uint8Array((Oh+ol)*this.historySize)}this._encoder=new Ga(e)}get seq(){return this._seq}encode(){const e=this._produceDelta();return this.mode==="reliable"?e:this._pushAndEmitRing(e)}reset(){this._slotHead=0,this._slotCount=0,this._encoder.discardChanges();const e=this.instance[B],t=this.instance[yn];for(let n=0;n<=this._numFields;n++)t[n]===void 0||t[n]===null||e.markDirty(n)}copyInto(e){const t=this.instance[yn],n=e[yn];for(let r=0;r<=this._numFields;r++)n[r]=t[r]}_produceDelta(){const e=this._encoder.encode();return this._encoder.discardChanges(),e}_pushAndEmitRing(e){this._seq++;let t=this._slots[this._slotHead];return e.length>t.byteLength&&(t=this._slots[this._slotHead]=yr._grow(t,e.length,"unreliable ring slot")),t.set(e),this._slotLens[this._slotHead]=e.length,this._slotHead=(this._slotHead+1)%this.historySize,this._slotCount<this.historySize&&this._slotCount++,this._emitRing()}_emitRing(){const e=this._seq-this._slotCount+1;let t=ol;for(let o=0;o<this._slotCount;o++)t+=this._slotLens[o]+ol;let n=this._outBuffer;t>n.byteLength&&(n=this._outBuffer=yr._grow(n,t,"unreliable output packet"));const r={offset:0};We.number(n,e,r);const s=(this._slotHead-this._slotCount+this.historySize)%this.historySize;for(let o=0;o<this._slotCount;o++){const a=(s+o)%this.historySize,c=this._slotLens[a];We.number(n,c,r),n.set(this._slots[a].subarray(0,c),r.offset),r.offset+=c}return n.subarray(0,r.offset)}static _grow(e,t,n){const r=Math.max(t,e.byteLength*2);return yr._warned||(yr._warned=!0,console.warn(`@colyseus/schema/input: InputEncoder buffer overflow in ${n}. Growing to ${r} bytes.`)),new Uint8Array(r)}};E(yr,"_warned",!1);let gf=yr;function Bn(){return typeof performance<"u"?performance.now():Date.now()}const xT=typeof WeakRef<"u"?i=>new WeakRef(i):i=>({deref:()=>i}),yT=64,al=[];function vT(i,e){al.push([i,xT(e)]),al.length>yT&&al.shift()}const ET=Symbol.metadata??Symbol.for("Symbol.metadata");function ST(i){return i.constructor[ET]}const _f=9,MT=_f,TT=(i,e)=>(e?2:1)*(_f+4+_f*i),an=class an{constructor(e,t,n,r){E(this,"data");E(this,"_host");E(this,"_encoder");E(this,"_scratch",new Uint8Array(2048));E(this,"_framed",null);E(this,"_sentCount",0);E(this,"_lastProcessed",0);E(this,"_epoch",0);E(this,"_sendTimes");E(this,"_inputBufferSize");E(this,"_inputBuffer",null);E(this,"_reckonTimes",null);E(this,"_pendingReckon",0);E(this,"_lastStamp",0);E(this,"_stampRing",null);E(this,"_renderDeltaRing",null);E(this,"_ringSlots",0);E(this,"_warnedUnknownKeys",null);E(this,"_stampRender",!1);E(this,"_stampReckon",!1);E(this,"_allowRewind");E(this,"_sendListeners",null);E(this,"_renderDelay",0);E(this,"_renderDelayExplicit",!1);E(this,"_renderDelayProvider");E(this,"_tickRate");E(this,"_patchRate");E(this,"_subSteps",1);this._host=e,this.data=t,this._encoder=n,this._stampRender=(r==null?void 0:r.stampRender)??!1,this._stampReckon=(r==null?void 0:r.stampReckon)??!1,this._allowRewind=r==null?void 0:r.allowRewind,this._allowRewind!==void 0&&n.mode==="unreliable"&&!an._warnedAllowRewindIgnored&&(an._warnedAllowRewindIgnored=!0,console.warn('@colyseus/sdk: `allowRewind` is ignored on `mode:"unreliable"` — a packet stamps its whole redundancy ring or none of it, so excluding one input would cost bandwidth rather than save it. Use `mode:"reliable"` to gate the lag-comp stamp per input.')),this._renderDelay=(r==null?void 0:r.renderDelay)??0,this._renderDelayExplicit=(r==null?void 0:r.renderDelay)!==void 0,this._tickRate=r==null?void 0:r.tickRate,this._patchRate=r==null?void 0:r.patchRate,this._subSteps=(r==null?void 0:r.subSteps)??1;const s=this._tickRate?1e3/this._tickRate:1e3/60,o=an.BUFFER_RTT_BUDGET_MS+(this._patchRate??0);this._inputBufferSize=Math.max(an.BUFFER_FLOOR,Math.ceil(o/s*an.BUFFER_HEADROOM)),this._sendTimes=new Float64Array(this._inputBufferSize)}get mode(){return this._encoder.mode}get tickRate(){return this._tickRate}get stepSeconds(){return this._tickRate?1/this._tickRate:void 0}get stepMs(){return this._tickRate?1e3/this._tickRate:void 0}get patchRate(){return this._patchRate}get subSteps(){return this._subSteps}get subStepSeconds(){return this._tickRate?1/this._tickRate/this._subSteps:void 0}get subStepMs(){return this._tickRate?1e3/this._tickRate/this._subSteps:void 0}get lastProcessed(){return this._lastProcessed}get sentCount(){return this._sentCount}get pendingCount(){return this._sentCount-this._lastProcessed}get replayBufferSize(){return this._inputBufferSize}get epoch(){return this._epoch}at(e){if(this._inputBuffer!==null&&!(e<=this._lastProcessed||e>this._sentCount)){if(this._sentCount-e>=this._inputBufferSize){an._warnedBufferOverflow||(an._warnedBufferOverflow=!0,console.warn(`@colyseus/sdk: input replay buffer (${this._inputBufferSize}) overflowed — RTT exceeds its budget at this input rate; reconciliation may drift.`));return}return this._inputBuffer[e%this._inputBufferSize]}}reckonTimeAt(e){return this._reckonTimes===null||e<=this._lastProcessed||e>this._sentCount||this._sentCount-e>=this._inputBufferSize?0:this._reckonTimes[e%this._inputBufferSize]}reset(){this._encoder.reset(),this._sentCount=this._lastProcessed=this._encoder.seq,this._framed=null,this._lastStamp=0,this._ringSlots=0,this._sendTimes.fill(0),this._epoch++}bindRenderDelay(e){this._renderDelayExplicit||(this._renderDelayProvider=e)}_resolveRenderDelay(){return this._renderDelayProvider?this._renderDelayProvider():this._renderDelay}_warnUnknownFields(){var t;const e=ST(this.data);if(e)for(const n of Object.keys(this.data))e[n]!==void 0||(t=this._warnedUnknownKeys)!=null&&t.has(n)||((this._warnedUnknownKeys??(this._warnedUnknownKeys=new Set)).add(n),console.warn(`@colyseus/sdk input: "${n}" is not a declared field on ${this.data.constructor.name} — the write is never encoded or sent. Declare it with @type(...) on the input schema, or remove the write.`))}send(){const e=this._host.connection;if(!(e!=null&&e.isOpen))return 0;const t=this._encoder.encode(),n=this._encoder.mode==="reliable",r=this._stampReckon||this._stampRender,s=r&&n&&(this._allowRewind===void 0||this._allowRewind(this.data)),o=r&&!n,a=this._stampReckon&&this._stampRender,l=1+(s?MT+(a?2:0):o?TT(this._encoder.historySize,a):0)+t.length;l>this._scratch.byteLength&&(this._scratch=new Uint8Array(Math.max(l,this._scratch.byteLength*2)),this._framed=null),this._scratch[0]=(n?kt.ROOM_INPUT_RELIABLE:kt.ROOM_INPUT_UNRELIABLE)|(s||o?df.TIMED:0);const f={offset:1};if(o)this._writeRingStamps(f);else if(s){const{stamp:g,renderDelta:_}=this._sampleStamp();We.number(this._scratch,g-this._lastStamp,f),this._lastStamp=g,a&&We.uint16(this._scratch,_,f)}else this._pendingReckon=0;this._scratch.set(t,f.offset);const h=f.offset+t.length;(this._framed===null||this._framed.byteLength!==h)&&(this._framed=this._scratch.subarray(0,h));const u=this._framed;let m;return n?(e.send(u),m=++this._sentCount):(e.sendUnreliable(u),m=this._sentCount=this._encoder.seq),this._recordSent(m),m}_writeRingStamps(e){const{stamp:t,renderDelta:n}=this._sampleStamp(),r=this._encoder.historySize,s=this._encoder.seq,o=this._ringSlots=Math.min(this._ringSlots+1,r),a=this._stampRing??(this._stampRing=new Float64Array(r));if(a[s%r]=t,We.number(this._scratch,o,e),We.uint32(this._scratch,t,e),this._writeSeriesDeltas(a,s,o,e),this._stampReckon&&this._stampRender){const c=this._renderDeltaRing??(this._renderDeltaRing=new Uint16Array(r));c[s%r]=n,We.uint16(this._scratch,n,e),this._writeSeriesDeltas(c,s,o,e)}}_writeSeriesDeltas(e,t,n,r){const s=e.length;for(let o=1;o<n;o++)We.number(this._scratch,e[(t-o+1)%s]-e[(t-o)%s],r)}_sampleStamp(){var s,o;const e=this._host.clock,t=(((s=e==null?void 0:e.lastServerTime)==null?void 0:s.call(e))??0)>0,n=t?Math.max(0,Math.round(e.serverNow()))>>>0:0,r=t?Math.min(65535,Math.max(0,Math.round(this._resolveRenderDelay()+(((o=e.smoothedRtt)==null?void 0:o.call(e))??0)/2))):0;return this._pendingReckon=n,{stamp:this._stampReckon?n:n>r?n-r:0,renderDelta:r}}_recordSent(e){if(this._inputBuffer===null){const n=this.data.constructor;this._inputBuffer=Array.from({length:this._inputBufferSize},()=>new n)}this._encoder.copyInto(this._inputBuffer[e%this._inputBufferSize]),this._sendTimes[e%this._inputBufferSize]=Bn(),this._stampReckon&&((this._reckonTimes??(this._reckonTimes=new Float64Array(this._inputBufferSize)))[e%this._inputBufferSize]=this._pendingReckon);const t=this._sendListeners;if(t!==null)for(let n=0;n<t.length;n++)t[n](e)}onSend(e){const t=this._sendListeners;return this._sendListeners=t!==null?[...t,e]:[e],()=>{const n=this._sendListeners;if(n===null)return;const r=n.indexOf(e);if(r<0)return;const s=n.slice();s.splice(r,1),this._sendListeners=s.length>0?s:null}}ackInput(e){if(e<=this._lastProcessed)return-1;const t=this._sentCount-e>=this._inputBufferSize;if(this._lastProcessed=e,t)return-1;const n=this._sendTimes[e%this._inputBufferSize];return n>0?Bn()-n:-1}};E(an,"BUFFER_FLOOR",64),E(an,"BUFFER_RTT_BUDGET_MS",1e3),E(an,"BUFFER_HEADROOM",1.5),E(an,"_warnedBufferOverflow",!1),E(an,"_warnedAllowRewindIgnored",!1);let xf=an;const Sm=Object.freeze({now:()=>Bn(),serverNow:()=>Bn(),renderNow:()=>Bn(),rtt:()=>0,smoothedRtt:()=>0,jitter:()=>0,lastServerTime:()=>0,patchInterval:()=>0,setPatchInterval:i=>{},sample:(i,e)=>{}}),Ft=class Ft{constructor(){E(this,"_clockOffset",0);E(this,"_clockHasSample",!1);E(this,"_offsetCount",0);E(this,"_rttFloorT",[]);E(this,"_rttFloorV",[]);E(this,"_rtt",0);E(this,"_smoothedRtt",0);E(this,"_rttHasSample",!1);E(this,"_jitter",0);E(this,"_lastRecvTime",-1);E(this,"_lastServerTime",0);E(this,"_patchInterval",0);E(this,"_renderTau",Ft.RENDER_TAU);E(this,"_renderSn",0);E(this,"_renderSnAt",0)}serverNow(){return Bn()+this._clockOffset}renderNow(){const e=this.serverNow();if(this._renderTau<=0)return e;const t=Bn();if(this._renderSn===0)return this._renderSn=e,this._renderSnAt=t,this._renderSn;const n=Math.min(t-this._renderSnAt,100);return n<.5?this._renderSn:(this._renderSnAt=t,this._renderSn+=n,Math.abs(e-this._renderSn)>Ft.RENDER_SNAP?(this._renderSn=e,this._renderSn):(this._renderSn+=(e-this._renderSn)*(1-Math.exp(-n/this._renderTau)),this._renderSn))}setRenderTau(e){this._renderTau=e>0?e:0}now(){return Bn()}rtt(){return this._rtt}smoothedRtt(){return this._smoothedRtt}jitter(){return this._jitter}lastServerTime(){return this._lastServerTime}patchInterval(){return this._patchInterval}setPatchInterval(e){this._patchInterval=e>0?e:0}sample(e,t){const n=Bn(),r=Ft.EMA_ALPHA,s=this._patchInterval;if(this._lastRecvTime>=0&&s>0){const a=n-this._lastRecvTime,c=Math.round(a/s);c>=1&&c<=Ft.JITTER_STALL_X&&(this._jitter+=(Math.abs(a-c*s)-this._jitter)*Ft.JITTER_GAIN)}this._lastRecvTime=n,this._lastServerTime=e,(t<0||this._smoothedRtt>0&&t>this._smoothedRtt*Ft.RTT_OUTLIER_X)&&(t=-1);const o=t>=0?e+t/2-n:e-n;if(!this._clockHasSample)this._clockOffset=o,this._clockHasSample=!0,t>=0&&(this.pushRttFloor(t,n),this._offsetCount=1);else if(t>=0){const a=this.pushRttFloor(t,n),c=this._offsetCount<Ft.RTT_GATE_WARMUP;this._offsetCount++,(c||t<=a*Ft.RTT_GATE_FACTOR)&&(this._clockOffset=this._clockOffset*(1-r)+o*r)}t>=0&&(this._rtt=t,this._rttHasSample?this._smoothedRtt=this._smoothedRtt*(1-r)+t*r:(this._smoothedRtt=t,this._rttHasSample=!0))}pushRttFloor(e,t){const n=this._rttFloorT,r=this._rttFloorV;for(;r.length>0&&r[r.length-1]>=e;)r.pop(),n.pop();r.push(e),n.push(t);const s=t-Ft.RTT_GATE_WINDOW;for(;n.length>0&&n[0]<s;)n.shift(),r.shift();return r[0]}reset(){this._clockOffset=0,this._clockHasSample=!1,this._offsetCount=0,this._rtt=0,this._smoothedRtt=0,this._rttHasSample=!1,this._jitter=0,this._lastRecvTime=-1,this._lastServerTime=0,this._rttFloorT.length=0,this._rttFloorV.length=0,this._renderSn=0,this._renderSnAt=0}};E(Ft,"EMA_ALPHA",.1),E(Ft,"RENDER_TAU",250),E(Ft,"RENDER_SNAP",250),E(Ft,"RTT_OUTLIER_X",4),E(Ft,"JITTER_GAIN",1/16),E(Ft,"JITTER_STALL_X",4),E(Ft,"RTT_GATE_FACTOR",1.2),E(Ft,"RTT_GATE_WINDOW",1e4),E(Ft,"RTT_GATE_WARMUP",30);let yf=Ft;var Tr,Ln,fs,lo,fo,uo,ho,po,mo,us,go,Ka,Mm;class cl{constructor(e){bt(this,Ka);bt(this,Tr);bt(this,Ln);bt(this,fs);bt(this,lo);bt(this,fo,!1);bt(this,uo);bt(this,ho,!1);bt(this,po,!1);bt(this,mo);bt(this,us);bt(this,go);Tt(this,Tr,e)}get patchRate(){return Oe(this,us)}applyReflection(e,t,n){const r=Ii.decode(e.subarray(0,n),t);Ii.makeEncodable(r.state.constructor),Tt(this,uo,r.state.constructor),Oe(this,Tr).clock===Sm&&(Oe(this,Tr).clock=new yf)}applyOptions(e,t){const n=e[t.offset++];Tt(this,ho,(n&Hs.RENDER_TIME)!==0),Tt(this,po,(n&Hs.RECKON_TIME)!==0),n&Hs.FIXED_TIMESTEP&&Tt(this,mo,et.number(e,t)),n&Hs.PATCH_RATE&&Tt(this,us,et.number(e,t)),n&Hs.SUB_STEPS&&Tt(this,go,et.number(e,t))}ackInput(e){return Oe(this,Ln)?Oe(this,Ln).ackInput(e):-1}reset(){var e;(e=Oe(this,Ln))==null||e.reset()}handle(e){if(Oe(this,Ln))return e!==void 0&&Fr(this,Ka,Mm).call(this,e),Oe(this,Ln);const t=(e==null?void 0:e.type)??Oe(this,uo);if(!t)throw new Error("room.input(): no input schema available. The server room must call `defineInput(YourInput)`, or you can pass `{ type: YourInput }` explicitly.");const n=new t,r=new gf(n,e);return Tt(this,Ln,new xf(Oe(this,Tr),n,r,{stampRender:Oe(this,ho),stampReckon:Oe(this,po),renderDelay:e==null?void 0:e.renderDelay,allowRewind:e==null?void 0:e.allowRewind,tickRate:Oe(this,mo),patchRate:Oe(this,us),subSteps:Oe(this,go)})),Tt(this,fs,e),Tt(this,lo,r),Oe(this,Ln)}}Tr=new WeakMap,Ln=new WeakMap,fs=new WeakMap,lo=new WeakMap,fo=new WeakMap,uo=new WeakMap,ho=new WeakMap,po=new WeakMap,mo=new WeakMap,us=new WeakMap,go=new WeakMap,Ka=new WeakSet,Mm=function(e){var r,s,o;if(Oe(this,fo))return;const t=Oe(this,Ln),n=[];e.type!==void 0&&e.type!==((r=t.data)==null?void 0:r.constructor)&&n.push("type"),e.mode!==void 0&&e.mode!==t.mode&&n.push("mode"),e.historySize!==void 0&&t.mode==="unreliable"&&e.historySize!==Oe(this,lo).historySize&&n.push("historySize"),e.renderDelay!==void 0&&e.renderDelay!==((s=Oe(this,fs))==null?void 0:s.renderDelay)&&n.push("renderDelay"),e.allowRewind!==void 0!=(((o=Oe(this,fs))==null?void 0:o.allowRewind)!==void 0)&&n.push("allowRewind"),n.length!==0&&(Tt(this,fo,!0),console.warn(`@colyseus/sdk: room.input() options ignored — the input handle was already created by an earlier call (first call wins). Differing: ${n.join(", ")}.`))};var vf;try{vf=new TextDecoder}catch{}var he,at,P=0,ot={},Ze,Xi,Sn=0,Jn=0,$t,Ti,rn=[],Ke,Wa,Fh={useRecords:!1,mapsAsObjects:!0};class Tm{}const wm=new Tm;wm.name="MessagePack 0xC1";var er=!1,Bh=2;class ws{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(he)return Sf(()=>{Ra();try{return this?this.unpack(e,t):ws.prototype.unpack.call(Fh,e,t)}catch(n){throw n&&typeof n=="object"&&$a.add(n),n}});!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(at=t.end||e.length,P=t.start||0):(P=0,at=t>-1?t:e.length),at>e.length&&(at=e.length),Jn=0,Xi=null,$t=null,he=e;try{Ke=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(n){throw he=null,e instanceof Uint8Array?n:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof ws){if(ot=this,this.structures)return Ze=this.structures,ma(t);(!Ze||Ze.length>0)&&(Ze=[])}else ot=Fh,(!Ze||Ze.length>0)&&(Ze=[]);return ma(t)}unpackMultiple(e,t){if(he)return Sf(()=>{Ra();try{return this?this.unpackMultiple(e,t):ao.unpackMultiple(e,t)}catch(s){throw s&&typeof s=="object"&&$a.add(s),s}});let n,r=0;try{er=!0;let s=e.length,o=this?this.unpack(e,s):ao.unpack(e,s);if(t){let a=P;if(t(o,r,a)===!1)return;for(;a<s;)if(r=a,o=ma(),a=P,t(o,r,a)===!1)return}else{for(n=[o];P<s;)r=P,n.push(ma());return n}}catch(s){throw s&&typeof s=="object"&&(s.lastPosition=r,s.values=n),s}finally{er=!1,Ra()}}_mergeStructures(e,t){this._onLoadedStructures&&(e=this._onLoadedStructures(e)),e=e||[],Object.isFrozen(e)&&(e=e.map(n=>n.slice(0)));for(let n=0,r=e.length;n<r;n++){let s=e[n];s&&(s.isShared=!0,n>=32&&(s.highByte=n-32>>5))}e.sharedLength=e.length;for(let n in t||[])if(n>=0){let r=e[n],s=t[n];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[n]=r),e[n]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}const $a=new WeakSet;function ma(i){try{if(!ot.trusted&&!er){let t=Ze.sharedLength||0;t<Ze.length&&(Ze.length=t)}let e;if(Wa=at-P,ot._readStruct&&he[P]<64&&he[P]>=32?(e=ot._readStruct(he,P,at),he=null,!(i&&i.lazy)&&e&&(e=e.toJSON()),P=at):e=Pt(),$t&&(P=$t.postBundlePosition,$t=null),er&&P<=at&&(Ze.restoreStructures=null),P==at)Ze&&Ze.restoreStructures&&kh(),Ze=null,he=null,Ti&&(Ti=null);else{if(P>at)throw new Error("Unexpected end of MessagePack data");if(!er){let t;try{t=JSON.stringify(e,(n,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(n){t="(JSON view not available "+n+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw Ze&&Ze.restoreStructures&&kh(),Ra(),wT(e),e}}function wT(i){!i||typeof i!="object"||(P>at?i.incomplete=!0:$a.has(i)?i.incomplete&&(i.incomplete=!1):(i instanceof RangeError&&P+8>at||typeof i.message=="string"&&i.message.startsWith("Unexpected end of buffer"))&&(i.incomplete=!0))}function kh(){for(let i in Ze.restoreStructures)Ze[i]=Ze.restoreStructures[i];Ze.restoreStructures=null}function Pt(){let i=he[P++];if(i<160)if(i<128){if(i<64)return i;{let e=Ze[i&63]||ot.getStructures&&bm()[i&63];return e?(e.read||(e.read=eu(e,i&63)),e.read()):i}}else if(i<144)if(i-=128,ot.mapsAsObjects){let e={};for(let t=0;t<i;t++){let n=Rm();n==="__proto__"&&(n="__proto_"),e[n]=Pt()}return e}else{let e=new Map;for(let t=0;t<i;t++)e.set(Pt(),Pt());return e}else{i-=144;let e=new Array(i);for(let t=0;t<i;t++)e[t]=Pt();return ot.freezeData?Object.freeze(e):e}else if(i<192){let e=i-160;if(Jn>=P)return Xi.slice(P-Sn,(P+=e)-Sn);if(Jn==0&&at<140){let t=e<16?tu(e):Am(e);if(t!=null)return t}return Ef(e)}else{let e;switch(i){case 192:return null;case 193:return $t?(e=Pt(),e>0?$t[1].slice($t.position1,$t.position1+=e):$t[0].slice($t.position0,$t.position0-=e)):wm;case 194:return!1;case 195:return!0;case 196:if(e=he[P++],e===void 0)throw new Error("Unexpected end of buffer");return ll(e);case 197:if(e=Ke.getUint16(P),P+=2,e>at-P)throw Zn(P+e);return ll(e);case 198:if(e=Ke.getUint32(P),P+=4,e>at-P)throw Zn(P+e);return ll(e);case 199:return ur(he[P++]);case 200:return e=Ke.getUint16(P),P+=2,ur(e);case 201:return e=Ke.getUint32(P),P+=4,ur(e);case 202:if(e=Ke.getFloat32(P),ot.useFloat32>2){let t=nu[(he[P]&127)<<1|he[P+1]>>7];return P+=4,(t*e+(e>0?.5:-.5)>>0)/t}return P+=4,e;case 203:return e=Ke.getFloat64(P),P+=8,e;case 204:return he[P++];case 205:return e=Ke.getUint16(P),P+=2,e;case 206:return e=Ke.getUint32(P),P+=4,e;case 207:return ot.int64AsType==="number"?(e=Ke.getUint32(P)*4294967296,e+=Ke.getUint32(P+4)):ot.int64AsType==="string"?e=Ke.getBigUint64(P).toString():ot.int64AsType==="auto"?(e=Ke.getBigUint64(P),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=Ke.getBigUint64(P),P+=8,e;case 208:return Ke.getInt8(P++);case 209:return e=Ke.getInt16(P),P+=2,e;case 210:return e=Ke.getInt32(P),P+=4,e;case 211:return ot.int64AsType==="number"?(e=Ke.getInt32(P)*4294967296,e+=Ke.getUint32(P+4)):ot.int64AsType==="string"?e=Ke.getBigInt64(P).toString():ot.int64AsType==="auto"?(e=Ke.getBigInt64(P),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=Ke.getBigInt64(P),P+=8,e;case 212:if(e=he[P++],e==114)return $h(he[P++]&63);{let t=rn[e];if(t){if(t.read)return P++,t.read(Pt());if(t.noBuffer)return P++,t();if(P>=at)throw Zn();return t(he.subarray(P,++P))}else throw new Error("Unknown extension "+e)}case 213:return e=he[P],e==114?(P++,$h(he[P++]&63,he[P++])):ur(2);case 214:return ur(4);case 215:return ur(8);case 216:return ur(16);case 217:return e=he[P++],Jn>=P?Xi.slice(P-Sn,(P+=e)-Sn):AT(e);case 218:if(e=Ke.getUint16(P),P+=2,e>at-P)throw Zn(P+e);return Jn>=P?Xi.slice(P-Sn,(P+=e)-Sn):RT(e);case 219:if(e=Ke.getUint32(P),P+=4,e>at-P)throw Zn(P+e);return Jn>=P?Xi.slice(P-Sn,(P+=e)-Sn):CT(e);case 220:return e=Ke.getUint16(P),P+=2,Vh(e);case 221:return e=Ke.getUint32(P),P+=4,Vh(e);case 222:return e=Ke.getUint16(P),P+=2,Hh(e);case 223:return e=Ke.getUint32(P),P+=4,Hh(e);default:if(i>=224)return i-256;throw i===void 0?Zn():new Error("Unknown MessagePack token "+i)}}}const bT=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function eu(i,e){function t(){if(t.count++>Bh){let r;try{r=i.read=new Function("r","return function(){return "+(ot.freezeData?"Object.freeze":"")+"({"+i.map(s=>s==="__proto__"?"__proto_:r()":bT.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(Pt)}catch{return Bh=1/0,t()}return i.read0=r,i.highByte===0&&(i.read=zh(e,i.read)),r()}let n={};for(let r=0,s=i.length;r<s;r++){let o=i[r];o==="__proto__"&&(o="__proto_"),n[o]=Pt()}return ot.freezeData?Object.freeze(n):n}return t.count=0,i.read0=t,i.highByte===0?zh(e,t):t}const zh=(i,e)=>function(){let t=he[P++];if(t===0)return e();let n=i<32?-(i+(t<<5)):i+(t<<5),r=Ze[n]||bm()[n];if(!r)throw new Error("Record id is not defined for "+n);return r.read||(r.read=eu(r,i)),r.read()};function bm(){let i=Sf(()=>(he=null,ot.getStructures()));return Ze=ot._mergeStructures(i,Ze)}var Ef=Uo,AT=Uo,RT=Uo,CT=Uo;function Uo(i){let e;if(i<16&&(e=tu(i)))return e;if(i>64&&vf)return vf.decode(he.subarray(P,P+=i));const t=P+i,n=[];for(e="";P<t;){const r=he[P++];if((r&128)===0)n.push(r);else if((r&224)===192)if(r<194||P>=t||(he[P]&192)!==128)n.push(65533);else{const s=he[P++]&63;n.push((r&31)<<6|s)}else if((r&240)===224){const s=P<t?he[P]:0;if(P>=t||(s&192)!==128||r===224&&s<160||r===237&&s>=160)n.push(65533);else if(P++,P>=t||(he[P]&192)!==128)n.push(65533);else{const o=he[P++]&63;n.push((r&31)<<12|(s&63)<<6|o)}}else if((r&248)===240){const s=P<t?he[P]:0;if(r>244||P>=t||(s&192)!==128||r===240&&s<144||r===244&&s>=144)n.push(65533);else if(P++,P>=t||(he[P]&192)!==128)n.push(65533);else{const o=he[P++]&63;if(P>=t||(he[P]&192)!==128)n.push(65533);else{const a=he[P++]&63;let c=(r&7)<<18|(s&63)<<12|o<<6|a;c-=65536,n.push(c>>>10&1023|55296),n.push(56320|c&1023)}}}else n.push(65533);n.length>=4096&&(e+=Wt.apply(String,n),n.length=0)}return n.length>0&&(e+=Wt.apply(String,n)),e}function Zn(i){let e=new Error("Unexpected end of MessagePack data");return e.incomplete=!0,i>at&&P<=at&&(e.missingBytes=i-at),e}function Vh(i){if(i>at-P||(Wa-=i)<0)throw Zn(P+i);let e=new Array(i);for(let t=0;t<i;t++)e[t]=Pt();return ot.freezeData?Object.freeze(e):e}function Hh(i){if(i>(at-P)/2)throw Zn(P+2*i);if(ot.mapsAsObjects){let e={};for(let t=0;t<i;t++){let n=Rm();n==="__proto__"&&(n="__proto_"),e[n]=Pt()}return e}else{let e=new Map;for(let t=0;t<i;t++)e.set(Pt(),Pt());return e}}var Wt=String.fromCharCode;function Am(i){let e=P;if(he.latin1Slice){let n=e+i;if(n>at)return;for(let r=e;r<n;r++)if((he[r]&128)>0)return;return P=n,he.latin1Slice(e,n)}let t=new Array(i);for(let n=0;n<i;n++){const r=he[P++];if((r&128)>0){P=e;return}t[n]=r}return Wt.apply(String,t)}function tu(i){if(i<4)if(i<2){if(i===0)return"";{let e=he[P++];if((e&128)>1){P-=1;return}return Wt(e)}}else{let e=he[P++],t=he[P++];if((e&128)>0||(t&128)>0){P-=2;return}if(i<3)return Wt(e,t);let n=he[P++];if((n&128)>0){P-=3;return}return Wt(e,t,n)}else{let e=he[P++],t=he[P++],n=he[P++],r=he[P++];if((e&128)>0||(t&128)>0||(n&128)>0||(r&128)>0){P-=4;return}if(i<6){if(i===4)return Wt(e,t,n,r);{let s=he[P++];if((s&128)>0){P-=5;return}return Wt(e,t,n,r,s)}}else if(i<8){let s=he[P++],o=he[P++];if((s&128)>0||(o&128)>0){P-=6;return}if(i<7)return Wt(e,t,n,r,s,o);let a=he[P++];if((a&128)>0){P-=7;return}return Wt(e,t,n,r,s,o,a)}else{let s=he[P++],o=he[P++],a=he[P++],c=he[P++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){P-=8;return}if(i<10){if(i===8)return Wt(e,t,n,r,s,o,a,c);{let l=he[P++];if((l&128)>0){P-=9;return}return Wt(e,t,n,r,s,o,a,c,l)}}else if(i<12){let l=he[P++],f=he[P++];if((l&128)>0||(f&128)>0){P-=10;return}if(i<11)return Wt(e,t,n,r,s,o,a,c,l,f);let h=he[P++];if((h&128)>0){P-=11;return}return Wt(e,t,n,r,s,o,a,c,l,f,h)}else{let l=he[P++],f=he[P++],h=he[P++],u=he[P++];if((l&128)>0||(f&128)>0||(h&128)>0||(u&128)>0){P-=12;return}if(i<14){if(i===12)return Wt(e,t,n,r,s,o,a,c,l,f,h,u);{let m=he[P++];if((m&128)>0){P-=13;return}return Wt(e,t,n,r,s,o,a,c,l,f,h,u,m)}}else{let m=he[P++],g=he[P++];if((m&128)>0||(g&128)>0){P-=14;return}if(i<15)return Wt(e,t,n,r,s,o,a,c,l,f,h,u,m,g);let _=he[P++];if((_&128)>0){P-=15;return}return Wt(e,t,n,r,s,o,a,c,l,f,h,u,m,g,_)}}}}}function Gh(){let i=he[P++],e;if(i<192)e=i-160;else switch(i){case 217:e=he[P++];break;case 218:e=Ke.getUint16(P),P+=2;break;case 219:e=Ke.getUint32(P),P+=4;break;default:throw new Error("Expected string")}return Uo(e)}function ll(i){return ot.copyBuffers?Uint8Array.prototype.slice.call(he,P,P+=i):he.subarray(P,P+=i)}function ur(i){if(i>=at-P)throw Zn(P+1+i);let e=he[P++];if(rn[e]){let t;return rn[e](he.subarray(P,t=P+=i),n=>{P=n;try{return Pt()}finally{P=t}})}else throw new Error("Unknown extension type "+e)}var Wh=new Array(4096);function Rm(){let i=he[P++];if(i>=160&&i<192){if(i=i-160,Jn>=P)return Xi.slice(P-Sn,(P+=i)-Sn);if(!(Jn==0&&at<180))return Ef(i)}else return P--,Cm(Pt());if(i>at-P)throw Zn(P+i);let e=(i<<5^(i>1?Ke.getUint16(P):i>0?he[P]:0))&4095,t=Wh[e],n=P,r=P+i-3,s,o=0;if(t&&t.bytes==i){for(;n<r;){if(s=Ke.getUint32(n),s!=t[o++]){n=1879048192;break}n+=4}for(r+=3;n<r;)if(s=he[n++],s!=t[o++]){n=1879048192;break}if(n===r)return P=n,t.string;r-=3,n=P}for(t=[],Wh[e]=t,t.bytes=i;n<r;)s=Ke.getUint32(n),t.push(s),n+=4;for(r+=3;n<r;)s=he[n++],t.push(s);let a=i<16?tu(i):Am(i);return a!=null?t.string=a:t.string=Ef(i)}function Cm(i){if(typeof i=="string")return i;if(typeof i=="number"||typeof i=="boolean"||typeof i=="bigint")return i.toString();if(i==null)return i+"";if(ot.allowArraysInMapKeys&&Array.isArray(i)&&i.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return i.flat().toString();throw new Error(`Invalid property type for record: ${typeof i}. A MessagePack map with non-string keys can be decoded as a Map with mapsAsObjects: false`)}const $h=(i,e)=>{let t=Pt().map(Cm),n=i;e!==void 0&&(i=i<32?-((e<<5)+i):(e<<5)+i,t.highByte=e);let r=Ze[i];if(er||r&&r.isShared){let s=Ze.restoreStructures||(Ze.restoreStructures=[]);i in s||(s[i]=r)}return Ze[i]=t,t.read=eu(t,n),(t.read0||t.read)()};rn[0]=()=>{};rn[0].noBuffer=!0;rn[66]=i=>{let e=i.byteLength%8||8,t=BigInt(i[0]&128?i[0]-256:i[0]);for(let n=1;n<e;n++)t<<=BigInt(8),t+=BigInt(i[n]);if(i.byteLength!==e){let n=new DataView(i.buffer,i.byteOffset,i.byteLength),r=(s,o)=>{let a=o-s;if(a<=40){let h=n.getBigUint64(s);for(let u=s+8;u<o;u+=8)h<<=BigInt(64),h|=n.getBigUint64(u);return h}let c=s+(a>>4<<3),l=r(s,c),f=r(c,o);return l<<BigInt((o-c)*8)|f};t=t<<BigInt((n.byteLength-e)*8)|r(e,n.byteLength)}return t};let ga={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:typeof AggregateError=="function"?AggregateError:null};rn[101]=()=>{let i=Pt();if(i[0]==="AggregateError"&&ga.AggregateError)return new ga.AggregateError(i[3]||[],i[1],{cause:i[2]});if(!ga[i[0]]){let e=Error(i[1],{cause:i[2]});return e.name=i[0],e}return ga[i[0]](i[1],{cause:i[2]})};rn[105]=i=>{if(ot.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=Ke.getUint32(P-4);Ti||(Ti=new Map);let t=he[P],n;t>=144&&t<160||t==220||t==221?n=[]:t>=128&&t<144||t==222||t==223?n=new Map:(t>=199&&t<=201||t>=212&&t<=216)&&he[P+1]===115?n=new Set:n={};let r={target:n};Ti.set(e,r);let s=Pt();if(r.used)Object.assign(n,s);else return r.target=s;if(n instanceof Map)for(let[o,a]of s.entries())n.set(o,a);if(n instanceof Set)for(let o of Array.from(s))n.add(o);return n};rn[112]=i=>{if(ot.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=Ke.getUint32(P-4),t=Ti.get(e);return t.used=!0,t.target};rn[115]=()=>new Set(Pt());const Dm=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(i=>i+"Array");let DT=typeof globalThis=="object"?globalThis:window;rn[116]=i=>{let e=i[0],t=Uint8Array.prototype.slice.call(i,1).buffer,n=Dm[e];if(!n){if(e===16)return t;if(e===17)return new DataView(t);throw new Error("Could not find typed array for code "+e)}return new DT[n](t)};rn[120]=()=>{let i=Pt();return new RegExp(i[0],i[1])};const PT=[];rn[98]=i=>{let e=(i[0]<<24)+(i[1]<<16)+(i[2]<<8)+i[3],t=P;return P+=e-i.length,$t=PT,$t=[Gh(),Gh()],$t.position0=0,$t.position1=0,$t.postBundlePosition=P,P=t,Pt()};rn[255]=i=>i.length==4?new Date((i[0]*16777216+(i[1]<<16)+(i[2]<<8)+i[3])*1e3):i.length==8?new Date(((i[0]<<22)+(i[1]<<14)+(i[2]<<6)+(i[3]>>2))/1e6+((i[3]&3)*4294967296+i[4]*16777216+(i[5]<<16)+(i[6]<<8)+i[7])*1e3):i.length==12?new Date(((i[0]<<24)+(i[1]<<16)+(i[2]<<8)+i[3])/1e6+((i[4]&128?-281474976710656:0)+i[6]*1099511627776+i[7]*4294967296+i[8]*16777216+(i[9]<<16)+(i[10]<<8)+i[11])*1e3):new Date("invalid");function Sf(i){ot&&ot._onSaveState&&ot._onSaveState();let e=at,t=P,n=Sn,r=Jn,s=Xi,o=Ti,a=$t,c=Wa,l=new Uint8Array(he.slice(0,at)),f=Ze,h=Ze.slice(0,Ze.length),u=ot,m=er;try{return i()}catch(g){throw g&&typeof g=="object"&&$a.add(g),g}finally{at=e,P=t,Sn=n,Jn=r,Xi=s,Ti=o,$t=a,Wa=c,he=l,er=m,Ze=f,Ze.splice(0,Ze.length,...h),ot=u,Ke=new DataView(he.buffer,he.byteOffset,he.byteLength)}}function Ra(){he=null,Ti=null,Ze=null}rn.slice(0);const nu=new Array(147);for(let i=0;i<256;i++)nu[i]=+("1e"+Math.floor(45.15-i*.30103));var ao=new ws({useRecords:!1});const Xh=ao.unpack;ao.unpackMultiple;ao.unpack;let IT=new Float32Array(1);new Uint8Array(IT.buffer,0,4);ws.SUPPORTS_STRUCT_HOOKS=!0;let Ca;try{Ca=new TextEncoder}catch{}let Xa,Mf;const _c=typeof Buffer<"u",_a=_c?function(i){return Buffer.allocUnsafeSlow(i)}:Uint8Array,Pm=_c?Buffer:Uint8Array,qh=_c?4294967296:2144337920;let G,Ws,ft,F=0,Gt,_t=null,hr=!1;const LT=21760,UT=/[\u0080-\uFFFF]/,Xt=Symbol("record-id");class iu extends ws{constructor(e){super(e),this.offset=0;let t,n,r,s,o=Pm.prototype.utf8Write?function(A,W){return G.utf8Write(A,W,G.byteLength-W)}:Ca&&Ca.encodeInto?function(A,W){return Ca.encodeInto(A,G.subarray(W)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,f=e.maxSharedStructures;if(f==null&&(f=l?32:0),f>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let h=e.maxOwnStructures;h==null&&(h=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let u=f>32||h+f>64,m=f+64,g=f+h+64;if(g>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let _=[],p=0,d=0,w=!1,b=0,v=null;this.pack=this.encode=function(A,W){if(hr)return R(A,W);if(G||(G=new _a(8192),ft=G.dataView||(G.dataView=new DataView(G.buffer,0,8192)),F=0),Gt=G.length-10,Gt-F<2048?(G=new _a(G.length),ft=G.dataView||(G.dataView=new DataView(G.buffer,0,G.length)),Gt=G.length-10,F=0):F=F+7&2147483640,t=F,W&Da&&(F+=W&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof A!="string"?(_t=[],_t.size=1/0):_t=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let X=r.sharedLength||0;if(X>f)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);r.transitions||(I(b&&a.saveStructures?Math.min(X,a.lastNamedStructuresLength||0):X),b||(a.lastNamedStructuresLength=X)),(!c||!(r.nextId>=X+64))&&(r.nextId=X+64)}n&&(n=!1),!b&&v&&(v=null);let $;hr=!0,w=!0;try{a._writeStruct&&!(b&&a.saveStructures)&&A&&typeof A=="object"?A.constructor===Object?ce(A):A.constructor!==Map&&!Array.isArray(A)&&!Mf.some(Z=>A instanceof Z)?ce(a.useToJSON!==!1&&A.toJSON?A.toJSON():A):M(A):M(A);let X=_t;if(_t&&jh(t,M,0),s&&s.idsToInsert){let Z=s.idsToInsert.sort((fe,re)=>fe.offset>re.offset?1:-1),pe=Z.length,H=-1;for(;X&&pe>0;){let fe=Z[--pe].offset+t;fe<X.stringsPosition+t&&H===-1&&(H=0),fe>X.position+t?H>=0&&(H+=6):(H>=0&&(ft.setUint32(X.position+t,ft.getUint32(X.position+t)+H),H=-1),X=X.previous,pe++)}H>=0&&X&&ft.setUint32(X.position+t,ft.getUint32(X.position+t)+H),F+=Z.length*6,F>Gt&&oe(F),a.offset=F;let q=FT(G.subarray(t,F),Z);return s=null,q}return a.offset=F,W&kT?(G.start=t,G.end=F,G):G.subarray(t,F)}catch(X){throw $=X,X}finally{if(w=!1,r){if(T(),v&&!b){let X=v;if(v=null,!$&&a.saveStructures){let Z=r.sharedLength||0;r.transitions||I(Z);for(let pe=0,H=X.length;pe<H&&Z<f;pe++){let q=X[pe],fe,re=r.transitions;for(let ve=0,Pe=q.length;ve<Pe;ve++){let Ue=q[ve];fe=re[Ue],fe||(fe=re[Ue]=Object.create(null)),re=fe}if(!re[Xt]){let ve=Z+64;q.highByte=ve>=96&&u?ve-96>>5:-1,q.isShared=!0,re[Xt]=ve,re.__keys__=q,r[Z++]=q,r.sharedLength=Z,n=!0}}(!c||!(r.nextId>=Z+64))&&(r.nextId=Z+64)}}if(n&&!b&&a.saveStructures){let X=r.sharedLength||0,Z=G.subarray(t,F);if(!$){let pe=!1;try{let H=(a._prepareStructures||BT)(r,a);if(a.saveStructures(H,H.isCompatible)===!1)return r.uninitialized=!0,pe=!0,hr=!1,a.pack(A,W);pe=!0}finally{hr=!1,pe||(r=a.structures,a.getStructures&&(r.uninitialized=!0),r.length=r.sharedLength=a.lastNamedStructuresLength||0,r.transitions=null)}return a.lastNamedStructuresLength=X,G.length>1073741824&&(G=null),Z}a.getStructures&&(r.uninitialized=!0),r.length=r.sharedLength=a.lastNamedStructuresLength||0,r.transitions=null}}hr=!1,G.length>1073741824&&(G=null),W&zT&&(F=t)}};const I=A=>{r.transitions=Object.create(null);for(let W=0;W<A;W++){let $=r[W];if(!$)continue;let X,Z=r.transitions;for(let pe=0,H=$.length;pe<H;pe++){let q=$[pe];X=Z[q],X||(X=Z[q]=Object.create(null)),Z=X}Z[Xt]=W+64}},R=(A,W)=>{let $=G,X=ft,Z=F,pe=Gt,H=_t,q=t,fe=s,re=n,ve=w,Pe,Ue,Qe,Ye,gt,O,At,Ne,qe,Ae,ct,Le,C=!1;ve&&(Le=v?v.length:0,b++);try{if(ve&&r){Pe=r,Ue=r.transitions,Qe=r.nextId,Ye=r.nextOwnId,qe=a.lastNamedStructuresLength,Ne=r.sharedLength||0,At=r.slice(Ne),gt=_,O=[];for(let U=0,te=_.length;U<te;U++){let ne=_[U],ee=ne[Xt];O[U]=ee,ne[Xt]=0,ee>=Ne+64&&ne.__keys__&&(At[ee-Ne-64]=ne.__keys__)}if(_=[],re&&a.saveStructures&&Ue){Ae=[];for(let U=qe||0;U<Ne;U++){let te=r[U];if(!te)continue;let ne=Ue;for(let ee=0,Te=te.length;ee<Te&&ne;ee++)ne=ne[te[ee]];ne&&ne[Xt]===U+64&&(Ae.push(ne,U+64,ne.__keys__),ne[Xt]=0,ne.__keys__=null)}}r.length=Ne,r.nextId=Ne+64,r.nextOwnId=void 0,ct=p,p=0}G=null,hr=!1,w=!1;let x=a.pack(A,W);return C=!0,x}finally{if(!C&&ve&&v&&(v.length=Le),hr=!0,w=ve,G=$,ft=X,F=Z,Gt=pe,_t=H,t=q,s=fe,ve){if(b--,n=re||n,r=a.structures,r&&At){if(_!==gt)for(let U=0,te=_.length;U<te;U++)_[U][Xt]=0;let x=r.sharedLength||0;if(r!==Pe)if(re||At.length>0){for(let U=0;U<Ne;U++)Pe[U]!==void 0&&(r[U]=Pe[U]);x=r.sharedLength=r.length=Ne,a.lastNamedStructuresLength=qe}else!b&&!n&&(a.lastNamedStructuresLength=x);r.length=Math.max(x,Ne+At.length);for(let U=Math.max(0,x-Ne),te=At.length;U<te;U++)At[U]!==void 0&&(r[Ne+U]=At[U]);if(r.transitions!==Ue||r!==Pe)if(r===Pe&&!r.transitions&&x===Ne)r.transitions=Ue;else{I(b&&a.saveStructures?Math.min(x,a.lastNamedStructuresLength||0):x),Ae=null,gt=[],O=[];for(let U=Math.max(0,x-Ne),te=At.length;U<te;U++){let ne=At[U];if(!ne)continue;let ee,Te=r.transitions;for(let me=0,Me=ne.length;me<Me;me++){let je=ne[me];ee=Te[je],ee||(ee=Te[je]=Object.create(null)),Te=ee}Te[Xt]||(gt.push(Te),O.push(Ne+U+64))}}if(Ae)for(let U=0,te=Ae.length;U<te;U+=3)Ae[U][Xt]=Ae[U+1],Ae[U].__keys__=Ae[U+2];_=gt;for(let U=0,te=O.length;U<te;U++)_[U][Xt]||(_[U][Xt]=O[U]);r.nextId=Qe>=x+64?Qe:x+64,r.nextOwnId=Ye,ct!==void 0&&(p+=ct)}}else n=re}},T=()=>{d<10&&d++;let A=r.sharedLength||0;if(r.length>A&&!c&&(r.length=A),p>1e4&&!b)r.transitions=null,d=0,p=0,_.length>0&&(_=[]);else if(_.length>0&&!c){for(let W=0,$=_.length;W<$;W++)_[W][Xt]=0;_=[]}},D=A=>{var W=A.length;W<16?G[F++]=144|W:W<65536?(G[F++]=220,G[F++]=W>>8,G[F++]=W&255):(G[F++]=221,ft.setUint32(F,W),F+=4);for(let $=0;$<W;$++)M(A[$])},M=A=>{F>Gt&&(G=oe(F));var W=typeof A,$;if(W==="string"){let X=A.length;if(_t&&X>=4&&X<4096){if((_t.size+=X)>LT){let q,fe=(_t[0]?_t[0].length*3+_t[1].length:0)+10;F+fe>Gt&&(G=oe(F+fe));let re;_t.position?(re=_t,G[F]=200,F+=3,G[F++]=98,q=F-t,F+=4,jh(t,M,0),ft.setUint16(q+t-3,F-t-q)):(G[F++]=214,G[F++]=98,q=F-t,F+=4),_t=["",""],_t.previous=re,_t.size=0,_t.position=q}let H=UT.test(A);_t[H?0:1]+=A,G[F++]=193,M(H?-X:X);return}let Z;X<32?Z=1:X<256?Z=2:X<65536?Z=3:Z=5;let pe=X*3;if(F+pe>Gt&&(G=oe(F+pe)),X<64||!o){let H,q,fe,re=F+Z;for(H=0;H<X;H++)q=A.charCodeAt(H),q<128?G[re++]=q:q<2048?(G[re++]=q>>6|192,G[re++]=q&63|128):(q&64512)===55296&&((fe=A.charCodeAt(H+1))&64512)===56320?(q=65536+((q&1023)<<10)+(fe&1023),H++,G[re++]=q>>18|240,G[re++]=q>>12&63|128,G[re++]=q>>6&63|128,G[re++]=q&63|128):(q&63488)===55296?(G[re++]=239,G[re++]=191,G[re++]=189):(G[re++]=q>>12|224,G[re++]=q>>6&63|128,G[re++]=q&63|128);$=re-F-Z}else $=o(A,F+Z);$<32?G[F++]=160|$:$<256?(Z<2&&G.copyWithin(F+2,F+1,F+1+$),G[F++]=217,G[F++]=$):$<65536?(Z<3&&G.copyWithin(F+3,F+2,F+2+$),G[F++]=218,G[F++]=$>>8,G[F++]=$&255):(Z<5&&G.copyWithin(F+5,F+3,F+3+$),G[F++]=219,ft.setUint32(F,$),F+=4),F+=$}else if(W==="number")if(A>>>0===A)A<32||A<128&&this.useRecords===!1||A<64&&!this._writeStruct?G[F++]=A:A<256?(G[F++]=204,G[F++]=A):A<65536?(G[F++]=205,G[F++]=A>>8,G[F++]=A&255):(G[F++]=206,ft.setUint32(F,A),F+=4);else if(A>>0===A)A>=-32?G[F++]=256+A:A>=-128?(G[F++]=208,G[F++]=A+256):A>=-32768?(G[F++]=209,ft.setInt16(F,A),F+=2):(G[F++]=210,ft.setInt32(F,A),F+=4);else{let X;if((X=this.useFloat32)>0&&A<4294967296&&A>=-2147483648){G[F++]=202,ft.setFloat32(F,A);let Z;if(X<4||(Z=A*nu[(G[F]&127)<<1|G[F+1]>>7])>>0===Z){F+=4;return}else F--}G[F++]=203,ft.setFloat64(F,A),F+=8}else if(W==="object"||W==="function")if(!A)G[F++]=192;else{if(s){let Z=s.get(A);if(Z){if(!Z.id){let pe=s.idsToInsert||(s.idsToInsert=[]);Z.id=pe.push(Z)}G[F++]=214,G[F++]=112,ft.setUint32(F,Z.id),F+=4;return}else s.set(A,{offset:F-t})}let X=A.constructor;if(X===Object)J(A);else if(X===Array)D(A);else if(X===Map)if(this.mapAsEmptyObject)G[F++]=128;else{$=A.size,$<16?G[F++]=128|$:$<65536?(G[F++]=222,G[F++]=$>>8,G[F++]=$&255):(G[F++]=223,ft.setUint32(F,$),F+=4);for(let[Z,pe]of A)M(Z),M(pe)}else{for(let Z=0,pe=Xa.length;Z<pe;Z++){let H=Mf[Z];if(A instanceof H){if(A.constructor!==H&&Z>=pe-OT&&a.useToJSON!==!1&&A.toJSON!==void 0&&A.toJSON!==NT&&!ArrayBuffer.isView(A))break;let q=Xa[Z];if(q.write){q.type&&(G[F++]=212,G[F++]=q.type,G[F++]=0);let Qe=q.write.call(this,A);Qe===A?Array.isArray(A)?D(A):J(A):M(Qe);return}let fe=G,re=ft,ve=F,Pe=_t;G=null;let Ue;try{Ue=q.pack.call(this,A,Qe=>(G=fe,fe=null,F+=Qe,F>Gt&&oe(F),{target:G,targetView:ft,position:F-Qe}),M)}finally{fe&&(G=fe,ft=re,F=ve,_t=Pe,Gt=G.length-10)}Ue&&(Ue.length+F>Gt&&oe(Ue.length+F),F=Yh(Ue,G,F,q.type));return}}if(Array.isArray(A))D(A);else{if(a.useToJSON!==!1&&A.toJSON){const Z=A.toJSON();if(Z!==A)return M(Z)}if(W==="function")return M(this.writeFunction&&this.writeFunction(A));J(A)}}}else if(W==="boolean")G[F++]=A?195:194;else if(W==="bigint"){if(A<9223372036854776e3&&A>=-9223372036854776e3)G[F++]=211,ft.setBigInt64(F,A);else if(A<18446744073709552e3&&A>0)G[F++]=207,ft.setBigUint64(F,A);else if(this.largeBigIntToFloat)G[F++]=203,ft.setFloat64(F,Number(A));else{if(this.largeBigIntToString)return M(A.toString());if(this.useBigIntExtension||this.moreTypes){let X=A<0?BigInt(-1):BigInt(0),Z;if(A>>BigInt(65536)===X){let pe=BigInt(18446744073709552e3)-BigInt(1),H=[];for(;H.push(A&pe),A>>BigInt(63)!==X;)A>>=BigInt(64);Z=new Uint8Array(new BigUint64Array(H).buffer),Z.reverse()}else{let pe=A<0,H=(pe?~A:A).toString(16);if(H.length%2?H="0"+H:parseInt(H.charAt(0),16)>=8&&(H="00"+H),_c)Z=Buffer.from(H,"hex");else{Z=new Uint8Array(H.length/2);for(let q=0;q<Z.length;q++)Z[q]=parseInt(H.slice(q*2,q*2+2),16)}if(pe)for(let q=0;q<Z.length;q++)Z[q]=~Z[q]}Z.length+F>Gt&&oe(Z.length+F),F=Yh(Z,G,F,66);return}else throw new RangeError(A+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}F+=8}else if(W==="undefined")this.encodeUndefinedAsNil?G[F++]=192:(G[F++]=212,G[F++]=0,G[F++]=0);else throw new Error("Unknown type: "+W)},y=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?A=>{let W;if(this.skipValues){W=[];for(let Z in A)(typeof A.hasOwnProperty!="function"||A.hasOwnProperty(Z))&&!this.skipValues.includes(A[Z])&&W.push(Z)}else W=Object.keys(A);let $=W.length;$<16?G[F++]=128|$:$<65536?(G[F++]=222,G[F++]=$>>8,G[F++]=$&255):(G[F++]=223,ft.setUint32(F,$),F+=4);let X;if(this.coercibleKeyAsNumber)for(let Z=0;Z<$;Z++){X=W[Z];let pe=Number(X);M(isNaN(pe)?X:pe),M(A[X])}else for(let Z=0;Z<$;Z++)M(X=W[Z]),M(A[X])}:A=>{G[F++]=222;let W=F-t;F+=2;let $=0;for(let X in A)(typeof A.hasOwnProperty!="function"||A.hasOwnProperty(X))&&(M(X),M(A[X]),$++);if($>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');G[W+++t]=$>>8,G[W+t]=$&255},L=this.useRecords===!1?y:e.progressiveRecords&&!u&&h>0?A=>{let W,$=r.transitions||(r.transitions=Object.create(null)),X=F++-t,Z;for(let pe in A)if(typeof A.hasOwnProperty!="function"||A.hasOwnProperty(pe)){if(W=$[pe],W)$=W;else{let H=Object.keys(A),q=$;$=r.transitions;let fe=0;for(let re=0,ve=H.length;re<ve;re++){let Pe=H[re];W=$[Pe],W||(W=$[Pe]=Object.create(null),fe++),$=W}X+t+1==F?(F--,se($,H,fe)):le($,H,X,fe),Z=!0,$=q[pe]}M(A[pe])}if(!Z){let pe=$[Xt];pe?G[X+t]=pe:le($,Object.keys(A),X,0)}}:A=>{let W,$=r.transitions||(r.transitions=Object.create(null)),X=0;for(let pe in A)(typeof A.hasOwnProperty!="function"||A.hasOwnProperty(pe))&&(W=$[pe],W||(W=$[pe]=Object.create(null),X++),$=W);let Z=$[Xt];if(Z)Z>=96&&u?(G[F++]=((Z-=96)&31)+96,G[F++]=Z>>5):G[F++]=Z;else if(se($,$.__keys__||Object.keys(A),X)===!1)return y(A);for(let pe in A)(typeof A.hasOwnProperty!="function"||A.hasOwnProperty(pe))&&M(A[pe])},ie=typeof this.useRecords=="function"&&this.useRecords,J=ie?A=>{ie(A)?L(A):y(A)}:L,ce=A=>{let W=a._writeStruct(A,G,t,F,r,oe,($,X,Z)=>{if(Z)return n=!0;F=X;let pe=G;return M($),T(),pe!==G?{position:F,targetView:ft,target:G}:F});if(W===0)return J(A);F=W},oe=A=>{let W;if(A>16777216){if(A-t>qh)throw new Error("Packed buffer would be larger than maximum buffer size");W=Math.min(qh,Math.round(Math.max((A-t)*(A>67108864?1.25:2),4194304)/4096)*4096)}else W=(Math.max(A-t<<2,G.length-1)>>12)+1<<12;let $=new _a(W);return ft=$.dataView||($.dataView=new DataView($.buffer,0,W)),A=Math.min(A,G.length),G.copy?G.copy($,0,t,A):$.set(G.slice(t,A)),F-=t,t=0,Gt=$.length-10,G=$},se=(A,W,$)=>{let X=r.nextId;if(X||(X=64),X<m&&(b&&this.saveStructures||this.shouldShareStructure&&!this.shouldShareStructure(W))){if(b&&this.saveStructures&&!(this.shouldShareStructure&&!this.shouldShareStructure(W))&&(v||(v=[])).push(W),!h)return!1;X=r.nextOwnId,X<g||(X=m),r.nextOwnId=X+1}else{if(X>=g){if(!h)return!1;X=m}r.nextId=X+1}let Z=W.highByte=X>=96&&u?X-96>>5:-1;A[Xt]=X,A.__keys__=W,r[X-64]=W,X<m?(W.isShared=!0,r.sharedLength=X-63,n=!0,Z>=0?(G[F++]=(X&31)+96,G[F++]=Z):G[F++]=X):(Z>=0?(G[F++]=213,G[F++]=114,G[F++]=(X&31)+96,G[F++]=Z):(G[F++]=212,G[F++]=114,G[F++]=X),$&&(p+=d*$),_.length>=h&&(_.shift()[Xt]=0),_.push(A),M(W))},le=(A,W,$,X)=>{let Z=G,pe=F,H=Gt,q=t;G=Ws,F=0,t=0,G||(Ws=G=new _a(8192)),Gt=G.length-10,se(A,W,X),Ws=G;let fe=F;if(G=Z,F=pe,Gt=H,t=q,fe>1){let re=F+fe-1;re>Gt&&oe(re);let ve=$+t;G.copyWithin(ve+fe,ve+1,F),G.set(Ws.slice(0,fe),ve),F=re}else G[$+t]=Ws[0]}}useBuffer(e){G=e,G.dataView||(G.dataView=new DataView(G.buffer,G.byteOffset,G.byteLength)),ft=G.dataView,F=0}set position(e){F=e}get position(){return F}clearSharedData(){this.structures&&(this.structures=[],this.lastNamedStructuresLength=0),this.typedStructs&&(this.typedStructs=[])}}const NT=Date.prototype.toJSON;Mf=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,Tm];Xa=[{pack(i,e,t){let n=i.getTime()/1e3;if((this.useTimestamp32||i.getMilliseconds()===0)&&n>=0&&n<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,n)}else if(n>0&&n<17179869184){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,i.getMilliseconds()*4e6+(n/4294967296>>0)),s.setUint32(o+4,n)}else if(isNaN(n)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,i.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(n)))}}},{pack(i,e,t){if(this.setAsEmptyObject)return e(0),t({});let n=Array.from(i),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(n)}},{pack(i,e,t){let{target:n,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(n[r++]=212,n[r++]=101,n[r++]=0);let s=[i.name,i.message,i.cause];typeof AggregateError=="function"&&i instanceof AggregateError&&s.push(i.errors),t(s)}},{pack(i,e,t){let{target:n,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(n[r++]=212,n[r++]=120,n[r++]=0),t([i.source,i.flags])}},{pack(i,e){this.moreTypes?fl(i,16,e):ul(i,e)}},{pack(i,e){let t=i.constructor;t!==Pm&&this.moreTypes?fl(i,Dm.indexOf(t.name),e):ul(i,e)}},{pack(i,e){this.moreTypes?fl(i,17,e):ul(i,e)}},{pack(i,e){let{target:t,position:n}=e(1);t[n]=193}}];const OT=Xa.length;function fl(i,e,t,n){let r=i.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,i.buffer||(i=new Uint8Array(i)),s.set(new Uint8Array(i.buffer,i.byteOffset,i.byteLength),o)}function ul(i,e){i.BYTES_PER_ELEMENT!==1&&(i=i.buffer?new Uint8Array(i.buffer,i.byteOffset,i.byteLength):new Uint8Array(i));let t=i.byteLength;var n,r;if(t<256){var{target:n,position:r}=e(t+2);n[r++]=196,n[r++]=t}else if(t<65536){var{target:n,position:r}=e(t+3);n[r++]=197,n[r++]=t>>8,n[r++]=t&255}else{var{target:n,position:r,targetView:s}=e(t+5);n[r++]=198,s.setUint32(r,t),r+=4}n.set(i,r)}function Yh(i,e,t,n){let r=i.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=n,e.set(i,t),t+=r,t}function FT(i,e){let t,n=e.length*6,r=i.length-n;for(;t=e.pop();){let s=t.offset,o=t.id;i.copyWithin(s+n,s,r),n-=6;let a=s+n;i[a++]=214,i[a++]=105,i[a++]=o>>24,i[a++]=o>>16&255,i[a++]=o>>8&255,i[a++]=o&255,r=s}return i}function jh(i,e,t){if(_t.length>0){ft.setUint32(_t.position+i,F+t-_t.position-i),_t.stringsPosition=F-i;let n=_t;_t=null,e(n[0]),e(n[1])}}function BT(i,e){return i.isCompatible=t=>{let n=!t||(e.lastNamedStructuresLength||0)===t.length;return n||e._mergeStructures(t),n},i}iu.SUPPORTS_STRUCT_HOOKS=!0;let Im=new iu({useRecords:!1});Im.pack;Im.pack;const kT=512,zT=1024,Da=2048,VT=9;class Kh{constructor(){E(this,"pending",new Uint8Array(0))}push(e){if(!e||e.byteLength===0)return[];const t=this.pending.byteLength===0?e:HT(this.pending,e),n=[];let r=0;for(;r<t.byteLength;){const s={offset:r};let o;try{o=et.number(t,s)}catch(c){if(t.byteLength-r<=VT)break;throw c}const a=s.offset+o;if(a>t.byteLength)break;n.push(t.subarray(s.offset,a)),r=a}return this.pending=r<t.byteLength?t.slice(r):new Uint8Array(0),n}}function HT(i,e){const t=new Uint8Array(i.byteLength+e.byteLength);return t.set(i,0),t.set(e,i.byteLength),t}class Zh{constructor(e){E(this,"wt");E(this,"url");E(this,"isOpen",!1);E(this,"events");E(this,"reader");E(this,"writer");E(this,"unreliableReader");E(this,"unreliableWriter");E(this,"lengthPrefixBuffer",new Uint8Array(9));E(this,"reliableReassembler",new Kh);E(this,"unreliableReassembler",new Kh);this.events=e}connect(e,t={}){this.url=e;const n=t.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(t.fingerprint)}]}||void 0;this.wt=new WebTransport(e,n),this.wt.ready.then(r=>{console.log("WebTransport ready!",r),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader();const s=this.wt.datagrams;this.unreliableWriter=(s.createWritable?s.createWritable():s.writable).getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(a=>{this.reader=a.value.readable.getReader(),this.writer=a.value.writable.getWriter(),this.sendSeatReservation(t.roomId,t.sessionId,t.reconnectionToken,t.skipHandshake),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(a=>{console.error("failed to read incoming stream",a),console.error("TODO: close the connection")})}).catch(r=>{console.log("WebTransport not ready!",r),this._close()}),this.wt.closed.then(r=>{console.log("WebTransport closed w/ success",r),this.events.onclose({code:r.closeCode,reason:r.reason})}).catch(r=>{console.log("WebTransport closed w/ error",r),this.events.onerror(r),this.events.onclose({code:r.closeCode,reason:r.reason})}).finally(()=>{this._close()})}send(e){this.writer.write(this.frame(e))}sendUnreliable(e){this.unreliableWriter.write(this.frame(e))}frame(e){const t=e instanceof Uint8Array?e:new Uint8Array(e),n=We.number(this.lengthPrefixBuffer,t.length,{offset:0}),r=new Uint8Array(n+t.length);return r.set(this.lengthPrefixBuffer.subarray(0,n),0),r.set(t,n),r}close(e,t){var n;this.isOpen=!1;try{const r=(n=this.wt)==null?void 0:n.close({closeCode:e,reason:t});r&&typeof r.catch=="function"&&r.catch(()=>{})}catch{}}readIncomingData(){return this.readLoop(this.reader,this.reliableReassembler,"reliable")}readIncomingUnreliableData(){return this.readLoop(this.unreliableReader,this.unreliableReassembler,"unreliable")}async readLoop(e,t,n){for(;this.isOpen;){let r;try{r=await e.read()}catch(s){await this.onChannelFailure(n,s);return}if(r.done||!r.value)return;for(const s of t.push(r.value))this.events.onmessage({data:s})}}async onChannelFailure(e,t){await new Promise(n=>setTimeout(n,0)),this.isOpen&&(console.error(`H3Transport: stopped reading the ${e} channel while the session was open`,t),this.close(Jt.ABNORMAL_CLOSURE,`h3 ${e} channel failed`))}sendSeatReservation(e,t,n,r){const s={offset:0},o=[];We.string(o,e,s),We.string(o,t,s),n&&We.string(o,n,s),r&&We.boolean(o,1,s),this.writer.write(new Uint8Array(o).buffer)}_close(){this.isOpen=!1}}function GT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var hl,Jh;function WT(){return Jh||(Jh=1,hl=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),hl}var $T=WT();const XT=GT($T),xa=globalThis.WebSocket||XT;let Qh=!1;class qT{constructor(e){E(this,"ws");E(this,"protocols");E(this,"events");this.events=e}send(e){this.ws.send(e)}sendUnreliable(e){Qh||(Qh=!0,console.warn('@colyseus/sdk: the WebSocket transport has no unreliable channel — sending `mode:"unreliable"` traffic reliably instead. Use @colyseus/h3-transport (WebTransport) for datagram delivery.')),this.send(e)}connect(e,t){if(typeof document<"u")this.ws=new xa(e,this.protocols);else try{this.ws=new xa(e,{headers:t,protocols:this.protocols})}catch{this.ws=new xa(e,this.protocols)}const n=this.ws;let r=!1,s=!1;const o=a=>{var c,l;s||(s=!0,(l=(c=this.events).onclose)==null||l.call(c,a))};n.binaryType="arraybuffer",n.onopen=a=>{var c,l;r=!0,(l=(c=this.events).onopen)==null||l.call(c,a)},n.onmessage=a=>{var c,l;return(l=(c=this.events).onmessage)==null?void 0:l.call(c,a)},n.onclose=o,n.onerror=a=>{var c,l;r||(n.onerror=null,setTimeout(()=>{n.onclose===o&&o({code:Jt.ABNORMAL_CLOSURE,reason:""})},0)),(l=(c=this.events).onerror)==null||l.call(c,a)}}close(e,t){try{e===Jt.MAY_TRY_RECONNECT&&this.events.onclose&&(this.ws.onclose=null,this.events.onclose({code:e,reason:t}))}finally{this.ws.close(e,t)}}get isOpen(){return this.ws.readyState===xa.OPEN}}const Js=[],Tf=typeof addEventListener=="function"&&typeof removeEventListener=="function";Tf&&addEventListener("offline",()=>{console.warn(`@colyseus/sdk: 🛑 Network offline. Closing ${Js.length} connection(s)`),Js.slice().forEach(i=>i())},!1);var _o;class Lm{constructor(e){E(this,"transport");E(this,"events",{});E(this,"url");E(this,"options");bt(this,_o,Tf?()=>this.close(Jt.MAY_TRY_RECONNECT):null);switch(e){case"h3":this.transport=new Zh(this.events);break;default:this.transport=new qT(this.events);break}}connect(e,t){if(Tf){const n=this.events.onopen;this.events.onopen=s=>{Js.push(Oe(this,_o)),n==null||n(s)};const r=this.events.onclose;this.events.onclose=s=>{const o=Js.indexOf(Oe(this,_o));o!==-1&&Js.splice(o,1),r==null||r(s)}}this.url=e,this.options=t,this.transport.connect(e,t)}send(e){this.transport.send(e)}sendUnreliable(e){this.transport.sendUnreliable(e)}reconnect(e){if(this.transport instanceof Zh){this.transport.connect(this.url,{...this.options,...e});return}const t=new URL(this.url);for(const n in e)t.searchParams.set(n,e[n]);this.transport.connect(t.toString(),this.options)}close(e,t){this.transport.close(e,t)}get isOpen(){return this.transport.isOpen}}_o=new WeakMap;const Um={};function Nm(i,e){Um[i]=e}function ed(i){const e=Um[i];if(!e)throw new Error("missing serializer: "+i);return e}const Om=()=>({emit(i,...e){let t=this.events[i]||[];for(let n=0,r=t.length;n<r;n++)t[n](...e)},events:{},on(i,e){var t;return(t=this.events[i])!=null&&t.push(e)||(this.events[i]=[e]),()=>{var n;this.events[i]=(n=this.events[i])==null?void 0:n.filter(r=>e!==r)}}}),Fm=new WeakMap;class YT{constructor(){E(this,"handlers",[])}register(e,t=!1){return this.handlers.push(e),this}invoke(...e){const t=this.handlers;let n=!1,r;for(let s=0,o=t.length;s<o;s++)try{t[s].apply(this,e)}catch(a){n||(n=!0,r=a)}if(n)throw r}invokeAsync(...e){return Promise.all(this.handlers.map(t=>t.apply(this,e)))}remove(e){let t=this.handlers.indexOf(e);t===-1&&(t=this.handlers.findIndex(n=>Fm.get(n)===e)),t!==-1&&(this.handlers=this.handlers.filter((n,r)=>r!==t))}clear(){this.handlers=[]}}function es(){const i=new YT;function e(t){return i.register(t,this===null)}return e.once=t=>{const n=function(...r){i.remove(n),t.apply(this,r)};Fm.set(n,t),i.register(n)},e.remove=t=>i.remove(t),e.invoke=(...t)=>i.invoke(...t),e.invokeAsync=(...t)=>i.invokeAsync(...t),e.clear=()=>i.clear(),e}class Bm{constructor(){E(this,"state");E(this,"decoder")}setState(e,t){this.decoder.root.refs.size>1&&typeof this.decoder.decodeResync=="function"?this.decoder.decodeResync(e,t):this.decoder.decode(e,t)}getState(){return this.state}patch(e,t){return this.decoder.decode(e,t)}teardown(){this.decoder.root.clearRefs()}handshake(e,t){this.state?(Ii.decode(e,t),this.decoder=new Ts(this.state)):(this.decoder=Ii.decode(e,t),this.state=this.decoder.state)}}function jT(){return{enabled:!0,retryCount:0,maxRetries:15,delay:100,minDelay:100,maxDelay:5e3,minUptime:5e3,backoff:KT,maxEnqueuedMessages:10,enqueuedMessages:[],isReconnecting:!1}}const KT=(i,e)=>Math.floor(Math.pow(2,i)*e);function dl(i,e){i.reconnection.enqueuedMessages.push({data:e}),i.reconnection.enqueuedMessages.length>i.reconnection.maxEnqueuedMessages&&i.reconnection.enqueuedMessages.shift()}function ZT(i,e){if(!e){const n=new Error("request rejected");return n.name="rejected",n.reason=i,n}const t=new Error((i==null?void 0:i.message)??"request failed");return i!=null&&i.name&&(t.name=i.name),(i==null?void 0:i.code)!==void 0&&(t.code=i.code),t}var xo,hs,ds,Yn,jn,ps,ii,km,zm,Vm,Hm;const Za=class Za{constructor(e,t){bt(this,ii);E(this,"roomId");E(this,"sessionId");E(this,"reconnectionToken");E(this,"name");E(this,"connection");E(this,"onStateChange",es());E(this,"onError",es());E(this,"onLeave",es());E(this,"onReconnect",es());E(this,"onDrop",es());E(this,"onJoin",es());E(this,"serializerId");E(this,"serializer");E(this,"reconnection",jT());E(this,"joinedAtTime",0);E(this,"clock",Sm);E(this,"onMessageHandlers",Om());E(this,"packr");E(this,"sharedBuffer");bt(this,xo,0);bt(this,hs);bt(this,ds,0);bt(this,Yn,new Map);bt(this,jn);bt(this,ps,0);E(this,"retryTimeout");E(this,"leaving",!1);E(this,"leaveCode");if(this.name=e,this.packr=new iu,this.sharedBuffer=new Uint8Array(8192),t){const n=new(ed("schema"));this.serializer=n;const r=new t;n.state=r,n.decoder=new Ts(r)}this.onLeave(()=>{this.removeAllListeners(),this.destroy()})}connect(e,t,n){var s;this.connection=new Lm(t.protocol),this.connection.events.onmessage=this.onMessageCallback.bind(this),this.connection.events.onclose=o=>{var a;if(Fr(this,ii,Vm).call(this,"connection closed before a response was received."),this.leaveCode===void 0){if(this.joinedAtTime===0){(a=console.warn)==null||a.call(console,`Room connection was closed unexpectedly (${o.code}): ${o.reason}`);try{this.onError.invoke(o.code,o.reason)}finally{this.leaving&&this.finish(Jt.CONSENTED)}return}if(o.code===Jt.NO_STATUS_RECEIVED||o.code===Jt.ABNORMAL_CLOSURE||o.code===Jt.GOING_AWAY||o.code===Jt.MAY_TRY_RECONNECT){if(this.leaving){this.finish(Jt.CONSENTED);return}try{this.onDrop.invoke(o.code,o.reason)}finally{this.handleReconnection(o.code,o.reason)}}else this.finish(o.code,o.reason)}},this.connection.events.onerror=o=>{this.onError.invoke(o.code,o.reason)};const r=((s=this.serializer)==null?void 0:s.getState())!==void 0;if(t.protocol==="h3"){const o=new URL(e);this.connection.connect(o.origin,{...t,skipHandshake:r})}else this.connection.connect(`${e}${r?"&skipHandshake=1":""}`,n)}leave(e=!0){return this.leaveCode!==void 0?Promise.resolve(this.leaveCode):new Promise(t=>{if(this.onLeave(n=>{Promise.resolve(n).then(t)}),!this.connection)this.finish(Jt.CONSENTED);else if(!e)this.connection.close();else if(this.leaving=!0,this.reconnection.isReconnecting)try{this.finish(Jt.CONSENTED)}finally{this.connection.close()}else this.connection.isOpen&&(this.sharedBuffer[0]=kt.LEAVE_ROOM,this.connection.send(this.sharedBuffer.subarray(0,1)))})}finish(e,t){this.leaveCode===void 0&&(this.leaveCode=e,clearTimeout(this.retryTimeout),this.reconnection.isReconnecting=!1,this.onLeave.invoke(e,t))}onMessage(e,t){return this.onMessageHandlers.on(this.getMessageHandlerKey(e),t)}ping(e){var t;(t=this.connection)!=null&&t.isOpen&&(Tt(this,xo,Bn()),Tt(this,hs,e),this.sharedBuffer[0]=kt.PING,this.connection.send(this.sharedBuffer.subarray(0,1)))}send(e,t,n){if(n!==void 0){this.request(e,t).then(a=>n(a,void 0),a=>n(void 0,a));return}const r={offset:1};this.sharedBuffer[0]=kt.ROOM_DATA,typeof e=="string"?We.string(this.sharedBuffer,e,r):We.number(this.sharedBuffer,e,r);const s=r.offset;let o;t!==void 0?(o=this.packr.pack(t,Da|s),o.set(this.sharedBuffer.subarray(0,s),0)):o=this.sharedBuffer.subarray(0,s),this.connection.isOpen?this.connection.send(o):dl(this,new Uint8Array(o))}request(e,t,n){if(!this.connection.isOpen)return Promise.reject(new Error(`cannot send request "${e}": connection is not open.`));const r=(n==null?void 0:n.timeout)??Za.defaultRequestTimeout;return new Promise((s,o)=>{let a;const c=this.sendRequest(e,t,{mode:n==null?void 0:n.mode},(l,f,h)=>{clearTimeout(a),l?s(f):o(ZT(f,h))},l=>{clearTimeout(a),o(new Error(l))});a=setTimeout(()=>{this.cancelRequest(c),o(new Error(`request "${e}" timed out after ${r}ms.`))},r)})}sendRequest(e,t,n,r,s){const o=Fr(this,ii,km).call(this),a=Fr(this,ii,zm).call(this,o,e,t);if(n.mode==="unreliable"){if(!this.connection.isOpen)return-1;this.connection.sendUnreliable(a)}else this.connection.isOpen?this.connection.send(a):dl(this,new Uint8Array(a));return Oe(this,Yn).set(o,{onReply:r,onClose:s}),o}cancelRequest(e){Oe(this,Yn).delete(e)}sendUnreliable(e,t){if(!this.connection.isOpen)return;const n={offset:1};this.sharedBuffer[0]=kt.ROOM_DATA,typeof e=="string"?We.string(this.sharedBuffer,e,n):We.number(this.sharedBuffer,e,n);const r=n.offset;let s;t!==void 0?(s=this.packr.pack(t,Da|r),s.set(this.sharedBuffer.subarray(0,r),0)):s=this.sharedBuffer.subarray(0,r),this.connection.sendUnreliable(s)}sendBytes(e,t){const n={offset:1};this.sharedBuffer[0]=kt.ROOM_DATA_BYTES,typeof e=="string"?We.string(this.sharedBuffer,e,n):We.number(this.sharedBuffer,e,n);const r=n.offset;if(r+t.byteLength>this.sharedBuffer.byteLength){const s=new Uint8Array(r+t.byteLength);s.set(this.sharedBuffer.subarray(0,r)),this.sharedBuffer=s}this.sharedBuffer.set(t,r),this.connection.isOpen?this.connection.send(this.sharedBuffer.subarray(0,r+t.byteLength)):dl(this,this.sharedBuffer.subarray(0,r+t.byteLength))}input(e){return(Oe(this,jn)??Tt(this,jn,new cl(this))).handle(e)}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onReconnect.clear(),this.onDrop.clear(),this.onMessageHandlers.events={},this.serializer instanceof Bm&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(e){this.leaveCode===void 0&&Fr(this,ii,Hm).call(this,new Uint8Array(e.data))}dispatchMessage(e,t){var r;const n=this.getMessageHandlerKey(e);this.onMessageHandlers.events[n]?this.onMessageHandlers.emit(n,t):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",e,t):n.startsWith("__")||(r=console.warn)==null||r.call(console,`@colyseus/sdk: onMessage() not registered for type '${e}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(e){switch(typeof e){case"string":return e;case"number":return`i${e}`;default:throw new Error("invalid message type.")}}handleReconnection(e,t){var n;if(this.leaving){this.finish(Jt.CONSENTED);return}if(!this.reconnection.enabled){this.finish(e,t);return}if(Date.now()-this.joinedAtTime<this.reconnection.minUptime){console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} Room has not been up for long enough for automatic reconnection. (min uptime: ${this.reconnection.minUptime}ms)`),this.finish(Jt.ABNORMAL_CLOSURE,"Room uptime too short for reconnection.");return}this.reconnection.isReconnecting||(this.reconnection.retryCount=0,this.reconnection.isReconnecting=!0,(n=Oe(this,jn))==null||n.reset()),this.retryReconnection()}retryReconnection(){if(this.reconnection.retryCount>=this.reconnection.maxRetries){console.info(`[Colyseus reconnection]: ${String.fromCodePoint(10060)} ❌ Reconnection failed after ${this.reconnection.maxRetries} attempts.`),this.finish(Jt.FAILED_TO_RECONNECT,"No more retries. Reconnection failed.");return}this.reconnection.retryCount++;const e=Math.min(this.reconnection.maxDelay,Math.max(this.reconnection.minDelay,this.reconnection.backoff(this.reconnection.retryCount,this.reconnection.delay)));console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9203)} will retry in ${(e/1e3).toFixed(1)} seconds...`),this.retryTimeout=setTimeout(()=>{try{console.info(`[Colyseus reconnection]: ${String.fromCodePoint(128260)} Re-establishing sessionId '${this.sessionId}' with roomId '${this.roomId}'... (attempt ${this.reconnection.retryCount} of ${this.reconnection.maxRetries})`),this.connection.reconnect({reconnectionToken:this.reconnectionToken.split(":")[1],skipHandshake:!0})}catch{this.retryReconnection()}},e)}};xo=new WeakMap,hs=new WeakMap,ds=new WeakMap,Yn=new WeakMap,jn=new WeakMap,ps=new WeakMap,ii=new WeakSet,km=function(){const e=Oe(this,ds);return Tt(this,ds,Oe(this,ds)+1>>>0),e},zm=function(e,t,n){const r={offset:1};this.sharedBuffer[0]=kt.ROOM_REQUEST,We.number(this.sharedBuffer,e,r),typeof t=="string"?We.string(this.sharedBuffer,t,r):We.number(this.sharedBuffer,t,r);const s=r.offset;if(n!==void 0){const o=this.packr.pack(n,Da|s);return o.set(this.sharedBuffer.subarray(0,s),0),o}return this.sharedBuffer.subarray(0,s)},Vm=function(e){var t;if(Oe(this,Yn).size!==0){for(const n of Oe(this,Yn).values())(t=n.onClose)==null||t.call(n,e);Oe(this,Yn).clear()}},Hm=function(e){var s,o,a,c;const t={offset:1},n=e[0],r=n&PS;if(n&df.TIMED){const l=et.uint32(e,t),f=et.uint32(e,t),h=Oe(this,jn)?Oe(this,jn).ackInput(f):-1;this.clock.sample(l,h)}if(r===kt.JOIN_ROOM){const l=et.utf8Read(e,t,e[t.offset++]);if(this.serializerId=et.utf8Read(e,t,e[t.offset++]),!this.serializer){const u=ed(this.serializerId);this.serializer=new u}const f=et.number(e,t);if(f>0&&this.serializer.handshake){const u=t.offset+f;this.serializer.handshake(e.subarray(0,u),t),t.offset=u}for(;t.offset<e.byteLength;){const u=e[t.offset++],m=et.number(e,t),g=t.offset+m;u===yh.INPUT_REFLECTION?(Oe(this,jn)??Tt(this,jn,new cl(this))).applyReflection(e,t,g):u===yh.INPUT_OPTIONS&&(Oe(this,jn)??Tt(this,jn,new cl(this))).applyOptions(e,t),t.offset=g}const h=(s=Oe(this,jn))==null?void 0:s.patchRate;h!==void 0&&((a=(o=this.clock).setPatchInterval)==null||a.call(o,h));try{this.joinedAtTime===0?(this.joinedAtTime=Date.now(),this.onJoin.invoke()):(console.info(`[Colyseus reconnection]: ${String.fromCodePoint(9989)} reconnection successful!`),this.reconnection.isReconnecting=!1,this.onReconnect.invoke())}finally{if(this.reconnectionToken=`${this.roomId}:${l}`,this.sharedBuffer[0]=kt.JOIN_ROOM,this.connection.send(this.sharedBuffer.subarray(0,1)),this.reconnection.enqueuedMessages.length>0){for(const u of this.reconnection.enqueuedMessages)this.connection.send(u.data);this.reconnection.enqueuedMessages=[]}this.leaving&&this.leave()}}else if(r===kt.ERROR){const l=et.number(e,t),f=et.string(e,t);this.onError.invoke(l,f)}else if(r===kt.LEAVE_ROOM)this.leave();else if(r===kt.ROOM_STATE)Tt(this,ps,0),this.serializer.setState(e,t),this.onStateChange.invoke(this.serializer.getState());else if(r===kt.ROOM_STATE_PATCH){if(n&df.UNRELIABLE){const l=et.uint16(e,t);if(l-Oe(this,ps)<<16>>16<=0)return;Tt(this,ps,l)}this.serializer.patch(e,t),this.onStateChange.invoke(this.serializer.getState())}else if(r===kt.ROOM_DATA){const l=et.stringCheck(e,t)?et.string(e,t):et.number(e,t),f=e.byteLength>t.offset?Xh(e,{start:t.offset}):void 0;this.dispatchMessage(l,f)}else if(r===kt.ROOM_DATA_BYTES){const l=et.stringCheck(e,t)?et.string(e,t):et.number(e,t);this.dispatchMessage(l,e.subarray(t.offset))}else if(r===kt.ROOM_RESPONSE){const l=et.number(e,t),f=e[t.offset++],h=e.byteLength>t.offset?Xh(e,{start:t.offset}):void 0,u=Oe(this,Yn).get(l);u!==void 0&&(Oe(this,Yn).delete(l),u.onReply(f===xh.OK,h,f===xh.ERROR))}else r===kt.PING&&((c=Oe(this,hs))==null||c.call(this,Math.round(Bn()-Oe(this,xo))),Tt(this,hs,void 0))},E(Za,"defaultRequestTimeout",1e4);let wf=Za;function JT(i,e){return new Promise((t,n)=>{const r=new XMLHttpRequest,s=(e==null?void 0:e.method)||"GET";r.open(s,i.toString()),r.withCredentials=(e==null?void 0:e.credentials)==="include",e!=null&&e.headers&&(e.headers instanceof Headers?e.headers:new Headers(e.headers)).forEach((a,c)=>{r.setRequestHeader(c,a)}),r.onload=()=>{const o=new Headers,a=r.getAllResponseHeaders().trim();if(a)for(const l of a.split(/[\r\n]+/)){const f=l.indexOf(": ");f>0&&o.append(l.substring(0,f),l.substring(f+2))}const c=r.response??r.responseText;t(new QT(c,{status:r.status,statusText:r.statusText,headers:o}))},r.onerror=()=>n(new TypeError("Network request failed")),r.ontimeout=()=>n(new TypeError("Network request timed out")),r.send((e==null?void 0:e.body)??null)})}class QT{constructor(e,t){E(this,"status");E(this,"statusText");E(this,"headers");E(this,"ok");E(this,"body");this.body=e,this.status=t.status,this.statusText=t.statusText,this.headers=t.headers,this.ok=t.status>=200&&t.status<300}async json(){return typeof this.body=="string"?JSON.parse(this.body):this.body}async text(){return typeof this.body=="string"?this.body:JSON.stringify(this.body)}async blob(){return new Blob([this.body])}}function ew(i){if(i===void 0)return!1;const e=typeof i;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(i)?!0:i.buffer?!1:i.constructor&&i.constructor.name==="Object"||typeof i.toJSON=="function"}function tw(i,e){const{params:t,query:n}=e||{},[r,s]=i.split("?");let o=r;if(t)if(Array.isArray(t)){const l=o.split("/").filter(f=>f.startsWith(":"));for(const[f,h]of l.entries()){const u=t[f];o=o.replace(h,u)}}else for(const[l,f]of Object.entries(t))o=o.replace(`:${l}`,String(f));const a=new URLSearchParams(s);if(n)for(const[l,f]of Object.entries(n))f!=null&&a.set(l,String(f));let c=a.toString();return c=c.length>0?`?${c}`.replace(/\+/g,"%20"):"",`${o}${c}`}class nw{constructor(e,t,n){E(this,"authToken");E(this,"options");E(this,"sdk");E(this,"_fetchFn");E(this,"del",this.delete);this.sdk=e,this.options=t,this._fetchFn=n}get fetchFn(){return this._fetchFn||(this._fetchFn=typeof globalThis.fetch<"u"?globalThis.fetch.bind(globalThis):JT),this._fetchFn}async request(e,t,n){return this.executeRequest(e,t,n)}get(e,t){return this.request("GET",e,t)}post(e,t){return this.request("POST",e,t)}delete(e,t){return this.request("DELETE",e,t)}patch(e,t){return this.request("PATCH",e,t)}put(e,t){return this.request("PUT",e,t)}async executeRequest(e,t,n){var m;let r=this.options.body?{...this.options.body,...(n==null?void 0:n.body)||{}}:n==null?void 0:n.body;const s=this.options.query?{...this.options.query,...(n==null?void 0:n.query)||{}}:n==null?void 0:n.query,o=this.options.params?{...this.options.params,...(n==null?void 0:n.params)||{}}:n==null?void 0:n.params,a=new Headers(this.options.headers?{...this.options.headers,...(n==null?void 0:n.headers)||{}}:n==null?void 0:n.headers);if(this.authToken&&!a.has("authorization")&&a.set("authorization",`Bearer ${this.authToken}`),ew(r)&&typeof r=="object"&&r!==null){a.has("content-type")||a.set("content-type","application/json");for(const[g,_]of Object.entries(r))_ instanceof Date&&(r[g]=_.toISOString());r=JSON.stringify(r)}const c={credentials:(n==null?void 0:n.credentials)||"include",...this.options,...n,query:s,params:o,headers:a,body:r,method:e},l=tw(this.sdk.getHttpEndpoint(t.toString()),c);let f;try{f=await this.fetchFn(l,c)}catch(g){if(g.name==="AbortError")throw g;const _=new js(((m=g.cause)==null?void 0:m.code)||g.code,g.message);throw _.response=f,_.cause=g.cause,_}const h=f.headers.get("content-type");let u;if(h!=null&&h.includes("json")?u=await f.json():h!=null&&h.includes("text")?u=await f.text():u=await f.blob(),!f.ok)throw new js(f.status,u.message??u.error??f.statusText,{headers:f.headers,status:f.status,response:f,data:u});return{raw:f,data:u,headers:f.headers,status:f.status,statusText:f.statusText}}}let dr;function ru(){if(!dr)try{dr=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!dr&&typeof globalThis.indexedDB<"u"&&(dr=new ow),dr||(dr={cache:{},setItem:function(i,e){this.cache[i]=e},getItem:function(i){return this.cache[i]},removeItem:function(i){delete this.cache[i]}}),dr}function iw(i,e){Gm(()=>ru().setItem(i,e))}function rw(i){Gm(()=>ru().removeItem(i))}function sw(i,e){const t=ru().getItem(i);typeof Promise>"u"||!(t instanceof Promise)?e(t):t.then(n=>e(n),Wm)}function Gm(i){try{const e=i();e instanceof Promise&&e.catch(Wm)}catch{}}function Wm(){}class ow{constructor(){E(this,"dbPromise",new Promise((e,t)=>{const n=indexedDB.open("_colyseus_storage",1);n.onupgradeneeded=()=>n.result.createObjectStore("store"),n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}))}async tx(e,t){const r=(await this.dbPromise).transaction("store",e).objectStore("store");return t(r)}setItem(e,t){return this.tx("readwrite",n=>n.put(t,e)).then()}async getItem(e){const t=await this.tx("readonly",n=>n.get(e));return new Promise((n,r)=>{t.onsuccess=()=>n(t.result),t.onerror=()=>r(t.error)})}removeItem(e){return this.tx("readwrite",t=>t.delete(e)).then()}}var yo,gi,vo;class aw{constructor(e){E(this,"settings",{path:"/auth",key:"colyseus-auth-token"});bt(this,yo,!1);bt(this,gi,null);bt(this,vo,Om());E(this,"http");this.http=e,sw(this.settings.key,t=>this.token=t)}set token(e){this.http.authToken=e}get token(){return this.http.authToken}onChange(e){const t=Oe(this,vo).on("change",e);return Oe(this,yo)||this.getUserData().then(n=>{this.emitChange({...n,token:this.token})}).catch(n=>{this.emitChange({user:null,token:void 0})}),Tt(this,yo,!0),t}async getUserData(){if(this.token)return(await this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")}async registerWithEmailAndPassword(e,t,n){const r=(await this.http.post(`${this.settings.path}/register`,{body:{email:e,password:t,options:n}})).data;return this.emitChange(r),r}async signInWithEmailAndPassword(e,t){const n=(await this.http.post(`${this.settings.path}/login`,{body:{email:e,password:t}})).data;return this.emitChange(n),n}async signInAnonymously(e){const t=(await this.http.post(`${this.settings.path}/anonymous`,{body:{options:e}})).data;return this.emitChange(t),t}async sendPasswordResetEmail(e){return(await this.http.post(`${this.settings.path}/forgot-password`,{body:{email:e}})).data}async signInWithProvider(e,t={}){return new Promise((n,r)=>{const s=t.width||480,o=t.height||768,a=this.token?`?token=${this.token}`:"",c=`Login with ${e[0].toUpperCase()+e.substring(1)}`,l=this.http.sdk.getHttpEndpoint(`${t.prefix||`${this.settings.path}/provider`}/${e}${a}`),f=screen.width/2-s/2,h=screen.height/2-o/2;Tt(this,gi,window.open(l,c,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+s+", height="+o+", top="+h+", left="+f));const u=g=>{var _;if(!(g.data.user===void 0&&g.data.token===void 0))if(clearInterval(m),(_=Oe(this,gi))==null||_.close(),Tt(this,gi,null),window.removeEventListener("message",u),g.data.error!==void 0){const p=new Error(String(g.data.error));p.code=g.data.error,g.data.reason!==void 0&&(p.reason=g.data.reason),g.data.until!==void 0&&(p.until=g.data.until),r(p)}else n(g.data),this.emitChange(g.data)},m=setInterval(()=>{(!Oe(this,gi)||Oe(this,gi).closed)&&(Tt(this,gi,null),r("cancelled"),window.removeEventListener("message",u))},200);window.addEventListener("message",u)})}async signOut(){this.emitChange({user:null,token:null})}emitChange(e){e.token!==void 0&&(this.token=e.token,e.token===null?rw(this.settings.key):iw(this.settings.key,e.token)),Oe(this,vo).emit("change",e)}}yo=new WeakMap,gi=new WeakMap,vo=new WeakMap;function cw(i){var r;const e=((r=window==null?void 0:window.location)==null?void 0:r.hostname)||"localhost",t=i.hostname.split("."),n=!i.hostname.includes("trycloudflare.com")&&!i.hostname.includes("discordsays.com")&&t.length>2?`/${t[0]}`:"";return i.pathname.startsWith("/.proxy")?`${i.protocol}//${e}${n}${i.pathname}${i.search}`:`${i.protocol}//${e}/.proxy/colyseus${n}${i.pathname}${i.search}`}var Xd;const td=typeof window<"u"&&typeof((Xd=window==null?void 0:window.location)==null?void 0:Xd.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567",Ja=class Ja{constructor(e=td,t){E(this,"http");E(this,"auth");E(this,"settings");E(this,"urlBuilder");var n,r;if(typeof e=="string"){const s=e.startsWith("/")?new URL(e,td):new URL(e),o=s.protocol==="https:"||s.protocol==="wss:",a=Number(s.port||(o?443:80));this.settings={hostname:s.hostname,pathname:s.pathname,port:a,secure:o,searchParams:s.searchParams.toString()||void 0}}else e.port===void 0&&(e.port=e.secure?443:80),e.pathname===void 0&&(e.pathname=""),this.settings=e;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),t!=null&&t.protocol&&(this.settings.protocol=t.protocol),this.http=new nw(this,{headers:(t==null?void 0:t.headers)||{}},t==null?void 0:t.fetchFn),this.auth=new aw(this.http),this.urlBuilder=t==null?void 0:t.urlBuilder,!this.urlBuilder&&typeof window<"u"&&((r=(n=window==null?void 0:window.location)==null?void 0:n.hostname)!=null&&r.includes("discordsays.com"))&&(this.urlBuilder=cw,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}static async selectByLatency(e,t,n={}){const r=e.map(o=>new Ja(o,t)),s=(await Promise.allSettled(r.map((o,a)=>o.getLatency(n).then(c=>{const l=r[a].settings;return console.log(`🛜 Endpoint Latency: ${c}ms - ${l.hostname}:${l.port}${l.pathname}`),[a,c]})))).filter(o=>o.status==="fulfilled").map(o=>o.value);if(s.length===0)throw new Error("All endpoints failed to respond");return r[s.sort((o,a)=>o[1]-a[1])[0][0]]}async joinOrCreate(e,t={},n){return await this.createMatchMakeRequest("joinOrCreate",e,t,n)}async create(e,t={},n){return await this.createMatchMakeRequest("create",e,t,n)}async join(e,t={},n){return await this.createMatchMakeRequest("join",e,t,n)}async joinById(e,t={},n){return await this.createMatchMakeRequest("joinById",e,t,n)}async reconnect(e,t){if(typeof e=="string"&&typeof t=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[n,r]=e.split(":");if(!n||!r)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return await this.createMatchMakeRequest("reconnect",n,{reconnectionToken:r},t)}async consumeSeatReservation(e,t){const n=this.createRoom(e.name,t);n.roomId=e.roomId,n.sessionId=e.sessionId;const r={sessionId:n.sessionId};return e.reconnectionToken&&(r.reconnectionToken=e.reconnectionToken),n.connect(this.buildEndpoint(e,r),{...e,protocol:this.settings.protocol},this.http.options.headers),new Promise((s,o)=>{const a=(c,l)=>o(new js(c,l));n.onError.once(a),n.onJoin.once(()=>{n.onError.remove(a),vT("room",n),s(n)})})}getLatency(e={}){const t=e.protocol??"ws",n=e.pingCount??1,r=e.timeout??1500;return new Promise((s,o)=>{const a=new Lm(t),c=[];let l=0,f=!1,h;const u=g=>{if(!f){f=!0,clearTimeout(h);try{a.close()}catch{}g()}},m=g=>u(()=>o(new js(Jt.ABNORMAL_CLOSURE,`Failed to get latency: ${g}`)));h=setTimeout(()=>m(`timed out after ${r}ms`),r),a.events.onopen=()=>{l=Date.now(),a.send(new Uint8Array([kt.PING]))},a.events.onmessage=g=>{if(c.push(Date.now()-l),c.length<n)l=Date.now(),a.send(new Uint8Array([kt.PING]));else{const _=c.reduce((p,d)=>p+d,0)/c.length;u(()=>s(_))}},a.events.onclose=g=>m(`connection closed${g!=null&&g.code?` (${g.code})`:""}${g!=null&&g.reason?`: ${g.reason}`:""}`),a.events.onerror=g=>m(g.message);try{a.connect(this.getHttpEndpoint())}catch(g){m((g==null?void 0:g.message)??"failed to connect")}})}async createMatchMakeRequest(e,t,n={},r){var s;try{if(!t)throw new Error("Must provide a room name");const a=(await this.http.post(`/matchmake/${e}/${t}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:n})).data;return e==="reconnect"&&(a.reconnectionToken=n.reconnectionToken),await this.consumeSeatReservation(a,r)}catch(o){if(o instanceof js){const a=typeof((s=o.data)==null?void 0:s.code)=="number"?o.data.code:o.code;throw new Gf(o.message,a)}throw o}}createRoom(e,t){return new wf(e,t)}buildEndpoint(e,t={}){let n=this.settings.protocol||"ws",r=this.settings.searchParams||"";this.http.authToken&&(t._authToken=this.http.authToken);for(const a in t)t.hasOwnProperty(a)&&(r+=(r?"&":"")+`${a}=${t[a]}`);n==="h3"&&(n="http");let s=this.settings.secure?`${n}s://`:`${n}://`;e.publicAddress?s+=`${e.publicAddress}`:s+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const o=`${s}/${e.processId}/${e.roomId}?${r}`;return this.urlBuilder?this.urlBuilder(new URL(o)):o}getHttpEndpoint(e=""){const t=e.startsWith("/")?e:`/${e}`;let n=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${t}`;return this.settings.searchParams&&(n+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(n)):n}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};E(Ja,"VERSION","0.18");let bf=Ja;const lw=bf;class fw{setState(e){}getState(){return null}patch(e){}teardown(){}handshake(e){}}Nm("schema",Bm);Nm("none",fw);const uw=["echo","chime","hum","melody","beacon","automaton","knock","crumble","ring","door","relic","exit-open","caught","phase"],nd=8e3;function $m(){let i=-1,e=0;return t=>{const n=t-i;e+=i<0||n>250?0:n,i=t;let r=0;for(;e>=yl;)e-=yl,r++;return r}}function id(i,e,t){return Promise.race([i,new Promise((n,r)=>setTimeout(()=>r(new Error(`${t} timed out`)),e))])}async function hw(i){var n,r;const e=new lw(i),t=await id(e.joinOrCreate("resonance_room"),nd,"join");try{(r=(n=t.state)==null?void 0:n.explorers)!=null&&r.get(t.sessionId)||await id(pg(t),nd,"first state");const s=t.state;if(!s.explorers.get(t.sessionId))throw new Error("explorer missing after join");const o=t.input(),a=$m(),c=[],l=g=>c.forEach(_=>_(g));for(const g of uw)t.onMessage(g,_=>{g!=="phase"&&l({type:g,..._})});_T.get(t).listen("phase",g=>{(g==="EXTRACTED"||g==="DEFEATED")&&l({type:"phase",phase:g,by:""})});let f=!1,h=null;const u=g=>{f||(f=!0,h==null||h(g))};t.onLeave(g=>u(`connection closed (${g})`)),t.onError((g,_)=>u(_||(g?`error ${g}`:"connection error")));const m=(g,_)=>t.request(g,_).then(()=>null,p=>{var d;return String(((d=p==null?void 0:p.reason)==null?void 0:d.code)??(p==null?void 0:p.message)??"ERROR")});return{mode:"ONLINE",selfId:t.sessionId,world:s,frame(g,_){if(!f)for(let p=a(g);p>0;p--)Object.assign(o.data,_),o.send()},automatons(){var _;const g=[];return(_=s.automatons)==null||_.forEach((p,d)=>g.push({id:d,x:p.x,y:p.y,heading:p.heading,hunting:p.hunting})),g},clap:()=>m("clap"),knock:()=>m("knock"),ring:g=>m("ring",{tone:g}),onEvent:g=>{c.push(g)},onDisconnect:g=>{h=g},leave:()=>{f=!0,t.leave()}}}catch(s){throw t.leave(),s}}function Af(){const i="solo",e=xg(Sc()),t=yg(e,Sc(),2),n={};s0(n,e,0);const r={world:{phase:"PLAYING",tick:0,relicsRemaining:t.relics.length,doorProgress:0,exitOpen:!1,exitX:0,exitY:0,explorers:new Map([[i,n]]),automatons:new Map(r0(t).map(({id:l,...f})=>[l,f])),relics:new Map},hidden:i0(e,t,Sc()),newRelic:()=>({x:0,y:0,tone:0,by:""})},s=[],o=l=>{for(const{to:f,...h}of l)(f==="*"||f===i)&&s.forEach(u=>u(h))},a=l=>typeof l=="string"?Promise.resolve(l):(o(l),Promise.resolve(null)),c=$m();return{mode:"OFFLINE",selfId:i,world:r.world,frame(l,f){for(let h=c(l);h>0;h--){let u=!1;o(x0(r,yl/1e3,()=>u?void 0:(u=!0,f)))}},automatons(){const l=[];return r.world.automatons.forEach((f,h)=>{_0(r,i,h)&&l.push({id:h,...f})}),l},clap:()=>a(u0(r,i)),knock:()=>a(h0(r,i)),ring:l=>a(d0(r,i,l)),onEvent:l=>{s.push(l)},onDisconnect:()=>{},leave:()=>{}}}const Nt=i=>document.getElementById(i),pl=Nt("sr-polite"),rd=Nt("sr-assertive"),ml=Nt("captions"),Xm=Nt("status-phase"),dw=Nt("status-relics"),pw=Nt("status-surface"),mw=Nt("hud-noise"),gw=Nt("hud-clap"),qm=Nt("btn-blind"),Ym=Nt("btn-sneak"),co=Nt("help-dialog"),Rf=Nt("end-dialog"),Qn=Nt("game-canvas"),mt=new y0,Qt=new DS(Qn);function ut(i,e=!1){if(e)rd.textContent="",window.setTimeout(()=>{rd.textContent=i},40);else{const n=document.createElement("p");for(n.textContent=i,pl.append(n);pl.childElementCount>6;)pl.firstElementChild.remove()}const t=document.createElement("p");for(t.textContent=i,e&&(t.className="is-urgent"),ml.append(t);ml.childElementCount>3;)ml.firstElementChild.remove();window.setTimeout(()=>t.remove(),7e3)}const qi=(i,e)=>{i.textContent!==e&&(i.textContent=e)},_w=["ahead","ahead right","right","behind right","behind","behind left","left","ahead left"],xw=["east","south-east","south","south-west","west","north-west","north","north-east"];function ts(i,e){const t=bi(i-e);return _w[(Math.round(t/(Math.PI/4))+8)%8]}const jm=i=>xw[(Math.round(i/(Math.PI/4))+8)%8];function is(i){return i<=80?"very close":i<=200?"close":i<=400?"mid range":"far"}const sd=i=>`${Math.max(1,Math.round(i/40))} paces`,ls=["low bell","middle bell","high bell"],yw=["low","middle","high"],Km=["Stone floor","Shallow water: footsteps carry much farther","Loose gravel: footsteps carry farther"];let Et=0,Cf=0;const vw=2.4,bn=new Set,qa={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",KeyD:"right",ArrowLeft:"turnL",ArrowRight:"turnR"};let xc=!1,yc=!1;function Ew(){const i=(bn.has("fwd")?1:0)-(bn.has("back")?1:0),e=(bn.has("right")?1:0)-(bn.has("left")?1:0);let t=i*Math.cos(Et)-e*Math.sin(Et),n=i*Math.sin(Et)+e*Math.cos(Et);const r=Math.hypot(t,n);return r>1&&(t/=r,n/=r),{dx:t,dy:n,sneak:xc||yc,facing:Et}}function od(i){Et=bi((Math.round(Et/(Math.PI/4))+i)*(Math.PI/4)),ut(`Facing ${jm(Et)}.`),Tn(10)}for(const i of document.querySelectorAll("[data-control]")){const e=i.dataset.control,t=()=>{bn.delete(e),i.classList.remove("is-held")};i.addEventListener("pointerdown",n=>{mt.unlock(),i.setPointerCapture(n.pointerId),bn.add(e),i.classList.add("is-held")}),i.addEventListener("pointerup",t),i.addEventListener("pointercancel",t),i.addEventListener("lostpointercapture",t),i.addEventListener("contextmenu",n=>n.preventDefault()),i.addEventListener("keydown",n=>{n.key!=="Enter"&&n.key!==" "||(n.preventDefault(),n.stopPropagation(),bn.add(e))}),i.addEventListener("keyup",n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),n.stopPropagation(),t())}),i.addEventListener("blur",t)}let Qs=null;Qn.addEventListener("pointerdown",i=>{var e;mt.unlock(),i.pointerType==="mouse"?(e=Qn.requestPointerLock)==null||e.call(Qn):(Qs=i.clientX,Qn.setPointerCapture(i.pointerId))});Qn.addEventListener("pointermove",i=>{document.pointerLockElement===Qn?(Et=bi(Et+i.movementX*.0025),Cf=Math.max(-1.1,Math.min(1.1,Cf-i.movementY*.0025))):Qs!==null&&(Et=bi(Et+(i.clientX-Qs)*.006),Qs=i.clientX)});const Zm=()=>{Qs=null};Qn.addEventListener("pointerup",Zm);Qn.addEventListener("pointercancel",Zm);function Jm(i){xc=i,Ym.setAttribute("aria-pressed",String(i)),ut(i?"Sneaking: slow and quiet.":"Walking."),Tn(20)}function Qm(i){Qt.blind=i,document.body.classList.toggle("is-blind",i),qm.setAttribute("aria-pressed",String(i)),ut(i?"Blind mode on. The screen is black; every cue is spoken and heard.":"Blind mode off. Echo view visible.",!0)}let Ct,ad=-1,gl=0,cd=0,ld=0,_l={x:0,y:0},Df="",Ya="",ja="",Sw=0,Mw=0,fd=0,ud=performance.now(),nr=!1;const hd=new Map;function No(){return Ct.world.explorers.get(Ct.selfId)}function Tw(){const i=[];return Ct.world.relics.forEach(e=>{e.by===Ct.selfId&&i.push(ls[e.tone]??"bell")}),i.length?`You carry the ${i.join(" and the ")}.`:"You carry no bells."}function eg(){const i=No(),e=Ct.world,t=[`${3-e.relicsRemaining} of 3 bells recovered.`,Tw()];return e.exitOpen?t.push("The door is open: follow its beacon."):e.relicsRemaining===0?t.push(`The door is sealed. ${e.doorProgress} notes of its melody rung.`):t.push("The exit door is sealed; it hums when you are near."),ja&&t.push(`The door's melody: ${ja}.`),t.push(`Facing ${jm(Et)}.`),i&&t.push(`${Km[i.surface]??"Stone floor"}.`),Df&&t.push(`Last chime: ${Df}.`),e.exitOpen&&Ya&&t.push(`Exit: ${Ya}.`),Ct.mode==="OFFLINE"&&t.push("Playing offline."),t.join(" ")}const ww={[Ar]:"AUTOMATON",[ms]:"hollow wall",[Qa]:"wall beyond water",[ec]:"wall beyond gravel"};function bw(i){const e=[];for(const[t,n]of[["ahead",0],["right",Math.PI/2],["behind",Math.PI],["left",-Math.PI/2]]){const r=Et+n,s=i.reduce((o,a)=>Math.abs(bi(a.a-r))<Math.abs(bi(o.a-r))?a:o);if(s.d<0){e.push(`${t} open`);continue}e.push(`${t} ${ww[s.m]??"wall"} ${is(s.d)}`)}return`Echo: ${e.join(", ")}.`}function Aw(i){const e=performance.now(),t=No(),n=t??{x:0,y:0};switch(i.type){case"echo":{mt.echo(i.x,i.y,i.sectors),mt.setSpace(i.sectors.reduce((s,o)=>s+(o.d<0?Yi:o.d),0)/i.sectors.length),Qt.echo(i.x,i.y,i.hits,e);const r=i.sectors.some(s=>s.m===Ar&&s.d>=0);ut(bw(i.sectors),r),r&&Tn([60,40,60]);break}case"chime":{i.cues.forEach((s,o)=>{mt.chime(s.tone,s.angle,s.dist,o*.3),Qt.cue(n.x,n.y,s.angle,s.dist,"chime",hf(s.tone),e+o*300)});const r=i.cues.map(s=>`${ls[s.tone]??"bell"} ${ts(s.angle,Et)}, ${is(s.dist)}, about ${sd(s.dist)}`);Df=r[0],ut(`Chimes: ${r.join("; ")}.`);break}case"hum":{mt.hum(i.angle,i.dist),Qt.cue(n.x,n.y,i.angle,i.dist,"door",.15,e),Mw++%3===0&&ut(`The sealed door hums ${ts(i.angle,Et)}, ${is(i.dist)}.`);break}case"melody":{mt.melody(i.tones,i.angle,i.dist),i.tones.forEach((r,s)=>Qt.cue(n.x,n.y,i.angle,Math.max(i.dist,60),"door",hf(r),e+400+s*700)),ja=i.tones.map(r=>yw[r]??"?").join(", "),ut(`The door sings back: ${ja}. Ring the bells in that order beside it with keys 1, 2 and 3.`,!0);break}case"beacon":{mt.beacon(i.angle,i.dist),Qt.cue(n.x,n.y,i.angle,i.dist,"door",.8,e),Ya=`${ts(i.angle,Et)}, ${is(i.dist)}, about ${sd(i.dist)}`,Sw++%4===0&&ut(`Exit beacon ${Ya}.`);break}case"automaton":{if(mt.automaton(i.x,i.y,i.kind,i.hunting),Qt.automaton(i.x,i.y,i.hunting,e),!t)break;const r=Math.hypot(i.x-t.x,i.y-t.y),s=r<=200||i.hunting;if(s&&Tn(r<=120?[80,40,80]:40),e-fd>(s?1200:4e3)){fd=e;const o=i.kind==="click"?"clicking":"clanking";ut(`Automaton ${i.hunting?"hunting, ":""}${o} ${ts(Math.atan2(i.y-t.y,i.x-t.x),Et)}, ${is(r)}.`,s)}break}case"knock":mt.knock(i.x,i.y),Qt.burst(i.x,i.y,"knock",e),ut("Solid stone.");break;case"crumble":{mt.crumble(i.x,i.y),Qt.burst(i.x,i.y,"crumble",e),Tn([100,50,100]);const r=t&&Math.hypot(i.x-t.x,i.y-t.y)>60?` ${ts(Math.atan2(i.y-t.y,i.x-t.x),Et)}, ${is(Math.hypot(i.x-t.x,i.y-t.y))}`:" in front of you";ut(`A hollow wall crumbled${r}. The crash will draw automatons.`,!0);break}case"ring":{const r=i.by===Ct.selfId;mt.ring(i.tone,i.x,i.y,r),Qt.ring(i.x,i.y,i.tone,e),!r&&t&&ut(`A teammate rang the ${ls[i.tone]??"bell"} ${ts(Math.atan2(i.y-t.y,i.x-t.x),Et)}.`);break}case"door":mt.door(i.wrong),ut(i.wrong?`The door groans: wrong bell. ${i.progress?"That note starts the melody again.":"Start the melody again."}`:`The door shifts: ${i.progress} of ${i.length} notes.`,i.wrong);break;case"relic":{mt.relic(i.tone),Tn([40,60,40]);const r=i.by===Ct.selfId?"You recovered":"A teammate recovered",s=i.remaining?`${i.remaining} remaining.`:"All three bells are found. Go to the humming door, clap beside it to hear its melody, then ring the bells in that order.";ut(`${r} the ${ls[i.tone]??"relic"}. ${s}`,!0);break}case"exit-open":mt.fanfare(),Tn([80,50,120]),ut("The door grinds open! Follow its beacon out.",!0);break;case"caught":i.sessionId===Ct.selfId?(mt.caught(),Tn([200,100,300]),ut("An automaton caught you.",!0)):ut("A teammate was caught. Their bells can now be rung by anyone.",!0);break;case"phase":tg(i.phase==="EXTRACTED");break}}function tg(i){if(nr)return;nr=!0,document.pointerLockElement&&document.exitPointerLock(),i?(mt.fanfare(),Tn([80,50,100,50,150])):mt.caught();const e=i?"Extracted! You escaped the ruins with all three bells.":"Mission failed. Every explorer was caught.";qi(Nt("end-title"),i?"EXTRACTED":"LOST IN THE RUINS"),qi(Nt("end-text"),e),ut(e,!0),Rf.open||Rf.showModal()}function ng(i){var e;Ct=i,Qt.reset(),Et=((e=No())==null?void 0:e.heading)??0,i.onEvent(Aw),i.onDisconnect(t=>{nr||(console.warn("online session dropped:",t),ut("Connection lost. Continuing alone offline in new ruins.",!0),ng(Af()))}),qi(Xm,i.mode)}function ig(){const i=performance.now(),e=Math.min(.1,(i-ud)/1e3);if(ud=i,Ct&&!co.open){Et=bi(Et+((bn.has("turnR")?1:0)-(bn.has("turnL")?1:0))*vw*e);const t=nr?{dx:0,dy:0,sneak:!1,facing:Et}:Ew();Ct.frame(i,t);const n=No();if(n){mt.setListener(n.x,n.y,Et),n.surface!==ad&&(ad=n.surface,gl&&ut(Km[n.surface]??"Stone floor"));const s=n.sneak?620:380;n.alive&&n.moving&&i-gl>s&&(gl=i,mt.footstep(n.surface,n.sneak,n.x,n.y,!0),Qt.footstep(n.x,n.y,n.noiseRadius,n.surface,i),n.surface!==0&&Tn(15));const o=t.dx!==0||t.dy!==0;(!o||Math.hypot(n.x-_l.x,n.y-_l.y)>.5)&&(ld=i),_l={x:n.x,y:n.y},o&&n.alive&&i-ld>160&&i-cd>450&&(cd=i,mt.bump(),Tn(30)),qi(mw,`NOISE ${Math.round(n.noiseRadius)}`),qi(gw,n.clapCooldown>0?`CLAP ${(n.clapCooldown/30).toFixed(1)}s`:"CLAP READY"),qi(pw,["STONE","WATER","GRAVEL"][n.surface]??"STONE")}Ct.world.explorers.forEach((s,o)=>{o===Ct.selfId||!s.alive||!s.moving||i-(hd.get(o)??0)<(s.sneak?620:380)||(hd.set(o,i),mt.footstep(s.surface,s.sneak,s.x,s.y,!1),Qt.footstep(s.x,s.y,s.noiseRadius,s.surface,i,o))});const r=Ct.world;qi(dw,`${3-r.relicsRemaining}/3 BELLS${r.exitOpen?" · DOOR OPEN":r.relicsRemaining===0?` · DOOR ${r.doorProgress}/4`:""}`),!nr&&r.phase!=="PLAYING"&&tg(r.phase==="EXTRACTED")}Ct&&Qt.render(Ct,i,Et,Cf),requestAnimationFrame(ig)}async function rg(){if(mt.unlock(),!Ct||nr)return;const i=No();i!=null&&i.alive&&i.clapCooldown===0&&(mt.clap(),Tn(25));const e=await Ct.clap();e==="CLAP_ON_COOLDOWN"?ut("Clap not ready."):e==="CAUGHT"&&ut("You were caught; listen to your teammates.")}async function sg(){if(mt.unlock(),!Ct||nr)return;const i=await Ct.knock();i==="NOTHING_IN_REACH"?ut("Nothing within reach. Face a wall to knock on it."):i==="CAUGHT"&&ut("You were caught.")}const dd={NO_SUCH_BELL:i=>`The ${ls[i]} hasn't been found yet.`,NOT_YOUR_BELL:i=>`A teammate carries the ${ls[i]}.`,CAUGHT:()=>"You were caught."};async function og(i){if(mt.unlock(),!Ct||nr)return;const e=await Ct.ring(i);e&&dd[e]&&ut(dd[e](i))}window.addEventListener("keydown",i=>{var t;if(mt.unlock(),co.open||Rf.open||i.ctrlKey||i.altKey||i.metaKey)return;if(i.code in qa){i.preventDefault(),bn.add(qa[i.code]);return}if(i.key==="Shift"){yc=!0;return}if(i.repeat)return;const e=((t=i.target)==null?void 0:t.tagName)==="BUTTON";i.code==="Space"&&!e?(i.preventDefault(),rg()):i.code==="KeyF"?sg():i.code==="Digit1"||i.code==="Digit2"||i.code==="Digit3"?og(Number(i.code.slice(5))-1):i.code==="KeyQ"?od(-1):i.code==="KeyE"?od(1):i.code==="KeyB"?Qm(!Qt.blind):i.code==="KeyR"?ut(eg(),!0):i.code==="KeyC"?Jm(!xc):(i.code==="KeyH"||i.key==="?")&&(document.pointerLockElement&&document.exitPointerLock(),co.showModal())});window.addEventListener("keyup",i=>{i.code in qa&&bn.delete(qa[i.code]),i.key==="Shift"&&(yc=!1)});window.addEventListener("blur",()=>{bn.clear(),yc=!1});window.addEventListener("pointerdown",()=>mt.unlock(),{passive:!0});Nt("btn-clap").addEventListener("click",()=>void rg());Nt("btn-knock").addEventListener("click",()=>void sg());for(const i of document.querySelectorAll("[data-ring]"))i.addEventListener("click",()=>void og(Number(i.dataset.ring)));Ym.addEventListener("click",()=>Jm(!xc));qm.addEventListener("click",()=>Qm(!Qt.blind));Nt("btn-status").addEventListener("click",()=>ut(eg(),!0));Nt("btn-help").addEventListener("click",()=>co.showModal());Nt("btn-close-help").addEventListener("click",()=>co.close());Nt("btn-again").addEventListener("click",()=>location.reload());async function Rw(){qi(Xm,"CONNECTING"),ut("Resonance. Connecting. Press any key or tap to enable sound. Press H for help.");const i=dg();let e;try{e=await mg(i)?await hw(i):Af()}catch(t){console.warn("online join failed, starting offline",t),e=Af()}ng(e),ut(e.mode==="ONLINE"?"Joined the ruins online. Clap with Space to hear the walls. Listen for the bells.":"Server asleep: exploring the ruins offline with the same rules. Clap with Space to hear the walls.",!0),requestAnimationFrame(ig)}Rw();
