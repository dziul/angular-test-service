(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qGiv:function(e,t,s){"use strict";s.r(t);var n=s("8Y7J");class i{}var l=s("pMnS"),r=s("HDdC"),c=s("quSY");class u extends c.a{constructor(e,t){super()}schedule(e,t=0){return this}}class h extends u{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const s=this.id,n=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(n,s,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(n,this.id,t),this}requestAsyncId(e,t,s=0){return setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!==s&&this.delay===s&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let s=!1,n=void 0;try{this.work(e)}catch(i){s=!0,n=!!i&&i||new Error(i)}if(s)return this.unsubscribe(),n}_unsubscribe(){const e=this.id,t=this.scheduler,s=t.actions,n=s.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&s.splice(n,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}let a=(()=>{class e{constructor(t,s=e.now){this.SchedulerAction=t,this.now=s}schedule(e,t=0,s){return new this.SchedulerAction(this,e).schedule(s,t)}}return e.now=()=>Date.now(),e})();class o extends a{constructor(e,t=a.now){super(e,()=>o.delegate&&o.delegate!==this?o.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,s){return o.delegate&&o.delegate!==this?o.delegate.schedule(e,t,s):super.schedule(e,t,s)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let s;this.active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,s){for(;e=t.shift();)e.unsubscribe();throw s}}}const d=new o(h);var b=s("DH7j");function p(e){const{subscriber:t,counter:s,period:n}=e;t.next(s),this.schedule({subscriber:t,counter:s+1,period:n},n)}class g{constructor(e,t){this.pageAService=e,this.PageBService=t}ngOnInit(){this.pageAService.title="Banana girl! A",this.PageBService.setTitle("Banana girl! B"),this.interval=function(e=0,t=d){var s;return s=e,(Object(b.a)(s)||!(s-parseFloat(s)+1>=0)||e<0)&&(e=0),t&&"function"==typeof t.schedule||(t=d),new r.a(s=>(s.add(t.schedule(p,e,{subscriber:s,counter:0,period:e})),s))}(1e3).subscribe(()=>{const e="Banana #"+(new Date).getTime().toString();this.pageAService.items=[e],this.PageBService.setItems([e])})}ngOnDestroy(){this.interval.unsubscribe()}}var v=s("CQTh"),f=n.mb({encapsulation:0,styles:[[""]],data:{}});function w(e){return n.Eb(0,[(e()(),n.ob(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),n.Cb(-1,null,["Banana Component!"]))],null,null)}function y(e){return n.Eb(0,[(e()(),n.ob(0,0,null,null,1,"app-banana",[],null,null,null,w,f)),n.nb(1,245760,null,0,g,[v.a,v.b],null,null)],(function(e,t){e(t,1,0)}),null)}var x=n.kb("app-banana",g,y,{},{},[]),A=s("SVse"),S=s("iInd");class I{}s.d(t,"BananaModuleNgFactory",(function(){return k}));var k=n.lb(i,[],(function(e){return n.wb([n.xb(512,n.j,n.W,[[8,[l.a,x]],[3,n.j],n.v]),n.xb(4608,A.k,A.j,[n.s,[2,A.q]]),n.xb(1073742336,A.c,A.c,[]),n.xb(1073742336,S.o,S.o,[[2,S.t],[2,S.k]]),n.xb(1073742336,I,I,[]),n.xb(1073742336,i,i,[]),n.xb(1024,S.i,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);