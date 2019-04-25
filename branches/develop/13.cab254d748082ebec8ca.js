(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JcHm:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),r=u("9o+3"),a=u("nKAJ"),i=u("ZYCi"),b=u("Ip0R"),p=u("wZee"),c=function(){function l(){}return l.prototype.ngAfterViewInit=function(){p.highlightAll()},l}(),s=e.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,15,"mk-box",[["header","About custom layout"]],null,null,null,r.b,r.a)),e.ob(1,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,1,{boxHeaderDirective:0}),e.Db(335544320,2,{boxFooterDirective:0}),e.Db(335544320,3,{boxContentDirective:0}),e.Db(335544320,4,{boxToolsDirective:0}),(l()(),e.pb(6,0,null,3,9,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["You can completely disable layout components to create custom page layout like "])),(l()(),e.pb(8,0,null,null,2,"a",[["routerLink","/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.ob(9,671744,null,0,i.r,[i.q,i.a,b.g],{routerLink:[0,"routerLink"]},null),(l()(),e.Fb(-1,null,["Login"])),(l()(),e.Fb(-1,null,[" and "])),(l()(),e.pb(12,0,null,null,2,"a",[["routerLink","/register"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,13).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e.ob(13,671744,null,0,i.r,[i.q,i.a,b.g],{routerLink:[0,"routerLink"]},null),(l()(),e.Fb(-1,null,["Register"])),(l()(),e.Fb(-1,null,[" pages."])),(l()(),e.pb(16,0,null,null,22,"mk-box",[["header","Configuration"]],null,null,null,r.b,r.a)),e.ob(17,4374528,null,4,a.a,[e.h,e.z,e.D],{header:[0,"header"],isCollapsable:[1,"isCollapsable"],isRemovable:[2,"isRemovable"]},null),e.Db(335544320,5,{boxHeaderDirective:0}),e.Db(335544320,6,{boxFooterDirective:0}),e.Db(335544320,7,{boxContentDirective:0}),e.Db(335544320,8,{boxToolsDirective:0}),(l()(),e.pb(22,0,null,3,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["First you will need to import LayoutService and subscribe to isCustomLayout in the main app component:"])),(l()(),e.pb(24,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e.pb(25,0,null,null,1,"code",[["class","language-typescript"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["import { Component, OnInit } from '@angular/core';\nimport { LayoutService } from '../../../src';\n\n@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit {\n  public isCustomLayout: boolean;\n\n  constructor(\n    private layoutService: LayoutService\n  ) {}\n\n  ngOnInit() {\n    this.layoutService.isCustomLayout.subscribe((value: boolean) => {\n      this.isCustomLayout = value;\n    });\n  }\n}"])),(l()(),e.pb(27,0,null,3,0,"br",[],null,null,null,null,null)),(l()(),e.pb(28,0,null,3,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Wrap the main component html like so:"])),(l()(),e.pb(30,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e.pb(31,0,null,null,1,"code",[["class","language-html"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,['<ng-container *ngIf="isCustomLayout else noCustomLayout">\n  <router-outlet></router-outlet>\n</ng-container>\n<ng-template #layoutEnabled>\n  <mk-layout-wrapper>\n    ...\n  </mk-layout-wrapper>\n<ng-template>'])),(l()(),e.pb(33,0,null,3,0,"br",[],null,null,null,null,null)),(l()(),e.pb(34,0,null,3,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Configure the router:"])),(l()(),e.pb(36,0,null,3,2,"pre",[],null,null,null,null,null)),(l()(),e.pb(37,0,null,null,1,"code",[["class","language-typescript"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["\n  ...\n  , {\n    path: 'login',\n    loadChildren: 'app/login/login.module#LoginModule',\n    data: {\n      customLayout: true\n    }\n  },\n  ...\n"]))],function(l,n){l(n,1,0,"About custom layout",!1,!1),l(n,9,0,"/login"),l(n,13,0,"/register"),l(n,17,0,"Configuration",!1,!1)},function(l,n){l(n,8,0,e.zb(n,9).target,e.zb(n,9).href),l(n,12,0,e.zb(n,13).target,e.zb(n,13).href)})}function g(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"ng-component",[],null,null,null,m,s)),e.ob(1,4243456,null,0,c,[],null,null)],null,null)}var y=e.lb("ng-component",c,g,{},{},[]),f=function(){return function(){}}(),h=u("lp/B"),d=u("k3IM"),v=u("RyNk");u.d(n,"CustomModuleNgFactory",function(){return C});var C=e.mb(t,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[o.a,y]],[3,e.j],e.x]),e.xb(4608,b.l,b.k,[e.u,[2,b.s]]),e.xb(1073742336,b.b,b.b,[]),e.xb(1073742336,i.s,i.s,[[2,i.y],[2,i.q]]),e.xb(1073742336,f,f,[]),e.xb(1073742336,h.a,h.a,[]),e.xb(1073742336,d.a,d.a,[]),e.xb(1073742336,v.a,v.a,[]),e.xb(1073742336,t,t,[]),e.xb(1024,i.o,function(){return[[{path:"",component:c}]]},[])])})}}]);