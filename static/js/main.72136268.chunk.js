(this.webpackJsonpreactnew=this.webpackJsonpreactnew||[]).push([[0],[,,function(e,t,c){e.exports={item:"Item_item__1_-ez",quantity:"Item_quantity__15hlW",plus:"Item_plus__MFnv0",minus:"Item_minus__zdauf"}},function(e,t,c){e.exports={icecream:"IceCream_icecream__10vGI",cone:"IceCream_cone__-TT1B",cherry:"IceCream_cherry__yedVD"}},,function(e,t,c){e.exports={builder:"Builder_builder__16ajz",order:"Builder_order__2irut"}},function(e,t,c){e.exports={backdrop:"Modal_backdrop__AdXiB",modalBody:"Modal_modalBody__2LhVk"}},function(e,t,c){e.exports={scoop:"Scoop_scoop__1Y4CH",chocolate:"Scoop_chocolate__2AV0b",vanilla:"Scoop_vanilla__t3VMl",strawberry:"Scoop_strawberry__3VMs8",orange:"Scoop_orange__FlYu_",lemon:"Scoop_lemon__32voE"}},function(e,t,c){e.exports={logo:"Header_logo__ZKJ4i",reactLogo:"Header_reactLogo__28_ji"}},,,,,,function(e,t,c){e.exports={total:"TotalPrice_total__iKMR6"}},function(e,t,c){e.exports={container:"IceCreamBuilder_container__X0IVt"}},function(e,t,c){e.exports={mainBody:"Body_mainBody__P4RWL"}},function(e,t,c){e.exports={container:"Footer_container__2GFFT"}},,,,,,,function(e,t,c){},,,,function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(10),a=c.n(r),s=(c(24),c(9)),i=c(11),d=c(12),l=c(19),j=c(18),u=c(5),b=c.n(u),m=c(13),p=c(2),_=c.n(p),h=c(0),x=void 0,v=function(e){var t=e.name,c=e.add,n=e.remove,o=e.scoops,r=void 0===o?{}:o,a=Object(m.countBy)(r);return Object(h.jsxs)("li",{className:_.a.item,children:[Object(h.jsx)("span",{children:t}),a[t]>=0?Object(h.jsx)("span",{className:_.a.quantity,children:a[t]}):null,Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("button",{onClick:c.bind(x,t),type:"button",className:[_.a.plus,"rounded"].join(" "),children:"+"}),Object(h.jsx)("button",{type:"button",onClick:n.bind(x,t),className:[_.a.minus,"rounded"].join(" "),children:"-"})]})]})},O=function(e){var t=e.items,c=e.add,n=e.remove,o=e.scoops,r=Object.keys(t);return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:r.map((function(e){return Object(h.jsx)(v,{name:e,add:c,remove:n,scoops:o},e)}))})})},f=c(6),y=c.n(f),g=function(e){var t=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:y.a.backdrop}),Object(h.jsx)("div",{className:y.a.modalBody,children:t})]})},N=c(14),B=c.n(N),C=function(e){var t=e.price,c=void 0===t?0:t;return Object(h.jsxs)("div",{className:B.a.total,children:[Object(h.jsx)("div",{children:"Total Price"}),Object(h.jsxs)("div",{children:[c.toFixed(2)," Tk"]})]})},S=function(e){var t=e.items,c=e.price,n=e.add,o=e.remove,r=e.scoops;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:b.a.builder,children:[Object(h.jsx)("h3",{children:"Build your own Ice Cream Sundae"}),Object(h.jsx)(O,{items:t,add:n,remove:o,scoops:r}),Object(h.jsx)(C,{price:c}),Object(h.jsx)("button",{type:"button",className:[b.a.order,"rounded"].join(" "),children:"Add to Cart"})]}),Object(h.jsx)(g,{children:"Hello Modal"})]})},I=c(3),k=c.n(I),w=c(7),P=c.n(w),F=function(e){var t=e.scoop;return Object(h.jsx)("div",{className:[P.a.scoop,P.a[t]].join(" ")})},M=function(e){var t=e.scoops;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:k.a.icecream,children:[Object(h.jsx)("p",{className:k.a.cone}),t.map((function(e){return Object(h.jsx)(F,{scoop:e},"".concat(e).concat(Math.random()))})),Object(h.jsx)("div",{className:k.a.cherry})]})})},L=c(15),T=c.n(L),R=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={items:{chocolate:45,lemon:30,orange:35,strawberry:55,vanilla:45},scoops:[],totalPrice:0},e.addScoop=function(t){var c=e.state,n=c.scoops,o=c.items,r=Object(s.a)(n);r.push(t),e.setState((function(e){return{scoops:r,totalPrice:e.totalPrice+o[t]}}))},e.removeScoop=function(t){var c=e.state,n=c.scoops,o=c.items,r=Object(s.a)(n),a=r.findIndex((function(e){return e===t}));r.splice(a,1),e.setState((function(e){return{scoops:r,totalPrice:e.totalPrice-o[t]}}))},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this.state,t=e.items,c=e.totalPrice,n=e.scoops;return Object(h.jsxs)("div",{className:["container",T.a.container].join(" "),children:[Object(h.jsx)(M,{scoops:n}),Object(h.jsx)(S,{items:t,price:c,add:this.addScoop,remove:this.removeScoop,scoops:n})]})}}]),c}(n.Component),V=c(16),A=c.n(V),H=function(){return Object(h.jsx)("div",{className:A.a.mainBody,children:Object(h.jsx)(R,{})})},q=c(17),z=c.n(q),J=function(){return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:["container",z.a.container].join(" "),children:[Object(h.jsx)("div",{children:"Copyright \xa92020."}),Object(h.jsxs)("div",{className:"textRight",children:["Built with ",Object(h.jsx)("span",{className:"red",children:"\u2665"})," by",Object(h.jsx)("a",{href:"https://reactjs.org/docs/create-a-new-react-app.html",children:"Create React App"})]})]})})},D=c.p+"static/media/logo.492a1700.svg",E=c.p+"static/media/react.e68b35f4.svg",G=c(8),K=c.n(G);function W(){return Object(h.jsx)("header",{children:Object(h.jsxs)("div",{className:"container",id:"header",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:K.a.logo,src:D,alt:"Logo"})}),Object(h.jsxs)("div",{className:"textRight",children:[Object(h.jsx)("img",{src:E,alt:"React",className:K.a.reactLogo}),Object(h.jsx)("strong",{children:"React"})]})]})})}var X=function(e){var t=e.children;return Object(h.jsx)("div",{children:t})};var Y=function(){return Object(h.jsxs)(X,{children:[Object(h.jsx)(W,{}),Object(h.jsx)(H,{}),Object(h.jsx)(J,{})]})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),o(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(Y,{})}),document.getElementById("root")),Z()}],[[28,1,2]]]);
//# sourceMappingURL=main.72136268.chunk.js.map