(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15761,e=>{"use strict";var i=e.i(43476),n=e.i(71645),t=e.i(8560),o=e.i(90072);let r=`
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position,1.0);
}
`,a=`
uniform float uTime;
uniform vec2  uMouse;
uniform vec2  uResolution;
uniform float uScroll;
varying vec2  vUv;

float hash(vec2 p){
  p = fract(p * vec2(234.34,435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f*f*(3.0-2.0*f);
  float a = hash(i);
  float b = hash(i+vec2(1,0));
  float c = hash(i+vec2(0,1));
  float d = hash(i+vec2(1,1));
  return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);
}

float fbm(vec2 p){
  float v=0.0; float a=0.5;
  for(int i=0;i<5;i++){
    v += a*noise(p);
    p  = p*2.1 + vec2(1.7,9.2);
    a *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = vUv;
  vec2 m  = uMouse * 0.25;
  float t = uTime * 0.07 + uScroll * 0.0003;

  float n1 = fbm(uv*2.8 + vec2(t, t*0.7) + m);
  float n2 = fbm(uv*5.2 - vec2(t*0.5, t*0.9) - m*0.5);
  float n3 = fbm(vec2(n1+n2)*2.0 + t*0.3);

  float c = n1*0.5 + n2*0.3 + n3*0.2;

  /* Palette: quasi-nero con tocco ambra caldissimo */
  vec3 void_col  = vec3(0.035,0.035,0.043);
  vec3 ember_col = vec3(0.18, 0.11, 0.04);
  vec3 gold_col  = vec3(0.25, 0.16, 0.055);

  vec3 col = mix(void_col, ember_col, c*0.8);
  col      = mix(col, gold_col, c*c*0.4);

  float alpha = c * 0.45 + 0.04;
  gl_FragColor = vec4(col, alpha);
}
`;e.s(["default",0,function(){let e=(0,n.useRef)(null),[l,c]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let i;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void c(!0);let n=e.current;if(!n)return;let l=window.innerWidth<768,v=new t.WebGLRenderer({canvas:n,alpha:!0,antialias:!1});v.setPixelRatio(l?.6:Math.min(window.devicePixelRatio,1.5)),v.setSize(window.innerWidth,window.innerHeight);let s=new o.Scene,d=new o.OrthographicCamera(-1,1,1,-1,0,1),u=new o.PlaneGeometry(2,2),f={uTime:{value:0},uMouse:{value:new o.Vector2(0,0)},uResolution:{value:new o.Vector2(window.innerWidth,window.innerHeight)},uScroll:{value:0}},w=new o.ShaderMaterial({vertexShader:r,fragmentShader:a,uniforms:f,transparent:!0,depthWrite:!1});s.add(new o.Mesh(u,w));let m=e=>{l||f.uMouse.value.set(e.clientX/window.innerWidth*2-1,-e.clientY/window.innerHeight*2+1)},h=()=>{f.uScroll.value=window.scrollY},p=()=>{v.setSize(window.innerWidth,window.innerHeight),f.uResolution.value.set(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",m,{passive:!0}),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",p);let g=0,x=1e3/(l?20:60),b=e=>{i=requestAnimationFrame(b),e-g<x||(g=e,f.uTime.value=.001*e,v.render(s,d))};return i=requestAnimationFrame(b),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",m),window.removeEventListener("scroll",h),window.removeEventListener("resize",p),v.dispose(),w.dispose(),u.dispose()}},[]),l)?null:(0,i.jsx)("canvas",{ref:e,"aria-hidden":"true",style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",width:"100vw",height:"100vh",opacity:.6}})}])},86205,e=>{e.n(e.i(15761))}]);