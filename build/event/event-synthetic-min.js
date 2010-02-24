YUI.add("event-synthetic",function(H){var E=H.Env.evt,D=E.dom_wrappers,B=E.dom_map,G=E.plugins,A=H.Node.DOM_EVENTS,F=H.Lang.isFunction;H.CustomEvent.prototype.getSubscriber=function(N,J){var L=this.getSubs(),K,I,O,M;for(K=0,I=L.length;K<I;++K){for(O in L[K]){if(L[K].hasOwnProperty(O)){M=L[K][O];if((!N||M.fn===N)&&(!J||M.context===J)){return M;}}}}return null;};function C(I){this._init(I);}C.prototype={_init:function(I){this.type=I.type;this.impl=I;this._publishConfig=I.publishConfig||{emitFacade:true};},on:function(N,O,J){var M=H.Array(arguments,0,true),T=A[N],I,K,R,S,P,Q,L;if(H.Lang.isString(J)){M[2]=H.Selector.query(J);if(M[2].length){J=M[2];}else{L=H.onAvailable(J,function(){H.mix(L,H.on.apply(H,M),true);});}}if(H.Lang.isArray(J)){Q=[];H.Array.each(J,function(U){M[2]=U;Q.push(H.on.apply(H,M));});L=new H.EventHandle(Q);}if(!L){R=F(T.impl.processArgs)?T.impl.processArgs(M):T._processArgs(M);M.shift();K=M[1]=H.one(J);I=K._yuievt?K._yuievt.events[T.type]:null;if(!I){I=K.publish(T.type,T._publishConfig);I.detach=function(V,U){return T.detach.call(H,N,V,U);};P=H.stamp(J);S="event:"+H.stamp(J)+T.type;H.mix(I,{el:J,key:S,domkey:P,fn:function(){},capture:false});B[P]=B[P]||{};D[S]=B[P][S]=I;}if(!I.getSubscriber(O,J)){L=I.on.apply(I,M);L.sub._extra=R;L.detach=function(){T.detach.call(H,N,this.sub.fn,this.sub.context);};if(F(T.impl.on)){T.impl.on.call(T.impl,K,L.sub,I);}}}return L;},detach:function(O,N,M){var K=H.Array(arguments,0,true),I=A[O],J=1,P,L;if(M instanceof H.Node){M=M._node;}else{if(M instanceof H.NodeList){M=M._nodes;}else{if(H.Lang.isString(M)){M=H.Selector.query(M);}else{if(M&&!H.Array.test(M)&&!M.tagName){M=null;}}}}if(M){if(H.Array.test(M)){H.Array.each(M,function(R,Q){K[2]=R;J+=H.detach.apply(H,K);});return J;}M=H.one(M);P=(M._yuievt||{events:{}}).events[I.type];L=P?P.getSubscriber(N,M):null;if(L){if(!N){while(L){K[1]=L.fn;J+=H.detach.apply(H,K);L=P.getSubscriber(N,M);}return J;}if(F(I.impl.detach)){I.impl.detach.call(I.impl,M,L,P);}P._delete(L);J=1;}}return J;},_processArgs:function(I){return null;}};H.SyntheticEvent=C;H.Event.define=function(J,I){var K=H.Lang.isObject(J)?J:H.mix(H.Object(I||{}),{type:J});if(!A[J]){G[J]=A[J]=new H.SyntheticEvent(K);}};},"@VERSION@",{requires:["node-base","event-custom"]});