(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{18:function(e,a,t){e.exports=t(35)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),c=t(12),r=t.n(c),i=t(13),u=t(14),o=t(17),l=t(16),m=t(7),d=t(15),b=t.n(d).a.initializeApp({apiKey:"AIzaSyCRRJfbHjQ67e7l0iYfD_XzxMR-P7WJ6NM",authDomain:"my-website-v2-e6874.firebaseapp.com",databaseURL:"https://my-website-v2-e6874.firebaseio.com",projectId:"my-website-v2-e6874",storageBucket:"my-website-v2-e6874.appspot.com",messagingSenderId:"941409413931",appId:"1:941409413931:web:cdbbafbd37058c91d7736e"}),p=(t(33),function(e){var a=e.email,t=e.setEmail,n=e.password,c=e.setPassword,r=e.handleLogin,i=(e.handleSignUp,e.hasAccount,e.setHasAccount,e.emailError),u=e.passwordError;return s.a.createElement("div",{className:"base-container"},s.a.createElement("h2",null,"CMS Sign In"),s.a.createElement("div",{className:"form"},s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{type:"=text",autoFocus:!0,required:!0,value:a,onChange:function(e){return t(e.target.value)}}),s.a.createElement("label",null,"Email"),s.a.createElement("p",{className:"errorMsg"},i)),s.a.createElement("div",{className:"inputField"},s.a.createElement("input",{type:"password",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),s.a.createElement("label",null,"Password"),s.a.createElement("p",{className:"errorMsg"},u)),s.a.createElement("div",{className:"signInButton"},s.a.createElement("button",{onClick:r},"Sign In"))))}),h=function(e){var a=e.handleLogout;return s.a.createElement("section",{className:"Dashboard"},s.a.createElement("h2",null,"Welcome, you have signed in!"),s.a.createElement("button",{onClick:a},"Sign Out"))},E=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),u=i[0],o=i[1],l=Object(n.useState)(""),d=Object(m.a)(l,2),E=d[0],f=d[1],g=Object(n.useState)(""),w=Object(m.a)(g,2),v=w[0],j=w[1],O=Object(n.useState)(""),S=Object(m.a)(O,2),y=S[0],A=S[1],N=Object(n.useState)(!1),k=Object(m.a)(N,2),I=k[0],C=k[1],P=function(){j(""),A("")};return Object(n.useEffect)((function(){b.auth().onAuthStateChanged((function(e){e?(o(""),f(""),c(e)):c("")}))}),[]),s.a.createElement("div",{className:"Auth"},t?s.a.createElement(h,{handleLogout:function(){b.auth().signOut()}}):s.a.createElement(p,{email:u,setEmail:o,password:E,setPassword:f,handleLogin:function(){P(),b.auth().signInWithEmailAndPassword(u,E).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":j(e.message);break;case"auth/wrong-password":A(e.message)}}))},handleSignUp:function(){P(),b.auth().createUserWithEmailAndPassword(u,E).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":j(e.message);break;case"auth/weak-password":A(e.message)}}))},hasAccount:I,setHasAccount:C,emailError:v,passwordError:y}))},f=(t(34),function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(E,null))}}]),t}(n.Component));r.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b574a1b1.chunk.js.map