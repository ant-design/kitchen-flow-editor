(self.webpackChunkkitchen_flow_editor=self.webpackChunkkitchen_flow_editor||[]).push([[752],{19918:function(x,O,t){"use strict";t.d(O,{Z:function(){return P}});var u=t(30001),p=t(80108),e=t(43233),l=t(33449),m=t(26188),h=t(18188),g=t(21019),j=t(78009),z,T,H,I=(0,j.kc)(function(Z,a){var X=Z.token,A=Z.css,w=Z.cx,R=a.size,J=a.className,K=a.prefixCls,Y=typeof R=="number"?A(z||(z=(0,g.Z)([`
          width: `,`px !important;
          height: `,`px !important;
        `])),R,R):"",it=A(T||(T=(0,g.Z)([`
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: `,` !important;
    }
  `])),X.colorText);return{container:w(K,it,Y,J),tooltip:A(H||(H=(0,g.Z)([`
      pointer-events: none;
    `])))}}),c=t(11527),f=["placement","title","icon","cursor","onClick","className","size","prefixCls"],y=function(a){var X=a.placement,A=a.title,w=a.icon,R=a.cursor,J=a.onClick,K=a.className,Y=a.size,it=a.prefixCls,vt=(0,p.Z)(a,f),mt=(0,h.k2)("actionicon",it),D=I({size:Y,prefixCls:mt}),at=D.styles,q=D.theme,pt=D.cx,lt=(0,c.jsx)(e.ZP,(0,u.Z)((0,u.Z)({icon:w,className:pt(K,at.container),type:"text",style:{cursor:R},size:"small"},vt),{},{onClick:J}));return(0,c.jsx)(m.iV,{componentToken:{Button:{colorText:q.colorTextTertiary,colorBgTextHover:q.colorFillSecondary,colorBgTextActive:q.colorFill}},children:A?(0,c.jsx)(l.Z,{arrow:!1,overlayClassName:at.tooltip,title:A,placement:X,children:lt}):lt})},P=y},26188:function(x,O,t){"use strict";t.d(O,{iV:function(){return T}});var u=t(30001),p=t(61763),e=t(70584),l=t(443),m=t(14195),h=function(c,f){var y=m.Z.darkAlgorithm(c,f);return(0,u.Z)((0,u.Z)({},y),{},{colorBgLayout:"#20252b",colorBgContainer:"#282c34",colorBgElevated:"#32363e"})},g=function(c){var f={algorithm:[m.Z.compactAlgorithm]};return c==="dark"&&f.algorithm.push(h),f},j=t(11527),z=function(c){var f=(0,e.S)(),y=g(c),P={colorBgContainer:f==null?void 0:f.colorFillQuaternary,colorBorder:"transparent",controlHeightSM:24,controlOutline:"transparent"};return y.components={Input:P,InputNumber:P,Select:P,Tree:{colorBgContainer:"transparent",controlHeightSM:24},TreeSelect:P},y},T=function(c){var f=c.children,y=c.componentToken,P=(0,l.r)(),Z=P.appearance,a=z(Z);return y&&(a.components=(0,u.Z)((0,u.Z)({},a.components),y)),(0,j.jsx)(p.ZP,{prefixCls:"studio",theme:a,children:f})},H=function(c){return function(f){return _jsx(T,{children:_jsx(c,_objectSpread({},f))})}}},18188:function(x,O,t){"use strict";t.d(O,{k2:function(){return p}});var u="studio";function p(e,l){return l||(e?"".concat(u,"-").concat(e):u)}},81186:function(x,O,t){"use strict";t.d(O,{Z:function(){return yt}});var u=t(84875),p=t.n(u),e=t(50959),l=t(69624),m=t(37583),h=t(27534),j=n=>{const{getPrefixCls:d,direction:r}=(0,e.useContext)(l.E_),{prefixCls:o,className:s=""}=n,C=d("input-group",o),F=d("input"),[b,Q]=(0,h.ZP)(F),V=p()(C,{[`${C}-lg`]:n.size==="large",[`${C}-sm`]:n.size==="small",[`${C}-compact`]:n.compact,[`${C}-rtl`]:r==="rtl"},Q,s),k=(0,e.useContext)(m.aM),M=(0,e.useMemo)(()=>Object.assign(Object.assign({},k),{isFormItemInput:!1}),[k]);return b(e.createElement("span",{className:V,style:n.style,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave,onFocus:n.onFocus,onBlur:n.onBlur},e.createElement(m.aM.Provider,{value:M},n.children)))},z=t(56988),T=t(31966),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},I=H,c=t(86793),f=function(d,r){return e.createElement(c.Z,(0,T.Z)({},d,{ref:r,icon:I}))},y=e.forwardRef(f),P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},Z=P,a=function(d,r){return e.createElement(c.Z,(0,T.Z)({},d,{ref:r,icon:Z}))},X=e.forwardRef(a),A=t(47740),w=t(91211),R=t(26351),J=function(n,d){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&d.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(n);s<o.length;s++)d.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(n,o[s])&&(r[o[s]]=n[o[s]]);return r};const K=n=>n?e.createElement(X,null):e.createElement(y,null),Y={click:"onClick",hover:"onMouseOver"};var vt=e.forwardRef((n,d)=>{const{visibilityToggle:r=!0}=n,o=typeof r=="object"&&r.visible!==void 0,[s,C]=(0,e.useState)(()=>o?r.visible:!1),F=(0,e.useRef)(null);e.useEffect(()=>{o&&C(r.visible)},[o,r]);const b=(0,R.Z)(F),Q=()=>{const{disabled:nt}=n;nt||(s&&b(),C(E=>{var S;const U=!E;return typeof r=="object"&&((S=r.onVisibleChange)===null||S===void 0||S.call(r,U)),U}))},V=nt=>{const{action:E="click",iconRender:S=K}=n,U=Y[E]||"",W=S(s),ot={[U]:Q,className:`${nt}-icon`,key:"passwordIcon",onMouseDown:rt=>{rt.preventDefault()},onMouseUp:rt=>{rt.preventDefault()}};return e.cloneElement(e.isValidElement(W)?W:e.createElement("span",null,W),ot)},{className:k,prefixCls:M,inputPrefixCls:ct,size:N}=n,tt=J(n,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:ut}=e.useContext(l.E_),ft=ut("input",ct),G=ut("input-password",M),et=r&&V(G),B=p()(G,k,{[`${G}-${N}`]:!!N}),dt=Object.assign(Object.assign({},(0,A.Z)(tt,["suffix","iconRender","visibilityToggle"])),{type:s?"text":"password",className:B,prefixCls:ft,suffix:et});return N&&(dt.size=N),e.createElement(z.Z,Object.assign({ref:(0,w.sQ)(d,F)},dt))}),mt=t(67638),D=t(90016),at=t(43233),q=t(87702),pt=t(34102),lt=function(n,d){var r={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&d.indexOf(o)<0&&(r[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(n);s<o.length;s++)d.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(n,o[s])&&(r[o[s]]=n[o[s]]);return r},ht=e.forwardRef((n,d)=>{const{prefixCls:r,inputPrefixCls:o,className:s,size:C,suffix:F,enterButton:b=!1,addonAfter:Q,loading:V,disabled:k,onSearch:M,onChange:ct,onCompositionStart:N,onCompositionEnd:tt}=n,ut=lt(n,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:ft,direction:G}=e.useContext(l.E_),et=e.useRef(!1),B=ft("input-search",r),dt=ft("input",o),{compactSize:nt}=(0,pt.ri)(B,G),E=(0,q.Z)(i=>{var v;return(v=C!=null?C:nt)!==null&&v!==void 0?v:i}),S=e.useRef(null),U=i=>{i&&i.target&&i.type==="click"&&M&&M(i.target.value,i),ct&&ct(i)},W=i=>{var v;document.activeElement===((v=S.current)===null||v===void 0?void 0:v.input)&&i.preventDefault()},ot=i=>{var v,$;M&&M(($=(v=S.current)===null||v===void 0?void 0:v.input)===null||$===void 0?void 0:$.value,i)},rt=i=>{et.current||V||ot(i)},Ot=typeof b=="boolean"?e.createElement(mt.Z,null):null,xt=`${B}-button`;let st;const L=b||{},Ct=L.type&&L.type.__ANT_BUTTON===!0;Ct||L.type==="button"?st=(0,D.Tm)(L,Object.assign({onMouseDown:W,onClick:i=>{var v,$;($=(v=L==null?void 0:L.props)===null||v===void 0?void 0:v.onClick)===null||$===void 0||$.call(v,i),ot(i)},key:"enterButton"},Ct?{className:xt,size:E}:{})):st=e.createElement(at.ZP,{className:xt,type:b?"primary":void 0,size:E,disabled:k,key:"enterButton",onMouseDown:W,onClick:ot,loading:V,icon:Ot},b),Q&&(st=[st,(0,D.Tm)(Q,{key:"addonAfter"})]);const Pt=p()(B,{[`${B}-rtl`]:G==="rtl",[`${B}-${E}`]:!!E,[`${B}-with-button`]:!!b},s),bt=i=>{et.current=!0,N==null||N(i)},Et=i=>{et.current=!1,tt==null||tt(i)};return e.createElement(z.Z,Object.assign({ref:(0,w.sQ)(S,d),onPressEnter:rt},ut,{size:E,onCompositionStart:bt,onCompositionEnd:Et,prefixCls:dt,addonAfter:st,suffix:F,onChange:U,className:Pt,disabled:k}))}),gt=t(77914);const _=z.Z;_.Group=j,_.Search=ht,_.TextArea=gt.Z,_.Password=vt;var yt=_},12342:function(x,O,t){var u=t(20006);function p(e,l){if(e==null)return{};var m=u(e,l),h,g;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(e);for(g=0;g<j.length;g++)h=j[g],!(l.indexOf(h)>=0)&&Object.prototype.propertyIsEnumerable.call(e,h)&&(m[h]=e[h])}return m}x.exports=p,x.exports.__esModule=!0,x.exports.default=x.exports},20006:function(x){function O(t,u){if(t==null)return{};var p={},e=Object.keys(t),l,m;for(m=0;m<e.length;m++)l=e[m],!(u.indexOf(l)>=0)&&(p[l]=t[l]);return p}x.exports=O,x.exports.__esModule=!0,x.exports.default=x.exports}}]);