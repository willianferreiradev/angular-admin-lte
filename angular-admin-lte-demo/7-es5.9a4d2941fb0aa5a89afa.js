function _classCallCheck(b,e){if(!(b instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(b,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(b,t.key,t)}}function _createClass(b,e,o){return e&&_defineProperties(b.prototype,e),o&&_defineProperties(b,o),b}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DRG4:function(b,e,o){"use strict";o.r(e),o.d(e,"BoxDefaultModule",(function(){return v}));var t,l,a,s=o("ofXK"),d=o("tyNb"),c=o("wZee"),n=o("fXoL"),i=o("nKAJ"),r=[{path:"",component:(t=function(){function b(){_classCallCheck(this,b)}return _createClass(b,[{key:"ngAfterViewInit",value:function(){c.highlightAll()}}]),b}(),t.\u0275fac=function(b){return new(b||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["ng-component"]],decls:223,vars:26,consts:[[1,"row"],[1,"col-md-3","col-xs-12"],["header","Expandable Box Default",3,"isRemovable","isCollapsed"],["header","Collapsable Box Success","boxColor","green",3,"isRemovable"],["header","isRemovable Box Warning","boxColor","warning",3,"isCollapsable"],["header","isLoading Box Danger","boxColor","danger",3,"isCollapsable","isLoading","isRemovable"],["header","Expandable Solid Box Primary",3,"isRemovable","isCollapsed","isSolid"],["header","Collapsable Solid Box Success","boxColor","success",3,"isRemovable","isSolid"],["header","isRemovable Solid Box Warning","boxColor","purple",3,"isCollapsable","isSolid"],["header","isLoading Solid Box Danger","boxColor","danger","loadingColor","red",3,"isCollapsable","isRemovable","isLoading","isSolid"],[1,"col-md-6","col-xs-12"],["header","Box with Text header & footer",3,"isCollapsable","isRemovable"],[1,"language-html"],["header","Box with HTML header & footer",3,"isCollapsable","isRemovable"],["header","Properties","contentStyleClass","table-responsive",3,"isCollapsable","isRemovable"],[1,"table","table-bordered","table-hover"],["header","Events","contentStyleClass","table-responsive",3,"isCollapsable","isRemovable"]],template:function(b,e){1&b&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"mk-box",2),n.vc(3," The body of the box "),n.Rb(),n.Rb(),n.Sb(4,"div",1),n.Sb(5,"mk-box",3),n.vc(6," The body of the box "),n.Rb(),n.Rb(),n.Sb(7,"div",1),n.Sb(8,"mk-box",4),n.vc(9," The body of the box "),n.Rb(),n.Rb(),n.Sb(10,"div",1),n.Sb(11,"mk-box",5),n.vc(12," The body of the box "),n.Rb(),n.Rb(),n.Rb(),n.Sb(13,"div",0),n.Sb(14,"div",1),n.Sb(15,"mk-box",6),n.vc(16," The body of the box "),n.Rb(),n.Rb(),n.Sb(17,"div",1),n.Sb(18,"mk-box",7),n.vc(19," The body of the box "),n.Rb(),n.Rb(),n.Sb(20,"div",1),n.Sb(21,"mk-box",8),n.vc(22," The body of the box "),n.Rb(),n.Rb(),n.Sb(23,"div",1),n.Sb(24,"mk-box",9),n.vc(25," The body of the box "),n.Rb(),n.Rb(),n.Rb(),n.Sb(26,"div",0),n.Sb(27,"div",10),n.Sb(28,"mk-box",11),n.Sb(29,"pre"),n.Sb(30,"code",12),n.vc(31,'<mk-box header="Box header" footer="Box footer">\n  Box content\n</mk-box>'),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(32,"div",10),n.Sb(33,"mk-box",13),n.Sb(34,"pre"),n.Sb(35,"code",12),n.vc(36,"<mk-box>\n  <mk-box-header>HTML Box header</mk-box-header>\n  <mk-box-tools><button>Additionnal Box Buttons</button></mk-box-tools>\n  <mk-box-content>HTML Box content</mk-box-content>\n  <mk-box-footer>HTML Box footer</mk-box-footer>\n</mk-box>"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(37,"mk-box",14),n.Sb(38,"table",15),n.Sb(39,"tbody"),n.Sb(40,"tr"),n.Sb(41,"th"),n.vc(42,"Name"),n.Rb(),n.Sb(43,"th"),n.vc(44,"Type"),n.Rb(),n.Sb(45,"th"),n.vc(46,"Default"),n.Rb(),n.Sb(47,"th"),n.vc(48,"Description"),n.Rb(),n.Rb(),n.Sb(49,"tr"),n.Sb(50,"td"),n.vc(51,"boxColor"),n.Rb(),n.Sb(52,"td"),n.vc(53,"string (default | primary | success | info | warning | danger | rgb | rgba | hex)"),n.Rb(),n.Sb(54,"td"),n.vc(55,"box-default"),n.Rb(),n.Sb(56,"td"),n.vc(57,"The box color."),n.Rb(),n.Rb(),n.Sb(58,"tr"),n.Sb(59,"td"),n.vc(60,"buttonsStyleClass"),n.Rb(),n.Sb(61,"td"),n.vc(62,"string"),n.Rb(),n.Sb(63,"td"),n.vc(64,"null"),n.Rb(),n.Sb(65,"td"),n.vc(66,"The box collapse & remove buttons style classes."),n.Rb(),n.Rb(),n.Sb(67,"tr"),n.Sb(68,"td"),n.vc(69,"contentStyleClass"),n.Rb(),n.Sb(70,"td"),n.vc(71,"string"),n.Rb(),n.Sb(72,"td"),n.vc(73,"box-content-wrapper"),n.Rb(),n.Sb(74,"td"),n.vc(75,"The box content style classes."),n.Rb(),n.Rb(),n.Sb(76,"tr"),n.Sb(77,"td"),n.vc(78,"footer"),n.Rb(),n.Sb(79,"td"),n.vc(80,"string"),n.Rb(),n.Sb(81,"td"),n.vc(82,"null"),n.Rb(),n.Sb(83,"td"),n.vc(84," Footer text of the box."),n.Nb(85,"br"),n.Sb(86,"em"),n.vc(87,"Note: You can use <mk-box-footer> for HTML footer."),n.Rb(),n.Rb(),n.Rb(),n.Sb(88,"tr"),n.Sb(89,"td"),n.vc(90,"footerStyleClass"),n.Rb(),n.Sb(91,"td"),n.vc(92,"string"),n.Rb(),n.Sb(93,"td"),n.vc(94,"box-footer"),n.Rb(),n.Sb(95,"td"),n.vc(96,"The box footer style classes."),n.Rb(),n.Rb(),n.Sb(97,"tr"),n.Sb(98,"td"),n.vc(99,"header"),n.Rb(),n.Sb(100,"td"),n.vc(101,"string"),n.Rb(),n.Sb(102,"td"),n.vc(103,"null"),n.Rb(),n.Sb(104,"td"),n.vc(105," Header text of the box."),n.Nb(106,"br"),n.Sb(107,"em"),n.vc(108,"Note: You can use <mk-box-content> for HTML header."),n.Rb(),n.Rb(),n.Rb(),n.Sb(109,"tr"),n.Sb(110,"td"),n.vc(111,"headerBorder"),n.Rb(),n.Sb(112,"td"),n.vc(113,"boolean"),n.Rb(),n.Sb(114,"td"),n.vc(115,"true"),n.Rb(),n.Sb(116,"td"),n.vc(117,"Defines if header and content is separated with a border."),n.Rb(),n.Rb(),n.Sb(118,"tr"),n.Sb(119,"td"),n.vc(120,"headerStyleClass"),n.Rb(),n.Sb(121,"td"),n.vc(122,"string"),n.Rb(),n.Sb(123,"td"),n.vc(124,"box-header"),n.Rb(),n.Sb(125,"td"),n.vc(126,"The box header style classes."),n.Rb(),n.Rb(),n.Sb(127,"tr"),n.Sb(128,"td"),n.vc(129,"isCollapsable"),n.Rb(),n.Sb(130,"td"),n.vc(131,"boolean"),n.Rb(),n.Sb(132,"td"),n.vc(133,"true"),n.Rb(),n.Sb(134,"td"),n.vc(135,"Defines if box content can be expanded and collapsed."),n.Rb(),n.Rb(),n.Sb(136,"tr"),n.Sb(137,"td"),n.vc(138,"isCollapsed"),n.Rb(),n.Sb(139,"td"),n.vc(140,"boolean"),n.Rb(),n.Sb(141,"td"),n.vc(142,"false"),n.Rb(),n.Sb(143,"td"),n.vc(144,"Defines if box content is collapsed."),n.Rb(),n.Rb(),n.Sb(145,"tr"),n.Sb(146,"td"),n.vc(147,"isLoading"),n.Rb(),n.Sb(148,"td"),n.vc(149,"boolean"),n.Rb(),n.Sb(150,"td"),n.vc(151,"false"),n.Rb(),n.Sb(152,"td"),n.vc(153,"Show a loading animation."),n.Rb(),n.Rb(),n.Sb(154,"tr"),n.Sb(155,"td"),n.vc(156,"isRemovable"),n.Rb(),n.Sb(157,"td"),n.vc(158,"boolean"),n.Rb(),n.Sb(159,"td"),n.vc(160,"true"),n.Rb(),n.Sb(161,"td"),n.vc(162,"Defines if box can be removed."),n.Rb(),n.Rb(),n.Sb(163,"tr"),n.Sb(164,"td"),n.vc(165,"isSolid"),n.Rb(),n.Sb(166,"td"),n.vc(167,"boolean"),n.Rb(),n.Sb(168,"td"),n.vc(169,"false"),n.Rb(),n.Sb(170,"td"),n.vc(171,"If false the box have border top color, if true the box have filled header and borders."),n.Rb(),n.Rb(),n.Sb(172,"tr"),n.Sb(173,"td"),n.vc(174,"loadingColor"),n.Rb(),n.Sb(175,"td"),n.vc(176,"string"),n.Rb(),n.Sb(177,"td"),n.vc(178,"null"),n.Rb(),n.Sb(179,"td"),n.vc(180,"The box loading icon font color."),n.Rb(),n.Rb(),n.Sb(181,"tr"),n.Sb(182,"td"),n.vc(183,"loadingStyleClass"),n.Rb(),n.Sb(184,"td"),n.vc(185,"string"),n.Rb(),n.Sb(186,"td"),n.vc(187,"fa fa-refresh fa-spin"),n.Rb(),n.Sb(188,"td"),n.vc(189,"The box loading icon style classes."),n.Rb(),n.Rb(),n.Sb(190,"tr"),n.Sb(191,"td"),n.vc(192,"styleClass"),n.Rb(),n.Sb(193,"td"),n.vc(194,"string"),n.Rb(),n.Sb(195,"td"),n.vc(196,"box"),n.Rb(),n.Sb(197,"td"),n.vc(198,"The box style classes."),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(199,"mk-box",16),n.Sb(200,"table",15),n.Sb(201,"tbody"),n.Sb(202,"tr"),n.Sb(203,"th"),n.vc(204,"Name"),n.Rb(),n.Sb(205,"th"),n.vc(206,"Parameters"),n.Rb(),n.Sb(207,"th"),n.vc(208,"Description"),n.Rb(),n.Rb(),n.Sb(209,"tr"),n.Sb(210,"td"),n.vc(211,"onCollapseStart"),n.Rb(),n.Sb(212,"td"),n.vc(213,"event: browser event"),n.Rb(),n.Sb(214,"td"),n.vc(215,"Callback to invoke before content toggle"),n.Rb(),n.Rb(),n.Sb(216,"tr"),n.Sb(217,"td"),n.vc(218,"onCollapseDone"),n.Rb(),n.Sb(219,"td"),n.vc(220,"event: browser event"),n.Rb(),n.Sb(221,"td"),n.vc(222,"Callback to invoke after content toggle"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&b&&(n.zb(2),n.gc("isRemovable",!1)("isCollapsed",!0),n.zb(3),n.gc("isRemovable",!1),n.zb(3),n.gc("isCollapsable",!1),n.zb(3),n.gc("isCollapsable",!1)("isLoading",!0)("isRemovable",!1),n.zb(4),n.gc("isRemovable",!1)("isCollapsed",!0)("isSolid",!0),n.zb(3),n.gc("isRemovable",!1)("isSolid",!0),n.zb(3),n.gc("isCollapsable",!1)("isSolid",!0),n.zb(3),n.gc("isCollapsable",!1)("isRemovable",!1)("isLoading",!0)("isSolid",!0),n.zb(4),n.gc("isCollapsable",!1)("isRemovable",!1),n.zb(5),n.gc("isCollapsable",!1)("isRemovable",!1),n.zb(4),n.gc("isCollapsable",!0)("isRemovable",!1),n.zb(162),n.gc("isCollapsable",!0)("isRemovable",!1))},directives:[i.a],styles:[""]}),t)}],R=((l=function b(){_classCallCheck(this,b)}).\u0275mod=n.Jb({type:l}),l.\u0275inj=n.Ib({factory:function(b){return new(b||l)},imports:[[d.i.forChild(r)],d.i]}),l),S=o("vKRT"),v=((a=function b(){_classCallCheck(this,b)}).\u0275mod=n.Jb({type:a}),a.\u0275inj=n.Ib({factory:function(b){return new(b||a)},imports:[[s.b,R,S.d]]}),a)}}]);