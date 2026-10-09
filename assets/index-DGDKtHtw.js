(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,ee=1027,te=1028,ne=1029,D=1030,re=1031,ie=1033,ae=33776,oe=33777,se=33778,O=33779,ce=35840,le=35841,ue=35842,de=35843,fe=36196,pe=37492,me=37496,he=37488,ge=37489,_e=37490,ve=37491,ye=37808,be=37809,xe=37810,Se=37811,Ce=37812,we=37813,Te=37814,Ee=37815,De=37816,Oe=37817,ke=37818,Ae=37819,je=37820,Me=37821,Ne=36492,Pe=36494,Fe=36495,Ie=36283,Le=36284,Re=36285,ze=36286,k=2200,Be=2201,Ve=2202,He=2300,A=2301,Ue=2302,We=2303,Ge=2400,Ke=2401,qe=2402,Je=2500,Ye=2501,Xe=3200,Ze=`srgb`,Qe=`srgb-linear`,$e=`linear`,et=`srgb`,tt=7680,nt=35044,rt=35048,it=2e3;function at(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ot(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function st(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ct(){let e=st(`canvas`);return e.style.display=`block`,e}var lt={};function ut(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function dt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function ft(...e){e=dt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function pt(...e){e=dt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function mt(...e){let t=e.join(` `);t in lt||(lt[t]=!0,ft(...e))}function ht(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var gt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},_t=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},vt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),yt=1234567,bt=Math.PI/180,xt=180/Math.PI;function St(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vt[e&255]+vt[e>>8&255]+vt[e>>16&255]+vt[e>>24&255]+`-`+vt[t&255]+vt[t>>8&255]+`-`+vt[t>>16&15|64]+vt[t>>24&255]+`-`+vt[n&63|128]+vt[n>>8&255]+`-`+vt[n>>16&255]+vt[n>>24&255]+vt[r&255]+vt[r>>8&255]+vt[r>>16&255]+vt[r>>24&255]).toLowerCase()}function Ct(e,t,n){return Math.max(t,Math.min(n,e))}function wt(e,t){return(e%t+t)%t}function Tt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Et(e,t,n){return e===t?0:(n-e)/(t-e)}function Dt(e,t,n){return(1-n)*e+n*t}function Ot(e,t,n,r){return Dt(e,t,1-Math.exp(-n*r))}function kt(e,t=1){return t-Math.abs(wt(e,t*2)-t)}function At(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function jt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Mt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Nt(e,t){return e+Math.random()*(t-e)}function Pt(e){return e*(.5-Math.random())}function Ft(e){e!==void 0&&(yt=e);let t=yt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function It(e){return e*bt}function Lt(e){return e*xt}function Rt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function zt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Bt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Vt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:ft(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Wt={DEG2RAD:bt,RAD2DEG:xt,generateUUID:St,clamp:Ct,euclideanModulo:wt,mapLinear:Tt,inverseLerp:Et,lerp:Dt,damp:Ot,pingpong:kt,smoothstep:At,smootherstep:jt,randInt:Mt,randFloat:Nt,randFloatSpread:Pt,seededRandom:Ft,degToRad:It,radToDeg:Lt,isPowerOfTwo:Rt,ceilPowerOfTwo:zt,floorPowerOfTwo:Bt,setQuaternionFromProperEuler:Vt,normalize:Ut,denormalize:Ht},j=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:ft(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kt.copy(this).projectOnVector(e),this.sub(Kt)}reflect(e){return this.sub(Kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kt=new M,qt=new Gt,Jt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return mt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Yt.makeScale(e,t)),this}rotate(e){return mt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Yt.makeRotation(-e)),this}translate(e,t){return mt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Yt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yt=new Jt,Xt=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zt=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qt(){let e={enabled:!0,workingColorSpace:Qe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=en(e.r),e.g=en(e.g),e.b=en(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=tn(e.r),e.g=tn(e.g),e.b=tn(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?$e:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return mt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return mt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Qe]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:Xt,fromXYZ:Zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:r,transfer:et,toXYZ:Xt,fromXYZ:Zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),e}var $t=Qt();function en(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function tn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var nn,rn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{nn===void 0&&(nn=st(`canvas`)),nn.width=e.width,nn.height=e.height;let t=nn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=nn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=st(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=en(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(en(t[e]/255)*255):t[e]=en(t[e]);return{data:t,width:e.width,height:e.height}}return ft(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},an=0,on=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:an++}),this.uuid=St(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(sn(r[t].image)):e.push(sn(r[t]))}else e=sn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function sn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?rn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ft(`Texture: Unable to serialize Texture.`),{})}var cn=0,ln=new M,un=class e extends _t{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=St(),this.name=``,this.source=new on(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ln).x}get height(){return this.source.getSize(ln).y}get depth(){return this.source.getSize(ln).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null,un.DEFAULT_MAPPING=300,un.DEFAULT_ANISOTROPY=1;var dn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fn=class extends _t{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t),this.textures=[];let r=new un({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new on(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},pn=class extends fn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},mn=class extends un{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},hn=class extends un{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},gn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/_n.setFromMatrixColumn(e,0).length(),i=1/_n.setFromMatrixColumn(e,1).length(),a=1/_n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yn,e,bn)}lookAt(e,t,n){let r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),xn.crossVectors(n,Cn),xn.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),xn.crossVectors(n,Cn)),xn.normalize(),Sn.crossVectors(Cn,xn),r[0]=xn.x,r[4]=Sn.x,r[8]=Cn.x,r[1]=xn.y,r[5]=Sn.y,r[9]=Cn.y,r[2]=xn.z,r[6]=Sn.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],ee=r[9],te=r[13],ne=r[2],D=r[6],re=r[10],ie=r[14],ae=r[3],oe=r[7],se=r[11],O=r[15];return i[0]=a*x+o*T+s*ne+c*ae,i[4]=a*S+o*E+s*D+c*oe,i[8]=a*C+o*ee+s*re+c*se,i[12]=a*w+o*te+s*ie+c*O,i[1]=l*x+u*T+d*ne+f*ae,i[5]=l*S+u*E+d*D+f*oe,i[9]=l*C+u*ee+d*re+f*se,i[13]=l*w+u*te+d*ie+f*O,i[2]=p*x+m*T+h*ne+g*ae,i[6]=p*S+m*E+h*D+g*oe,i[10]=p*C+m*ee+h*re+g*se,i[14]=p*w+m*te+h*ie+g*O,i[3]=_*x+v*T+y*ne+b*ae,i[7]=_*S+v*E+y*D+b*oe,i[11]=_*C+v*ee+y*re+b*se,i[15]=_*w+v*te+y*ie+b*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,ee=u*g-f*m,te=d*g-f*h,ne=_*te-v*ee+y*E+b*T-x*w+S*C;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/ne;return e[0]=(o*te-s*ee+c*E)*D,e[1]=(r*ee-n*te-i*E)*D,e[2]=(m*S-h*x+g*b)*D,e[3]=(d*x-u*S-f*b)*D,e[4]=(s*T-a*te-c*w)*D,e[5]=(t*te-r*T+i*w)*D,e[6]=(h*y-p*S-g*v)*D,e[7]=(l*S-d*y+f*v)*D,e[8]=(a*ee-o*T+c*C)*D,e[9]=(n*T-t*ee-i*C)*D,e[10]=(p*x-m*y+g*_)*D,e[11]=(u*y-l*x-f*_)*D,e[12]=(o*w-a*E-s*C)*D,e[13]=(t*E-n*w+r*C)*D,e[14]=(m*v-p*b-h*_)*D,e[15]=(l*b-u*v+d*_)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=_n.set(r[0],r[1],r[2]).length(),o=_n.set(r[4],r[5],r[6]).length(),s=_n.set(r[8],r[9],r[10]).length();i<0&&(a=-a),vn.copy(this);let c=1/a,l=1/o,u=1/s;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=l,vn.elements[5]*=l,vn.elements[6]*=l,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=it,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=it,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_n=new M,vn=new gn,yn=new M(0,0,0),bn=new M(1,1,1),xn=new M,Sn=new M,Cn=new M,wn=new gn,Tn=new Gt,En=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:ft(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tn.setFromEuler(this),this.setFromQuaternion(Tn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER=`XYZ`;var Dn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},On=0,kn=new M,An=new Gt,jn=new gn,Mn=new M,Nn=new M,Pn=new M,Fn=new Gt,In=new M(1,0,0),Ln=new M(0,1,0),Rn=new M(0,0,1),zn={type:`added`},Bn={type:`removed`},Vn={type:`childadded`,child:null},Hn={type:`childremoved`,child:null},Un=class e extends _t{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:On++}),this.uuid=St(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new M,n=new En,r=new Gt,i=new M(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gn},normalMatrix:{value:new Jt}}),this.matrix=new gn,this.matrixWorld=new gn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(In,e)}rotateY(e){return this.rotateOnAxis(Ln,e)}rotateZ(e){return this.rotateOnAxis(Rn,e)}translateOnAxis(e,t){return kn.copy(e).applyQuaternion(this.quaternion),this.position.add(kn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(In,e)}translateY(e){return this.translateOnAxis(Ln,e)}translateZ(e){return this.translateOnAxis(Rn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mn.copy(e):Mn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Nn,Mn,this.up):jn.lookAt(Mn,Nn,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),An.setFromRotationMatrix(jn),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(pt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):pt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bn),Hn.child=e,this.dispatchEvent(Hn),Hn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,e,Pn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nn,Fn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Un.DEFAULT_UP=new M(0,1,0),Un.DEFAULT_MATRIX_AUTO_UPDATE=!0,Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=class extends Un{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Gn={type:`move`},Kn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Yn={h:0,s:0,l:0};function Xn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var N=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=$t.workingColorSpace){if(e=wt(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Xn(i,r,e+1/3),this.g=Xn(i,r,e),this.b=Xn(i,r,e-1/3)}return $t.colorSpaceToWorking(this,r),this}setStyle(e,t=Ze){function n(t){t!==void 0&&parseFloat(t)<1&&ft(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:ft(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);ft(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){let n=qn[e.toLowerCase()];return n===void 0?ft(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}copyLinearToSRGB(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return $t.workingToColorSpace(Zn.copy(this),e),Math.round(Ct(Zn.r*255,0,255))*65536+Math.round(Ct(Zn.g*255,0,255))*256+Math.round(Ct(Zn.b*255,0,255))}getHexString(e=Ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.workingToColorSpace(Zn.copy(this),t);let n=Zn.r,r=Zn.g,i=Zn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=$t.workingColorSpace){return $t.workingToColorSpace(Zn.copy(this),t),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Ze){$t.workingToColorSpace(Zn.copy(this),e);let t=Zn.r,n=Zn.g,r=Zn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Yn);let n=Dt(Jn.h,Yn.h,t),r=Dt(Jn.s,Yn.s,t),i=Dt(Jn.l,Yn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zn=new N;N.NAMES=qn;var Qn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new N(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},$n=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new N(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},er=class extends Un{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},tr=new M,nr=new M,rr=new M,ir=new M,ar=new M,or=new M,sr=new M,cr=new M,lr=new M,ur=new M,dr=new dn,fr=new dn,pr=new dn,mr=class e{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tr.subVectors(e,t),r.cross(tr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){tr.subVectors(r,t),nr.subVectors(n,t),rr.subVectors(e,t);let a=tr.dot(tr),o=tr.dot(nr),s=tr.dot(rr),c=nr.dot(nr),l=nr.dot(rr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ir)!==null&&ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ir)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ir.x),s.addScaledVector(a,ir.y),s.addScaledVector(o,ir.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return dr.setScalar(0),fr.setScalar(0),pr.setScalar(0),dr.fromBufferAttribute(e,t),fr.fromBufferAttribute(e,n),pr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(dr,i.x),a.addScaledVector(fr,i.y),a.addScaledVector(pr,i.z),a}static isFrontFacing(e,t,n,r){return tr.subVectors(n,t),nr.subVectors(e,t),tr.cross(nr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),tr.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ar.subVectors(r,n),or.subVectors(i,n),cr.subVectors(e,n);let s=ar.dot(cr),c=or.dot(cr);if(s<=0&&c<=0)return t.copy(n);lr.subVectors(e,r);let l=ar.dot(lr),u=or.dot(lr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ar,a);ur.subVectors(e,i);let f=ar.dot(ur),p=or.dot(ur);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(or,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return sr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(sr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hr=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_r.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_r.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,_r):_r.fromBufferAttribute(r,t),_r.applyMatrix4(e.matrixWorld),this.expandByPoint(_r);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_r),_r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Er.subVectors(this.max,Tr),yr.subVectors(e.a,Tr),br.subVectors(e.b,Tr),xr.subVectors(e.c,Tr),Sr.subVectors(br,yr),Cr.subVectors(xr,br),wr.subVectors(yr,xr);let t=[0,-Sr.z,Sr.y,0,-Cr.z,Cr.y,0,-wr.z,wr.y,Sr.z,0,-Sr.x,Cr.z,0,-Cr.x,wr.z,0,-wr.x,-Sr.y,Sr.x,0,-Cr.y,Cr.x,0,-wr.y,wr.x,0];return!kr(t,yr,br,xr,Er)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,yr,br,xr,Er))?!1:(Dr.crossVectors(Sr,Cr),t=[Dr.x,Dr.y,Dr.z],kr(t,yr,br,xr,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_r).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_r).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gr=[new M,new M,new M,new M,new M,new M,new M,new M],_r=new M,vr=new hr,yr=new M,br=new M,xr=new M,Sr=new M,Cr=new M,wr=new M,Tr=new M,Er=new M,Dr=new M,Or=new M;function kr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Or.fromArray(e,a);let o=i.x*Math.abs(Or.x)+i.y*Math.abs(Or.y)+i.z*Math.abs(Or.z),s=t.dot(Or),c=n.dot(Or),l=r.dot(Or);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ar=new M,jr=new j,Mr=0,Nr=class extends _t{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=nt,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix4(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyNormalMatrix(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.transformDirection(e),this.setXYZ(t,Ar.x,Ar.y,Ar.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ht(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class extends Nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fr=class extends Nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ir=class extends Nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lr=new hr,Rr=new M,zr=new M,Br=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Lr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Rr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(zr)),this.expandByPoint(Rr.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vr=0,Hr=new gn,Ur=new Un,Wr=new M,Gr=new hr,Kr=new hr,qr=new M,Jr=class e extends _t{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=St(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(at(e)?Fr:Pr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Jt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hr.makeRotationFromQuaternion(e),this.applyMatrix4(Hr),this}rotateX(e){return Hr.makeRotationX(e),this.applyMatrix4(Hr),this}rotateY(e){return Hr.makeRotationY(e),this.applyMatrix4(Hr),this}rotateZ(e){return Hr.makeRotationZ(e),this.applyMatrix4(Hr),this}translate(e,t,n){return Hr.makeTranslation(e,t,n),this.applyMatrix4(Hr),this}scale(e,t,n){return Hr.makeScale(e,t,n),this.applyMatrix4(Hr),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ir(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&ft(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Gr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(this.boundingBox.min,Gr.min),this.boundingBox.expandByPoint(qr),qr.addVectors(this.boundingBox.max,Gr.max),this.boundingBox.expandByPoint(qr)):(this.boundingBox.expandByPoint(Gr.min),this.boundingBox.expandByPoint(Gr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new M,1/0);return}if(e){let n=this.boundingSphere.center;if(Gr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Kr.setFromBufferAttribute(n),this.morphTargetsRelative?(qr.addVectors(Gr.min,Kr.min),Gr.expandByPoint(qr),qr.addVectors(Gr.max,Kr.max),Gr.expandByPoint(qr)):(Gr.expandByPoint(Kr.min),Gr.expandByPoint(Kr.max))}Gr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)qr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(qr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)qr.fromBufferAttribute(a,t),o&&(Wr.fromBufferAttribute(e,t),qr.add(Wr)),r=Math.max(r,n.distanceToSquared(qr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new M,s[e]=new M;let c=new M,l=new M,u=new M,d=new j,f=new j,p=new j,m=new M,h=new M;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new M,y=new M,b=new M,x=new M;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new M,i=new M,a=new M,o=new M,s=new M,c=new M,l=new M,u=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qr.fromBufferAttribute(e,t),qr.normalize(),e.setXYZ(t,qr.x,qr.y,qr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Nr(a,r,i)}if(this.index===null)return ft(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=nt,this.updateRanges=[],this.version=0,this.uuid=St()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=St()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=St()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Xr=new M,Zr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix4(e),this.setXYZ(t,Xr.x,Xr.y,Xr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyNormalMatrix(e),this.setXYZ(t,Xr.x,Xr.y,Xr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.transformDirection(e),this.setXYZ(t,Xr.x,Xr.y,Xr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ht(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ht(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ht(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ht(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ht(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){ut(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Nr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ut(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qr=new M,$r=new M,ei=new Jt,ti=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Qr.subVectors(n,t).cross($r.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Qr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ei.getNormalMatrix(e),r=this.coplanarPoint(Qr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ni=0,ri=class extends _t{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ni++}),this.uuid=St(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new N(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tt,this.stencilZFail=tt,this.stencilZPass=tt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new N().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ti().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new j().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ii=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new N(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ai,oi=new M,si=new M,ci=new M,li=new j,ui=new j,di=new gn,fi=new M,pi=new M,mi=new M,hi=new j,gi=new j,_i=new j,vi=class extends Un{constructor(e=new ii){if(super(),this.isSprite=!0,this.type=`Sprite`,ai===void 0){ai=new Jr;let e=new Yr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ai.setIndex([0,1,2,0,2,3]),ai.setAttribute(`position`,new Zr(e,3,0,!1)),ai.setAttribute(`uv`,new Zr(e,2,3,!1))}this.geometry=ai,this.material=e,this.center=new j(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&pt(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),si.setFromMatrixScale(this.matrixWorld),di.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ci.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&si.multiplyScalar(-ci.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;yi(fi.set(-.5,-.5,0),ci,a,si,r,i),yi(pi.set(.5,-.5,0),ci,a,si,r,i),yi(mi.set(.5,.5,0),ci,a,si,r,i),hi.set(0,0),gi.set(1,0),_i.set(1,1);let o=e.ray.intersectTriangle(fi,pi,mi,!1,oi);if(o===null&&(yi(pi.set(-.5,.5,0),ci,a,si,r,i),gi.set(0,1),o=e.ray.intersectTriangle(fi,mi,pi,!1,oi),o===null))return;let s=e.ray.origin.distanceTo(oi);s<e.near||s>e.far||t.push({distance:s,point:oi.clone(),uv:mr.getInterpolation(oi,fi,pi,mi,hi,gi,_i,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yi(e,t,n,r,i,a){li.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ui.copy(li):(ui.x=a*li.x-i*li.y,ui.y=i*li.x+a*li.y),e.copy(t),e.x+=ui.x,e.y+=ui.y,e.applyMatrix4(di)}var bi=new M,xi=new M,Si=new M,Ci=new M,wi=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){xi.copy(e).add(t).multiplyScalar(.5),Si.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(xi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Si),o=Ci.dot(this.direction),s=-Ci.dot(Si),c=Ci.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(xi).addScaledVector(Si,d),f}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),r=bi.dot(bi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,ee,te,ne,D,re,ie,ae;if(y>=b&&y>=x?(w=s,ee=u,D=p,ae=g,s>=0?(S=c,C=l,T=d,E=f,te=m,ne=h,re=_,ie=v):(S=l,C=c,T=f,E=d,te=h,ne=m,re=v,ie=_)):b>=x?(w=c,ee=d,D=m,ae=_,c>=0?(S=l,C=s,T=f,E=u,te=h,ne=p,re=v,ie=g):(S=s,C=l,T=u,E=f,te=p,ne=h,re=g,ie=v)):(w=l,ee=f,D=h,ae=v,l>=0?(S=s,C=c,T=u,E=d,te=p,ne=m,re=g,ie=_):(S=c,C=s,T=d,E=u,te=m,ne=p,re=_,ie=g)),w===0)return null;let oe=S/w,se=C/w,O=1/w,ce=T-oe*ee,le=E-se*ee,ue=te-oe*D,de=ne-se*D,fe=re-oe*ae,pe=ie-se*ae,me=fe*de-pe*ue,he=ce*pe-le*fe,ge=ue*le-de*ce;if(r){if(me<0||he<0||ge<0)return null}else if((me<0||he<0||ge<0)&&(me>0||he>0||ge>0))return null;let _e=me+he+ge;if(_e===0)return null;let ve=O*(me*ee+he*D+ge*ae);return(_e>0?ve<0:ve>0)?null:this.at(ve/_e,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ti=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new N(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ei=new gn,Di=new wi,Oi=new Br,ki=new M,Ai=new M,ji=new M,Mi=new M,Ni=new M,Pi=new M,Fi=new M,Ii=new M,Li=class extends Un{constructor(e=new Jr,t=new Ti){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Pi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ni.fromBufferAttribute(s,e),a?Pi.addScaledVector(Ni,r):Pi.addScaledVector(Ni.sub(t),r))}t.add(Pi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(i),Di.copy(e.ray).recast(e.near),!(Oi.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Oi,ki)===null||Di.origin.distanceToSquared(ki)>(e.far-e.near)**2))&&(Ei.copy(i).invert(),Di.copy(e.ray).applyMatrix4(Ei),(n.boundingBox===null||Di.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=zi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=zi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=zi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=zi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ii.copy(s),Ii.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ii);return l<n.near||l>n.far?null:{distance:l,point:Ii.clone(),object:e}}function zi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ai),e.getVertexPosition(c,ji),e.getVertexPosition(l,Mi);let u=Ri(e,t,n,r,Ai,ji,Mi,Fi);if(u){let e=new M;mr.getBarycoord(Fi,Ai,ji,Mi,e),i&&(u.uv=mr.getInterpolatedAttribute(i,s,c,l,e,new j)),a&&(u.uv1=mr.getInterpolatedAttribute(a,s,c,l,e,new j)),o&&(u.normal=mr.getInterpolatedAttribute(o,s,c,l,e,new M),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new M,materialIndex:0};mr.getNormal(Ai,ji,Mi,t.normal),u.face=t,u.barycoord=e}return u}var Bi=new dn,Vi=new dn,Hi=new dn,Ui=new dn,Wi=new gn,Gi=new M,Ki=new Br,qi=new gn,Ji=new wi,Yi=class extends Li{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new gn,this.bindMatrixInverse=new gn,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hr),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Gi),this.boundingBox.expandByPoint(Gi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Br),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Gi),this.boundingSphere.expandByPoint(Gi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(r),e.ray.intersectsSphere(Ki)!==!1&&(qi.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(qi),(this.boundingBox===null||Ji.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ji)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():ft(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Vi.fromBufferAttribute(r.attributes.skinIndex,e),Hi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Bi.copy(t),t.set(0,0,0,0)):(Bi.set(...t,1),t.set(0,0,0)),Bi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Hi.getComponent(e);if(r!==0){let i=Vi.getComponent(e);Wi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ui.copy(Bi).applyMatrix4(Wi),r)}}return t.isVector4&&(t.w=Bi.w),t.applyMatrix4(this.bindMatrixInverse)}},Xi=class extends Un{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Zi=class extends un{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qi=new gn,$i=new gn,ea=class e{constructor(e=[],t=[]){this.uuid=St(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ft(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new gn)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new gn;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:$i;Qi.multiplyMatrices(i,t[r]),Qi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Zi(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(ft(`Skeleton: No bone found with UUID:`,r),i=new Xi),this.bones.push(i),this.boneInverses.push(new gn().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},ta=class extends Nr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},na=new gn,ra=new gn,ia=[],aa=new hr,oa=new gn,sa=new Li,ca=new Br,la=class extends Li{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,oa)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,na),aa.copy(e.boundingBox).applyMatrix4(na),this.boundingBox.union(aa)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,na),ca.copy(e.boundingSphere).applyMatrix4(na),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,na),ra.multiplyMatrices(n,na),sa.matrixWorld=ra,sa.raycast(e,ia);for(let e=0,n=ia.length;e<n;e++){let n=ia[e];n.instanceId=i,n.object=this,t.push(n)}ia.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zi(new Float32Array(r*this.count),r,this.count,te,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ua=new Br,da=new j(.5,.5),fa=new M,pa=class{constructor(e=new ti,t=new ti,n=new ti,r=new ti,i=new ti,a=new ti){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=it,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ua.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ua.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ua)}intersectsSprite(e){return ua.center.set(0,0,0),ua.radius=.7071067811865476+da.distanceTo(e.center),ua.applyMatrix4(e.matrixWorld),this.intersectsSphere(ua)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ma=class extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new N(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ha=new M,ga=new M,_a=new gn,va=new wi,ya=new Br,ba=new M,xa=new M,Sa=class extends Un{constructor(e=new Jr,t=new ma){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ha.fromBufferAttribute(t,e-1),ga.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ha.distanceTo(ga);e.setAttribute(`lineDistance`,new Ir(n,1))}else ft(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ya.radius+=i,e.ray.intersectsSphere(ya)===!1)return;_a.copy(r).invert(),va.copy(e.ray).applyMatrix4(_a);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ca(this,e,va,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ca(this,e,va,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ca(this,e,va,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ca(this,e,va,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ca(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ha.fromBufferAttribute(s,i),ga.fromBufferAttribute(s,a),n.distanceSqToSegment(ha,ga,ba,xa)>r)return;ba.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ba);if(!(c<t.near||c>t.far))return{distance:c,point:xa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var wa=new M,Ta=new M,Ea=class extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)wa.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+wa.distanceTo(Ta);e.setAttribute(`lineDistance`,new Ir(n,1))}else ft(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Da=class extends Sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Oa=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new N(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ka=new gn,Aa=new wi,ja=new Br,Ma=new M,Na=class extends Un{constructor(e=new Jr,t=new Oa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),ja.radius+=i,e.ray.intersectsSphere(ja)===!1)return;ka.copy(r).invert(),Aa.copy(e.ray).applyMatrix4(ka);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ma.fromBufferAttribute(l,n),Pa(Ma,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ma.fromBufferAttribute(l,a),Pa(Ma,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Pa(e,t,n,r,i,a,o){let s=Aa.distanceSqToPoint(e);if(s<n){let n=new M;Aa.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fa=class extends un{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ia=class extends un{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},La=class extends un{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new on(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ra=class extends La{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},za=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ba=class e extends Jr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ir(c,3)),this.setAttribute(`normal`,new Ir(l,3)),this.setAttribute(`uv`,new Ir(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,ee=new M;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)ee[e]=(s*v-b)*r,ee[t]=o*i,ee[n]=S,c.push(ee.x,ee.y,ee.z),ee[e]=0,ee[t]=0,ee[n]=m>0?1:-1,l.push(ee.x,ee.y,ee.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Va=class e extends Jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new M,l=new j;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ir(a,3)),this.setAttribute(`normal`,new Ir(o,3)),this.setAttribute(`uv`,new Ir(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ha=class e extends Jr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ir(u,3)),this.setAttribute(`normal`,new Ir(d,3)),this.setAttribute(`uv`,new Ir(f,2));function _(){let a=new M,_=new M,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new j,m=new M,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ua=class e extends Ha{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wa=class e extends Jr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Ir(i,3)),this.setAttribute(`normal`,new Ir(i.slice(),3)),this.setAttribute(`uv`,new Ir(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new M,r=new M,i=new M;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new M;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new M;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new M,t=new M,n=new M,r=new M,o=new j,s=new j,c=new j;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ga=class e extends Wa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ka=class e extends Jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},qa=class e extends Jr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new M,p=new j;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ir(s,3)),this.setAttribute(`normal`,new Ir(c,3)),this.setAttribute(`uv`,new Ir(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ja=class e extends Jr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new M,d=new M,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ir(p,3)),this.setAttribute(`normal`,new Ir(m,3)),this.setAttribute(`uv`,new Ir(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ya=class e extends Jr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new M,f=new M,p=new M;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ir(c,3)),this.setAttribute(`normal`,new Ir(l,3)),this.setAttribute(`uv`,new Ir(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Xa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Qa(i))i.isRenderTargetTexture?(ft(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Qa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Za(e){let t={};for(let n=0;n<e.length;n++){let r=Xa(e[n]);for(let e in r)t[e]=r[e]}return t}function Qa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function $a(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function eo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var to={clone:Xa,merge:Za},no=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ro=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,io=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=no,this.fragmentShader=ro,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xa(e.uniforms),this.uniformsGroups=$a(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new N().setHex(r.value);break;case`v2`:this.uniforms[n].value=new j().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new M().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new dn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Jt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new gn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ao=class extends io{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},oo=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new N(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new N(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},so=class extends oo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new N(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new N(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new N(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},co=class extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new N(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new N(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},lo=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Xe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uo=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function po(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function mo(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function ho(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function go(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var _o=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},vo=class extends _o{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ge,endingEnd:Ge}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ke:i=e,o=2*t-n;break;case qe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ke:a=e,s=2*n-t;break;case qe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},yo=class extends _o{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},bo=class extends _o{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},xo=class extends _o{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=wo(n,t,g,y,r);i[p]=So(x,o,_,b,m)}return i}};function So(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Co(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function wo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=So(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Co(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var To=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),po(e.settings)&&(n.settings={inTangents:fo(e.settings.inTangents,Array),outTangents:fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case He:t=this.InterpolantFactoryMethodDiscrete;break;case A:t=this.InterpolantFactoryMethodLinear;break;case Ue:t=this.InterpolantFactoryMethodSmooth;break;case We:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return ft(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return He;case this.InterpolantFactoryMethodLinear:return A;case this.InterpolantFactoryMethodSmooth:return Ue;case this.InterpolantFactoryMethodBezier:return We}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;po(this.settings)&&(Eo(this.settings.inTangents,e),Eo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(pt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){pt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){pt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ot(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){pt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ue,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,po(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Eo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}To.prototype.ValueTypeName=``,To.prototype.TimeBufferType=Float32Array,To.prototype.ValueBufferType=Float32Array,To.prototype.DefaultInterpolation=A;var Do=class extends To{constructor(e,t,n){super(e,t,n)}};Do.prototype.ValueTypeName=`bool`,Do.prototype.ValueBufferType=Array,Do.prototype.DefaultInterpolation=He,Do.prototype.InterpolantFactoryMethodLinear=void 0,Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends To{constructor(e,t,n,r){super(e,t,n,r)}};Oo.prototype.ValueTypeName=`color`;var ko=class extends To{constructor(e,t,n,r){super(e,t,n,r)}};ko.prototype.ValueTypeName=`number`;var Ao=class extends _o{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Gt.slerpFlat(i,0,a,c-o,a,c,s);return i}},jo=class extends To{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}};jo.prototype.ValueTypeName=`quaternion`,jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends To{constructor(e,t,n){super(e,t,n)}};Mo.prototype.ValueTypeName=`string`,Mo.prototype.ValueBufferType=Array,Mo.prototype.DefaultInterpolation=He,Mo.prototype.InterpolantFactoryMethodLinear=void 0,Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends To{constructor(e,t,n,r){super(e,t,n,r)}};No.prototype.ValueTypeName=`vector`;var Po=class{constructor(e=``,t=-1,n=[],r=Je){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=St(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Io(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(To.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=mo(o);o=ho(o,1,c),s=ho(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new ko(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Fo(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return ko;case`vector`:case`vector2`:case`vector3`:case`vector4`:return No;case`color`:return Oo;case`quaternion`:return jo;case`bool`:case`boolean`:return Do;case`string`:return Mo}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Io(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Fo(e.type);if(e.times===void 0){let t=[],n=[];go(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),po(e.settings)&&(n.settings={inTangents:fo(e.settings.inTangents,Float32Array),outTangents:fo(e.settings.outTangents,Float32Array)}),n}var Lo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ro(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ro(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ro(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var zo=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Bo=class{constructor(e){this.manager=e===void 0?zo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Vo={},Ho=class extends Error{constructor(e,t){super(e),this.response=t}},Uo=class extends Bo{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Lo.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(Vo[e]!==void 0){Vo[e].push({onLoad:t,onProgress:n,onError:r});return}Vo[e]=[],Vo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&ft(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=Vo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new Ho(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Lo.add(`file:${e}`,t);let n=Vo[e];delete Vo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=Vo[e];if(n===void 0)throw this.manager.itemError(e),t;delete Vo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Wo=new WeakMap,Go=class extends Bo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Lo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Wo.get(a);e===void 0&&(e=[],Wo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=st(`img`);function s(){l(),t&&t(this);let n=Wo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Wo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Lo.remove(`image:${e}`);let n=Wo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Wo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Lo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Ko=class extends Bo{constructor(e){super(e)}load(e,t,n,r){let i=new un,a=new Go(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},qo=class extends Un{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new N(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jo=class extends qo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new N(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yo=new gn,Xo=new M,Zo=new M,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new gn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pa,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),Zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$o=new M,es=new Gt,ts=new M,ns=class extends Un{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new gn,this.projectionMatrix=new gn,this.projectionMatrixInverse=new gn,this.coordinateSystem=it,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($o,es,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,es,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($o,es,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,es,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new M,is=new j,as=new j,os=class extends ns{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xt*2*Math.atan(Math.tan(bt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,is,as),t.subVectors(as,is)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ss=class extends Qo{constructor(){super(new os(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=xt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},cs=class extends qo{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ss}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ls=class extends Qo{constructor(){super(new os(90,1,.5,500)),this.isPointLightShadow=!0}},us=class extends qo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ls}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ds=class extends ns{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fs=class extends Qo{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ps=class extends qo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new fs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ms=class extends qo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},hs=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},gs=new WeakMap,_s=class extends Bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&ft(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&ft(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Lo.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{gs.has(a)===!0?(r&&r(gs.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Lo.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),gs.set(s,t),Lo.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Lo.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},vs=-90,ys=1,bs=class extends Un{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new os(vs,ys,e,t);r.layers=this.layers,this.add(r);let i=new os(vs,ys,e,t);i.layers=this.layers,this.add(i);let a=new os(vs,ys,e,t);a.layers=this.layers,this.add(a);let o=new os(vs,ys,e,t);o.layers=this.layers,this.add(o);let s=new os(vs,ys,e,t);s.layers=this.layers,this.add(s);let c=new os(vs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xs=class extends os{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ss=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){Gt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;Gt.multiplyQuaternionsFlat(e,a,e,t,e,n),Gt.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Cs=`\\[\\]\\.:\\/`,ws=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ts=`[^\\[\\]\\.:\\/]`,Es=`[^`+Cs.replace(`\\.`,``)+`]`,Ds=`((?:WC+[\\/:])*)`.replace(`WC`,Ts),Os=`(WCOD+)?`.replace(`WCOD`,Es),ks=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ts),As=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ts),js=RegExp(`^`+Ds+Os+ks+As+`$`),Ms=[`material`,`materials`,`bones`,`map`],Ns=class{constructor(e,t,n){let r=n||Ps.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ps=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ws,``)}static parseTrackName(e){let t=js.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ms.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ft(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){pt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){pt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){pt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){pt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){pt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){pt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){pt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;pt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){pt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){pt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ps.Composite=Ns,Ps.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ps.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ps.prototype.GetterByBindingType=[Ps.prototype._getValue_direct,Ps.prototype._getValue_array,Ps.prototype._getValue_arrayElement,Ps.prototype._getValue_toArray],Ps.prototype.SetterByBindingTypeAndVersioning=[[Ps.prototype._setValue_direct,Ps.prototype._setValue_direct_setNeedsUpdate,Ps.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_array,Ps.prototype._setValue_array_setNeedsUpdate,Ps.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_arrayElement,Ps.prototype._setValue_arrayElement_setNeedsUpdate,Ps.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ps.prototype._setValue_fromArray,Ps.prototype._setValue_fromArray_setNeedsUpdate,Ps.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fs=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:Ge,endingEnd:Ge};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Be,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case Ye:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case Je:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===Ve;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Ke,r.endingEnd=Ke):(r.endingStart=e?this.zeroSlopeAtStart?Ke:Ge:qe,r.endingEnd=t?this.zeroSlopeAtEnd?Ke:Ge:qe)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},Is=new Float32Array(1),Ls=class extends _t{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new Ss(Ps.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new yo(new Float32Array(2),new Float32Array(2),1,Is),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?Po.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?Je:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new Fs(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?Po.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Rs=new gn,zs=class{constructor(e,t,n=0,r=1/0){this.ray=new wi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Dn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Rs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rs),this}intersectObject(e,t=!0,n=[]){return Vs(e,this,n,t),n.sort(Bs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Vs(e[r],this,n,t);return n.sort(Bs),n}};function Bs(e,t){return e.distance-t.distance}function Vs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Vs(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Hs(e,t,n,r){let i=Us(r);switch(n){case C:return e*t;case te:return e*t/i.components*i.byteLength;case ne:return e*t/i.components*i.byteLength;case D:return e*t*2/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case O:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:case de:return Math.max(e,16)*Math.max(t,8)/4;case ce:case ue:return Math.max(e,8)*Math.max(t,8)/2;case fe:case pe:case he:case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case me:case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case be:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case je:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Me:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ne:case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Us(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?ft(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ws(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Gs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ks={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},P={common:{diffuse:{value:new N(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new N(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new M},probesMax:{value:new M},probesResolution:{value:new M}},points:{diffuse:{value:new N(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new N(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},qs={basic:{uniforms:Za([P.common,P.specularmap,P.envmap,P.aomap,P.lightmap,P.fog]),vertexShader:Ks.meshbasic_vert,fragmentShader:Ks.meshbasic_frag},lambert:{uniforms:Za([P.common,P.specularmap,P.envmap,P.aomap,P.lightmap,P.emissivemap,P.bumpmap,P.normalmap,P.displacementmap,P.fog,P.lights,{emissive:{value:new N(0)},envMapIntensity:{value:1}}]),vertexShader:Ks.meshlambert_vert,fragmentShader:Ks.meshlambert_frag},phong:{uniforms:Za([P.common,P.specularmap,P.envmap,P.aomap,P.lightmap,P.emissivemap,P.bumpmap,P.normalmap,P.displacementmap,P.fog,P.lights,{emissive:{value:new N(0)},specular:{value:new N(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ks.meshphong_vert,fragmentShader:Ks.meshphong_frag},standard:{uniforms:Za([P.common,P.envmap,P.aomap,P.lightmap,P.emissivemap,P.bumpmap,P.normalmap,P.displacementmap,P.roughnessmap,P.metalnessmap,P.fog,P.lights,{emissive:{value:new N(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ks.meshphysical_vert,fragmentShader:Ks.meshphysical_frag},toon:{uniforms:Za([P.common,P.aomap,P.lightmap,P.emissivemap,P.bumpmap,P.normalmap,P.displacementmap,P.gradientmap,P.fog,P.lights,{emissive:{value:new N(0)}}]),vertexShader:Ks.meshtoon_vert,fragmentShader:Ks.meshtoon_frag},matcap:{uniforms:Za([P.common,P.bumpmap,P.normalmap,P.displacementmap,P.fog,{matcap:{value:null}}]),vertexShader:Ks.meshmatcap_vert,fragmentShader:Ks.meshmatcap_frag},points:{uniforms:Za([P.points,P.fog]),vertexShader:Ks.points_vert,fragmentShader:Ks.points_frag},dashed:{uniforms:Za([P.common,P.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ks.linedashed_vert,fragmentShader:Ks.linedashed_frag},depth:{uniforms:Za([P.common,P.displacementmap]),vertexShader:Ks.depth_vert,fragmentShader:Ks.depth_frag},normal:{uniforms:Za([P.common,P.bumpmap,P.normalmap,P.displacementmap,{opacity:{value:1}}]),vertexShader:Ks.meshnormal_vert,fragmentShader:Ks.meshnormal_frag},sprite:{uniforms:Za([P.sprite,P.fog]),vertexShader:Ks.sprite_vert,fragmentShader:Ks.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ks.background_vert,fragmentShader:Ks.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Ks.backgroundCube_vert,fragmentShader:Ks.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ks.cube_vert,fragmentShader:Ks.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ks.equirect_vert,fragmentShader:Ks.equirect_frag},distance:{uniforms:Za([P.common,P.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ks.distance_vert,fragmentShader:Ks.distance_frag},shadow:{uniforms:Za([P.lights,P.fog,{color:{value:new N(0)},opacity:{value:1}}]),vertexShader:Ks.shadow_vert,fragmentShader:Ks.shadow_frag}};qs.physical={uniforms:Za([qs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new N(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new N(0)},specularColor:{value:new N(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Ks.meshphysical_vert,fragmentShader:Ks.meshphysical_frag};var Js={r:0,b:0,g:0},Ys=new gn,Xs=new Jt;Xs.set(-1,0,0,0,1,0,0,0,1);function Zs(e,t,n,r,i,a){let o=new N(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Li(new Ba(1,1,1),new io({name:`BackgroundCubeMaterial`,uniforms:Xa(qs.backgroundCube.uniforms),vertexShader:qs.backgroundCube.vertexShader,fragmentShader:qs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ys.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xs),l.material.toneMapped=$t.getTransfer(i.colorSpace)!==et,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Li(new Ka(2,2),new io({name:`BackgroundMaterial`,uniforms:Xa(qs.background.uniforms),vertexShader:qs.background.vertexShader,fragmentShader:qs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=$t.getTransfer(i.colorSpace)!==et,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Js,eo(e)),n.buffers.color.setClear(Js.r,Js.g,Js.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Qs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function $s(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ec(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(ft(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&ft(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function tc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ti,s=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var nc=4,rc=6,ic=20,ac=256,oc=new ds,sc=new N,cc=null,lc=0,uc=0,dc=!1,fc=new M,pc=new M,mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=fc}=i;cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,lc,uc),this._renderer.xr.enabled=dc,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:Qe,depthBuffer:!1},r=gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hc(r)),this._blurMaterial=yc(r,e,t),this._ggxMaterial=vc(r,e,t)}return r}_compileMaterial(e){let t=new Li(new Jr,e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,r,i){let a=new os(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(sc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Ba,new Ti({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(sc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;_c(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;_c(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-nc?n-d+nc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,_c(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,oc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,_c(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,oc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];_c(t,3*l*(r>this._lodMax-nc?r-this._lodMax+nc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,oc)}};function hc(e){let t=[],n=[],r=e,i=e-nc+1+rc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?pc.set(1,r,n):e===1?pc.set(-n,1,-r):e===2?pc.set(-n,r,1):e===3?pc.set(-1,r,-n):e===4?pc.set(-n,-1,r):pc.set(n,r,-1),pc.toArray(l,(e*6+t)*3)}}let u=new Jr;u.setAttribute(`position`,new Nr(c,3)),u.setAttribute(`outputDirection`,new Nr(l,3)),n.push(new Li(u,null)),r>nc&&r--}return{lodMeshes:n,sizeLods:t}}function gc(e,t,n){let r=new pn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function _c(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function vc(e,t,n){return new io({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ac,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yc(e,t,n){return new io({name:`SphericalGaussianBlur`,defines:{SAMPLES:ic,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bc(){return new io({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(){return new io({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cc=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ba(5,5,5),i=new io({name:`CubemapFromEquirect`,uniforms:Xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Li(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new bs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function wc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Cc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new mc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new mc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Tc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&mt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ec(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Fr:Pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Dc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Oc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:pt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function kc(e,t,n){let r=new WeakMap,i=new dn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new mn(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new j(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ac(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var jc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Mc(e,t,n,r,i,a){let o=new pn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Jr;l.setAttribute(`position`,new Ir([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ir([0,2,0,0,2,0],2));let u=new ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Li(l,u),f=new ds(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new pn(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new pn(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},$t.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=jc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Nc=new un,Pc=new La(1,1),Fc=new mn,Ic=new hn,Lc=new Fa,Rc=[],zc=[],Bc=new Float32Array(16),Vc=new Float32Array(9),Hc=new Float32Array(4);function Uc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Rc[i];if(a===void 0&&(a=new Float32Array(i),Rc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Wc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Gc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Kc(e,t){let n=zc[t];n===void 0&&(n=new Int32Array(t),zc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2fv(this.addr,t),Gc(n,t)}}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wc(n,t))return;e.uniform3fv(this.addr,t),Gc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4fv(this.addr,t),Gc(n,t)}}function Zc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Hc.set(r),e.uniformMatrix2fv(this.addr,!1,Hc),Gc(n,r)}}function Qc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Vc.set(r),e.uniformMatrix3fv(this.addr,!1,Vc),Gc(n,r)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Bc.set(r),e.uniformMatrix4fv(this.addr,!1,Bc),Gc(n,r)}}function el(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2iv(this.addr,t),Gc(n,t)}}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wc(n,t))return;e.uniform3iv(this.addr,t),Gc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4iv(this.addr,t),Gc(n,t)}}function il(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2uiv(this.addr,t),Gc(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wc(n,t))return;e.uniform3uiv(this.addr,t),Gc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4uiv(this.addr,t),Gc(n,t)}}function cl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Pc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Pc):a=Nc,n.setTexture2D(t||a,i)}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ic,i)}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Lc,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Fc,i)}function fl(e){switch(e){case 5126:return qc;case 35664:return Jc;case 35665:return Yc;case 35666:return Xc;case 35674:return Zc;case 35675:return Qc;case 35676:return $c;case 5124:case 35670:return el;case 35667:case 35671:return tl;case 35668:case 35672:return nl;case 35669:case 35673:return rl;case 5125:return il;case 36294:return al;case 36295:return ol;case 36296:return sl;case 35678:case 36198:case 36298:case 36306:case 35682:return cl;case 35679:case 36299:case 36307:return ll;case 35680:case 36300:case 36308:case 36293:return ul;case 36289:case 36303:case 36311:case 36292:return dl}}function pl(e,t){e.uniform1fv(this.addr,t)}function ml(e,t){let n=Uc(t,this.size,2);e.uniform2fv(this.addr,n)}function hl(e,t){let n=Uc(t,this.size,3);e.uniform3fv(this.addr,n)}function gl(e,t){let n=Uc(t,this.size,4);e.uniform4fv(this.addr,n)}function _l(e,t){let n=Uc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vl(e,t){let n=Uc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yl(e,t){let n=Uc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function bl(e,t){e.uniform1iv(this.addr,t)}function xl(e,t){e.uniform2iv(this.addr,t)}function Sl(e,t){e.uniform3iv(this.addr,t)}function Cl(e,t){e.uniform4iv(this.addr,t)}function wl(e,t){e.uniform1uiv(this.addr,t)}function Tl(e,t){e.uniform2uiv(this.addr,t)}function El(e,t){e.uniform3uiv(this.addr,t)}function Dl(e,t){e.uniform4uiv(this.addr,t)}function Ol(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Pc:Nc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function kl(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ic,a[e])}function Al(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Lc,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Fc,a[e])}function Ml(e){switch(e){case 5126:return pl;case 35664:return ml;case 35665:return hl;case 35666:return gl;case 35674:return _l;case 35675:return vl;case 35676:return yl;case 5124:case 35670:return bl;case 35667:case 35671:return xl;case 35668:case 35672:return Sl;case 35669:case 35673:return Cl;case 5125:return wl;case 36294:return Tl;case 36295:return El;case 36296:return Dl;case 35678:case 36198:case 36298:case 36306:case 35682:return Ol;case 35679:case 36299:case 36307:return kl;case 35680:case 36300:case 36308:case 36293:return Al;case 36289:case 36303:case 36311:case 36292:return jl}}var Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fl(t.type)}},Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ml(t.type)}},Fl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Ll(e,t){e.seq.push(t),e.map[t.id]=t}function Rl(e,t,n){let r=e.name,i=r.length;for(Il.lastIndex=0;;){let a=Il.exec(r),o=Il.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ll(n,l===void 0?new Nl(s,e,t):new Pl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Fl(s),Ll(n,e)),n=e}}}var zl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Rl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Bl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Vl=37297,Hl=0;function Ul(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Wl=new Jt;function Gl(e){$t._getMatrix(Wl,$t.workingColorSpace,e);let t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(e)){case $e:return[t,`LinearTransferOETF`];case et:return[t,`sRGBTransferOETF`];default:return ft(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Kl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ul(e.getShaderSource(t),r)}return i}function ql(e,t){let n=Gl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Jl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Yl(e,t){let n=Jl[t];return n===void 0?(ft(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Xl=new M;function Zl(){return $t.getLuminanceCoefficients(Xl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Xl.x.toFixed(4)}, ${Xl.y.toFixed(4)}, ${Xl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ql(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(tu).join(`
`)}function $l(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function eu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function tu(e){return e!==``}function nu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ru(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iu=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(e){return e.replace(iu,su)}var ou=new Map;function su(e,t){let n=Ks[t];if(n===void 0){let e=ou.get(t);if(e!==void 0)n=Ks[e],ft(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return au(n)}var cu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(e){return e.replace(cu,uu)}function uu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function du(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var fu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function pu(e){return fu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var mu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function hu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:mu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var gu={302:`ENVMAP_MODE_REFRACTION`};function _u(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:gu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var vu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function yu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:vu[e.combine]||`ENVMAP_BLENDING_NONE`}function bu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function xu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=pu(n),l=hu(n),u=_u(n),d=yu(n),f=bu(n),p=Ql(n),m=$l(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(tu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(tu).join(`
`),_.length>0&&(_+=`
`)):(g=[du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(tu).join(`
`),_=[du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ks.tonemapping_pars_fragment,n.toneMapping===0?``:Yl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ks.colorspace_pars_fragment,ql(`linearToOutputTexel`,n.outputColorSpace),Zl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(tu).join(`
`)),o=au(o),o=nu(o,n),o=ru(o,n),s=au(s),s=nu(s,n),s=ru(s,n),o=lu(o),s=lu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Bl(i,i.VERTEX_SHADER,y),S=Bl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Kl(i,x,`vertex`),n=Kl(i,S,`fragment`);pt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):ft(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new zl(i,h),T=eu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Vl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Hl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Su=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=Su++,this.code=e,this.usedTimes=0}};function Tu(e){return e===1030||e===37490||e===36285}function Eu(e,t,n,r,i,a){let o=new Dn,s=new Cu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&ft(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let ee,te,ne,D;if(C){let e=qs[C];ee=e.vertexShader,te=e.fragmentShader}else{ee=i.vertexShader,te=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ne=e.id,D=t.id}let re=e.getRenderTarget(),ie=e.state.buffers.depth.getReversed(),ae=h.isInstancedMesh===!0,oe=h.isBatchedMesh===!0,se=!!i.map,O=!!i.matcap,ce=!!x,le=!!i.aoMap,ue=!!i.lightMap,de=!!i.bumpMap&&i.wireframe===!1,fe=!!i.normalMap,pe=!!i.displacementMap,me=!!i.emissiveMap,he=!!i.metalnessMap,ge=!!i.roughnessMap,_e=i.anisotropy>0,ve=i.clearcoat>0,ye=i.dispersion>0,be=i.retroreflectivity>0,xe=i.iridescence>0,Se=i.sheen>0,Ce=i.transmission>0,we=_e&&!!i.anisotropyMap,Te=ve&&!!i.clearcoatMap,Ee=ve&&!!i.clearcoatNormalMap,De=ve&&!!i.clearcoatRoughnessMap,Oe=xe&&!!i.iridescenceMap,ke=xe&&!!i.iridescenceThicknessMap,Ae=Se&&!!i.sheenColorMap,je=Se&&!!i.sheenRoughnessMap,Me=!!i.specularMap,Ne=!!i.specularColorMap,Pe=!!i.specularIntensityMap,Fe=Ce&&!!i.transmissionMap,Ie=Ce&&!!i.thicknessMap,Le=!!i.gradientMap,Re=!!i.alphaMap,ze=i.alphaTest>0,k=!!i.alphaHash,Be=!!i.extensions,Ve=0;i.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ve=e.toneMapping);let He={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:ee,fragmentShader:te,defines:i.defines,customVertexShaderID:ne,customFragmentShaderID:D,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:oe,batchingColor:oe&&h._colorsTexture!==null,instancing:ae,instancingColor:ae&&h.instanceColor!==null,instancingMorph:ae&&h.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:se,matcap:O,envMap:ce,envMapMode:ce&&x.mapping,envMapCubeUVHeight:S,aoMap:le,lightMap:ue,bumpMap:de,normalMap:fe,displacementMap:pe,emissiveMap:me,normalMapObjectSpace:fe&&i.normalMapType===1,normalMapTangentSpace:fe&&i.normalMapType===0,packedNormalMap:fe&&i.normalMapType===0&&Tu(i.normalMap.format),metalnessMap:he,roughnessMap:ge,anisotropy:_e,anisotropyMap:we,clearcoat:ve,clearcoatMap:Te,clearcoatNormalMap:Ee,clearcoatRoughnessMap:De,dispersion:ye,retroreflection:be,iridescence:xe,iridescenceMap:Oe,iridescenceThicknessMap:ke,sheen:Se,sheenColorMap:Ae,sheenRoughnessMap:je,specularMap:Me,specularColorMap:Ne,specularIntensityMap:Pe,transmission:Ce,transmissionMap:Fe,thicknessMap:Ie,gradientMap:Le,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Re,alphaTest:ze,alphaHash:k,combine:i.combine,mapUv:se&&m(i.map.channel),aoMapUv:le&&m(i.aoMap.channel),lightMapUv:ue&&m(i.lightMap.channel),bumpMapUv:de&&m(i.bumpMap.channel),normalMapUv:fe&&m(i.normalMap.channel),displacementMapUv:pe&&m(i.displacementMap.channel),emissiveMapUv:me&&m(i.emissiveMap.channel),metalnessMapUv:he&&m(i.metalnessMap.channel),roughnessMapUv:ge&&m(i.roughnessMap.channel),anisotropyMapUv:we&&m(i.anisotropyMap.channel),clearcoatMapUv:Te&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(i.sheenRoughnessMap.channel),specularMapUv:Me&&m(i.specularMap.channel),specularColorMapUv:Ne&&m(i.specularColorMap.channel),specularIntensityMapUv:Pe&&m(i.specularIntensityMap.channel),transmissionMapUv:Fe&&m(i.transmissionMap.channel),thicknessMapUv:Ie&&m(i.thicknessMap.channel),alphaMapUv:Re&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(fe||_e),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(se||Re),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&fe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ve,decodeVideoTexture:se&&i.map.isVideoTexture===!0&&$t.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:me&&i.emissiveMap.isVideoTexture===!0&&$t.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Be&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Be&&i.extensions.multiDraw===!0||oe)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=qs[t];n=to.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new xu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Du(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ou(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ku(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Au(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ou),r.length>1&&r.sort(t||ku),i.length>1&&i.sort(t||ku)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ju(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Au,e.set(t,[i])):n>=r.length?(i=new Au,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Mu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new M,color:new N};break;case`SpotLight`:n={position:new M,direction:new M,color:new N,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new M,color:new N,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new M,skyColor:new N,groundColor:new N};break;case`RectAreaLight`:n={color:new N,position:new M,halfWidth:new M,halfHeight:new M}}return e[t.id]=n,n}}}function Nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Pu=0;function Fu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Iu(e){let t=new Mu,n=Nu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new M);let i=new M,a=new gn,o=new gn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Fu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=P.LTC_FLOAT_1,r.rectAreaLTC2=P.LTC_FLOAT_2):(r.rectAreaLTC1=P.LTC_HALF_1,r.rectAreaLTC2=P.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Pu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Lu(e){let t=new Iu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ru(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Lu(e),t.set(n,[a])):r>=i.length?(a=new Lu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var zu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vu=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)],Hu=[new M(0,-1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1),new M(0,-1,0),new M(0,-1,0)],Uu=new gn,Wu=new M,Gu=new M;function Ku(e,t,n){let r=new pa,a=new j,o=new j,c=new dn,l=new lo,u=new uo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new io({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:zu,fragmentShader:Bu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Jr;y.setAttribute(`position`,new Nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Li(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(ft(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){ft(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){ft(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new pn(a.x,a.y,{format:D,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new La(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new Cc(a.x),p.map.depthTexture=new Ra(a.x,h)):(p.map=new pn(a.x,a.y),p.map.depthTexture=new La(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Wu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Wu),Gu.copy(e.position),Gu.add(Vu[t]),e.up.copy(Hu[t]),e.lookAt(Gu),e.updateMatrixWorld(),n.makeTranslation(-Wu.x,-Wu.y,-Wu.z),Uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Uu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new pn(a.x,a.y,{format:D,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,ee)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function ee(e){e.target.removeEventListener(`dispose`,ee);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function qu(e,t){function n(){let t=!1,n=new dn,r=null,i=new dn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?he(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=gt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?he(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new N(0,0,0),T=0,E=!1,ee=null,te=null,ne=null,D=null,re=null,ie=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,oe=0,se=e.getParameter(e.VERSION);se.indexOf(`WebGL`)===-1?se.indexOf(`OpenGL ES`)!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ae=oe>=2):(oe=parseFloat(/^WebGL (\d)/.exec(se)[1]),ae=oe>=1);let O=null,ce={},le=e.getParameter(e.SCISSOR_BOX),ue=e.getParameter(e.VIEWPORT),de=new dn().fromArray(le),fe=new dn().fromArray(ue);function pe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let me={};me[e.TEXTURE_2D]=pe(e.TEXTURE_2D,e.TEXTURE_2D,1),me[e.TEXTURE_CUBE_MAP]=pe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[e.TEXTURE_2D_ARRAY]=pe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),me[e.TEXTURE_3D]=pe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),he(e.DEPTH_TEST),o.setFunc(3),we(!1),Te(1),he(e.CULL_FACE),Se(0);function he(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ge(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function _e(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ve(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ye(t){return h!==t&&(e.useProgram(t),h=t,!0)}let be={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};be[103]=e.MIN,be[104]=e.MAX;let xe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function Se(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ge(e.BLEND),g=!1);return}if(g===!1&&(he(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:pt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:pt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:pt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:pt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(be[n],be[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(xe[r],xe[i],xe[o],xe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function Ce(t,n){t.side===2?ge(e.CULL_FACE):he(e.CULL_FACE);let r=t.side===1;n&&(r=!r),we(r),t.blending===1&&t.transparent===!1?Se(0):Se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),De(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function we(t){ee!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),ee=t)}function Te(t){t===0?ge(e.CULL_FACE):(he(e.CULL_FACE),t!==te&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),te=t}function Ee(t){t!==ne&&(ae&&e.lineWidth(t),ne=t)}function De(t,n,r){t?(he(e.POLYGON_OFFSET_FILL),(D!==n||re!==r)&&(D=n,re=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ge(e.POLYGON_OFFSET_FILL)}function Oe(t){t?he(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function ke(t){t===void 0&&(t=e.TEXTURE0+ie-1),O!==t&&(e.activeTexture(t),O=t)}function Ae(t,n,r){r===void 0&&(r=O===null?e.TEXTURE0+ie-1:O);let i=ce[r];i===void 0&&(i={type:void 0,texture:void 0},ce[r]=i),(i.type!==t||i.texture!==n)&&(O!==r&&(e.activeTexture(r),O=r),e.bindTexture(t,n||me[t]),i.type=t,i.texture=n)}function je(){let t=ce[O];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Me(){try{e.compressedTexImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Ne(){try{e.compressedTexImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Pe(){try{e.texSubImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Fe(){try{e.texSubImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Ie(){try{e.compressedTexSubImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Le(){try{e.compressedTexSubImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Re(){try{e.texStorage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function ze(){try{e.texStorage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function k(){try{e.texImage2D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Be(){try{e.texImage3D(...arguments)}catch(e){pt(`WebGLState:`,e)}}function Ve(t){return d[t]===void 0?e.getParameter(t):d[t]}function He(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function A(t){de.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),de.copy(t))}function Ue(t){fe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),fe.copy(t))}function We(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ge(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},O=null,ce={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new N(0,0,0),T=0,E=!1,ee=null,te=null,ne=null,D=null,re=null,de.set(0,0,e.canvas.width,e.canvas.height),fe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:he,disable:ge,bindFramebuffer:_e,drawBuffers:ve,useProgram:ye,setBlending:Se,setMaterial:Ce,setFlipSided:we,setCullFace:Te,setLineWidth:Ee,setPolygonOffset:De,setScissorTest:Oe,activeTexture:ke,bindTexture:Ae,unbindTexture:je,compressedTexImage2D:Me,compressedTexImage3D:Ne,texImage2D:k,texImage3D:Be,pixelStorei:He,getParameter:Ve,updateUBOMapping:We,uniformBlockBinding:Ge,texStorage2D:Re,texStorage3D:ze,texSubImage2D:Pe,texSubImage3D:Fe,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Le,scissor:A,viewport:Ue,reset:Ke}}function Ju(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new j,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):st(`canvas`)}function T(e,t,n){let r=1,i=Ve(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),ft(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&ft(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function te(t){e.generateMipmap(t)}function ne(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function D(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];ft(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||ft(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?$e:$t.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function re(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,ft(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ie(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ae(e){let t=e.target;t.removeEventListener(`dispose`,ae),se(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function oe(e){let t=e.target;t.removeEventListener(`dispose`,oe),ce(t)}function se(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&O(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function O(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ce(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let le=0;function ue(){le=0}function de(){return le}function fe(e){le=e}function pe(){let e=le;return e>=p.maxTextures&&ft(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),le+=1,e}function me(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function he(t,n){let r=f.get(t);if(t.isVideoTexture&&k(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)ft(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)ft(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ge(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Ee(r,t,n);return}t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function _e(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){Ee(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ve(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){De(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ye={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},be={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},xe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Se(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&ft(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,ye[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,ye[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,ye[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,be[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,be[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,xe[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function Ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ae));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=me(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&O(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function we(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Te(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=we(r.start,n.width,4),c=we(t.start,n.width,4);r.start<=i+1&&s===c&&we(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function Ee(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=Ce(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=$t.getPrimaries($t.workingColorSpace),r=n.colorSpace===``?null:$t.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=Be(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=D(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);Se(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=ie(n,t);if(n.isDepthTexture)u=re(n.format===ee,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Te(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=Hs(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else ft(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?ft(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=Hs(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ve(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Ve(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&te(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function De(t,n,r){if(n.image.length!==6)return;let i=Ce(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=$t.getPrimaries($t.workingColorSpace),s=n.colorSpace===``?null:$t.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Be(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=D(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=ie(n,h);Se(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?ft(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ve(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&te(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Oe(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=D(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),ze(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Re(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=re(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ze(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=D(a.internalFormat,o,s,a.normalized,a.colorSpace);ze(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,ae)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),Se(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else he(n.depthTexture,0);let o=a.__webglTexture,s=Re(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)ze(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)ze(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ae(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ae(n.__webglFramebuffer[0],t,0):Ae(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ke(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ke(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,r){let i=f.get(t);n!==void 0&&Oe(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&je(t)}function Ne(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,oe);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&ze(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=D(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Re(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),Se(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)Oe(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else Oe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&te(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),Se(s,i),Oe(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&te(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),Se(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)Oe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else Oe(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&te(a),d.unbindTexture()}t.depthBuffer&&je(t)}function Pe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=ne(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),te(t),d.unbindTexture()}}}let Fe=[],Ie=[];function Le(t){if(t.samples>0){if(ze(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Fe.length=0,Ie.length=0,Fe.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Fe.push(o),Ie.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ie)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Fe))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Re(e){return Math.min(p.maxSamples,e.samples)}function ze(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function k(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&($t.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&ft(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):pt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=de,this.setTextureUnits=fe,this.setTexture2D=he,this.setTexture2DArray=ge,this.setTexture3D=_e,this.setTextureCube=ve,this.rebindTextures=Me,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Yu(e,t){function n(n,r=``){let i,a=$t.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Xu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zu=`
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

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new io({vertexShader:Xu,fragmentShader:Zu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Li(new Ka(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends _t{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new Qu,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],te=new j,ne=null,D=null,re=new os;re.viewport=new dn;let ie=new os;ie.viewport=new dn;let ae=[re,ie],oe=new xs,se=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Kn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Kn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Kn,C[e]=t),t.getHandSpace()};function ce(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function le(){r.removeEventListener(`select`,ce),r.removeEventListener(`selectstart`,ce),r.removeEventListener(`selectend`,ce),r.removeEventListener(`squeeze`,ce),r.removeEventListener(`squeezestart`,ce),r.removeEventListener(`squeezeend`,ce),r.removeEventListener(`end`,le),r.removeEventListener(`inputsourceschange`,ue);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}se=null,O=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(ne),e.setSize(te.width,te.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&ft(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&ft(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ce),r.addEventListener(`selectstart`,ce),r.addEventListener(`selectend`,ce),r.addEventListener(`squeeze`,ce),r.addEventListener(`squeezestart`,ce),r.addEventListener(`squeezeend`,ce),r.addEventListener(`end`,le),r.addEventListener(`inputsourceschange`,ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),ne=e.getPixelRatio(),e.getSize(te),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?ee:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new pn(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new La(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pn(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ue(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let de=new M,fe=new M;function pe(e,t,n){de.setFromMatrixPosition(t.matrixWorld),fe.setFromMatrixPosition(n.matrixWorld);let r=de.distanceTo(fe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function me(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),oe.near=ie.near=re.near=t,oe.far=ie.far=re.far=n,(se!==oe.near||O!==oe.far)&&(r.updateRenderState({depthNear:oe.near,depthFar:oe.far}),se=oe.near,O=oe.far),oe.layers.mask=e.layers.mask|6,re.layers.mask=oe.layers.mask&-5,ie.layers.mask=oe.layers.mask&-3;let i=e.parent,a=oe.cameras;me(oe,i);for(let e=0;e<a.length;e++)me(a[e],i);a.length===2?pe(oe,re,ie):oe.projectionMatrix.copy(re.projectionMatrix),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),he(e,oe,i)};function he(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=xt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return oe},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(oe)},this.getCameraTexture=function(e){return v[e]};let ge=null;function _e(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==oe.cameras.length&&(oe.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ae[n];o===void 0&&(o=new os,o.layers.enable(n),o.viewport=new dn,ae[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(oe.matrix.copy(o.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale)),i===!0&&oe.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new za,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ge&&ge(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ve=new Ws;ve.setAnimationLoop(_e),this.setAnimationLoop=function(e){ge=e},this.dispose=function(){}}},ed=new gn,td=new Jt;td.set(-1,0,0,0,1,0,0,0,1);function nd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,eo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ed.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(td),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function rd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return pt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?ft(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):ft(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var id=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ad=null;function od(){return ad===null&&(ad=new Zi(id,16,16,D,_),ad.name=`DFG_LUT`,ad.minFilter=s,ad.magFilter=s,ad.wrapS=n,ad.wrapT=n,ad.generateMipmaps=!1,ad.needsUpdate=!0),ad}var sd=class{constructor(e={}){let{canvas:t=ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ie,re,ne]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),ee=new M,te=null,D=null,ae=[],oe=[],se=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,ce=!1,le=null,ue=null,de=null,fe=null;this._outputColorSpace=Ze;let pe=0,me=0,he=null,ge=-1,_e=null,ve=new dn,ye=new dn,be=null,xe=new N(0),Se=0,Ce=t.width,we=t.height,Te=1,Ee=null,De=null,Oe=new dn(0,0,Ce,we),ke=new dn(0,0,Ce,we),Ae=!1,je=new pa,Me=!1,Ne=!1,Pe=new gn,Fe=new M,Ie=new dn,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function ze(){return he===null?Te:1}let k=n;function Be(e,n){return t.getContext(e,n)}let Ve,He,A,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Qe,$e,et,tt,nt,rt,at,ot,st,lt,dt,mt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,vt,!1),t.addEventListener(`webglcontextrestored`,yt,!1),t.addEventListener(`webglcontextcreationerror`,bt,!1),k===null){let t=`webgl2`;if(k=Be(t,e),k===null)throw Be(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}gt()}catch(e){throw t.removeEventListener(`webglcontextlost`,vt,!1),t.removeEventListener(`webglcontextrestored`,yt,!1),t.removeEventListener(`webglcontextcreationerror`,bt,!1),pt(`WebGLRenderer: `+e.message),e}function gt(){Ve=new Tc(k),Ve.init(),lt=new Yu(k,Ve),He=new ec(k,Ve,e,lt),A=new qu(k,Ve),He.reversedDepthBuffer&&m&&A.buffers.depth.setReversed(!0),ue=k.createFramebuffer(),de=k.createFramebuffer(),fe=k.createFramebuffer(),Ue=new Oc(k),We=new Du,Ge=new Ju(k,Ve,A,We,He,lt,Ue),Ke=new wc(O),qe=new Gs(k),dt=new Qs(k,qe),Je=new Ec(k,qe,Ue,dt),Ye=new Ac(k,Je,qe,dt,Ue),at=new kc(k,He,Ge),tt=new tc(We),Xe=new Eu(O,Ke,Ve,He,dt,tt),Qe=new nd(O,We),$e=new ju,et=new Ru(Ve),rt=new Zs(O,Ke,A,Ye,x,s),nt=new Ku(O,Ye,He),mt=new rd(k,Ue,He,A),ot=new $s(k,Ve,Ue),st=new Dc(k,Ve,Ue),Ue.programs=Xe.programs,O.capabilities=He,O.extensions=Ve,O.properties=We,O.renderLists=$e,O.shadowMap=nt,O.state=A,O.info=Ue}S!==1009&&(se=new Mc(S,t.width,t.height,o,r,i));let _t=new $u(O,k);this.xr=_t,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let e=Ve.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ve.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(e){e!==void 0&&(Te=e,this.setSize(Ce,we,!1))},this.getSize=function(e){return e.set(Ce,we)},this.setSize=function(e,n,r=!0){if(_t.isPresenting){ft(`WebGLRenderer: Can't change size while VR device is presenting.`);return}Ce=e,we=n,t.width=Math.floor(e*Te),t.height=Math.floor(n*Te),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),se!==null&&se.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(Ce*Te,we*Te).floor()},this.setDrawingBufferSize=function(e,n,r){Ce=e,we=n,Te=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){pt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){ft(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}se.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ve)},this.getViewport=function(e){return e.copy(Oe)},this.setViewport=function(e,t,n,r){e.isVector4?Oe.set(e.x,e.y,e.z,e.w):Oe.set(e,t,n,r),A.viewport(ve.copy(Oe).multiplyScalar(Te).round())},this.getScissor=function(e){return e.copy(ke)},this.setScissor=function(e,t,n,r){e.isVector4?ke.set(e.x,e.y,e.z,e.w):ke.set(e,t,n,r),A.scissor(ye.copy(ke).multiplyScalar(Te).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(e){A.setScissorTest(Ae=e)},this.setOpaqueSort=function(e){Ee=e},this.setTransparentSort=function(e){De=e},this.getClearColor=function(e){return e.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(he!==null){let t=he.texture.format;e=C.has(t)}if(e){let e=he.texture.type,t=w.has(e),n=rt.getClearColor(),r=rt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,k.clearBufferuiv(k.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,k.clearBufferiv(k.COLOR,0,E))}else r|=k.COLOR_BUFFER_BIT}t&&(r|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&k.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),le=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,vt,!1),t.removeEventListener(`webglcontextrestored`,yt,!1),t.removeEventListener(`webglcontextcreationerror`,bt,!1),rt.dispose(),$e.dispose(),et.dispose(),We.dispose(),Ke.dispose(),Ye.dispose(),dt.dispose(),mt.dispose(),Xe.dispose(),_t.dispose(),_t.removeEventListener(`sessionstart`,Dt),_t.removeEventListener(`sessionend`,Ot),kt.stop()};function vt(e){e.preventDefault(),ut(`WebGLRenderer: Context Lost.`),ce=!0}function yt(){ut(`WebGLRenderer: Context Restored.`),ce=!1;let e=Ue.autoReset,t=nt.enabled,n=nt.autoUpdate,r=nt.needsUpdate,i=nt.type;gt(),Ue.autoReset=e,nt.enabled=t,nt.autoUpdate=n,nt.needsUpdate=r,nt.type=i}function bt(e){pt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function xt(e){let t=e.target;t.removeEventListener(`dispose`,xt),St(t)}function St(e){Ct(e),We.remove(e)}function Ct(e){let t=We.get(e).programs;t!==void 0&&(t.forEach(function(e){Xe.releaseProgram(e)}),e.isShaderMaterial&&Xe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Le);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=zt(e,t,n,r,i);A.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;dt.setup(i,r,s,n,c);let h,g=ot;if(c!==null&&(h=qe.get(c),g=st,g.setIndex(h)),i.isMesh)r.wireframe===!0?(A.setLineWidth(r.wireframeLinewidth*ze()),g.setMode(k.LINES)):g.setMode(k.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),A.setLineWidth(e*ze()),i.isLineSegments?g.setMode(k.LINES):i.isLineLoop?g.setMode(k.LINE_LOOP):g.setMode(k.LINE_STRIP)}else i.isPoints?g.setMode(k.POINTS):i.isSprite&&g.setMode(k.TRIANGLES);if(i.isBatchedMesh){if(Ve.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?qe.get(c).bytesPerElement:1,o=We.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(k,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function wt(e,t,n,r){le!==null&&e.isNodeMaterial&&le.setObject(r,e),Me===!0&&tt.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ft(e,t,r),e.side=0,e.needsUpdate=!0,Ft(e,t,r),e.side=2):Ft(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),le!==null&&le.renderStart(e,t,n),D=et.get(n),D.init(t),oe.push(D),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(D.pushLight(e),e.castShadow&&D.pushShadow(e))}),D.setupLights(),le!==null&&le.updateLights(D.state.lightsArray),Ne=this.localClippingEnabled,Me=tt.init(this.clippingPlanes,Ne),Me===!0&&tt.setGlobalState(this.clippingPlanes,t),le!==null&&nt.render(D.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];wt(o,n,t,e),r.add(o)}else wt(i,n,t,e),r.add(i)}}),D=oe.pop(),le!==null&&le.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=We.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ve.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Tt=null;function Et(e){Tt&&Tt(e)}function Dt(){kt.stop()}function Ot(){kt.start()}let kt=new Ws;kt.setAnimationLoop(Et),typeof self<`u`&&kt.setContext(self),this.setAnimationLoop=function(e){Tt=e,_t.setAnimationLoop(e),e===null?kt.stop():kt.start()},_t.addEventListener(`sessionstart`,Dt),_t.addEventListener(`sessionend`,Ot),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){pt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ce===!0)return;le!==null&&le.renderStart(e,t);let n=_t.enabled===!0&&_t.isPresenting===!0,r=se!==null&&(he===null||n)&&se.begin(O,he);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(se===null||se.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(t),t=_t.getCamera()),e.isScene===!0&&e.onBeforeRender(O,e,t,he),D=et.get(e,oe.length),D.init(t),D.state.textureUnits=Ge.getTextureUnits(),oe.push(D),Pe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),je.setFromProjectionMatrix(Pe,it,t.reversedDepth),Ne=this.localClippingEnabled,Me=tt.init(this.clippingPlanes,Ne),te=$e.get(e,ae.length),te.init(),ae.push(te),_t.enabled===!0&&_t.isPresenting===!0){let e=O.xr.getDepthSensingMesh();e!==null&&At(e,t,-1/0,O.sortObjects)}At(e,t,0,O.sortObjects),te.finish(),le!==null&&le.updateLights(D.state.lightsArray),O.sortObjects===!0&&te.sort(Ee,De),Re=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Re&&rt.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&tt.beginShadows();let i=D.state.shadowsArray;if(nt.render(i,e,t),Me===!0&&tt.endShadows(),(r&&se.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(D.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Mt(n,r,e,a)}Re&&rt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];jt(te,e,n,n.viewport)}}else r.length>0&&Mt(n,r,e,t),Re&&rt.render(e),jt(te,e,t)}he!==null&&me===0&&(Ge.updateMultisampleRenderTarget(he),Ge.updateRenderTargetMipmap(he)),r&&se.end(O),e.isScene===!0&&e.onAfterRender(O,e,t),dt.resetDefaultState(),ge=-1,_e=null,oe.pop(),oe.length>0?(D=oe[oe.length-1],Ge.setTextureUnits(D.state.textureUnits),Me===!0&&tt.setGlobalState(O.clippingPlanes,D.state.camera)):D=null,ae.pop(),te=ae.length>0?ae[ae.length-1]:null,le!==null&&le.renderEnd()};function At(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)D.pushLightProbeGrid(e);else if(e.isLight)D.pushLight(e),e.castShadow&&D.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(je)){r&&Ie.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Pe);let i=Ye.update(e),a=e.material;a.visible&&te.push(e,i,a,n,Ie.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(je))){let i=Ye.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ie.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ie.copy(e.boundingSphere.center)),Ie.applyMatrix4(e.matrixWorld).applyMatrix4(Pe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&te.push(e,i,c,n,Ie.z,s,t)}}else a.visible&&te.push(e,i,a,n,Ie.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)At(i[e],t,n,r)}function jt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;D.setupLightsView(n),Me===!0&&tt.setGlobalState(O.clippingPlanes,n),r&&A.viewport(ve.copy(r)),i.length>0&&Nt(i,t,n),a.length>0&&Nt(a,t,n),o.length>0&&Nt(o,t,n),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Mt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[r.id]===void 0){let e=Ve.has(`EXT_color_buffer_half_float`)||Ve.has(`EXT_color_buffer_float`);D.state.transmissionRenderTarget[r.id]=new pn(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,He.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let a=D.state.transmissionRenderTarget[r.id],o=r.viewport||ve;a.setSize(o.z*O.transmissionResolutionScale,o.w*O.transmissionResolutionScale);let s=O.getRenderTarget(),c=O.getActiveCubeFace(),d=O.getActiveMipmapLevel();O.setRenderTarget(a),O.getClearColor(xe),Se=O.getClearAlpha(),Se<1&&O.setClearColor(16777215,.5),O.clear(),Re&&rt.render(n);let f=O.toneMapping;O.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),D.setupLightsView(r),Me===!0&&tt.setGlobalState(O.clippingPlanes,r),Nt(e,n,r),Ge.updateMultisampleRenderTarget(a),Ge.updateRenderTargetMipmap(a),Ve.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Pt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ge.updateMultisampleRenderTarget(a),Ge.updateRenderTargetMipmap(a))}O.setRenderTarget(s,c,d),O.setClearColor(xe,Se),p!==void 0&&(r.viewport=p),O.toneMapping=f}function Nt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Pt(o,t,n,s,l,c)}}function Pt(e,t,n,r,i,a){le!==null&&i.isNodeMaterial&&le.setObject(e,i),e.onBeforeRender(O,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(O,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,O.renderBufferDirect(n,t,r,i,e,a),i.side=2):O.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(O,t,n,r,i,a)}function Ft(e,t,n){t.isScene!==!0&&(t=Le);let r=We.get(e),i=D.state.lights,a=D.state.shadowsArray,o=i.state.version,s=Xe.getParameters(e,i.state,a,t,n,D.state.lightProbeGridArray),c=Xe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,xt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Lt(e,s),d}else s.uniforms=Xe.getUniforms(e),le!==null&&e.isNodeMaterial&&le.build(e,n,s),e.onBeforeCompile(s,O),d=Xe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=tt.uniform),Lt(e,s),r.needsLights=Vt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=D.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function It(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=zl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Lt(e,t){let n=We.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Rt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];ee.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(ee))return n}return null}function zt(e,t,n,r,i){t.isScene!==!0&&(t=Le),Ge.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=he===null?O.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:$t.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(h=O.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=We.get(r),y=D.state.lights;if(Me===!0&&(Ne===!0||e!==_e)){let t=e===_e&&r.id===ge;tt.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==tt.numPlanes||v.numIntersection!==tt.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=D.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ft(r,t,i),le&&r.isNodeMaterial&&le.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(A.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ge&&(ge=r.id,C=!0),v.needsLights){let e=Rt(D.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||_e!==e){A.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(k,`projectionMatrix`,e.projectionMatrix),T.setValue(k,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(k,Fe.setFromMatrixPosition(e.matrixWorld)),He.logarithmicDepthBuffer&&T.setValue(k,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(k,`isOrthographic`,e.isOrthographicCamera===!0),_e!==e&&(_e=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(k,`sunShadowMap`,y.state.sunShadowMap,Ge),y.state.directionalShadowMap.length>0&&T.setValue(k,`directionalShadowMap`,y.state.directionalShadowMap,Ge),y.state.spotShadowMap.length>0&&T.setValue(k,`spotShadowMap`,y.state.spotShadowMap,Ge),y.state.pointShadowMap.length>0&&T.setValue(k,`pointShadowMap`,y.state.pointShadowMap,Ge)),i.isSkinnedMesh){T.setOptional(k,i,`bindMatrix`),T.setOptional(k,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(k,`boneTexture`,e.boneTexture,Ge))}i.isBatchedMesh&&(T.setOptional(k,i,`batchingTexture`),T.setValue(k,`batchingTexture`,i._matricesTexture,Ge),T.setOptional(k,i,`batchingIdTexture`),T.setValue(k,`batchingIdTexture`,i._indirectTexture,Ge),T.setOptional(k,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(k,`batchingColorTexture`,i._colorsTexture,Ge));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&at.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(k,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=od()),C){if(T.setValue(k,`toneMappingExposure`,O.toneMappingExposure),v.needsLights&&Bt(E,w),a&&r.fog===!0&&Qe.refreshFogUniforms(E,a),Qe.refreshMaterialUniforms(E,r,Te,we,D.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}zl.upload(k,It(v),E,Ge)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(zl.upload(k,It(v),E,Ge),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(k,`center`,i.center),T.setValue(k,`modelViewMatrix`,i.modelViewMatrix),T.setValue(k,`normalMatrix`,i.normalMatrix),T.setValue(k,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];mt.update(n,x),mt.bind(n,x)}}return x}function Bt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Vt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return me},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(e,t,n){let r=We.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),We.get(e.texture).__webglTexture=t,We.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=We.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){he=e,pe=t,me=n;let r=null,i=!1,a=!1;if(e){let o=We.get(e);if(o.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(k.FRAMEBUFFER,o.__webglFramebuffer),ve.copy(e.viewport),ye.copy(e.scissor),be=e.scissorTest,A.viewport(ve),A.scissor(ye),A.setScissorTest(be),ge=-1;return}if(o.__webglFramebuffer===void 0)Ge.setupRenderTarget(e);else if(o.__hasExternalTextures)Ge.rebindTextures(e,We.get(e.texture).__webglTexture,We.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&We.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ge.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=We.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ge.useMultisampledRTT(e)===!1?We.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ve.copy(e.viewport),ye.copy(e.scissor),be=e.scissorTest}else ve.copy(Oe).multiplyScalar(Te).floor(),ye.copy(ke).multiplyScalar(Te).floor(),be=Ae;if(n!==0&&(r=ue),A.bindFramebuffer(k.FRAMEBUFFER,r)&&A.drawBuffers(e,r),A.viewport(ve),A.scissor(ye),A.setScissorTest(be),i){let r=We.get(e.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=We.get(e.textures[t]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=We.get(e.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,t.__webglTexture,n)}ge=-1};function Ht(e){let t=We.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=He.textureFormatReadable(e.format),t.__typeReadable=He.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){pt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=We.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){A.bindFramebuffer(k.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+s);let u=Ht(o);if(u.__formatReadable===!1){pt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){pt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&k.readPixels(t,n,r,i,lt.convert(c),lt.convert(l),a)}finally{let e=he===null?null:We.get(he).__webglFramebuffer;A.bindFramebuffer(k.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=We.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){A.bindFramebuffer(k.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+s);let d=Ht(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,f),k.bufferData(k.PIXEL_PACK_BUFFER,a.byteLength,k.STREAM_READ),k.readPixels(t,n,r,i,lt.convert(l),lt.convert(u),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let p=he===null?null:We.get(he).__webglFramebuffer;A.bindFramebuffer(k.FRAMEBUFFER,p);let m=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ht(k,m,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,f),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,a),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(f),k.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ge.setTexture2D(e,0),k.copyTexSubImage2D(k.TEXTURE_2D,n,0,0,o,s,i,a),A.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=lt.convert(t.format),_=lt.convert(t.type),v;t.isData3DTexture?(Ge.setTexture3D(t,0),v=k.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ge.setTexture2DArray(t,0),v=k.TEXTURE_2D_ARRAY):(Ge.setTexture2D(t,0),v=k.TEXTURE_2D),A.activeTexture(k.TEXTURE0),A.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,t.flipY),A.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),A.pixelStorei(k.UNPACK_ALIGNMENT,t.unpackAlignment);let y=A.getParameter(k.UNPACK_ROW_LENGTH),b=A.getParameter(k.UNPACK_IMAGE_HEIGHT),x=A.getParameter(k.UNPACK_SKIP_PIXELS),S=A.getParameter(k.UNPACK_SKIP_ROWS),C=A.getParameter(k.UNPACK_SKIP_IMAGES);A.pixelStorei(k.UNPACK_ROW_LENGTH,h.width),A.pixelStorei(k.UNPACK_IMAGE_HEIGHT,h.height),A.pixelStorei(k.UNPACK_SKIP_PIXELS,l),A.pixelStorei(k.UNPACK_SKIP_ROWS,u),A.pixelStorei(k.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=We.get(e),r=We.get(t),h=We.get(n.__renderTarget),g=We.get(r.__renderTarget);A.bindFramebuffer(k.READ_FRAMEBUFFER,h.__webglFramebuffer),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(e).__webglTexture,i,d+n),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,We.get(t).__webglTexture,a,m+n)),k.blitFramebuffer(l,u,o,s,f,p,o,s,k.DEPTH_BUFFER_BIT,k.NEAREST);A.bindFramebuffer(k.READ_FRAMEBUFFER,null),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||We.has(e)){let n=We.get(e),r=We.get(t);A.bindFramebuffer(k.READ_FRAMEBUFFER,de),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,fe);for(let e=0;e<c;e++)w?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,n.__webglTexture,i),T?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,r.__webglTexture,a),i===0?T?k.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):k.copyTexSubImage2D(v,a,f,p,l,u,o,s):k.blitFramebuffer(l,u,o,s,f,p,o,s,k.COLOR_BUFFER_BIT,k.NEAREST);A.bindFramebuffer(k.READ_FRAMEBUFFER,null),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?k.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?k.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):k.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):k.texSubImage2D(k.TEXTURE_2D,a,f,p,o,s,g,_,h);A.pixelStorei(k.UNPACK_ROW_LENGTH,y),A.pixelStorei(k.UNPACK_IMAGE_HEIGHT,b),A.pixelStorei(k.UNPACK_SKIP_PIXELS,x),A.pixelStorei(k.UNPACK_SKIP_ROWS,S),A.pixelStorei(k.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&k.generateMipmap(v),A.unbindTexture()},this.initRenderTarget=function(e){We.get(e).__webglFramebuffer===void 0&&Ge.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ge.setTextureCube(e,0):e.isData3DTexture?Ge.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ge.setTexture2DArray(e,0):Ge.setTexture2D(e,0),A.unbindTexture()},this.resetState=function(){pe=0,me=0,he=null,A.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return it}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(e),t.unpackColorSpace=$t._getUnpackColorSpace()}},cd={s:{label:`28 格`,sub:`小地图`,days:20,cash:2e4,shape:`方形`,corners:[[0,6],[8,6],[8,0],[0,0]],types:{0:`start`,3:`chance`,6:`game`,8:`shop`,11:`chance`,14:`jail`,17:`item`,20:`bank`,22:`wish`,24:`lottery`,26:`fine`},bridges:[3,11,17,24]},m:{label:`48 格`,sub:`中地图`,days:30,cash:25e3,shape:`大方形`,corners:[[0,11],[13,11],[13,0],[0,0]]},l:{label:`64 格`,sub:`大地图`,days:40,cash:3e4,shape:`十字形`,corners:[[5,16],[11,16],[11,11],[16,11],[16,5],[11,5],[11,0],[5,0],[5,5],[0,5],[0,11],[5,11]]}},ld=[`s`,`m`,`l`],ud=[`shop`,`jail`,`bank`,`item`,`chance`,`park`,`shop`,`wish`,`fine`,`game`,`lottery`],dd=[`chance`,`item`,`game`,`portal`,`chance`,`lottery`,`fine`,`portal`,`chance`,`park`,`wish`,`portal`],fd=[0,4,6,10],pd={start:`flag`,shop:`shop`,park:`park`,wish:`well`},md={bank:`treat`,game:`luxury`,wish:`charity`,fine:`refund`},hd={days:{icon:`📅`,name:e=>e+` 天`,desc:e=>e+` 天到了，总资产最多的赢`},time:{icon:`⏱️`,name:()=>`10 分钟`,desc:()=>`限时 10 分钟（开局自动加速），到点的那一天结束时总资产最多的赢`},rich:{icon:`💰`,name:()=>`10 万`,desc:()=>`谁的总资产先到 ¥100,000 谁就赢（团队模式两人加起来 ¥200,000）`,target:1e5},last:{icon:`⚔️`,name:()=>`剩一人`,desc:()=>`一直玩到只剩一个人（团队模式是一队）没破产`},poor:{icon:`🙃`,name:()=>`花光钱`,desc:e=>`逆向大富翁：每人 100 万，谁先把钱花光谁赢（团队模式是两人的钱都花光），`+e+` 天到了还没人花光就比谁的钱最少。规则全反过来：别人踩你的地你得倒贴给他，你踩别人的地他得塞钱给你`}},gd=[`days`,`time`,`rich`,`last`,`poor`],_d=2.2,vd=2e3,yd=1e3,bd=.02,xd=3e3,Sd=1e6,Cd=.02,wd=2e5,Td=[4033535,16732013,16756255,2474360],F=[`#3d8bff`,`#ff4f6d`,`#ffae1f`,`#25c178`],Ed=[`#ffffff`,`#ffffff`,`#2a2b5e`,`#ffffff`],Dd=[`星期一`,`星期二`,`星期三`,`星期四`,`星期五`,`星期六`,`星期日`],Od={start:{label:`起点`,color:`#ffb703`,desc:`每次经过起点，领 ¥2,000 工资。`},chance:{label:`机会`,color:`#8f6bff`,desc:`随机发生一件事，可能是好事，也可能是坏事。`,icon:`❓`},fine:{label:`罚款`,color:`#ff4f6d`,desc:`停在这里要交 ¥2,000 罚款。`,icon:`💸`},item:{label:`礼物`,color:`#1fb5a3`,desc:`停在这里拿一张道具卡。`,icon:`🎁`},shop:{label:`道具屋`,color:`#ff8a4c`,desc:`停在这里可以用点券买道具卡（经过起点送 20 点券）。`,icon:`🛍️`},park:{label:`公园`,color:`#3cbf6a`,desc:`在公园晒晒太阳，技能多充 1 格。`,icon:`🌳`},wish:{label:`许愿池`,color:`#4aa8ff`,desc:`许个愿，随机拿到 ¥500 到 ¥2,000。`,icon:`✨`},portal:{label:`车站`,color:`#14b4d4`,desc:`直接去下一个车站。`,icon:`🚉`},jail:{label:`监狱`,color:`#6b7895`,desc:`停在这里要坐 2 回合牢。轮到你时可以交 ¥1,000 保释，马上出来。`,icon:`🚔`},bank:{label:`银行`,color:`#2fae8f`,desc:`路过或停下都可以存钱、取钱。存款每天有 2% 利息，均富卡、查税卡和经济危机都拿不走。`,icon:`🏦`},lottery:{label:`彩票站`,color:`#e5a50a`,desc:`花 ¥500 买一注，选 1 到 10 里的一个号码。每 5 天开一次奖，猜中的人平分奖池；没人中，奖池留到下一期。`,icon:`🎫`},game:{label:`游戏厅`,color:`#e2558f`,desc:`玩一把小游戏：猜大小、幸运转盘或者老虎机，赢了拿钱，输了赔钱。`,icon:`🎰`},treat:{label:`请客`,color:`#ff7a3d`,desc:`踩到就请全场吃大餐：给每个人塞 ¥1,000，人越多花得越多。`,icon:`🍲`},luxury:{label:`奢侈品`,color:`#c27bff`,desc:`奢侈品店：金马桶、镶钻手机壳这些没用的东西，挑一件买下（每次进货不一样）。`,icon:`💎`},charity:{label:`慈善`,color:`#ff6fa8`,desc:`捐 ¥1,000、¥2,000 或 ¥4,000。好人有好报：捐完有可能中彩票，钱又回来了。`,icon:`💝`},refund:{label:`税务局`,color:`#4f8cff`,desc:`政府说你多交了税，硬是退给你 ¥2,000。`,icon:`🏛️`}},kd={remote:{name:`遥控骰子`,icon:`🎯`,color:`#a593ff`,pts:30,desc:`自己决定走 1 到 6 步，用完马上出发`},double:{name:`双骰卡`,icon:`🎲`,color:`#ff9a5c`,pts:20,desc:`这回合掷两颗骰子`},money:{name:`红包卡`,icon:`🧧`,color:`#ff7a90`,pts:20,desc:`马上拿到 ¥1,500`},block:{name:`路障卡`,icon:`🚧`,color:`#ffb02e`,pts:20,desc:`在前方 1 到 6 格放一个路障，谁走到那里都得停下`},mine:{name:`地雷卡`,icon:`🧨`,color:`#8c7a6b`,pts:30,desc:`在身后 1 到 6 格埋一颗地雷，后面的人踩到就炸，要住院 2 回合`},turtle:{name:`乌龟卡`,icon:`🐢`,color:`#5bc98c`,pts:30,desc:`让一个对手接下来 3 回合每次只能走 1 步`},sleep:{name:`瞌睡卡`,icon:`💤`,color:`#7d8cff`,pts:30,desc:`让一个对手睡一觉，跳过他的下一回合`},steal:{name:`抢夺卡`,icon:`🧤`,color:`#e07bff`,pts:30,desc:`从一个对手手里随机抢走一张道具卡`},tax:{name:`查税卡`,icon:`🧾`,color:`#4fb6ff`,pts:40,desc:`让一个对手把现金的 15% 交给你`},demolish:{name:`拆除卡`,icon:`💣`,color:`#ff6b5c`,pts:40,desc:`把对手一块地的房子拆掉一级，1 级的会被拆成空地`},equal:{name:`均富卡`,icon:`⚖️`,color:`#c9a35b`,pts:50,desc:`所有人的现金加起来，平均分给每个人`},free:{name:`免租卡`,icon:`🛡️`,color:`#3fd0b4`,pts:30,desc:`踩到别人的地时免付一次租金`,passive:!0},buyout:{name:`购地卡`,icon:`📜`,color:`#d98d4a`,pts:50,desc:`踩到别人的地时，可以按对方的投入价把地连房子买过来`,passive:!0},dump:{name:`甩锅卡`,icon:`🍳`,color:`#ff9f43`,pts:30,desc:`选一个对手：你的下一笔收入会甩给他`,target:!0,rev:!0},waste:{name:`败家子卡`,icon:`🛍️`,color:`#ff5fa2`,pts:30,desc:`从现在到你下回合开始，花的每一笔钱都翻倍`,rev:!0},oops:{name:`转账失误卡`,icon:`🔁`,color:`#4fc3f7`,pts:40,desc:`选一个对手：他的下一笔开销会变成收入`,target:!0,rev:!0},cart:{name:`网购剁手卡`,icon:`🛒`,color:`#f6a623`,pts:30,desc:`马上网购一堆没用的东西，花掉手上 10% 的钱`,rev:!0},aura:{name:`土豪光环卡`,icon:`👑`,color:`#e5a50a`,pts:40,desc:`给一个对手戴上土豪光环：离他 3 格以内的人每人塞给他 ¥1,000（坑人专用）`,target:!0,rev:!0}},Ad=`remote.remote.remote.double.double.money.money.free.free.free.buyout.turtle.turtle.sleep.sleep.steal.steal.tax.tax.demolish.demolish.block.block.mine.mine.equal`.split(`.`),jd=`dump.dump.dump.waste.waste.waste.oops.oops.cart.cart.cart.aura.aura.remote.remote.double.buyout.buyout.turtle.sleep.steal.demolish.block.block.mine.equal`.split(`.`),Md=[{name:`团子`,model:`rogue`,title:`幸运小芽`,perk:`salary`,passive:`每次经过起点多领 ¥1,500`,skill:`lucky`,skillName:`好运连连`,skillIcon:`🍀`,skillDesc:`马上拿 ¥1,500，这回合掷两颗骰子，每颗至少 3 点`},{name:`阿福`,model:`barbarian`,title:`精明老板`,perk:`rent`,passive:`收到的租金多 20%`,skill:`fortune`,skillName:`财神到`,skillIcon:`💰`,skillDesc:`每个对手马上给你 ¥700`},{name:`米露`,model:`mage`,title:`云端魔法师`,perk:`cards`,passive:`道具卡最多拿 6 张，拿卡时有一半机会多拿一张`,skill:`blink`,skillName:`云朵瞬移`,skillIcon:`🌀`,skillDesc:`直接瞬移到前方 1 到 12 格中的任意一格，路障拦不住`},{name:`豆豆`,model:`knight`,title:`建筑达人`,perk:`builder`,passive:`升级房子打 9 折`,skill:`build`,skillName:`连夜施工`,skillIcon:`🔨`,skillDesc:`花一半的钱，马上把自己的一块地升一级`},{name:`影子`,model:`shadow`,title:`月光神偷`,perk:`rentcut`,passive:`付租金打 8 折`,skill:`pilfer`,skillName:`顺手牵羊`,skillIcon:`🌙`,skillDesc:`从每个对手手里各偷一张道具卡，手里没卡的就偷 ¥500`},{name:`阿雪`,model:`snowbear`,title:`北极熊勇士`,perk:`iron`,passive:`乌龟卡、瞌睡卡对他没用，吃坏肚子照样上路，踩到地雷也不用住院`,skill:`rampage`,skillName:`雪原冲锋`,skillIcon:`❄️`,skillDesc:`这回合掷两颗骰子，一路上撞到的对手每人交你 ¥500，路障一撞就碎`},{name:`糖糖`,model:`candy`,title:`糖果魔女`,perk:`oracle`,passive:`会占卜，停在机会格只会遇到好事`,skill:`swap`,skillName:`换位魔法`,skillIcon:`🔮`,skillDesc:`和一个对手互换位置，换完照常掷骰子`},{name:`金金`,model:`goldknight`,title:`黄金骑士`,perk:`landcut`,passive:`买地打 8 折`,skill:`claim`,skillName:`插旗圈地`,skillIcon:`🚩`,skillDesc:`半价买下地图上任意一块还没人要的地`}],Nd=e=>e%4,Pd=[[-.42,.38],[.42,.38],[-.42,-.36],[.42,-.36]],Fd=new M(0,1,0),Id=new M(3,11.5,12.5).normalize(),Ld=Math.atan2(3,12.5),Rd={cloud:{name:`云端小镇`,icon:`☁️`,blurb:`漂在云海上的小岛，后面趴着一个石头巨人`,floating:!0,sky:[10268671,15459839,16768236],tile:{grout:`#e39ab0`,bricks:[`#f8c6d3`,`#f5bccb`,`#fad0db`,`#f6c0ce`],edge:`#d6849c`,side:14256800},pad:13616861,padTop:16118267,rock:[14472934,11116987,7761292],leaf:[9691832,16760793,13219583,10477764],tall:[`tree`],low:[`mushroom`],center:`islet`,backdrop:`guardian`,portal:{label:`传送云`,icon:`🌀`},light:{hemi:[15986687,12101846,.45],sun:[16773596,.95]},env:{veg:{grass:[8374635,7323487,9425274],grassN:420,flowers:[16777215,16765416,16773800,14207231],flowerN:120},birds:7},names:`棉花糖街.薄荷小巷.彩虹桥头.云朵面包店.风车坡.泡泡浴场.蜜桃果园.气球站.星光广场.糖果工坊.晚霞茶馆.月亮码头.布丁乐园.流星天台.雪糕小铺.极光剧院.天空之城.羽毛小径.风铃巷.彩虹瀑布.云雀花园.白鸽广场.星砂海岸.晨露农场.飘飘书屋.软糖工厂.梦境车站.银河邮局.风筝山丘.月光湖.云海灯塔.柠檬草街.薄雾森林.蓝莓坡.绵羊牧场.糖霜钟楼.晴天剧场.拱桥码头.太阳花田.星星糖铺.七彩画廊.云端温泉.蒲公英谷.天鹅湖畔`.split(`.`)},tokyo:{name:`东京`,icon:`🌸`,blurb:`棋盘在樱花广场中间，四周是街道、小店、写字楼和高架电车，远处有铁塔和富士山`,floating:!1,sky:[6002654,14411504,14411504],ground:6119011,hill:6119011,tile:{grout:`#7f7a73`,bricks:[`#c8c2b7`,`#bdb7ab`,`#d1cbc1`,`#b6b0a4`],edge:`#6f6a63`,side:10459534},pad:11117203,padTop:14867663,rock:[12894134,9801606,6775387],leaf:[6262597,7051853,5603134],flowers:[16748472,16765152,16777215],tall:[`sakura`,`sakura`,`pine`],low:[`lantern`,`flowerbed`,`vending`,`bench`],center:`shrine`,backdrop:`fuji`,portal:{label:`地铁站`,icon:`🚇`},light:{hemi:[14674687,9345650,.42],sun:[16774114,1]},env:{amp:0,city:!0,plaza:13485752,river:!0,water:5016232,lowColor:9276037,roadBase:7301990,veg:{},birds:7,skyClouds:16,particles:{color:16761556,n:420,size:.24,fall:.55,sway:.6}},names:`浅草.上野.秋叶原.神田.日本桥.银座.筑地.有乐町.丸之内.东京站.新桥.汐留.台场.品川.目黑.惠比寿.代官山.中目黑.涩谷.原宿.表参道.青山.六本木.麻布十番.赤坂.四谷.新宿.中野.高圆寺.吉祥寺.下北泽.三轩茶屋.自由之丘.池袋.巢鸭.谷中.两国.押上.月岛.门前仲町.清澄白河.神乐坂.羽田`.split(`.`)},paris:{name:`巴黎`,icon:`🗼`,blurb:`石板路、咖啡馆、塞纳河和游船，河对岸是一排老楼和铁塔`,floating:!1,sky:[6986710,15133162,15133162],ground:8826204,hill:7905362,tile:{grout:`#5f5b55`,bricks:[`#a7a197`,`#9c968c`,`#b1aba1`,`#958f86`],edge:`#4f4b46`,side:8946555},pad:10656914,padTop:14275787,rock:[13223357,10130828,7038559],leaf:[5212735,6265418,6988626],flowers:[15224923,16765503,11832575],tall:[`tree`,`tree`,`parisHouse`,`lamp`],low:[`umbrella`,`flowerbed`,`bench`,`kiosk`],center:`garden`,backdrop:`tower`,portal:{label:`游船码头`,icon:`⛴️`},light:{hemi:[14937343,9410160,.42],sun:[16773080,1]},env:{amp:4,river:!0,water:5078412,lowColor:6982229,roadBase:6249302,veg:{grass:[7117893,7972943,6196541],grassN:900,flowers:[15224923,16765503,11832575,16777215],flowerN:300,pebbles:[10394258],pebbleN:90,forest:`round`,forestN:210},birds:9},names:`香榭丽舍.凯旋门.蒙马特.圣心堂.小丘广场.歌剧院.旺多姆广场.卢浮宫.杜乐丽花园.协和广场.玛黑区.孚日广场.巴士底.圣母院.西岱岛.圣路易岛.拉丁区.先贤祠.卢森堡公园.圣日耳曼.奥赛码头.荣军院.战神广场.特罗卡德罗.帕西.蒙帕纳斯.意大利广场.贝西公园.美丽城.圣马丁运河.共和广场.北站.拉维莱特.布洛涅森林.塞纳河左岸.新桥.罗丹花园.植物园.莫贝尔广场.花市.古董市集.马德莱娜`.split(`.`)},egypt:{name:`埃及`,icon:`🐫`,blurb:`沙丘、尼罗河上的帆船、骆驼、狮身人面像和金字塔`,floating:!1,sky:[4886492,15852748,15852748],ground:14268286,hill:13609066,tile:{grout:`#9c7c52`,bricks:[`#dcc191`,`#d2b684`,`#e3c99c`,`#ccb07c`],edge:`#8a6c45`,side:12558190},pad:13019772,padTop:15654850,rock:[14862748,12886894,9400648],leaf:[4947770],flowers:[15224923,4033535,16765503],tall:[`palm`,`palm`,`clayHouse`,`obelisk`],low:[`tent`,`rockLow`,`pots`],center:`oasis`,backdrop:`pyramids`,portal:{label:`骆驼驿站`,icon:`🐫`},light:{hemi:[15266047,13215860,.45],sun:[16773330,1.1]},env:{amp:6,river:!0,water:4165542,lowColor:8362578,roadBase:11111007,veg:{grass:[12100444,11048017,9411151],grassN:260,pebbles:[13215087,11767388,14203274],pebbleN:220,forest:`palm`,forestN:70},birds:5},names:`开罗.吉萨.孟菲斯.塞加拉.法尤姆.明亚.阿拜多斯.丹德拉.卢克索.卡纳克.帝王谷.埃德福.考姆翁布.阿斯旺.菲莱岛.阿布辛贝.努比亚村.锡瓦绿洲.巴哈里亚.白沙漠.黑沙漠.亚历山大.罗塞塔.塞得港.伊斯梅利亚.苏伊士.西奈山.沙姆沙伊赫.达哈卜.赫尔格达.马萨阿拉姆.哈利利市场.尼罗河畔.尼罗河三角洲.红海珊瑚礁.骆驼集市.莎草纸作坊.香料街.灯笼巷.绿洲集市.月亮谷.沙丘营地`.split(`.`)},arctic:{name:`北境雪国`,icon:`❄️`,blurb:`雪松林、结冰的湖、小木屋和驯鹿，夜空里有极光`,floating:!1,sky:[2372204,13161962,14739957],ground:15331318,hill:14082284,tile:{grout:`#7d9cb8`,bricks:[`#dfeaf4`,`#d3e1ee`,`#e8f0f7`,`#ccdbe9`],edge:`#6b8aa6`,side:11191e3},pad:12176091,padTop:15857403,rock:[15660283,12899558,9348802],leaf:[3107666],flowers:[15224923,4033535,16765503],tall:[`snowPine`,`snowPine`,`iceCrystal`],low:[`snowman`,`igloo`,`rockLow`],center:`icefield`,backdrop:`glacier`,portal:{label:`雪橇站`,icon:`🛷`},light:{hemi:[14082815,12175068,.5],sun:[15134719,.75]},env:{amp:8,river:!1,lowColor:14674162,roadBase:9413560,veg:{pebbles:[16777215,15134455,13622248],pebbleN:240,forest:`snowpine`,forestN:280},birds:0,particles:{color:16777215,n:900,size:.2,fall:1.1,sway:.5}},names:`罗瓦涅米.圣诞老人村.特罗姆瑟.罗弗敦.卑尔根.奥斯陆.斯德哥尔摩.赫尔辛基.基律纳.阿比斯库.雷克雅未克.蓝湖.黄金瀑布.冰河湖.黑沙滩.维克.阿克雷里.胡萨维克.斯瓦尔巴.朗伊尔城.北角.盖朗厄尔峡湾.松恩峡湾.弗洛姆.奥卢.伊纳里.萨利色尔卡.极光营地.驯鹿牧场.哈士奇农场.冰钓湖.雪屋村.松林小镇.冰川口.峡湾码头.雪橇坡.冰晶广场.海雀岛.鲸鱼湾.极夜灯塔.冰湖滑场.北极熊海湾`.split(`.`)},sea:{name:`海上小岛`,icon:`🏝️`,blurb:`木栈道架在碧绿的浅海上，空地是一块块小沙洲；背后是长满椰子树的丛林小岛和火山，海上有灯塔、渔船，远处一圈珊瑚礁翻着白浪`,floating:!1,sea:!0,sky:[5217254,13625332,13625332],tile:{grout:`#6e5238`,bricks:[`#c9a273`,`#bf9665`,`#d2ad80`,`#b88e5d`],edge:`#5f4530`,side:9070408},pad:8018494,padTop:16774370,rock:[13220256,10127988,7036752],leaf:[4164154,4953664,3504691],flowers:[16732013,16756782,16743096,16777215],tall:[`palm`],low:[`flowerbed`,`lantern`],center:`sandbar`,backdrop:`none`,portal:{label:`快艇码头`,icon:`🚤`},light:{hemi:[14478591,14271900,.3],sun:[16774111,1.2]},env:{veg:{}},names:`椰林湾.白沙滩.珊瑚礁.海龟岬.贝壳小径.灯塔岩.渔人码头.潮汐池.火山脚.丛林瀑布.芒果园.菠萝田.海星湾.蓝洞.月牙湾.日落崖.海鸥岛.寄居蟹滩.冲浪角.椰子集市.吊床林.鹦鹉谷.藏宝洞.沉船湾.珍珠贝场.浮潜点.香蕉坡.彩虹礁.草帽小屋.独木舟渡口.火山温泉.萤火虫溪.鲸鱼观景台.海风广场.扶桑花园.鱼市.椰糖铺.日出栈桥.星沙滩.海葡萄湾.红树林.风帆俱乐部.小丑鱼湾.海螺岬`.split(`.`)}},zd=[`cloud`,`tokyo`,`paris`,`egypt`,`arctic`,`sea`],Bd={day:{name:`白天`,icon:`🌤️`,glow:1,lamp:1,exposure:1,spot:0},dusk:{name:`黄昏`,icon:`🌇`,glow:1.4,lamp:1.8,exposure:1.05,spot:.5,sky:[3952527,15770732,16171150],hemi:[16765352,7035514,.38],sun:[16756062,1.05],sunDir:[-24,9,-3]},night:{name:`夜晚`,icon:`🌙`,glow:1.9,lamp:2.9,exposure:1.3,spot:1.4,sky:[461862,2042456,1317952],hemi:[8228822,2761792,.34],sun:[11124735,.38],sunDir:[10,24,8]}},Vd=[`day`,`dusk`,`night`],Hd=`day`,Ud=()=>Bd[Hd],Wd=`cloud`,Gd=`s`,I=Rd.cloud,Kd=cd.s,qd=`days`,Jd=!1;function Yd(e){Wd=e}function Xd(e){Gd=e}function Zd(e){Hd=e}function Qd(e){qd=e}function $d(e){Jd=!!e}var ef=()=>qd===`poor`,tf=e=>ef()?e*50:e;function nf(){I=Rd[Wd],Kd=cd[Gd]}var rf=[],af=0,of=20,sf=2e4,cf=[],lf={x:4,z:3},L={cx:0,cz:0,w:24,d:16,R:3,backZ:-6.6,radius:14},uf=(e,t)=>new M((e-lf.x)*_d,0,(t-lf.z)*_d),df=(e,t)=>e+`,`+t;function ff(e,t){e+=.013,t+=.017;let n=!1;for(let r=0,i=cf.length-1;r<cf.length;i=r++){let[a,o]=cf[r],[s,c]=cf[i];o>t!=c>t&&e<(s-a)*(t-o)/(c-o)+a&&(n=!n)}return n}function pf(e){let t=[-e.dir[1],e.dir[0]],n=[e.gx+t[0],e.gz+t[1]],r=[e.gx-t[0],e.gz-t[1]];return ff(n[0],n[1])?[n,r]:[r,n]}var mf=e=>{let[t,n]=pf(e);return e.horiz?[t,n]:[n,t]};function hf(){let e=Kd;cf=e.corners;let t=cf.map(e=>e[0]),n=cf.map(e=>e[1]);lf.x=(Math.min(...t)+Math.max(...t))/2,lf.z=(Math.min(...n)+Math.max(...n))/2;let r=[];cf.forEach(([e,t],n)=>{let[i,a]=cf[(n+1)%cf.length],o=Math.sign(i-e),s=Math.sign(a-t),c=Math.abs(i-e)+Math.abs(a-t);for(let n=0;n<c;n++)r.push({gx:e+o*n,gz:t+s*n,dir:[o,s],corner:n===0,step:n})}),af=r.length;let i=new Set(e.bridges||[]),a=0,o=0;rf=r.map((t,n)=>{let r;e.types?r=e.types[n]||`prop`:n===0?r=`start`:t.corner?r=ud[a++%ud.length]:t.step%4==2?(r=dd[o%dd.length],!e.bridges&&fd.includes(o%dd.length)&&i.add(n),o++):r=`prop`;let s=r;return ef()&&md[r]&&(r=md[r]),{i:n,gx:t.gx,gz:t.gz,dir:t.dir,horiz:t.dir[1]===0,corner:t.corner,type:r,baseType:s,pos:uf(t.gx,t.gz),bridge:!1,owner:-1,level:0,invested:0,block:null}}),rf.forEach(e=>{e.bridge=!!I.floating&&i.has(e.i)&&e.type!==`prop`});let s=new Set(rf.map(e=>df(e.gx,e.gz))),c=[];rf.forEach(e=>{if(e.type!==`prop`)return;let t=mf(e).find(e=>!s.has(df(e[0],e[1])));if(!t){e.type=e.baseType=`chance`;return}s.add(df(t[0],t[1])),e.lgx=t[0],e.lgz=t[1],e.lotPos=uf(t[0],t[1]),c.push(e)});let l=c.length;c.forEach((e,t)=>{e.name=I.names[t]||I.names[t%I.names.length]+`二区`,e.price=e.base=l>1?1200+Math.round(t/(l-1)*32)*100:1200});let u=1/0,d=-1/0,f=1/0,p=-1/0,m=1/0,h=1/0,g=[];rf.forEach(e=>{g.push(e.pos),e.lotPos&&g.push(e.lotPos),m=Math.min(m,e.pos.z)}),g.forEach(e=>{u=Math.min(u,e.x),d=Math.max(d,e.x),f=Math.min(f,e.z),p=Math.max(p,e.z),h=Math.min(h,Math.hypot(e.x,e.z))}),L.cx=(u+d)/2,L.cz=(f+p)/2,L.w=d-u+_d,L.d=p-f+_d,L.backZ=m,L.radius=Math.max(L.w,L.d)/2,L.R=Math.max(1.8,h-1.1),of=e.days,sf=e.cash}function gf(){let e=new Set;rf.forEach(t=>{e.add(df(t.gx,t.gz)),t.lotPos&&e.add(df(t.lgx,t.lgz))});let t=new Map,n=(n,r,i)=>{let a=df(n,r);t.has(a)||t.set(a,{gx:n,gz:r,deco:null}),i&&(t.get(a).deco=i),e.add(a)};return rf.forEach(t=>{if(t.bridge||n(t.gx,t.gz),t.type===`prop`)n(t.lgx,t.lgz);else if(!t.bridge&&!t.corner){let r=mf(t)[0];e.has(df(r[0],r[1]))||n(r[0],r[1],`trees`)}}),rf.filter(e=>e.corner).forEach(t=>{let r=rf[(t.i-1+af)%af].dir,i=t.dir;[[t.gx-i[0],t.gz-i[1],`small`],[t.gx+r[0],t.gz+r[1],`small`],[t.gx-i[0]+r[0],t.gz-i[1]+r[1],pd[t.baseType]||`trees`]].forEach(([t,r,i])=>{e.has(df(t,r))||n(t,r,i)})}),{cells:t,occ:e}}var R=e=>document.querySelector(e),z=e=>Math.round(e).toLocaleString(`en-US`),B=(e,t)=>e+Math.random()*(t-e),_f=e=>e[Math.floor(Math.random()*e.length)],vf=(e,t,n)=>Math.max(t,Math.min(n,e)),yf=e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2;function bf(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function xf(e,t,n,r){let i=Math.sin(e*127.1+t*311.7+n*74.7+r*19.19)*43758.5453;return i-Math.floor(i)}function Sf(e){let t=Math.abs(e),n=t>=1e4?Math.round(t/1e3)/10+`万`:String(Math.round(t));return(e<0?`-`:``)+`¥`+n}var Cf=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),wf=null,Tf=!0;function Ef(){if(!wf)try{wf=new(window.AudioContext||window.webkitAudioContext)}catch{wf=null}}function Df(e,t,n,r,i,a){if(!wf||!Tf)return;let o=wf.currentTime+(i||0),s=wf.createOscillator(),c=wf.createGain();s.type=n||`sine`,s.frequency.setValueAtTime(e,o),a&&s.frequency.exponentialRampToValueAtTime(a,o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(r||.1,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+t),s.connect(c),c.connect(wf.destination),s.start(o),s.stop(o+t+.03)}function Of(e){switch(e){case`hop`:Df(520,.12,`sine`,.07,0,860);break;case`coin`:Df(988,.08,`square`,.04),Df(1319,.2,`square`,.04,.07);break;case`lose`:Df(392,.2,`triangle`,.08,0,247);break;case`dice`:for(let e=0;e<7;e++)Df(B(220,420),.04,`square`,.035,e*.08);break;case`build`:Df(523,.1,`triangle`,.08),Df(659,.1,`triangle`,.08,.09),Df(784,.22,`triangle`,.08,.18);break;case`card`:Df(740,.08,`sine`,.06),Df(1110,.16,`sine`,.06,.07);break;case`turn`:Df(660,.1,`sine`,.05);break;case`skill`:Df(392,.12,`triangle`,.08),Df(587,.12,`triangle`,.08,.1),Df(880,.3,`triangle`,.08,.2);break;case`win`:[523,659,784,1047].forEach((e,t)=>Df(e,.28,`triangle`,.09,t*.14))}}function kf(e){Tf=e}function Af(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function jf(e){let t=new Map,n=new Map,r=e.clone();return Mf(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Mf(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Mf(e.children[r],t.children[r],n)}var Nf=class extends Bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Bf(e)}),this.register(function(e){return new Vf(e)}),this.register(function(e){return new Xf(e)}),this.register(function(e){return new Zf(e)}),this.register(function(e){return new Qf(e)}),this.register(function(e){return new Uf(e)}),this.register(function(e){return new Wf(e)}),this.register(function(e){return new Gf(e)}),this.register(function(e){return new Kf(e)}),this.register(function(e){return new zf(e)}),this.register(function(e){return new qf(e)}),this.register(function(e){return new Hf(e)}),this.register(function(e){return new Yf(e)}),this.register(function(e){return new Jf(e)}),this.register(function(e){return new Lf(e)}),this.register(function(e){return new $f(e,If.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new $f(e,If.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new ep(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=hs.extractUrlBase(e);a=hs.resolveURL(t,this.path)}else a=hs.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new Uo(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===tp){try{a[If.KHR_BINARY_GLTF]=new ip(e)}catch(e){r&&r(e);return}i=JSON.parse(a[If.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Ap(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case If.KHR_MATERIALS_UNLIT:a[t]=new Rf;break;case If.KHR_DRACO_MESH_COMPRESSION:a[t]=new ap(i,this.dracoLoader);break;case If.KHR_TEXTURE_TRANSFORM:a[t]=new op;break;case If.KHR_MESH_QUANTIZATION:a[t]=new sp;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Pf(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Ff(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var If={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Lf=class{constructor(e){this.parser=e,this.name=If.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new N(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],Qe);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new ps(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new us(s),o.distance=c;break;case`spot`:o=new cs(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Sp(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Rf=class{constructor(){this.name=If.KHR_MATERIALS_UNLIT}getMaterialType(){return Ti}extendParams(e,t,n){let r=[];e.color=new N(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],Qe),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Ze))}return Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Bf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new j(e,e)}return Promise.all(r)}},Vf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},Hf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new N(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],Qe)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Ze)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Gf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new N().setRGB(i[0],i[1],i[2],Qe),Promise.all(r)}},Kf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_IOR}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},qf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new N().setRGB(i[0],i[1],i[2],Qe),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Ze)),Promise.all(r)}},Jf=class{constructor(e){this.parser=e,this.name=If.EXT_MATERIALS_BUMP}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Yf=class{constructor(e){this.parser=e,this.name=If.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ff(this.parser,e,this.name)===null?null:so}extendMaterialParams(e,t){let n=Ff(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Xf=class{constructor(e){this.parser=e,this.name=If.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Zf=class{constructor(e){this.parser=e,this.name=If.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Qf=class{constructor(e){this.parser=e,this.name=If.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},$f=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},ep=class{constructor(e){this.name=If.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==dp.TRIANGLES&&e.mode!==dp.TRIANGLE_STRIP&&e.mode!==dp.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new gn,n=new M,a=new Gt,s=new M(1,1,1),c=new la(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new ta(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new Jr,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new ta(t.array,t.itemSize,t.normalized))}Un.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},tp=`glTF`,np=12,rp={JSON:1313821514,BIN:5130562},ip=class{constructor(e){this.name=If.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,np),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==tp)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-np,i=new DataView(e,np),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===rp.JSON){let r=new Uint8Array(e,np+a,t);this.content=n.decode(r)}else if(r===rp.BIN){let n=np+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},ap=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=If.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=gp[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=gp[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=fp[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,Qe,n)})})}},op=class{constructor(){this.name=If.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},sp=class{constructor(){this.name=If.KHR_MESH_QUANTIZATION}},cp=class extends _o{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},lp=new Gt,up=class extends cp{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return lp.fromArray(i).normalize().toArray(i),i}},dp={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fp={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pp={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},mp={33071:n,33648:r,10497:t},hp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gp={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},_p={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},vp={CUBICSPLINE:void 0,LINEAR:A,STEP:He},yp={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function bp(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new oo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function xp(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Sp(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Cp(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function wp(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Tp(e){let t,n=e.extensions&&e.extensions[If.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Ep(n.attributes):e.indices+`:`+Ep(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Ep(e.targets[n]);return t}function Ep(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Dp(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Op(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var kp=new gn,Ap=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Pf,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new Ko(this.options.manager):new _s(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uo(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return xp(i,a,r),Sp(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[If.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(hs.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=hp[r.type],t=fp[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new Nr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=hp[r.type],o=fp[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Yr(f,u/s),t.cache.add(n,c)),p=new Zr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new Nr(f,a,d);if(r.sparse!==void 0){let t=hp.SCALAR,n=fp[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new Nr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=pp[n.magFilter]||1006,t.minFilter=pp[n.minFilter]||1008,t.wrapS=mp[n.wrapS]||1e3,t.wrapT=mp[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new un(e);t.needsUpdate=!0,n(t)}),t.load(hs.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Sp(e,a),e.userData.mimeType=a.mimeType||Op(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[If.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[If.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[If.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Oa,ri.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ma,ri.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return oo}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[If.KHR_MATERIALS_UNLIT]){let e=r[If.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new N(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],Qe),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Ze)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||yp.OPAQUE;if(l===yp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===yp.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Ti&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new j(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Ti&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Ti){let e=i.emissiveFactor;o.emissive=new N().setRGB(e[0],e[1],e[2],Qe)}return i.emissiveTexture!==void 0&&a!==Ti&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Ze)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Sp(n,i),t.associations.set(n,{materials:e}),i.extensions&&xp(r,n,i),n})}createUniqueName(e){let t=Ps.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[If.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Mp(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Tp(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[If.KHR_DRACO_MESH_COMPRESSION]?i(o):Mp(new Jr,o,t),o.mode===dp.TRIANGLE_STRIP?e=e.then(e=>Af(e,1)):o.mode===dp.TRIANGLE_FAN&&(e=e.then(e=>Af(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?bp(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===dp.TRIANGLES||u.mode===dp.TRIANGLE_STRIP||u.mode===dp.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new Yi(l,f):new Li(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===dp.LINES)d=new Ea(l,f);else if(u.mode===dp.LINE_STRIP)d=new Sa(l,f);else if(u.mode===dp.LINE_LOOP)d=new Da(l,f);else if(u.mode===dp.POINTS)d=new Na(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&wp(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Sp(d,i),u.extensions&&xp(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&xp(r,c[0],i),c[0];let l=new Wn;i.extensions&&xp(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new os(Wt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new ds(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sp(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new gn;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new ea(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Po(i,void 0,l);return Sp(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,kp)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new M().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Xi:t.length>1?new Wn:t.length===1?t[0]:new Un,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Sp(o,i),i.extensions&&xp(n,o,i),i.matrix!==void 0){let e=new gn;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new Wn;n.name&&(i.name=r.createUniqueName(n.name)),Sp(i,n),n.extensions&&xp(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(jf(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof ri||e instanceof un)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}_p[i.path]===_p.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(_p[i.path]){case _p.weights:l=ko;break;case _p.rotation:l=jo;break;case _p.translation:case _p.scale:l=No;break;default:switch(n.itemSize){case 1:l=ko;break;default:l=No}}let u=r.interpolation===void 0?A:vp[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+_p[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Dp(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof jo?up:cp)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function jp(e,t,n){let r=t.attributes,i=new hr;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new M(t[0],t[1],t[2]),new M(a[0],a[1],a[2])),e.normalized){let t=Dp(fp[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new M,t=new M;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Dp(fp[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Br;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Mp(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=gp[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return $t.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$t.workingColorSpace}" not supported.`),Sp(e,t),jp(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Cp(e,t.targets,n)})}var Np=(function(){var e=`b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb`,t=`b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb`,n=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),r=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!=`object`)return{supported:!1};var i=WebAssembly.validate(n)?s(t):s(e),a,o=WebAssembly.instantiate(i,{}).then(function(e){a=e.instance,a.exports.__wasm_call_ctors()});function s(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;++n){var i=e.charCodeAt(n);t[n]=i>96?i-97:i>64?i-39:i+4}for(var a=0,n=0;n<e.length;++n)t[a++]=t[n]<60?r[t[n]]:(t[n]-60)*64+t[++n];return t.buffer.slice(0,a)}function c(e,t,n,r,i,a,o){var s=e.exports.sbrk,c=r+3&-4,l=s(c*i),u=s(a.length),d=new Uint8Array(e.exports.memory.buffer);d.set(a,u);var f=t(l,r,i,u,a.length);if(f==0&&o&&o(l,c,i),n.set(d.subarray(l,l+r*i)),s(l-s(0)),f!=0)throw Error(`Malformed buffer data: `+f)}var l={NONE:``,OCTAHEDRAL:`meshopt_decodeFilterOct`,QUATERNION:`meshopt_decodeFilterQuat`,EXPONENTIAL:`meshopt_decodeFilterExp`,COLOR:`meshopt_decodeFilterColor`},u={ATTRIBUTES:`meshopt_decodeVertexBuffer`,TRIANGLES:`meshopt_decodeIndexBuffer`,INDICES:`meshopt_decodeIndexSequence`},d=[],f=0;function p(e){var t={object:new Worker(e),pending:0,requests:{}};return t.object.onmessage=function(e){var n=e.data;t.pending-=n.count,t.requests[n.id][n.action](n.value),delete t.requests[n.id]},t}function m(e){for(var t=`self.ready = WebAssembly.instantiate(new Uint8Array([`+new Uint8Array(i)+`]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = `+g.name+`;`+c.toString()+g.toString(),n=new Blob([t],{type:`text/javascript`}),r=URL.createObjectURL(n),a=d.length;a<e;++a)d[a]=p(r);for(var a=e;a<d.length;++a)d[a].object.postMessage({});d.length=e,URL.revokeObjectURL(r)}function h(e,t,n,r,i){for(var a=d[0],o=1;o<d.length;++o)d[o].pending<a.pending&&(a=d[o]);return new Promise(function(o,s){var c=new Uint8Array(n),l=++f;a.pending+=e,a.requests[l]={resolve:o,reject:s},a.object.postMessage({id:l,count:e,size:t,source:c,mode:r,filter:i},[c.buffer])})}function g(e){var t=e.data;self.ready.then(function(e){if(!t.id)return self.close();try{var n=new Uint8Array(t.count*t.size);c(e,e.exports[t.mode],n,t.count,t.size,t.source,e.exports[t.filter]),self.postMessage({id:t.id,count:t.count,action:`resolve`,value:n},[n.buffer])}catch(e){self.postMessage({id:t.id,count:t.count,action:`reject`,value:e})}})}return{ready:o,supported:!0,useWorkers:function(e){m(e)},decodeVertexBuffer:function(e,t,n,r,i){c(a,a.exports.meshopt_decodeVertexBuffer,e,t,n,r,a.exports[l[i]])},decodeIndexBuffer:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexBuffer,e,t,n,r)},decodeIndexSequence:function(e,t,n,r){c(a,a.exports.meshopt_decodeIndexSequence,e,t,n,r)},decodeGltfBuffer:function(e,t,n,r,i,o){c(a,a.exports[u[i]],e,t,n,r,a.exports[l[o]])},decodeGltfBufferAsync:function(e,t,n,r,i){return d.length>0?h(e,t,n,u[r],l[i]):o.then(function(){var o=new Uint8Array(e*t);return c(a,a.exports[u[r]],o,e,t,n,a.exports[l[i]]),o})}}})(),Pp=new URL(`buildings-Da2kD5tY.glb`,import.meta.url).href,Fp=new URL(`nature-aE6IPUeL.glb`,import.meta.url).href,Ip=new URL(`char-anims-DECIGFJ5.glb`,import.meta.url).href,Lp=new URL(`char-rogue-DweyyuSE.glb`,import.meta.url).href,Rp=new URL(`char-barbarian-BykNJakN.glb`,import.meta.url).href,zp=new URL(`char-mage-Bo2tFX8s.glb`,import.meta.url).href,Bp=new URL(`char-knight-Bl-VWpbq.glb`,import.meta.url).href,Vp=new URL(`char-shadow-GKGUVBnm.glb`,import.meta.url).href,Hp=new URL(`char-snowbear-rXg1zFlw.glb`,import.meta.url).href,Up=new URL(`char-candy-DkAp7VJw.glb`,import.meta.url).href,Wp=new URL(`char-goldknight-kpfTBN2N.glb`,import.meta.url).href,Gp=[Pp,Fp,new URL(`anim-props-DTJbJgh6.glb`,import.meta.url).href],Kp={rogue:Lp,barbarian:Rp,mage:zp,knight:Bp,shadow:Vp,snowbear:Hp,candy:Up,goldknight:Wp},qp={},Jp={},Yp={};function Xp(e){let t=new Wn;t.add(e),t.updateMatrixWorld(!0);let n=new hr().setFromObject(t),r=n.getCenter(new M);return e.position.x-=r.x,e.position.y-=n.min.y,e.position.z-=r.z,{g:t,size:n.getSize(new M)}}function Zp(e){e.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})}function Qp(e){let t={};for(let n of e)(t[n.name.split(`|`)[0]]||=[]).push(...n.tracks);for(let[e,n]of Object.entries(t))Yp[e]=new Po(e,-1,n)}var $p=null,em=e=>($p||=new Nf().setMeshoptDecoder(Np)).loadAsync(e);async function tm(e){$p||=new Nf().setMeshoptDecoder(Np);let t=[...Gp.map(e=>[e,e=>{for(let t of[...e.scene.children]){let{g:e,size:n}=Xp(t);Zp(e),qp[t.name]=e,Jp[t.name]=n}Qp(e.animations)}]),[Ip,e=>e.animations.forEach(e=>{Yp[e.name]=e})],...Object.entries(Kp).map(([e,t])=>[t,t=>{Zp(t.scene),qp[`char-`+e]=t.scene,Jp[`char-`+e]=new hr().setFromObject(t.scene).getSize(new M)}])],n=0;await Promise.all(t.map(async([r,i])=>{i(await $p.loadAsync(r)),e&&e(++n/t.length)}))}var nm=e=>qp[e].clone(),rm=e=>Jp[e],im=e=>jf(qp[`char-`+e]);function am(e){let t=jf(qp[e]);return{obj:t,mixer:new Ls(t)}}var om=e=>Yp[e],sm=e=>qp[e],cm=.68,lm=.18,um={};function dm(e){let t=new Ls(e),n={},r=e=>n[e]||(n[e]=t.clipAction(om(e))),i=`Idle`,a=null,o=!1;function s(e,t){let n=r(e);(a!==n||t)&&(n.reset(),n.setLoop(t?k:Be,1/0),n.clampWhenFinished=!!t,n.play(),a&&a!==n&&a.crossFadeTo(n,lm,!1),a=n)}return t.addEventListener(`finished`,e=>{e.action===a&&!o&&s(i)}),{update(e){t.update(e)},setBase(e){i!==e&&(i=e,!o&&(!a||a.loop!==2200||!a.isRunning())&&s(i))},once(e){o||s(e,!0)},hold(e){o=!0,s(e,e===`Death_A`)},release(){o&&(o=!1,s(i))},reset(){o=!1,i=`Idle`,t.stopAllAction(),a=null,s(`Idle`),t.update(0)}}}function fm(e){return um[e]||(um[e]=new oo({color:Td[e],roughness:.65})),um[e]}function pm(e){let t=new Wn,n=new Wn;t.add(n);let r=im(e.model);r.scale.setScalar(cm),r.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0,/_Cape$/.test(t.name)&&(t.material=fm(e.id)))}),n.add(r);let i=dm(r);return i.reset(),{root:t,body:n,anim:i,model:r}}var V={speed:1,gen:0,cur:0,firstIdx:0,round:1,started:!1,gameOver:!1,selectedChar:0,lineup:[0,1,2,3],humanWaiting:!1,humanResolve:null,busy:!1,turnFlags:{},campaign:null,clockStart:0,timeLimit:6e5},mm={zoomGoal:1,overview:!0,titleMode:!0,street:!1},hm=e=>{let t=V.gen;return new Promise(n=>setTimeout(()=>{t===V.gen&&n()},e/V.speed))},gm=[],_m=new Set;function vm(e,t){return new Promise(n=>gm.push({t0:performance.now(),d:Math.max(1,e/V.speed),fn:t,res:n}))}function ym(e){for(let t=gm.length-1;t>=0;t--){let n=gm[t],r=Math.min(1,(e-n.t0)/n.d);n.fn(r),r>=1&&(gm.splice(t,1),n.res())}}for(let e of[`color_pars_vertex`,`color_pars_fragment`])Ks[e]=Ks[e].replace(/varying vec/g,`centroid varying vec`);var bm=R(`#stage`);function xm(){try{return new sd({canvas:bm,antialias:!0})}catch{return R(`#startBtn`).textContent=`打不开 3D 画面`,R(`#loadErr`).textContent=`这个浏览器不支持 WebGL，换个浏览器或设备再试试。`,R(`#loadErr`).hidden=!1,null}}var Sm=xm(),Cm=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches&&Math.min(screen.width,screen.height)<820,wm=Math.min(window.devicePixelRatio||1,2);Sm&&(Sm.setPixelRatio(wm),Sm.toneMapping=4,Sm.toneMappingExposure=1,Sm.setSize(innerWidth,innerHeight),Sm.shadowMap.enabled=!0,Sm.shadowMap.type=1);var Tm=new er;Tm.background=new N(15459839),Tm.fog=new $n(15459839,30,100);var Em=new os(38,innerWidth/innerHeight,.1,700),Dm=new M(0,0,-1),Om=new M,km=new M,Am=new M,jm=new M,Mm=1,Nm=50,Pm=0,Fm=Math.atan2(3,12.5),Im=Math.atan2(11.5,Math.hypot(3,12.5)),Lm=.56,Rm=.17,zm=.22,Bm=Rm;function Vm(){let e=Em.aspect;return e<1?17.5*(1+(1-e)*1.3):17.5+Math.max(0,1.5-e)*4}function Hm(){let e=Em.aspect,t=2*Math.tan(Wt.degToRad(Em.fov/2));return Math.max((L.w+3)/e,(L.d+3)*.95,21)/t}function Um(e,t){mm.overview?Am.set(L.cx,0,L.cz-1).add(km):(Am.copy(Om).add(km),mm.street&&(Am.y+=1.2)),Dm.lerp(Am,1-Math.exp(-e*4.5)),Mm+=(mm.zoomGoal-Mm)*(1-Math.exp(-e*8));let n=(mm.titleMode?Hm()*.85:mm.overview?Hm():mm.street?Vm()*.62:Vm())*Mm;Nm+=(n-Nm)*(1-Math.exp(-e*3.5));let r=mm.titleMode?Math.sin(t*.18)*.5:0;Pm+=(r-Pm)*(1-Math.exp(-e*2));let i=mm.titleMode?Rm:mm.overview?Lm:mm.street?zm:Im;Bm+=(i-Bm)*(1-Math.exp(-e*2.5)),jm.set(Math.sin(Fm)*Math.cos(Bm),Math.sin(Bm),Math.cos(Fm)*Math.cos(Bm)).applyAxisAngle(Fd,Pm).multiplyScalar(Nm),Em.position.copy(Dm).add(jm),Em.lookAt(Dm),Tm.fog.near=Nm*.85,Tm.fog.far=Nm*2.8+20}function Wm(e){km.set(0,0,0),Om.copy(e.mesh.position)}function Gm(e,t){let n=Nm/innerHeight*1.1;jm.copy(Id).applyAxisAngle(Fd,Pm);let r=Math.hypot(jm.x,jm.z)||1,i=-jm.x/r,a=-jm.z/r,o=-a,s=i;km.x+=-e*n*o+t*n*1.35*i,km.z+=-e*n*s+t*n*1.35*a;let c=Math.max(20,L.radius*1.2),l=Math.hypot(km.x,km.z);l>c&&(km.x*=c/l,km.z*=c/l)}var H=[0,1,2,3].map(e=>Object.assign({id:e,char:e,human:!1,local:!1,nick:``,cash:2e4,pos:0,cards:[],bankrupt:!1,charge:0,turtle:0,sleep:0,pts:0,bank:0,jail:0,hosp:0,god:null},Md[e])),Km=()=>H.find(e=>e.local)||H.find(e=>e.human)||H[0],U=e=>e.local?`你`:e.nick||e.name,qm=e=>e.perk===`cards`?6:5,Jm=()=>H.filter(e=>!e.bankrupt),Ym=[{name:`蓝黄队`,seats:[0,2]},{name:`红绿队`,seats:[1,3]}],Xm=e=>e.id%2,Zm=(e,t)=>Jd&&e!==t&&Xm(e)===Xm(t),Qm=e=>Jd?H[(e.id+2)%4]:null,$m=e=>H.filter(t=>t!==e&&!t.bankrupt&&!Zm(t,e)),eh=e=>Math.round(e.loan*1.1/10)*10,th=e=>e.cash+e.bank+rf.reduce((t,n)=>t+(n.owner===e.id?n.invested-(n.loan?eh(n):0):0),0),nh=(e,t)=>!!e.god&&e.god.k===t,rh=e=>e.cash+e.bank,ih=e=>H.filter(t=>Xm(t)===e&&!t.bankrupt).reduce((e,t)=>e+th(t),0),ah=e=>H.filter(t=>Xm(t)===e).every(e=>e.bankrupt),oh=e=>H.filter(t=>Xm(t)===e).reduce((e,t)=>e+rh(t),0);function sh(e,t){let n=rf[e],r=Pd[t];return new M(n.pos.x+r[0],.15,n.pos.z+r[1])}function ch(e,t){e.pos=t,e.mesh.position.copy(sh(t,e.id))}var lh=null,uh=null;function dh(e){let t=pm(e);e.mesh=t.root,e.body=t.body,e.anim=t.anim,e.mesh.scale.setScalar(.92);let n=new Li(new qa(.4,.55,36),new Ti({color:Td[e.id],transparent:!0,opacity:.85,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.015,e.mesh.add(n),e.ring=n,e.statusSprite=null,Tm.add(e.mesh)}function fh(e,t){if(e.char===t||(Object.assign(e,Md[t],{char:t}),e.avatar=vh[t]||``,!e.mesh))return;let n=e.mesh,r=e.ring,i=e.statusSprite;dh(e),e.mesh.position.copy(n.position),e.mesh.rotation.y=n.rotation.y,e.mesh.visible=n.visible,Tm.remove(n),r.geometry.dispose(),r.material.dispose(),i&&(i.material.map.dispose(),i.material.dispose())}function ph(){H.forEach(e=>{dh(e),ch(e,0),e.mesh.rotation.y=Ld}),lh=new us(16767392,0,10,1),Tm.add(lh),uh=new Li(new Ua(.2,.42,4),new oo({color:16765503,emissive:16754688,emissiveIntensity:.35,flatShading:!0})),Tm.add(uh)}var mh=4.6;function hh(e){lh&&(lh.intensity=e*mh)}async function gh(e,t){let n=e.mesh.position.clone(),r=sh(t,e.id);e.mesh.rotation.y=Math.atan2(r.x-n.x,r.z-n.z),Of(`hop`),Om.copy(r),e.anim.hold(`Jump_Idle`),await vm(290,t=>{e.mesh.position.lerpVectors(n,r,t),e.mesh.position.y=.15+Math.sin(Math.PI*t)*.85;let i=1+Math.sin(Math.PI*t)*.12,a=1/Math.sqrt(i);e.body.scale.set(a,i,a)}),e.body.scale.set(1,1,1)}async function _h(e){e.anim.release();let t=e.mesh.rotation.y,n=Ld-t;n=Math.atan2(Math.sin(n),Math.cos(n)),await vm(200,r=>{e.mesh.rotation.y=t+n*r})}var vh=[];function yh(){let e=new sd({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setSize(192,192,!1),e.toneMapping=Sm.toneMapping,e.toneMappingExposure=Sm.toneMappingExposure,e.setClearColor(0,0);let t=new er;t.add(new Jo(16777215,14207215,.85*Math.PI));let n=new ps(16777215,.6*Math.PI);n.position.set(1,2,3),t.add(n);let r=new os(30,1,.1,20),i=new M;Md.forEach((n,a)=>{let o=pm({model:n.model,id:Nd(a)});t.add(o.root),o.root.updateMatrixWorld(!0),o.model.getObjectByName(`head`).getWorldPosition(i),r.position.set(i.x+.12,i.y+.36,i.z+2.3),r.lookAt(i.x,i.y+.3,i.z),e.render(t,r),vh[a]=e.domElement.toDataURL(`image/png`),t.remove(o.root)}),H.forEach(e=>{e.avatar=vh[e.char]}),e.dispose(),e.forceContextLoss()}var bh=`
float sHash(vec2 p) {
  uvec2 q = uvec2(ivec2(floor(p)) + 32768) * uvec2(1597334673u, 3812015801u);
  uint n = (q.x ^ q.y) * 1597334673u;
  return float(n >> 8) * (1.0 / 16777216.0);
}
float sHash3(vec3 p) {
  uvec3 q = uvec3(ivec3(floor(p)) + 32768) * uvec3(1597334673u, 3812015801u, 2798796415u);
  uint n = (q.x ^ q.y ^ q.z) * 1597334673u;
  return float(n >> 8) * (1.0 / 16777216.0);
}
float sNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  return mix(mix(sHash(i), sHash(i + vec2(1.0, 0.0)), u.x), mix(sHash(i + vec2(0.0, 1.0)), sHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float sFbm(vec2 p) {
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { s += a * sNoise(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + 17.3; a *= 0.5; }
  return s / 0.9375;
}
`,W=null,xh=[],Sh=[];function Ch(e){W&&(Tm.remove(W),e(W)),W=new Wn,Tm.add(W),Sh.length=0,xh=[]}var wh={day:{sky:[2847700,13625332,6131622],sun:[16773852,3.3],dir:[-14,24,16],hemi:[13624575,14733222,.22],cloud:[16777215,10466255,.42],stars:0,sunSize:.99962,water:{deep:675198,lagoon:1744806,sigma:[.62,.13,.085],foam:16186367,bio:0},fog:.003,exposure:1,env:1,shadow:.55},dusk:{sky:[2637178,16100728,4867680],sun:[16754010,2.6],dir:[-15,2.7,-22],hemi:[16764832,5917290,.2],cloud:[16762266,6969986,.48],stars:.15,sunSize:.9994,water:{deep:1390682,lagoon:2785158,sigma:[.58,.14,.1],foam:16770252,bio:0},fog:.0036,exposure:1.05,env:1,shadow:.4},night:{sky:[198937,1385546,660518],sun:[11124991,.6],dir:[-16,2.6,-22],hemi:[7110856,1841712,.22],cloud:[3425388,1054768,.32],stars:1,sunSize:.9996,moon:!0,water:{deep:200735,lagoon:535096,sigma:[.62,.15,.1],foam:9086152,bio:2545407},fog:.0042,exposure:1.3,env:1,shadow:.3}},Th=()=>wh[Hd]||wh.day,Eh=-.55,Dh={uSunDir:{value:new M(0,1,0)},uSunCol:{value:new N},uZenith:{value:new N},uHorizon:{value:new N},uBelow:{value:new N},uCloudLit:{value:new N},uCloudShade:{value:new N},uCloudCover:{value:.4},uStars:{value:0},uSunSize:{value:.9996},uMoon:{value:0},uTime:{value:0},uCloudShadow:{value:0},uBoardBox:{value:new dn},uCloudTex:{value:null}},Oh=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
  gl_Position = vec4(p.xy, p.w * 0.99999, p.w);   // 画在最远处
}`,kh=`
vec3 skyGlow(vec3 d) {
  float mu = max(dot(d, uSunDir), 0.0);
  return uSunCol * (pow(mu, 5.0) * 0.12 + pow(mu, 40.0) * 0.3);
}`,Ah=`
uniform float uCloudShadow;
uniform vec4 uBoardBox;
uniform sampler2D uCloudTex;
float cloudShade(vec3 w) {
  float n = texture2D(uCloudTex, w.xz * 0.0028 + uTime * vec2(0.00125, 0.00056)).r;
  vec2 q = max(abs(w.xz - uBoardBox.xy) - uBoardBox.zw, 0.0);
  return 1.0 - uCloudShadow * n * smoothstep(2.0, 10.0, length(q));
}`,jh=null;function Mh(){if(jh)return jh;let e=(e,t,n,r)=>{let i=Math.sin((e%n+n)%n*127.1+(t%n+n)%n*311.7+r*74.7)*43758.5453;return i-Math.floor(i)},n=(t,n,r,i)=>{let a=Math.floor(t),o=Math.floor(n),s=t-a,c=n-o,l=s*s*(3-2*s),u=c*c*(3-2*c),d=e(a,o,r,i),f=e(a+1,o,r,i),p=e(a,o+1,r,i),m=e(a+1,o+1,r,i);return(d*(1-l)+f*l)*(1-u)+(p*(1-l)+m*l)*u},r=new Float32Array(65536);for(let e=0;e<256;e++)for(let t=0;t<256;t++){let i=t/256*16,a=e/256*16,o=i+.7*n(i*.5,a*.5,8,3),s=a+.7*n(i*.5,a*.5,8,7),c=0,l=.5,u=1;for(let e=0;e<4;e++)c+=l*n(o*u,s*u,16*u,e),l*=.5,u*=2;r[e*256+t]=c/.9375}let i=Float32Array.from(r).sort(),a=i[40632],o=i[56360],c=new Uint8Array(65536);for(let e=0;e<65536;e++){let t=Math.min(1,Math.max(0,(r[e]-a)/(o-a)));c[e]=Math.round(t*t*(3-2*t)*255)}return jh=new Zi(c,256,256,te),jh.wrapS=jh.wrapT=t,jh.minFilter=l,jh.magFilter=s,jh.generateMipmaps=!0,jh.needsUpdate=!0,jh}var Nh=`
uniform vec3 uSunDir, uSunCol, uZenith, uHorizon, uBelow, uCloudLit, uCloudShade;
uniform float uCloudCover, uStars, uSunSize, uMoon, uTime;
varying vec3 vDir;
${bh}
${kh}
float clouds(vec2 p) {
  float n = sFbm(p) * 0.65 + sFbm(p * 2.7 + 9.0) * 0.35;
  return smoothstep(1.0 - uCloudCover, 1.0 - uCloudCover + 0.32, n);
}
// 地平线上一圈远远的积云：按方位角和仰角取噪声，底边平、顶上一团团鼓起来
float bank(vec3 d) {
  float az = atan(d.z, d.x);
  float h = sFbm(vec2(az * 5.0, 3.0)) * 0.11 + sFbm(vec2(az * 13.0, 7.0)) * 0.05;      // 每一段云的高度
  float body = smoothstep(h + 0.012, h - 0.012, d.y) * smoothstep(0.004, 0.022, d.y);
  float puff = sFbm(vec2(az * 26.0, d.y * 60.0)) * 0.5 + 0.5;
  return body * smoothstep(0.35, 0.6, puff + 0.25 * smoothstep(0.0, 0.05, h - d.y));
}
void main() {
  vec3 d = normalize(vDir);
  float y = d.y, t = pow(clamp(y, 0.0, 1.0), 0.42);
  vec3 col = mix(uHorizon, uZenith, t);
  float mu = dot(d, uSunDir);
  col += skyGlow(d) * (0.35 + 0.65 * (1.0 - t));
  col = mix(col, uBelow, smoothstep(0.0, -0.1, y));
  float shade = 0.0, cover = 0.0;
  if (y > 0.0) {
    // 云：投影到一个高高的平面上，远处（靠近地平线）压扁、淡掉
    vec2 p = d.xz / (y + 0.1) * 0.9 + vec2(uTime * 0.006, uTime * 0.0025);
    cover = clouds(p) * smoothstep(0.0, 0.16, y);
    float lit = clamp(0.62 + (clouds(p) - clouds(p + uSunDir.xz * 0.06)) * 2.2, 0.0, 1.0);   // 朝太阳那边亮，背面暗
    vec3 cc = mix(uCloudShade, uCloudLit, lit) + uSunCol * pow(max(mu, 0.0), 10.0) * 0.6 * (1.0 - cover);   // 太阳附近的云边透光
    col = mix(col, cc, cover);
    float b = bank(d) * uCloudCover * 1.6;
    float az = atan(d.z, d.x), tops = sFbm(vec2(az * 5.0, 3.0)) * 0.11 + sFbm(vec2(az * 13.0, 7.0)) * 0.05;
    float hl = clamp((y - 0.01) / max(tops, 0.02), 0.0, 1.0);                     // 云底暗、云顶亮
    vec3 bc = mix(uCloudShade, uCloudLit, 0.25 + 0.75 * hl) + uSunCol * pow(max(mu, 0.0), 6.0) * 0.5 * hl;
    col = mix(col, mix(bc, uHorizon, 0.25), clamp(b, 0.0, 1.0));
    cover = max(cover, b);
    // 星星：按方向分格子，每格最多一颗
    if (uStars > 0.0) {
      vec3 s = d * 260.0, cell = floor(s);
      float h = sHash3(cell);
      vec3 o = vec3(sHash3(cell + 3.1), sHash3(cell + 7.7), sHash3(cell + 1.3)) - 0.5;
      float star = step(0.975, h) * smoothstep(0.32, 0.0, length(fract(s) - 0.5 - o * 0.5));
      float tw = 0.6 + 0.4 * sin(uTime * (1.5 + h * 3.0) + h * 40.0);
      col += vec3(0.9, 0.95, 1.0) * star * tw * uStars * (0.5 + 2.5 * fract(h * 37.0)) * smoothstep(0.02, 0.2, y) * (1.0 - cover);
    }
  }
  // 太阳本体（亮度远超 1，后期会泛光）；夜里换成月亮
  float disk = smoothstep(uSunSize, uSunSize + 0.00012, mu);
  if (uMoon > 0.5) {
    float m = sNoise(d.xy * 900.0) * 0.25 + sNoise(d.yz * 300.0) * 0.2;
    col = mix(col, vec3(1.6, 1.65, 1.8) * (0.8 + m), disk * (1.0 - cover * 0.8));
    col += vec3(0.25, 0.32, 0.5) * pow(max(mu, 0.0), 300.0) * 0.6;
  } else col += uSunCol * disk * 18.0 * (1.0 - cover);
  gl_FragColor = vec4(col, 1.0);
}`,Ph=null,Fh=null,Ih=null;function Lh(){return new io({uniforms:Dh,vertexShader:Oh,fragmentShader:Nh,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function Rh(e){let t=Dh;t.uSunDir.value.set(...e.dir).normalize(),t.uSunCol.value.setHex(e.sun[0]).multiplyScalar(e.sun[1]*(e.moon?.5:.9)),t.uZenith.value.setHex(e.sky[0]),t.uHorizon.value.setHex(e.sky[1]),t.uBelow.value.setHex(e.sky[2]),t.uCloudLit.value.setHex(e.cloud[0]),t.uCloudShade.value.setHex(e.cloud[1]),t.uCloudCover.value=e.cloud[2],t.uStars.value=e.stars,t.uSunSize.value=e.sunSize,t.uMoon.value=+!!e.moon,t.uCloudShadow.value=e.shadow,t.uCloudTex.value=Mh(),t.uBoardBox.value.set(L.cx,L.cz,L.w/2,L.d/2)}function zh(){let e=Th();Rh(e),Dh.uTime.value=0,Ph||(Ph=new Li(new Ja(1,48,24),Lh()),Ph.geometry.userData.keep=!0),Ph.frustumCulled=!1,Ph.renderOrder=-1e3,W.add(Ph),Sh.push(e=>{Dh.uTime.value=e}),Ih||=new mc(Sm);let t=new er,n=new Li(Ph.geometry,Lh());n.frustumCulled=!1,t.add(n);let r=Dh.uStars.value;Dh.uStars.value=0,Fh&&Fh.dispose(),Fh=Ih.fromScene(t,0,.1,10),Dh.uStars.value=r,n.material.dispose(),Tm.environment=Fh.texture,Tm.environmentIntensity=e.env,Tm.background.setHex(e.sky[1]),Tm.fog=Bh,Bh.color.setHex(e.sky[1]),Bh.density=e.fog}var Bh=new Qn(13625332,.003);function Vh(){let e=Th(),t=e.hemi;W.add(new Jo(t[0],t[1],t[2]*Math.PI));let n=new ps(e.sun[0],e.sun[1]);n.target.position.set(L.cx,0,L.cz);let r=new M(...e.dir).normalize().multiplyScalar(40);n.position.set(L.cx+r.x,r.y,L.cz+r.z),n.castShadow=!0,n.shadow.mapSize.set(2048,2048);let i=L.radius+7,a=n.shadow.camera;a.left=-i,a.right=i,a.top=i,a.bottom=-i,a.near=1,a.far=80+i*2,a.updateProjectionMatrix(),n.shadow.bias=-4e-4,n.shadow.normalBias=.03,n.shadow.radius=2.5,W.add(n),W.add(n.target)}var Hh={uSplat:{value:null},uBox:{value:new dn},uSea:{value:Eh},uSigma:{value:new M(.6,.13,.08)},uSand:{value:new N(15786691)},uSandWet:{value:new N(13217412)},uGrassA:{value:new N(5016110)},uGrassB:{value:new N(8826174)},uRock:{value:new N(7498336)},uSeagrass:{value:new N(5666364)},uCoral:{value:new N(13664364)}},Uh=`
#ifdef USE_FOG
#ifdef FOG_EXP2
  float fogFactor = 1.0 - exp(- fogDensity * fogDensity * vFogDepth * vFogDepth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor + skyGlow(normalize(vSeaW - cameraPosition)), fogFactor);
#else
  float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
#endif
#endif`,Wh=`
vec2 cHash2(vec2 p) {
  uvec2 q = uvec2(ivec2(p) + 32768) * uvec2(1597334673u, 3812015801u);
  uint n = (q.x ^ q.y) * 1597334673u;
  return vec2(float(n >> 8), float((n * 747796405u) >> 8)) * (1.0 / 16777216.0);
}
float cEdge(vec2 p, float t) {
  vec2 i = floor(p), f = fract(p);
  float f1 = 8.0, f2 = 8.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y)), o = cHash2(i + g);
    float d = length(g + 0.5 + 0.42 * sin(t + 6.2831 * o) - f);
    if (d < f1) { f2 = f1; f1 = d; } else if (d < f2) f2 = d;
  }
  return f2 - f1;
}
float caustic(vec2 p, float t) {
  p += 0.35 * sin(p.yx * 1.3 + t * 0.6);
  float a = 1.0 - smoothstep(0.0, 0.2, cEdge(p * 1.25, t * 0.9));
  float b = 1.0 - smoothstep(0.0, 0.15, cEdge(p * 1.85 + 7.3, t * 0.7 + 2.0));
  return a * a * 0.65 + b * b * 0.45;
}`,Gh=`
vec3 seaBump(vec3 pos, vec3 n, float h) {
  vec3 sx = dFdx(pos), sy = dFdy(pos);
  vec3 r1 = cross(sy, n), r2 = cross(n, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2);
  return normalize(abs(det) * n - grad);
}`,Kh=`
{
  float wd = max(uSea - vSeaW.y, 0.0);
  if (wd > 0.0) {
    float k = smoothstep(0.0, 0.25, wd) * exp(-wd * 0.22);
    float c = caustic(vSeaW.xz * 0.9, uTime);
    reflectedLight.directDiffuse *= exp(-uSigma * wd / max(uSunDir.y, 0.3)) * (1.0 + c * 1.5 * k);
    reflectedLight.indirectDiffuse *= exp(-uSigma * wd * 0.7);
    reflectedLight.directSpecular *= 0.0;
  }
}`,qh=`
  { float cs = cloudShade(vSeaW); reflectedLight.directDiffuse *= cs; reflectedLight.directSpecular *= cs; }`;function Jh(){let e=new oo({color:16777215,roughness:.95});return e.onBeforeCompile=e=>{Object.assign(e.uniforms,Hh,Dh),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vSeaW;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
vSeaW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uSplat;
uniform vec4 uBox;
uniform float uSea, uTime;
uniform vec3 uSigma, uSand, uSandWet, uGrassA, uGrassB, uRock, uSeagrass, uCoral, uSunDir, uSunCol;
varying vec3 vSeaW;
float gAO, gWet, gUnder, gGrass, gRock;
${bh}${Wh}${Gh}${kh}${Ah}`).replace(`#include <color_fragment>`,`
  vec3 P = vSeaW;
  vec3 sp = texture2D(uSplat, (P.xz - uBox.xy) * uBox.zw).rgb;
  gGrass = sp.r; gRock = sp.g; gAO = sp.b;
  gUnder = smoothstep(uSea + 0.03, uSea - 0.08, P.y);
  gWet = smoothstep(uSea + 0.26, uSea + 0.04, P.y) * (1.0 - gRock);
  float n1 = sNoise(P.xz * 0.42), n2 = sNoise(P.xz * 1.9 + 7.0), n3 = sNoise(P.xz * 9.0 + 3.0);
  vec3 sand = mix(uSand, uSandWet, gWet) * (0.9 + 0.12 * n1 + 0.06 * n2 + 0.05 * n3);
  vec3 gc = mix(uGrassA, uGrassB, smoothstep(0.25, 0.75, sNoise(P.xz * 0.13 + 5.0))) * (0.8 + 0.25 * n2 + 0.08 * n3);
  vec3 uc = mix(uSeagrass, uCoral, smoothstep(0.45, 0.7, sNoise(P.xz * 0.45 + 3.0))) * (0.8 + 0.3 * n2);
  vec3 rc = uRock * (0.68 + 0.38 * sNoise(P.xz * 0.7 + P.y * 0.6) + 0.12 * n3);
  vec3 col = sand;
  col = mix(col, gc, gGrass * (1.0 - gUnder));
  col = mix(col, uc, gGrass * gUnder * 0.9);
  col = mix(col, rc, gRock);
  diffuseColor.rgb = col;`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = mix(0.95, 0.38, gWet * (1.0 - gUnder) * (1.0 - gGrass));`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
  {
    // 细节凹凸：沙纹（水边、水下）、沙粒、草丛和岩石的起伏；远处淡掉，免得闪
    float ripple = sin(dot(vSeaW.xz, vec2(0.83, 0.55)) * 6.5 + sNoise(vSeaW.xz * 0.6) * 6.0);
    float h = ripple * 0.012 * max(gWet, gUnder) * (1.0 - gGrass) + (n3 - 0.5) * 0.006 + (n2 - 0.5) * 0.03 * (gGrass + gRock);
    normal = seaBump(-vViewPosition, normal, h * (1.0 - smoothstep(25.0, 60.0, length(vViewPosition))));
  }`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
${Kh}${qh}
  reflectedLight.indirectDiffuse *= gAO;
  reflectedLight.directDiffuse *= mix(1.0, gAO, 0.35);
  reflectedLight.indirectSpecular *= gAO;`).replace(`#include <fog_fragment>`,Uh)},e.customProgramCacheKey=()=>`sea-terrain`,e}function Yh(e,t=null){let n=e.clone();return n.onBeforeCompile=e=>{t&&t.patch(e),Object.assign(e.uniforms,{uSea:Hh.uSea,uSigma:Hh.uSigma},Dh),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vSeaW;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
#ifdef USE_INSTANCING
vSeaW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
vSeaW = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uSea, uTime;
uniform vec3 uSigma, uSunDir, uSunCol;
varying vec3 vSeaW;
${Wh}${kh}${Ah}`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
`+Kh+qh).replace(`#include <fog_fragment>`,Uh)},n.customProgramCacheKey=()=>`sea-underwater`+(t?`-`+t.key:``),n.userData.seabed=1,n}var Xh=null;function Zh(e){if(e.parts)return e.parts;let t=e.geo,n=t.attributes.position,r=t.index.array,i=e.matrix.elements,a=e.layout.sea,o=new Uint8Array(n.count);for(let e=0;e<n.count;e++){let t=i[1]*n.getX(e)+i[5]*n.getY(e)+i[9]*n.getZ(e)+i[13];o[e]=t>a+.08?2:t<a-.05?0:1}let s=[],c=[],l=[];for(let e=0;e<r.length;e+=3){let t=o[r[e]],n=o[r[e+1]],i=o[r[e+2]];(t===2&&n===2&&i===2?s:t===0&&n===0&&i===0?c:l).push(r[e],r[e+1],r[e+2])}let u=e=>{let n=new Jr;for(let e in t.attributes)n.setAttribute(e,t.attributes[e]);return n.setIndex(e),n.computeBoundingSphere(),n.userData.keep=!0,n};return e.parts={land:u(s),shore:u(l),deep:u(c)}}function Qh(e,t){Xh||=Jh();let[n,r,i,a]=e.layout.bounds;Hh.uSplat.value=e.splat,Hh.uBox.value.set(n,i,1/(r-n),1/(a-i)),Hh.uSea.value=e.layout.sea;let{land:o,shore:s,deep:c}=Zh(e);for(let[n,r]of[[o,0],[s,1],[c,2]]){let i=new Li(n,Xh);i.matrixAutoUpdate=!1,i.matrix.copy(e.matrix),i.receiveShadow=!0,i.userData.seabed=r,t.add(i)}}var $h={uDepth:{value:null},uWaveTex:{value:null},uBox:{value:new dn(0,0,0,0)},uSea:{value:Eh},uWaves:{value:[[.15,-1,13,.1],[-.5,-.86,8.2,.09],[.6,-.8,5.1,.07],[.95,-.3,3.2,.05]].map(([e,t,n,r])=>{let i=Math.hypot(e,t);return new dn(e/i,t/i,n,r)})},uDeep:{value:new N},uLagoon:{value:new N},uSigma:{value:new M},uFoamCol:{value:new N},uBio:{value:new N},uPileTex:{value:null},uPileBox:{value:new dn},uBed:{value:null}},eg=null;function tg(){if(eg)return eg;let e=new Uint8Array(262144),n=9,r=()=>(n=n*16807%2147483647)/2147483647,i=[];for(let e=0;e<44;e++){let e=2+r()*20,t=r()*Math.PI*2,n=Math.round(Math.cos(t)*e),a=Math.round(Math.sin(t)*e);(n||a)&&i.push([n,a,r()*Math.PI*2,Math.hypot(n,a)**-1.8])}let a=new Float32Array(65536),o=new Float32Array(65536),c=0;for(let e=0;e<256;e++)for(let t=0;t<256;t++){let n=0,r=0;for(let[a,o,s,c]of i){let i=Math.cos(2*Math.PI*(a*t+o*e)/256+s)*c;n+=i*a,r+=i*o}a[e*256+t]=n,o[e*256+t]=r,c=Math.max(c,Math.hypot(n,r))}let u=[];for(let e=0;e<26;e++)u.push([r(),r(),.6+r()*.8]);for(let t=0;t<256;t++)for(let n=0;n<256;n++){let r=9,i=9;for(let[e,a,o]of u){let s=Math.abs(n/256-e),c=Math.abs(t/256-a);s=Math.min(s,1-s),c=Math.min(c,1-c);let l=Math.hypot(s,c)*o;l<r?(i=r,r=l):l<i&&(i=l)}let s=1-Math.min(1,(i-r)/.03),l=Math.max(0,1-r/.05),d=(t*256+n)*4;e[d]=128+a[t*256+n]/c*127,e[d+1]=128+o[t*256+n]/c*127,e[d+2]=128,e[d+3]=Math.min(255,(s*.85+l*.5)*255)}return eg=new Zi(e,256,256,T),eg.wrapS=eg.wrapT=t,eg.minFilter=l,eg.magFilter=s,eg.generateMipmaps=!0,eg.anisotropy=4,eg.needsUpdate=!0,eg}var ng=new Zi(new Uint8Array([255,0,255,255]),1,1,T);ng.needsUpdate=!0;var rg=null;function ig(e,t=.082){rg&&rg.dispose();let n=e.map(e=>e[0]),r=e.map(e=>e[1]),i=Math.min(...n)-1,a=Math.min(...r)-1,o=Math.max(...n)+1-i,c=Math.max(...r)+1-a,l=Math.min(2048,Math.ceil(o*28)),u=Math.min(2048,Math.ceil(c*28)),d=l/o,f=u/c,p=new Uint8Array(l*u),m=.6+t;for(let[n,r]of e){let e=Math.max(0,Math.floor((n-m-i)*d)),o=Math.min(l-1,Math.ceil((n+m-i)*d)),s=Math.max(0,Math.floor((r-m-a)*f)),c=Math.min(u-1,Math.ceil((r+m-a)*f));for(let u=s;u<=c;u++)for(let s=e;s<=o;s++){let e=Math.max(0,Math.hypot((s+.5)/d+i-n,(u+.5)/f+a-r)-t),o=Math.round(Math.max(0,1-e/.6)*255);o>p[u*l+s]&&(p[u*l+s]=o)}}rg=new Zi(p,l,u,te),rg.minFilter=rg.magFilter=s,rg.unpackAlignment=1,rg.needsUpdate=!0,$h.uPileTex.value=rg,$h.uPileBox.value.set(i,a,1/o,1/c)}var ag=`
uniform float uTime;
uniform sampler2D uDepth;
uniform vec4 uBox, uWaves[4];
varying vec3 vSeaW, vSeaN;
varying float vCrest;
float seaDepthV(vec2 xz) {
  vec2 uv = (xz - uBox.xy) * uBox.zw;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 30.0;
  float r = textureLod(uDepth, uv, 0.0).r;
  return r > 0.995 ? 30.0 : r * r * 16.0;
}
vec3 gerstner(vec2 p, float damp, out vec3 n, out float crest) {
  vec3 d = vec3(0.0), tx = vec3(1.0, 0.0, 0.0), tz = vec3(0.0, 0.0, 1.0);
  crest = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 w = uWaves[i];
    float k = 6.2831853 / w.z, s = w.w * damp, a = s / k;
    float f = k * (dot(w.xy, p) - sqrt(9.8 / k) * 0.55 * uTime);
    float sf = sin(f), cf = cos(f);
    d += vec3(w.x * a * cf, a * sf, w.y * a * cf);
    tx += vec3(-w.x * w.x * s * sf, w.x * s * cf, -w.x * w.y * s * sf);
    tz += vec3(-w.x * w.y * s * sf, w.y * s * cf, -w.y * w.y * s * sf);
    crest += s * sf;
  }
  n = normalize(cross(tz, tx));
  return d;
}`,og=`
uniform float uTime, uSea;
uniform sampler2D uDepth, uWaveTex, uPileTex, uBed;
uniform mat4 projectionMatrix;   // three.js 只在开着透射时给片元着色器声明它，这里自己声明（算折射后海底在画面上的位置）
uniform vec4 uBox, uPileBox;
uniform vec3 uDeep, uLagoon, uSigma, uFoamCol, uBio, uSunDir, uSunCol;
varying vec3 vSeaW, vSeaN;
varying float vCrest;
float gFoam, gGlow, gCloud, sDepth, sShore, sOcean, sDist;
${bh}${kh}${Ah}`,sg=`
  {
    vec2 uv = (vSeaW.xz - uBox.xy) * uBox.zw;
    bool inside = uv.x >= 0.0 && uv.y >= 0.0 && uv.x <= 1.0 && uv.y <= 1.0;
    vec3 dm = inside ? texture2D(uDepth, uv).rgb : vec3(1.0, 0.0, 1.0);
    sDepth = dm.r * dm.r * 16.0;
    sShore = dm.b * 32.0;
    sOcean = smoothstep(9.0, 15.5, sDepth);
    sDist = length(vSeaW - cameraPosition);
    float b1 = texture2D(uWaveTex, vSeaW.xz * 0.31 + vec2(uTime * 0.013, -uTime * 0.009)).a;
    float b2 = texture2D(uWaveTex, vSeaW.xz * 0.83 - vec2(uTime * 0.02, uTime * 0.011)).a;
    float bub = b1 * 0.55 + b2 * 0.45;
    float wob = sNoise(vSeaW.xz * 0.3) * 4.0;
    float lap = sin(uTime * 1.15 - sDepth * 16.0 + wob);                         // 一道道往岸上推的浪（越浅越靠前）
    float edge = smoothstep(0.1 + 0.05 * lap, 0.0, sDepth);                        // 水边一圈白
    float bands = smoothstep(0.7, 1.0, lap) * smoothstep(0.35, 0.08, sDepth) * smoothstep(0.0, 0.03, sDepth) * 0.6;
    float reef = smoothstep(0.85, 0.3, sDepth) * smoothstep(6.0, 9.0, sShore);    // 礁上的碎浪
    float surf = reef * smoothstep(0.35, 0.8, sFbm(vSeaW.xz * 0.42 + vec2(uTime * 0.33, uTime * 0.11)));
    float caps = smoothstep(0.24, 0.38, vCrest) * sOcean * 0.4;                  // 外海浪尖的白头
    // 栈道木桩周围：贴着木桩一圈白，外面一圈圈慢慢散开的细浪
    vec2 pu = (vSeaW.xz - uPileBox.xy) * uPileBox.zw;
    float pd = pu.x > 0.0 && pu.y > 0.0 && pu.x < 1.0 && pu.y < 1.0 ? (1.0 - texture2D(uPileTex, pu).r) * 0.6 : 0.6;
    float piles = smoothstep(0.1 + 0.035 * sin(uTime * 2.3 + wob), 0.01, pd)
                + smoothstep(0.7, 1.0, sin(uTime * 2.0 - pd * 28.0 + wob)) * smoothstep(0.4, 0.06, pd) * 0.6;
    float raw = edge + bands + surf;
    gFoam = clamp(raw * smoothstep(0.15, 0.55, bub + 0.4 * edge) + caps * bub + piles * (0.3 + 0.7 * bub), 0.0, 1.0);
    gFoam *= 1.0 - smoothstep(120.0, 300.0, sDist);
    gGlow = clamp(raw + piles, 0.0, 1.0) * (0.55 + 0.45 * sin(uTime * 2.1 + sShore * 3.0 + wob)) * bub;
    gCloud = mix(cloudShade(vSeaW), 1.0, smoothstep(150.0, 400.0, sDist));   // 远处的云影太碎，淡掉
    diffuseColor.rgb = uFoamCol * gFoam;
  }`,cg=`
  {
    vec2 p = vSeaW.xz;
    vec2 sl = (texture2D(uWaveTex, p * 0.055 + uTime * vec2(0.010, 0.006)).rg - 0.5) * 2.0 * 0.2
            + (texture2D(uWaveTex, p * 0.14 + uTime * vec2(-0.015, 0.011)).rg - 0.5) * 2.0 * 0.13
            + (texture2D(uWaveTex, p * 0.39 + uTime * vec2(0.022, -0.019)).rg - 0.5) * 2.0 * 0.07 * (1.0 - smoothstep(20.0, 70.0, sDist));
    sl *= mix(0.45, 1.0, smoothstep(0.1, 1.6, sDepth)) * (1.0 - 0.55 * smoothstep(60.0, 320.0, sDist));
    vec3 nW = normalize(vec3(vSeaN.x - sl.x, vSeaN.y, vSeaN.z - sl.y));
    normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
  }`,lg=`
  {
    vec3 V = normalize(cameraPosition - vSeaW);
    vec3 Nw = inverseTransformDirection(normal, viewMatrix);
    float F = 0.02 + 0.98 * pow(1.0 - clamp(dot(Nw, V), 0.0, 1.0), 5.0);
    vec3 rd = refract(-V, Nw, 0.75);
    float L = sDepth / max(-rd.y, 0.18);                                      // 视线在水里走的路程
    vec3 bedP = vSeaW + rd * min(L, 3.0);
    vec4 cp = projectionMatrix * viewMatrix * vec4(bedP, 1.0);
    vec2 ruv = clamp(cp.xy / cp.w * 0.5 + 0.5, vec2(0.002), vec2(0.998));
    vec3 bed = textureLod(uBed, ruv, 0.0).rgb;
    vec3 T = exp(-uSigma * L) * (1.0 - sOcean);
    vec3 scat = mix(uLagoon, uDeep, smoothstep(1.2, 9.0, sDepth)) * mix(1.0, gCloud, 0.8);   // 云影底下的海水也暗一些
    // 浪尖迎着太阳那面透出一点青绿（次表面散射）
    float sss = pow(clamp(dot(-V, uSunDir), 0.0, 1.0), 3.0) * clamp(vCrest * 5.0, 0.0, 1.0) * (1.0 - F) * gCloud;
    vec3 water = bed * T + scat * (1.0 - T) + uLagoon * sss * 0.6;
    totalDiffuse = totalDiffuse + (1.0 - F) * (1.0 - gFoam) * water;
  }`;function ug(){let e=new so({color:16777215,roughness:.05,metalness:0});return e.onBeforeCompile=e=>{Object.assign(e.uniforms,$h,Dh),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
`+ag).replace(`#include <beginnormal_vertex>`,`
  vec3 wp0 = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 gN;
  vec3 gD = gerstner(wp0.xz, smoothstep(0.15, 3.5, seaDepthV(wp0.xz)), gN, vCrest);
  vec3 objectNormal = gN;`).replace(`#include <begin_vertex>`,`vec3 transformed = position + gD;`).replace(`#include <fog_vertex>`,`#include <fog_vertex>
vSeaW = (modelMatrix * vec4(transformed, 1.0)).xyz; vSeaN = gN;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+og).replace(`#include <color_fragment>`,sg).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = mix(mix(0.035, 0.13, smoothstep(30.0, 300.0, sDist)), 0.75, gFoam);`).replace(`#include <normal_fragment_maps>`,cg).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
  reflectedLight.directDiffuse *= gCloud; reflectedLight.directSpecular *= gCloud;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += uBio * gGlow;`).replace(`#include <transmission_fragment>`,lg).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
  gl_FragColor.rgb = min(gl_FragColor.rgb, vec3(30000.0));`).replace(`#include <fog_fragment>`,Uh)},e.customProgramCacheKey=()=>`sea-water`,e}function dg(){let e=[];for(let t=.5;t<720;t+=Math.max(.5,t*.035))e.push(t);let t=[0,0,0],n=[];e.forEach(e=>{for(let n=0;n<192;n++){let r=n/192*Math.PI*2;t.push(Math.cos(r)*e,0,Math.sin(r)*e)}});for(let e=0;e<192;e++)n.push(0,1+(e+1)%192,1+e);for(let t=0;t<e.length-1;t++)for(let e=0;e<192;e++){let r=1+t*192+e,i=1+t*192+(e+1)%192,a=r+192,o=i+192;n.push(r,i,a,i,o,a)}let r=new Jr;return r.setAttribute(`position`,new Ir(t,3)),r.setAttribute(`normal`,new Ir(new Float32Array(t.length).map((e,t)=>+(t%3==1)),3)),r.setIndex(n),r.userData.keep=!0,r}var fg=null,pg=null;function mg(e,t){fg||=dg(),pg||=ug(),$h.uWaveTex.value=tg(),$h.uDepth.value=ng,$h.uBox.value.set(0,0,0,0);let n=t.water;$h.uDeep.value.setHex(n.deep),$h.uLagoon.value.setHex(n.lagoon),$h.uSigma.value.set(...n.sigma),$h.uFoamCol.value.setHex(n.foam),$h.uBio.value.setHex(n.bio).multiplyScalar(2.2);let r=new Li(fg,pg);return r.position.y=Eh,r.receiveShadow=!0,r.frustumCulled=!1,r.renderOrder=2,e.add(r),r}function hg(e){let[t,n,r,i]=e.layout.bounds;$h.uDepth.value=e.depth,$h.uBox.value.set(t,r,1/(n-t),1/(i-r)),$h.uSea.value=e.layout.sea}var gg=new URL(`sea-island-l-CU_1f8Iz.glb`,import.meta.url).href,_g=new URL(`sea-island-m-5857zBqQ.glb`,import.meta.url).href,vg=new URL(`sea-island-s-Dm-jP5HM.glb`,import.meta.url).href,yg=new URL(`depth-l-BFkst01F.png`,import.meta.url).href,bg=new URL(`depth-m-CylMy9eW.png`,import.meta.url).href,xg=new URL(`depth-s-pfb44PmI.png`,import.meta.url).href,Sg=new URL(`layout-l-CHhWeUG5.json`,import.meta.url).href,Cg=new URL(`layout-m-CfyWsk0L.json`,import.meta.url).href,wg=new URL(`layout-s-298fNyRJ.json`,import.meta.url).href,Tg=new URL(`splat-l-CitG1OYj.png`,import.meta.url).href,Eg=new URL(`splat-m-DkoGypFV.png`,import.meta.url).href,Dg=new URL(`splat-s-BBBNDQz_.png`,import.meta.url).href,Og=Object.assign({"../assets/models/sea-island-l.glb":gg,"../assets/models/sea-island-m.glb":_g,"../assets/models/sea-island-s.glb":vg,"../assets/sea/depth-l.png":yg,"../assets/sea/depth-m.png":bg,"../assets/sea/depth-s.png":xg,"../assets/sea/layout-l.json":Sg,"../assets/sea/layout-m.json":Cg,"../assets/sea/layout-s.json":wg,"../assets/sea/splat-l.png":Tg,"../assets/sea/splat-m.png":Eg,"../assets/sea/splat-s.png":Dg}),kg=e=>Og[`../assets/`+e],Ag={},jg={};function Mg(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`加载失败 `+e)),r.src=e})}function Ng(e,t){let r=new un(e);return r.colorSpace=``,r.wrapS=r.wrapT=n,r.generateMipmaps=t,r.minFilter=t?l:s,t&&(r.anisotropy=Math.min(8,Sm.capabilities.getMaxAnisotropy())),r.needsUpdate=!0,r}function Pg(e){return jg[e]||=(async()=>{let[t,n,r,i]=await Promise.all([em(kg(`models/sea-island-${e}.glb`)),Mg(kg(`sea/depth-${e}.png`)),Mg(kg(`sea/splat-${e}.png`)),fetch(kg(`sea/layout-${e}.json`)).then(e=>e.json())]),a=null,o=null;t.scene.updateMatrixWorld(!0),t.scene.traverse(e=>{e.isMesh&&(a=e.geometry,o=e.matrixWorld.clone())}),a.userData.keep=!0;let s=document.createElement(`canvas`);s.width=n.width,s.height=n.height;let c=s.getContext(`2d`,{willReadFrequently:!0});return c.drawImage(n,0,0),Ag[e]={geo:a,matrix:o,layout:i,depth:Ng(n,!1),splat:Ng(r,!0),px:c.getImageData(0,0,n.width,n.height).data,w:n.width,h:n.height},Ag[e]})().catch(t=>{throw delete jg[e],t})}var Fg=()=>Ag[Gd],Ig=e=>Ag[e];function Lg(e,t,n,r){let[i,a,o,s]=e.layout.bounds,c=Math.min(e.w-1,Math.max(0,(t-i)/(a-i)*e.w-.5)),l=Math.min(e.h-1,Math.max(0,(s-n)/(s-o)*e.h-.5)),u=Math.floor(c),d=Math.floor(l),f=Math.min(e.w-1,u+1),p=Math.min(e.h-1,d+1),m=c-u,h=l-d,g=(t,n)=>e.px[(n*e.w+t)*4+r]/255;return(g(u,d)*(1-m)+g(f,d)*m)*(1-h)+(g(u,p)*(1-m)+g(f,p)*m)*h}function Rg(e,t){let n=Fg();if(!n)return Eh-.65;let r=Lg(n,e,t,1);if(r>.002)return n.layout.sea+r*4;let i=Lg(n,e,t,0);return n.layout.sea-i*i*16}var zg={};function G(e,t){let n=e+`|`+JSON.stringify(t||{});return zg[n]||(zg[n]=new oo(Object.assign({color:e,roughness:.75,metalness:0},t||{}))),zg[n]}function K(e,t,n,r,i){let a=new Li(e,t);return a.position.set(n||0,r||0,i||0),a.castShadow=!0,a.receiveShadow=!0,a}var q=(e,t,n)=>new Ba(e,t,n),Bg=(e,t,n,r)=>new Ha(e,t,n,r||8),Vg=(e,t)=>new Ga(e,t??1),Hg=e=>{let t=new Ia(e);return t.colorSpace=Ze,t},Ug=new ds(-1,1,1,-1,0,1),Wg=new class extends Jr{constructor(){super(),this.setAttribute(`position`,new Ir([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Ir([0,2,0,0,2,0],2))}},Gg=class{constructor(e){this._mesh=new Li(Wg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ug)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Kg={day:{threshold:1.5,knee:.5,strength:.25,scatter:.6,tint:[1,1,1],saturation:1.1,contrast:1.04,vignette:.2},dusk:{threshold:1.25,knee:.45,strength:.42,scatter:.68,tint:[1.04,.99,.94],saturation:1.08,contrast:1.05,vignette:.32},night:{threshold:1,knee:.4,strength:.9,scatter:.72,tint:[1,1,1],saturation:1.1,contrast:1.06,vignette:.4}},qg=6,Jg=`varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Yg=(e,t)=>new io({uniforms:e,vertexShader:Jg,fragmentShader:t,depthTest:!1,depthWrite:!1,toneMapped:!1}),Xg=Yg({tSrc:{value:null},texel:{value:new j},threshold:{value:1},knee:{value:.5},exposure:{value:1}},`
  uniform sampler2D tSrc; uniform vec2 texel; uniform float threshold, knee, exposure; varying vec2 vUv;
  // 万一缓冲里有无穷大（超出半精度浮点的亮点）、NaN 或负数，在这里挡掉：不然一个坏像素会被泛光晕成一大片黑块
  vec3 tap(vec2 o) {
    vec4 s = texture2D(tSrc, vUv + o * texel);
    vec3 c = clamp(s.rgb, 0.0, 6e4) * clamp(s.a, 0.0, 1.0);
    return mix(c, vec3(0.0), vec3(isnan(c)));
  }
  void main() {
    // 4 个双线性采样覆盖 4×4 像素；按亮度加权平均，压住单个特别亮的像素，避免泛光闪烁
    vec3 a = tap(vec2(-1.0, -1.0)), b = tap(vec2(1.0, -1.0)), c = tap(vec2(-1.0, 1.0)), d = tap(vec2(1.0, 1.0));
    vec4 w = 1.0 / (1.0 + vec4(max(a.r, max(a.g, a.b)), max(b.r, max(b.g, b.b)), max(c.r, max(c.g, c.b)), max(d.r, max(d.g, d.b))) * exposure);
    vec3 col = (a * w.x + b * w.y + c * w.z + d * w.w) / (w.x + w.y + w.z + w.w);
    float br = max(col.r, max(col.g, col.b)) * exposure;
    float soft = clamp(br - threshold + knee, 0.0, 2.0 * knee);
    soft = soft * soft / (4.0 * knee + 1e-4);
    gl_FragColor = vec4(col * max(soft, br - threshold) / max(br, 1e-4), 1.0);
  }`),Zg=Yg({tSrc:{value:null},texel:{value:new j}},`
  uniform sampler2D tSrc; uniform vec2 texel; varying vec2 vUv;
  vec3 T(float x, float y) { return texture2D(tSrc, vUv + vec2(x, y) * texel).rgb; }
  void main() {
    vec3 inner = T(-1.0, -1.0) + T(1.0, -1.0) + T(-1.0, 1.0) + T(1.0, 1.0);
    vec3 corner = T(-2.0, -2.0) + T(2.0, -2.0) + T(-2.0, 2.0) + T(2.0, 2.0);
    vec3 edge = T(0.0, -2.0) + T(-2.0, 0.0) + T(2.0, 0.0) + T(0.0, 2.0);
    gl_FragColor = vec4(inner * 0.125 + corner * 0.03125 + edge * 0.0625 + T(0.0, 0.0) * 0.125, 1.0);
  }`),Qg=Yg({tLow:{value:null},tHigh:{value:null},texel:{value:new j},scatter:{value:.7}},`
  uniform sampler2D tLow, tHigh; uniform vec2 texel; uniform float scatter; varying vec2 vUv;
  vec3 T(float x, float y) { return texture2D(tLow, vUv + vec2(x, y) * texel).rgb; }
  void main() {
    vec3 low = (T(-1.0, -1.0) + T(1.0, -1.0) + T(-1.0, 1.0) + T(1.0, 1.0)
      + 2.0 * (T(0.0, -1.0) + T(-1.0, 0.0) + T(1.0, 0.0) + T(0.0, 1.0)) + 4.0 * T(0.0, 0.0)) / 16.0;
    gl_FragColor = vec4(mix(texture2D(tHigh, vUv).rgb, low, scatter), 1.0);
  }`),$g=Yg({tScene:{value:null},tBloom:{value:null},exposure:{value:1},strength:{value:0},tint:{value:new M(1,1,1)},saturation:{value:1},contrast:{value:1},vignette:{value:0},aspect:{value:1},sharpen:{value:0},texel:{value:new j}},`
  uniform sampler2D tScene, tBloom; uniform vec3 tint; uniform vec2 texel; uniform float exposure, strength, saturation, contrast, vignette, aspect, sharpen; varying vec2 vUv;
  // 和 three.js 的 ACESFilmicToneMapping 完全相同
  vec3 RRTAndODTFit(vec3 v) { return (v * (v + 0.0245786) - 0.000090537) / (v * (0.983729 * v + 0.4329510) + 0.238081); }
  vec3 aces(vec3 c) {
    const mat3 IN = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));
    const mat3 OUT = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));
    return clamp(OUT * RRTAndODTFit(IN * (c * exposure / 0.6)), 0.0, 1.0);
  }
  vec3 srgb(vec3 c) { return mix(pow(c, vec3(0.41666)) * 1.055 - 0.055, c * 12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }
  vec3 tone(vec3 x) { return srgb(aces(clamp(x, 0.0, 6e4))); }
  void main() {
    vec4 s = texture2D(tScene, vUv);
    vec3 b = clamp(texture2D(tBloom, vUv).rgb, 0.0, 6e4);
    vec3 c = srgb(aces(clamp(s.rgb, 0.0, 6e4) + mix(b, vec3(0.0), vec3(isnan(b))) * strength)) * tint;
    // 锐化（只在画面分辨率低于屏幕时打开）：和上下左右四个像素的平均比，按差值加回去；
    // 周围对比越强加得越少（和 AMD 的 CAS 一个思路），免得边缘出白边
    if (sharpen > 0.0) {
      vec3 n = tone(texture2D(tScene, vUv + vec2(0.0, texel.y)).rgb), so = tone(texture2D(tScene, vUv - vec2(0.0, texel.y)).rgb);
      vec3 e = tone(texture2D(tScene, vUv + vec2(texel.x, 0.0)).rgb), w = tone(texture2D(tScene, vUv - vec2(texel.x, 0.0)).rgb);
      vec3 ctr = tone(s.rgb), mn = min(ctr, min(min(n, so), min(e, w))), mx = max(ctr, max(max(n, so), max(e, w)));
      float k = sharpen * clamp(1.0 - (mx.g - mn.g) * 2.0, 0.0, 1.0);
      vec3 dt = (ctr - (n + so + e + w) * 0.25) * k;
      c += mix(dt, vec3(0.0), vec3(isnan(dt))) * tint;   // 邻居里有坏像素（NaN）也不往外扩
    }
    c = mix(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), c, saturation);
    c = (c - 0.5) * contrast + 0.5;
    // 暗角：到画面角落的距离归一化成 0～1，主要压暗四角
    vec2 d = (vUv - 0.5) * vec2(aspect, 1.0);
    c *= 1.0 - vignette * smoothstep(0.4, 1.1, length(d) / length(vec2(aspect, 1.0) * 0.5));
    // 界面精灵按原色输出（alpha 越小，被它们盖住得越多）
    c = mix(c, srgb(clamp(s.rgb, 0.0, 1.0)), clamp(1.0 - s.a, 0.0, 1.0));
    // 轻微抖动，避免夜空渐变出现色带
    c += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 255.0;
    gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
  }`),e_=new Gg,t_=new Zi(new Uint8Array([0,0,0,255]),1,1);t_.needsUpdate=!0;var n_=null,r_=[],i_=[],a_=Kg.day,o_=!1,s_=!1;function c_(){let e=Sm.getDrawingBufferSize(new j),t=e.x*e.y>37e5?2:4;n_=new pn(e.x,e.y,{type:_,samples:t});for(let e=0;e<qg;e++)r_.push(new pn(1,1,{type:_,depthBuffer:!1})),e<5&&i_.push(new pn(1,1,{type:_,depthBuffer:!1}));l_(e)}function l_(e){n_.setSize(e.x,e.y);for(let t=0;t<qg;t++){let n=Math.max(1,Math.round(e.x/2**(t+1))),r=Math.max(1,Math.round(e.y/2**(t+1)));r_[t].setSize(n,r),i_[t]&&i_[t].setSize(n,r)}$g.uniforms.aspect.value=e.x/e.y}function u_(){return s_=Sm.extensions.has(`EXT_color_buffer_float`)||Sm.extensions.has(`EXT_color_buffer_half_float`),s_&&c_(),o_=s_,s_}function d_(e){a_=Kg[e]||Kg.day}function f_(){n_&&l_(Sm.getDrawingBufferSize(new j))}function p_(e,t){e_.material=e,Sm.setRenderTarget(t),e_.render(Sm)}function m_(){let e=Xg.uniforms;e.tSrc.value=n_.texture,e.texel.value.set(1/n_.width,1/n_.height),e.threshold.value=a_.threshold,e.knee.value=a_.knee,e.exposure.value=Sm.toneMappingExposure,p_(Xg,r_[0]);for(let e=1;e<qg;e++)Zg.uniforms.tSrc.value=r_[e-1].texture,Zg.uniforms.texel.value.set(1/r_[e-1].width,1/r_[e-1].height),p_(Zg,r_[e]);Qg.uniforms.scatter.value=a_.scatter;for(let e=4;e>=0;e--){let t=e===4?r_[5]:i_[e+1];Qg.uniforms.tLow.value=t.texture,Qg.uniforms.texel.value.set(1/t.width,1/t.height),Qg.uniforms.tHigh.value=r_[e].texture,p_(Qg,i_[e])}return i_[0].texture}var h_=[];function g_(e){h_.push(e)}function __(e){for(let e of h_)e();if(!o_){Sm.render(Tm,Em);return}Sm.setRenderTarget(n_),Sm.render(Tm,Em);let t=Sm.autoClear;Sm.autoClear=!1;let n=$g.uniforms;n.tBloom.value=a_.strength>0?m_():t_,n.tScene.value=n_.texture,n.exposure.value=Sm.toneMappingExposure,n.strength.value=a_.strength,n.tint.value.fromArray(a_.tint),n.saturation.value=a_.saturation,n.contrast.value=a_.contrast,n.vignette.value=a_.vignette;let r=(window.devicePixelRatio||1)/Sm.getPixelRatio();n.sharpen.value=r>1.01?Math.min(.6,(r-1)*.8+.15):0,n.texel.value.set(1/n_.width,1/n_.height),p_($g,null),Sm.autoClear=t}var v_=[];function y_(e){v_.push(e)}function b_(e){o_=e&&s_,C_.forEach(w_),v_.forEach(e=>e(o_))}var x_=()=>o_,S_=()=>s_,C_=new Set;function w_(e){o_?Object.assign(e,{blending:5,blendEquation:100,blendEquationAlpha:100,blendSrc:204,blendDst:205,blendSrcAlpha:200,blendDstAlpha:205}):e.blending=1}function T_(e){let t=new ii({map:e,transparent:!0,depthWrite:!1,toneMapped:!1});return w_(t),C_.add(t),t.addEventListener(`dispose`,()=>C_.delete(t)),t}var J={occ:new Set,roadLot:new Set,cells:[],keep:[],flats:[],riverZ:null,riverW:6},E_=e=>(e=vf(e,0,1),e*e*(3-2*e));function D_(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=(e,t)=>xf(e,t,0,7.3),l=c(n,r)+(c(n+1,r)-c(n,r))*o;return l+(c(n,r+1)+(c(n+1,r+1)-c(n,r+1))*o-l)*s}var O_=(e,t)=>D_(e,t)*.55+D_(e*2.07+5.2,t*2.07+1.3)*.3+D_(e*4.3+9.1,t*4.3+3.7)*.15;function k_(e,t){if(I.floating)return-.12;if(I.sea)return Rg(e,t);let n=I.env,r=Math.max(0,Math.abs(e-L.cx)-(L.w/2+5)),i=Math.max(0,Math.abs(t-L.cz)-(L.d/2+5)),a=E_(Math.hypot(r,i)/22);t>L.cz+L.d/2&&(a*=.45);let o=Wd===`egypt`?.5+.5*Math.sin(e*.08+t*.03+O_(e*.03,t*.03)*7)*(.4+O_(e*.05+3,t*.05)):O_(e*.03,t*.03),s=-.12+a*o*n.amp;for(let n of J.flats){let r=Math.hypot(e-n.x,t-n.z);if(r<n.r+3){let e=E_((r-n.r)/3);s=-.12*(1-e)+s*e}}if(J.riverZ!==null){let e=Math.abs(t-J.riverZ),n=J.riverW/2;if(e<n+2){let t=E_((e-n+.7)/2.7);s=Math.min(s,-.8*(1-t)+s*t)}}return s}var A_=(e,t,n)=>(n||=0,e>L.cx-L.w/2-3-n&&e<L.cx+L.w/2+3+n&&t>L.cz-L.d/2-3-n&&t<L.cz+L.d/2+3+n),j_=(e,t)=>df(Math.round(e/_d+lf.x),Math.round(t/_d+lf.z));function M_(e,t,n){if(n||=0,J.occ.has(j_(e,t))||J.riverZ!==null&&Math.abs(t-J.riverZ)<J.riverW/2+1.2+n)return!1;for(let r of J.keep)if(Math.hypot(e-r.x,t-r.z)<r.r+n)return!1;return!0}function N_(e,t,n,r,i,a){let o=[],s=0;for(;o.length<e&&s<e*15;){s++;let e=B(t,n),c=B(r,i);a(e,c)&&o.push([e,c])}return o}function P_(e){let t=G(3881540);for(let n=0;n<e;n++){let e=new Wn;W.add(e);let r=K(new Ja(.12,6,4),t);r.scale.set(.8,.7,1.6),r.castShadow=!1,e.add(r);let i=[-1,1].map(n=>{let r=new Wn;e.add(r);let i=K(q(.6,.03,.22),t,n*.3,0,0);return i.castShadow=!1,r.add(i),r}),a=L.radius*B(.35,.7),o=B(6.5,9),s=B(.08,.12),c=n*.35,l=B(7,10);Sh.push(t=>{let r=t*s+c;e.position.set(L.cx+Math.cos(r)*a,o+Math.sin(t*.6+n)*.6,L.cz+Math.sin(r)*a*.75),e.rotation.y=Math.atan2(-Math.sin(r),.75*Math.cos(r));let u=Math.sin(t*l+n)*.6;i[0].rotation.z=u,i[1].rotation.z=-u})}}var F_=null;function I_(){if(F_)return F_;let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`),n=t.createRadialGradient(16,16,0,16,16,16);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.5,`rgba(255,255,255,0.85)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,32,32),F_=Hg(e)}var L_=[16734830,5217791,16756782,3982473];function R_(e){for(let t=0;t<e;t++){let e=am(`balloon`);e.obj.traverse(e=>{e.isMesh&&e.material.name===`balloon_a`&&(e.material=e.material.clone(),e.material.color.setHex(L_[t%L_.length]))});let n=e.mixer.clipAction(om(`Balloon_Float`));n.time=t*1.3,n.play();let r=L.radius*(.7+.18*t),i=8.5+1.5*t,a=(.03+.01*t)*(t%2?-1:1),o=.8+t*2.3;e.obj.scale.setScalar(1.15-t*.12),W.add(e.obj),Sh.push((t,n)=>{let s=o+t*a;e.obj.position.set(L.cx+Math.cos(s)*r,i,L.cz+Math.sin(s)*r*.75),e.mixer.update(n)})}}function z_(e){let t=e.n,n=L.w/2+8,r=L.d/2+8,i=new Float32Array(t*3),a=new Float32Array(t);for(let e=0;e<t;e++)i[e*3]=L.cx+B(-n,n),i[e*3+1]=B(0,14),i[e*3+2]=L.cz+B(-r,r),a[e]=B(0,6.28);let o=new Jr;o.setAttribute(`position`,new Nr(i,3));let s=new Na(o,new Oa({color:e.color,size:e.size,map:I_(),transparent:!0,depthWrite:!1,opacity:.9}));s.frustumCulled=!1,W.add(s),Sh.push((n,r)=>{for(let o=0;o<t;o++){let t=i[o*3+1]-e.fall*r;t<-.1&&(t=14),i[o*3+1]=t,i[o*3]+=Math.sin(n*.9+a[o])*e.sway*r,i[o*3+2]+=Math.cos(n*.7+a[o])*e.sway*.6*r}o.attributes.position.needsUpdate=!0})}var B_=()=>G(16769696,{emissive:16757575,emissiveIntensity:.9*Ud().glow*.6*Ud().lamp}),V_=.5,H_=new Set,U_=e=>e.userData.opacity*(x_()?V_:1);y_(()=>H_.forEach(e=>{e.material.opacity=U_(e)}));function W_(e,t,n,r,i,a){if(Hd===`day`)return null;let o=new vi(new ii({map:I_(),color:i,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}));return o.userData.opacity=Hd===`night`?.8:.45,o.material.opacity=U_(o),H_.add(o),o.material.addEventListener(`dispose`,()=>H_.delete(o)),o.position.set(t,n,r),o.scale.set(a,a,1),e.add(o),o}var G_=null;function K_(){if(G_)return G_;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return[[0,255],[.2,190],[.45,95],[.7,30],[1,0]].forEach(([e,t])=>n.addColorStop(e,`rgb(${t},${t},${t})`)),t.fillStyle=n,t.fillRect(0,0,64,64),G_=new Ia(e)}var q_=new Va(1,28).rotateX(-Math.PI/2),J_={};function Y_(e){let t=e.userData.boost,n=e=>(1+e)**(1/2.2)-1;x_()?e.color.copy(t):e.color.setRGB(n(t.r),n(t.g),n(t.b),Ze)}y_(()=>Object.values(J_).forEach(Y_));function X_(e,t,n,r,i,a){if(Hd===`day`)return null;let o=i+`|`+Hd,s=J_[o];s||(s=J_[o]=new Ti({map:K_(),transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1,blending:5,blendSrc:208,blendDst:201,blendSrcAlpha:200,blendDstAlpha:201,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s.userData.boost=new N(i).multiplyScalar(Hd===`night`?1.8:.8),Y_(s));let c=new Li(q_,s);return c.position.set(t,n,r),c.scale.setScalar(a),e.add(c),c}var Z_=null;function Q_(){if(Z_)return Z_;let e=document.createElement(`canvas`);e.width=e.height=128;let n=e.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,128,128);for(let e=0;e<2;e++)for(let t=0;t<2;t++)for(let r=0;r<2;r++)for(let i=0;i<2;i++)Math.random()<.35||(n.fillStyle=_f([`#ffd27a`,`#ffc35a`,`#ffe7b0`]),n.fillRect(t*64+8+i*32,e*64+6+r*32,16,20));return Z_=Hg(e),Z_.wrapS=Z_.wrapT=t,Z_}function $_(){let e=1400,t=new Float32Array(e*3);for(let n=0;n<e;n++){let e=B(0,Math.PI*2),r=Math.asin(B(.02,1));t[n*3]=L.cx+Math.cos(e)*Math.cos(r)*290,t[n*3+1]=Math.sin(r)*290,t[n*3+2]=L.cz+Math.sin(e)*Math.cos(r)*290}let n=new Jr;n.setAttribute(`position`,new Nr(t,3));let r=new Na(n,new Oa({color:16777215,size:1.8,sizeAttenuation:!1,transparent:!0,opacity:.9,depthWrite:!1,fog:!1,toneMapped:!1}));r.frustumCulled=!1,W.add(r);let i=new vi(new ii({map:I_(),color:16052735,depthWrite:!1,fog:!1,toneMapped:!1}));i.scale.set(22,22,1),i.position.set(L.cx-50,26,L.backZ-230),W.add(i);let a=new vi(new ii({map:I_(),color:9414399,transparent:!0,opacity:.35,blending:2,depthWrite:!1,fog:!1,toneMapped:!1}));a.scale.set(70,70,1),a.position.copy(i.position),W.add(a)}function ev(e){let t=L.w/2+6,n=L.d/2+6,r=new Float32Array(e*3),i=[];for(let r=0;r<e;r++){let e=L.cx+B(-t,t),r=L.cz+B(-n,n);i.push([e,B(.3,2.2),r,B(0,6.28),B(.3,.8)])}let a=new Jr;a.setAttribute(`position`,new Nr(r,3));let o=new Oa({color:14221178,size:.32,map:I_(),transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),s=new Na(a,o);s.frustumCulled=!1,W.add(s),Sh.push(e=>{i.forEach(([t,n,i,a,o],s)=>{r[s*3]=t+Math.sin(e*o+a)*1.2,r[s*3+1]=n+Math.sin(e*o*1.7+a)*.4,r[s*3+2]=i+Math.cos(e*o*.8+a)*1.2}),a.attributes.position.needsUpdate=!0,o.opacity=.55+Math.sin(e*2.2)*.35})}function tv(e){for(let t=0;t<e;t++){let e=new Wn;W.add(e);let t=new oo({color:_f([16765503,16748472,9425919,16777215,16754253]),side:2,roughness:.6}),n=[-1,1].map(n=>{let r=new Wn;e.add(r);let i=new Li(new Ka(.22,.16),t);return i.position.x=n*.11,i.rotation.x=-Math.PI/2,r.add(i),r}),[r,i]=N_(1,L.cx-L.w/2-8,L.cx+L.w/2+8,L.cz-L.d/2-6,L.cz+L.d/2+4,(e,t)=>I.floating||M_(e,t))[0]||[L.cx,L.cz],a=k_(r,i),o=B(.6,1.6),s=B(.5,.9),c=B(0,6.28),l=B(14,20);Sh.push(t=>{let u=t*s+c;e.position.set(r+Math.cos(u)*o+Math.sin(u*2.3)*.4,a+.7+Math.sin(t*2+c)*.25,i+Math.sin(u)*o),e.rotation.y=-u;let d=Math.sin(t*l+c);n[0].rotation.z=d,n[1].rotation.z=-d})}}var nv=new URL(`sea-props-DM5B5lZR.glb`,import.meta.url).href,rv={},iv=null;function av(e,t){let n=new Jr;for(let t of[`position`,`normal`,`color`]){let r=e.attributes[t];if(!r)continue;let i=new Nr(new Float32Array(r.count*r.itemSize),r.itemSize);for(let e=0;e<r.count;e++)for(let t=0;t<r.itemSize;t++)i.setComponent(e,t,r.getComponent(e,t));n.setAttribute(t,i)}return n.setIndex(e.index?Array.from(e.index.array):null),n.applyMatrix4(t),n.computeBoundingSphere(),n.userData.keep=!0,n}var ov=()=>!!rv.palm_a,sv=e=>rv[e];function cv(){return iv||=em(nv).then(e=>{e.scene.updateMatrixWorld(!0),e.scene.traverse(e=>{e.isMesh&&(rv[e.name]=av(e.geometry,e.matrixWorld))})}).catch(e=>{throw iv=null,e})}var lv=`
#ifdef USE_INSTANCING
  vec3 iPos = instanceMatrix[3].xyz;
  vec3 wDir = normalize(transpose(mat3(instanceMatrix)) * vec3(0.8, 0.0, 0.6));
#else
  vec3 iPos = vec3(0.0);
  vec3 wDir = vec3(0.8, 0.0, 0.6);
#endif
  float wk = color.a * color.a;
  float ph = dot(iPos.xz, vec2(0.37, 0.61));
  float sway = sin(uTime * 1.25 + ph) * 0.65 + sin(uTime * 2.3 + ph * 1.7) * 0.25;
  float flutter = sin(uTime * 6.5 + ph * 3.0 + position.x * 3.0 + position.z * 2.0 + position.y * 1.5);
  transformed += wDir * sway * wk * uSway + vec3(flutter * 0.4, flutter * 0.2, -flutter * 0.3) * wk * uFlutter;`;function uv(e,t,n=!0){let r=new oo({vertexColors:!0,roughness:.78,side:n?2:0});return r.onBeforeCompile=n=>{Object.assign(n.uniforms,{uTime:Dh.uTime,uCloudShadow:Dh.uCloudShadow,uBoardBox:Dh.uBoardBox,uCloudTex:Dh.uCloudTex,uSway:{value:e},uFlutter:{value:t}}),n.vertexShader=n.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime, uSway, uFlutter;
varying vec3 vSeaW;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
`+lv).replace(`#include <fog_vertex>`,`#include <fog_vertex>
#ifdef USE_INSTANCING
vSeaW = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
#else
vSeaW = (modelMatrix * vec4(transformed, 1.0)).xyz;
#endif`),n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>\nuniform float uTime;\nvarying vec3 vSeaW;\n${Ah}`).replace(`#include <color_fragment>`,`diffuseColor.rgb *= vColor.rgb;`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
`+qh)},r.customProgramCacheKey=()=>`sea-plant-`+e+`-`+t,r}var dv=`
#ifdef USE_INSTANCING
  vec3 iPos = instanceMatrix[3].xyz;
#else
  vec3 iPos = vec3(0.0);
#endif
  float cph = dot(iPos.xz, vec2(0.37, 0.61));
  transformed.xz += vec2(sin(uTime * 0.8 + cph), cos(uTime * 0.6 + cph * 1.3)) * 0.05 * color.a
                  + vec2(sin(uTime * 2.2 + cph * 2.0 + position.y * 6.0), 0.0) * 0.012 * color.a;`,fv=()=>Yh(new oo({vertexColors:!0,roughness:.8,side:2}),{key:`reef`,patch:e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
`+dv)}}),pv=null,mv=()=>pv||={palm:uv(.12,.035),tree:uv(.06,.02),bush:uv(.05,.03),grass:uv(.08,.03),rock:Yh(new oo({vertexColors:!0,roughness:.92})),small:Yh(new oo({vertexColors:!0,roughness:.6})),coral:Yh(new oo({vertexColors:!0,roughness:.85})),reef:fv()},hv=e=>(e.userData.seabed=2,e),gv={palm_a:[`palm`,!0],palm_b:[`palm`,!0],palm_c:[`palm`,!0],palm_far:[`palm`,!0],tree_a:[`tree`,!0],tree_b:[`tree`,!0],tree_c:[`tree`,!0],tree_far:[`tree`,!0],banana:[`bush`,!0],bush_a:[`bush`,!0],bush_b:[`bush`,!0],flower:[`bush`,!1],fern:[`bush`,!1],grass:[`grass`,!1],rock_a:[`rock`,!0],rock_b:[`rock`,!0],rock_c:[`rock`,!0],shell:[`small`,!1],starfish:[`small`,!1],coral_brain:[`coral`,!1],coral_branch_a:[`coral`,!1],coral_branch_b:[`coral`,!1],coral_fan:[`reef`,!1],seagrass:[`reef`,!1]},_v=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},vv=class{constructor(){this.items={}}add(e,t,n,r,i,a){(this.items[e]||=[]).push([t,n,r,i,a])}build(e){let t=new gn,n=new Gt,r=new M,i=new M,a=new M(0,1,0),o=L.radius+9;for(let[s,c]of Object.entries(this.items)){if(!rv[s])continue;let[l,u]=gv[s],d=u?c.filter(([e,,t])=>Math.max(Math.abs(e-L.cx),Math.abs(t-L.cz))<o):[],f=u?c.filter(e=>!d.includes(e)):c;[[d,!0],[f,!1]].forEach(([o,c])=>{if(!o.length)return;let u=new la(rv[s],mv()[l],o.length);u.userData.kind=s,(l===`coral`||l===`reef`)&&hv(u),o.forEach(([e,o,s,c,l],d)=>{r.set(e,o,s),n.setFromAxisAngle(a,c),Array.isArray(l)?i.set(...l):i.setScalar(l),t.compose(r,n,i),u.setMatrixAt(d,t)}),u.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),u.castShadow=c,u.receiveShadow=!0,e.add(u)})}}},yv=[`palm_a`,`palm_b`,`palm_a`,`palm_c`],bv=(e,t)=>Math.max(Math.abs(e-L.cx)-L.w/2,Math.abs(t-L.cz)-L.d/2),xv=(e,t,n)=>bv(e,t)>20?n%2?0:1.2:1;function Sv(e,t){let n=t.items;(n.palm||[]).forEach(([t,n,r,i,a],o)=>e.add(bv(t,r)>14?`palm_far`:yv[o%yv.length],t,n-.05,r,i,a*.95)),(n.tree||[]).forEach(([t,n,r,i,a],o)=>{bv(t,r)>24?e.add(`tree_far`,t,n-.1,r,i,o%3==1?[a*1.2,a*1.4,a*1.2]:a*(1+o%3*.1)):e.add([`tree_a`,`tree_c`,`tree_b`][o%3],t,n-.1,r,i,a*1.1)}),(n.bush||[]).forEach(([t,n,r,i,a],o)=>{let s=xv(t,r,o>>2);s&&e.add([`bush_a`,`fern`,`bush_b`,`banana`][o%4],t,n-.03,r,i,a*s*(o%4==3?1:1.3))}),(n.flower||[]).forEach(([t,n,r,i,a],o)=>{let s=xv(t,r,o);s&&e.add(`flower`,t,n-.02,r,i,a*s*1.2)}),(n.grass||[]).forEach(([t,n,r,i,a],o)=>{let s=xv(t,r,o);s&&e.add(`grass`,t,n-.02,r,i,a*s*1.4)}),(n.rock||[]).forEach(([t,n,r,i,a],o)=>e.add([`rock_a`,`rock_b`,`rock_c`][o%3],t,n-.12*a,r,i,a*1.1)),(n.shell||[]).forEach(([t,n,r,i,a],o)=>e.add(o%3?`shell`:`starfish`,t,n+.005,r,i,a*1.6))}function Cv(e){let t=-.12,{cells:n,occ:r}=gf();n.forEach(n=>{if(!n.deco)return;let i=uf(n.gx,n.gz),a=i.x,o=i.z,s=_v(n.gx,n.gz),c=_v(n.gz,n.gx+7),l=r.has(n.gx+`,`+(n.gz-1));n.deco===`trees`?(e.add(s<.5?`palm_c`:`palm_a`,a-.4,t,o-.35,s*6.28,.72+c*.18),l||e.add(`palm_b`,a+.45,t,o+.3,c*6.28,.62+s*.15),e.add(c<.5?`bush_b`:`flower`,a+.5,t,o-.5,s*3.1,1.1),e.add(`fern`,a-.55,t,o+.5,c*5,1)):n.deco===`small`&&(l?e.add(s<.5?`flower`:`bush_a`,a,t,o,s*6.28,1.15):e.add(`palm_c`,a+(s-.5)*.5,t,o+(c-.5)*.5,s*6.28,.7+c*.15));for(let r=0;r<3;r++)e.add(`grass`,a+(_v(n.gx+r,n.gz)-.5)*1.6,t,o+(_v(n.gz-r,n.gx)-.5)*1.6,r*2.1,1.2)})}function wv(e,t){let n=-.12,r=Math.min(1.25,Math.max(.85,t/4));(t>5?[[-.55,-.35],[.6,-.4],[-.2,.5],[.45,.45],[0,-.05]]:[[-.8,-.1],[.85,.1],[-.45,.25]]).forEach(([i,a],o)=>e.add(yv[o%yv.length],i*t,n,a*Math.min(t,2.2),o*2.4,.78*r+o%2*.08));for(let r=0;r<10;r++){let i=r*2.4,a=t*(.3+.6*_v(r,3));e.add(r%2?`grass`:`bush_a`,Math.cos(i)*a,n,Math.sin(i)*Math.min(a,1.8),i,1.1)}}var Tv=[`coral_brain`,`coral_branch_a`,`coral_fan`,`coral_branch_b`,`coral_brain`,`coral_branch_a`,`coral_fan`],Ev={coral_brain:.14,coral_branch_a:.3,coral_branch_b:.3,coral_fan:.42,seagrass:.4,rock_b:.25};function Dv(e){let t=L.w/2,n=L.d/2,r=L.cx,i=L.cz,a=(e,a)=>Math.max(Math.abs(e-r)-t,Math.abs(a-i)-n),o=(t,n,r,i,o,s=.02)=>{let c=Rg(n,r),l=Eh-c;if(l<.5||a(n,r)<1.1)return;let u=Math.min(o,(l-.36)/Ev[t]);u>.35&&e.add(t,n,c-s*u,r,i,u)},s=[],c=(e,o,c,l,u)=>{let d=r+(_v(e,o)*2-1)*(t+l),f=i+(_v(o+1,e)*2-1)*(n+l),p=a(d,f);return p<c||p>l||-.55-Rg(d,f)<.55||s.some(([e,t])=>Math.hypot(e-d,t-f)<u)?null:(s.push([d,f]),[d,f])},l=Math.round((t+n)*30),u=Math.round((t+n)*.55),d=Math.round((t+n)*.5);for(let e=0,t=0;e<l&&t<u;e++){let n=c(e,61,1.8,4.2,2.6);if(!n)continue;t++;for(let t=0;t<2;t++)o(`rock_b`,n[0]+(_v(e,t+70)-.5)*.7,n[1]+(_v(t+71,e)-.5)*.7,_v(e,t)*6,.24+.12*_v(t,e),.2);let r=7+Math.floor(_v(e,72)*5);for(let t=0;t<r;t++){let i=t*2.4+_v(e,73)*6.28,a=.15+.8*Math.sqrt((t+.5)/r);o(Tv[(e+t*3)%Tv.length],n[0]+Math.cos(i)*a,n[1]+Math.sin(i)*a,_v(t,e+74)*40,.85+.55*_v(e+75,t))}}for(let e=0,t=0;e<l&&t<d;e++){let n=c(e,81,1.6,9.5,2.2);if(!n)continue;t++;let r=12+Math.floor(_v(e,82)*7);for(let t=0;t<r;t++){let i=t*2.4+_v(e,83)*6.28,a=1.15*Math.sqrt((t+.5)/r);o(`seagrass`,n[0]+Math.cos(i)*a,n[1]+Math.sin(i)*a,_v(t,e+84)*40,(1.15+.5*_v(e+85,t))*(1-.3*a),.01)}}}var Ov=null,kv=null,Av=null,jv=()=>Ov||=Yh(new oo({vertexColors:!0,roughness:.72}));function Mv(){if(kv)return kv;let e=kv=new oo({vertexColors:!0,roughness:.75});return e.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`diffuseColor.rgb *= vColor.rgb;`)},e.customProgramCacheKey=()=>`sea-air`,e}var Nv=()=>Av||=new Ti({colorWrite:!1,side:2});function Pv(e,t){let n=Rv(e,t,0,0,0,0,Nv());n&&(n.renderOrder=1)}function Fv(e,t,n,r,i){let a=Rv(e,`gull_sit`,t,n,r,i,Mv());a&&(a.castShadow=!0)}function Iv(e=1.6){let t=Hd===`day`?1:e*Ud().lamp;return new Ti({vertexColors:!0,color:new N(t,t,t)})}var Lv=new Set([`dock`,`boat`,`canoe`,`wreck`]);function Rv(e,t,n,r,i,a,o){if(!rv[t])return null;let s=new Li(rv[t],o||jv());return s.position.set(n,r,i),s.rotation.y=a,s.userData.kind=t,s.userData.seabed=+!!Lv.has(t),s.castShadow=!o,s.receiveShadow=!0,e.add(s),s}function zv(e,t){let n=new Ua(1.5,18,32,1,!0);n.translate(0,-9,0),n.rotateZ(Math.PI/2);let r=new io({uniforms:{uK:{value:Hd===`night`?.12:.05}},transparent:!0,depthWrite:!1,side:2,blending:2,toneMapped:!1,fog:!1,vertexShader:`varying float vT, vF;
      void main() {
        vT = clamp(position.x / ${18 .toFixed(1)}, 0.0, 1.0);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vF = abs(dot(normalize(normalMatrix * normal), normalize(-mv.xyz)));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform float uK; varying float vT, vF; void main() { gl_FragColor = vec4(vec3(1.0, 0.9, 0.68) * uK * pow(1.0 - vT, 2.5) * pow(vF, 4.0), 1.0); }`}),i=new Wn;i.position.y=t,e.add(i),[0,Math.PI].forEach(e=>{let t=new Li(n,r);t.rotation.y=e,i.add(t)}),Sh.push(e=>{i.rotation.y=e*.55})}function Bv(e,t,n=1){let r=e.position.y,i=e.rotation.z;Sh.push(a=>{e.position.y=r+Math.sin(a*1.3+t)*.035*n,e.rotation.z=i+Math.sin(a*1.05+t)*.03*n,e.rotation.x=Math.sin(a*.8+t*2)*.02*n})}function Vv(e,t,n,r){let i={day:15262944,dusk:14203048,night:5922672}[Hd],a=[];for(let t=0;t<14;t++){let t=new vi(new ii({map:I_(),color:i,transparent:!0,depthWrite:!1,opacity:0}));e.add(t),a.push(t)}Sh.push(e=>a.forEach((i,o)=>{let s=(e*.05+o/a.length)%1;i.position.set(t+s*9+Math.sin(e*.3+o)*.8,n+.5+s*13,r-s*2);let c=4+s*12;i.scale.set(c,c,1),i.material.opacity=Math.sin(Math.PI*Math.min(1,s*1.4))*(1-s)*.55}))}function Hv(e,t){let n=Hd!==`day`,r=(t,n)=>{e[t]&&n(...e[t])};r(`volcano`,(e,n,r)=>Vv(t,e,n,r)),r(`lighthouse`,(e,r,i,a)=>{let o=new Wn;o.position.set(e,r-.05,i),o.rotation.y=a,t.add(o),Rv(o,`lighthouse`,0,0,0,0),Rv(o,`lighthouse_lamp`,0,0,0,0,Iv(2.4)),n&&(W_(o,0,6.2,0,16769696,4.5),zv(o,6.2))}),r(`dock`,(e,r,i,a)=>{let o=new Wn;o.position.set(e,Eh,i),o.rotation.y=a,t.add(o),Rv(o,`dock`,0,0,0,0),Rv(o,`dock_lamp`,0,0,0,0,Iv()),Fv(o,.65,.7,7.8,2.2),Fv(o,-.53,.74,8.75,-.4),n&&(W_(o,.55,2.12,8.1,16762992,1.6),X_(o,.4,.46,8,16758880,1.6))}),r(`boat`,(e,n,r,i)=>{let a=Rv(t,`boat`,e,Eh+.28,r,i);a&&(Bv(a,.4),Pv(a,`boat_cap`),Fv(a,0,.1,-1.42,Math.PI))}),r(`boat2`,(e,n,r,i)=>{let a=Rv(t,`boat`,e,Eh+.28,r,i);a&&(Bv(a,2.1),Pv(a,`boat_cap`))}),r(`hut1`,(e,n,r,i)=>Rv(t,`hut`,e,n-.06,r,i)),r(`hut2`,(e,n,r,i)=>Rv(t,`hut`,e,n-.06,r,i)),r(`bar`,(e,r,i,a)=>{let o=new Wn;o.position.set(e,r-.05,i),o.rotation.y=a,t.add(o),Rv(o,`bar`,0,0,0,0),Rv(o,`bar_lights`,0,0,0,0,Iv(2.2)),n&&X_(o,0,.05,-.6,16756848,3.2)}),r(`umbrellas`,(e,n,r,i)=>Rv(t,`umbrellas`,e,n-.03,r,i)),r(`umbrellas2`,(e,n,r,i)=>Rv(t,`umbrellas`,e,n-.03,r,i)),r(`wreck`,(e,n,r,i)=>{let a=Rv(t,`wreck`,e,Eh-.5,r,0);a&&a.rotation.set(-.06,i,.24,`YXZ`)}),r(`canoe`,(e,n,r,i)=>{let a=Rv(t,`canoe`,e,Math.max(n,Eh)+.27,r,i);a&&(a.rotation.z=.05,Pv(a,`canoe_cap`))})}function Uv(e,t){let n=[];(t>5?[[-.75,-.55],[.75,-.55],[-.75,.55],[.75,.55]]:[[-.62,-.35],[.62,.35]]).forEach(([r,i])=>{let a=r*t,o=i*Math.min(t,2.6);Rv(e,`torch`,a,-.12,o,0);let s=Rv(e,`torch_flame`,a,-.12,o,0,Iv(3));s&&n.push(s),Hd!==`day`&&(W_(e,a,1.78,o,16756816,1.3),X_(e,a,-.1,o,16752704,1.8))}),Sh.push(e=>n.forEach((t,n)=>{let r=1+Math.sin(e*13+n*2.1)*.08+Math.sin(e*7.3+n)*.06;t.scale.set(1,r,1)})),Rv(e,`surfboard`,t*.3,-.12,-Math.min(t,2.2)*.55,.4),Rv(e,`surfboard`,t*.36,-.12,-Math.min(t,2.2)*.45,.65)}function Wv(e,t,n){let r=new vv;Sv(r,e.layout),Cv(r),wv(r,n),Dv(r),r.build(t),Hv(e.layout.setpieces,t),Uv(t,n)}var Gv=`
attribute float aAnim;
uniform float uTime;
mat3 rotZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0); }
mat3 rotY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }`,Kv={gull:`
vec3 move(vec3 p, float w, out mat3 nr) {
  nr = mat3(1.0);
  if (w <= 0.0) return p;
  float side = p.x < 0.0 ? -1.0 : 1.0;
  vec3 P = vec3(side * 0.035, 0.03, 0.0);
  nr = rotZ(side * aAnim * (1.0 + 0.6 * smoothstep(0.42, 1.0, w)));
  return P + nr * (p - P);
}`,fish:`
vec3 move(vec3 p, float w, out mat3 nr) {
  float ph = uTime * 13.0 + aAnim + p.z * 22.0;
  nr = rotY(cos(ph) * 0.66 * w);
  return p + vec3(sin(ph) * 0.03 * w, 0.0, 0.0);
}`,turtle:`
vec3 move(vec3 p, float w, out mat3 nr) {
  nr = mat3(1.0);
  if (w <= 0.0) return p;
  float side = p.x < 0.0 ? -1.0 : 1.0, ph = uTime * 1.25 + aAnim, k = smoothstep(0.0, 0.3, w);
  vec3 P;
  if (p.z > -0.18) { P = vec3(side * 0.2, -0.012, 0.2); nr = rotY(side * cos(ph) * 0.3 * k) * rotZ(side * (sin(ph) * 0.55 - 0.05) * k); }
  else { P = vec3(side * 0.13, -0.02, -0.29); nr = rotY(side * cos(ph + 1.2) * 0.25 * k) * rotZ(side * sin(ph + 1.2) * 0.18 * k); }
  return P + nr * (p - P);
}`};function qv(e,t){e.uniforms.uTime=Dh.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
`+Gv+Kv[t]).replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
mat3 mvR; vec3 mvP = move(position, color.a, mvR);
objectNormal = mvR * objectNormal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
transformed = mvP;`)}var Jv=null,Yv=()=>Jv||={gull:(()=>{let e=new oo({vertexColors:!0,roughness:.75});return e.onBeforeCompile=e=>{qv(e,`gull`),e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`diffuseColor.rgb *= vColor.rgb;`)},e.customProgramCacheKey=()=>`sea-gull`,e})(),fish:Yh(new oo({vertexColors:!0,roughness:.42}),{key:`fish`,patch:e=>qv(e,`fish`)}),turtle:Yh(new oo({vertexColors:!0,roughness:.6}),{key:`turtle`,patch:e=>qv(e,`turtle`)})};function Xv(e,t,n,r,i){let a=sv(t);if(!a||!r)return null;let o=a.clone();o.userData={};let s=new ta(new Float32Array(r),1);o.setAttribute(`aAnim`,s);let c=new la(o,n,r);return c.userData.kind=t,c.instanceMatrix.setUsage(rt),c.frustumCulled=!1,c.castShadow=i,c.receiveShadow=!0,e.add(c),{im:c,anim:s}}function Zv(e,t){let n=L.w/2+e,r=L.d/2+e,i=L.cx,a=L.cz;t=Math.min(t,n,r);let o=2*(n-t),s=2*(r-t),c=Math.PI/2*t;function l(e,n,r){return(i,a)=>{let o=r-i*Math.PI/2;a.set(e+Math.cos(o)*t,n+Math.sin(o)*t,Math.sin(o),-Math.cos(o))}}let u=[[o,(e,s)=>s.set(i-n+t+e*o,a+r,1,0)],[c,l(i+n-t,a+r-t,Math.PI/2)],[s,(e,o)=>o.set(i+n,a+r-t-e*s,0,-1)],[c,l(i+n-t,a-r+t,0)],[o,(e,s)=>s.set(i+n-t-e*o,a-r,-1,0)],[c,l(i-n+t,a-r+t,-Math.PI/2)],[s,(e,o)=>o.set(i-n,a-r+t+e*s,0,1)],[c,l(i-n+t,a+r-t,-Math.PI)]],d=2*(o+s)+4*c;return{len:d,at(e,t){e=(e%d+d)%d;for(let[n,r]of u){if(e<=n)return r(n?e/n:0,t),t;e-=n}return u[0][1](0,t),t}}}var Qv=new class{set(e,t,n,r){return this.x=e,this.z=t,this.dx=n,this.dz=r,this}},$v=new gn,ey=new Gt,ty=new En(0,0,0,`YXZ`),ny=new M,ry=new M,iy={x:0,z:0},ay={x:0,z:0},oy=(e,t,n)=>Math.max(t,Math.min(n,e));function sy(e,t,n,r,i,a,o,s,c){ny.set(n,r,i),ty.set(a,o,s),ey.setFromEuler(ty),ry.setScalar(c),e.setMatrixAt(t,$v.compose(ny,ey,ry))}function cy(e){let t=[{kind:`fish_a`,n:14,m:3,v:.85,dir:1,at:0,seed:1},{kind:`fish_b`,n:9,m:4.3,v:.7,dir:-1,at:.36,seed:2},{kind:`fish_a`,n:10,m:2.4,v:.95,dir:1,at:.63,seed:3},...Math.max(L.w,L.d)>30?[{kind:`fish_b`,n:10,m:3.4,v:.8,dir:-1,at:.85,seed:4}]:[]],n={},r=[];t.forEach(e=>{e.path=Zv(e.m,3.5);for(let t=0;t<e.n;t++)r.push({g:e,i:(n[e.kind]=(n[e.kind]||0)+1)-1,along:(_v(t,e.seed)-.5)*2.6,across:(_v(e.seed,t)-.5)*1.2,dy:(_v(t+7,e.seed)-.5)*.1,ph:_v(t,e.seed+5)*6.28,s:1.1+.35*_v(e.seed+9,t)})});let i={};for(let t of Object.keys(n))i[t]=Xv(e,t,Yv().fish,n[t],!0);r.forEach(e=>{let t=i[e.g.kind];t&&t.anim.setX(e.i,e.ph*3)});let a=(e,t,n)=>{let r=e.g,i=r.path.len*r.at+r.dir*(r.v*t+2.5*Math.sin(t*.13+r.seed))-r.dir*e.along+.12*Math.sin(t*.9+e.ph);r.path.at(i,Qv);let a=Math.max(1.4-r.m,e.across+1.1*Math.sin(i*.33+r.seed)+.15*Math.sin(t*1.3+e.ph));return n.x=Qv.x-Qv.dz*a,n.z=Qv.z+Qv.dx*a,n};Sh.push(e=>{for(let t of r){let n=i[t.g.kind];if(!n)continue;a(t,e,iy),a(t,e+.1,ay);let r=Rg(iy.x,iy.z),o=oy(Eh-.25+t.dy+.03*Math.sin(e*.8+t.ph),r+.1,Eh-.1),s=Wt.smoothstep(Eh-r,.2,.35);sy(n.im,t.i,iy.x,o,iy.z,0,Math.atan2(ay.x-iy.x,ay.z-iy.z),0,t.s*s)}for(let e of Object.values(i))e&&(e.im.instanceMatrix.needsUpdate=!0)})}function ly(e){let t=[{m:6,v:.3,dir:-1,at:.08,seed:11},{m:7.2,v:.26,dir:1,at:.55,seed:12},...Math.max(L.w,L.d)>30?[{m:6.6,v:.28,dir:1,at:.3,seed:13}]:[]],n=Xv(e,`turtle`,Yv().turtle,t.length,!0);if(!n)return;t.forEach((e,t)=>{e.path=Zv(e.m,5),e.ph=_v(t,31)*6.28,n.anim.setX(t,e.ph)});let r=(e,t,n)=>{let r=e.path.len*e.at+e.dir*(e.v*t+1.5*Math.sin(t*.05+e.seed));e.path.at(r,Qv);let i=1.5*Math.sin(r*.21+e.seed);return n.x=Qv.x-Qv.dz*i,n.z=Qv.z+Qv.dx*i,n.y=Eh-.5+.22*Math.max(0,Math.sin(t*.09+e.seed*2))**4,n},i={x:0,y:0,z:0},a={x:0,y:0,z:0};Sh.push(e=>{t.forEach((t,o)=>{r(t,e,i),r(t,e+.2,a);let s=Rg(i.x,i.z),c=e*1.25+t.ph,l=oy(i.y+Math.sin(c)*.012,s+.14,Eh-.24),u=(a.y-i.y)/.2;sy(n.im,o,i.x,l,i.z,-u*1.5,Math.atan2(a.x-i.x,a.z-i.z),Math.sin(c)*.05,1)}),n.im.instanceMatrix.needsUpdate=!0})}function uy(e){if(Hd===`night`)return;let t=L.w/2+3,n=L.d/2+3,r=[[-.2,.8],[.35,-.95],[-.6,-.4],[.65,.35],[.05,-.15],[-.45,1.2]].map(([e,r],i)=>({cx:L.cx+e*t,cz:L.cz+r*n,r:5+4*_v(i,21),y:6+3*_v(i,22),w:(2.2+.8*_v(i,23))/(5+4*_v(i,21))*(i%2?-1:1),a0:_v(i,24)*6.28})),i=Xv(e,`gull`,Yv().gull,r.length,!0);if(!i)return;i.anim.setUsage(rt);let a=(e,t,n,r)=>{let i=e.a0+e.w*n,a=e.r*(1+.18*Math.sin(n*.11+t));return r.x=e.cx+Math.cos(i)*a,r.z=e.cz+Math.sin(i)*a,r};Sh.push(e=>{r.forEach((t,n)=>{a(t,n,e,iy),a(t,n,e+.1,ay);let r=Wt.smoothstep(Math.sin(e*.27+n*1.9),.55,.85);i.anim.setX(n,r*.6*Math.sin(e*8.5+n*2.3)+(1-r)*.06*Math.sin(e*1.2+n));let o=t.y+.5*Math.sin(e*.37+n*1.3)-r*.15;sy(i.im,n,iy.x,o,iy.z,0,Math.atan2(ay.x-iy.x,ay.z-iy.z),Math.sign(t.w)*.3,1)}),i.im.instanceMatrix.needsUpdate=!0,i.anim.needsUpdate=!0})}function dy(e){if(Hd!==`night`)return;let t=L.w/2+7,n=L.d/2+7,r=[],i=[];for(let e=0;r.length<660&&e<880;e++){let a=L.cx+(_v(e,41)-.5)*2*t,o=L.cz+(_v(42,e)-.5)*2*n;-.55-Rg(a,o)<.15||(r.push(a,Eh+.03,o),i.push(_v(e,43)*6.28,.5+1.5*_v(44,e)))}let a=new Jr;a.setAttribute(`position`,new Ir(r,3)),a.setAttribute(`aPh`,new Ir(i,2));let o=new Oa({color:7336191,size:.2,map:I_(),transparent:!0,depthWrite:!1,blending:2,toneMapped:!1});o.onBeforeCompile=e=>{e.uniforms.uTime=Dh.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
attribute vec2 aPh;
varying float vA;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vA = pow(0.5 + 0.5 * sin(uTime * aPh.y + aPh.x), 6.0);
  transformed.xz += vec2(sin(uTime * 0.4 + aPh.x), cos(uTime * 0.33 + aPh.x * 1.3)) * 0.15;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vA;`).replace(`#include <color_fragment>`,`#include <color_fragment>
  diffuseColor.rgb *= vA * 2.5;`)},o.customProgramCacheKey=()=>`sea-plankton`;let s=new Na(a,o);s.frustumCulled=!1,e.add(s)}function fy(e){cy(e),ly(e),uy(e),dy(e)}var py=Cm?.75:1,my=null,hy=!1,gy=!0,_y=[],vy=new j;function yy(){_y=[],Tm.traverse(e=>{if(e.isLight){e.layers.enable(1),e.castShadow&&_y.push(e);return}if(!e.isMesh||!e.material)return;let t=e.userData.seabed??e.material.userData?.seabed??0;t===2?e.layers.set(1):t===1&&e.layers.enable(1)}),gy=!1}var by=()=>{gy=!0};function xy(e){hy=e,gy=!0,e||($h.uBed.value=null)}function Sy(){if(!hy)return;gy&&yy(),Sm.getDrawingBufferSize(vy);let e=Math.max(1,Math.round(vy.x*py)),t=Math.max(1,Math.round(vy.y*py));my?(my.width!==e||my.height!==t)&&my.setSize(e,t):my=new pn(e,t,{type:_});let n=Em.layers.mask,r=Sm.getRenderTarget(),i=Sm.shadowMap.autoUpdate;Em.layers.set(1),Sm.shadowMap.autoUpdate=i&&_y.some(e=>!e.shadow.map),Sm.setRenderTarget(my),Sm.render(Tm,Em),Sm.setRenderTarget(r),Sm.shadowMap.autoUpdate=i,Em.layers.mask=n,$h.uBed.value=my.texture}g_(Sy);var Cy={},wy=`"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;function Ty(e){let t=Wd+`|`+e;if(Cy[t])return Cy[t];let n=I.tile,r=document.createElement(`canvas`);r.width=r.height=512;let i=r.getContext(`2d`);i.scale(2,2);let[a,o]=e.split(`:`);if(a===`brick`){i.fillStyle=n.grout,i.fillRect(0,0,256,256);let e=n.bricks;for(let t=0;t<4;t++){let n=t%2?-32:0;for(let r=n;r<256;r+=64)i.fillStyle=e[(t*3+Math.round(r/64)+8)%4],bf(i,r+4,t*64+4,56,56,10),i.fill(),i.fillStyle=`rgba(255,255,255,.28)`,bf(i,r+8,t*64+7,48,8,4),i.fill()}i.strokeStyle=n.edge,i.lineWidth=8,i.strokeRect(4,4,248,248)}else if(a===`deckV`||a===`deckH`)Dy(i,a===`deckV`);else{let e=a===`woodV`;i.fillStyle=`#8a5530`,i.fillRect(0,0,256,256);for(let t=0;t<5;t++)i.fillStyle=t%2?`#d8a06a`:`#cc915a`,e?(bf(i,4+t*50.4,6,46,244,8),i.fill(),i.fillStyle=`#7a4a28`,i.beginPath(),i.arc(27+t*50.4,22,4,0,7),i.arc(27+t*50.4,234,4,0,7),i.fill()):(bf(i,6,4+t*50.4,244,46,8),i.fill(),i.fillStyle=`#7a4a28`,i.beginPath(),i.arc(22,27+t*50.4,4,0,7),i.arc(234,27+t*50.4,4,0,7),i.fill())}o&&Oy(i,o);let s=Hg(r);return s.anisotropy=Math.min(8,Sm.capabilities.getMaxAnisotropy()),Cy[t]=s}var Ey=[`#c9a273`,`#bd9364`,`#d4af82`,`#b68b5b`,`#c69c6c`,`#ab8152`,`#cfa679`,`#bf9566`];function Dy(e,t){e.save(),t||(e.translate(128,128),e.rotate(Math.PI/2),e.translate(-128,-128)),e.fillStyle=`#3b2a1d`,e.fillRect(0,0,256,256);for(let t=0;t<8;t++){let n=t*32+1.5,r=t*7919%97;e.fillStyle=Ey[(t*5+3)%Ey.length],e.fillRect(n,0,29,256),e.strokeStyle=`rgba(90,58,32,.28)`,e.lineWidth=1;for(let t=0;t<4;t++){let i=n+4+(r+t*23)%22;e.beginPath(),e.moveTo(i,0);for(let n=0;n<=256;n+=32)e.lineTo(i+Math.sin(n*.03+r+t)*1.6,n);e.stroke()}e.fillStyle=`rgba(255,240,215,.22)`,e.fillRect(n,0,2,256),e.fillStyle=`#4a3322`,[34,222].forEach(t=>{e.beginPath(),e.arc(n+16-1.5,t,2.6,0,7),e.fill()})}e.restore()}function Oy(e,t){let n=Od[t];e.save(),e.beginPath(),e.arc(128,132,80,0,Math.PI*2),e.fillStyle=`#2a2b5e`,e.fill(),e.beginPath(),e.arc(128,124,76,0,Math.PI*2),e.fillStyle=`#ffffff`,e.fill(),e.beginPath(),e.arc(128,124,65,0,Math.PI*2),e.fillStyle=n.color,e.fill(),e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=`#ffffff`,t===`start`?(e.font=`56px "ZCOOL KuaiLe", sans-serif`,e.fillText(`起点`,128,128)):t===`fine`?(e.font=`700 44px Fredoka, sans-serif`,e.fillText(`-2000`,128,128)):t===`chance`?(e.font=`700 96px Fredoka, sans-serif`,e.fillText(`?`,128,130)):(e.font=`70px `+wy,e.fillText(n.icon,128,118),e.fillStyle=`#2a2b5e`,bf(e,64,186,128,42,14),e.fill(),e.fillStyle=`#ffffff`,e.font=`28px "ZCOOL KuaiLe", sans-serif`,e.fillText(n.label,128,208)),e.restore()}var ky=q(2.04,.3,2.04);function Ay(e){let t=new oo({map:Ty((I.sea?e.horiz?`deckV`:`deckH`:e.bridge?e.horiz?`woodV`:`woodH`:`brick`)+(e.type===`prop`?``:`:`+e.type)),roughness:.8}),n=e.bridge||I.sea?G(I.sea?8018494:9394739):G(I.tile.side),r=new Li(ky,[n,n,t,G(9072527),n,n]);if(r.position.copy(e.pos),r.receiveShadow=!0,r.castShadow=!1,r.userData.tile=e.i,W.add(r),xh.push(r),e.mesh=r,e.bridge){let t=e.horiz,n=new Ha(.07,.08,.7,8),r=G(8014376),i=G(15983302);[-.92,.92].forEach(a=>{[-.92,.92].forEach(i=>{let o=t?i:a,s=t?a:i;W.add(K(n,r,e.pos.x+o,.45,e.pos.z+s))});let o=K(q(t?1.84:.05,.05,t?.05:1.84),i,e.pos.x+(t?0:a),.62,e.pos.z+(t?a:0));W.add(o)})}}var jy=[[-.82,-.82],[.82,-.82],[-.82,.82],[.82,.82]];function My(e){let t=e.length,n=new gn,r=new Gt,i=new M,a=new M(1,1,1),o=Eh-1,s=-.15-o,c=new la(new Ha(.075,.09,s,8),Yh(G(6178098,{roughness:.9})),t*4),l=new la(q(2.26,.12,.14),Yh(G(7032374,{roughness:.9})),t*2);e.forEach((e,t)=>{jy.forEach(([l,u],d)=>{i.set(e.pos.x+l,o+s/2,e.pos.z+u),n.compose(i,r.identity(),a),c.setMatrixAt(t*4+d,n)}),r.setFromAxisAngle(new M(0,1,0),e.horiz?0:Math.PI/2),[-.6,.6].forEach((o,s)=>{i.set(e.pos.x+(e.horiz?0:o),-.21,e.pos.z+(e.horiz?o:0)),n.compose(i,r,a),l.setMatrixAt(t*2+s,n)})}),[c,l].forEach(e=>{e.instanceMatrix.needsUpdate=!0,e.castShadow=!0,e.receiveShadow=!0,W.add(e)})}var Ny=()=>Ty(`deckV`);function Py(){let e=e=>console.warn(`海岛资源`,e);cv().catch(e);for(let t of[`s`,`m`,`l`])Pg(t).catch(e)}function Fy(e){return Promise.all([Pg(e),cv()]).then(([e])=>e)}function Iy(e,t){let n=Ig(e);if(n&&ov()){t(n);return}Fy(e).then(t,e=>console.warn(`海岛资源`,e))}var Ly=0;function Ry(){let e=++Ly,t=W,n=Th();zh(),Vh(),xy(!0),mg(t,n),ig(rf.flatMap(e=>jy.map(([t,n])=>[e.pos.x+t,e.pos.z+n])));let r=new Wn;t.add(r),Iy(Gd,n=>{e===Ly&&W===t&&(hg(n),Qh(n,r),Wv(n,r,L.R),fy(r),by())})}function zy(){Ly++,xy(!1)}var By=[{id:`c1`,name:`初来乍到`,theme:`cloud`,size:`s`,time:`day`,days:10,cash:25e3,foeCash:2e4,lineup:[0,1,2,3],goal:{kind:`rank`,top:2},story:`你揣着 ¥25,000 来到漂在云海上的小镇，想从这里开始你的大富翁之路。镇上三位老板各有 ¥20,000，也在抢地盘——十天以后，你的家底要排进前两名。`},{id:`c2`,name:`樱花街的生意`,theme:`tokyo`,size:`s`,time:`dusk`,days:15,cash:2e4,foeCash:2e4,lineup:[4,5,2,3],goal:{kind:`rich`,target:28e3},story:`东京的樱花街寸土寸金，晚上的电车一班接一班。月光神偷影子和北极熊阿雪也盯上了这里。十五天内把总资产做到 ¥28,000，在东京站稳脚跟。`},{id:`c3`,name:`塞纳河畔`,theme:`paris`,size:`m`,time:`day`,days:15,cash:25e3,foeCash:25e3,lineup:[0,5,6,3],goal:{kind:`land`,target:6},story:`巴黎的老楼一栋比一栋贵，河边的游船码头能直接坐到下一站。抢地要快：十五天内手里要有 6 块地。没人买的地会拿出来拍卖，别错过。`},{id:`c4`,name:`沙漠求生`,theme:`egypt`,size:`s`,time:`day`,days:15,cash:8e3,foeCash:25e3,foeLand:{n:3,level:2},lineup:[4,1,6,7],goal:{kind:`survive`},story:`路上遇到沙暴，你只剩 ¥8,000；三个对手却个个腰缠万贯，金字塔下的街早被他们各占了 3 块、盖好了 2 级的房子。撑过十五天不破产就算赢——银行能存钱，地能抵押，能省就省。`},{id:`c5`,name:`冰原决战`,theme:`arctic`,size:`l`,time:`night`,days:20,cash:3e4,foeCash:36e3,lineup:[4,5,6,7],goal:{kind:`rank`},story:`北境的雪夜里，四位动物大亨在十字形的大地图上等你，他们开局都比你多 ¥6,000。二十天后，你的总资产要排第一。`},{id:`c6`,name:`大富翁之王`,theme:`sea`,size:`m`,time:`day`,days:25,cash:25e3,foeCash:25e3,lineup:[0,5,6,7],goal:{kind:`rich`,target:5e4},story:`最后一站是海上小岛。灯塔亮着，渔船晃着，最强的对手都聚在这里。二十五天内总资产做到 ¥50,000，你就是大富翁之王！`}],Vy=()=>Math.random(),Hy=()=>Vy(),Uy=e=>e[Math.floor(Hy()*e.length)],Wy=()=>1+Math.floor(Hy()*6);function Gy(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ky(e){Vy=Gy(e)}function qy(e,t){let n=Math.random;Math.random=Gy(e);try{return t()}finally{Math.random=n}}var Jy=(e,t)=>Math.round(e.price*[0,.35,.8,1.5][t]/10)*10,Yy=e=>{let t=Jy(e,e.level);return e.owner>=0&&H[e.owner].perk===`rent`?Math.round(t*1.2/10)*10:t},Xy=e=>Math.round(e.price*.5/100)*100,Zy=(e,t)=>Math.round(Xy(t)*(e.perk===`builder`?.9:1)/100)*100,Qy=(e,t)=>t.perk===`rentcut`?Math.round(Yy(e)*.8/10)*10:Yy(e),$y=(e,t)=>e.perk===`landcut`?Math.round(t.price*.8/100)*100:t.price,eb=new oo({vertexColors:!0,flatShading:!0,roughness:.95,metalness:0}),tb=new N,nb=new N,rb=new N;function ib(e,t,n,r,i){let a=new Ha(e,t,n,i||8,3),o=a.attributes.position,s=[],c=new N;for(let e=0;e<o.count;e++){let t=o.getX(e),i=o.getY(e),a=o.getZ(e),l=Math.round(t*100),u=Math.round(i*100),d=Math.round(a*100),f=xf(l,u,d,r)-.5,p=xf(d,l,u,r+3)-.5,m=xf(u,d,l,r+7)-.5,h=i>n/2-.001,g=(i+n/2)/n;h?(t+=f*.22,a+=p*.22):(t+=f*.55*(1-g*.4),a+=p*.55*(1-g*.4),i+=m*.35*(1-g)),o.setXYZ(e,t,i,a),h?c.copy(tb):g>.6?c.copy(nb).lerp(tb,(g-.6)/.4*.45):c.copy(rb).lerp(nb,g/.6),s.push(c.r,c.g,c.b)}a.setAttribute(`color`,new Ir(s,3)),a.computeVertexNormals();let l=new Li(a,eb);return l.castShadow=!1,l.receiveShadow=!0,l}var ab=[.125,.25,.5,.75],ob={},sb={},cb=null;function lb(e,t){let n=new Jr;for(let t of[`position`,`normal`,`uv`]){let r=e.attributes[t];if(!r)continue;let i=new Nr(new Float32Array(r.count*r.itemSize),r.itemSize);for(let e=0;e<r.count;e++)for(let t=0;t<r.itemSize;t++)i.setComponent(e,t,r.getComponent(e,t));n.setAttribute(t,i)}return n.setIndex(e.index?Array.from(e.index.array):null),n.applyMatrix4(t),n}function ub(e){if(cb)return cb;let t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0);let r=n.getImageData(0,0,t.width,t.height),i=r.data,a=e=>.299*i[e]+.587*i[e+1]+.114*i[e+2],[o,s,c,l]=ab,u=0,d=0;for(let e=Math.floor(c*t.height);e<l*t.height;e++)for(let n=Math.floor(o*t.width);n<s*t.width;n++)u+=a((e*t.width+n)*4),d++;let f=255/(u/d);for(let e=0;e<i.length;e+=4){let t=Math.min(255,a(e)*f);i[e]=i[e+1]=i[e+2]=t}return n.putImageData(r,0,0),cb=new Ia(t),cb.colorSpace=Ze,cb.flipY=!1,cb}function db(e){if(ob[e])return ob[e];let t=sm(e);t.updateMatrixWorld(!0);let n=null;t.traverse(e=>{e.isMesh&&!n&&(n=e)});let r=lb(n.geometry,n.matrixWorld),i=n.material.map;i.updateMatrix();let a=r.attributes.uv,o=r.index.array,s=new j,[c,l,u,d]=ab,f=[],p=[];for(let e=0;e<o.length;e+=3)s.fromBufferAttribute(a,o[e]).applyMatrix3(i.matrix),(s.x>=c&&s.x<l&&s.y>=u&&s.y<d?f:p).push(o[e],o[e+1],o[e+2]);let m=e=>{let t=new Jr;for(let e in r.attributes)t.setAttribute(e,r.attributes[e]);return t.setIndex(e),t};return ub(i.image),ob[e]={trunk:m(p),leaves:m(f),trunkMat:n.material}}function fb(e){return sb[e]||(sb[e]=new oo({map:cb,color:e,roughness:.6,metalness:0})),sb[e]}function pb(e,t){let n=db(e),r=new Wn;return[new Li(n.trunk,n.trunkMat),new Li(n.leaves,t==null?n.trunkMat:fb(t))].forEach(e=>{e.castShadow=!0,e.receiveShadow=!0,r.add(e)}),r}function mb(e){let t=db(e);return{trunk:t.trunk,leaves:t.leaves,trunkMat:t.trunkMat,leafMat:fb(16777215)}}function hb(e,t,n,r){let i=new Wn;return i.position.set(e,-.12,t),i.scale.setScalar(n||1),i.rotation.y=r??B(0,Math.PI*2),W.add(i),i}var Y=(e,t,n,r,i,a)=>{let o=K(t,n,r,i,a);return e.add(o),o},gb=(e,t,n)=>G(e,{emissive:t,emissiveIntensity:(n??.5)*Ud().glow}),_b=(e,t,n)=>gb(e,t,(n??.5)*Ud().lamp),vb=(e,t)=>(e.scale.setScalar(t),e),yb=(e,t)=>vb(nm(e),t/Math.max(rm(e).x,rm(e).z)),bb=14871794,xb={tree(e,t,n){let r=hb(e,t,n);return r.add(vb(pb(`fir`,_f(I.leaf)),1.25)),r},mushroom(e,t,n){let r=hb(e,t,n);return Y(r,Bg(.07,.09,.28),G(16774890),0,.14,0),Y(r,new Ja(.2,14,8,0,Math.PI*2,0,Math.PI/2),G(16743050),0,.26,0),r},sakura(e,t,n){let r=hb(e,t,n);return r.add(vb(pb(`fir`,_f([16757711,16762074,16754888])),1.35)),r},pine(e,t,n){let r=hb(e,t,n);return r.add(vb(pb(`pine`,Wd===`arctic`?3111519:null),1.4)),r},snowPine(e,t,n){let r=hb(e,t,n);return r.add(vb(pb(`pine`,bb),1.4)),r},lantern(e,t,n){let r=hb(e,t,n,0),i=G(12170154,{flatShading:!0});return Y(r,q(.32,.12,.32),i,0,.06,0),Y(r,Bg(.07,.09,.4,6),i,0,.32,0),Y(r,q(.26,.22,.26),_b(16773572,16762976),0,.63,0),W_(r,0,.63,0,16762992,1),X_(r,0,.14,0,16758880,.9),Y(r,new Ua(.28,.2,4),i,0,.84,0).rotation.y=Math.PI/4,r},jpHouse(e,t,n){let r=hb(e,t,n,B(-.3,.3));Y(r,q(1.2,.75,1),G(16183783),0,.375,0);let i=Y(r,new Ua(.95,.55,4),G(4935516,{roughness:.6}),0,1.02,0);return i.rotation.y=Math.PI/4,i.scale.set(1.18,1,1),Y(r,q(.3,.42,.04),G(9067068),0,.21,.51),Y(r,q(.9,.06,.04),G(9067068),0,.6,.51),Hd!==`day`&&Y(r,q(.3,.22,.03),B_(),.36,.45,.51),r},flowerbed(e,t,n){let r=hb(e,t,n);Y(r,q(.9,.16,.5),G(9136719),0,.08,0),Y(r,q(.82,.06,.42),G(7126876),0,.18,0);let i=G(_f(I.flowers||[16743080,16765503]));for(let e=0;e<5;e++)Y(r,new Ja(.09,8,6),i,-.32+e*.16,.24,B(-.1,.1));return r},lamp(e,t,n){let r=hb(e,t,n,0),i=G(3093312);return Y(r,Bg(.1,.12,.12),i,0,.06,0),Y(r,Bg(.035,.04,1.6,6),i,0,.9,0),Y(r,q(.2,.26,.2),_b(16773572,16762976,.55),0,1.8,0),W_(r,0,1.8,0,16762992,1.7),X_(r,0,.14,0,16758880,1.5),Y(r,new Ua(.18,.14,4),i,0,2,0).rotation.y=Math.PI/4,r},umbrella(e,t,n){let r=hb(e,t,n),i=G(16777215);return Y(r,Bg(.03,.03,1.1,6),i,0,.55,0),Y(r,new Ua(.62,.28,8),G(_f([15224923,4033535,2474360,16756255])),0,1.15,0),Y(r,Bg(.26,.26,.04,12),i,0,.48,0),Y(r,Bg(.03,.03,.46,6),i,0,.24,0),[-1,1].forEach(e=>Y(r,q(.2,.3,.2),G(7035466),e*.45,.15,0)),r},parisHouse(e,t,n){let r=hb(e,t,n,B(-.25,.25));Y(r,q(1.4,1.5,1.1),G(15852488),0,.75,0);let i=Y(r,Bg(.62,1,.5,4),G(7307164,{flatShading:!0}),0,1.75,0);i.rotation.y=Math.PI/4,i.scale.set(1,1,.8);for(let e=0;e<2;e++)for(let t=-1;t<=1;t++)Y(r,q(.2,.3,.04),Hd!==`day`&&Math.random()<.6?B_():G(4872824),t*.42,.55+e*.55,.56);return Y(r,q(1.2,.05,.12),G(3093312),0,.95,.6),Y(r,q(.16,.3,.16),G(13202511),.35,2.05,0),r},palm(e,t,n){let r=hb(e,t,n),i=G(10121288,{flatShading:!0}),a=0,o=0;for(let e=0;e<4;e++)Y(r,Bg(.08-e*.008,.1-e*.008,.42,6),i,a,o+.21,0).rotation.z=-.08*e,a+=.04*e,o+=.4;let s=G(5221978,{flatShading:!0});for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=Y(r,new Ja(.5,8,4),s,a+Math.cos(t)*.38,o+.05,Math.sin(t)*.38);n.scale.set(1.5,.14,.42),n.rotation.set(0,-t,-.35)}return Y(r,new Ja(.08,8,6),G(7031343),a,o-.05,.08),r},obelisk(e,t,n){let r=hb(e,t,n,0),i=G(15123068,{flatShading:!0});return Y(r,q(.5,.16,.5),i,0,.08,0),Y(r,Bg(.14,.22,2,4),i,0,1.16,0).rotation.y=Math.PI/4,Y(r,new Ua(.2,.3,4),G(15911244,{metalness:.3,roughness:.4}),0,2.31,0).rotation.y=Math.PI/4,r},clayHouse(e,t,n){let r=hb(e,t,n,B(-.3,.3)),i=G(14926220,{flatShading:!0});return Y(r,q(1.1,.8,1),i,0,.4,0),Y(r,q(1.2,.1,1.1),G(13938292),0,.85,0),Y(r,q(.26,.42,.04),G(7031343),0,.21,.51),Y(r,q(.18,.18,.04),Hd===`day`?G(3889786):B_(),.32,.5,.51),Y(r,Bg(.18,.2,.3),i,-.3,1.05,-.2),r},tent(e,t,n){let r=hb(e,t,n);return Y(r,new Ua(.7,.95,6),G(_f([14242639,15246141,5214169]),{flatShading:!0}),0,.475,0),Y(r,Bg(.02,.02,.3,5),G(7031343),0,1.05,0),r},rockLow(e,t,n){let r=hb(e,t,n),i=ib(B(.35,.5),.45,.4,Math.floor(B(1,999)),6);return i.position.y=.1,r.add(i),r},pots(e,t,n){let r=hb(e,t,n),i=G(12871743);return[[0,0,.18],[.3,.1,.13],[-.22,.15,.11]].forEach(([e,t,n])=>Y(r,new Ja(n,10,8),i,e,n*.9,t).scale.set(1,1.2,1)),r},snowman(e,t,n){let r=hb(e,t,n,B(-.4,.4)),i=G(16777215);return Y(r,new Ja(.34,14,10),i,0,.3,0),Y(r,new Ja(.25,14,10),i,0,.78,0),Y(r,new Ja(.18,14,10),i,0,1.12,0),Y(r,new Ua(.04,.2,6),G(16747050),0,1.12,.26).rotation.x=Math.PI/2,[-1,1].forEach(e=>Y(r,new Ja(.025,6,4),G(2236962),e*.06,1.17,.16)),Y(r,new Ya(.2,.05,6,16),G(15224923),0,.96,0).rotation.x=Math.PI/2,r},iceCrystal(e,t,n){let r=hb(e,t,n),i=G(13167871,{emissive:4892927,emissiveIntensity:.35,roughness:.15,flatShading:!0});return[[0,0,1.3,0],[.22,.1,.9,.35],[-.2,-.05,.8,-.4]].forEach(([e,t,n,a])=>{let o=new Wn;o.position.set(e,0,t),o.rotation.z=a,r.add(o),Y(o,Bg(.13,.16,n,6),i,0,n/2,0),Y(o,new Ua(.13,.3,6),i,0,n+.15,0)}),r},igloo(e,t,n){let r=hb(e,t,n,B(-.5,.5)),i=G(16186367);return Y(r,new Ja(.55,16,8,0,Math.PI*2,0,Math.PI/2),i,0,0,0),Y(r,new Ja(.22,10,6,0,Math.PI*2,0,Math.PI/2),i,0,0,.5).scale.set(1,1.1,1.2),Y(r,new Va(.13,10),G(3424348),0,.11,.765),r},vending(e,t,n){let r=hb(e,t,n,B(-.4,.4));return Y(r,q(.6,1.15,.5),G(_f([14239549,15921906,4026296])),0,.575,0),Y(r,q(.48,.62,.03),_b(15267071,10473727,.6),0,.72,.26),W_(r,0,.72,.35,12575487,1.1),X_(r,0,.14,.6,10473727,.75),Y(r,q(.4,.12,.03),G(2236962),0,.2,.26),r},kiosk(e,t,n){let r=hb(e,t,n,0),i=G(3104072,{roughness:.6});return Y(r,Bg(.32,.34,.12,12),i,0,.06,0),Y(r,Bg(.26,.26,1.5,12),G(15853263),0,.85,0),Y(r,Bg(.3,.3,.1,12),i,0,1.62,0),Y(r,new Ja(.28,12,6,0,Math.PI*2,0,Math.PI/2),i,0,1.66,0),Y(r,new Ja(.05,6,4),G(14267466,{metalness:.4}),0,1.98,0),r},bench(e,t,n){let r=hb(e,t,n,0),i=G(13208922);return Y(r,q(.9,.08,.3),i,0,.35,0),Y(r,q(.9,.24,.06),i,0,.55,-.13),[[-.38,-.1],[.38,-.1],[-.38,.1],[.38,.1]].forEach(([e,t])=>Y(r,q(.06,.35,.06),G(7170688),e,.17,t)),r},flag(e,t){let n=hb(e,t,1,0),r=am(`flag`);return r.mixer.clipAction(om(`Flag_Wave`)).play(),Sh.push((e,t)=>r.mixer.update(t)),n.add(r.obj),n},shop(e,t){let n=hb(e,t,1,0);return n.add(yb(`market`,1.7)),n},well(e,t){let n=hb(e,t,1,0);return n.add(yb(`well`,1.1)),n},fountain(e,t,n){let r=hb(e,t,n,0),i=G(15130863),a=gb(9425919,3842303,.25);return Y(r,Bg(.85,.95,.35,20),i,0,.17,0),Y(r,Bg(.72,.72,.05,20),a,0,.33,0),Y(r,Bg(.12,.16,.7,10),i,0,.6,0),Y(r,Bg(.32,.12,.15,14),i,0,.98,0),Y(r,new Ja(.14,12,10),a,0,1.15,0),r}};function Sb(e,t){let n=new Li(new qa(.5,.78,40),new Ti({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:2}));n.rotation.x=-Math.PI/2,n.position.set(e.x,.3,e.z),Tm.add(n),_m.add(n),vm(650,e=>{let t=.6+e*3.2;n.scale.set(t,t,t),n.material.opacity=.9*(1-e)}).then(()=>{Tm.remove(n),_m.delete(n),n.geometry.dispose(),n.material.dispose()})}function Cb(e){Tm.add(e),_m.add(e)}function wb(e){Tm.remove(e),_m.delete(e)}function Tb(e,t){let n=e.mesh.position.clone();for(let e=0;e<t;e++){let r=am(`coin`);r.mixer.clipAction(om(`Coin_Spin`)).play(),r.obj.scale.setScalar(.01),Cb(r.obj);let i=e/t*Math.PI*2+.4,a=.95+e%3*.25,o=2.7+e%2*.4,s=e%4*.06;vm(1e3,t=>{let c=Math.max(0,Math.min(1,(t-s)/(1-s)));r.obj.position.set(n.x+Math.cos(i)*a*c,n.y+1.5+o*c-3.6*c*c,n.z+Math.sin(i)*a*c),r.obj.scale.setScalar(c<=0?.01:1.35*Math.min(1,c*6,(1-c)*5+.01)),r.mixer.setTime(t+e*.13)}).then(()=>wb(r.obj))}}function Eb(e){let t=am(`chest`),n=t.mixer.clipAction(om(`Chest_Open`));n.play();let r=e.mesh.position,i=n.getClip().duration,a=1.2;t.obj.position.set(r.x,r.y+1.9,r.z);let o=Em.position.x-r.x,s=Em.position.z-r.z,c=Em.position.y-r.y-1.9;return t.obj.rotation.set(Math.atan2(c,Math.hypot(o,s))*.5,Math.atan2(o,s),0,`YXZ`),t.obj.scale.setScalar(a),t.mixer.setTime(0),Cb(t.obj),vm(i*1e3+450,e=>{let n=e*(i+.45);t.mixer.setTime(Math.min(n,i-.001)),n>i&&t.obj.scale.setScalar(a*Math.max(.01,1-(n-i)/.45))}).then(()=>wb(t.obj)),hm(720)}function Db(){let e=new Wn,t=G(16742959,{roughness:.5}),n=G(16777215,{roughness:.5});return e.add(K(q(.75,.08,.75),G(3816010),0,.04,0)),e.add(K(new Ha(.22,.3,.25,16),t,0,.205,0)),e.add(K(new Ha(.16,.22,.2,16),n,0,.43,0)),e.add(K(new Ha(.05,.16,.3,16),t,0,.68,0)),e}function Ob(e){let t=Db();t.position.set(e.pos.x,.15,e.pos.z),t.scale.setScalar(.01),W.add(t),e.block=t,vm(420,e=>t.scale.setScalar(Math.max(.01,yf(e)*1.25))),Sb(e.pos,16756782)}function kb(e){let t=e.block;t&&(e.block=null,vm(260,e=>t.scale.setScalar(Math.max(.01,1.25*(1-e)))).then(()=>{t.parent&&t.parent.remove(t)}))}function Ab(){let e=new Wn,t=G(4080698,{roughness:.6}),n=G(12896718,{roughness:.35,metalness:.6});e.add(K(Bg(.46,.5,.08,24),G(15909424,{roughness:.6}),0,.04,0));for(let t=0;t<6;t++){let n=t/6*Math.PI*2,r=K(q(.14,.085,.1),G(2763566,{roughness:.7}),Math.cos(n)*.43,.045,Math.sin(n)*.43);r.rotation.y=-n,e.add(r)}e.add(K(new Ja(.33,20,10,0,Math.PI*2,0,Math.PI/2),t,0,.08,0));for(let t=0;t<4;t++){let r=t/4*Math.PI*2+Math.PI/4;e.add(K(Bg(.035,.04,.18,6),n,Math.cos(r)*.18,.34,Math.sin(r)*.18))}return e.add(K(new Ja(.1,12,8),_b(16734794,16722458,1.8),0,.42,0)),e}function jb(e){let t=Ab();t.position.set(e.pos.x,.15,e.pos.z),t.scale.setScalar(.01),W.add(t),e.mine=t,vm(380,e=>t.scale.setScalar(Math.max(.01,yf(e)))),Sb(e.pos,9206379)}function Mb(e,t){let n=e.mine;n&&(e.mine=null,t&&(Sb(e.pos,16747050),Sb(e.pos,16765503)),vm(t?160:260,e=>n.scale.setScalar(Math.max(.01,t?1+e:1-e))).then(()=>{n.parent&&n.parent.remove(n)}))}var Nb={rich:[`💰`,`财神`,`#ffd23f`],luck:[`🍀`,`福神`,`#7ee08a`],poor:[`💸`,`穷神`,`#b9a7ff`]};function Pb(e,t){let[n,r,i]=Nb[t],a=document.createElement(`canvas`);a.width=256,a.height=256;let o=a.getContext(`2d`);o.beginPath(),o.arc(128,104,92,0,7),o.fillStyle=`#2a2b5e`,o.fill(),o.beginPath(),o.arc(128,100,86,0,7),o.fillStyle=i,o.fill(),o.textAlign=`center`,o.textBaseline=`middle`,o.font=`96px `+wy,o.fillText(n,128,102),o.fillStyle=`#2a2b5e`,bf(o,44,186,168,64,22),o.fill(),o.fillStyle=`#ffffff`,o.font=`50px "ZCOOL KuaiLe", sans-serif`,o.fillText(r,128,219);let s=new vi(T_(Hg(a)));s.scale.set(1.3,1.3,1);let c=1.55,l=e.i*.7;s.position.set(e.pos.x,c,e.pos.z);let u=e=>{s.position.y=c+Math.sin(e*2.2+l)*.12};Sh.push(u),W.add(s),e.god={k:t,sp:s,bob:u},s.scale.setScalar(.01),vm(420,e=>s.scale.set(1.3*Math.max(.01,yf(e)),1.3*Math.max(.01,yf(e)),1)),Sb(e.pos,new N(i).getHex())}function Fb(e){let t=e.god;if(!t)return;e.god=null;let n=Sh.indexOf(t.bob);n>=0&&Sh.splice(n,1),vm(300,e=>t.sp.scale.set(1.3*Math.max(.01,1-e),1.3*Math.max(.01,1-e),1)).then(()=>{t.sp.parent&&t.sp.parent.remove(t.sp),t.sp.material.map.dispose()})}function Ib(e){let t=[];if(e.god&&t.push(Nb[e.god.k][0]+e.god.n),e.jail>0&&t.push(`🚔`+e.jail),e.hosp>0&&t.push(`🏥`+e.hosp),e.turtle>0&&t.push(`🐢`+e.turtle),e.sleep>0&&t.push(`💤`),e.dumpTo>=0&&t.push(`🍳`),e.waste&&t.push(`🛍️`),e.flip&&t.push(`🔁`),!e.statusSprite){let t=document.createElement(`canvas`);t.width=256,t.height=96;let n=Hg(t),r=new vi(T_(n));r.scale.set(1.25,.47,1),r.position.set(0,2.65,0),e.mesh.add(r),e.statusSprite=r,e.statusCanvas=t,e.statusTex=n}let n=e.statusCanvas.getContext(`2d`);if(n.clearRect(0,0,256,96),t.length){let e=t.join(` `),r=50;for(n.font=`600 50px Fredoka, `+wy;n.measureText(e).width>204&&r>30;)r-=4,n.font=`600 `+r+`px Fredoka, `+wy;let i=Math.min(244,n.measureText(e).width+40);n.fillStyle=`#2a2b5e`,bf(n,128-i/2,10,i,80,38),n.fill(),n.fillStyle=`#ffffff`,bf(n,128-i/2+4,6,i-8,76,34),n.fill(),n.fillStyle=`#2a2b5e`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,128,46)}e.statusTex.needsUpdate=!0,e.statusSprite.visible=t.length>0}var Lb=[];function X(e,t){Lb.unshift({text:e,color:t||`#8f7dff`,day:V.round}),Lb.length>60&&Lb.pop();let n=R(`#toasts`),r=document.createElement(`div`);r.className=`toast`;let i=document.createElement(`i`);i.style.setProperty(`--c`,t||`#8f7dff`);let a=document.createElement(`span`);for(a.textContent=e,r.append(i,a),n.appendChild(r);n.children.length>3;)n.firstChild.remove();setTimeout(()=>{r.classList.add(`out`),setTimeout(()=>r.remove(),320)},2800)}var Z={on:!1,gid:``,logs:[[],[],[],[]],used:[0,0,0,0],cut:[-1,-1,-1,-1],mine:[],send:null,wake:null,waitFor:null,turnNo:0,isOffline:()=>!1,holdUntil:0,hiddenAt:0,onTurn:null,onEnd:null};function Rb(e,t){return t==null?e+`~`:t===!0||t===!1?e+(t?`1`:`0`):typeof t==`number`?e+`d`+t:typeof t==`string`?e+`s`+t:t.cash===void 0?e+`t`+t.i:e+`p`+t.id}function zb(e){let t=e[1],n=e.slice(2);return t===`~`?null:t===`1`?!0:t===`0`?!1:t===`d`?Number(n):t===`s`?n:t===`p`?H[+n]:rf[+n]}document.addEventListener(`visibilitychange`,()=>{if(document.hidden){Z.hiddenAt=Date.now();return}Z.hiddenAt&&Date.now()-Z.hiddenAt>1e4&&(Z.holdUntil=Math.max(Z.holdUntil,Date.now()+4e3)),Z.hiddenAt=0});async function Bb(){let e=!1;for(;Z.on&&(Z.isOffline()||Date.now()<Z.holdUntil);)Z.isOffline()&&!e&&(e=!0,X(`网络断开了，等连上再继续…`,`#ff4f6d`)),await new Promise(e=>setTimeout(e,250))}async function Vb(e,t,n,r){let i=()=>(e.botNext=!0,r?r():null);if(!Z.on||e.local){if(Z.on&&Z.cut[e.id]>=0)return i();let r=await n();return Z.on&&await Bb(),Z.on&&Z.cut[e.id]>=0?i():(Z.on&&(Z.mine.push(Rb(t,r)),Z.send(Z.mine.join(`|`))),r)}let a=V.gen;return new Promise(n=>{let r=()=>{if(a!==V.gen)return!0;let r=Z.logs[e.id],o=Z.used[e.id],s=Z.cut[e.id];return s>=0&&o>=s?(n(i()),!0):o<r.length&&(Z.used[e.id]++,r[o][0]!==t&&console.warn(`联机动作对不上`,e.id,o,r[o],t),n(zb(r[o])),!0)};if(r())return;Z.waitFor=e,Z.wake&&Z.wake();let o=setInterval(()=>{r()&&(clearInterval(o),Z.waitFor===e&&(Z.waitFor=null),Z.wake&&Z.wake())},120)})}function Hb(e,t,n){if(!Z.on||t!==Z.gid)return;let r=Array.isArray(n)?n.join(``):n||``,i=r?r.split(`|`):[];i.length>Z.logs[e].length&&(Z.logs[e]=i)}function Ub(e,t,n){Object.assign(Z,{on:!0,gid:e,logs:[[],[],[],[]],used:[0,0,0,0],cut:[-1,-1,-1,-1],mine:[],send:t,wake:n,waitFor:null,turnNo:0,holdUntil:0}),t(``)}function Wb(){Z.on=!1,Z.waitFor=null}var Gb=[],Kb=new M;function qb(e,t,n,r){let i=document.createElement(`div`);i.className=`fl`,i.textContent=t,i.style.color=n,R(`#floaters`).appendChild(i),Gb.push({el:i,pos:e.clone(),t0:performance.now(),life:1400,lift:r??1.7})}function Jb(e){for(let t=Gb.length-1;t>=0;t--){let n=Gb[t],r=(e-n.t0)/n.life;if(r>=1){n.el.remove(),Gb.splice(t,1);continue}Kb.copy(n.pos),Kb.y+=n.lift+r*1.3,Kb.project(Em);let i=(Kb.x*.5+.5)*innerWidth,a=(-Kb.y*.5+.5)*innerHeight,o=r<.15?.6+r/.15*.4:1;n.el.style.transform=`translate(`+i+`px,`+a+`px) translate(-50%,-50%) scale(`+o+`)`,n.el.style.opacity=r<.75?1:(1-r)/.25}}var Yb=Promise.resolve(),Xb=!1,Zb=null;function Qb(e){let t=V.gen,n=Yb.then(()=>t===V.gen?$b(e):new Promise(()=>{}));return Yb=n.then(()=>{},()=>{}),n}function $b(e){return new Promise(t=>{let n=R(`#modal`);Xb=!0;let r=e.buttons||[{label:`知道了`,value:!0,primary:!0}];n.innerHTML=`<div class="dlg"><div class="hd"></div><div class="bd"></div><div class="ft`+(e.grid?` grid`:``)+(e.list?` list`:``)+`"></div></div>`,n.querySelector(`.dlg`).style.setProperty(`--dc`,e.color||`#8f7dff`),n.querySelector(`.hd`).textContent=e.title,n.querySelector(`.bd`).innerHTML=e.html||``;let i=n.querySelector(`.ft`),a=null;r.forEach(e=>{let t=document.createElement(`button`);t.className=`btn`+(e.primary?` primary`:``)+(e.wide?` wide`:``),t.textContent=e.label,t.addEventListener(`click`,()=>s(e.value)),i.appendChild(t),e.primary&&!a&&(a=t)});let o=e=>{if(e.key===`Escape`){let e=r.find(e=>e.cancel);e&&s(e.value)}};function s(e){document.removeEventListener(`keydown`,o),Zb=null,n.classList.remove(`show`),n.innerHTML=``,Xb=!1,t(e)}document.addEventListener(`keydown`,o),Zb=()=>document.removeEventListener(`keydown`,o),n.classList.add(`show`);let c=a||i.firstChild;c&&c.focus({preventScroll:!0})})}function ex(e,t,n,r){let i=[];for(let e=1;e<=n;e++)i.push({label:String(e),value:e});return i.push({label:`先不用`,value:null,wide:!0,cancel:!0}),Qb({title:e,color:t,html:`<p>`+r+`</p>`,buttons:i,grid:!0})}function tx(e,t){let n=kd[e],r=t=>e===`steal`?`（`+t.cards.length+` 张卡）`:e===`tax`?`（现金 ¥`+z(t.cash)+`）`:[`dump`,`oops`,`aura`].includes(e)?`（手上 ¥`+z(rh(t))+`）`:`（总资产 ¥`+z(th(t))+`）`,i=t.map(e=>({label:e.name+r(e),value:e}));return i.push({label:`先不用`,value:null,cancel:!0,primary:!0}),Qb({title:n.name,color:n.color,html:`<p>`+ix(n.desc)+`。选一个对手：</p>`,buttons:i,list:!0})}function nx(e,t,n,r,i){let a=n.map(e=>({label:r(e),value:e}));return a.push({label:`先不用`,value:null,cancel:!0,primary:!0}),Qb({title:e,color:t,html:`<p>`+i+`</p>`,buttons:a,list:!0})}function rx(){Zb&&Zb();let e=R(`#modal`);e.classList.remove(`show`),e.innerHTML=``,Xb=!1,Yb=Promise.resolve()}var ix=e=>ef()?String(e).replace(/¥([\d,]+)/g,(e,t)=>`¥`+z(tf(+t.replace(/,/g,``)))):e,ax={start:`经过起点会被硬塞 ¥2,000 工资和 20 点券（在这里是坏事）。`,chance:`几乎全是意外之财：远房亲戚的遗产、股票涨停、捡到钱包……偶尔也能花点钱。`},ox=e=>ix(ef()&&ax[e]||Od[e].desc);function sx(e){return[`🙃 逆向大富翁：每人开局 ¥`+z(tf(2e4))+`，谁先把手上的钱（现金加存款，地和房子不算）花光谁赢；`+e+` 天到了还没人花光，就比谁的钱最少。`,`规则全反过来：别人停在你的地上，你得倒贴给他（请客）；你停在别人的地上，他得塞钱给你（红包）。所以地买得越多、楼盖得越豪华，倒贴得越多。`,`花钱的地方：买地盖楼、请客格（全场吃大餐，每人 ¥`+z(tf(1e3))+`）、奢侈品店（金马桶、镶钻手机壳……）、慈善格（捐钱，可好人有好报，捐完会中彩票）、彩票、保释。`,`拦着你花钱的：经过起点硬塞 ¥`+z(tf(2e3))+` 工资；机会格几乎全是意外之财；税务局硬给你退税 ¥`+z(tf(2e3))+`；银行每天按你手上的钱发 `+Math.round(Cd*100)+`% 利息（钱越多利息越多）；钱少于 ¥`+z(wd)+` 时，好心路人看你可怜会硬塞钱。`,`不会破产：付不起的钱一笔勾销，钱正好花光就赢了。没人买的地不拍卖，地也不能抵押。财神是坏事，穷神和福神（踩到别人的地不用收红包）是好事。`,`专属道具卡：甩锅卡、败家子卡、转账失误卡、网购剁手卡、土豪光环卡（说明见下面的道具卡）。`]}async function cx(e){let t=tf(1e3),n=H.filter(t=>t!==e&&!t.bankrupt);X(U(e)+`在请客格请全场吃大餐，给每个人塞了 ¥`+z(t)+`（一共 `+n.length+` 个人）`,F[e.id]),qb(e.mesh.position,`🍲 请客`,`#ffffff`,2.6);for(let r of n)MC(e,r,t);Q(),await hm(700)}var lx=[{icon:`🚽`,name:`金马桶`,price:6e3},{icon:`📱`,name:`镶钻手机壳`,price:1600},{icon:`🐦`,name:`纯金鸟笼`,price:4e3},{icon:`👞`,name:`会唱歌的皮鞋`,price:2400},{icon:`🥫`,name:`限量版空气罐头`,price:1200},{icon:`🐶`,name:`名牌狗窝`,price:5e3},{icon:`🖼️`,name:`一幅看不懂的名画`,price:8e3},{icon:`⌚`,name:`走得比别人慢的名表`,price:3e3},{icon:`🛥️`,name:`开不进家门的游艇`,price:1e4},{icon:`🧻`,name:`24K 金卫生纸`,price:2e3},{icon:`🛋️`,name:`只能看不能坐的沙发`,price:7e3},{icon:`🎩`,name:`镶满钻石的礼帽`,price:3600}];function ux(e,t){let n=t.map((e,t)=>({g:e,i:t})).filter(({g:t})=>e.cash>=tf(t.price)).map(({g:e,i:t})=>({label:e.icon+` `+e.name+`　¥`+z(tf(e.price)),value:t}));n.push({label:`不买了`,value:null,cancel:!0,primary:!0});let r=t.map(e=>`<li><span class="mini" style="--cc:`+Od.luxury.color+`">`+e.icon+`</span><span><b>`+e.name+`</b>　¥`+z(tf(e.price))+`</span></li>`).join(``);return Qb({title:Od.luxury.label+`店`,color:Od.luxury.color,html:`<p>今天到了三件宝贝，买哪一件？（买回去也没什么用）你现在有 ¥`+z(e.cash)+`。</p><ul class="dex">`+r+`</ul>`,buttons:n,list:!0})}async function dx(e){let t=[];for(let e=0;e<20&&t.length<3;e++){let e=lx[Math.floor(Hy()*lx.length)];t.includes(e)||t.push(e)}let n=t.filter(t=>e.cash>=tf(t.price));if(!n.length){X(U(e)+`逛了一圈奢侈品店，钱不够，一件也买不起`,F[e.id]);return}let r=n.reduce((e,t)=>t.price>e.price?t:e),i=r;if(e.human){let n=await Vb(e,`X`,()=>ux(e,t),()=>t.indexOf(r));i=Number.isInteger(n)&&t[n]&&e.cash>=tf(t[n].price)?t[n]:null}if(!i){e.local||X(U(e)+`在奢侈品店门口看了看，没进去`,F[e.id]);return}NC(e,tf(i.price)),Of(`build`),qb(e.mesh.position,i.icon+` `+i.name,`#ffffff`,2.6),X(U(e)+`花 ¥`+z(tf(i.price))+` 买了`+i.icon+i.name+`，一点用都没有`,F[e.id]),await hm(600)}var fx=[1e3,2e3,4e3];function px(e,t){let n=t.map(e=>({label:`捐 ¥`+z(e),value:e}));return n.push({label:`下次再说`,value:null,cancel:!0,primary:!0}),Qb({title:Od.charity.label,color:Od.charity.color,html:`<p>捐多少？好人有好报——捐完说不定还会中彩票，钱又回来了。你现在有 ¥`+z(e.cash)+`。</p>`,buttons:n,list:!0})}async function mx(e){let t=fx.map(tf).filter(t=>t<=e.cash);if(!t.length){X(U(e)+`想捐钱，可手上的钱不够一份`,F[e.id]);return}let n=t[t.length-1];if(e.human){let r=await Vb(e,`Y`,()=>px(e,t),()=>n);n=t.includes(r)?r:0}if(!n){e.local||X(U(e)+`在慈善格前犹豫了一下，没有捐`,F[e.id]);return}if(NC(e,n),Of(`coin`),qb(e.mesh.position,`💝 捐款`,`#ffffff`,2.6),X(U(e)+`捐了 ¥`+z(n)+`，大家都夸是个好人`,F[e.id]),await hm(700),Hy()>=.35)return;let r=Math.round(n*(1+Hy())/tf(100))*tf(100);Of(`skill`),X(`好人有好报：`+U(e)+`刚捐完钱，转身就中了彩票，拿到 ¥`+z(r),Od.charity.color),AC(e,r),e.local?await Qb({title:`好人有好报！`,color:Od.charity.color,html:`<p class="big">你刚捐完钱，转身就中了彩票，拿到 ¥`+z(r)+`……</p><p class="sub">钱又回来了。</p>`}):await hm(500)}async function hx(e){let t=tf(2e3);X(`税务局说`+U(e)+`多交了税，硬是退给他 ¥`+z(t),Od.refund.color),AC(e,t),await hm(500)}async function gx(e){if(rh(e)>=2e5||Hy()>=.3)return;let t=tf(500+100*Math.floor(Hy()*16));qb(e.mesh.position,`🥺 好心路人`,`#ffffff`,2.8),X(`好心路人看`+U(e)+`可怜，硬塞给他 ¥`+z(t)+`：“拿着吧，别客气！”`,`#8f7dff`),AC(e,t),await hm(600)}function _x(){for(let e of H){if(e.bankrupt)continue;let t=Math.floor(rh(e)*Cd/1e3)*1e3;if(t<=0)continue;let n=AC(e,t);e.local&&X(`银行按你手上的钱发了利息 +¥`+z(n)+`：钱越多利息越多`,F[e.id])}Q()}var vx=e=>H.filter(t=>t!==e&&!t.bankrupt),yx=[{amt:1e3,text:e=>`路边捡到一个钱包，失主说什么也不要，硬塞给你 ¥`+e,run:AC},{amt:4e3,text:e=>`素未谋面的远房亲戚过世了，给你留下 ¥`+e+` 遗产`,run:AC},{amt:3e3,text:e=>`随手买的股票莫名其妙涨停，赚了 ¥`+e,run:AC},{amt:600,text:e=>`好心路人看你可怜，硬塞给你 ¥`+e,run:AC},{amt:2e3,text:e=>`公司年终奖发多了，老板说不用退：¥`+e,run:AC},{amt:400,text:e=>`刮中一张“再来一瓶”，还附赠 ¥`+e+` 现金`,run:AC},{good:!0,amt:400,text:e=>`请大家喝奶茶，每人 ¥`+e,run:(e,t)=>vx(e).forEach(n=>MC(e,n,t))},{good:!0,amt:1200,text:e=>`手滑点了 100 份外卖全家桶，花掉 ¥`+e,run:jC},{good:!0,amt:1600,text:e=>`被推销员忽悠，买了一屋子保健品，花掉 ¥`+e,run:jC},{good:!0,amt:800,text:e=>`给全镇的流浪猫买了一年的猫粮，花掉 ¥`+e,run:jC},{good:!0,text:`搭上顺风云，往前飞 3 格`,move:3},{text:`在雾里迷路了，后退 2 格`,move:-2},{good:!0,text:`在路边捡到一张道具卡`,run:e=>FC(e)}],bx=q(1.9,.22,1.9),xx=q(1.56,.06,1.56);function Sx(e){let t=e.signCanvas.getContext(`2d`);t.setTransform(1.5,0,0,1.5,0,0),t.clearRect(0,0,256,150),t.fillStyle=`#2a2b5e`,bf(t,8,14,240,118,22),t.fill(),t.fillStyle=`#fffaf2`,bf(t,12,6,232,112,19),t.fill(),t.textAlign=`center`,t.textBaseline=`middle`,t.fillStyle=`#2a2b5e`,t.font=`40px "ZCOOL KuaiLe", sans-serif`,t.fillText(e.name,128,40);let n=`¥`+z(e.price),r=42;for(t.font=`600 `+r+`px Fredoka, sans-serif`;r>26&&t.measureText(n).width>218;)r-=2,t.font=`600 `+r+`px Fredoka, sans-serif`;t.fillStyle=`#ff4f6d`,t.fillText(n,128,86),e.signTex.needsUpdate=!0}function Cx(e){let t=document.createElement(`canvas`);t.width=384,t.height=225,e.signCanvas=t,e.signTex=Hg(t),Sx(e);let n=new vi(T_(e.signTex));return n.scale.set(1.8,270/256,1),n}var wx=null;function Tx(){if(!wx){let e=document.createElement(`canvas`);e.width=384,e.height=150;let t=e.getContext(`2d`);t.scale(1.5,1.5),t.fillStyle=`#2a2b5e`,bf(t,8,12,240,84,28),t.fill(),t.fillStyle=`#ffe3e8`,bf(t,12,6,232,80,25),t.fill(),t.textAlign=`center`,t.textBaseline=`middle`,t.fillStyle=`#d6284a`,t.font=`46px "ZCOOL KuaiLe", sans-serif`,t.fillText(`抵押中`,128,48),wx=T_(Hg(e))}let e=new vi(wx);return e.scale.set(1.25,125/256,1),e}function Ex(e){let t=new Wn;t.position.copy(e.lotPos),t.add(K(bx,G(I.pad),0,.02,0)),e.padTop=K(xx,new oo({color:I.padTop,roughness:.7,map:I.sea?Ny():null}),0,.16,0),t.add(e.padTop),e.post=K(new Ha(.045,.045,.85,6),G(11111028),0,.6,0),t.add(e.post),e.sign=Cx(e),e.sign.position.set(0,1.25,0),t.add(e.sign),t.userData.tile=e.i,W.add(t),xh.push(t),e.lot=t}var Dx=[`blue`,`red`,`yellow`,`green`],Ox=[null,[`home_A`,1.15],[`home_B`,1.4],[`castle`,1.6]],kx={home_A:[[6,1]],home_B:[[6,1]],castle:[[3,0]]},Ax={};function jx(e,t){let n=e+`|`+Hd;if(Ax[n])return Ax[n];let r=document.createElement(`canvas`);r.width=r.height=64;let i=r.getContext(`2d`);i.fillStyle=`#000`,i.fillRect(0,0,64,64),i.fillStyle=`#fff`,kx[e].forEach(([e,t])=>i.fillRect(e*8,t*16,8,16));let a=Hg(r);a.flipY=!1;let o=t.clone();return o.emissiveMap=a,o.emissive=new N(16758090),o.emissiveIntensity=(Hd===`night`?.95:.5)*Ud().lamp,Ax[n]=o}function Mx(e,t){let[n,r]=Ox[e],i=n+`_`+Dx[t],a=nm(i),o=rm(i);return a.scale.setScalar(r/Math.max(o.x,o.z)),Hd!==`day`&&a.traverse(e=>{e.isMesh&&(e.material=jx(n,e.material))}),a}var Nx=.7;function Px(e,t){let n=am(`build`),r=n.mixer.clipAction(om(`Build`));r.play();let i=r.getClip().duration;n.obj.position.y=.19,n.obj.rotation.y=Math.atan2(Em.position.x-e.lotPos.x,Em.position.z-e.lotPos.z)+Math.PI/4,n.mixer.setTime(0),e.lot.add(n.obj),_m.add(n.obj),t.scale.setScalar(.01),vm(i*1e3,e=>{let r=e*i;n.mixer.setTime(Math.min(r,i-.001)),t.scale.setScalar(r<Nx?.01:Math.max(.01,yf(Math.min(1,(r-Nx)/.48))))}).then(()=>{e.lot.remove(n.obj),_m.delete(n.obj)})}function Fx(e,t){if(e.house&&=(e.lot.remove(e.house),null),e.owner>=0){e.padTop.material.color.setHex(Td[e.owner]),e.padTop.material.map&&(e.padTop.material.map=null,e.padTop.material.needsUpdate=!0);let n=Mx(e.level,e.owner);n.position.y=.19,e.lot.add(n),e.house=n,e.sign.visible=!1,e.post.visible=!1,t===`pop`?(n.scale.setScalar(.01),vm(480,e=>n.scale.setScalar(Math.max(.01,yf(e))))):t&&Px(e,n)}else e.padTop.material.color.setHex(I.padTop),I.sea&&!e.padTop.material.map&&(e.padTop.material.map=Ny(),e.padTop.material.needsUpdate=!0),e.sign.visible=!0,e.post.visible=!0;e.owner>=0&&e.loan?e.tag||(e.tag=Tx(),e.tag.position.set(0,2.25,0),e.lot.add(e.tag)):e.tag&&=(e.lot.remove(e.tag),null)}function Ix(e,t){let n=H[t.owner],r=F[e.id];if(t.level>=2)t.level--,t.invested=Math.max(t.price,t.invested-Xy(t)),Fx(t,`pop`),X(U(e)+`把`+U(n)+`的`+t.name+`拆成了 `+t.level+` 级`,r);else{let i=t.loan?0:Math.round(t.price*.5/10)*10;n.cash+=i,IC(t),X(U(e)+`把`+U(n)+`的`+t.name+`拆成了空地`+(i?`，`+U(n)+`拿回 ¥`+z(i):``),r)}Sb(t.lotPos,16739133),Of(`lose`)}var Lx=(e,t)=>{let n=Math.abs(e-t)%af;return Math.min(n,af-n)},Rx=[`买了 12 个一模一样的保温杯`,`下单了一台会说话的冰箱`,`囤了一屋子永远用不完的抽纸`,`买了 30 件同款格子衬衫`,`抢到一双限量版拖鞋`,`买了一台只会放烟花的扫地机`];function zx(e,t,n){let r=U(e),i=U(n),a=F[e.id];if(t===`turtle`&&(n.turtle=3,X(r+`对`+i+`用了乌龟卡，`+i+`接下来 3 回合只能走 1 步`,a)),t===`sleep`&&(n.sleep=1,X(r+`对`+i+`用了瞌睡卡，`+i+`下回合要睡觉`,a)),t===`steal`){let t=n.cards.splice(Math.floor(Hy()*n.cards.length),1)[0];e.cards.length-1<qm(e)&&e.cards.push(t),X(r+`从`+i+`手里抢走了`+kd[t].name,a)}if(t===`tax`){let t=Math.round(Math.max(0,n.cash)*.15/10)*10;MC(n,e,t),X(r+`向`+i+`收了 ¥`+z(t)+` 的税`,a)}if(t===`dump`&&(e.dumpTo=n.id,Ib(e),X(r+`用了甩锅卡：下一笔收入会甩给`+i,a)),t===`oops`&&(n.flip=!0,X(r+`对`+i+`用了转账失误卡：`+i+`的下一笔开销会变成收入`,a)),t===`aura`){let e=tf(1e3),t=H.filter(e=>e!==n&&!e.bankrupt&&Lx(e.pos,n.pos)<=3);X(r+`给`+i+`戴上了土豪光环`+(t.length?`：周围 `+t.length+` 个人每人塞给他 ¥`+z(e):`，可惜他周围 3 格内没有人`),a),t.forEach(t=>MC(t,n,e))}Ib(n),Sb(n.mesh.position,Td[e.id]),qb(n.mesh.position,kd[t].icon,`#ffffff`,2.4)}async function Bx(e,t,n){let r=kd[t],i=U(e),a=F[e.id],o=t=>(e.local&&X(t,r.color),!1);switch(t){case`money`:AC(e,1500);break;case`double`:if(e.turtle>0)return o(`乌龟状态下只能走 1 步，这张先留着吧`);if(V.turnFlags.double||V.turnFlags.lucky||V.turnFlags.rampage)return o(`这回合已经是两颗骰子了`);V.turnFlags.double=!0;break;case`remote`:{if(e.turtle>0)return o(`乌龟状态下只能走 1 步，这张先留着吧`);let t=e.human?await Vb(e,`N`,()=>ex(`遥控骰子`,r.color,6,`这回合想走几步？`)):n.n;if(!t)return!1;V.turnFlags.forced=t;break}case`block`:{let t=e.human?await Vb(e,`N`,()=>ex(`放路障`,r.color,6,`放在你前面第几格？`)):n.n;if(!t)return!1;let i=rf[(e.pos+t)%af];if(i.block||i.mine)return o(`那一格已经放了东西`);Ob(i);break}case`mine`:{let t=e.human?await Vb(e,`N`,()=>ex(`埋地雷`,r.color,6,`埋在你身后第几格？后面的人走过去就会踩到。`)):n.n;if(!t)return!1;let i=rf[(e.pos-t+af)%af];if(i.block||i.mine)return o(`那一格已经放了东西`);if(i.i===e.pos)return o(`不能埋在自己脚下`);jb(i);break}case`waste`:if(e.waste)return o(`败家子卡已经在生效了`);e.waste=!0,Ib(e),X(i+`用了败家子卡：到下回合开始前，花的每一笔钱都翻倍`,a);break;case`cart`:{let t=Math.round(rh(e)*.1/tf(10))*tf(10);if(t<=0)return o(`手上已经没钱可花了`);let n=Rx[Math.floor(Hy()*Rx.length)],r=NC(e,t);X(i+`网购剁手，`+n+(r?`，花掉 ¥`+z(r):``),a);break}case`equal`:{let e=Jm(),t=Math.floor(e.reduce((e,t)=>e+t.cash,0)/e.length/10)*10;e.forEach(e=>{let n=t-e.cash;e.cash=t,n&&qb(e.mesh.position,(n>0?`+`:`-`)+z(Math.abs(n)),n>0?`#3ee08b`:`#ff6b85`)}),X(`所有人的现金都变成了 ¥`+z(t),a);break}case`turtle`:case`sleep`:case`steal`:case`tax`:case`dump`:case`oops`:case`aura`:{let r={steal:e=>e.cards.length>0,turtle:e=>e.turtle===0&&e.perk!==`iron`,sleep:e=>e.sleep===0&&e.perk!==`iron`,tax:e=>e.cash>0,oops:e=>!e.flip}[t]||(()=>!0),i=$m(e).filter(r);if(!i.length)return o(t===`steal`?`对手手里都没有道具卡`:(t===`turtle`||t===`sleep`)&&$m(e).some(e=>e.perk===`iron`)?`北极熊勇士不怕这张卡，其他对手也用不了`:`现在没有合适的对手可以用`);let a=e.human?await Vb(e,`W`,()=>tx(t,i)):n.target;if(!a||!i.includes(a))return!1;zx(e,t,a);break}case`demolish`:{let t=rf.filter(t=>t.owner>=0&&t.owner!==e.id&&!Zm(e,H[t.owner]));if(!t.length)return o(`对手还没有地可以拆`);let i=e.human?await Vb(e,`T`,()=>nx(`拆除卡`,r.color,t,e=>e.name+`（`+U(H[e.owner])+`，`+e.level+` 级）`,`拆哪一块？`)):n.tile;if(!i)return!1;Ix(e,i);break}default:return!1}let s=e.cards.indexOf(t);return s>=0&&e.cards.splice(s,1),Of(`card`),[`turtle`,`sleep`,`steal`,`tax`,`demolish`,`equal`,`dump`,`oops`,`aura`,`waste`,`cart`].includes(t)||X(i+`用了`+r.name,a),qb(e.mesh.position,r.icon+` `+r.name,`#ffffff`,2.2),Q(),!0}async function Vx(e){if(V.busy||Xb)return;let t=Km().cards[e];if(!t)return;let n=kd[t],r=V.humanWaiting&&!n.passive,i=n.passive?`<p class="sub">这张不用点，踩到别人的地时会问你要不要用。</p>`:V.humanWaiting?``:`<p class="sub">轮到你的时候，掷骰子之前可以用。</p>`;V.busy=!0,Q();let a=await Qb({title:n.name,color:n.color,html:EO(t)+i,buttons:r?[{label:`再想想`,value:!1,cancel:!0},{label:`使用`,value:!0,primary:!0}]:[{label:`知道了`,value:!1,primary:!0}]});V.busy=!1,a&&V.humanWaiting&&V.humanResolve&&V.humanResolve(`card:`+t),Q()}var Hx=0;document.addEventListener(`visibilitychange`,()=>{if(document.hidden){Hx=Date.now();return}Hx&&!Z.on&&V.started&&!V.gameOver&&(V.clockStart+=Date.now()-Hx),Hx=0});function Ux(){V.clockStart=Date.now(),Hx=0}var Wx=()=>V.timeLimit-(Date.now()-V.clockStart);function Gx(e){let t=Math.max(0,Math.ceil(e/1e3));return Math.floor(t/60)+`:`+String(t%60).padStart(2,`0`)}var Kx=new URL(`bankrupt-barbarian-CEFxVUzI.mp4`,import.meta.url).href,qx=new URL(`bankrupt-candy-dCIZ7xbH.mp4`,import.meta.url).href,Jx=new URL(`bankrupt-goldknight-C-lEFOyp.mp4`,import.meta.url).href,Yx=new URL(`bankrupt-knight-DPVBxs4I.mp4`,import.meta.url).href,Xx=new URL(`bankrupt-mage-XxPw7dkg.mp4`,import.meta.url).href,Zx=new URL(`bankrupt-rogue-BNLDzz1y.mp4`,import.meta.url).href,Qx=new URL(`bankrupt-shadow-spM8d5Vt.mp4`,import.meta.url).href,$x=new URL(`bankrupt-snowbear-BrG9WxwP.mp4`,import.meta.url).href,eS=new URL(`buy-barbarian-Bpp_SSf0.mp4`,import.meta.url).href,tS=new URL(`buy-candy-bhixBSgo.mp4`,import.meta.url).href,nS=new URL(`buy-goldknight-CcDua8Pj.mp4`,import.meta.url).href,rS=new URL(`buy-knight-CyZ5Eh8K.mp4`,import.meta.url).href,iS=new URL(`buy-mage-3nVNORd5.mp4`,import.meta.url).href,aS=new URL(`buy-rogue-Ry6zPpRh.mp4`,import.meta.url).href,oS=new URL(`buy-shadow-BykUCL4T.mp4`,import.meta.url).href,sS=new URL(`buy-snowbear-Dpa6kaE1.mp4`,import.meta.url).href,cS=new URL(`card-barbarian-DvqWo-QT.mp4`,import.meta.url).href,lS=new URL(`card-candy-DaCgTrCE.mp4`,import.meta.url).href,uS=new URL(`card-goldknight-Ca8RTkzK.mp4`,import.meta.url).href,dS=new URL(`card-knight-DUUxMdNN.mp4`,import.meta.url).href,fS=new URL(`card-mage-DQMTYgoC.mp4`,import.meta.url).href,pS=new URL(`card-rogue-BbU2d5dF.mp4`,import.meta.url).href,mS=new URL(`card-shadow-CmxTYumM.mp4`,import.meta.url).href,hS=new URL(`card-snowbear-WggKKfVW.mp4`,import.meta.url).href,gS=new URL(`upgrade-barbarian-Bsmg-451.mp4`,import.meta.url).href,_S=new URL(`upgrade-candy-DnDr1sSy.mp4`,import.meta.url).href,vS=new URL(`upgrade-goldknight-Bn2ondGy.mp4`,import.meta.url).href,yS=new URL(`upgrade-knight-YeUsHDQX.mp4`,import.meta.url).href,bS=new URL(`upgrade-mage-DWhi4h2s.mp4`,import.meta.url).href,xS=new URL(`upgrade-rogue-BHrgqs4O.mp4`,import.meta.url).href,SS=new URL(`upgrade-shadow-D0X54IW8.mp4`,import.meta.url).href,CS=new URL(`upgrade-snowbear-BeKshUx9.mp4`,import.meta.url).href,wS=new URL(`bankrupt-barbarian-asHtvWTL.webm`,import.meta.url).href,TS=new URL(`bankrupt-candy-BhwWgH4_.webm`,import.meta.url).href,ES=new URL(`bankrupt-goldknight-5DgBru5o.webm`,import.meta.url).href,DS=new URL(`bankrupt-knight-BYNCG-kj.webm`,import.meta.url).href,OS=new URL(`bankrupt-mage-DNyLba47.webm`,import.meta.url).href,kS=new URL(`bankrupt-rogue-36MATNt9.webm`,import.meta.url).href,AS=new URL(`bankrupt-shadow-BZMco0Ms.webm`,import.meta.url).href,jS=new URL(`bankrupt-snowbear-Na3WGGBH.webm`,import.meta.url).href,MS=new URL(`buy-barbarian-BN7skUw6.webm`,import.meta.url).href,NS=new URL(`buy-candy-Brw0mWku.webm`,import.meta.url).href,PS=new URL(`buy-goldknight-CwMKt4GS.webm`,import.meta.url).href,FS=new URL(`buy-knight-DqicFUIV.webm`,import.meta.url).href,IS=new URL(`buy-mage-G3Y7Mvk9.webm`,import.meta.url).href,LS=new URL(`buy-rogue-COpyU4kR.webm`,import.meta.url).href,RS=new URL(`buy-shadow-Tw333dNX.webm`,import.meta.url).href,zS=new URL(`buy-snowbear-BYoVZSEu.webm`,import.meta.url).href,BS=new URL(`card-barbarian-3N-Jsv2t.webm`,import.meta.url).href,VS=new URL(`card-candy-CQGhaThb.webm`,import.meta.url).href,HS=new URL(`card-goldknight-j2Nbf6Wc.webm`,import.meta.url).href,US=new URL(`card-knight-BV9t0Nj5.webm`,import.meta.url).href,WS=new URL(`card-mage-DmCMzbKs.webm`,import.meta.url).href,GS=new URL(`card-rogue-D9T1U36i.webm`,import.meta.url).href,KS=new URL(`card-shadow-DOyfuDpW.webm`,import.meta.url).href,qS=new URL(`card-snowbear-LbR0QZ5d.webm`,import.meta.url).href,JS=new URL(`upgrade-barbarian-D4KWd3UF.webm`,import.meta.url).href,YS=new URL(`upgrade-candy-CvkfbhDA.webm`,import.meta.url).href,XS=new URL(`upgrade-goldknight-BI9Jm9aZ.webm`,import.meta.url).href,ZS=new URL(`upgrade-knight-D3vH9vb6.webm`,import.meta.url).href,QS=new URL(`upgrade-mage-CKKSuDvk.webm`,import.meta.url).href,$S=new URL(`upgrade-rogue-DUZy9k-X.webm`,import.meta.url).href,eC=new URL(`upgrade-shadow-DbanAANJ.webm`,import.meta.url).href,tC=new URL(`upgrade-snowbear-BTmlEOfo.webm`,import.meta.url).href,nC=Object.assign({"../assets/video/cutin/bankrupt-barbarian.mp4":Kx,"../assets/video/cutin/bankrupt-barbarian.webm":wS,"../assets/video/cutin/bankrupt-candy.mp4":qx,"../assets/video/cutin/bankrupt-candy.webm":TS,"../assets/video/cutin/bankrupt-goldknight.mp4":Jx,"../assets/video/cutin/bankrupt-goldknight.webm":ES,"../assets/video/cutin/bankrupt-knight.mp4":Yx,"../assets/video/cutin/bankrupt-knight.webm":DS,"../assets/video/cutin/bankrupt-mage.mp4":Xx,"../assets/video/cutin/bankrupt-mage.webm":OS,"../assets/video/cutin/bankrupt-rogue.mp4":Zx,"../assets/video/cutin/bankrupt-rogue.webm":kS,"../assets/video/cutin/bankrupt-shadow.mp4":Qx,"../assets/video/cutin/bankrupt-shadow.webm":AS,"../assets/video/cutin/bankrupt-snowbear.mp4":$x,"../assets/video/cutin/bankrupt-snowbear.webm":jS,"../assets/video/cutin/buy-barbarian.mp4":eS,"../assets/video/cutin/buy-barbarian.webm":MS,"../assets/video/cutin/buy-candy.mp4":tS,"../assets/video/cutin/buy-candy.webm":NS,"../assets/video/cutin/buy-goldknight.mp4":nS,"../assets/video/cutin/buy-goldknight.webm":PS,"../assets/video/cutin/buy-knight.mp4":rS,"../assets/video/cutin/buy-knight.webm":FS,"../assets/video/cutin/buy-mage.mp4":iS,"../assets/video/cutin/buy-mage.webm":IS,"../assets/video/cutin/buy-rogue.mp4":aS,"../assets/video/cutin/buy-rogue.webm":LS,"../assets/video/cutin/buy-shadow.mp4":oS,"../assets/video/cutin/buy-shadow.webm":RS,"../assets/video/cutin/buy-snowbear.mp4":sS,"../assets/video/cutin/buy-snowbear.webm":zS,"../assets/video/cutin/card-barbarian.mp4":cS,"../assets/video/cutin/card-barbarian.webm":BS,"../assets/video/cutin/card-candy.mp4":lS,"../assets/video/cutin/card-candy.webm":VS,"../assets/video/cutin/card-goldknight.mp4":uS,"../assets/video/cutin/card-goldknight.webm":HS,"../assets/video/cutin/card-knight.mp4":dS,"../assets/video/cutin/card-knight.webm":US,"../assets/video/cutin/card-mage.mp4":fS,"../assets/video/cutin/card-mage.webm":WS,"../assets/video/cutin/card-rogue.mp4":pS,"../assets/video/cutin/card-rogue.webm":GS,"../assets/video/cutin/card-shadow.mp4":mS,"../assets/video/cutin/card-shadow.webm":KS,"../assets/video/cutin/card-snowbear.mp4":hS,"../assets/video/cutin/card-snowbear.webm":qS,"../assets/video/cutin/upgrade-barbarian.mp4":gS,"../assets/video/cutin/upgrade-barbarian.webm":JS,"../assets/video/cutin/upgrade-candy.mp4":_S,"../assets/video/cutin/upgrade-candy.webm":YS,"../assets/video/cutin/upgrade-goldknight.mp4":vS,"../assets/video/cutin/upgrade-goldknight.webm":XS,"../assets/video/cutin/upgrade-knight.mp4":yS,"../assets/video/cutin/upgrade-knight.webm":ZS,"../assets/video/cutin/upgrade-mage.mp4":bS,"../assets/video/cutin/upgrade-mage.webm":QS,"../assets/video/cutin/upgrade-rogue.mp4":xS,"../assets/video/cutin/upgrade-rogue.webm":$S,"../assets/video/cutin/upgrade-shadow.mp4":SS,"../assets/video/cutin/upgrade-shadow.webm":eC,"../assets/video/cutin/upgrade-snowbear.mp4":CS,"../assets/video/cutin/upgrade-snowbear.webm":tC}),rC=document.createElement(`video`).canPlayType(`video/webm; codecs="vp9"`)?`webm`:`mp4`,iC=(e,t)=>nC[`../assets/video/cutin/${e}-${t.model}.${rC}`],aC=new Map;function oC(e){for(let t of[`buy`,`upgrade`,`card`]){let n=iC(t,e);if(!n||aC.has(n))continue;let r=document.createElement(`video`);r.muted=!0,r.preload=`auto`,r.src=n,aC.set(n,r)}}var sC=Promise.resolve();function cC(e,t,n){let r=iC(e,t);if(!r||navigator.webdriver||V.speed>1&&e!==`bankrupt`)return Promise.resolve(!1);let i=V.gen,a=()=>new Promise(e=>{if(i!==V.gen)return e(!1);let a=R(`#cutin`),o=R(`#cutinVideo`);R(`#cutinCap`).textContent=n,a.style.setProperty(`--c`,[`#3d8bff`,`#ff4f6d`,`#ffae1f`,`#25c178`][t.id]);let s=!1,c=0,l=t=>{s||(s=!0,clearTimeout(c),o.onended=o.onerror=o.oncanplay=null,a.onclick=null,a.classList.remove(`show`),setTimeout(()=>{a.classList.contains(`show`)||(a.hidden=!0)},260),e(t))},u=()=>{o.oncanplay=null,a.hidden=!1,requestAnimationFrame(()=>a.classList.add(`show`));let e=o.play();e&&e.catch(()=>l(!1)),clearTimeout(c),c=setTimeout(()=>l(!0),(o.duration||3)*1e3+600)};o.onended=()=>l(!0),o.onerror=()=>l(!1),a.onclick=()=>l(!0),o.src=r,o.currentTime=0,o.readyState>=3?u():(o.oncanplay=u,c=setTimeout(()=>l(!1),1500))});return sC=sC.then(a,a),sC}var lC=`#e5a50a`;async function uC(){if(V.busy||Xb||!V.started)return;let e=Km(),t=rf.filter(t=>t.owner===e.id);if(!t.length)return;let n=V.humanWaiting&&!ef(),r=e=>e.loan?e.name+`（抵押中）赎回要 ¥`+z(eh(e)):e.name+`（`+e.level+` 级）抵押借 ¥`+z(LC(e)),i=n?t.map(e=>({label:r(e),value:e})):[];i.push({label:n?`先不用`:`知道了`,value:null,cancel:!0,primary:!0});let a=(ef()?`<p>🙃 逆向大富翁里地不能抵押，也不能赎回。</p>`:`<p>抵押：银行按投入的一半借钱给你，这块地不收租、不能升级；赎回要还借款的 1.1 倍。</p>`)+(n?`<p class="sub">点一块地：没抵押的就抵押，抵押中的就赎回。你现在有 ¥`+z(e.cash)+`。</p>`:`<ul class="rules">`+t.map(e=>`<li>`+(ef()?e.name+`（`+e.level+` 级，别人停下你要倒贴给他 ¥`+z(Yy(e))+`）`:r(e))+`</li>`).join(``)+`</ul>`+(ef()?``:`<p class="sub">轮到你的时候，掷骰子之前可以抵押或赎回。</p>`));V.busy=!0,Q();let o=await Qb({title:`我的地产`,color:F[e.id],html:a,buttons:i,list:!0});if(V.busy=!1,Q(),o&&V.humanWaiting&&V.humanResolve){if(o.loan&&e.cash<eh(o)){X(`现金不够，赎回`+o.name+`要 ¥`+z(eh(o)),F[e.id]);return}V.humanResolve((o.loan?`redeem:`:`mort:`)+o.i)}}function dC(e,t){let[n,r]=t.split(`:`),i=rf[+r],a=F[e.id];if(!i||i.owner!==e.id||ef())return!1;if(n===`mort`&&!i.loan){let t=RC(e,i);qb(e.mesh.position,`+`+z(t),`#3ee08b`),Of(`coin`),X(U(e)+`把`+i.name+`抵押给银行，借了 ¥`+z(t),a)}else if(n===`redeem`&&i.loan&&e.cash>=eh(i)){let t=eh(i);e.cash-=t,i.loan=0,Fx(i,`pop`),Of(`build`),qb(e.mesh.position,`-`+z(t),`#ff6b85`),X(U(e)+`花 ¥`+z(t)+` 赎回了`+i.name,a)}else return!1;return Q(),!0}function fC(e,t,n,r,i){let a=(n?[100,500,1e3].map(e=>r+e).filter(e=>e<=t.cash):[i]).map(e=>({label:`出价 ¥`+z(e),value:e}));a.push({label:`不要了`,value:null,cancel:!0,primary:!0});let o=n?`<p class="big">`+U(n)+`出价 <span class="num">¥`+z(r)+`</span></p>`:`<p class="big">起拍价 <span class="num">¥`+z(i)+`</span></p>`;return Qb({title:`拍卖：`+e.name,color:lC,html:o+`<p class="sub">地价 ¥`+z(e.price)+`，买下后别人停在这里要付 ¥`+z(Jy(e,1))+`。你现在有 ¥`+z(t.cash)+`。</p>`,buttons:a,list:!0})}async function pC(e,t,n){let r=Math.max(100,Math.round(e.price*.5/100)*100),i=[];for(let e=0;e<H.length;e++){let r=H[(t.id+e)%H.length];!r.bankrupt&&r!==n&&i.push(r)}let a=i.filter(e=>e.cash>=r),o=0,s=null;if(!a.length){X(e.name+`没人买得起，流拍了`,lC);return}X(e.name+`开始拍卖，起拍价 ¥`+z(r),lC),Sb(e.lotPos,15049994);let c=new Map;for(let t of a)t.human||c.set(t,Math.min(t.cash-2e3,Math.round(e.price*(.75+.3*Hy())/100)*100));for(let t=0;t<60&&!(s?a.length<=1:!a.length);t++){let t=!1;for(let n of[...a]){if(n===s)continue;if(s&&a.length<=1)break;let i=s?o+100:r;if(n.cash<i){a=a.filter(e=>e!==n);continue}let l;if(n.human)l=await Vb(n,`A`,()=>fC(e,n,s,o,r),()=>null);else{let e=c.get(n),t=s?o+(e-o>=1500?500:100):r;l=t<=e?t:null,await hm(260)}if(!(typeof l==`number`&&l<=n.cash&&(s?[100,500,1e3].includes(l-o):l===r))){a=a.filter(e=>e!==n),(!n.human||!n.local)&&X(U(n)+`不要了`,F[n.id]);continue}o=l,s=n,t=!0,qb(n.mesh.position,`¥`+z(l),`#ffd23f`,2.2),X(U(n)+`出价 ¥`+z(l),F[n.id])}if(!t&&!s)break}if(!s){X(`没人出价，`+e.name+`流拍了`,lC);return}s.cash-=o,e.owner=s.id,e.level=1,e.invested=o,qb(s.mesh.position,`-`+z(o),`#ff6b85`),Q(),s.local&&await cC(`buy`,s,U(s)+`拍下了`+e.name+`！`),Fx(e,!0),Of(`build`),Sb(e.lotPos,Td[s.id]),X(U(s)+`花 ¥`+z(o)+` 拍下了`+e.name,F[s.id]),Q(),await hm(1100)}var mC=[];function hC(){let e=R(`#players`);e.innerHTML=``,mC=H.map(t=>{let n=document.createElement(`div`);n.className=`pc`,n.style.setProperty(`--c`,F[t.id]),n.style.setProperty(`--tc`,Ed[t.id]),n.setAttribute(`role`,`button`),n.tabIndex=0;let r=Jd&&Km().local&&Qm(Km())===t;return n.innerHTML=`<img class="ava" alt=""><div class="info"><div class="nm"><span class="n"></span>`+(t.local?`<span class="you">你</span>`:r?`<span class="you mate">🤝<span class="mtx">队友</span></span>`:``)+`</div><div class="cash"></div><div class="tot"></div></div><div class="dots"></div><div class="chg"><i></i><i></i><i></i></div><div class="st"></div>`,n.querySelector(`.n`).textContent=t.nick||t.name,t.avatar&&(n.querySelector(`.ava`).src=t.avatar),n.addEventListener(`click`,()=>kO(t)),n.addEventListener(`keydown`,e=>{e.key===`Enter`&&kO(t)}),e.appendChild(n),n}),R(`#bars`).innerHTML=H.map(e=>`<div class="bar" style="--c:`+F[e.id]+`"><i></i></div>`).join(``)}function gC(){let e=R(`#teamBar`);if(e.hidden=!Jd,document.body.classList.toggle(`teams`,Jd),!Jd)return;e.firstChild||(e.innerHTML=Ym.map((e,t)=>`<span class="tn s`+t+`" style="--a:`+F[e.seats[0]]+`;--b:`+F[e.seats[1]]+`"><b>`+e.name+`</b><span class="tv"></span></span>`).join(`<span class="tt"><i class="s0"></i><i class="s1"></i></span>`));let t=_C(),n=[0,1].map(t?oh:ih),r=n[0]+n[1],i=Km().local?Xm(Km()):-1;e.setAttribute(`aria-label`,Ym.map((e,t)=>e.name+` ¥`+z(n[t])).join(`，`)),[0,1].forEach(r=>{let a=e.querySelector(`.tn.s`+r);a.querySelector(`.tv`).textContent=!t&&ah(r)?`破产`:Sf(n[r]),a.classList.toggle(`mine`,r===i),a.classList.toggle(`lead`,V.started&&(t?n[r]<n[1-r]:n[r]>n[1-r]))}),e.querySelector(`.tt .s0`).style.flexGrow=r?Math.max(.06,n[0]/r):1,e.querySelector(`.tt .s1`).style.flexGrow=r?Math.max(.06,n[1]/r):1}var _C=()=>ef()&&!V.campaign;function vC(){let e=V.campaign;if(e)return`共 `+e.days+` 天`;if(qd===`poor`)return[`共 `+of+` 天 · 先花光`,`先花光`];if(qd===`time`){if(!V.started)return`限时 `+Math.round(V.timeLimit/6e4)+` 分钟`;let e=Wx();return e>0?`剩 `+Gx(e):V.gameOver?`时间到`:`最后一天`}return qd===`rich`?Jd?`先到 20 万`:`先到 10 万`:qd===`last`?Jd?`剩一队`:`只剩一人`:`共 `+of+` 天`}function yC(){let e=R(`#of`),t=vC();Array.isArray(t)?e.innerHTML=`<span class="full">`+t[0]+`</span><span class="short">`+t[1]+`</span>`:e.textContent=t,e.classList.toggle(`urgent`,qd===`time`&&!V.campaign&&V.started&&!V.gameOver&&Wx()<6e4)}setInterval(()=>{V.started&&!V.gameOver&&qd===`time`&&!V.campaign&&yC()},1e3);function Q(){let e=_C(),t=H.map(t=>t.bankrupt?0:e?rh(t):th(t)),n=Math.max(1,...t),r=H.filter(e=>!e.bankrupt).sort((n,r)=>e?t[n.id]-t[r.id]:t[r.id]-t[n.id]),i=r.length>1&&t[r[0].id]!==t[r[1].id]?r[0].id:-1,a=e?oh:ih,o=Jd&&a(0)!==a(1)?a(0)<a(1)===e?0:1:-1;R(`#rank .ttl`).textContent=e?`谁最穷`:`资产排名`;let s=document.querySelectorAll(`#bars .bar`);H.forEach((r,a)=>{let c=mC[a];if(!c)return;c.classList.toggle(`active`,V.started&&!V.gameOver&&a===V.cur),c.classList.toggle(`out`,r.bankrupt),c.classList.toggle(`lead`,V.started&&(Jd?Xm(r)===o&&!r.bankrupt:a===i)),c.querySelector(`.cash`).innerHTML=`<span class="full">¥`+z(r.cash)+`</span><span class="short">`+Sf(r.cash)+`</span>`,c.querySelector(`.tot`).textContent=e?`名下 `+rf.filter(e=>e.owner===r.id).length+` 块地`:`总资产 ¥`+z(t[a]),c.querySelector(`.dots`).innerHTML=Array.from({length:qm(r)},(e,t)=>`<i class="`+(t<r.cards.length?`on`:``)+`"></i>`).join(``);let l=c.querySelector(`.chg`);[...l.children].forEach((e,t)=>e.classList.toggle(`on`,t<r.charge)),l.classList.toggle(`full`,r.charge>=3);let u=c.querySelector(`.st`),d=(r.god?Nb[r.god.k][0]:``)+(r.jail>0?`🚔`:``)+(r.hosp>0?`🏥`:``)+(r.turtle>0?`🐢`+r.turtle:``)+(r.sleep>0?`💤`:``)+(r.dumpTo>=0?`🍳`:``)+(r.waste?`🛍️`:``)+(r.flip?`🔁`:``);u.textContent=d,u.classList.toggle(`on`,!!d),s[a]&&(s[a].querySelector(`i`).style.height=Math.max(8,t[a]/n*100)+`%`,s[a].classList.toggle(`lead`,V.started&&a===i))});let c=String(V.round).padStart(3,`0`);R(`#digits`).innerHTML=c.split(``).map(e=>`<span>`+e+`</span>`).join(``),R(`#wk`).textContent=Dd[(V.round-1)%7],yC(),gC();let l=H[V.cur];R(`#turnAva`).src=l.avatar||``,R(`#turnText`).textContent=V.started?V.gameOver?`这局结束了`:l.local?V.humanWaiting?`轮到你啦`:`你在行动`:Z.waitFor===l?`等`+(l.nick||l.name)+`决定…`:(l.nick||l.name)+` 行动中…`:`准备开始`,R(`#dice`).disabled=!V.humanWaiting||V.busy,R(`#diceLabel`).textContent=V.humanWaiting?V.turnFlags.lucky||V.turnFlags.double?`掷两颗`:`掷骰子`:V.gameOver?`结束`:`等一等`;let u=Km(),d=R(`#skill`);d.querySelector(`.sic`).textContent=u.skillIcon,d.querySelector(`.sn`).textContent=u.charge>=3?`发动`:`技能`,[...d.querySelectorAll(`.pips i`)].forEach((e,t)=>e.classList.toggle(`on`,t<u.charge)),d.classList.toggle(`ready`,u.charge>=3),d.classList.toggle(`go`,u.charge>=3&&V.humanWaiting&&!V.busy),d.setAttribute(`aria-label`,`技能「`+u.skillName+`」，充能 `+u.charge+`/3`),SC()}function bC(e,t,n,r,i,a){let o=document.createElement(`button`);return o.className=`chip`+(a?` idle`:``),o.style.setProperty(`--cc`,n),o.innerHTML=`<span class="ic">`+e+`</span><span class="cn">`+t+`</span>`,o.setAttribute(`aria-label`,r),o.addEventListener(`click`,i),o}function xC(){let e=Km(),t=R(`#chips`);if(t.innerHTML=``,!V.started)return;t.appendChild(bC(`🎟️`,String(e.pts),`#ffd86b`,`点券 `+e.pts+`，在道具屋买卡用`,OO));let n=rf.filter(t=>t.owner===e.id),r=n.filter(e=>e.loan).length;if(n.length&&t.appendChild(bC(`🏠`,r?`押 `+r:`地产`,`#8fd3ff`,`我的地产：`+n.length+` 块，抵押中 `+r+` 块`,uC,!V.humanWaiting)),V.campaign){let e=CO();t.appendChild(bC(`🏆`,e,`#e5a50a`,`这关的目标，现在`+e,wO))}}function SC(){let e=Km(),t=R(`#hand`);if(t.innerHTML=``,xC(),V.started){if(!e.cards.length){let e=document.createElement(`div`);e.className=`hand-empty`,e.textContent=`还没有道具卡，停在礼物格可以拿，道具屋可以用点券买`,t.appendChild(e);return}e.cards.forEach((e,n)=>{let r=kd[e],i=document.createElement(`button`);i.className=`card`+(V.humanWaiting&&!r.passive?``:` idle`),i.style.setProperty(`--cc`,r.color),i.innerHTML=`<span class="ic">`+r.icon+`</span><span class="cn">`+r.name+`</span>`,i.setAttribute(`aria-label`,r.name+`：`+ix(r.desc)),i.addEventListener(`click`,()=>Vx(n)),t.appendChild(i)})}}var CC=e=>Math.min(8,3+Math.floor(e/tf(800)));function wC(e,t){return nh(e,`rich`)?(qb(e.mesh.position,`💰 财神 ×2`,`#ffd23f`,2.7),t*2):t}function TC(e,t){return nh(e,`poor`)?(qb(e.mesh.position,`💸 穷神 ×2`,`#c9b8ff`,2.7),t*2):t}var EC=e=>`+`+z(e)+(ef()?` 😭`:``),DC=e=>`-`+z(e)+(ef()?` 😄`:``);function OC(e){if(!(e.dumpTo>=0))return e;let t=H[e.dumpTo];return e.dumpTo=-1,Ib(e),!t||t===e||t.bankrupt?e:(qb(e.mesh.position,`🍳 甩锅`,`#ffffff`,2.9),X(U(e)+`用甩锅卡，把这笔钱甩给了`+U(t),F[e.id]),t)}function kC(e,t){return e.flip?(e.flip=!1,Ib(e),X(U(e)+`转账失误：¥`+z(t)+` 没花出去，反倒打进了自己的账户`,F[e.id]),AC(e,t),0):e.waste?(qb(e.mesh.position,`🛍️ 败家 ×2`,`#ffd1e8`,3.1),t*2):t}function AC(e,t){return e=OC(e),t=wC(e,t),e.anim.once(`Cheer`),Tb(e,CC(t)),e.cash+=t,qb(e.mesh.position,EC(t),`#3ee08b`),Of(`coin`),Q(),t}function jC(e,t){return t=kC(e,TC(e,t)),t?(e.anim.once(`Hit_A`),e.cash-=t,qb(e.mesh.position,DC(t),`#ff6b85`),Q(),t):0}function MC(e,t,n){if(n<=0)return 0;let r=jC(e,n);if(!r)return 0;t=OC(t);let i=wC(t,n);return t.anim.once(`Cheer`),Tb(t,CC(i)),t.cash+=i,qb(t.mesh.position,EC(i),`#3ee08b`),Of(`coin`),Q(),r}function NC(e,t){let n=kC(e,t);return n&&(e.cash-=n,qb(e.mesh.position,DC(n),`#ff6b85`)),Q(),n}var PC=()=>ef()?jd:Ad;function FC(e){let t=1+ +(e.perk===`cards`&&Hy()<.5);for(let n=0;n<t;n++){if(e.cards.length>=qm(e)){X(U(e)+`的道具卡满了，拿不下了`,F[e.id]);return}let t=Uy(PC());e.cards.push(t),e.anim.once(`PickUp`),Of(`card`),qb(e.mesh.position,kd[t].icon+` `+kd[t].name,`#ffffff`,1.7+n*.6),X(U(e)+`拿到一张`+kd[t].name+(n?`（魔法师多拿一张）`:``),F[e.id])}Q()}function IC(e){e.owner=-1,e.level=0,e.invested=0,e.loan=0,Fx(e,!1)}var LC=e=>Math.round(e.invested*.5/10)*10;function RC(e,t){let n=LC(t);return t.loan=n,e.cash+=n,Fx(t,!1),Q(),n}async function zC(e){if(e.bankrupt||e.cash>=0)return;if(e.bank>0){let t=Math.min(e.bank,-e.cash);e.bank-=t,e.cash+=t,X(U(e)+`钱不够，从银行取了 ¥`+z(t),F[e.id]),Q(),await hm(450)}if(ef()){e.cash<0&&(e.cash=0,X(U(e)+`的钱全花光了，不够的一笔勾销`,F[e.id]),Q());return}let t=rf.filter(t=>t.owner===e.id&&!t.loan).sort((e,t)=>e.invested-t.invested);for(let n of t){if(e.cash>=0)break;let t=RC(e,n);X(U(e)+`钱不够，把`+n.name+`抵押给银行，借了 ¥`+z(t),F[e.id]),await hm(550)}e.cash<0&&(rf.filter(t=>t.owner===e.id).forEach(IC),e.bankrupt=!0,e.cash=0,e.bank=0,e.cards=[],e.turtle=0,e.sleep=0,e.jail=0,e.hosp=0,e.god=null,Ib(e),X(U(e)+`破产了`,F[e.id]),Of(`lose`),e.anim.hold(`Death_A`),await cC(`bankrupt`,e,U(e)+`破产了……`)||await hm(500),await vm(500,t=>e.body.scale.setScalar(Math.max(.001,1-t))),e.mesh.visible=!1),Q()}var BC={pot:xd,tickets:[]};function VC(){BC.pot=tf(xd),BC.tickets=[]}var HC=()=>(Math.floor(V.round/5)+1)*5;async function UC(e){let t=U(e),n=F[e.id],r=tf(500);if(e.cash<r){X(t+`的钱不够买彩票`,n);return}let i;if(i=e.human?await Vb(e,`L`,()=>ex(Od.lottery.label,Od.lottery.color,10,`花 ¥`+z(r)+` 买一注，选一个号码。现在奖池 ¥`+z(BC.pot)+`，第 `+HC()+` 天开奖。`),()=>null):ef()||e.cash>=4e3&&Hy()<.7?1+Math.floor(Hy()*10):null,!Number.isInteger(i)||i<1||i>10){e.local||X(t+`路过彩票站，没有买`,n);return}ef()?NC(e,r):e.cash-=r,BC.pot+=r,BC.tickets.push([e.id,i]),qb(e.mesh.position,`🎫 `+i+` 号`,`#ffd86b`,2.2),X(t+`买了一注彩票：`+i+` 号，奖池 ¥`+z(BC.pot),n),Q(),await hm(350)}async function WC(){if(!BC.tickets.length)return;let e=1+Math.floor(Hy()*10),t=BC.tickets.filter(([e])=>H[e].local).map(([,e])=>e),n=BC.tickets.filter(([t,n])=>n===e&&!H[t].bankrupt).map(([e])=>H[e]);BC.tickets=[],Of(`skill`);let r;if(!n.length)r=`开出 `+e+` 号，没人猜中，奖池 ¥`+z(BC.pot)+` 留到下一期`;else{let t=Math.floor(BC.pot/n.length/10)*10;r=`开出 `+e+` 号，`+[...new Set(n.map(U))].join(`、`)+`猜中了，`+(n.length>1?`每注分到`:`拿走`)+` ¥`+z(t),n.forEach(e=>AC(e,t)),BC.pot=tf(xd)}X(`彩票开奖：`+r,Od.lottery.color),t.length?await Qb({title:`彩票开奖`,color:Od.lottery.color,html:`<p class="big">`+r+`。</p><p class="sub">你买的号码：`+t.join(`、`)+`。</p>`}):await hm(600),Q()}var GC={none(){},guardian(){let e=new Wn;e.position.set(L.cx,-6,L.backZ-9.4),W.add(e);let t=new oo({color:10788275,flatShading:!0,roughness:.95}),n=new oo({color:5853803,flatShading:!0,roughness:.95}),r=(t,n,r,i,a,o,s,c)=>{let l=new Li(t,n);return l.position.set(r,i,a),l.scale.set(o||1,s||1,c||1),l.receiveShadow=!0,e.add(l),l};r(Vg(7),t,0,-1,-3),r(Vg(5.5),t,0,7.5,0,1.15,.95,.8),r(Vg(3.1),t,0,5.6,3.1,1.35,.78,.75),r(q(8.6,1.4,2),t,0,9.1,3.3).rotation.x=-.1,[-1,1].forEach(e=>{r(q(2.1,.38,.6),n,e*2.2,8,4.15).rotation.z=-e*.16,r(new Ja(.32,8,6),n,e*.7,6.15,5.25),r(Vg(1.5),t,e*6.9,7.8,-.5,.45,1,.8);let i=new M(e*6.5,2,0),a=new M(e*4.9,5.9,5.8),o=a.clone().sub(i),s=o.length();r(Bg(1,1.4,s,8),t,(i.x+a.x)/2,(i.y+a.y)/2,(i.z+a.z)/2).quaternion.setFromUnitVectors(Fd,o.normalize()),r(Vg(1.45),t,e*4.6,6.1,6.8,1.3,.85,1.15);for(let n=0;n<4;n++)r(Vg(.42),t,e*4.6+(n-1.5)*.58,6.5,7.85,1,.8,1.2)}),r(new Ya(1.55,.28,8,20,Math.PI),n,0,5.25,5.25).rotation.set(.35,0,Math.PI);for(let e=0;e<9;e++){let t=B(0,Math.PI*2),n=L.radius+B(4,10),r=ib(B(.4,.8),.1,B(.6,1.2),100+e,6),i=B(-2,2.5);r.position.set(L.cx+Math.cos(t)*n,i,L.cz+Math.sin(t)*n*.8),W.add(r);let a=B(.5,1),o=B(0,6);Sh.push(e=>{r.position.y=i+Math.sin(e*a+o)*.25})}},fuji(){let e=L.backZ-150,t=L.cx+20,n=new N(Ud().sky?Ud().sky[1]:I.sky[1]),r=(e,t)=>new Ti({color:new N(e).lerp(n,t),fog:!1}),i=new Li(new Ua(70,36,12,1),r(7308992,.45));i.position.set(t,17,e),W.add(i);let a=new Li(new Ua(25.5,13,12,1),r(16251391,.25));a.position.set(t,28.6,e),W.add(a),[[-90,16,8032184],[85,12,8360890],[-40,10,8755389]].forEach(([n,i,a])=>{let o=new Li(new Ua(i*2.4,i,9),r(a,.5));o.position.set(t+n,i/2-1,e+25),W.add(o)})},tower(){let e=new Wn;e.position.set(J.towerAt.x,-.12,J.towerAt.z),W.add(e);let t=new oo({color:9071701,flatShading:!0,roughness:.8}),n=(n,r,i,a)=>{let o=new Li(n,t);return o.position.set(r,i,a),o.castShadow=!0,e.add(o),o};[-1,1].forEach(e=>[-1,1].forEach(t=>{let r=new M(e*3.4,0,t*3.4),i=new M(e*1.25,7.5,t*1.25),a=i.clone().sub(r),o=a.length();n(Bg(.32,.5,o,4),(r.x+i.x)/2,o/2*(a.y/o),(r.z+i.z)/2).quaternion.setFromUnitVectors(Fd,a.normalize())})),[[0,3.1,0],[0,-3.1,0],[3.1,0,Math.PI/2],[-3.1,0,Math.PI/2]].forEach(([e,t,r])=>{let i=n(new Ya(2,.18,6,16,Math.PI),e,1.6,t);i.rotation.y=r}),n(q(5.2,.45,5.2),0,7.6,0),n(Bg(.75,1.7,7.4,4),0,11.5,0).rotation.y=Math.PI/4,n(q(2.4,.35,2.4),0,15.3,0),n(Bg(.16,.75,6.4,4),0,18.7,0).rotation.y=Math.PI/4,n(q(.55,.5,.55),0,22.1,0),n(Bg(.04,.05,1.8,4),0,23.2,0)},pyramids(){let e=new oo({color:14858605,flatShading:!0,roughness:.95});J.pyr.forEach(([t,n,r,i])=>{let a=new Li(new Ua(r,i,4),e);a.rotation.y=Math.PI/4,a.position.set(t,i/2-.12,n),a.castShadow=!0,a.receiveShadow=!0,W.add(a)})},glacier(){let e=new oo({color:15266299,flatShading:!0,roughness:.6}),t=new oo({color:12178670,flatShading:!0,roughness:.5});for(let n=0;n<9;n++){let r=B(7,16),i=new Li(new Ua(r*B(.6,.9),r,Math.floor(B(5,7))),n%3?e:t);i.position.set(L.cx+(n-4)*9+B(-3,3),r/2-.12,L.backZ-B(16,34)),i.rotation.y=B(0,3),W.add(i)}[[4063152,0,28],[10120191,1.7,33]].forEach(([e,t,n])=>{let r=new Ka(110,12,40,1),i=r.attributes.position,a=[],o=new N(e),s=new N(0);for(let e=0;e<i.count;e++){let t=i.getY(e)>0?s:o;a.push(t.r,t.g,t.b)}r.setAttribute(`color`,new Ir(a,3));let c=Float32Array.from(i.array),l=new Li(r,new Ti({vertexColors:!0,transparent:!0,opacity:.8,blending:2,depthWrite:!1,side:2,fog:!1}));l.position.set(L.cx,n,L.backZ-70),l.rotation.x=.25,W.add(l),Sh.push(e=>{for(let n=0;n<i.count;n++)i.setZ(n,c[n*3+2]+Math.sin(c[n*3]*.07+e*.4+t)*6);i.needsUpdate=!0})})}},KC={islet(e){let t=vf(e/3.3,1,2.2),n=new Wn;n.scale.setScalar(t),W.add(n);let r=ib(2.2,.5,3.4,77,9);r.position.y=-1.7,n.add(r);let i=ib(1.1,.3,1.8,78,7);i.position.set(1.9,-.6,.9),n.add(i);let a=G(15331583),o=G(7306751,{roughness:.5});n.add(K(q(1.5,1,1),a,0,.5,0)),[[-.8,1.5,.15],[.8,1.3,.15],[0,2.2,-.45]].forEach(([e,t,r])=>{n.add(K(Bg(.32,.36,t,12),a,e,t/2,r)),n.add(K(new Ua(.44,.65,12),o,e,t+.32,r)),n.add(K(q(.26,.16,.03),G(16765503),e+.14,t+.86,r)),n.add(K(Bg(.015,.015,.4,5),G(16777215),e,t+.8,r))}),n.add(K(q(.32,.5,.04),G(8017475),0,.25,.51)),Sh.push(e=>{n.position.y=-1.1*t+Math.sin(e*.8)*.15})},shrine(e){let t=vf(e/3.6,.8,1.8),n=new Wn;n.position.set(0,-.12,0),n.scale.setScalar(t),W.add(n),n.add(K(q(3.6,.16,3.6),G(14208443),0,.08,0));let r=G(15787730),i=G(4146514,{roughness:.6,flatShading:!0}),a=G(14239549),o=.16;for(let e=0;e<4;e++){let t=1.4-e*.24;n.add(K(q(t,.48,t),e%2?r:a,0,o+.24,-.5));let s=K(new Ua(t*.95+.42,.3,4),i,0,o+.62,-.5);s.rotation.y=Math.PI/4,n.add(s),o+=.74}n.add(K(Bg(.04,.06,.9,6),G(15185994,{metalness:.3}),0,o+.3,-.5));let s=G(14697786),c=G(2959918);[-.62,.62].forEach(e=>n.add(K(Bg(.08,.1,1.35),s,e,.84,1.3))),n.add(K(q(1.8,.12,.2),c,0,1.56,1.3)),n.add(K(q(1.6,.1,.14),s,0,1.44,1.3)),n.add(K(q(1.4,.08,.1),s,0,1.2,1.3)),n.add(K(Bg(.6,.6,.04,18),gb(9425919,3842303,.2),1.25,.18,.6)),[[-1.3,1.2],[1.3,-1.3]].forEach(([e,n])=>xb.lantern(e*t,n*t,t*.9)),e>5&&[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([t,n])=>xb.sakura(t*(e-1),n*(e-1.3),1.1))},garden(e){let t=vf(e/3.4,.9,2);xb.fountain(0,0,1.5*t);let n=Math.min(e-.8,2.6*t);for(let e=0;e<4;e++){let r=e*Math.PI/2+Math.PI/4;xb.flowerbed(Math.cos(r)*n,Math.sin(r)*n,t).rotation.y=-r}let r=G(6271855,{flatShading:!0});for(let e=0;e<4;e++){let i=e*Math.PI/2,a=hb(Math.cos(i)*n,Math.sin(i)*n,t,0);Y(a,q(.4,.3,.4),G(14140067),0,.15,0),Y(a,new Ua(.32,.9,8),r,0,.75,0)}e>5&&(xb.bench(-2.2*t,2.8*t,1),xb.bench(2.2*t,2.8*t,1),xb.lamp(-3*t,-1*t,1),xb.lamp(3*t,-1*t,1))},oasis(e){let t=vf(e/3.4,.9,2),n=new Li(Bg(1.4*t,1.4*t,.05,24),gb(6210792,2789568,.25));n.position.set(0,-.09,0),n.receiveShadow=!0,W.add(n);let r=new Li(Bg(1.7*t,1.7*t,.03,24),G(15123594));r.position.set(0,-.11,0),W.add(r);for(let e=0;e<5;e++){let n=e/5*Math.PI*2+.4;xb.palm(Math.cos(n)*2.1*t,Math.sin(n)*2.1*t,B(.9,1.15)*t)}e>4&&(xb.obelisk(-e*.6,-e*.45,1.1),xb.obelisk(e*.6,-e*.45,1.1),xb.tent(e*.55,e*.45,1))},sandbar(e){xb.umbrella(e*.15,.05,1.1),e>5&&xb.umbrella(-e*.4,e*.3,1)},icefield(e){let t=vf(e/3.4,.9,2);xb.iceCrystal(0,-.4*t,1.6*t),xb.iceCrystal(-.9*t,.2*t,1*t),xb.igloo(1.4*t,.6*t,1.3*t),xb.snowman(-1.5*t,1.1*t,1),e>5&&(xb.igloo(-2.6*t,-1.2*t,1.1*t),xb.snowPine(2.6*t,-1.6*t,1.2),xb.snowPine(-2.4*t,2.2*t,1.1))}};function qC(e){return xb[_f(e?I.tall:I.low)]}function JC(e){let t=uf(e.gx,e.gz),n=t.x,r=t.z;if(!I.sea||e.deco!==`trees`&&e.deco!==`small`){if(I.sea&&e.deco===`park`){xb.bench(n,r+.45,1);return}switch(e.deco){case`trees`:qC(!0)(n-.45,r-.3,.9),qC(!0)(n+.5,r+.35,.7),qC(!1)(n+.45,r-.55,.9);break;case`small`:qC(!e.front)(n+B(-.3,.3),r+B(-.3,.3),B(.75,.95));break;case`flag`:xb.flag(n+.3,r-.2),qC(!1)(n-.5,r+.4,.9);break;case`shop`:xb.shop(n,r-.1);break;case`park`:qC(!0)(n-.5,r-.4,1),qC(!0)(n+.55,r-.2,.85),xb.bench(n,r+.45,1);break;case`well`:xb.well(n,r)}}}function YC(e){let t=1;e.forEach(e=>{let n=uf(e.gx,e.gz),r=B(1.5,3),i=ib(B(1.62,1.82),B(.35,.75),r,t++);if(i.position.set(n.x+B(-.12,.12),-.12-r/2,n.z+B(-.12,.12)),i.rotation.y=B(0,Math.PI*2),W.add(i),Math.random()<.45){let e=B(1,2.2),i=ib(B(.4,.6),.05,e,t++,6);i.position.set(n.x+B(-.5,.5),-.12-r+.25-e/2,n.z+B(-.5,.5)),W.add(i)}})}function XC(e){let t=1/0,n=-1/0,r=1/0,i=-1/0;e.forEach(e=>{let[a,o]=e.split(`,`).map(Number);t=Math.min(t,a),n=Math.max(n,a),r=Math.min(r,o),i=Math.max(i,o)});let a=40+Math.round(af*1.2),o=0,s=[];for(let a=r-4;a<=i+2;a++)for(let r=t-4;r<=n+4;r++){if(e.has(df(r,a)))continue;let t=uf(r,a);if(!M_(t.x,t.z,.4)||I.env&&I.env.city&&!A_(t.x,t.z,-.6)||Math.hypot(t.x,t.z)<L.R+.6&&ff(r,a))continue;let n=ff(r,a),o=!1;for(let t=-1;t<=1&&!o;t++)for(let n=-1;n<=1;n++)if(e.has(df(r+t,a+n))){o=!0;break}let c=n?.24:o?.3:.12;if(a>i-1&&(c*=.5),Math.random()>c)continue;let l=e.has(df(r,a-1))||e.has(df(r,a-2));s.push([t.x+B(-.45,.45),t.z+B(-.45,.45),l])}s.sort(()=>Math.random()-.5);for(let[e,t,n]of s){if(o++>=a)break;let r=qC(!n&&Math.random()<.75)(e,t,B(.8,1.1));r.position.y=k_(e,t),r.traverse(e=>{e.isMesh&&(e.castShadow=!1)})}}function ZC(e,t,n,r){if(!n.length)return null;let i=new la(e,t,n.length),a=new gn,o=new Gt,s=new En,c=new M,l=new M,u=new N;return n.forEach((e,t)=>{s.set(e.rx||0,e.ry||0,e.rz||0),o.setFromEuler(s),c.set(e.x,e.y,e.z),l.set(e.sx||e.s||1,e.sy||e.s||1,e.sz||e.s||1),a.compose(c,o,l),i.setMatrixAt(t,a),e.c!=null&&(u.setHex(e.c),i.setColorAt(t,u))}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.castShadow=!!r,i.receiveShadow=!0,i.frustumCulled=!1,W.add(i),i}function QC(e){let t=e.map(([e,t])=>{let n=e.index?e.toNonIndexed():e.clone();return n.applyMatrix4(t),n.attributes.position.array}),n=new Float32Array(t.reduce((e,t)=>e+t.length,0)),r=0;t.forEach(e=>{n.set(e,r),r+=e.length});let i=new Jr;return i.setAttribute(`position`,new Nr(n,3)),i.computeVertexNormals(),i}var $C=null;function ew(){if($C)return $C;let e=new Ua(.045,.34,3);return $C=QC([[0,0,0],[.06,2.1,.35],[-.05,4.2,.3]].map(([t,n,r])=>{let i=new gn().makeTranslation(0,.17,0);return i.premultiply(new gn().makeRotationFromEuler(new En(r,n,r*.5))),i.premultiply(new gn().makeTranslation(t,0,t*.5)),[e,i]}))}var tw=()=>new oo({color:16777215,roughness:.92,flatShading:!0});function nw(e){let t=[],n=0;for(;t.length<e&&n<e*10&&J.cells.length;){n++;let e=_f(J.cells),r=uf(e.gx,e.gz),i=B(0,Math.PI*2),a=B(.95,1.5),o=r.x+Math.cos(i)*a,s=r.z+Math.sin(i)*a;J.roadLot.has(j_(o,s))||t.push([o,s])}return t}function rw(){let e=I.env.veg||{},t=L.w/2,n=L.d/2,r=L.cx,i=L.cz,a=e=>I.floating?nw(e):N_(e,r-t-16,r+t+16,i-n-14,i+n+7,(e,t)=>M_(e,t));e.grass&&ZC(ew(),tw(),a(e.grassN).map(([t,n])=>({x:t,y:k_(t,n),z:n,s:B(.8,1.6),ry:B(0,6.28),c:_f(e.grass)}))),e.flowers&&ZC(new Ja(.07,6,4),tw(),a(e.flowerN).map(([t,n])=>({x:t,y:k_(t,n)+B(.1,.2),z:n,s:B(.8,1.3),c:_f(e.flowers)}))),e.pebbles&&ZC(Vg(.14,0),tw(),a(e.pebbleN).map(([t,n])=>({x:t,y:k_(t,n)+.02,z:n,s:B(.6,1.6),sy:B(.3,.7),ry:B(0,6.28),c:_f(e.pebbles)}))),e.forest&&iw(e.forest,e.forestN)}function iw(e,t){let n=L.w/2,r=L.d/2,i=L.cx,a=L.cz,o=N_(t,i-n-70,i+n+70,a-r-60,a+r+3,(t,o)=>{let s=Math.hypot(Math.max(0,Math.abs(t-i)-n-3),Math.max(0,Math.abs(o-a)-r-3));return s<1.5||s>62||o>a+r+3||e===`palm`&&J.riverZ!==null&&Math.abs(o-J.riverZ)>14?!1:M_(t,o,1.4)}),s=[],c=[],l=[],u=[],d=e===`snowpine`?[3107666,3832412,2776905]:[4025925,4684108,3497788];o.forEach(([t,n])=>{let r=k_(t,n),i=B(.85,1.5),a=e;if(e===`jp`&&(a=Math.random()<.35?`sakura`:`pine`),e===`snowpine`&&(a=`pine`),a===`round`||a===`sakura`){let e=i*B(.9,1.2)*2.4,o=i*B(.8,1)*2.7;l.push({x:t,y:r,z:n,sx:e,sy:o,sz:e,ry:B(0,6.28),c:_f(a===`sakura`?[15774662,16106707,15378879]:I.leaf)})}else if(a===`pine`){let a=B(0,6.28),o=_f(d),s=e===`snowpine`?.5+B(0,6.28)*.03:0;u.push({x:t,y:r,z:n,s:i*2.75,ry:a,c:s?aw(o,s):o})}else a===`palm`&&(s.push({x:t,y:r+1.6*i,z:n,sx:i*.75,sy:i*2.3,sz:i*.75,rz:B(-.12,.12)}),c.push({x:t,y:r+3.35*i,z:n,sx:i*1.7,sy:i*.32,sz:i*1.7,ry:B(0,6.28),c:_f([4947770,5603135,6261316])}))}),ow(`fir`,l),ow(`pine`,u),ZC(Bg(.16,.24,1.4,6),G(7229242,{flatShading:!0}),s),ZC(Vg(1,1),tw(),c)}var aw=(e,t)=>new N(e).lerp(new N(16054524),t).getHex();function ow(e,t,n){if(!t.length)return;let r=mb(e);ZC(r.trunk,r.trunkMat,t.map(({c:e,...t})=>t),!1),ZC(r.leaves,r.leafMat,t,n)}var sw=5.2;function cw(){return{pos:[],nor:[],uv:[],col:[],idx:[],n:0}}function lw(e,t,n,r,i,a,o,s,c,l){let u=new N(s),d=u.clone().multiplyScalar(l||.82);[[[1,0,0],[[i,n,o],[i,n,r],[i,a,r],[i,a,o]],o-r,a-n,u],[[-1,0,0],[[t,n,r],[t,n,o],[t,a,o],[t,a,r]],o-r,a-n,u],[[0,0,1],[[t,n,o],[i,n,o],[i,a,o],[t,a,o]],i-t,a-n,u],[[0,0,-1],[[i,n,r],[t,n,r],[t,a,r],[i,a,r]],i-t,a-n,u],[[0,1,0],[[t,a,o],[i,a,o],[i,a,r],[t,a,r]],0,0,d]].forEach(([t,n,r,i,a])=>{let o=e.n;n.forEach((n,o)=>{e.pos.push(n[0],n[1],n[2]),e.nor.push(t[0],t[1],t[2]),e.col.push(a.r,a.g,a.b),c||r===0?e.uv.push(.01,.99):e.uv.push(o===1||o===2?r/sw:0,o>=2?i/sw:0),e.n++}),e.idx.push(o,o+1,o+2,o,o+2,o+3)})}function uw(e,t,n){if(!e.n)return null;let r=new Jr;r.setAttribute(`position`,new Ir(e.pos,3)),r.setAttribute(`normal`,new Ir(e.nor,3)),r.setAttribute(`uv`,new Ir(e.uv,2)),n&&r.setAttribute(`color`,new Ir(e.col,3)),r.setIndex(e.idx);let i=new Li(r,t);return i.castShadow=!0,i.receiveShadow=!0,W.add(i),i}var dw=null;function fw(){if(dw)return dw;let e=e=>{let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);if(r.fillStyle=e?`#000`:`#eeeeee`,r.fillRect(0,0,128,128),!e){r.fillStyle=`rgba(0,0,0,0.07)`;for(let e=0;e<4;e++)r.fillRect(0,e*32+29,128,3)}for(let t=0;t<4;t++)for(let n=0;n<4;n++){if(e){if(Math.random()<.4)continue;r.fillStyle=_f([`#ffd88a`,`#ffe9c0`,`#cfe6ff`,`#ffc870`])}else r.fillStyle=(t+n)%3?`#5a6b7f`:`#667a90`;r.fillRect(7+n*32,6+t*32,18,20),e||(r.fillStyle=`rgba(255,255,255,0.25)`,r.fillRect(7+n*32,6+t*32,18,3))}let i=Hg(n);return i.wrapS=i.wrapT=t,i.anisotropy=4,i};return dw={day:e(!1),night:e(!0)}}var pw=[[`ラーメン`,`#d9473d`],[`寿司`,`#2f6fb0`],[`喫茶`,`#6b4a2f`],[`本屋`,`#2f8a5a`],[`薬局`,`#e0a030`],[`居酒屋`,`#7a2f2f`],[`パン`,`#c9744f`],[`花屋`,`#b84a8a`]],mw=null;function hw(){if(mw)return mw;let e=document.createElement(`canvas`);e.width=512,e.height=512;let t=e.getContext(`2d`);return pw.forEach(([e,n],r)=>{let i=r%4*128,a=Math.floor(r/4)*256;t.fillStyle=n,t.fillRect(i+4,a+4,120,248),t.strokeStyle=`#ffffff`,t.lineWidth=6,t.strokeRect(i+12,a+12,104,232),t.fillStyle=`#ffffff`,t.textAlign=`center`,t.textBaseline=`middle`;let o=[...e],s=Math.min(64,200/o.length);t.font=`700 `+s+`px "Hiragino Sans","PingFang SC","Noto Sans CJK JP","Microsoft YaHei",sans-serif`,o.forEach((e,n)=>{let r=a+128+(n-(o.length-1)/2)*s*1.05;e===`ー`?(t.save(),t.translate(i+64,r),t.rotate(Math.PI/2),t.fillText(e,0,0),t.restore()):t.fillText(e,i+64,r)})}),mw=Hg(e)}function gw(e,t,n,r,i,a){let o=a%4/4,s=o+.25,c=1-Math.floor(a/4)*.5,l=c-.5,u=e.n;[[t-.26,n,[o,l]],[t+.26,n,[s,l]],[t+.26,r,[s,c]],[t-.26,r,[o,c]]].forEach(([t,n,r])=>{e.pos.push(t,n,i),e.nor.push(0,0,1),e.uv.push(r[0],r[1]),e.n++}),e.idx.push(u,u+1,u+2,u,u+2,u+3)}function _w(e){let t=new Wn;return W.add(t),t.add(K(q(1.5,.42,.74),G(e,{roughness:.35,metalness:.25}),0,.33,0)),t.add(K(q(.85,.34,.66),G(2831424,{roughness:.2}),-.08,.7,0)),t.add(K(q(1.52,.14,.76),G(2763310),0,.13,0)),t.add(K(q(.04,.1,.56),_b(16774872,16773312,Hd===`day`?.1:.8),.77,.38,0)),t.add(K(q(.04,.1,.56),_b(16734810,16724016,Hd===`day`?.1:.7),-.77,.38,0)),t}function vw(e){let t=new Wn;t.position.set(e,0,J.riverZ),W.add(t);let n=G(12039341,{roughness:.9}),r=J.riverW+5;t.add(K(q(3.4,.32,r),n,0,.32,0)),t.add(K(q(2.6,.02,r),G(5592667),0,.49,0)),[-1,1].forEach(e=>t.add(K(q(.12,.5,r),G(9277332),e*1.62,.72,0))),[-1.6,1.6].forEach(e=>t.add(K(q(1.2,1.2,.9),n,0,-.3,e))),J.keep.push({x:e,z:J.riverZ,r:r/2})}function yw(e){let t=new Wn;t.position.set(e.x,-.12,e.z),W.add(t);let n=0;[[3.2,1.8,7,14173487],[1.8,1.1,6,15921906],[1.1,.62,5,14173487],[.62,.22,5,15921906]].forEach(([e,r,i,a])=>{let o=K(Bg(r,e,i,4),G(a,{flatShading:!0}),0,n+i/2,0);o.rotation.y=Math.PI/4,t.add(o),n+=i}),t.add(K(q(2.8,.7,2.8),G(15921906),0,7.2,0)),t.add(K(q(1.5,.5,1.5),G(15921906),0,15.8,0)),t.add(K(Bg(.05,.09,4,4),G(14173487),0,n+2,0)),Hd!==`day`&&(W_(t,0,7.2,1.6,16756848,4),W_(t,0,n+3.6,0,16732224,2))}function bw(e){let t=new Wn;t.position.set(e.x,-.12,e.z),W.add(t);let n=G(15659508,{roughness:.5});t.add(K(Bg(.55,2.4,34,12),n,0,17,0)),t.add(K(Bg(1.6,1.5,1.4,16),G(13621474,{roughness:.2}),0,19,0)),t.add(K(Bg(1.1,1.05,1,16),G(13621474,{roughness:.2}),0,26,0)),t.add(K(Bg(.08,.3,7,8),n,0,37.5,0)),Hd!==`day`&&(W_(t,0,19,1.7,10473727,4.5),W_(t,0,26,1.2,10473727,3.5),W_(t,0,41,0,16732224,2))}function xw(){let e=L.cx,t=L.w,n=L.d,r=e-t/2-78,i=e+t/2+78,a=L.backZ-86,o=L.cz+n/2+18,s=7.2,c={x0:e-t/2-4.6,x1:e+t/2+4.6,z0:L.cz-n/2-4.6,z1:L.cz+n/2+4.6},l=(e,t)=>e>c.x0&&e<c.x1&&t>c.z0&&t<c.z1,u=(e,t)=>J.riverZ!==null&&t>J.riverZ-J.riverW/2-2.4&&e<J.riverZ+J.riverW/2+2.4,d=(e,t,n,r,i)=>Math.hypot(Math.max(e-i.x,0,i.x-n),Math.max(t-i.z,0,i.z-r))<i.r,f=cw(),p=cw(),m=[],h=[],g=[],_=[],v=[],y=[],b=[],x=[],S=[];for(let e=r;e<i;e+=10)for(let t=a;t<o;t+=10){let n=e+2.8/2,r=n+s,i=t+2.8/2,a=i+s;if(r>c.x0&&n<c.x1&&a>c.z0&&i<c.z1||u(i,a)||a>J.viaZ-1.8&&i<J.viaZ+1.8||J.keep.some(e=>d(n,i,r,a,e)))continue;let o=Math.hypot(Math.max(c.x0-r,0,n-c.x1),Math.max(c.z0-a,0,i-c.z1));S.push({x0:n,x1:r,z0:i,z1:a,d:o,front:i>c.z1-1})}S.forEach(e=>{if(lw(f,e.x0-.5,-.12,e.z0-.5,e.x1+.5,.03,e.z1+.5,12170926,!0,1),!e.front&&Math.random()<(e.d<12?.22:.13)){lw(f,e.x0,.03,e.z0,e.x1,.07,e.z1,7315020,!0,1),lw(f,(e.x0+e.x1)/2-.5,.07,e.z0,(e.x0+e.x1)/2+.5,.08,e.z1,14208959,!0,1);for(let t=0;t<6;t++){let t=B(e.x0+.8,e.x1-.8),n=B(e.z0+.8,e.z1-.8),r=B(.8,1.2);Math.abs(t-(e.x0+e.x1)/2)<.9||_.push({x:t,y:.07,z:n,s:r*B(.9,1.15)*2.4,ry:B(0,6),c:_f(Math.random()<.55?[15774662,16106707,15378879]:[6262597,7051853])})}for(let t=0;t<26;t++)v.push({x:B(e.x0+.2,e.x1-.2),y:.07,z:B(e.z0+.2,e.z1-.2),s:B(.8,1.4),ry:B(0,6),c:_f([7315020,8170325,6262594])});for(let t=0;t<10;t++)y.push({x:B(e.x0+.3,e.x1-.3),y:B(.17,.25),z:B(e.z0+.3,e.z1-.3),s:B(.8,1.2),c:_f([16777215,16758479,16769658])});return}let t=e.front?e.d<9?2.4:3.6:e.d<6?4.6:e.d<16?9:17,n=Math.random(),r=[],i=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,o=.3,s=.12;n<.3?r.push([e.x0+o,e.z0+o,e.x1-o,e.z1-o]):n<.65?(r.push([e.x0+o,e.z0+o,i-s,e.z1-o]),r.push([i+s,e.z0+o,e.x1-o,e.z1-o])):r.push([e.x0+o,e.z0+o,i-s,a-s],[i+s,e.z0+o,e.x1-o,a-s],[e.x0+o,a+s,i-s,e.z1-o],[i+s,a+s,e.x1-o,e.z1-o]),r.forEach(([n,r,i,a])=>{let s=1.8+Math.random()**1.7*(t-1.8),c=_f(s>8?[12174543,11122372,13160664,10465474]:[15328991,14276303,14207412,15921129,13225169,11565670,10134445,14931652]);lw(f,n,.03,r,i,.03+s,a,c,!1,.78);let l=.03+s;for(let e=0;e<(i-n)*(a-r)/5;e++)m.push({x:B(n+.4,i-.4),y:l+.17,z:B(r+.4,a-.4),ry:Math.random()<.5?0:Math.PI/2,c:_f([12567238,14014426,11120051])});Math.random()<.3&&h.push({x:B(n+.6,i-.6),y:l+.35,z:B(r+.6,a-.6),c:_f([14278114,9416904])});let u=a>=e.z1-o-.01;if(u&&s<6&&g.push({x:(n+i)/2,y:1.15,z:a+.28,sx:(i-n)*.82,rx:.3,c:_f([14239549,3108784,3115610,14721072,7031456,15921129])}),u&&s>2.6&&Math.random()<.65){let e=Math.min(l-.3,3.4);gw(p,n+.4,Math.max(1.35,e-1.5),e,a+.08,Math.floor(B(0,pw.length)))}})});let C=fw(),w=new oo({map:C.day,vertexColors:!0,roughness:.8});Hd!==`day`&&(w.emissive=new N(16777215),w.emissiveMap=C.night,w.emissiveIntensity=(Hd===`night`?1:.35)*Ud().lamp),uw(f,w,!0);let T=hw(),E=uw(p,new oo({map:T,emissive:new N(16777215),emissiveMap:T,emissiveIntensity:{day:.25,dusk:.75,night:1.3}[Hd]*Ud().lamp,roughness:.5,side:2}),!1);E&&(E.castShadow=!1),ZC(q(.5,.34,.42),tw(),m),ZC(Bg(.32,.32,.6,10),tw(),h),ZC(q(1,.07,.6),tw(),g,!0),ow(`fir`,_,!0),ZC(ew(),tw(),v),ZC(new Ja(.07,6,4),tw(),y);for(let e=a;e<=o;e+=10)if(!u(e-1,e+1))for(let t=r;t<i;t+=2.6)!l(t,e)&&b.length<1400&&b.push({x:t,y:-.105,z:e,sx:1.1,sz:.12});for(let e=r;e<=i;e+=10)for(let t=a;t<o;t+=2.6)l(e,t)||u(t-1,t+1)||Math.abs(t-J.viaZ)<1.5||b.length<2600&&b.push({x:e,y:-.105,z:t,sx:.12,sz:1.1});let ee=(e,t)=>{for(let n=-3;n<=3;n++)x.push({x:e+n*.42,y:-.1,z:t+2.2,sx:.26,sz:1.6},{x:e+n*.42,y:-.1,z:t-2.2,sx:.26,sz:1.6}),x.push({x:e+2.2,y:-.1,z:t+n*.42,sx:1.6,sz:.26},{x:e-2.2,y:-.1,z:t+n*.42,sx:1.6,sz:.26})},te=(e,t)=>t+Math.round((e-t)/10)*10;ee(te(c.x1+4,r),te(c.z1+4,a)),ee(te(c.x0-4,r),te(c.z1+4,a));let ne=G(15921902,{roughness:.8});ZC(q(1,.02,1),ne,b.filter(e=>!x.some(t=>Math.abs(t.x-e.x)<2.5&&Math.abs(t.z-e.z)<2.5))),ZC(q(1,.02,1),ne,x);let D=[];for(let e=c.x0+1.2;e<c.x1-1;e+=7)D.push([e,c.z0+1],[e,c.z1-1]);for(let e=c.z0+4;e<c.z1-3;e+=7)D.push([c.x0+1,e],[c.x1-1,e]);D.forEach(([e,t])=>{M_(e,t,.2)&&xb.lamp(e,t,.95)});let re=[],ie=[],ae=[];for(let n=r;n<=i;n+=10){if(Math.abs(n-e)>t/2+26||l(n,c.z0+1))continue;let r=null;for(let e=c.z1+2;e>c.z0-30;e-=7){let t=n+1.3;if(u(e-1,e+1)||Math.abs(e-J.viaZ)<2||l(t,e)){r=null;continue}re.push({x:t,y:1.7,z:e}),ie.push({x:t,y:3.25,z:e}),r&&[3,3.2,3.4].forEach(n=>ae.push(r,n,e+7,t,n,e)),r=t}}if(ZC(Bg(.07,.1,3.6,6),G(10131600),re),ZC(q(.12,.08,.9),G(7039590),ie),ae.length){let e=new Jr;e.setAttribute(`position`,new Ir(ae,3)),W.add(new Ea(e,new ma({color:2894896})))}let oe=cw();lw(oe,r,2.8,J.viaZ-1.3,i,3.2,J.viaZ+1.3,12039341,!0,1),[-1,1].forEach(e=>lw(oe,r,3.2,J.viaZ+e*1.25-.06,i,3.55,J.viaZ+e*1.25+.06,10723739,!0,1)),uw(oe,new oo({map:C.day,vertexColors:!0,roughness:.9}),!0);let se=[];for(let e=r+3;e<i;e+=8)se.push({x:e,y:1.35,z:J.viaZ});ZC(Bg(.35,.45,2.9,8),G(11052446),se);let O=new Wn;W.add(O);let ce=Hd===`day`?G(2831424,{roughness:.2}):_b(16770736,16762992,.9);for(let e=0;e<6;e++){let t=-e*4.4;O.add(K(q(4.2,1.1,1.35),G(14278114,{metalness:.4,roughness:.35}),t,.55,0)),O.add(K(q(4.22,.16,1.37),G(5025616),t,.32,0)),O.add(K(q(3.9,.36,1.37),ce,t,.78,0))}let le=i-r+30;Sh.push(e=>{O.position.set(r-15+e*7%le,3.55,J.viaZ)});let ue=[];for(let e=a;e<=o;e+=10)!(e>c.z0-1&&e<c.z1+1)&&!u(e-1,e+1)&&Math.abs(e-J.viaZ)>2&&ue.push(e);ue.sort((e,t)=>Math.abs(e-L.cz)-Math.abs(t-L.cz));let de=[15921906,2039588,13225169,14239549,3108784,15254855,3824192,15921906],fe=i-r;ue.slice(0,6).forEach((e,t)=>{for(let t=0;t<3;t++){let n=_w(_f(de)),a=t%2?1:-1,o=B(0,fe),s=B(3,5);n.rotation.y=a>0?0:Math.PI,Sh.push(t=>{let c=((t*s+o)%fe+fe)%fe;n.position.set(a>0?r+c:i-c,-.12,e+a*.6)})}});let pe=[];for(let n=r;n<=i;n+=10)Math.abs(n-e)>t/2+12&&pe.push(n);pe.sort((t,n)=>Math.abs(t-e)-Math.abs(n-e));let me=o-a;pe.slice(0,4).forEach(e=>{for(let t=0;t<2;t++){let n=_w(_f(de)),r=t%2?1:-1,i=B(0,me),s=B(3,5);n.rotation.y=r>0?-Math.PI/2:Math.PI/2,Sh.push(t=>{let c=((t*s+i)%me+me)%me,l=r>0?a+c:o-c;n.visible=!u(l-1,l+1)&&Math.abs(l-J.viaZ)>1.6,n.position.set(e-r*.6,-.12,l)})}})}var Sw={};function Cw(e,n,r){if(Sw[r])return Sw[r];let i=document.createElement(`canvas`);i.width=i.height=64;let a=i.getContext(`2d`);a.fillStyle=e,a.fillRect(0,0,64,64),a.fillStyle=n;for(let e=0;e<2;e++)for(let t=0;t<2;t++)a.fillRect(8+t*32,6+e*32,16,20);a.fillStyle=`rgba(0,0,0,0.12)`,a.fillRect(0,60,64,4);let o=Hg(i);return o.wrapS=o.wrapT=t,Sw[r]=o}function ww(e,t,n,r,i,a,o,s){let c=k_(e,t)-.3,l=Cw(a,o,a+o).clone();l.needsUpdate=!0,l.repeat.set(Math.max(1,Math.round(n/1.3)),Math.max(1,Math.round(r/1.3)));let u=new oo({map:l,roughness:.85});if(Hd!==`day`){let e=Q_().clone();e.needsUpdate=!0,e.repeat.set(l.repeat.x/2,l.repeat.y/2),u.emissive=new N(16777215),u.emissiveMap=e,u.emissiveIntensity=(Hd===`night`?1:.45)*Ud().lamp}let d=new Li(q(n,r,i),u);return d.position.set(e,c+r/2,t),d.castShadow=!0,d.receiveShadow=!0,W.add(d),s&&s(e,c+r,t,n,i),d}function Tw(e,t){let n=new Wn;n.position.set(e,0,J.riverZ),W.add(n);let r=J.riverW+4,i=G(t,{roughness:.6}),a=G(8018499);for(let e=0;e<11;e++){let t=e/10,o=-r/2+t*r,s=Math.sin(t*Math.PI)*1.1-.05,c=Math.atan(Math.PI*Math.cos(t*Math.PI)*1.1/r),l=K(q(2,.16,r/10+.12),a,0,s,o);l.rotation.x=-c,n.add(l),[-1,1].forEach(e=>n.add(K(Bg(.05,.05,.6,6),i,e*.95,s+.3,o))),[-1,1].forEach(e=>{let t=K(q(.07,.07,r/10+.12),i,e*.95,s+.58,o);t.rotation.x=-c,n.add(t)})}J.keep.push({x:e,z:J.riverZ,r:r/2})}function Ew(e){let t=new Wn;t.position.set(e,0,J.riverZ),W.add(t);let n=G(13616820,{roughness:.9}),r=J.riverW+4;t.add(K(q(3,.4,r),n,0,.45,0)),[-1,1].forEach(e=>t.add(K(q(.18,.4,r),n,e*1.4,.85,0))),[-1.4,1.4].forEach(e=>t.add(K(q(2.6,1,.7),n,0,-.1,e))),[-1,1].forEach(t=>{let n=xb.lamp(e+t*1.4,J.riverZ+r/2-.4,.9);n.position.y=.65}),J.keep.push({x:e,z:J.riverZ,r:r/2})}function Dw(e,t,n){let r=hb(e,t,1,n);r.position.y=k_(e,t);let i=G(12884572,{flatShading:!0});Y(r,new Ja(.5,10,8),i,0,1.2,0).scale.set(.8,.7,1.4),Y(r,new Ja(.3,8,6),i,0,1.6,.05).scale.set(1,.9,1.1);let a=Y(r,Bg(.1,.14,.8,6),i,0,1.55,.75);a.rotation.x=.6,Y(r,q(.22,.22,.42),i,0,1.92,1),[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].forEach(([e,t])=>Y(r,Bg(.06,.05,1,5),i,e,.5,t)),J.keep.push({x:e,z:t,r:1.2})}function Ow(e,t,n){let r=hb(e,t,1,n);r.position.y=k_(e,t);let i=G(9071180,{flatShading:!0}),a=G(14272422);Y(r,new Ja(.45,10,8),i,0,.95,0).scale.set(.7,.7,1.4);let o=Y(r,Bg(.09,.13,.5,6),i,0,1.2,.55);o.rotation.x=.5,Y(r,q(.2,.2,.36),i,0,1.45,.75),[[-.18,.35],[.18,.35],[-.18,-.35],[.18,-.35]].forEach(([e,t])=>Y(r,Bg(.05,.04,.75,5),i,e,.38,t)),[-1,1].forEach(e=>{let t=Y(r,Bg(.02,.025,.5,4),a,e*.1,1.75,.68);t.rotation.z=-e*.5;let n=Y(r,Bg(.015,.02,.25,4),a,e*.22,1.85,.75);n.rotation.x=.6}),Y(r,new Ja(.1,8,6),G(15921906),0,1.05,-.62),J.keep.push({x:e,z:t,r:1})}function kw(e,t,n){let r=hb(e,t,1,n);r.position.y=k_(e,t),Y(r,q(1.8,1.2,1.5),G(8015410,{roughness:.9}),0,.6,0);let i=Y(r,new Ua(1.45,.95,4),G(16120059),0,1.65,0);i.rotation.y=Math.PI/4,i.scale.set(1.2,1,1),[-.45,.45].forEach(e=>{Y(r,q(.32,.32,.04),_b(16765562,16754240,.9),e,.7,.77),W_(r,e,.7,.9,16756816,.9)}),Y(r,q(.34,.6,.04),G(4861727),0,.3,.77),Y(r,q(.22,.6,.22),G(7039851),.5,1.95,-.2),J.keep.push({x:e,z:t,r:1.8})}function Aw(e){let t=new Wn;W.add(t);let n=new Ja(1.2,16,12),r=[],i=new N(_f([16739179,5219327,16762173,7065999,11832575])),a=new N(16777215),o=n.attributes.position;for(let e=0;e<o.count;e++){let t=Math.floor((Math.atan2(o.getZ(e),o.getX(e))+Math.PI)/(Math.PI*2)*8)%2?i:a;r.push(t.r,t.g,t.b)}n.setAttribute(`color`,new Ir(r,3));let s=K(n,new oo({vertexColors:!0,roughness:.6}));s.scale.set(1,1.15,1),t.add(s),t.add(K(Bg(.5,.25,.5,10),G(11764303),0,-1.45,0)),t.add(K(q(.5,.4,.5),G(9067068),0,-2.55,0)),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([e,n])=>t.add(K(Bg(.012,.012,.9,3),G(5914672),e*.22,-2,n*.22)));let c=L.radius+B(18,26),l=B(2,8),u=B(.015,.03),d=e*2.1;Sh.push(n=>{let r=n*u+d;t.position.set(L.cx+Math.cos(r)*c,l+Math.sin(n*.5+e)*.5,L.cz+Math.sin(r)*c*.8)})}function jw(e,t,n){let r=new Wn;r.position.set(e,n,t),W.add(r);let i=ib(1.7,.3,2.4,300+Math.round(Math.abs(e)),8);i.position.y=-1.2,r.add(i),r.add(K(Bg(.32,.48,1.6,8),G(16774890),0,.8,0)),r.add(K(new Ua(.52,.6,8),G(15224923),0,1.9,0));let a=new Wn;a.position.set(0,1.45,.5),r.add(a);for(let e=0;e<4;e++){let t=K(q(.14,1.3,.03),G(15983302),0,.65,0),n=new Wn;n.rotation.z=e*Math.PI/2,n.add(t),a.add(n)}let o=new Wn;o.position.set(-.9,0,.4),r.add(o);let s=pb(`fir`,9691832);s.scale.setScalar(.85),o.add(s),Sh.push(t=>{a.rotation.z=t*1.2,r.position.y=n+Math.sin(t*.6+e)*.2})}function Mw(){[16734810,16752714,16769126,8118395,5941503,10124287].forEach((e,t)=>{let n=new Li(new Ya(30-t*.9,.45,6,80,Math.PI),new Ti({color:e,transparent:!0,opacity:.28,depthWrite:!1,fog:!1}));n.position.set(L.cx-10,-8,L.backZ-48),W.add(n)})}function Nw(){let e=I.env,t=new Ka(400,400,200,200);t.rotateX(-Math.PI/2);let n=t.attributes.position,r=[],i=new N(I.ground),a=new N(I.hill),o=new N(e.lowColor||I.ground),s=new N,c=new N(e.plaza||I.ground);for(let t=0;t<n.count;t++){let l=n.getX(t)+L.cx,u=n.getZ(t)+L.cz,d=E_((198-Math.max(Math.abs(n.getX(t)),Math.abs(n.getZ(t))))/40),f=-.12+(k_(l,u)+.12)*d;n.setY(t,f);let p=O_(l*.12+11,u*.12+7);e.city?s.copy(A_(l,u)?c:i).multiplyScalar(.9+p*.18):s.copy(i).lerp(a,vf((f+.12)/(e.amp*.7),0,1)).multiplyScalar(.84+p*.3),f<-.2&&s.lerp(o,vf((-.2-f)/.45,0,1)),r.push(s.r,s.g,s.b)}t.setAttribute(`color`,new Ir(r,3)),t.computeVertexNormals();let l=new Li(t,new oo({vertexColors:!0,roughness:1}));l.position.set(L.cx,0,L.cz),l.receiveShadow=!0,W.add(l);let u=new Li(new qa(196,650,64,1),new oo({color:I.ground,roughness:1}));u.rotation.x=-Math.PI/2,u.position.set(L.cx,-.14,L.cz),W.add(u)}function Pw(){let e=new Ka(400,J.riverW+3.2,160,3);e.rotateX(-Math.PI/2);let t=new Li(e,new oo({color:I.env.water,roughness:.12,metalness:.05,transparent:!0,opacity:.88}));t.position.set(L.cx,-.38,J.riverZ),t.receiveShadow=!0,W.add(t);let n=e.attributes.position,r=Float32Array.from(n.array);Sh.push(t=>{for(let e=0;e<n.count;e++){let i=r[e*3],a=r[e*3+2];n.setY(e,Math.sin(i*.35+t*1.4)*.025+Math.sin(a*1.7+i*.2-t*1.1)*.02)}n.needsUpdate=!0,e.computeVertexNormals()})}function Fw(e,t,n){for(let r=0;r<t;r++){let i=e();W.add(i);let a=r%2?1:-1,o=a*J.riverW*.22,s=r/t*180,c=n*B(.8,1.2);i.rotation.y=a>0?0:Math.PI,Sh.push(e=>{let t=((e*c+s)%180+180)%180-90;i.position.set(L.cx+t*a,-.36+Math.sin(e*1.3+r)*.04,J.riverZ+o),i.rotation.z=Math.sin(e*1.1+r)*.03})}}function Iw(){let e=new la(q(2.34,.1,2.34),G(I.env.roadBase,{roughness:.95}),af),t=new gn;rf.forEach((n,r)=>{t.makeTranslation(n.pos.x,-.1,n.pos.z),e.setMatrixAt(r,t)}),e.instanceMatrix.needsUpdate=!0,e.receiveShadow=!0,W.add(e)}var Lw={cloud:{prep(){},build(){for(let e=0;e<3;e++)Aw(e);jw(L.cx-L.w/2-9,L.cz-4,-1),jw(L.cx+L.w/2+10,L.cz-8,.5),Mw()}},tokyo:{prep(){J.towerAt={x:L.cx-L.w/2-28,z:L.backZ-32},J.tower2={x:L.cx+L.w/2+40,z:L.backZ-52},J.viaZ=J.riverZ-J.riverW/2-6.5,J.keep.push({x:J.towerAt.x,z:J.towerAt.z,r:5},{x:J.tower2.x,z:J.tower2.z,r:4})},build(){Tw(L.cx-L.w*.22,14239549),vw(L.cx+L.w*.3),yw(J.towerAt),bw(J.tower2),xw()}},paris:{prep(){J.towerAt={x:L.cx+L.w*.22,z:L.backZ-22},J.flats.push({x:J.towerAt.x,z:J.towerAt.z,r:6}),J.keep.push({x:J.towerAt.x,z:J.towerAt.z,r:6.5})},build(){Ew(L.cx-L.w*.28),Ew(L.cx+L.w*.32),Fw(()=>{let e=new Wn;return e.add(K(q(4.2,.35,1.2),G(16053492),0,.17,0)),e.add(K(q(3.2,.42,.95),G(3886955,{roughness:.3}),-.2,.55,0)),e.add(K(q(3.3,.06,1),G(16053492),-.2,.79,0)),e},3,1.6);let e=J.riverZ-J.riverW/2-3.2;for(let t=L.cx-L.w/2-22;t<L.cx+L.w/2+22;t+=B(3.3,3.9)){if(!M_(t,e,1.2))continue;let n=B(3,3.4),r=B(3.4,4.6);ww(t,e,n,r,2.6,_f([`#efe3cc`,`#e8dcc2`,`#f2e8d5`]),`#4a5a78`,(e,t,n,r,i)=>{let a=K(Bg(r*.38,r*.72,.8,4),G(7307164,{flatShading:!0}),e,t+.4,n);a.rotation.y=Math.PI/4,a.scale.set(1,1,i/r),W.add(a),W.add(K(q(.3,.5,.3),G(13202511),e+r*.25,t+.75,n))}),J.keep.push({x:t,z:e,r:2})}}},egypt:{prep(){J.pyr=[[L.cx,L.backZ-21,12,11],[L.cx-16,L.backZ-29,8,8],[L.cx+15,L.backZ-18,6,5.8]],J.pyr.forEach(([e,t,n])=>{J.flats.push({x:e,z:t,r:n*.75}),J.keep.push({x:e,z:t,r:n*.8})}),J.sphinx={x:L.cx-12,z:L.backZ-14},J.flats.push({x:J.sphinx.x,z:J.sphinx.z,r:4}),J.keep.push({x:J.sphinx.x,z:J.sphinx.z,r:4})},build(){Fw(()=>{let e=new Wn;e.add(K(q(2.4,.3,.7),G(9067068),0,.15,0)),e.add(K(Bg(.04,.05,2.4,5),G(7031343),.2,1.4,0));let t=new Jr;return t.setAttribute(`position`,new Ir([.2,.4,0,.2,2.6,0,-1.3,.5,0],3)),t.computeVertexNormals(),e.add(K(t,new oo({color:16117728,side:2,roughness:.8}))),e},4,.9);let e=J.sphinx,t=new Wn;t.position.set(e.x,-.12,e.z),W.add(t);let n=G(14201978,{flatShading:!0});t.add(K(q(2.2,1.6,5.2),n,0,.8,-.6)),t.add(K(Vg(1.1),n,0,1,-2.8)),[-.6,.6].forEach(e=>t.add(K(q(.55,.45,2),n,e,.22,2.6))),t.add(K(q(1.4,1.1,1.3),n,0,2.1,1.6)),t.add(K(q(1.1,1,.5),n,0,2,2.3)),[-1,1].forEach(e=>t.add(K(q(.35,1.3,1.1),n,e*.85,1.75,1.6)));for(let e=0;e<4;e++){let[e,t]=N_(1,L.cx-L.w/2-14,L.cx+L.w/2+14,L.cz-L.d/2-2,L.cz+L.d/2+3,(e,t)=>M_(e,t,1.5)&&Math.abs(e-L.cx)>L.w/2+1)[0]||[];e!=null&&Dw(e,t,B(0,6.28))}}},sea:{prep(){},build(){}},arctic:{prep(){J.lake={x:L.cx-L.w/2-12,z:L.cz-L.d*.15,r:7},J.flats.push({x:J.lake.x,z:J.lake.z,r:7.5}),J.keep.push({x:J.lake.x,z:J.lake.z,r:7.8})},build(){let e=J.lake,t=new Li(new Va(e.r,40),new oo({color:13625077,roughness:.08,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}));t.rotation.x=-Math.PI/2,t.position.set(e.x,-.1,e.z),t.receiveShadow=!0,W.add(t);for(let e=0;e<4;e++){let[e,t]=N_(1,L.cx-L.w/2-22,L.cx+L.w/2+22,L.backZ-18,L.cz+L.d/2,(e,t)=>M_(e,t,2.2)&&Math.hypot(Math.max(0,Math.abs(e-L.cx)-L.w/2),Math.max(0,Math.abs(t-L.cz)-L.d/2))>3)[0]||[];e!=null&&kw(e,t,B(-.5,.5))}for(let e=0;e<4;e++){let[e,t]=N_(1,L.cx-L.w/2-14,L.cx+L.w/2+14,L.cz-L.d/2-6,L.cz+L.d/2+2,(e,t)=>M_(e,t,1.4)&&Math.abs(e-L.cx)>L.w/2+1)[0]||[];e!=null&&Ow(e,t,B(0,6.28))}}}};function Rw(e){let t={day:16777215,dusk:16765624,night:2897244}[Hd],n=new oo({color:t,roughness:1,emissive:new N(t),emissiveIntensity:Hd===`night`?.15:.35,fog:!1}),r=Vg(1,2);for(let t=0;t<e;t++){let e=new Wn;W.add(e);let t=Math.floor(B(6,11)),i=B(3.5,7.5);for(let a=0;a<t;a++){let t=new Li(r,n),a=i*B(.45,.85);t.position.set(B(-1.7,1.7)*i*.6,B(-.15,.45)*i*.4,B(-.8,.8)*i*.5),t.scale.set(a*1.35,a*.72,a),e.add(t)}let a=B(55,170),o=B(Math.PI*1.08,Math.PI*1.92);e.position.set(L.cx+Math.cos(o)*a,6+a*B(.07,.11),L.cz+Math.sin(o)*a);let s=B(.5,1.3);Sh.push((t,n)=>{e.position.x+=s*n,e.position.x>L.cx+200&&(e.position.x-=400)})}}var zw=Tm.fog;function Bw(){Tm.environment=null,Tm.fog=zw;let e=new Ja(320,32,20),t=e.attributes.position,n=[],r=Ud().sky||I.sky,i=new N(r[0]),a=new N(r[1]),o=new N(r[2]),s=new N;for(let e=0;e<t.count;e++){let r=t.getY(e)/320;r>0?s.copy(a).lerp(i,r**.7):s.copy(a).lerp(o,Math.min(1,-r*2.2)),n.push(s.r,s.g,s.b)}e.setAttribute(`color`,new Ir(n,3)),W.add(new Li(e,new Ti({vertexColors:!0,side:1,fog:!1,depthWrite:!1}))),Tm.fog.color.setHex(r[1]),Tm.background.setHex(r[1])}function Vw(){let e=Hd===`day`?I.light||{}:Ud(),t=e.hemi||[15986687,12101846,.45],n=e.sun||[16773596,.95];W.add(new Jo(t[0],t[1],t[2]*Math.PI)),W.add(new ms(16777215,.06*Math.PI));let r=new ps(n[0],n[1]*Math.PI);r.target.position.set(L.cx,0,L.cz);let i=new M(...Ud().sunDir||[-12,26,14]).normalize().multiplyScalar(34);r.position.set(L.cx+i.x,i.y,L.cz+i.z),r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let a=L.radius+5,o=r.shadow.camera;o.left=-a,o.right=a,o.top=a,o.bottom=-a,o.near=1,o.far=60+a*2,o.updateProjectionMatrix(),r.shadow.bias=-5e-4,r.shadow.normalBias=.03,r.shadow.radius=2.5,W.add(r),W.add(r.target)}function Hw(){let e=new Wn;W.add(e);let t=[],n=L.radius;if(I.floating){for(let e=0;e<50+n*1.5;e++){let e=B(0,Math.PI*2),r=B(3,n*2+30);t.push([Math.cos(e)*r,B(-9.5,-6.5),Math.sin(e)*r,B(2.2,3.8)])}for(let e=0;e<12;e++){let e=B(Math.PI*.95,Math.PI*2.05),r=B(n+12,n+32);t.push([Math.cos(e)*r,B(0,6),Math.sin(e)*r,B(1.4,2.6)])}}else{let e=Wd===`arctic`?5:16;for(let r=0;r<e;r++){let e=B(Math.PI*1.05,Math.PI*1.95),r=B(n+40,n+90);t.push([Math.cos(e)*r,B(18,32),Math.sin(e)*r,B(3,6)])}}let r=new la(Vg(1,2),new co({color:16777215}),t.length*5),i=new gn,a=new Gt,o=new M,s=new M,c=0;t.forEach(([e,t,n,l])=>{for(let u=0;u<5;u++){s.set(e+B(-1.5,1.5)*l,t+B(-.15,.35)*l,n+B(-1,1)*l);let u=l*B(.55,1);o.set(u*1.25,u*.78,u),i.compose(s,a,o),r.setMatrixAt(c++,i)}}),r.instanceMatrix.needsUpdate=!0,r.frustumCulled=!1,e.add(r),e.position.set(L.cx,0,L.cz),Sh.push((t,n)=>{e.rotation.y+=n*.006})}var Uw=new Set([ky,bx,xx]);function Ww(e){e.traverse(e=>{e.geometry&&!Uw.has(e.geometry)&&!e.geometry.userData.keep&&e.geometry.dispose(),e.isSprite&&e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}function Gw(){Ch(Ww),tb.setHex(I.rock[0]),nb.setHex(I.rock[1]),rb.setHex(I.rock[2]);let{cells:e,occ:t}=gf();J.occ=t,J.cells=[...e.values()],J.keep=[],J.flats=[],J.roadLot=new Set,rf.forEach(e=>{J.roadLot.add(df(e.gx,e.gz)),e.lotPos&&J.roadLot.add(df(e.lgx,e.lgz))});let n=I.env||{};J.riverZ=n.river?L.backZ-7.5:null,J.riverW=6,I.floating||J.keep.push({x:0,z:0,r:L.R+.3});let r=Lw[Wd];r.prep(),I.sea?Ry():(zy(),Bw(),Vw(),Hw()),I.floating?YC(e):I.sea||(Nw(),J.riverZ!==null&&Pw(),Iw()),e.forEach(e=>{e.deco&&(e.front=t.has(df(e.gx,e.gz-1)),JC(e))}),rf.forEach(Ay),I.sea&&My(rf),rf.filter(e=>e.type===`prop`).forEach(Ex),KC[I.center](L.R),GC[I.backdrop](),r.build(),!I.floating&&!I.sea&&XC(t),rw(),n.skyClouds&&Rw(n.skyClouds),n.birds&&Hd!==`night`&&P_(n.birds),R_(Gd===`s`?2:3),n.particles&&z_(n.particles),Hd===`night`&&!I.sea&&($_(),Wd!==`arctic`&&ev(140)),Hd===`day`&&Wd!==`arctic`&&Wd!==`egypt`&&!I.sea&&tv(10)}var Kw=()=>I.sea?Th().exposure:Ud().exposure,qw=e=>{e&&e.parent&&e.parent.remove(e)};function Jw(){let e=ef()?50:1;rf.forEach(t=>{t.type===`prop`&&(IC(t),t.price!==t.base*e&&(t.price=t.base*e,Sx(t))),qw(t.block),t.block=null,qw(t.mine),t.mine=null,t.god&&(qw(t.god.sp),Fb(t))}),VC();let t=V.campaign,n=ef()?Sd:sf,r=PC();H.forEach(e=>{e.cash=t?e.human?t.cash:t.foeCash:n,e.bankrupt=!1,e.charge=0,e.turtle=0,e.sleep=0,e.pts=20,e.bank=0,e.jail=0,e.hosp=0,e.god=null,e.dumpTo=-1,e.waste=!1,e.flip=!1,e.cards=e.human?[`remote`,Uy(r),Uy(r)]:[Uy(r),Uy(r)],e.mesh.visible=!0,e.body.scale.set(1,1,1),e.anim.reset(),ch(e,0),e.mesh.rotation.y=Ld,Ib(e)}),V.cur=V.firstIdx,V.round=1,V.gameOver=!1,V.humanWaiting=!1,V.humanResolve=null,V.turnFlags={},Lb.length=0,Om.copy(H[V.cur].mesh.position),km.set(0,0,0)}function Yw(){nf(),Object.assign(Od.portal,{label:I.portal.label,icon:I.portal.icon,desc:`坐`+I.portal.label+`，直接去下一个`+I.portal.label+`。`}),hf(),Gw(),Sm.toneMappingExposure=Kw(),d_(Hd),hh(Ud().spot),Jw(),Dm.set(L.cx,0,L.cz-1),Q()}function Xw(){V.gen++,gm.forEach(e=>{try{e.fn(1)}catch{}}),gm.length=0,_m.forEach(e=>{e.parent&&e.parent.remove(e)}),_m.clear(),V.humanWaiting=!1,V.humanResolve=null,V.busy=!1,V.gameOver=!0,rx(),R(`#toasts`).innerHTML=``,Gb.forEach(e=>e.el.remove()),Gb.length=0}function Zw(e,t){let[n,r]=[t[0],t.slice(1)];return n===`d`?r===`all`?e.cash:r===`half`?Math.floor(e.cash/2/100)*100:Math.min(+r,e.cash):r===`all`?e.bank:Math.min(+r,e.bank)}function Qw(e){let t=[];return e.cash>=2e3&&t.push(`d2000`),e.cash>=4e3&&t.push(`dhalf`),e.cash>0&&t.push(`dall`),e.bank>=2e3&&t.push(`w2000`),e.bank>0&&t.push(`wall`),t}function $w(e,t){let n=z(Zw(e,t));return{d2000:`存 ¥2,000`,dhalf:`存一半现金（¥`+n+`）`,dall:`现金全部存进去（¥`+n+`）`,w2000:`取 ¥2,000`,wall:`存款全部取出来（¥`+n+`）`}[t]}function eT(e,t,n){let r=n.map(t=>({label:$w(e,t),value:t}));r.push({label:`不用了`,value:null,cancel:!0,primary:!0});let i=(t?`<p class="sub">路过银行，顺便存取一下？</p>`:``)+`<dl class="info-grid"><dt>现金</dt><dd class="num">¥`+z(e.cash)+`</dd><dt>存款</dt><dd class="num">¥`+z(e.bank)+`</dd></dl><p class="sub">存款每天有 `+Math.round(bd*100)+`% 利息，不会被均富卡、查税卡和经济危机拿走；现金不够付钱时会自动取出来。</p>`+(ef()?`<p class="sub">🙃 逆向大富翁：存款也算你的钱，存进去只会多拿利息；放在手上，经济危机、均富卡还能帮你花掉一些。</p>`:``);return Qb({title:Od.bank.label,color:Od.bank.color,html:i,buttons:r,list:!0})}function tT(e,t){t&&(e.cash-=t,e.bank+=t,Of(`coin`),qb(e.mesh.position,(t>0?`存 ¥`:`取 ¥`)+z(Math.abs(t)),t>0?`#8fe3c8`:`#3ee08b`,2.2),X(U(e)+(t>0?`在银行存了 ¥`:`从银行取了 ¥`)+z(Math.abs(t))+`，存款 ¥`+z(e.bank),F[e.id]),Q())}async function nT(e,t){if(!e.human){if(ef()){if(e.bank>0)tT(e,-e.bank);else return}else if(e.cash>=14e3)tT(e,Math.floor((e.cash-8e3)/1e3)*1e3);else if(e.cash<3e3&&e.bank>0)tT(e,-Math.min(e.bank,5e3));else return;await hm(t?250:400);return}for(let n=0;n<3;n++){let n=Qw(e);if(!n.length)return;let r=await Vb(e,`K`,()=>eT(e,t,n),()=>null);if(!r||!n.includes(r))return;tT(e,r[0]===`d`?Zw(e,r):-Zw(e,r))}}function rT(){for(let e of H){if(e.bankrupt||e.bank<=0)continue;let t=Math.floor(e.bank*bd/10)*10;t&&(e.bank+=t,e.local&&X(`银行存款的利息 +¥`+z(t)+`，存款 ¥`+z(e.bank),F[e.id]))}Q()}function iT(e,t){let n=e.slice(),r=[];for(;n.length&&r.length<t;)r.push(n.splice(Math.floor(Hy()*n.length),1)[0]);return r}function aT(e){return e.level--,e.invested=Math.max(e.price,e.invested-Xy(e)),Fx(e,`pop`),e.name+`（`+U(H[e.owner])+`）的房子降到 `+e.level+` 级`}var oT=[{icon:`🌋`,name:`地震`,color:`#d8643c`,run(){let e=iT(rf.filter(e=>e.owner>=0&&e.level>=2),3);return e.length?(Of(`lose`),`震坏了 `+e.length+` 栋房子：`+e.map(e=>(Sb(e.lotPos,14181436),aT(e))).join(`；`)+`。`):`房子都还矮，没震坏什么。`}},{icon:`📉`,name:`经济危机`,color:`#6b7895`,run(){return Of(`lose`),Jm().forEach(e=>{let t=Math.round(Math.max(0,e.cash)*.1/10)*10;t&&(e.cash-=t,qb(e.mesh.position,`-`+z(t),`#ff6b85`))}),`每个人的现金都少了 10%（银行里的存款不受影响）。`}},{icon:`📈`,name:`地价暴涨`,color:`#2fae8f`,run(){return rf.forEach(e=>{e.type===`prop`&&(e.price=Math.round(e.price*1.2/100)*100,Sx(e))}),Of(`build`),`所有地价涨了 20%，租金、升级费、拍卖价跟着涨。`}},{icon:`🎉`,name:`节日红包`,color:`#ff4f6d`,run(){return Jm().forEach(e=>AC(e,tf(1e3))),`全城过节，每个人领到 ¥`+z(tf(1e3))+` 红包。`}},{icon:`🌀`,name:`台风过境`,color:`#4fb6ff`,run(){let e=0;rf.forEach(t=>{t.block&&(kb(t),e++),t.mine&&(Mb(t,!1),e++)});let t=iT(rf.filter(e=>e.owner>=0&&e.level>=2),1),n=t.length?`；`+aT(t[0]):``;return t.length&&Sb(t[0].lotPos,5224191),(e?`路上的 `+e+` 个路障、地雷全被吹走了`:`路上没什么可吹的`)+n+`。`}},{icon:`🏛️`,name:`房产税`,color:`#c9a35b`,run(){let e=[];return Jm().forEach(t=>{let n=rf.reduce((e,n)=>e+(n.owner===t.id?n.level:0),0);n&&(jC(t,n*tf(150)),e.push(U(t)+` ¥`+z(n*tf(150))))}),e.length&&Of(`lose`),`每级房子交 ¥`+z(tf(150))+(e.length?`：`+e.join(`、`):`，还没人盖房子`)+`。`}}];async function sT(){let e=Uy(oT),t=e.run();Q(),H.forEach(e=>{e.bankrupt||Sb(e.mesh.position,Td[e.id])}),X(`全城事件「`+e.name+`」：`+t,e.color),H.some(e=>e.local)?await Qb({title:e.icon+` 全城事件：`+e.name,color:e.color,html:`<p class="big">`+t+`</p>`}):await hm(900)}var cT={rich:{name:`财神`,icon:`💰`,color:`#e5a50a`,desc:`收到的钱翻倍`},luck:{name:`福神`,icon:`🍀`,color:`#3cbf6a`,desc:`踩到别人的地不用付租金`},poor:{name:`穷神`,icon:`💸`,color:`#8f7dff`,desc:`付出去的钱翻倍`}},lT=e=>e.type===`prop`?e.name:Od[e.type].label,uT=e=>ef()&&e===`luck`?`踩到别人的地不用收他的红包`:cT[e].desc;async function dT(){if(rf.some(e=>e.god)||Hy()>=.4)return;let e=Hy(),t=e<.4?`rich`:e<.65?`luck`:`poor`,n=rf.filter(e=>e.i!==0&&!e.block&&!e.mine&&!H.some(t=>!t.bankrupt&&t.pos===e.i));if(!n.length)return;let r=n[Math.floor(Hy()*n.length)];Pb(r,t),Of(`skill`),X(cT[t].name+`出现在`+lT(r)+`，谁先走过去就会被附身（`+uT(t)+`）`,cT[t].color),await hm(500)}function fT(e,t){if(!t.god)return;let n=t.god.k,r=cT[n];Fb(t),e.god={k:n,n:5},Ib(e),Q(),Of(n===`poor`?`lose`:`skill`),qb(e.mesh.position,r.icon+` `+r.name+`附身`,`#ffffff`,2.4),X(U(e)+`被`+r.name+`附身了，接下来 5 回合`+uT(n),r.color)}function pT(e){e.god&&(--e.god.n<=0&&(X(cT[e.god.k].name+`离开了`+U(e),F[e.id]),e.god=null),Ib(e),Q())}async function mT(){ef()?_x():rT(),V.round%5==0&&await WC(),V.round%4==0&&await sT(),await dT();for(let e of H)await zC(e);Q()}async function hT(e,t){let n=n=>{e.body.scale.setScalar(n),t.body.scale.setScalar(n)};Sb(e.mesh.position,Td[e.id]),Sb(t.mesh.position,Td[e.id]),Of(`skill`),await vm(240,e=>n(Math.max(.01,1-e)));let r=e.pos;ch(e,t.pos),ch(t,r),e.mesh.rotation.y=Ld,t.mesh.rotation.y=Ld,Om.copy(e.mesh.position),await hm(220),Sb(e.mesh.position,Td[e.id]),Sb(t.mesh.position,Td[e.id]),await vm(320,e=>n(Math.max(.01,yf(e)))),n(1)}var gT=e=>Math.round(e.price/2/100)*100;async function _T(e,t){if(e.charge<3)return!1;let n=F[e.id],r=t=>(e.local&&X(t,n),!1);switch(e.skill){case`lucky`:if(e.turtle>0)return r(`乌龟状态下只能走 1 步，技能先留着吧`);V.turnFlags.lucky=!0,V.turnFlags.double=!1,AC(e,tf(1500));break;case`fortune`:{let t=$m(e);if(!t.length)return!1;t.forEach(t=>MC(t,e,tf(700)));break}case`blink`:{if(e.turtle>0)return r(`乌龟状态下用不了瞬移`);let i=e.human?await Vb(e,`N`,()=>ex(`云朵瞬移`,n,12,`想瞬移到前面第几格？`)):t.n;if(!i)return!1;V.turnFlags.forced=i,V.turnFlags.blink=!0;break}case`build`:{let i=rf.filter(t=>t.owner===e.id&&t.level<3&&!t.loan);if(!i.length)return r(`还没有能升级的地（抵押中的地要先赎回）`);let a=t=>Math.round(Zy(e,t)/2/100)*100,o=i.filter(t=>e.cash>=a(t));if(!o.length)return r(`钱不够，升级要先攒点钱`);let s=e.human?await Vb(e,`T`,()=>nx(`连夜施工`,n,o,e=>e.name+`（`+e.level+` 级 → `+(e.level+1)+` 级，¥`+z(a(e))+`）`,`半价升级哪一块？`)):t.tile;if(!s)return!1;let c=a(s);NC(e,c),s.level++,s.invested+=c,Fx(s,!0),Of(`build`),Sb(s.lotPos,Td[e.id]);break}case`pilfer`:{let t=$m(e);if(!t.length)return!1;for(let r of t){if(r.cards.length&&e.cards.length<qm(e)){let t=r.cards.splice(Math.floor(Hy()*r.cards.length),1)[0];e.cards.push(t),qb(r.mesh.position,kd[t].icon,`#ffffff`,2.4),X(U(e)+`从`+U(r)+`手里偷走了一张`+kd[t].name,n)}else MC(r,e,tf(500)),X(U(e)+`从`+U(r)+`那里偷走了 ¥`+z(tf(500)),n);Sb(r.mesh.position,Td[e.id])}break}case`rampage`:if(e.turtle>0)return r(`乌龟状态下只能走 1 步，技能先留着吧`);V.turnFlags.rampage=!0,V.turnFlags.rampageHit=new Set;break;case`swap`:{let i=$m(e).filter(t=>t.pos!==e.pos);if(!i.length)return r(`对手都和你站在同一格，换了也一样`);let a=e.human?await Vb(e,`W`,()=>nx(`换位魔法`,n,i,e=>U(e)+`（站在`+rf[e.pos].name+`）`,`和谁互换位置？换完照常掷骰子。`)):t.target;if(!a)return!1;X(U(e)+`和`+U(a)+`互换了位置`,n),await hT(e,a);break}case`claim`:{let i=rf.filter(e=>e.type===`prop`&&e.owner<0);if(!i.length)return r(`地图上已经没有空地了`);let a=i.filter(t=>e.cash>=gT(t));if(!a.length)return r(`钱不够，半价也买不起`);let o=e.human?await Vb(e,`T`,()=>nx(`插旗圈地`,n,a.sort((e,t)=>t.price-e.price),e=>e.name+`（半价 ¥`+z(gT(e))+`，原价 ¥`+z(e.price)+`）`,`半价买下哪一块？`)):t.tile;if(!o)return!1;let s=gT(o);NC(e,s),o.owner=e.id,o.level=1,o.invested=s,X(U(e)+`半价圈下了`+o.name,n),Om.copy(o.lotPos),await hm(350),Fx(o,!0),Of(`build`),Sb(o.lotPos,Td[e.id]),Q(),await hm(1200),Wm(e);break}}return e.charge=0,e.anim.once(`Spellcast_Shoot`),X(U(e)+`发动了技能「`+e.skillName+`」`,n),Sb(e.mesh.position,Td[e.id]),qb(e.mesh.position,e.skillIcon+` `+e.skillName,`#ffffff`,2.2),Of(`skill`),Q(),!0}async function vT(){if(V.busy||Xb||!V.started)return;let e=Km(),t=e.charge>=3,n=t&&V.humanWaiting,r=`<div class="cardbig"><span class="ic" style="--cc:`+F[e.id]+`">`+e.skillIcon+`</span><div><div class="big">`+e.skillName+`</div><div class="sub">`+e.skillDesc+`</div></div></div><p class="sub">被动：`+e.passive+`。</p>`+(t?V.humanWaiting?``:`<p class="sub">技能充满了，轮到你的时候可以发动。</p>`:`<p class="sub">充能 `+e.charge+`/3，还要 `+(3-e.charge)+` 回合。</p>`);V.busy=!0,Q();let i=await Qb({title:`技能`,color:F[e.id],html:r,buttons:n?[{label:`再等等`,value:!1,cancel:!0},{label:`发动`,value:!0,primary:!0}]:[{label:`知道了`,value:!1,primary:!0}]});V.busy=!1,i&&V.humanWaiting&&V.humanResolve&&V.humanResolve(`skill`),Q()}function yT(e,t){let n=rf[t],r=0;return n.mine&&(r-=e.perk===`iron`?1:5),n.god&&(r+=(ef()?n.god.k===`rich`:n.god.k===`poor`)?-2.5:2.5),r+bT(e,n)}function bT(e,t){if(ef())return xT(e,t);switch(t.type){case`prop`:return t.owner<0?e.cash>$y(e,t)+2e3?3+t.price/2e3:.5:t.owner===e.id?!t.loan&&t.level<3&&e.cash>Zy(e,t)+3e3?2:.3:t.loan||nh(e,`luck`)||Zm(e,H[t.owner])?.2:e.cards.includes(`free`)?-.5:-Qy(t,e)/600;case`fine`:return-3;case`jail`:return-4;case`chance`:return .6;case`item`:return e.cards.length<qm(e)?1.4:.2;case`shop`:return e.cards.length<qm(e)&&e.pts>=20?1.2:.1;case`wish`:return 1.6;case`park`:return .6;case`bank`:return .5;case`lottery`:return .4;case`game`:return .4;case`start`:return 1;case`portal`:return 1;default:return 0}}function xT(e,t){switch(t.type){case`prop`:return t.owner<0?e.cash>=$y(e,t)?3+t.price/tf(1500):.3:t.owner===e.id?t.level<3&&e.cash>=Zy(e,t)?2.5:.4:nh(e,`luck`)||Zm(e,H[t.owner])?.2:e.cards.includes(`buyout`)&&e.cash>=t.invested?2:-1-Qy(t,e)/tf(600);case`treat`:return 3;case`luxury`:return e.cash>=tf(1200)?3:0;case`charity`:return e.cash>=tf(1e3)?2.2:0;case`refund`:return-3;case`lottery`:return+(e.cash>=tf(500));case`jail`:return e.cash>=tf(1e3)?.8:-.5;case`item`:return e.cards.length<qm(e)?1.2:.2;case`shop`:return e.cards.length<qm(e)&&e.pts>=20?1:.1;case`chance`:return-.8;case`start`:return-2;case`park`:return .6;default:return .3}}var ST=()=>ef()?-1.5:1.5;function CT(e,t){let n=0;for(let r=1;r<=6;r++)n+=yT(e,(t+r)%af)+(t+r>=af?ST():0);return n/6}function wT(e,t){let n=[];for(let r=1;r<=t;r++)n.push(yT(e,(e.pos+r)%af)+(e.pos+r>=af?ST():0));let r=Math.max(...n),i=n.reduce((e,t)=>e+t,0)/n.length;return{n:n.indexOf(r)+1,gain:r-i}}async function TT(e){let t=ef(),n=0,r=t=>e.cards.includes(t),i=async(t,i)=>{if(!r(t)||n>=2)return!1;await hm(300);let a=await Bx(e,t,i);return a&&(n++,await hm(500)),a};r(`money`)&&!t&&(await Bx(e,`money`,null),await hm(400));let a=$m(e),o=a.filter(e=>e.perk!==`iron`).sort((e,n)=>t?rh(e)-rh(n):th(n)-th(e))[0];if(r(`equal`)){let n=Jm(),r=n.reduce((e,t)=>e+t.cash,0)/n.length;(t?e.cash>r*1.3:e.cash<r*.65)&&await i(`equal`,{})}if(r(`tax`)&&!t){let e=a.slice().sort((e,t)=>t.cash-e.cash)[0];e&&e.cash>=6e3&&await i(`tax`,{target:e})}if(r(`steal`)&&e.cards.length-1<qm(e)){let e=a.filter(e=>e.cards.length).sort((e,t)=>t.cards.length-e.cards.length)[0];e&&Hy()<.7&&await i(`steal`,{target:e})}if(o&&r(`sleep`)&&o.sleep===0&&Hy()<.55&&await i(`sleep`,{target:o}),o&&r(`turtle`)&&o.turtle===0&&Hy()<.5&&await i(`turtle`,{target:o}),t){r(`waste`)&&!e.waste&&await i(`waste`,{});let t=a.slice().sort((e,t)=>rh(e)-rh(t))[0];t&&r(`dump`)&&!(e.dumpTo>=0)&&await i(`dump`,{target:t});let n=a.filter(e=>!e.flip).sort((e,t)=>rh(e)-rh(t))[0];if(n&&r(`oops`)&&await i(`oops`,{target:n}),r(`cart`)&&rh(e)>=tf(2e3)&&await i(`cart`,{}),r(`aura`)){let t=e=>H.filter(t=>t!==e&&!t.bankrupt&&Math.min((t.pos-e.pos+af)%af,(e.pos-t.pos+af)%af)<=3),n=a.map(n=>({o:n,n:t(n).length+ +!!t(n).includes(e)})).sort((e,t)=>t.n-e.n)[0];n&&n.n>0&&await i(`aura`,{target:n.o})}}if(r(`demolish`)){let n=rf.filter(t=>t.owner>=0&&t.owner!==e.id&&!H[t.owner].bankrupt&&!Zm(e,H[t.owner])).sort((e,n)=>t&&rh(H[e.owner])-rh(H[n.owner])||Yy(n)-Yy(e));n[0]&&(n[0].level>=2||Hy()<.35)&&await i(`demolish`,{tile:n[0]})}if(r(`block`)){let t=null,n=0;for(let r=1;r<=6;r++){let i=rf[(e.pos+r)%af];i.owner===e.id&&!i.loan&&!i.block&&!i.mine&&Yy(i)>=tf(800)&&(!t||Yy(i)>Yy(t))&&(t=i,n=r)}t&&await i(`block`,{n})}if(r(`mine`)){let t=0,n=0;for(let r=1;r<=6;r++){let i=rf[(e.pos-r+af)%af];if(i.block||i.mine)continue;let o=a.filter(e=>e.perk!==`iron`&&e.pos!==i.i&&(i.i-e.pos+af)%af<=6).length;o>n&&(n=o,t=r)}t&&Hy()<.75&&await i(`mine`,{n:t})}let s=rf.filter(t=>t.owner===e.id&&t.loan&&e.cash-eh(t)>=6e3).sort((e,t)=>t.invested-e.invested)[0];s&&(dC(e,`redeem:`+s.i),await hm(400));let c=[`fortune`,`lucky`,`pilfer`,`rampage`].includes(e.skill);if(e.charge>=3&&!(t&&c)){if(e.skill===`fortune`)await _T(e,{});else if(e.skill===`lucky`&&e.turtle===0)await _T(e,{});else if(e.skill===`build`){let n=rf.filter(n=>n.owner===e.id&&n.level<3&&!n.loan&&(t||e.cash-Zy(e,n)/2>=2500)&&e.cash>=Zy(e,n)/2).sort((e,t)=>t.price-e.price);n[0]&&await _T(e,{tile:n[0]})}else if(e.skill===`blink`&&e.turtle===0){let t=wT(e,12);t.gain>1.5&&await _T(e,{n:t.n})}else if(e.skill===`pilfer`)await _T(e,{});else if(e.skill===`rampage`&&e.turtle===0)await _T(e,{});else if(e.skill===`swap`&&e.turtle===0){let t=CT(e,e.pos),n=a.filter(t=>t.pos!==e.pos).map(t=>({o:t,v:CT(e,t.pos)})).sort((e,t)=>t.v-e.v)[0];n&&n.v-t>.8&&await _T(e,{target:n.o})}else if(e.skill===`claim`){let n=rf.filter(n=>n.type===`prop`&&n.owner<0&&e.cash-Math.round(n.price/2/100)*100>=(t?0:2500)).sort((e,t)=>t.price-e.price);n[0]&&await _T(e,{tile:n[0]})}await hm(400)}if(!V.turnFlags.forced&&e.turtle===0){if(r(`remote`)){let t=wT(e,6);t.gain>1.2&&await Bx(e,`remote`,{n:t.n})}!V.turnFlags.forced&&!V.turnFlags.lucky&&!V.turnFlags.rampage&&r(`double`)&&Hy()<.35&&await Bx(e,`double`,{})}Q()}function ET(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`);return n.fillStyle=`#e9dfcf`,n.fillRect(0,0,128,128),n.fillStyle=`#fffdf7`,bf(n,5,5,118,118,22),n.fill(),{1:[[64,64]],2:[[38,38],[90,90]],3:[[34,34],[64,64],[94,94]],4:[[38,38],[90,38],[38,90],[90,90]],5:[[36,36],[92,36],[64,64],[36,92],[92,92]],6:[[38,32],[90,32],[38,64],[90,64],[38,96],[90,96]]}[e].forEach(([t,r])=>{n.beginPath(),n.arc(t,r,e===1?20:11,0,Math.PI*2),n.fillStyle=e===1?`#ff4f6d`:`#2a2b5e`,n.fill()}),Hg(t)}var DT=q(.9,.9,.9),OT=null,kT={1:[0,0],2:[-Math.PI/2,0],3:[0,Math.PI/2],4:[0,-Math.PI/2],5:[Math.PI/2,0],6:[Math.PI,0]};async function AT(e,t,n){OT||=[3,4,1,6,2,5].map(e=>new oo({map:ET(e),roughness:.4}));let r=t.length,i=e.mesh.position,a=3.4,o=t.map((e,t)=>{let n=new Li(DT,OT);return n.castShadow=!0,n.position.set(i.x+(t-(r-1)/2)*1.15,a,i.z+.4),Tm.add(n),_m.add(n),n});Of(`dice`);let s=o.map(()=>[B(9,15)*(Math.random()<.5?-1:1),B(7,12),B(9,15)]);await vm(n?380:760,e=>o.forEach((t,n)=>{let r=s[n];t.rotation.set(r[0]*e,r[1]*e,r[2]*e),t.position.y=a+Math.abs(Math.sin(e*Math.PI*2.5))*(1-e)*.9}));let c=t.map(e=>new Gt().setFromEuler(new En(kT[e][0],Ld+B(-.25,.25),kT[e][1],`YXZ`))),l=o.map(e=>e.quaternion.clone());await vm(240,e=>o.forEach((t,n)=>{t.quaternion.copy(l[n]).slerp(c[n],e),t.position.y=a})),o.forEach((e,n)=>qb(e.position,String(t[n]),`#ffd23f`,.2)),await hm(n?380:600),await vm(200,e=>o.forEach(t=>t.scale.setScalar(Math.max(.001,1-e)))),o.forEach(e=>{Tm.remove(e),_m.delete(e)})}var jT=[`remote`,`free`,`demolish`,`tax`,`double`,`money`,`buyout`,`steal`,`mine`,`block`,`turtle`,`sleep`,`equal`];function MT(e,t){e.pts+=t,qb(e.mesh.position,`+`+t+` 点券`,`#ffd86b`,2.4),Q()}function NT(e,t){let n=t.filter(t=>kd[t].pts<=e.pts).map(e=>({label:kd[e].icon+` `+kd[e].name+`　`+kd[e].pts+` 点券`,value:e}));n.push({label:`走了`,value:null,cancel:!0,primary:!0});let r=t.map(e=>{let t=kd[e];return`<li><span class="mini" style="--cc:`+t.color+`">`+t.icon+`</span><span><b>`+t.name+`</b>　`+t.pts+` 点券<br><span class="sub">`+ix(t.desc)+`</span></span></li>`}).join(``);return Qb({title:Od.shop.label,color:Od.shop.color,html:`<p>你有 <span class="num">`+e.pts+`</span> 点券，手里 `+e.cards.length+`/`+qm(e)+` 张卡。今天的货：</p><ul class="dex">`+r+`</ul>`,buttons:n,list:!0})}async function PT(e){let t=U(e),n=F[e.id];if(e.cards.length>=qm(e)){X(t+`的道具卡满了，在道具屋逛了一圈`,n);return}let r=[],i=PC();for(let e=0;e<16&&r.length<4;e++){let e=Uy(i);r.includes(e)||r.push(e)}if(!r.some(t=>kd[t].pts<=e.pts)){X(t+`的点券不够（`+e.pts+` 点），在道具屋逛了一圈`,n),await hm(300);return}for(let i=0;i<4&&!(e.cards.length>=qm(e)||!r.some(t=>kd[t].pts<=e.pts));i++){let a;if(a=e.human?await Vb(e,`S`,()=>NT(e,r),()=>null):i<2?jT.find(t=>r.includes(t)&&kd[t].pts<=e.pts&&e.pts-kd[t].pts>=(i?20:0)):null,!a||!r.includes(a)||kd[a].pts>e.pts)break;let o=kd[a];e.pts-=o.pts,e.cards.push(a),r.splice(r.indexOf(a),1),e.anim.once(`PickUp`),Of(`card`),qb(e.mesh.position,o.icon+` `+o.name,`#ffffff`,2.2),X(t+`在道具屋用 `+o.pts+` 点券买了一张`+o.name,n),Q(),await hm(e.human?200:450)}}var FT=Od.game.color,IT=300,LT=[{label:`¥3,000`,short:`3000`,color:`#ffbe2e`,w:1,run:e=>AC(e,3e3)},{label:`道具卡`,short:`🎁`,color:`#1fb5a3`,w:2,run:e=>FC(e)},{label:`¥500`,short:`500`,color:`#7ad0ff`,w:3,run:e=>AC(e,500)},{label:`扣 ¥1,000`,short:`-1000`,color:`#6b7895`,w:2,run:e=>jC(e,1e3)},{label:`¥1,000`,short:`1000`,color:`#ff8a4c`,w:2,run:e=>AC(e,1e3)},{label:`50 点券`,short:`🎟️`,color:`#e07bff`,w:2,run:e=>MT(e,50)},{label:`技能充满`,short:`⚡`,color:`#a593ff`,w:1,run:e=>{e.charge=3,Q()}},{label:`谢谢参与`,short:`🙂`,color:`#c8c3e8`,w:2,run:()=>{}}],RT=[`🍒`,`🍋`,`🔔`,`⭐`,`💎`,`7️⃣`],zT={"7️⃣":20,"💎":10};function BT(e,t,n,r,i){return Vb(e,`G`,()=>Qb({title:t,color:FT,html:n,buttons:[...r,{label:`不玩了`,value:null,cancel:!0,primary:!0}],list:!0}),()=>i)}async function VT(e){let t=[500,1e3,2e3].filter(t=>t<=e.cash),n,r;if(e.human){if(n=await BT(e,`猜大小`,`<p>三颗骰子加起来 11～18 是大，3～10 是小。猜对了赢一倍，猜错了赔掉下注。下多少？</p>`,t.map(e=>({label:`下注 ¥`+z(e),value:e})),null),!t.includes(n)||(r=await BT(e,`猜大小`,`<p>下注 ¥`+z(n)+`，猜大还是猜小？</p>`,[{label:`大（11～18）`,value:`big`},{label:`小（3～10）`,value:`small`}],`big`),r!==`big`&&r!==`small`))return}else n=ef()?t[t.length-1]:t[0],r=Hy()<.5?`big`:`small`;let i=[Wy(),Wy(),Wy()],a=i[0]+i[1]+i[2],o=a>=11==(r===`big`);await AT(e,i);let s=U(e)+`猜`+(r===`big`?`大`:`小`)+`，开出 `+a+` 点（`+(a>=11?`大`:`小`)+`）`;o?(AC(e,n),X(s+`，赢了 ¥`+z(n),F[e.id])):(jC(e,n),Of(`lose`),X(s+`，输了 ¥`+z(n),F[e.id])),await hm(500)}function HT(e){let t=360/LT.length,n=LT.map((e,n)=>e.color+` `+n*t+`deg `+(n+1)*t+`deg`).join(`,`),r=LT.map((e,n)=>`<span style="transform:rotate(`+(n+.5)*t+`deg)">`+e.short+`</span>`).join(``),i=2160-(e+.5)*t;return`<div class="wheel"><i class="ptr"></i><div class="disc" style="background:conic-gradient(`+n+`);transform:rotate(`+i+`deg)">`+r+`</div></div><p class="big reveal">`+LT[e].label+`！</p>`}async function UT(e){if(e.cash<IT)return;e.cash-=IT,qb(e.mesh.position,`-300`,`#ff6b85`),Q();let t=Hy()*LT.reduce((e,t)=>e+t.w,0),n=0;for(;t>=LT[n].w;)t-=LT[n].w,n++;Of(`dice`),e.local?await Qb({title:`幸运转盘`,color:FT,html:HT(n),buttons:[{label:`好的`,value:!0,primary:!0}]}):await hm(700),X(U(e)+`转了一次转盘：`+LT[n].label,F[e.id]),LT[n].run(e),await hm(400)}function WT(e,t){return`<div class="slots">`+e.map((e,t)=>{let n=RT.indexOf(e),r=[];for(let e=0;e<10+t*4;e++)r.push(RT[(n+1+e*5)%RT.length]);return r.push(e),`<div class="reel"><div class="strip" style="transform:translateY(`+-(r.length-1)*56+`px);animation-duration:`+(1.1+t*.45)+`s">`+r.map(e=>`<span>`+e+`</span>`).join(``)+`</div></div>`}).join(``)+`</div><p class="big reveal late">`+t+`</p>`}async function GT(e){let t=[500,1e3].filter(t=>t<=e.cash),n=e.human?await BT(e,`老虎机`,`<p>三个一样：7️⃣ 赔 20 倍，💎 赔 10 倍，其他赔 5 倍；两个一样赔 1.5 倍。下多少？</p>`,t.map(e=>({label:`下注 ¥`+z(e),value:e})),null):t[ef()?t.length-1:0];if(!t.includes(n))return;e.cash-=n,qb(e.mesh.position,`-`+z(n),`#ff6b85`),Q();let r=[0,1,2].map(()=>RT[Math.floor(Hy()*RT.length)]),i=Math.max(...r.map(e=>r.filter(t=>t===e).length)),a=i===3?n*(zT[r[0]]||5):i===2?n*1.5:0,o=r.join(` `)+(a?`，赢了 ¥`+z(a)+`！`:`，没中`);Of(`dice`),e.local?await Qb({title:`老虎机`,color:FT,html:WT(r,o),buttons:[{label:`好的`,value:!0,primary:!0}]}):await hm(700),X(U(e)+`玩老虎机：`+o,F[e.id]),a?AC(e,a):Of(`lose`),await hm(400)}async function KT(e){let t=U(e);if(e.cash<500){X(t+`的钱不够，在游戏厅看别人玩了一会儿`,F[e.id]);return}let n=e.human?await BT(e,`游戏厅`,`<p>玩哪一个？你现在有 ¥`+z(e.cash)+`。</p>`,[{label:`🎲 猜大小（¥500 起）`,value:`dice`},{label:`🎡 幸运转盘（¥300 一次）`,value:`wheel`},{label:`🎰 老虎机（¥500 起）`,value:`slot`}],null):ef()?Hy()<.5?`slot`:`dice`:e.cash>=6e3&&Hy()<.6?[`wheel`,`wheel`,`slot`,`dice`][Math.floor(Hy()*4)]:null;n===`dice`?await VT(e):n===`wheel`?await UT(e):n===`slot`?await GT(e):e.local||X(t+`在游戏厅门口看了看，没进去`,F[e.id])}var qT=[{good:!0,text:`捡到一袋金币，拿到 ¥1,000`,run:e=>AC(e,1e3)},{good:!0,text:`云端彩票中奖了，拿到 ¥2,000`,run:e=>AC(e,2e3)},{text:`一阵大风吹走了钱包，丢了 ¥800`,run:e=>{jC(e,800),Of(`lose`)}},{text:`请大家喝奶茶，每人 ¥300`,run:e=>$m(e).forEach(t=>MC(e,t,300))},{good:!0,text:`过生日啦，每人送你 ¥300`,run:e=>$m(e).forEach(t=>MC(t,e,300))},{good:!0,text:`搭上顺风云，往前飞 3 格`,move:3},{text:`在雾里迷路了，后退 2 格`,move:-2},{good:!0,text:`在路边捡到一张道具卡`,run:e=>FC(e)},{good:!0,text:`帮商店搬货，拿到 30 点券`,run:e=>MT(e,30)},{text:`闯红灯被警察抓住，关进监狱 1 回合`,run:e=>{e.jail=Math.max(e.jail,1),Ib(e),Q()}},{good:!0,text:`灵感爆发，技能直接充满`,run:e=>{e.charge=3,Q()}},{text:`吃坏了肚子，下回合要躺着休息`,run:e=>{if(e.perk===`iron`){X(U(e)+`骨头硬，吃坏肚子也照样上路`,F[e.id]);return}e.sleep=1,Ib(e),Q()}},{text:`房子要翻新，每级房子交 ¥200`,run:e=>{let t=rf.reduce((t,n)=>t+(n.owner===e.id?n.level:0),0);t?(jC(e,t*200),Of(`lose`)):X(`还没有房子，躲过一劫`,F[e.id])}}];async function JT(e,t){let n=ef()?yx:qT,r=Uy(e.perk===`oracle`?n.filter(e=>e.good):n),i=r.amt?tf(r.amt):0,a=typeof r.text==`function`?r.text(z(i)):r.text;e.local?await Qb({title:`机会`,color:Od.chance.color,html:`<p class="big">`+a+`</p>`,buttons:[{label:`好的`,value:!0,primary:!0}]}):(X(U(e)+`：`+a,F[e.id]),await hm(700)),r.move?t<2&&(await tE(e,r.move),await rE(e,t+1)):r.run(e,i)}async function YT(e,t,n){e.cards.splice(e.cards.indexOf(`buyout`),1),MC(e,n,t.invested),t.owner=e.id,Fx(t,`pop`),Of(`build`),Sb(t.lotPos,Td[e.id]),X(U(e)+`用购地卡买下了`+U(n)+`的`+t.name,F[e.id]),Q(),await hm(500)}async function XT(e,t,n,r){let i=U(e),a=F[e.id];if(nh(e,`luck`)){qb(e.mesh.position,`🍀 福神保佑`,`#ffffff`,2.2),X(`福神保佑，`+i+`踩到`+U(n)+`的地，不用收他的红包`,a);return}if(e.cards.includes(`buyout`)&&e.cash>=t.invested&&(e.human?await Vb(e,`R`,()=>Qb({title:`踩到`+U(n)+`的地了`,color:F[n.id],html:`<p class="big">`+t.name+`：`+U(n)+`要请客，塞给你 <span class="num">¥`+z(r)+`</span></p><p class="sub">📜 用购地卡，花 ¥`+z(t.invested)+` 把这块地连房子买过来（钱给了`+U(n)+`），这次也不用收他的钱。</p>`,buttons:[{label:`只好收下`,value:`take`,cancel:!0},{label:`购地卡`,value:`buy`,primary:!0}]}),()=>`buy`):`buy`)===`buy`){await YT(e,t,n);return}MC(n,e,r),X(U(n)+`请客：给踩到`+t.name+`的`+i+`塞了 ¥`+z(r),F[n.id]),await hm(400)}async function ZT(e,t){let n=U(e),r=F[e.id],i=ef();if(t.owner<0){let a=$y(e,t);if(e.cash<a){X(n+`的钱不够买`+t.name,r),i||await pC(t,e,null);return}if(!(e.human?await Vb(e,`B`,()=>Qb({title:t.name,color:r,html:`<p class="big">花 <span class="num">¥`+z(a)+`</span> 买下这块地吗？</p><p class="sub">`+(a<t.price?`黄金骑士买地打 8 折（原价 ¥`+z(t.price)+`）。`:``)+(i?`🙃 买下以后，别人停在这里，你要倒贴给他 ¥`:`买下后别人停在这里要付你 ¥`)+z(Jy(t,1)*(e.perk===`rent`?1.2:1))+`。你现在有 ¥`+z(e.cash)+`。</p>`,buttons:[{label:`不买`,value:!1,cancel:!0},{label:`买下`,value:!0,primary:!0}]}),()=>i||e.cash-a>=2500):i||e.cash-a>=2500||e.cash-a>=800&&Hy()<.35)){e.local||X(n+`路过`+t.name+`，没有买`,r),i||await pC(t,e,e);return}NC(e,a),t.owner=e.id,t.level=1,t.invested=a,Q(),e.local&&await cC(`buy`,e,n+`买下了`+t.name+`！`),Fx(t,!0),Of(`build`),X(n+`买下了`+t.name,r),Q(),await hm(1100)}else if(t.owner===e.id){if(t.loan){X(t.name+`抵押给银行了，赎回才能升级`,r);return}if(t.level>=3){X(t.name+`已经是最高级了`,r);return}let a=Zy(e,t);if(e.cash<a)return;let o=()=>i||e.cash-a>=3500;if(!(e.human?await Vb(e,`U`,()=>Qb({title:t.name,color:r,html:`<p class="big">花 <span class="num">¥`+z(a)+`</span> 把房子升到 `+(t.level+1)+` 级？</p><p class="sub">`+(e.perk===`builder`?`建筑达人打了 9 折。`:``)+(i?`🙃 楼越豪华越费钱：别人踩到这里，你倒贴的钱会从 ¥`:`租金会从 ¥`)+z(Yy(t))+` 涨到 ¥`+z(Jy(t,t.level+1)*(e.perk===`rent`?1.2:1))+`。你现在有 ¥`+z(e.cash)+`。</p>`,buttons:[{label:`先不升`,value:!1,cancel:!0},{label:`升级`,value:!0,primary:!0}]}),o):o()))return;NC(e,a),t.level++,t.invested+=a,Q(),e.local&&await cC(`upgrade`,e,t.name+`升到了 `+t.level+` 级！`),Fx(t,!0),Of(`build`),X(n+`把`+t.name+`升到了 `+t.level+` 级`,r),Q(),await hm(1100)}else{let a=H[t.owner],o=Qy(t,e);if(t.loan){X(t.name+`抵押给银行了，`+U(a)+`收不了租`,r);return}if(Zm(e,a)){X(n+`踩到队友`+U(a)+`的地，不用付租金`,r);return}if(i){await XT(e,t,a,o);return}if(nh(e,`luck`)){qb(e.mesh.position,`🍀 福神保佑`,`#ffffff`,2.2),X(`福神保佑，`+n+`踩到`+U(a)+`的地不用付租金`,r);return}let s=e.cards.includes(`free`),c=e.cards.includes(`buyout`)&&e.cash>=t.invested,l=`pay`;if(s||c){if(e.human){let n=[{label:`照付`,value:`pay`,cancel:!0}];s&&n.push({label:`免租卡`,value:`free`,primary:!0}),c&&n.push({label:`购地卡`,value:`buy`,primary:!s}),l=await Vb(e,`R`,()=>Qb({title:`踩到`+U(a)+`的地了`,color:F[a.id],html:`<p class="big">`+t.name+`，租金 <span class="num">¥`+z(o)+`</span></p>`+(o<Yy(t)?`<p class="sub">🌙 月光神偷付租金打 8 折。</p>`:``)+(s?`<p class="sub">🛡️ 用免租卡，这次不用付钱。</p>`:``)+(c?`<p class="sub">📜 用购地卡，花 ¥`+z(t.invested)+` 把这块地连房子买过来。</p>`:``),buttons:n}),()=>s&&o>=500?`free`:`pay`)}else c&&t.level>=2&&e.cash-t.invested>=3e3?l=`buy`:s&&o>=500&&(l=`free`)}if((l===`free`&&!s||l===`buy`&&!c||![`pay`,`free`,`buy`].includes(l))&&(l=`pay`),l===`free`){e.cards.splice(e.cards.indexOf(`free`),1),Of(`card`),qb(e.mesh.position,`🛡️ 免租`,`#ffffff`,2.2),X(n+`用了免租卡，一分没付`,r),Q();return}if(l===`buy`){await YT(e,t,a);return}MC(e,a,o),X(n+`付给`+U(a)+`租金 ¥`+z(o),r),await hm(400)}}function QT(e){let t=AC(e,tf(vd+(e.perk===`salary`?1500:0)));e.pts+=20,X(U(e)+(ef()?`经过起点，又被硬塞了 ¥`:`经过起点，领到 ¥`)+z(t)+` 和 20 点券`,F[e.id])}async function $T(e,t){Mb(t,!0),Of(`lose`),qb(e.mesh.position,`💥`,`#ffffff`,2.2),e.anim.once(`Hit_A`),e.perk===`iron`?X(U(e)+`踩响了地雷，皮糙肉厚，拍拍土接着上路`,F[e.id]):(e.hosp=2,Ib(e),X(U(e)+`踩到地雷被炸伤了，要住院 2 回合`,F[e.id])),Q(),await hm(500)}function eE(e,t){let n=V.turnFlags.rampageHit;for(let r of H)r===e||r.bankrupt||r.pos!==t||n.has(r)||Zm(r,e)||(n.add(r),MC(r,e,tf(500)),Sb(r.mesh.position,Td[e.id]),qb(r.mesh.position,`💥`,`#ffffff`,2.4),X(U(e)+`撞上了`+U(r)+`，`+U(r)+`交了 ¥`+z(tf(500)),F[e.id]))}async function tE(e,t){km.set(0,0,0);let n=Math.sign(t),r=V.turnFlags.rampage&&H[V.cur]===e;for(let i=0;i<Math.abs(t);i++){let a=(e.pos+n+af)%af,o=rf[a];if(await gh(e,a),e.pos=a,n>0&&a===0&&QT(e),r&&eE(e,a),o.god&&fT(e,o),o.mine){await $T(e,o);break}if(o.block&&r)kb(o),Of(`lose`),qb(e.mesh.position,`💥`,`#ffffff`,2.2),X(U(e)+`一头撞碎了路障，继续往前冲`,F[e.id]);else if(o.block){kb(o),Of(`lose`),qb(e.mesh.position,`🚧`,`#ffffff`,2.2),X(U(e)+`撞上路障，只好停下`,F[e.id]),await hm(350);break}o.type===`bank`&&i<Math.abs(t)-1&&await nT(e,!0)}await _h(e)}async function nE(e,t){km.set(0,0,0);let n=(e.pos+t)%af,r=e.pos+t>=af;Sb(e.mesh.position,Td[e.id]),await vm(240,t=>e.body.scale.setScalar(Math.max(.01,1-t))),ch(e,n),e.mesh.rotation.y=Ld,Om.copy(e.mesh.position),await hm(250),Sb(e.mesh.position,Td[e.id]),await vm(320,t=>e.body.scale.setScalar(Math.max(.01,yf(t)))),e.body.scale.set(1,1,1),r&&QT(e);let i=rf[n];i.god&&fT(e,i),i.mine&&await $T(e,i)}async function rE(e,t){let n=rf[e.pos],r=U(e),i=F[e.id];switch(n.type){case`prop`:await ZT(e,n);break;case`fine`:jC(e,2e3),Of(`lose`),X(r+`被罚了 ¥2,000`,i),await hm(400);break;case`item`:e.local&&await cC(`card`,e,U(e)+`拿到一张道具卡！`)||await Eb(e),FC(e),await hm(400);break;case`shop`:await PT(e);break;case`bank`:await nT(e,!1);break;case`lottery`:await UC(e);break;case`game`:await KT(e);break;case`jail`:e.jail=2,Ib(e),Of(`lose`),qb(e.mesh.position,`🚔`,`#ffffff`,2.2),X(r+`进了监狱，要关 2 回合（轮到时可以交 ¥`+z(tf(yd))+` 保释）`,i),Q(),await hm(500);break;case`park`:X(r+`在公园晒太阳，技能多充 1 格`,i),e.charge=Math.min(3,e.charge+1),Q();break;case`wish`:{let t=500+Math.floor(Hy()*16)*100;AC(e,t),X(r+`在许愿池许了个愿，拿到 ¥`+z(t),i),await hm(400);break}case`chance`:await JT(e,t);break;case`treat`:await cx(e);break;case`luxury`:await dx(e);break;case`charity`:await mx(e);break;case`refund`:await hx(e);break;case`portal`:{if(rf.filter(e=>e.type===`portal`).length<2)break;let t=1;for(;rf[(e.pos+t)%af].type!==`portal`;)t++;X(r+`坐上`+Od.portal.label+`，去了下一站`,i),await hm(300),await nE(e,t);break}}}function iE(){V.humanWaiting&&V.humanResolve&&!V.busy&&!Xb&&V.humanResolve(`roll`)}function aE(){return new Promise(e=>{V.humanResolve=e,V.humanWaiting=!0,Q()}).finally(()=>{V.humanWaiting=!1,V.humanResolve=null,Q()})}async function oE(e){for(;;){let t=await Vb(e,`P`,aE,()=>`roll`);if(t===`roll`||!t||(t===`skill`?await _T(e,null):t.startsWith(`card:`)?await Bx(e,t.slice(5),null):(t.startsWith(`mort:`)||t.startsWith(`redeem:`))&&dC(e,t),V.turnFlags.forced))return}}async function sE(e){let t=U(e),n=F[e.id];if(V.turnFlags={},e.botNext&&=(e.human=!1,!1),e.waste&&(e.waste=!1,Ib(e)),Wm(e),e.charge=Math.min(3,e.charge+1),Q(),Of(`turn`),e.sleep>0){e.sleep=0,Ib(e),qb(e.mesh.position,`💤`,`#ffffff`,2.2),X(t+`在呼呼大睡，这回合跳过`,n),await hm(1100),pT(e),Q();return}if(e.hosp>0){e.hosp--,Ib(e),qb(e.mesh.position,`🏥`,`#ffffff`,2.2),X(t+`在医院养伤，这回合不能走`+(e.hosp?`（还要 `+e.hosp+` 回合）`:``),n),await hm(1100),pT(e),Q();return}if(e.jail>0){let r=tf(yd);if((e.cash>=r&&(e.human?await Vb(e,`J`,()=>Qb({title:Od.jail.label,color:Od.jail.color,html:`<p class="big">还要关 `+e.jail+` 回合。交 ¥`+z(r)+` 保释，马上出来？</p><p class="sub">你现在有 ¥`+z(e.cash)+`。</p>`,buttons:[{label:`再关一回合`,value:!1,cancel:!0},{label:`交保释金`,value:!0,primary:!0}]}),()=>ef()||e.cash-1e3>=5e3):ef()||e.cash-1e3>=6e3))===!0){let i=NC(e,r);e.jail=0,Ib(e),Of(`coin`),X(t+(i?`交了 ¥`+z(i)+` 保释金，出狱了`:`出狱了`),n),Q()}else{e.jail--,Ib(e),qb(e.mesh.position,`🚔`,`#ffffff`,2.2),X(t+`在监狱里，这回合不能走`+(e.jail?`（还要 `+e.jail+` 回合）`:``),n),await hm(1100),pT(e),Q();return}}if(ef()&&await gx(e),X(e.local?e.charge>=3?`轮到你啦，技能充满了，可以发动`:`轮到你啦，掷骰子吧`:`轮到`+t,n),await hm(e.local?250:650),e.human?await oE(e):await TT(e),e.turtle>0)e.turtle--,Ib(e),Q(),qb(e.mesh.position,`🐢`,`#ffffff`,2.2),X(t+`被乌龟拖住了，只能走 1 步`,n),await hm(450),await tE(e,1);else if(V.turnFlags.blink)X(t+`瞬移到前方第 `+V.turnFlags.forced+` 格`,n),await nE(e,V.turnFlags.forced);else{let r;r=V.turnFlags.forced?[V.turnFlags.forced]:V.turnFlags.lucky?[3+Math.floor(Hy()*4),3+Math.floor(Hy()*4)]:V.turnFlags.double||V.turnFlags.rampage?[Wy(),Wy()]:[Wy()],await AT(e,r,!!V.turnFlags.forced);let i=r.reduce((e,t)=>e+t,0);X(V.turnFlags.forced?t+`用遥控骰子走 `+i+` 步`:t+`掷出了 `+i+` 点`,n),await tE(e,i)}await rE(e,0);for(let e of H)await zC(e);pT(e),Q(),await hm(e.local?350:550)}var cE=[`wss://broker.emqx.io:8084/mqtt`,`wss://broker-cn.emqx.io:8084/mqtt`],lE=`8ee576fd`,uE=`yunshang-dafuweng/8ee576fd`,dE=4e3,fE=12e3,pE=15e3,mE=4096,hE=e=>Array.from(crypto.getRandomValues(new Uint8Array(e)),e=>(e%36).toString(36)).join(``),gE=new TextEncoder,_E=new TextDecoder;function vE(...e){let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t}var yE=e=>Uint8Array.of(e>>8,e&255),bE=e=>{let t=typeof e==`string`?gE.encode(e):e;return vE(yE(t.length),t)};function xE(e,...t){let n=vE(...t),r=[],i=n.length;do{let e=i%128;i=Math.floor(i/128),i&&(e|=128),r.push(e)}while(i);return vE(Uint8Array.of(e,...r),n)}var SE=Uint8Array.of(192,0),CE=Uint8Array.of(224,0);function wE(e,t,n){let r={url:e,i:t,ws:null,ready:!1,heard:0,retry:0,timer:0,closed:!1},i=()=>{r.closed||(r.timer=setTimeout(a,Math.min(1e4,1e3*2**r.retry++)))};function a(){if(clearTimeout(r.timer),r.closed||r.ws)return;let t;try{t=new WebSocket(e,`mqtt`)}catch{i();return}r.ws=t,t.binaryType=`arraybuffer`;let a=setTimeout(()=>{r.ready||t.close()},8e3),s=new Uint8Array;t.onopen=()=>t.send(xE(16,bE(`MQTT`),Uint8Array.of(4,6),yE(30),bE(n.id),bE(n.will.topic),bE(gE.encode(n.will.msg)))),t.onmessage=e=>{if(r.ws===t)for(s=s.length?vE(s,new Uint8Array(e.data)):new Uint8Array(e.data);;){let e=0,n=1,i=1,a;do{if(i>=s.length)return;a=s[i++],e+=(a&127)*n,n*=128}while(a&128);if(s.length<i+e)return;let c=s[0],l=s.subarray(i,i+e);s=s.subarray(i+e),r.heard=Date.now(),o(t,c,l)}},t.onclose=()=>{if(clearTimeout(a),r.ws!==t)return;let e=r.ready;r.ws=null,r.ready=!1,e&&n.onDown(r),i()},t.onerror=()=>{}}function o(e,t,i){let a=t>>4;if(a===2){if(i[1]!==0){e.close();return}e.send(xE(130,yE(1),bE(n.filter),Uint8Array.of(0)))}else if(a===9){if(i[2]===128){e.close();return}r.ready=!0,r.retry=0,n.onReady(r)}else if(a===3){let a=t>>1&3,o=i[0]<<8|i[1],s=_E.decode(i.subarray(2,2+o)),c=2+o;if(a){let t=i.subarray(c,c+2);c+=2,e.send(xE(a===1?64:80,t))}n.onMessage(r,s,i.subarray(c))}else a===6&&e.send(xE(112,i.subarray(0,2)))}return r.send=e=>{r.ready&&r.ws&&r.ws.send(e)},r.close=(e,t)=>{t&&(r.closed=!0,clearTimeout(r.timer));let n=r.ws,i=r.ready;n&&(t&&(r.ws=null,r.ready=!1),n.readyState===1&&(e&&i&&n.send(e),n.send(CE)),n.close())},r.check=e=>{r.closed||(r.ready&&e-r.heard>pE?r.ws.close():r.ws||a())},a(),r}function TE(e=cE){let t=hE(12),n=``,r=Object.freeze({}),i=0,a=Date.now(),o=[],s=Object.freeze([]),c=new Map,l=!1,u=new Map,d=new Set,f=new Set,p=e=>uE+`/`+n+`/`+e,m=e=>gE.encode(JSON.stringify(e)),h=(e,n)=>xE(48,bE(p(t)),m({t:e,...n})),g=e=>{for(let t of o)t.send(e)},_=(e,t)=>!!e.presence&&e.seen.some(e=>e&&t-e<fE),v=0;function y(){let e=Date.now(),n=[Object.freeze({peer:t,by:null,isMe:!0,sameTab:!0,kind:`viewer`,guest:!1,presence:r,updatedAt:a})];for(let[t,r]of u)_(r,e)&&n.push(Object.freeze({peer:t,by:null,isMe:!1,sameTab:!1,kind:`viewer`,guest:!1,presence:r.presence,updatedAt:r.updatedAt}));s=Object.freeze(n),v||=setTimeout(b,0)}function b(){v=0;let e=new Map(s.map(e=>[e.peer,e])),t=s.filter(e=>!c.has(e.peer)),n=[...c.values()].filter(t=>!e.has(t.peer)),r=s.filter(e=>c.has(e.peer)&&c.get(e.peer).presence!==e.presence);if(c=e,t.length||n.length||r.length)for(let e of d)e({peers:s,joined:t,left:n,updated:r})}let x=()=>o.some(e=>e.ready);function S(){let e=x();if(e!==l){l=e;for(let t of f)setTimeout(()=>t(e),0)}}let C=0,w=0,T=()=>{C||=setTimeout(()=>{C=0,g(h(`p`,{s:i,p:r}))},30)},E=()=>{w||=setTimeout(()=>{w=0,g(h(`q`))},200)},ee={id:`dfw-`+t,filter:``,will:null,onReady(e){S(),e.send(h(`q`)),e.send(h(`p`,{s:i,p:r}))},onDown(){S()},onMessage(r,i,a){let o=i.split(`/`),s=o[3];if(o.length!==4||o[2]!==n||s===t||!/^[a-z0-9]{6,20}$/.test(s)||a.length>8192)return;let c;try{c=JSON.parse(_E.decode(a))}catch{return}if(!c||typeof c!=`object`)return;let l=Date.now(),d=u.get(s);if(c.t===`x`){d&&d.seen[r.i]&&(d.seen[r.i]=0,y());return}d||(d={s:-1,presence:null,updatedAt:0,seen:e.map(()=>0)},u.set(s,d));let f=_(d,l);d.seen[r.i]=l;let p=!1;c.t===`p`&&Number.isInteger(c.s)&&c.p&&typeof c.p==`object`&&!Array.isArray(c.p)?c.s>d.s&&(d.s=c.s,d.presence=Object.freeze(c.p),d.updatedAt=l,p=!0):c.t===`h`&&Number.isInteger(c.s)?c.s>d.s&&E():c.t===`q`&&T(),(p||_(d,l)!==f)&&y()}},te=0;setInterval(()=>{if(!n)return;let e=Date.now();g(h(`h`,{s:i})),++te%2==0&&g(SE);for(let t of o)t.check(e);let t=!1;for(let[n,r]of u)r.seen.some(t=>t&&e-t<fE*3)?!_(r,e)&&s.some(e=>e.peer===n)&&(t=!0):u.delete(n);t&&y()},dE),document.addEventListener(`visibilitychange`,()=>{if(!document.hidden&&n){let e=Date.now();for(let t of o)t.check(e)}}),addEventListener(`pagehide`,()=>{for(let e of o)e.close(h(`x`),!1)});function ne(r){if(r=r?String(r):``,r===n)return Promise.resolve();for(let e of o)e.close(h(`x`),!0);return o=[],u.clear(),n=r,S(),y(),r?(ee.filter=uE+`/`+r+`/+`,ee.will={topic:p(t),msg:JSON.stringify({t:`x`})},o=e.map((e,t)=>wE(e,t,ee)),new Promise((e,t)=>{let i=Date.now(),a=setInterval(()=>{if(n!==r){clearInterval(a),t(Object.assign(Error(`换了房间`),{code:`upstream_error`}));return}if(x()){clearInterval(a),e();return}Date.now()-i>1e4&&(clearInterval(a),ne(null),t(Object.assign(Error(`连不上联机服务器`),{code:`upstream_error`})))},100)})):Promise.resolve()}return{kind:`mqtt`,version:lE,useRoom:ne,presence(e){let t={...r};for(let[n,r]of Object.entries(e||{}))r===null?delete t[n]:t[n]=r;return m(t).length>mE?Promise.reject(Object.assign(Error(`presence too large`),{code:`invalid_argument`})):(r=Object.freeze(t),i++,a=Date.now(),n&&T(),y(),Promise.resolve())},peers:()=>s,onPeers(e){return d.add(e),setTimeout(()=>{d.has(e)&&e({peers:s,joined:s,left:[],updated:[]})},0),()=>d.delete(e)},connected:x,onConnection(e){return f.add(e),setTimeout(()=>{f.has(e)&&e(x())},0),()=>f.delete(e)},servers:()=>o.map(e=>({url:e.url,ready:e.ready}))}}async function EE(){if(window.claude&&typeof window.claude.use==`function`){try{let e=await window.claude.use(`room`);if(e)return e}catch{}return null}let e=new URLSearchParams(location.search).get(`mqtt`);return typeof WebSocket==`function`?TE(e?e.split(`,`):void 0):null}var DE=[`app`,`room`,`nick`,`char`,`at`,`host`,`setup`,`game`,`cut`,`gid`,`log`,`chk`],$={api:void 0,room:null,unsub:null,unconn:null,offAt:0,code:``,me:``,mine:{},sawHost:!1,noHost:0,gid:``,game:null,cuts:{},cutAt:0,missing:{},warned:!1,timer:0},OE=()=>Array.from(crypto.getRandomValues(new Uint8Array(6)),e=>(e%36).toString(36)).join(``),kE=()=>crypto.getRandomValues(new Uint32Array(1))[0],AE=e=>e.match(/[^]{1,900}/g)||[],jE=e=>new TextEncoder().encode(JSON.stringify(e)).length,ME={get(e){try{return localStorage.getItem(e)}catch{return null}},set(e,t){try{localStorage.setItem(e,t)}catch{}}},NE=e=>Array.from(String(e||``).replace(/[\p{Cc}\p{Cf}\p{Co}\p{Cs}\p{Zl}\p{Zp}<>&"'`]/gu,``).trim()).slice(0,8).join(``),PE=e=>NE(e.presence.nick)||`玩家`,FE=(e,t)=>Number.isInteger(e)&&e>=0&&e<Md.length&&(t===void 0||Nd(e)===t),IE=()=>({theme:Wd,size:Gd,time:Hd,win:qd,team:Jd,ai:V.lineup.slice()}),LE=!1;function RE(e){if(!$.room)return Promise.resolve();let t={...$.mine};for(let[n,r]of Object.entries(e))r===null?delete t[n]:t[n]=r;return $.mine=t,LE||(LE=!0,setTimeout(()=>{LE=!1,aD()},0)),$.room.presence(e).catch(e=>console.warn(`在场状态没发出去`,e&&e.code,e&&e.message))}var zE=()=>!!$.room,BE=(e,t)=>(e.presence.at||0)-(t.presence.at||0)||(e.peer<t.peer?-1:1),VE=()=>($.room?$.room.peers():[]).map(e=>e.peer===$.me?{...e,presence:$.mine}:e).filter(e=>e.kind!==`agent`&&e.presence&&e.presence.app===`dfw`&&e.presence.room===$.code),HE=()=>VE().filter(e=>e.presence.host).sort(BE)[0]||null,UE=()=>{if(!$.me&&$.room){let e=$.room.peers().find(e=>e.sameTab);e&&($.me=e.peer)}return $.me},WE=()=>{let e=HE();return!!e&&e.peer===UE()};function GE(){let e=VE().filter(e=>FE(e.presence.char)).sort(BE),t=[null,null,null,null],n=[];for(let r of e){let e=Nd(r.presence.char);t[e]?n.push(r):t[e]=r}let r=HE(),i=r&&r.presence.setup&&Array.isArray(r.presence.setup.ai)?r.presence.setup.ai:[];return{seats:t,clash:n,lineup:t.map((e,t)=>e?e.presence.char:FE(i[t],t)?i[t]:t)}}function KE(e){V.started||e.every((e,t)=>V.lineup[t]===e)||(V.lineup=e.slice(),H.forEach(t=>fh(t,e[t.id])),hC(),Q())}function qE(){let{seats:e,clash:t,lineup:n}=GE(),r=HE(),i=UE(),a=e.map((e,t)=>{let r=n[t],a=e?Cf(PE(e))+(e.presence.host?` 👑`:``)+(e.peer===i?`（你）`:``):`电脑`;return`<li style="--c:`+F[t]+`"><img alt="" src="`+(vh[r]||``)+`"><span class="sk">`+Md[r].name+`</span><span class="sw`+(e?``:` ai`)+`">`+a+`</span></li>`}).join(``),o=Jd?Ym.map(e=>`<li class="thead">`+e.name+`</li>`).join(``):``,s=t.length?`<p class="rwarn">`+t.map(e=>Cf(PE(e))).join(`、`)+` 和别人选了同一种颜色，换一个角色吧</p>`:``,c=r?(WE()?`你是房主👑：选好地图，人齐了点“开始联机对战”，空座位电脑坐。`:`每种颜色只能一个人。选好角色，等房主👑开始。`)+`开局后别切到别的应用太久，不然电脑会接管你的座位。`:$.sawHost?`房主离开了，稍等几秒会有人接任房主。`:`还没找到房间 `+$.code+`：检查一下房间号，或者等房主进来。`+($.room.kind===`mqtt`?`两边的游戏版本要一样（网址打开的刷新一下）。`:``);return`<div class="room"><div class="rhead"><b>房间 `+$.code+`</b><span class="rtip">把房间号告诉朋友</span>`+(WE()?`<button type="button" class="reroll" id="foeShuffle">🔀 换电脑</button>`:``)+`<button type="button" class="reroll" id="netLeave">退出</button></div><ul class="seats">`+o+a+`</ul>`+s+`<p class="rhint">`+(Jd?`2 对 2：左边一队、右边一队，队友的资产加在一起算。`:``)+c+`</p></div>`}function JE(){if(!$.room||V.started)return;let{clash:e}=GE();WE()?(OD.disabled=e.length>0,OD.textContent=`开始联机对战`):(OD.disabled=!0,OD.textContent=`等房主开始…`)}async function YE(e,t){$.room&&await XE();let n=NE(R(`#netNick`)&&R(`#netNick`).value||ME.get(`dfw-nick`))||`玩家`+(kE()%90+10);ME.set(`dfw-nick`,n);let r={app:`dfw`,room:e,nick:n,char:V.selectedChar,at:Date.now()};t&&Object.assign(r,{host:1,setup:IE()}),$.api.useRoom&&await $.api.useRoom(e),await $.api.presence(r),Object.assign($,{room:$.api,code:e,me:``,mine:r,sawHost:t,noHost:0,game:null,cuts:{},cutAt:0,missing:{},warned:!1}),UE(),$.unsub=$.room.onPeers(aD,iD),$.unconn=$.room.onConnection?$.room.onConnection(rD):null,Z.isOffline=tD,clearInterval($.timer),$.timer=setInterval(uD,2e3),GD(),$E()}async function XE(){let e=$.room;if(!e)return;$.unsub&&$.unsub(),$.unconn&&$.unconn(),clearInterval($.timer),eD(),Z.isOffline=()=>!1,Z.on&&(Wb(),Xw()),Object.assign($,{room:null,unsub:null,unconn:null,offAt:0,code:``,me:``,game:null}),await e.presence(Object.fromEntries(DE.map(e=>[e,null]))).catch(()=>{}),e.useRoom&&await e.useRoom(null),$.mine={};let t=V.lineup.slice();t[Nd(V.selectedChar)]=V.selectedChar,KE(t),OD.disabled=!1,OD.textContent=`开始游戏`,GD()}var ZE=null,QE=!1;async function $E(){if(!(!$.room||ZE||QE||document.hidden||!(navigator.wakeLock&&navigator.wakeLock.request))){QE=!0;try{let e=await navigator.wakeLock.request(`screen`);$.room?(ZE=e,e.addEventListener(`release`,()=>{ZE===e&&(ZE=null)})):e.release().catch(()=>{})}catch{}QE=!1}}function eD(){let e=ZE;ZE=null,e&&e.release().catch(()=>{})}var tD=()=>!!$.offAt&&Date.now()-$.offAt>=2e3,nD=()=>!tD();function rD(e){if(!e){$.offAt||=Date.now();return}$.offAt&&Date.now()-$.offAt>15e3&&(Z.holdUntil=Date.now()+3e3),$.offAt=0}function iD(e){console.warn(`房间连接断了`,e&&e.code,e&&e.message),Z.isOffline=()=>!1,$.offAt=0,Z.on&&$.game&&$.game.seats.forEach((e,t)=>{e&&e!==$.me&&Z.cut[t]<0&&pD(t,Z.logs[t].length,[])}),X(`联机连接断开了`+(Z.on?`，其他人由电脑代打`:``),`#ff4f6d`)}function aD(){if(!$.room)return;UE();let e=HE();if(e&&($.sawHost=!0),e&&e.peer!==$.me&&!V.started){let t=e.presence.setup,n=t&&Rd[t.theme]&&cd[t.size]&&Bd[t.time],r=n&&(t.theme!==Wd||t.size!==Gd||t.time!==Hd);t&&hd[t.win]&&t.win!==qd&&(r||=n&&t.win===`poor`!==ef(),Qd(t.win),Q()),r&&(Yd(t.theme),Xd(t.size),Zd(t.time),Yw()),t&&typeof t.team==`boolean`&&t.team!==Jd&&($d(t.team),Q())}let t=e&&e.presence.game;if(oD(t)&&t.gid!==$.gid&&sD(t),Z.on&&$.game){let e=VE().filter(e=>e.presence.gid===Z.gid);for(let t of e){let e=$.game.seats.indexOf(t.peer);e>=0&&Hb(e,Z.gid,t.presence.log||``)}for(let t of e){let e=t.presence.cut;if(e&&typeof e==`object`)for(let[t,n]of Object.entries(e)){let e=+t.slice(1);e>=0&&e<4&&$.game.seats[e]&&Array.isArray(n)&&Number.isInteger(n[0])&&n[0]>=0&&Z.cut[e]<0&&pD(e,n[0],Array.isArray(n[1])?n[1]:[])}}vD()}V.started||(KE(GE().lineup),GD())}function oD(e){return!!e&&typeof e.gid==`string`&&Number.isInteger(e.seed)&&Rd[e.theme]&&cd[e.size]&&Bd[e.time]&&hd[e.win]&&(e.team===void 0||typeof e.team==`boolean`)&&Array.isArray(e.seats)&&e.seats.length===4&&e.seats.some(Boolean)&&Array.isArray(e.lineup)&&e.lineup.length===4&&e.lineup.every((e,t)=>FE(e,t))&&Array.isArray(e.nicks)&&e.nicks.length===4}function sD(e){if($.gid=e.gid,!e.seats.includes($.me)){V.started||X(`房间里已经在对局了，等这局结束再一起玩`,`#8f7dff`);return}V.started&&Xw(),Object.assign($,{game:e,cuts:{},cutAt:0,missing:{},warned:!1}),gD.clear(),RE({cut:null,chk:null}),H.forEach(t=>{t.human=!!e.seats[t.id],t.local=e.seats[t.id]===$.me,t.nick=NE(e.nicks[t.id]),t.botNext=!1}),Yd(e.theme),Xd(e.size),Zd(e.time),Qd(e.win),$d(!!e.team),Ky(e.seed),qy(e.seed^1540483477,()=>Yw()),V.lineup=e.lineup.slice(),H.forEach(t=>fh(t,e.lineup[t.id])),V.selectedChar=e.lineup[H.find(e=>e.local).id],V.firstIdx=0,Ub(e.gid,t=>cD(e.gid,t),()=>Q()),Z.onTurn=_D,Z.onEnd=CD,aO()}function cD(e,t){let n={gid:e,log:AE(t)};$.mine.cut&&jE({...$.mine,...n})>3900&&(mD(),n.cut={...$.cuts}),RE(n)}function lD(){if(!WE())return;let{seats:e,clash:t,lineup:n}=GE();if(t.length){X(`有人选了同一种颜色，换一个再开始`,`#ff4f6d`);return}RE({game:{gid:OE(),seed:kE(),theme:Wd,size:Gd,time:Hd,win:qd,team:Jd,lineup:n,seats:e.map(e=>e?e.peer:null),nicks:e.map(e=>e?PE(e):``)}})}function uD(){dD(),fD(),$.cutAt&&Date.now()-$.cutAt>15e3&&($.cutAt=0,mD(),$.mine.cut&&RE({cut:{...$.cuts}}))}function dD(){if(!$.room||!UE())return;if(!nD()){$.noHost=0;return}let e=HE();if(e){$.noHost=0,$.mine.host&&e.peer!==$.me&&RE({host:null,setup:null,game:null});return}if(!$.sawHost)return;if(!$.noHost){$.noHost=Date.now();return}if(Date.now()-$.noHost<8e3)return;let t=VE().sort(BE)[0];t&&t.peer===$.me&&RE({host:1,setup:IE()})}function fD(){if(!Z.on||!$.game)return;if(!nD()){$.missing={};return}let e=Date.now(),t=new Set(VE().filter(e=>e.presence.gid===Z.gid).map(e=>e.peer));t.add($.me),$.game.seats.forEach((n,r)=>{!n||Z.cut[r]>=0||(t.has(n)?delete $.missing[r]:$.missing[r]=$.missing[r]||e)});let n=$.game.seats.findIndex((e,n)=>e&&Z.cut[n]<0&&t.has(e));if(n<0||$.game.seats[n]!==$.me)return;let r=!1;if($.game.seats.forEach((t,n)=>{!t||Z.cut[n]>=0||!$.missing[n]||e-$.missing[n]<2e4||(pD(n,Z.logs[n].length,AE(Z.logs[n].join(`|`))),r=!0)}),!r)return;$.cutAt=e;let i={...$.cuts};if(jE({...$.mine,cut:i})>3800)for(let e in i)i[e]=[i[e][0],[]];RE({cut:i})}function pD(e,t,n){Hb(e,Z.gid,n),Z.cut[e]=t,$.cuts[`s`+e]=[t,n];let r=H[e];X(r.local?`你掉线太久了，接下来由电脑替你玩`:(r.nick||r.name)+`掉线了，接下来由电脑代打`,F[e])}function mD(){for(let e in $.cuts)$.cuts[e]=[$.cuts[e][0],[]]}function hD(){let e=5381,t=qd+(Jd?`T`:``)+`|`+H.map(e=>[e.cash,e.pos,e.cards.length,+!!e.bankrupt,e.bank,e.pts,e.jail,e.hosp,e.god?e.god.k+e.god.n:``,e.dumpTo,+!!e.waste,+!!e.flip].join(`,`)).join(`;`)+`|`+rf.map(e=>e.type===`prop`?e.owner+`.`+e.level+(e.loan?`m`:``):e.god?e.god.k:``).join(`,`);for(let n=0;n<t.length;n++)e=e*33+t.charCodeAt(n)>>>0;return e}var gD=new Map;function _D(){let e=hD();gD.set(Z.turnNo,e),RE({chk:[Z.turnNo,e]})}function vD(){if(!$.warned)for(let e of VE()){let t=e.presence.chk;if(e.presence.gid===Z.gid&&Array.isArray(t)&&gD.has(t[0])&&gD.get(t[0])!==t[1]){$.warned=!0,console.warn(`联机不同步`,t,gD.get(t[0])),X(`联机好像不同步了，建议退出房间重新开一局`,`#ff4f6d`);return}}}function yD(e){RE({char:e})}function bD(){WE()&&RE({setup:{...$.mine.setup||{},theme:Wd,size:Gd,time:Hd,win:qd,team:Jd}})}function xD(e){WE()&&RE({setup:{...$.mine.setup||{},ai:e}})}var SD=()=>!$.room||WE();function CD(){if(!Z.on||!$.room)return;Wb(),WE()&&RE({game:null});let e=$.gid;setTimeout(()=>{$.room&&$.gid===e&&!Z.on&&RE({gid:null,log:null,chk:null,cut:null})},5e3)}function wD(){Z.on&&(Wb(),RE({gid:null,log:null,chk:null,cut:null}))}function TD(e){let t=R(`#netPanel`);return t||(t=document.createElement(`div`),t.id=`netPanel`,document.body.appendChild(t)),t.innerHTML=`<div class="dlg" style="--dc:#8f7dff"><div class="hd">和朋友联机</div><div class="bd">`+e+`</div></div>`,t.hidden=!1,t.onclick=e=>{(e.target===t||e.target.closest(`[data-close]`))&&(t.hidden=!0)},t}async function ED(){if($.api===void 0&&($.api=await EE()),!$.api){TD(`<p>联机要在 claude.ai 上打开的在线页面里用，并且要登录。</p><p class="sub">朋友怎么进来：在页面右上角的“分享”里邀请他们（填他们登录 claude.ai 用的邮箱），他们登录后打开同一个链接，点“和朋友联机”，输入你的房间号。</p><div class="ft"><button class="btn primary" data-close>知道了</button></div>`);return}let e=NE(ME.get(`dfw-nick`)),t=$.api.kind===`mqtt`,n=TD(`<p class="sub">一个人建房间，把 4 位房间号告诉朋友（发微信就行），朋友在这里输入房间号加入。最多 4 个人，空着的座位电脑坐。`+(t?`朋友打开同一个游戏就行（你发过去的网址或文件，两边版本要一样）。要联网，不用 VPN，也不用登录。`:`朋友要先被你在页面右上角的“分享”里邀请，并且登录 claude.ai。`)+`</p><label class="nf">你的昵称<input id="netNick" maxlength="8" placeholder="玩家" value="`+Cf(e)+`"></label><div class="nrow"><button class="btn primary" id="netCreate">创建房间</button></div><div class="nrow"><input id="netCode" inputmode="numeric" maxlength="4" placeholder="房间号"><button class="btn" id="netJoin">加入房间</button></div><p class="nerr" id="netErr" hidden></p>`+(t?`<p class="sub nver">对局经过 EMQ 的免费公共服务器中转（昵称和每步操作会经过它）。游戏版本 `+Cf($.api.version)+`，两边要一样。</p>`:``)+`<div class="ft"><button class="btn" data-close>关闭</button></div>`),r=e=>{let t=R(`#netErr`);t.textContent=e,t.hidden=!e},i=(e,t)=>{[`#netCreate`,`#netJoin`].forEach(n=>{let r=R(n);r.disabled=e,r.textContent=e&&n===t?`连接中…`:{"#netCreate":`创建房间`,"#netJoin":`加入房间`}[n]})},a=async(e,a)=>{r(``),i(!0,a?`#netCreate`:`#netJoin`);try{await YE(e,a),n.hidden=!0}catch(e){console.warn(e);let n=e&&e.code;r(n===`not_granted`||n===`revoked`||n===`not_permitted`?`你还不能联机：要先被页面的主人在“分享”里邀请，并且登录 claude.ai。`:t?`连不上联机服务器：检查一下网络，稍后再试一次。`:`连接出了问题，稍后再试一次。`)}i(!1)};R(`#netCreate`).onclick=()=>a(String(kE()%9e3+1e3),!0),R(`#netJoin`).onclick=()=>{let e=R(`#netCode`).value.trim();if(!/^\d{4}$/.test(e)){r(`房间号是 4 位数字`);return}a(e,!1)}}function DD(){let e=R(`#netBtn`);e&&e.addEventListener(`click`,ED),document.addEventListener(`click`,e=>{e.target&&e.target.id===`netLeave`&&XE()}),document.addEventListener(`visibilitychange`,$E),document.addEventListener(`pointerdown`,$E,{capture:!0,passive:!0})}var OD=R(`#startBtn`),kD=[0,4,1,5,2,6,3,7],AD=Date.now()%2147483646+1,jD=()=>(AD=AD*48271%2147483647)/2147483647,MD=e=>e+4*Math.floor(jD()*2);function ND(){H.forEach(e=>fh(e,V.lineup[e.id])),hC(),Q()}function PD(e){V.lineup=e.slice(),V.selectedChar=V.lineup[Nd(V.selectedChar)],ND(),zD()}function FD(){if(zE()){WE()&&xD(V.lineup.map((e,t)=>MD(t)));return}let e=Nd(V.selectedChar);V.lineup=V.lineup.map((t,n)=>n===e?V.selectedChar:MD(n)),ND(),zD()}function ID(e){if(zE()){V.selectedChar=e,yD(e),zD();return}let t=Nd(V.selectedChar);V.selectedChar=e,Nd(e)!==t&&(V.lineup[t]=MD(t)),V.lineup[Nd(e)]=e,ND(),zD()}function LD(){let e=R(`#charPick`);e.innerHTML=``,kD.forEach(t=>{let n=Md[t],r=document.createElement(`button`);r.className=`ch`,r.setAttribute(`role`,`radio`),r.dataset.k=t,r.style.setProperty(`--c`,F[Nd(t)]),r.style.setProperty(`--tc`,Ed[Nd(t)]),r.innerHTML=`<img alt="" src="`+(vh[t]||``)+`"><span class="cn">`+n.name+`</span>`,r.setAttribute(`aria-label`,n.name+`，`+n.title),r.addEventListener(`click`,()=>ID(t)),e.appendChild(r)}),R(`#teamToggle`).addEventListener(`click`,RD),FD()}function RD(){SD()&&($d(!Jd),zD(),VD(),Q(),bD())}function zD(){[...R(`#charPick`).children].forEach(e=>e.setAttribute(`aria-checked`,String(+e.dataset.k===V.selectedChar)));let e=Md[V.selectedChar],t=Nd(V.selectedChar),n=(t+2)%4,r=e=>`<span class="foe" style="--c:`+F[Nd(e)]+`"><img alt="" src="`+(vh[e]||``)+`">`+Md[e].name+`</span>`,i=V.lineup.filter((e,r)=>r!==t&&!(Jd&&r===n)).map(r).join(``),a=`<b>`+e.name+`，`+e.title+`</b><br>被动：`+ix(e.passive)+`<br>技能「`+e.skillName+`」`+e.skillIcon+`：`+ix(e.skillDesc)+`，每 3 回合充满一次`;if(zE())R(`#chDesc`).innerHTML=a+qE();else{let e=Jd?`<span class="foes-t">队友</span>`+r(V.lineup[n])+`<span class="foes-t">对手</span>`:`<span class="foes-t">这局的对手</span>`;R(`#chDesc`).innerHTML=a+`<div class="foes">`+e+i+`<button type="button" class="reroll" id="foeShuffle">🔀 换一批</button></div>`}let o=R(`#foeShuffle`);o&&o.addEventListener(`click`,FD);let s=R(`#teamToggle`);s.setAttribute(`aria-pressed`,String(Jd)),s.classList.toggle(`locked`,!SD())}function BD(){let e=R(`#mapPick`),t=R(`#sizePick`);e.innerHTML=``,t.innerHTML=``,zd.forEach(t=>{let n=Rd[t],r=document.createElement(`button`);r.className=`mp`,r.setAttribute(`role`,`radio`),r.dataset.k=t,r.innerHTML=`<span class="mi">`+n.icon+`</span><span>`+n.name+`</span>`,r.addEventListener(`click`,()=>{Wd!==t&&SD()&&(Yd(t),VD(),Yw(),bD())}),e.appendChild(r)});let n=R(`#timePick`);n.innerHTML=``,Vd.forEach(e=>{let t=Bd[e],r=document.createElement(`button`);r.className=`sz tm`,r.setAttribute(`role`,`radio`),r.dataset.k=e,r.innerHTML=`<span>`+t.icon+` `+t.name+`</span>`,r.addEventListener(`click`,()=>{Hd!==e&&SD()&&(Zd(e),VD(),Yw(),bD())}),n.appendChild(r)});let r=R(`#winPick`);r.innerHTML=``,gd.forEach(e=>{let t=document.createElement(`button`);t.className=`sz tm`,t.setAttribute(`role`,`radio`),t.dataset.k=e,t.innerHTML=`<span class="wi">`+hd[e].icon+`</span><span class="wn"></span>`,t.addEventListener(`click`,()=>{if(qd===e||!SD())return;let t=ef();Qd(e),ef()!==t&&Yw(),zD(),VD(),Q(),bD()}),r.appendChild(t)}),ld.forEach(e=>{let n=cd[e],r=document.createElement(`button`);r.className=`sz`,r.setAttribute(`role`,`radio`),r.dataset.k=e,r.innerHTML=`<span>`+n.label+`</span><small>`+n.sub+`，`+n.days+` 天</small>`,r.addEventListener(`click`,()=>{Gd!==e&&SD()&&(Xd(e),VD(),Yw(),bD())}),t.appendChild(r)}),VD()}function VD(){[`#mapPick`,`#sizePick`,`#timePick`,`#winPick`].forEach(e=>R(e).classList.toggle(`locked`,!SD())),[...R(`#mapPick`).children].forEach(e=>e.setAttribute(`aria-checked`,String(e.dataset.k===Wd))),[...R(`#sizePick`).children].forEach(e=>e.setAttribute(`aria-checked`,String(e.dataset.k===Gd))),[...R(`#timePick`).children].forEach(e=>e.setAttribute(`aria-checked`,String(e.dataset.k===Hd))),[...R(`#winPick`).children].forEach(e=>{let t=hd[e.dataset.k];e.querySelector(`.wn`).textContent=t.name(cd[Gd].days),e.setAttribute(`aria-label`,t.name(cd[Gd].days)+`：`+t.desc(cd[Gd].days)),e.setAttribute(`aria-checked`,String(e.dataset.k===qd))});let e=Rd[Wd],t=cd[Gd],n={day:``,dusk:`黄昏时分，夕阳把一切染成金色。`,night:`夜里路灯和窗户都会亮起来。`}[Hd];R(`#mapDesc`).textContent=e.name+`：`+e.blurb+`。`+n+t.shape+`地图，`+t.label+`，每人起始 ¥`+z(qd===`poor`?Sd:t.cash)+(Gd===`s`?``:`，路上有`+e.portal.label+`可以直接坐到下一站`)+`。`,R(`#winDesc`).textContent=HD()}function HD(){let e=hd[qd],t=qd===`poor`;return(t?`🙃 逆向大富翁：每人 100 万，谁先花光谁赢！别人踩你的地你倒贴给他，你踩别人的地他塞钱给你。`:e.icon+` `+e.desc(cd[Gd].days)+`。`)+(Jd?`🤝 2 对 2：蓝黄队对红绿队，队友的`+(t?`钱`:`资产`)+`加在一起算。`:``)}async function UD(){if(!V.started||V.busy||Xb)return;if(V.gameOver){bO(),WD();return}V.busy=!0,Q();let e=await Qb({title:`回到开始页面？`,color:`#8f7dff`,html:`<p>这局的进度不会保存。回去以后可以重新选角色、选地图。</p>`,buttons:[{label:`继续玩`,value:!1,cancel:!0},{label:`返回`,value:!0,primary:!0}]});V.busy=!1,e?(wD(),Xw(),bO(),WD()):Q()}function WD(){V.started=!1,mm.titleMode=!0,mm.overview=!0,mm.street=!1,KD(),Jw(),Q(),GD(),document.body.classList.add(`titling`),R(`#title`).classList.remove(`hide`),OD.focus({preventScroll:!0})}function GD(){R(`#campBtn`).hidden=zE(),R(`#charPick`).children.length&&(zD(),VD(),JE())}function KD(){let e=R(`#bMap`),t=mm.overview?1:mm.street?2:0;e.setAttribute(`aria-pressed`,String(t!==0)),e.querySelector(`.ico`).textContent=[`🗺️`,`🏙️`,`🎯`][t],e.querySelector(`.tx`).textContent=[`看全景`,`街景`,`回到角色`][t],e.setAttribute(`aria-label`,[`切换到全景`,`切换到街景`,`回到跟随视角`][t])}function qD(){let e=R(`#bFx`);e.hidden=!S_(),e.setAttribute(`aria-pressed`,String(x_()))}function JD(e){V.speed=e;let t=R(`#bSpeed`);t.setAttribute(`aria-pressed`,String(e===2)),t.querySelector(`.tx`).textContent=e===2?`加速中`:`加速`}function YD(){R(`#bMap`).addEventListener(`click`,()=>{mm.overview?(mm.overview=!1,mm.street=!0):mm.street?mm.street=!1:mm.overview=!0,km.set(0,0,0),mm.zoomGoal=1,mm.overview||Wm(H[V.cur]),KD()}),R(`#bSpeed`).addEventListener(`click`,()=>JD(V.speed===1?2:1)),R(`#bSound`).addEventListener(`click`,e=>{Ef(),kf(!Tf),e.currentTarget.setAttribute(`aria-pressed`,String(Tf)),e.currentTarget.querySelector(`.ico`).textContent=Tf?`🔊`:`🔇`}),R(`#bFx`).addEventListener(`click`,()=>{b_(!x_()),qD()}),qD(),R(`#bHelp`).addEventListener(`click`,jO),R(`#bBack`).addEventListener(`click`,UD),R(`#bLog`).addEventListener(`click`,MO),R(`#dice`).addEventListener(`click`,iE),R(`#skill`).addEventListener(`click`,vT),document.addEventListener(`keydown`,e=>{(e.code===`Space`||e.key===` `)&&!Xb&&V.humanWaiting&&(e.preventDefault(),iE())})}var XD=()=>V.campaign?V.campaign.days:qd===`days`||qd===`poor`?of:99,ZD=()=>qd===`poor`&&!V.campaign;function QD(){if(V.campaign){let e=xO();return e&&rO(e.reason,{won:e.won}),!!e}if(Jd)return $D();if(ZD()){let e=Jm().filter(e=>rh(e)<=0).sort((e,t)=>th(e)-th(t))[0];return e&&rO(U(e)+`的钱先花光了`,{first:e}),!!e}if(qd===`rich`){let e=Jm().filter(e=>th(e)>=hd.rich.target).sort((e,t)=>th(t)-th(e))[0];if(e)return rO(U(e)+`的总资产先到了 ¥`+z(hd.rich.target),{first:e}),!0}return Z.on?Jm().length<=1?(rO(`其他人都破产了`),!0):!H.some(e=>e.human&&!e.bankrupt)&&(rO(`真人玩家都破产了`),!0):Km().bankrupt?(rO(`你破产了`),!0):Jm().length<=1&&(rO(`其他人都破产了`),!0)}function $D(){if(ZD()){let e=[0,1].find(e=>oh(e)<=0);return e!==void 0&&rO(Ym[e].name+`两个人的钱都花光了`,{side:e}),e!==void 0}if(qd===`rich`){let e=hd.rich.target*2,t=[0,1].filter(t=>!ah(t)&&ih(t)>=e).sort((e,t)=>ih(t)-ih(e))[0];if(t!==void 0)return rO(Ym[t].name+`的总资产先到了 ¥`+z(e),{side:t}),!0}let e=[0,1].find(e=>ah(e));return e===void 0?!H.some(e=>e.human&&!e.bankrupt)&&(rO(Z.on?`真人玩家都破产了`:`你破产了`),!0):(rO(Ym[e].name+`两个人都破产了`,{side:1-e}),!0)}async function eO(){let e=H.find(e=>e.human&&!e.botNext);return e?await Vb(e,`E`,async()=>Wx()<=0,()=>!1)===!0:!1}async function tO(){for(;!V.gameOver;){let e=H[V.cur];if(!e.bankrupt&&(await sE(e),Z.on&&(Z.turnNo++,Z.onTurn&&Z.onTurn()),QD()))return;if(V.cur=(V.cur+1)%H.length,V.cur===V.firstIdx){if(V.round>=XD()){if(V.campaign){let e=SO();rO(e.reason,{won:e.won})}else rO(XD()+` 天到了`+(ZD()?`，比谁的钱最少`:``));return}if(qd===`time`&&!V.campaign&&await eO()){rO(Math.round(V.timeLimit/6e4)+` 分钟到了`);return}if(V.round++,X(`第 `+V.round+` 天开始了`,`#8f7dff`),Q(),await mT(),QD())return}Q()}}var nO=(e,t,n)=>`<li style="--c:`+F[e.id]+`;--tc:`+Ed[e.id]+`"><span class="pos">`+(t+1)+`</span><img alt="" src="`+(e.avatar||``)+`"><span>`+e.name+(e.local?`（你）`:e.nick?`（`+Cf(e.nick)+`）`:``)+`</span><b>`+(e.bankrupt?`破产`:`¥`+z(n))+`</b></li>`;function rO(e,t={}){V.gameOver=!0,V.humanWaiting=!1,Z.on&&Z.onEnd&&Z.onEnd(),Q(),mm.overview=!0,mm.street=!1,KD();let n=ZD(),r=H.map(e=>({p:e,v:n?rh(e):e.bankrupt?-1:th(e)})).sort((e,r)=>(r.p===t.first)-(e.p===t.first)||(n?e.v-r.v:r.v-e.v)),i=r.map((e,t)=>nO(e.p,t,e.v)).join(``);if(V.campaign){t.won&&(Of(`win`),Km().anim.setBase(`Cheer`)),TO(t.won,e,i);return}if(Of(`win`),Jd){iO(e,t.side,i);return}let a=r[0].p;a.anim.setBase(`Cheer`),Qb({title:a.local?`你赢啦！`:(a.nick||a.name)+`赢了`,color:F[a.id],html:`<p class="sub">`+e+(n?`，按手上的钱（现金加存款）从少到多：`:`，按总资产排名：`)+`</p><ol class="rank-list">`+i+`</ol>`,buttons:[{label:`再来一局`,value:!0,primary:!0}]}).then(WD)}function iO(e,t,n){let r=ZD(),i=e=>r?oh(e):ih(e),a=[0,1].sort((e,n)=>(n===t)-(e===t)||(r?i(e)-i(n):i(n)-i(e))),o=t===void 0&&i(0)===i(1),s=a[0],c=H.some(e=>e.local)?Xm(Km()):-1;H.filter(e=>Xm(e)===s&&!e.bankrupt).forEach(e=>e.anim.setBase(`Cheer`));let l=a.map((e,t)=>{let n=H.filter(t=>Xm(t)===e);return`<li class="duo" style="--c:`+F[e]+`;--tc:#fff"><span class="pos">`+(o?1:t+1)+`</span><span class="avs">`+n.map(e=>`<img alt="" src="`+(e.avatar||``)+`" style="--pc:`+F[e.id]+`">`).join(``)+`</span><span>`+Ym[e].name+(e===c?`<small>你们这队</small>`:``)+`</span><b>`+(!r&&ah(e)?`破产`:`¥`+z(i(e)))+`</b></li>`}).join(``);Qb({title:o?`平局！`:s===c?`你们队赢啦！`:Ym[s].name+`赢了`,color:o?`#8f7dff`:F[s],html:`<p class="sub">`+e+(r?`，两队手上的钱（队友加在一起）：`:`，两队的总资产（队友加在一起）：`)+`</p><ol class="rank-list">`+l+`</ol><p class="sub">每个人：</p><ol class="rank-list">`+n+`</ol>`,buttons:[{label:`再来一局`,value:!0,primary:!0}]}).then(WD)}function aO(){Ef(),hC(),Jw(),Ux(),V.campaign&&yO(),R(`#title`).classList.add(`hide`),document.body.classList.remove(`titling`),mm.titleMode=!1,mm.overview=!1,mm.street=!1,KD(),V.started=!0,Wm(H[V.cur]),Q();let e=Km(),t=V.campaign;qd===`time`&&!t&&JD(2),e.local&&(X(`你选了`+e.name+`：`+ix(e.passive),F[e.id]),oC(e)),t?X(`第 `+(By.indexOf(t)+1)+` 关「`+t.name+`」：`+pO(t),`#e5a50a`):Jd&&e.local&&X(`2 对 2：你和`+U(Qm(e))+`一队，队友的地不用付租金`,F[Qm(e).id]),qd===`time`&&!t&&X(`限时 `+Math.round(V.timeLimit/6e4)+` 分钟，到点那天结束时比总资产`,`#8f7dff`),qd===`poor`&&!t&&X(`🙃 逆向大富翁：每人 ¥`+z(Sd)+`，谁先花光谁赢！别人踩你的地你得倒贴，你踩别人的地他得塞钱给你`,`#8f7dff`),tO()}var oO=`dfw-campaign`,sO=`#e5a50a`,cO={done:[]};function lO(){try{let e=JSON.parse(localStorage.getItem(oO));e&&Array.isArray(e.done)&&(cO=e)}catch{}return cO}function uO(e){let t=lO();t.done.includes(e)||t.done.push(e),cO=t;try{localStorage.setItem(oO,JSON.stringify(t))}catch{}}var dO=e=>e===0||lO().done.includes(By[e-1].id),fO=e=>e.top>1?`前 `+e.top+` 名`:`第一`;function pO(e){let t=e.goal;return{rank:e.days+` 天后总资产排`+(t.top>1?`进`:``)+fO(t),rich:e.days+` 天内总资产到 ¥`+z(t.target),land:e.days+` 天内手里有 `+t.target+` 块地`,survive:`撑过 `+e.days+` 天不破产`}[t.kind]}async function mO(){let e=lO().done,t=By.map((t,n)=>{let r=e.includes(t.id)?`✅`:dO(n)?`🔓`:`🔒`;return`<li><span class="mini" style="--cc:`+(dO(n)?sO:`#c8c3e8`)+`">`+r+`</span><span><b>第 `+(n+1)+` 关 · `+Rd[t.theme].icon+` `+t.name+`</b><br><span class="sub">`+Rd[t.theme].name+`，`+pO(t)+`</span></span></li>`}).join(``),n=By.find((t,n)=>dO(n)&&!e.includes(t.id)),r=By.map((e,t)=>({lv:e,i:t})).filter(e=>dO(e.i)).map(({lv:t,i:r})=>({label:`第 `+(r+1)+` 关 · `+t.name+(e.includes(t.id)?`（已过关）`:``),value:t,primary:t===n}));r.push({label:`返回`,value:null,cancel:!0,primary:!n});let i=await Qb({title:`🏆 闯关模式`,color:sO,html:`<p>一个人一关一关地打：每关的地图、对手、开局的钱和过关条件都不一样，过了这关才能打下一关。已经过了 `+e.length+` / `+By.length+` 关。</p><ul class="dex">`+t+`</ul>`,buttons:r,list:!0});i?await hO(i):bO()}async function hO(e){let t=By.indexOf(e),n=Nd(V.selectedChar),r=e.lineup.map((e,t)=>t===n?null:e).filter(e=>e!==null).map(e=>`<span class="foe" style="--c:`+F[Nd(e)]+`"><img alt="" src="`+(vh[e]||``)+`">`+Md[e].name+`</span>`).join(``),i=cd[e.size],a=`<p>`+e.story+`</p><dl class="info-grid"><dt>地图</dt><dd>`+Rd[e.theme].icon+` `+Rd[e.theme].name+`，`+i.label+`，`+Bd[e.time].name+`</dd><dt>过关</dt><dd>`+pO(e)+`</dd><dt>开局</dt><dd>你 ¥`+z(e.cash)+`，对手 ¥`+z(e.foeCash)+(e.foeLand?`，对手每人已经有 `+e.foeLand.n+` 块 `+e.foeLand.level+` 级的地`:``)+`</dd></dl><div class="foes"><span class="foes-t">对手</span>`+r+`</div><p class="sub">你用开场页选的角色（`+Md[V.selectedChar].name+`）。自己破产就失败，对手全破产就直接过关。</p>`;await Qb({title:`第 `+(t+1)+` 关 · `+e.name,color:sO,html:a,buttons:[{label:`返回`,value:!1,cancel:!0},{label:`开始闯关`,value:!0,primary:!0}]})?vO(e):await mO()}var gO=null;function _O(e,t,n){(e!==Wd||t!==Gd||n!==Hd)&&(Yd(e),Xd(t),Zd(n),Yw())}function vO(e){gO||={theme:Wd,size:Gd,time:Hd,win:qd,team:Jd,lineup:V.lineup.slice()},Qd(`days`),$d(!1),V.campaign=e,_O(e.theme,e.size,e.time);let t=e.lineup.slice(),n=Nd(V.selectedChar);t[n]=V.selectedChar,PD(t),H.forEach(e=>{e.human=e.local=e.id===n,e.nick=``}),V.firstIdx=n,aO()}function yO(){let e=V.campaign&&V.campaign.foeLand;if(!e)return;let t=H.filter(e=>!e.human),n=rf.filter(e=>e.type===`prop`&&e.owner<0);for(let r=0;r<e.n*t.length&&n.length;r++){let i=n.splice(Math.floor(Hy()*n.length),1)[0];i.owner=t[r%t.length].id,i.level=e.level,i.invested=i.price+(e.level-1)*Xy(i),Fx(i,!1)}}function bO(){V.campaign&&(V.campaign=null,gO&&=(Qd(gO.win),$d(gO.team),_O(gO.theme,gO.size,gO.time),PD(gO.lineup),null),GD())}function xO(){let e=V.campaign,t=Km(),n=e.goal;return t.bankrupt?{won:!1,reason:`你破产了`}:Jm().length<=1?{won:!0,reason:`对手全部破产了`}:n.kind===`rich`&&th(t)>=n.target?{won:!0,reason:`总资产到了 ¥`+z(n.target)}:n.kind===`land`&&rf.filter(e=>e.owner===t.id).length>=n.target?{won:!0,reason:`手里有 `+n.target+` 块地了`}:null}function SO(){let e=V.campaign,t=Km(),n=e.goal;if(n.kind===`survive`)return{won:!0,reason:`撑过了 `+e.days+` 天`};if(n.kind===`rank`){let r=H.filter(e=>e!==t&&!e.bankrupt&&th(e)>=th(t)).length;return r<(n.top||1)?{won:!0,reason:e.days+` 天到了，你的总资产排第 `+(r+1)+` 名`}:{won:!1,reason:e.days+` 天到了，总资产没排`+(n.top>1?`进`:`到`)+fO(n)}}return{won:!1,reason:e.days+` 天到了，`+(n.kind===`rich`?`总资产还没到 ¥`+z(n.target):`地还不够 `+n.target+` 块`)}}function CO(){let e=V.campaign,t=e.goal,n=Km();return t.kind===`rich`?Sf(th(n)).slice(1)+`/`+t.target/1e4+`万`:t.kind===`land`?rf.filter(e=>e.owner===n.id).length+`/`+t.target+` 块`:t.kind===`survive`?`还剩 `+Math.max(0,e.days-V.round)+` 天`:`第 `+(1+H.filter(e=>e!==n&&!e.bankrupt&&th(e)>th(n)).length)+` 名`}function wO(){if(V.busy||Xb||!V.campaign)return;let e=V.campaign;Qb({title:`第 `+(By.indexOf(e)+1)+` 关 · `+e.name,color:sO,html:`<p>`+e.story+`</p><dl class="info-grid"><dt>过关</dt><dd>`+pO(e)+`</dd><dt>现在</dt><dd>`+CO()+`，第 `+V.round+` / `+e.days+` 天</dd></dl><p class="sub">自己破产就失败，对手全破产就直接过关。</p>`})}async function TO(e,t,n){let r=V.campaign,i=By.indexOf(r),a=By[i+1];e&&uO(r.id);let o=e&&!a,s=e?a?[{label:`回开场页`,value:`title`,cancel:!0},{label:`下一关`,value:`next`,primary:!0}]:[{label:`回开场页`,value:`title`,primary:!0}]:[{label:`回开场页`,value:`title`,cancel:!0},{label:`再试一次`,value:`retry`,primary:!0}],c=await Qb({title:e?`🏆 第 `+(i+1)+` 关过关！`:`第 `+(i+1)+` 关失败`,color:e?sO:`#6b7895`,html:`<p class="big">`+t+`。</p>`+(o?`<p>六关全部通过，你就是大富翁之王！</p>`:e?`<p class="sub">下一关：`+Rd[a.theme].icon+` `+a.name+`。</p>`:``)+`<ol class="rank-list">`+n+`</ol>`,buttons:s});if(c===`retry`){WD(),vO(r);return}if(c===`next`){WD(),await hO(a);return}bO(),WD()}function EO(e){let t=kd[e];return`<div class="cardbig"><span class="ic" style="--cc:`+t.color+`">`+t.icon+`</span><div><div class="big">`+t.name+`</div><div class="sub">`+ix(t.desc)+`</div></div></div>`}function DO(e){let t=rf[e],n=(t.block?`<p class="sub">🚧 这一格放着路障，走到这里会被拦下。</p>`:``)+(t.mine?`<p class="sub">🧨 这一格埋着地雷，踩到要住院 2 回合。</p>`:``)+(t.god?`<p class="sub">`+cT[t.god.k].icon+` `+cT[t.god.k].name+`在这里等人：走过去就被附身 5 回合，`+uT(t.god.k)+`。</p>`:``);if(t.type===`prop`){let e=t.owner>=0?H[t.owner]:null,r=ef(),i=`<dl class="info-grid"><dt>地价</dt><dd class="num">¥`+z(t.price)+`</dd><dt>主人</dt><dd>`+(e?U(e):`还没人买`)+`</dd><dt>房子</dt><dd>`+(t.level?t.level+` 级`:`空地`)+`</dd><dt>`+(r?`请客`:`租金`)+`</dt><dd class="num">`+(t.loan?`抵押中，不收租`:t.level?`¥`+z(Yy(t)):`—`)+`</dd></dl>`+(r?`<p class="sub">🙃 别人停在这里，地主要倒贴给他：买下后 ¥`+z(Jy(t,1))+`，升到 3 级是 ¥`+z(Jy(t,3))+`。升级一次 ¥`+z(Xy(t))+`。</p>`:`<p class="sub">买下后租金 ¥`+z(Jy(t,1))+`，升到 3 级是 ¥`+z(Jy(t,3))+`。升级一次 ¥`+z(Xy(t))+`。没人买的地会拿出来拍卖。</p>`)+(t.loan?`<p class="sub">🔒 抵押给银行了，赎回要 ¥`+z(eh(t))+`。</p>`:``)+n;Qb({title:t.name,color:e?F[e.id]:`#8f7dff`,html:i})}else{let e=Od[t.type],r=Km(),i=``;if(t.type===`bank`&&(i=`<p class="sub">你现在存了 ¥`+z(r.bank)+`。</p>`),t.type===`lottery`){let e=BC.tickets.filter(([e])=>H[e]===r).map(([,e])=>e);i=`<p class="sub">奖池 ¥`+z(BC.pot)+`，第 `+HC()+` 天开奖，这一期卖出 `+BC.tickets.length+` 注`+(e.length?`，你买了 `+e.join(`、`)+` 号`:``)+`。</p>`}Qb({title:e.label,color:e.color,html:`<p>`+ox(t.type)+`</p>`+i+n})}}function OO(){V.busy||Xb||Qb({title:`点券`,color:`#e5a50a`,html:`<p class="big">你有 <span class="num">`+Km().pts+`</span> 点券</p><p>停在`+Od.shop.label+`可以用点券买道具卡。经过起点送 20 点券，游戏厅的转盘、机会里也能拿到。</p>`})}function kO(e){if(V.busy||Xb)return;let t=rf.filter(t=>t.owner===e.id),n=[e.god?cT[e.god.k].icon+` `+cT[e.god.k].name+`附身（`+uT(e.god.k)+`），还剩 `+e.god.n+` 回合`:``,e.jail>0?`🚔 在坐牢，还要 `+e.jail+` 回合`:``,e.hosp>0?`🏥 在住院，还要 `+e.hosp+` 回合`:``,e.turtle>0?`🐢 乌龟附身，还剩 `+e.turtle+` 回合`:``,e.sleep>0?`💤 下回合要睡觉`:``,e.bankrupt?`已经破产`:``,e.dumpTo>=0?`🍳 下一笔收入甩给`+U(H[e.dumpTo]):``,e.waste?`🛍️ 败家中，花钱翻倍`:``,e.flip?`🔁 下一笔开销会变成收入`:``].filter(Boolean).join(`，`)||`正常`,r=e.local?e.cards.map(e=>kd[e].icon+kd[e].name).join(`、`)||`没有`:e.cards.length+` 张`,i=`<div class="who" style="--c:`+F[e.id]+`"><img alt="" src="`+(e.avatar||``)+`"><div><div class="big">`+e.name+(e.local?`（你）`:e.nick?`（`+Cf(e.nick)+`）`:``)+`</div><div class="sub">`+e.title+`</div></div></div><dl class="info-grid"><dt>现金</dt><dd class="num">¥`+z(e.cash)+`</dd><dt>存款</dt><dd class="num">¥`+z(e.bank)+`</dd><dt>`+(ef()?`手上的钱`:`总资产`)+`</dt><dd class="num">¥`+z(ef()?rh(e):th(e))+`</dd>`+(Jd?`<dt>队伍</dt><dd>`+Ym[Xm(e)].name+`，队友`+U(Qm(e))+`，两人加起来 ¥`+z(ef()?oh(Xm(e)):ih(Xm(e)))+`</dd>`:``)+`<dt>点券</dt><dd class="num">`+e.pts+`</dd><dt>道具卡</dt><dd>`+r+`</dd><dt>状态</dt><dd>`+n+`</dd></dl><p><b class="k">被动</b>　`+ix(e.passive)+`</p><p><b class="k">技能「`+e.skillName+`」`+e.skillIcon+`</b>　`+ix(e.skillDesc)+`。充能 `+e.charge+`/3。</p><p class="sub">地产：`+(t.length?t.map(e=>e.name+` `+e.level+`级`+(e.loan?`（抵押中）`:``)).join(`、`):`还没有`)+`</p>`;Qb({title:e.local?`你的角色`:e.nick||e.name,color:F[e.id],html:i})}function AO(){let e=V.campaign;return e?`这一关（第 `+(By.indexOf(e)+1)+` 关「`+e.name+`」）：`+pO(e)+`；自己破产就失败，对手全破产就直接过关`:`这局的胜利条件：`+hd[qd].desc(of)+(qd===`days`||qd===`poor`?``:`（最多玩 99 天）`)}function jO(){if(V.busy||Xb)return;let e=ef()&&!V.campaign,t=(e?[...new Set(jd)]:Object.keys(kd).filter(e=>!kd[e].rev)).map(e=>{let t=kd[e];return`<li><span class="mini" style="--cc:`+t.color+`">`+t.icon+`</span><span><b>`+t.name+`</b>　`+ix(t.desc)+(t.passive?`（自动询问）`:``)+`</span></li>`}).join(``),n=Md.map((e,t)=>`<li><img alt="" src="`+(vh[t]||``)+`" style="--c:`+F[Nd(t)]+`"><span><b>`+e.name+`</b>　`+ix(e.passive)+`。技能「`+e.skillName+`」：`+ix(e.skillDesc)+`。</span></li>`).join(``),r=(e?[`treat`,`luxury`,`charity`,`refund`,`jail`,`lottery`,`shop`,`item`,`park`,`chance`,`portal`]:[`jail`,`bank`,`lottery`,`game`,`shop`,`item`,`park`,`wish`,`chance`,`fine`,`portal`]).map(e=>{let t=Od[e];return`<li><span class="mini" style="--cc:`+t.color+`">`+(t.icon||`?`)+`</span><span><b>`+t.label+`</b>　`+ox(e)+`</span></li>`}).join(``);if(e){let e=Jd?[`2 对 2：比两队手上的钱（队友加在一起），两个人都花光才算赢；队友之间不请客。`]:[];Qb({title:`规则和图鉴`,color:`#8f7dff`,html:`<ul class="rules">`+[...sx(of),...e,AO()].map(e=>`<li>`+e+`</li>`).join(``)+`</ul><h3 class="sec">格子</h3><ul class="dex">`+r+`</ul><h3 class="sec">道具卡</h3><ul class="dex">`+t+`</ul><h3 class="sec">角色</h3><ul class="dex">`+n+`</ul>`});return}let i=Object.values(cT).map(e=>`<li><span class="mini" style="--cc:`+e.color+`">`+e.icon+`</span><span><b>`+e.name+`</b>　`+e.desc+`</span></li>`).join(``);Qb({title:`规则和图鉴`,color:`#8f7dff`,html:`<ul class="rules"><li>掷骰子往前走，经过起点领 ¥2,000 和 20 点券。</li><li>停在空地可以买，停在自己的地可以升级，最高 3 级。不买的地会拿出来拍卖，出价最高的人得到。</li><li>停在别人的地要付租金，房子越高越贵。</li><li>八个角色，每个都有一个被动和一个技能，技能每 3 回合充满一次。同一种颜色的两个角色一局里只会出现一个。</li><li>道具卡在掷骰子之前点开使用；“轮到你啦”旁边的“🏠 地产”可以把地抵押给银行换现金，以后再赎回。</li><li>钱不够时先从银行取存款，再自动抵押地产，还不够就破产。</li><li>每天一开始银行发 `+Math.round(bd*100)+`% 的存款利息；每 5 天彩票开奖（一注 ¥`+z(500)+`）；每 4 天发生一次全城事件（地震、经济危机、地价暴涨、节日红包、台风、房产税）。</li><li>路上有时会出现神仙，第一个走过去的人被附身 5 回合。</li><li>监狱关 2 回合，可以交 ¥`+z(yd)+` 保释；踩到地雷要住院 2 回合。</li>`+(Jd?`<li>2 对 2 团队模式：蓝、黄两个座位是蓝黄队，红、绿两个座位是红绿队。停在队友的地不用付租金，坑人的道具卡和技能只对另一队用；比的是两队的总资产（队友加在一起），一队两个人都破产就输了。</li>`:``)+`<li>`+AO()+`。</li></ul><h3 class="sec">格子</h3><ul class="dex">`+r+`</ul><h3 class="sec">神仙</h3><ul class="dex">`+i+`</ul><h3 class="sec">道具卡</h3><ul class="dex">`+t+`</ul><h3 class="sec">角色</h3><ul class="dex">`+n+`</ul>`})}function MO(){V.busy||Xb||Qb({title:`小镇动态`,color:`#8f7dff`,html:Lb.length?`<ul class="log">`+Lb.slice(0,40).map(e=>`<li><span class="d">第`+e.day+`天</span><i style="--c:`+e.color+`"></i><span>`+Cf(e.text)+`</span></li>`).join(``)+`</ul>`:`<p>还没有发生什么事。</p>`})}var NO=new zs,PO=new j;function FO(e,t){if(mm.titleMode||Xb||V.busy)return;PO.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),NO.setFromCamera(PO,Em);let n=NO.intersectObjects(xh,!0);for(let e of n){let t=e.object;for(;t;){if(t.userData&&t.userData.tile!==void 0){DO(t.userData.tile);return}t=t.parent}}}var IO=new Map,LO=!1,RO=null,zO=0;function BO(){bm.addEventListener(`pointerdown`,e=>{try{bm.setPointerCapture(e.pointerId)}catch{}if(IO.set(e.pointerId,{x:e.clientX,y:e.clientY}),IO.size===1)RO={x:e.clientX,y:e.clientY},LO=!1;else if(IO.size===2){let[e,t]=[...IO.values()];zO=Math.hypot(e.x-t.x,e.y-t.y),LO=!0}}),bm.addEventListener(`pointermove`,e=>{let t=IO.get(e.pointerId);if(!t)return;let n={x:e.clientX,y:e.clientY};if(IO.size===1&&(!LO&&Math.hypot(n.x-RO.x,n.y-RO.y)>7&&(LO=!0),LO&&!mm.titleMode&&Gm(n.x-t.x,n.y-t.y)),IO.set(e.pointerId,n),IO.size===2){let[e,t]=[...IO.values()],n=Math.hypot(e.x-t.x,e.y-t.y);zO>0&&n>0&&(mm.zoomGoal=vf(mm.zoomGoal*zO/n,.55,1.9)),zO=n}});let e=e=>{IO.has(e.pointerId)&&(IO.delete(e.pointerId),IO.size===0&&!LO&&e.type===`pointerup`&&FO(e.clientX,e.clientY),IO.size<2&&(zO=0))};bm.addEventListener(`pointerup`,e),bm.addEventListener(`pointercancel`,e),bm.addEventListener(`wheel`,e=>{e.preventDefault(),mm.zoomGoal=vf(mm.zoomGoal*(1+e.deltaY*.0012),.55,1.9)},{passive:!1}),addEventListener(`resize`,()=>{Sm.setSize(innerWidth,innerHeight),f_(),Em.aspect=innerWidth/innerHeight,Em.updateProjectionMatrix()})}var VO=.25,HO=40,UO=20,WO=Math.min(1.5,wm),GO=!!(navigator.webdriver||window.__shotMode),KO=wm,qO=16.7,JO=0,YO=0,XO=wm,ZO=0;function QO(e){KO=e,Sm.setPixelRatio(e),Sm.setSize(innerWidth,innerHeight),f_()}function $O(e){GO||!(e>0)||e>250||document.hidden||(qO+=(e-qO)*.05,ZO=Math.max(0,ZO-e),JO=qO>HO?JO+e:0,YO=qO<UO?YO+e:0,JO>3e3&&KO>WO?(ZO>0&&(XO=KO-VO),QO(Math.max(WO,KO-VO)),JO=0,YO=0,ZO=0,qO=16.7):YO>8e3&&KO+VO<=XO&&(QO(KO+VO),YO=0,ZO=6e3))}var ek=performance.now(),tk=0;function nk(e){requestAnimationFrame(nk),$O(e-ek);let t=Math.min(.05,Math.max(0,(e-ek)/1e3));ek=e,tk+=t,ym(e),H.forEach((e,n)=>{let r=V.started&&!V.gameOver&&n===V.cur&&!e.bankrupt,i=e.sleep>0;e.body.position.y=r?Math.abs(Math.sin(tk*3.2))*.07:Math.sin(tk*2+n)*.012,e.body.rotation.z=i?Math.sin(tk*1.5)*.12:0;let a=r?1.12+Math.sin(tk*5)*.08:1;e.ring.scale.set(a,a,a),e.ring.material.opacity=r?.95:.55,e.statusSprite&&e.statusSprite.visible&&(e.statusSprite.position.y=2.65+Math.sin(tk*2.4+n)*.06),e.anim.setBase(i&&!e.bankrupt?`Sit_Floor_Idle`:`Idle`),e.anim.update(t)});let n=H[V.cur];if(uh.visible=V.started&&!V.gameOver&&!n.bankrupt,uh.visible&&(uh.position.set(n.mesh.position.x,n.mesh.position.y+1.95+Math.sin(tk*4)*.12,n.mesh.position.z),uh.rotation.set(Math.PI,tk*2,0)),rf.forEach(e=>{e.block&&(e.block.rotation.y=Math.sin(tk*1.2+e.i)*.15)}),lh&&lh.intensity>0){let e=(V.started&&!n.bankrupt?n:H[V.firstIdx]).mesh.position;lh.position.set(e.x,e.y+2.6,e.z+.6)}for(let e of Sh)e(tk,t);Um(t,tk),Jb(e),__()}var rk=new URL(`intro-C6OYguqu.mp4`,import.meta.url).href,ik=new URL(`intro-6c_Ujvb-.webm`,import.meta.url).href,ak=new URL(`intro-poster-f_de8kt5.jpg`,import.meta.url).href;function ok(){if(navigator.webdriver||matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;let e=R(`#intro`),t=R(`#introVideo`),n=()=>{e.classList.contains(`out`)||(e.classList.add(`out`),setTimeout(()=>{e.hidden=!0,t.removeAttribute(`src`),t.load()},650))};t.poster=ak,t.src=t.canPlayType(`video/webm; codecs="vp9"`)?ik:rk,e.hidden=!1,t.addEventListener(`ended`,n),t.addEventListener(`error`,n),R(`#introSkip`).addEventListener(`click`,n);let r=t.play();r&&r.catch(n)}async function sk(){let e=tm(e=>{OD.textContent=`正在搭建小岛… `+Math.round(e*100)+`%`}),t=zd.map(e=>Rd[e].names.join(``)+Rd[e].portal.label).join(``)+`起点机会罚款礼物道具屋公园许愿池`;if(document.fonts&&document.fonts.load)try{await Promise.race([Promise.all([document.fonts.load(`40px "ZCOOL KuaiLe"`,t),document.fonts.load(`700 40px "Fredoka"`,`-0123456789?`),document.fonts.load(`600 40px "Fredoka"`,`0123456789,¥`)]),new Promise(e=>setTimeout(e,3500))])}catch{}try{await e}catch(e){console.error(e),OD.textContent=`加载失败`,R(`#loadErr`).textContent=`3D 模型没加载出来，检查一下网络后刷新页面再试。`,R(`#loadErr`).hidden=!1;return}hf(),ph(),Yw();try{yh()}catch(e){console.warn(`portrait`,e)}LD(),BD(),hC(),Jw(),Q(),requestAnimationFrame(nk),OD.disabled=!1,OD.textContent=`开始游戏`,Py()}Sm&&(u_(),ok(),YD(),BO(),DD(),OD.addEventListener(`click`,()=>{if(!V.started){if(zE()){lD();return}H.forEach(e=>{e.human=e.local=e.id===Nd(V.selectedChar),e.nick=``}),V.firstIdx=Nd(V.selectedChar),aO()}}),R(`#campBtn`).addEventListener(`click`,()=>{!V.started&&!zE()&&!OD.disabled&&!Xb&&mO()}),sk());