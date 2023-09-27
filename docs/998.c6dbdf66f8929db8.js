"use strict";(self.webpackChunk_04_countryApp=self.webpackChunk_04_countryApp||[]).push([[998],{3998:(ie,C,a)=>{a.r(C),a.d(C,{CountriesModule:()=>te});var c=a(6814),h=a(600),e=a(4946),Z=a(6306),b=a(2096),A=a(7398),l=a(9397),S=a(9862);let g=(()=>{var n;class o{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe((0,Z.K)(()=>(0,b.of)([])))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,A.U)(s=>s.length>0?s[0]:null),(0,Z.K)(()=>(0,b.of)(null)))}searchCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,l.b)(s=>this.cacheStore.byCapital={term:t,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe((0,l.b)(s=>this.cacheStore.byCountries={term:t,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe((0,l.b)(s=>this.cacheStore.byRegion={region:t,countries:s}),(0,l.b)(()=>this.saveToLocalStorage()))}}return(n=o).\u0275fac=function(t){return new(t||n)(e.LFG(S.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),o})(),y=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{bottom:15px;background-color:#000;border-radius:20px;color:#fff;padding:5px 10px;position:fixed;right:15px;box-shadow:0 0 5px #00030080}span[_ngcontent-%COMP%]{margin-left:5px}"]}),o})();var U=a(8645),q=a(7394);class w extends q.w0{constructor(o,i){super()}schedule(o,i=0){return this}}const m={setInterval(n,o,...i){const{delegate:t}=m;return t?.setInterval?t.setInterval(n,o,...i):setInterval(n,o,...i)},clearInterval(n){const{delegate:o}=m;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var B=a(9039);const _={now:()=>(_.delegate||Date).now(),delegate:void 0};class d{constructor(o,i=d.now){this.schedulerActionCtor=o,this.now=i}schedule(o,i=0,t){return new this.schedulerActionCtor(this,o).schedule(t,i)}}d.now=_.now;const J=new class P extends d{constructor(o,i=d.now){super(o,i),this.actions=[],this._active=!1}flush(o){const{actions:i}=this;if(this._active)return void i.push(o);let t;this._active=!0;do{if(t=o.execute(o.state,o.delay))break}while(o=i.shift());if(this._active=!1,t){for(;o=i.shift();)o.unsubscribe();throw t}}}(class I extends w{constructor(o,i){super(o,i),this.scheduler=o,this.work=i,this.pending=!1}schedule(o,i=0){var t;if(this.closed)return this;this.state=o;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,i)),this.pending=!0,this.delay=i,this.id=null!==(t=this.id)&&void 0!==t?t:this.requestAsyncId(s,this.id,i),this}requestAsyncId(o,i,t=0){return m.setInterval(o.flush.bind(o,this),t)}recycleAsyncId(o,i,t=0){if(null!=t&&this.delay===t&&!1===this.pending)return i;null!=i&&m.clearInterval(i)}execute(o,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(o,i);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,i){let r,t=!1;try{this.work(o)}catch(s){t=!0,r=s||new Error("Scheduled action threw falsy error")}if(t)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:o,scheduler:i}=this,{actions:t}=i;this.work=this.state=this.scheduler=null,this.pending=!1,(0,B.P)(t,this),null!=o&&(this.id=this.recycleAsyncId(i,o,null)),this.delay=null,super.unsubscribe()}}});var L=a(9360),O=a(8251);let x=(()=>{var n;class o{constructor(){this.debouncer=new U.x,this.placeholder="",this.initialValue="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debouncerSuscription=this.debouncer.pipe(function R(n,o=J){return(0,L.e)((i,t)=>{let r=null,s=null,u=null;const f=()=>{if(r){r.unsubscribe(),r=null;const p=s;s=null,t.next(p)}};function ne(){const p=u+n,T=o.now();if(T<p)return r=this.schedule(void 0,p-T),void t.add(r);f()}i.subscribe((0,O.x)(t,p=>{s=p,u=o.now(),r||(r=o.schedule(ne,n),t.add(r))},()=>{f(),t.complete()},void 0,()=>{s=r=null}))})}(300)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSuscription?.unsubscribe()}emitValue(t){this.onValue.emit(t)}onKeyPress(t){this.debouncer.next(t)}}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["txtInput",""]],template:function(t,r){if(1&t){const s=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(s);const f=e.MAs(1);return e.KtG(r.onKeyPress(f.value))}),e.qZA()}2&t&&e.Q6J("placeholder",r.placeholder)("value",r.initialValue)},encapsulation:2}),o})();function F(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay palabras que mostrar\n"),e.qZA())}const N=function(n){return["/countries/by",n]};function V(n,o){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",6),e._uU(16,"Ver m\xe1s"),e.qZA()()()),2&n){const i=o.$implicit,t=o.index;e.xp6(2),e.hij(" ",t+1," "),e.xp6(2),e.hij(" ",i.flag," "),e.xp6(2),e.Q6J("src",i.flags.svg,e.LSH)("alt",i.name.common),e.xp6(2),e.Oqu(i.name.common),e.xp6(2),e.Oqu(i.capital),e.xp6(2),e.Oqu(e.lcZ(13,8,i.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(10,N,i.cca3))}}function M(n,o){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Icon"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Poblacion"),e.qZA(),e._UZ(15,"th"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,V,17,12,"tr",4),e.qZA()()),2&n){const i=e.oxw();e.xp6(17),e.Q6J("ngForOf",i.countries)}}let v=(()=>{var n;class o{constructor(){this.countries=[]}}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(t,r){if(1&t&&(e.YNc(0,F,2,0,"div",0),e.YNc(1,M,18,1,"ng-template",null,1,e.W1O)),2&t){const s=e.MAs(2);e.Q6J("ngIf",0===r.countries.length)("ngIfElse",s)}},dependencies:[c.sg,c.O5,h.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:30px}"]}),o})();function j(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let Q=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesService.searchCapital(t).subscribe(r=>{this.countries=r,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(u){return r.searchByCapital(u)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,j,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",r.initialValue),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.O5,y,x,v],encapsulation:2}),o})();function Y(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let D=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.isLoading=!0,this.countriesService.searchCountry(t).subscribe(r=>{this.countries=r,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Pa\xeds",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(u){return r.searchByCountry(u)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,Y,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",r.initialValue),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.O5,y,x,v],encapsulation:2}),o})();const E=function(n){return{"btn-outline-primary":n}};function k(n,o){if(1&n){const i=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const s=e.CHM(i).$implicit,u=e.oxw();return e.KtG(u.searchByRegion(s))}),e._uU(1),e.qZA()}if(2&n){const i=o.$implicit,t=e.oxw();e.Q6J("ngClass",e.VKq(2,E,t.selectedRegion===i)),e.xp6(1),e.hij(" ",i," ")}}function $(n,o){1&n&&e._UZ(0,"shared-loading-spinner")}let K=(()=>{var n;class o{constructor(t){this.countriesService=t,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.selectedRegion=t,this.isLoading=!0,this.countriesService.searchRegion(t).subscribe(r=>{this.countries=r,this.isLoading=!1})}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(t,r){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Por Regi\xf3n"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,k,2,4,"button",2),e.qZA()(),e.TgZ(6,"div",0)(7,"div",3),e._UZ(8,"hr"),e.YNc(9,$,1,0,"shared-loading-spinner",4),e._UZ(10,"countries-table",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",r.regions),e.xp6(4),e.Q6J("ngIf",r.isLoading),e.xp6(1),e.Q6J("countries",r.countries))},dependencies:[c.mk,c.sg,c.O5,y,v],encapsulation:2}),o})();var X=a(4664);function z(n,o){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}function H(n,o){if(1&n&&(e.TgZ(0,"div")(1,"div")(2,"div",3)(3,"div",4)(4,"h2"),e._uU(5,"Pa\xeds: "),e.TgZ(6,"strong"),e._uU(7),e.qZA()(),e._UZ(8,"hr"),e.qZA()(),e.TgZ(9,"div",3)(10,"div",5)(11,"h3"),e._uU(12,"Bandera"),e.qZA(),e._UZ(13,"img",6),e.qZA(),e.TgZ(14,"div",7)(15,"h3"),e._uU(16,"Informaci\xf3n"),e.qZA(),e.TgZ(17,"ul",8)(18,"li",9)(19,"strong"),e._uU(20,"Poblaci\xf3n:"),e.qZA(),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"li",9)(24,"strong"),e._uU(25,"C\xf3digo:"),e.qZA(),e._uU(26),e.qZA()()()(),e.TgZ(27,"div",10)(28,"div",7)(29,"h3"),e._uU(30,"Traducciones"),e.qZA(),e.TgZ(31,"div",11)(32,"span",12),e._uU(33),e.qZA(),e.TgZ(34,"span",12),e._uU(35),e.qZA(),e.TgZ(36,"span",12),e._uU(37),e.qZA(),e.TgZ(38,"span",12),e._uU(39),e.qZA(),e.TgZ(40,"span",12),e._uU(41),e.qZA(),e.TgZ(42,"span",12),e._uU(43),e.qZA(),e.TgZ(44,"span",12),e._uU(45),e.qZA(),e.TgZ(46,"span",12),e._uU(47),e.qZA()()()()()()),2&n){const i=e.oxw();e.xp6(7),e.Oqu(i.country.name.common),e.xp6(6),e.Q6J("src",i.country.flags.svg,e.LSH)("alt",i.country.name.common),e.xp6(8),e.hij(" ",e.lcZ(22,13,i.country.population)," "),e.xp6(5),e.hij(" ",i.country.cca3," "),e.xp6(7),e.hij("",i.country.translations.ara.common," "),e.xp6(2),e.hij("",i.country.translations.bre.common," "),e.xp6(2),e.hij("",i.country.translations.ces.common," "),e.xp6(2),e.hij("",i.country.translations.cym.common," "),e.xp6(2),e.hij("",i.country.translations.deu.common," "),e.xp6(2),e.hij("",i.country.translations.fra.common," "),e.xp6(2),e.hij("",i.country.translations.kor.common," "),e.xp6(2),e.hij("",i.country.translations.jpn.common," ")}}const G=[{path:"by-capital",component:Q},{path:"by-country",component:D},{path:"by-region",component:K},{path:"by/:id",component:(()=>{var n;class o{constructor(t,r,s){this.activatedRoute=t,this.countriesService=r,this.router=s}ngOnInit(){this.activatedRoute.params.pipe((0,X.w)(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return(n=o).\u0275fac=function(t){return new(t||n)(e.Y36(h.gz),e.Y36(g),e.Y36(h.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,r){if(1&t&&(e.YNc(0,z,2,0,"ng-template",null,0,e.W1O),e.YNc(2,H,48,15,"div",1)),2&t){const s=e.MAs(1);e.xp6(2),e.Q6J("ngIf",r.country)("ngIfElse",s)}},dependencies:[c.O5,c.JJ],encapsulation:2}),o})()},{path:"**",redirectTo:"by-capital"}];let W=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(G)]}),o})();var ee=a(6208);let te=(()=>{var n;class o{}return(n=o).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,W,ee.m,h.Bz]}),o})()}}]);