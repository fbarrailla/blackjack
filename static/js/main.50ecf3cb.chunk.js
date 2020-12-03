(this.webpackJsonpblackjack=this.webpackJsonpblackjack||[]).push([[0],{33:function(n,t,e){},52:function(n,t,e){"use strict";e.r(t);var r,c,a,o=e(1),i=e(0),u=e.n(i),s=e(24),d=e.n(s),l=e(7),f=e(4),b=e(6),p={colors:{black:"#050505",white:"#ffffff",greyDark:"#191919",pink:"#f093b0",purple:"#4f41ab",purpleDark:"#3725ae",green:"#41a447",red:"#a44141"}};!function(n){n.ACE="ACE",n.KING="KING",n.QUEEN="QUEEN",n.JACK="JACK",n.ONE="1",n.TWO="2",n.THREE="3",n.FOUR="4",n.FIVE="5",n.SIX="6",n.SEVEN="7",n.EIGHT="8",n.NINE="9",n.TEN="10"}(r||(r={}));var O,j=21,h=[r.KING,r.QUEEN,r.JACK],x=r.ACE;!function(n){n.GAME_OVER="GAME_OVER",n.WIN="WIN",n.IN_PROGRESS="IN_PROGRESS",n.PLAYER_STOOD="PLAYER_STOOD"}(O||(O={}));var E,m=(c={},Object(b.a)(c,O.GAME_OVER,"Game Over"),Object(b.a)(c,O.WIN,"You win"),Object(b.a)(c,O.IN_PROGRESS,"It's your turn"),Object(b.a)(c,O.PLAYER_STOOD,"Bank is playing"),c),v=(a={},Object(b.a)(a,O.GAME_OVER,p.colors.red),Object(b.a)(a,O.WIN,p.colors.green),Object(b.a)(a,O.IN_PROGRESS,p.colors.purple),Object(b.a)(a,O.PLAYER_STOOD,p.colors.greyDark),a);!function(n){n[n.MOBILE_S=320]="MOBILE_S",n[n.MOBILE_M=375]="MOBILE_M",n[n.MOBILE_L=425]="MOBILE_L",n[n.TABLET=768]="TABLET",n[n.LAPTOP=1024]="LAPTOP",n[n.LAPTOP_L=1440]="LAPTOP_L",n[n.DESKTOP=2560]="DESKTOP"}(E||(E={}));var g,k={deckId:void 0,player:{cards:[],score:0},bank:{cards:[],score:0},playerStood:!1,gameState:O.IN_PROGRESS},A=Object(i.createContext)([]),_=A.Provider,y=(A.Consumer,A);function L(n){var t=n.filter((function(n){return n===x})).length,e=n.filter((function(n){return n!==x})).reduce((function(n,t){return n+function(n){return h.includes(n)?10:1}(t)}),0);return e+(t?function(n,t){return n>1||t+11>j?1*n:11}(t,e):0)}function I(n,t){switch(t.type){case g.NEW_GAME:return Object(f.a)(Object(f.a)({},k),{},{deckId:t.payload});case g.PLAYER_HIT:var e=n.player.cards.concat(t.payload),r=L(e.map((function(n){return n.value})));return Object(f.a)(Object(f.a)({},n),{},{player:Object(f.a)(Object(f.a)({},n.player),{},{cards:e,score:r})});case g.BANK_HIT:var c=n.bank.cards.concat(t.payload),a=L(c.map((function(n){return n.value})));return Object(f.a)(Object(f.a)({},n),{},{bank:Object(f.a)(Object(f.a)({},n.bank),{},{cards:c,score:a})});case g.PLAYER_STAND:return Object(f.a)(Object(f.a)({},n),{},{playerStood:!0});case g.UPDATE_GAME:return Object(f.a)(Object(f.a)({},n),{},{gameState:t.payload});default:return n}}function S(n){var t=n.children,e=Object(i.useReducer)(I,k),r=Object(l.a)(e,2),c=r[0],a=r[1];return Object(o.jsx)(_,{value:[c,a],children:t})}!function(n){n.NEW_GAME="NEW_GAME",n.PLAYER_HIT="PLAYER_HIT",n.PLAYER_STAND="PLAYER_STAND",n.BANK_HIT="BANK_HIT",n.UPDATE_GAME="UPDATE_GAME"}(g||(g={}));e(33);var T=e(3),w=e(2),P={mobileS:"(min-width: ".concat(E.MOBILE_S,"px)"),mobileM:"(min-width: ".concat(E.MOBILE_M,"px)"),mobileL:"(min-width: ".concat(E.MOBILE_L,"px)"),tablet:"(min-width: ".concat(E.TABLET,"px)"),laptop:"(min-width: ".concat(E.LAPTOP,"px)"),laptopL:"(min-width: ".concat(E.LAPTOP_L,"px)"),desktop:"(min-width: ".concat(E.DESKTOP,"px)"),desktopL:"(min-width: ".concat(E.DESKTOP,"px)")};function R(){var n=Object(T.a)(["\n*, \n*:before, \n*:after {\n  box-sizing: border-box;\n}\n\nbody {\n  background: ",";\n  color: ","\n}\n"]);return R=function(){return n},n}var N=Object(w.b)(R(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}));function M(){var n=Object(T.a)(["\n  position: absolute;\n  border-radius: 4px;\n  width: 70px;\n  height: 100px;\n  font-size: 0.8rem;\n  box-shadow: 1px 0 8px ",";\n\n  top: ",";\n  left: ","px;\n\n  @media "," {\n    top: ",";\n    left: ","px;\n  }\n"]);return M=function(){return n},n}function D(){var n=Object(T.a)(["\n  position: relative;\n  height: 200px;\n  width: 100%;\n"]);return D=function(){return n},n}var G=5,B=9,C=w.c.figure(D()),Y=w.c.img(M(),(function(n){return n.theme.colors.black}),(function(n){return n.number>G?"40px;":"0px"}),(function(n){var t=n.number;return t>G?30*(t-G-1):30*t}),P.mobileL,(function(n){return n.number>B?"40px;":"0px"}),(function(n){var t=n.number;return t>B?30*(t-B-1):30*t}));function K(n){var t=n.cards;return Object(o.jsx)(C,{children:t.map((function(n,t){return Object(o.jsx)(Y,{src:n.image,alt:"".concat(n.value," of ").concat(n.suit),number:t},"".concat(n.value,"_").concat(n.suit,"_").concat(t))}))})}function W(){var n=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  width: 40px;\n  height: 40px;\n  background-color: ",";\n  color: ",";\n  border-radius: 50%;\n"]);return W=function(){return n},n}var H=w.c.div(W(),(function(n){return n.theme.colors.pink}),(function(n){return n.theme.colors.greyDark}));function z(n){var t=n.score;return Object(o.jsx)(H,{children:t})}function U(){var n=Object(T.a)([""]);return U=function(){return n},n}function V(){var n=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ",";\n  width: 100%;\n  height: 400px;\n  border-radius: 5px;\n  padding: 20px;\n\n  @media "," {\n    width: 400px;\n  }\n"]);return V=function(){return n},n}var F=w.c.article(V(),(function(n){return n.theme.colors.greyDark}),P.tablet),J=w.c.h2(U()),Q=u.a.forwardRef((function(n,t){var e=n.title,r=n.game;return Object(o.jsxs)(F,{ref:t,children:[Object(o.jsx)(J,{children:e}),Object(o.jsx)(K,{cards:r.cards}),Object(o.jsx)(z,{score:r.score})]})})),X=e(8),q=e.n(X),Z=e(13),$=e(10),nn=e.n($);function tn(){return(tn=Object(Z.a)(q.a.mark((function n(){var t;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn.a.get("deck/new/shuffle/?deck_count=6");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function en(n){return rn.apply(this,arguments)}function rn(){return(rn=Object(Z.a)(q.a.mark((function n(t){var e;return q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,nn.a.get("deck/".concat(t,"/draw/?count=1"));case 2:return e=n.sent,n.abrupt("return",e.data.cards[0]);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function cn(){var n=Object(T.a)(["\n  font-family: 'Poppins';\n  border: 0;\n  padding: 10px 40px;\n  font-size: 1rem;\n  text-transform: uppercase;\n  border-radius: 30px;\n  background-color: ",";\n  color: ",";\n  ","\n  transition: background-color 0.3s ease;\n  box-shadow: 1px 1px 1px;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return cn=function(){return n},n}nn.a.defaults.baseURL="https://deckofcardsapi.com/api/";var an=w.c.button(cn(),(function(n){var t=n.theme;return n.disabled?t.colors.greyDark:t.colors.purple}),(function(n){return n.theme.colors.white}),(function(n){return!n.disabled&&"cursor: pointer;"}),(function(n){var t=n.theme;return n.disabled?t.colors.greyDark:t.colors.purpleDark}));function on(){var n=Object(T.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column-reverse;\n  margin: 30px;\n\n  > div:last-child > button:first-child {\n    margin-right: 10px;\n  }\n\n  > div:first-child {\n    margin-top: 20px;\n  }\n\n  @media "," {\n    flex-direction: row;\n\n    > div:first-child {\n      margin-top: 0;\n      margin-right: 50px;\n    }\n  }\n"]);return on=function(){return n},n}var un=w.c.div(on(),P.tablet);function sn(){var n=Object(i.useContext)(y),t=Object(l.a)(n,2),e=t[0],r=t[1],c=e.deckId,a=e.bank,u=e.playerStood,s=e.gameState,d=Object(i.useMemo)((function(){return!c||u||s===O.GAME_OVER||s===O.WIN}),[u,s,c]),f=Object(i.useRef)(null),b=function(){f.current&&p(),function(){return tn.apply(this,arguments)}().then((function(n){r({type:g.NEW_GAME,payload:n.deck_id})}))},p=function(){clearInterval(f.current),f.current=null};return Object(i.useEffect)((function(){c||b()})),Object(i.useEffect)((function(){u&&!f.current?f.current=setInterval((function(){en(c).then((function(n){return r({type:g.BANK_HIT,payload:n})})).catch((function(n){return n}))}),2e3):a.score>=j&&p()}),[u,a.score,c,r]),Object(o.jsxs)(un,{children:[Object(o.jsx)("div",{children:Object(o.jsx)(an,{"aria-label":"Get a refresh",onClick:b,children:"Start new game"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)(an,{"aria-label":"Hit, draw a card",disabled:d,onClick:function(){en(c).then((function(n){return r({type:g.PLAYER_HIT,payload:n})})).catch((function(n){return n}))},children:"Hit"}),Object(o.jsx)(an,{"aria-label":"Stand, end your turn",disabled:d,onClick:function(){r({type:g.PLAYER_STAND})},children:"Stand"})]})]})}function dn(){var n=Object(T.a)(["\n  font-size: 1rem;\n  margin: 0;\n"]);return dn=function(){return n},n}function ln(){var n=Object(T.a)(["\n  font-size: 3rem;\n  margin: 10px 0 0;\n"]);return ln=function(){return n},n}function fn(){var n=Object(T.a)(["\n  position: sticky;\n  padding: 10px;\n  margin: 0 0 40px;\n  background-color: ",";\n  transition: background-color 0.5s ease;\n  top: 0;\n  z-index: 2;\n\n  @media "," {\n    position: relative;\n  }\n"]);return fn=function(){return n},n}function bn(){var n=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 40px 20px 0;\n\n  > *:first-child {\n    margin-bottom: 20px;\n  }\n\n  @media "," {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n\n    > *:first-child {\n      margin-bottom: 0;\n      margin-right: 20px;\n    }\n  }\n"]);return bn=function(){return n},n}function pn(){var n=Object(T.a)(["\n  text-align: center;\n  padding-bottom: 200px;\n\n  @media "," {\n    padding-bottom: 100px;\n  }\n"]);return pn=function(){return n},n}var On=w.c.div(pn(),P.tablet),jn=w.c.section(bn(),P.tablet),hn=w.c.h2(fn(),(function(n){return n.backgroundColor}),P.tablet),xn=w.c.h1(ln()),En=w.c.h2(dn());var mn=function(){var n=Object(i.useContext)(y),t=Object(l.a)(n,2),e=t[0],r=t[1],c=e.player,a=e.bank,u=e.playerStood,s=e.gameState,d=Object(i.useRef)(null),f=function(){var n=Object(i.useState)(window.innerWidth),t=Object(l.a)(n,2),e=t[0],r=t[1];return Object(i.useEffect)((function(){var n=function(){return r(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}})),e<E.TABLET}(),b=Object(i.useMemo)((function(){return function(n,t,e){return n<=j&&e&&t>j?O.WIN:n>j||t===j?O.GAME_OVER:e?O.PLAYER_STOOD:O.IN_PROGRESS}(c.score,a.score,u)}),[c.score,a.score,u]);return Object(i.useEffect)((function(){b!==s&&r({type:g.UPDATE_GAME,payload:b})}),[s,b,r]),Object(i.useEffect)((function(){var n;d.current&&f&&u&&(null===(n=d.current)||void 0===n||n.scrollIntoView({behavior:"smooth",block:"start"}))}),[f,u]),Object(o.jsxs)(w.a,{theme:p,children:[Object(o.jsxs)(On,{children:[Object(o.jsx)(hn,{backgroundColor:v[s],children:m[s]}),Object(o.jsxs)("header",{children:[Object(o.jsx)(xn,{children:"BlackJack"}),Object(o.jsx)(En,{children:"Beat the bank's hand without going over 21"})]}),Object(o.jsxs)(jn,{children:[Object(o.jsx)(Q,{title:"Your hand",game:c}),Object(o.jsx)(Q,{ref:d,title:"Bank's hand",game:a})]}),Object(o.jsx)("footer",{children:Object(o.jsx)(sn,{})})]}),Object(o.jsx)(N,{})]})},vn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,53)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))};d.a.render(Object(o.jsx)(u.a.StrictMode,{children:Object(o.jsx)(S,{children:Object(o.jsx)(mn,{})})}),document.getElementById("root")),vn()}},[[52,1,2]]]);
//# sourceMappingURL=main.50ecf3cb.chunk.js.map