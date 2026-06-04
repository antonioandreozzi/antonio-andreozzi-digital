(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15761,e=>{"use strict";var i=e.i(43476),t=e.i(71645),o=e.i(8560),n=e.i(90072);let a=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,r=`
uniform float uTime;
uniform vec2  uMouse;
varying vec2  vUv;

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  float a = hash(i);
  float b = hash(i+vec2(1,0));
  float c = hash(i+vec2(0,1));
  float d = hash(i+vec2(1,1));
  return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
}

float fbm(vec2 p) {
  float v=0.; float a=0.5;
  for(int i=0;i<6;i++){
    v += a * noise(p);
    p  = p*2.1 + vec2(1.7, 9.2);
    a *= 0.48;
  }
  return v;
}

void main() {
  vec2 uv = vUv * 1.4;
  float t  = uTime * 0.05;
  vec2  m  = uMouse * 0.18;

  /* ── Domain warping — tre strati creano l'effetto liquido ── */
  vec2 q = vec2(
    fbm(uv + t + m),
    fbm(uv + vec2(5.2, 1.3) - t * 0.4)
  );
  vec2 r = vec2(
    fbm(uv + 4.0*q + vec2(1.7, 9.2) + t * 0.13),
    fbm(uv + 4.0*q + vec2(8.3, 2.8) - t * 0.1)
  );
  float f = fbm(uv + 4.5*r + t * 0.07);

  /* ── Palette: nero → ambra scura → oro liquido ────────────── */
  vec3 void_col  = vec3(0.035, 0.034, 0.043);
  vec3 ember_col = vec3(0.14,  0.065, 0.01);
  vec3 amber_col = vec3(0.28,  0.14,  0.04);
  vec3 gold_col  = vec3(0.52,  0.30,  0.08);

  vec3 col = mix(void_col,  ember_col, smoothstep(0.20, 0.65, f));
  col      = mix(col,       amber_col, smoothstep(0.50, 0.85, f));
  col      = mix(col,       gold_col,  smoothstep(0.78, 1.00, f*f) * 0.7);

  float alpha = smoothstep(0.08, 0.55, f) * 0.6 + 0.04;
  gl_FragColor = vec4(col, alpha);
}
`;e.s(["default",0,function(){let e=(0,t.useRef)(null),[v,c]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{let i;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void c(!0);let t=e.current;if(!t)return;let v=window.innerWidth<768,l=new o.WebGLRenderer({canvas:t,alpha:!0,antialias:!1});l.setPixelRatio(v?.5:Math.min(window.devicePixelRatio,1.5)),l.setSize(window.innerWidth,window.innerHeight);let s=new n.Scene,d=new n.OrthographicCamera(-1,1,1,-1,0,1),u=new n.PlaneGeometry(2,2),f={uTime:{value:0},uMouse:{value:new n.Vector2(0,0)}},m=new n.ShaderMaterial({vertexShader:a,fragmentShader:r,uniforms:f,transparent:!0,depthWrite:!1});s.add(new n.Mesh(u,m));let h=e=>{v||f.uMouse.value.set(e.clientX/window.innerWidth*2-1,-(2*(e.clientY/window.innerHeight))+1)},p=()=>{l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",h,{passive:!0}),window.addEventListener("resize",p);let w=1e3/(v?18:55),b=0,g=e=>{i=requestAnimationFrame(g),e-b<w||(b=e,f.uTime.value=.001*e,l.render(s,d))};return i=requestAnimationFrame(g),()=>{cancelAnimationFrame(i),window.removeEventListener("mousemove",h),window.removeEventListener("resize",p),l.dispose(),m.dispose(),u.dispose()}},[]),v)?null:(0,i.jsx)("canvas",{ref:e,"aria-hidden":"true",style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",width:"100vw",height:"100vh",opacity:.3}})}])},86205,e=>{e.n(e.i(15761))}]);