(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__107V9",total:"Cart_total__3cSbm",actions:"Cart_actions__3nL7y","button--alt":"Cart_button--alt__2wFBV",button:"Cart_button__225uG"}},function(e,t,n){e.exports={form:"CheckoutForm_form__3t_Tp",control:"CheckoutForm_control__1BLD3",actions:"CheckoutForm_actions__3aGUV",submit:"CheckoutForm_submit__27Loi",invalid:"CheckoutForm_invalid__aTeTG"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1CTjM",summary:"CartItem_summary__1UGPa",price:"CartItem_price__2Ue08",amount:"CartItem_amount__1sNpf",actions:"CartItem_actions__2OIwm"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__YAd8s",icon:"HeaderCartButton_icon__2GGqh",badge:"HeaderCartButton_badge__36cDd",bump:"HeaderCartButton_bump__ZCdBJ"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__3gDDE","meals-appear":"AvailableMeals_meals-appear__XDbKw",mealsLoading:"AvailableMeals_mealsLoading__QNXog",mealsError:"AvailableMeals_mealsError__15Qma"}},function(e,t,n){e.exports={meal:"MealItems_meal__2Rb84",description:"MealItems_description__27rN-",price:"MealItems_price__3ekZG"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3Q_pS",modal:"Modal_modal__2ohFQ","slide-down":"Modal_slide-down__1tvik"}},,,function(e,t,n){e.exports={header:"Header_header__3Dikz","main-image":"Header_main-image__1odlN"}},,function(e,t,n){e.exports={card:"Card_card__1hnTH"}},function(e,t,n){e.exports={input:"Input_input__1wUDN"}},function(e,t,n){e.exports={form:"MealItemsForm_form__1Jsd_"}},function(e,t,n){e.exports={summary:"MealsSummery_summary__2e18b"}},,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),i=(n(27),n(2)),o=n(18),l=n.n(o),u=n.p+"static/media/meals.2971f633.jpg",d=c.a.createContext({items:[],totalAmount:0,addItem:function(){},removeItem:function(){},clearCart:function(){}}),j=n(0),m=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},b=n(10),O=n.n(b);var p=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useContext)(d),o=s.items.reduce((function(e,t){return e+t.amount}),0),l="".concat(O.a.button," ").concat(c?O.a.bump:"");return Object(a.useEffect)((function(){if(0!==s.items.length){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[s.items]),Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:O.a.icon,children:Object(j.jsx)(m,{})}),Object(j.jsx)("span",{children:"your cart"}),Object(j.jsx)("span",{className:O.a.badge,children:o})]})};var h=function(e){return Object(j.jsxs)(a.Fragment,{children:[Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)("h1",{children:"reactMeals"}),Object(j.jsx)(p,{onClick:e.onShowCart})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:l.a["main-image"],src:u,alt:"meals os table"})})]})},x=n(17),f=n(6),_=n(12),v=n(13),C=n.n(v),N=n(20),y=n.n(N);var g=function(e){return Object(j.jsx)("div",{className:y.a.card,children:e.children})},A=n(14),k=n.n(A),I=n(3),w=n(21),S=n.n(w),F=c.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:S.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(I.a)({ref:t},e.input))]})})),M=n(22),D=n.n(M);var L=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!0),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(j.jsxs)("form",{className:D.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||c>5?s(!1):e.onAddToCart(c)},children:[Object(j.jsx)(F,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(j.jsx)("button",{children:" + Add"}),!r&&Object(j.jsx)("p",{children:"Please enter a valid Amount"})]})};var E=function(e){var t=Object(a.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:k.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:k.a.description,children:e.description}),Object(j.jsx)("div",{className:k.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(L,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},H=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(),d=Object(i.a)(u,2),m=d[0],b=d[1];if(Object(a.useEffect)((function(){var e=function(){var e=Object(_.a)(Object(f.a)().mark((function e(){var t,n,a,r;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-gpost-default-rtdb.firebaseio.com/meals.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),l(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(j.jsx)("section",{className:C.a.mealsLoading,children:Object(j.jsx)("h3",{children:"Loading..."})});if(m)return Object(j.jsx)("section",{className:C.a.mealsError,children:Object(j.jsx)("h3",{children:m})});var O=n.map((function(e){return Object(j.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(g,{children:Object(j.jsx)("ul",{children:O})})})},T=n(23),R=n.n(T),B=function(){return Object(j.jsxs)("section",{className:R.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},G=function(){return Object(j.jsxs)(x.Fragment,{children:[Object(j.jsx)(B,{}),Object(j.jsx)(H,{})]})},P=n(4),V=n.n(P),J=n(15),z=n.n(J),Q=function(e){return Object(j.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},U=function(e){return Object(j.jsx)("div",{className:z.a.modal,children:Object(j.jsx)("div",{className:z.a.content,children:e.children})})},Y=document.getElementById("overlays");var q=function(e){return Object(j.jsxs)(a.Fragment,{children:[s.a.createPortal(Object(j.jsx)(Q,{onClose:e.onClose}),Y),s.a.createPortal(Object(j.jsx)(U,{children:e.children}),Y)]})},X=n(7),Z=n.n(X),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:Z.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:Z.a.summary,children:[Object(j.jsx)("span",{className:Z.a.price,children:t}),Object(j.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:Z.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(5),W=n.n(K),ee=function(e){return""===e.trim()},te=function(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!0),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(a.useRef)(),m=Object(a.useRef)();return Object(j.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=d.current.value,a=m.current.value,c=!ee(n),s=!ee(a);r(c),u(s),c&&s&&e.onConfirm({name:n,address:a})},children:[Object(j.jsxs)("div",{className:"".concat(W.a.control," ").concat(c?"":W.a.invalid),children:[Object(j.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:d}),!c&&Object(j.jsx)("p",{children:"Enter a valid name"})]}),Object(j.jsxs)("div",{className:"".concat(W.a.control," ").concat(l?"":W.a.invalid),children:[Object(j.jsx)("label",{htmlFor:"address",children:"Address"}),Object(j.jsx)("input",{type:"text",id:"address",ref:m}),!l&&Object(j.jsx)("p",{children:"Enter a valid adrress"})]}),Object(j.jsxs)("div",{className:W.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})};var ne=function(e){var t=Object(a.useContext)(d),n=Object(a.useState)(!1),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),m=u[0],b=u[1],O=Object(a.useState)(!1),p=Object(i.a)(O,2),h=p[0],x=p[1],v=t.totalAmount.toFixed(2),C=t.items.length>0,N=function(e){t.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},y=function(e){t.removeItem(e)},g=function(){var e=Object(_.a)(Object(f.a)().mark((function e(n){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,fetch("https://react-gpost-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({userData:n,orderedItems:t.items})});case 3:b(!1),x(!0),t.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(j.jsx)("ul",{className:V.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)($,{id:e.id,name:e.name,amount:e.amount,price:e.price,onAdd:N.bind(null,e),onRemove:y.bind(null,e.id)},e.id)}))}),k=Object(j.jsxs)("div",{className:V.a.actions,children:[Object(j.jsx)("button",{className:V.a["button--alt"],onClick:e.onClose,children:"Close"}),C&&Object(j.jsx)("button",{className:V.a.button,onClick:function(){o(!0)},children:"Order"})]}),w=Object(j.jsxs)(c.a.Fragment,{children:[A,Object(j.jsxs)("div",{className:V.a.total,children:[Object(j.jsx)("span",{children:"Total amount"}),Object(j.jsx)("span",{children:v})]}),s&&Object(j.jsx)(te,{onConfirm:g,onCancel:e.onClose}),!s&&k]}),S=Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("p",{children:"Order is placed"}),Object(j.jsx)("div",{className:V.a.actions,children:Object(j.jsx)("button",{className:V.a["button--alt"],onClick:e.onClose,children:"Close"})})]});return Object(j.jsxs)(q,{onClose:e.onClose,children:[!m&&!h&&w,m&&Object(j.jsx)("p",{children:"Sending Data..."}),h&&!m&&S]})},ae=n(19),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a,c=e.totalAmount+t.payLoad.price*t.payLoad.amount,r=e.items.findIndex((function(e){return e.id===t.payLoad.id})),s=e.items[r];return s?(n=Object(I.a)(Object(I.a)({},s),{},{amount:s.amount+t.payLoad.amount}),(a=Object(ae.a)(e.items))[r]=n):a=e.items.concat(t.payLoad),{items:a,totalAmount:c}}if("REMOVE"===t.type){var i=e.items.findIndex((function(e){return e.id===t.payLoad})),o=e.items[i];console.log(o.price);var l,u=e.totalAmount-o.price;if(1===o.amount)l=e.items.filter((function(e){return e.id!==t.payLoad}));else{var d=Object(I.a)(Object(I.a)({},o),{},{amount:o.amount-1});(l=Object(ae.a)(e.items))[i]=d}return{items:l,totalAmount:u}}return t.type,ce};var se=function(e){var t=Object(a.useReducer)(re,ce),n=Object(i.a)(t,2),c=n[0],r=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){r({type:"ADD",payLoad:e})},removeItem:function(e){r({type:"REMOVE",payLoad:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(j.jsx)(d.Provider,{value:s,children:e.children})};var ie=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(se,{children:[n&&Object(j.jsx)(ne,{onClose:function(){c(!1)}}),Object(j.jsx)(h,{onShowCart:function(){c(!0)}}),Object(j.jsx)("main",{children:Object(j.jsx)(G,{})})]})};s.a.render(Object(j.jsx)(ie,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.fd4431a2.chunk.js.map