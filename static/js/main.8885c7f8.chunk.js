(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{18:function(e,a,t){e.exports=t(35)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(12),s=t.n(r),l=t(13),i=t(14),u=t(17),o=t(16),m=t(7),d=t(15),p=t.n(d).a.initializeApp({apiKey:"AIzaSyCRRJfbHjQ67e7l0iYfD_XzxMR-P7WJ6NM",authDomain:"my-website-v2-e6874.firebaseapp.com",databaseURL:"https://my-website-v2-e6874.firebaseio.com",projectId:"my-website-v2-e6874",storageBucket:"my-website-v2-e6874.appspot.com",messagingSenderId:"941409413931",appId:"1:941409413931:web:cdbbafbd37058c91d7736e"}),b=(t(33),function(e){var a=e.email,t=e.setEmail,n=e.password,r=e.setPassword,s=e.handleLogin,l=e.handleSignUp,i=e.hasAccount,u=e.setHasAccount,o=e.emailError,m=e.passwordError;return c.a.createElement("div",{className:"base-container"},c.a.createElement("h2",null,"CMS Sign In"),c.a.createElement("form",null,c.a.createElement("div",{className:"inputField"},c.a.createElement("input",{type:"=text",autoFocus:!0,required:!0,value:a,onChange:function(e){return t(e.target.value)}}),c.a.createElement("label",null,"Email"),c.a.createElement("p",{className:"errorMsg"},o)),c.a.createElement("div",{className:"inputField"},c.a.createElement("input",{type:"password",required:!0,value:n,onChange:function(e){return r(e.target.value)}}),c.a.createElement("label",null,"Password"),c.a.createElement("p",{className:"errorMsg"},m)),c.a.createElement("div",{className:"signInButton"},i?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:s},"Sign In"),c.a.createElement("p",null,"Don't have an account? ",c.a.createElement("span",{onClick:function(){return u(!i)}},"Sign Up"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:l},"Sign Up"),c.a.createElement("p",null,"Have an account? ",c.a.createElement("span",{onClick:function(){return u(!i)}},"Sign In"))),c.a.createElement("button",{onClick:s},"Sign In"))))}),h=function(e){var a=e.handleLogout;return c.a.createElement("section",{className:"Dashboard"},c.a.createElement("h2",null,"Welcome, you have signed in!"),c.a.createElement("button",{onClick:a},"Sign Out"))},E=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(""),l=Object(m.a)(s,2),i=l[0],u=l[1],o=Object(n.useState)(""),d=Object(m.a)(o,2),E=d[0],g=d[1],f=Object(n.useState)(""),v=Object(m.a)(f,2),w=v[0],j=v[1],O=Object(n.useState)(""),S=Object(m.a)(O,2),k=S[0],y=S[1],C=Object(n.useState)(!1),A=Object(m.a)(C,2),I=A[0],N=A[1],P=function(){j(""),y("")};return Object(n.useEffect)((function(){p.auth().onAuthStateChanged((function(e){e?(u(""),g(""),r(e)):r("")}))}),[]),c.a.createElement("div",{className:"Auth"},t?c.a.createElement(h,{handleLogout:function(){p.auth().signOut()}}):c.a.createElement(b,{email:i,setEmail:u,password:E,setPassword:g,handleLogin:function(){P(),p.auth().signInWithEmailAndPassword(i,E).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":j(e.message);break;case"auth/wrong-password":y(e.message)}}))},handleSignUp:function(){P(),p.auth().createUserWithEmailAndPassword(i,E).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":j(e.message);break;case"auth/weak-password":y(e.message)}}))},hasAccount:I,setHasAccount:N,emailError:w,passwordError:k}))},g=(t(34),function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null))}}]),t}(n.Component));s.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8885c7f8.chunk.js.map