"use strict";var precacheConfig=[["/0e03a10728f0919288c5a06b82fd82a9.jpg","0e03a10728f0919288c5a06b82fd82a9"],["/4505bafd0f626c80687e154efad2adde.png","4505bafd0f626c80687e154efad2adde"],["/6d8b990a84abc61e5005e44e88534c81.png","6d8b990a84abc61e5005e44e88534c81"],["/81d2213a8973b0923539248afb3eebee.jpg","81d2213a8973b0923539248afb3eebee"],["/9466613068da42d12b02eda3755b75e7.png","9466613068da42d12b02eda3755b75e7"],["/assets/icon.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/bundle.6d82d.js","969cedd1441f1827959f8d58250c710e"],["/cf1bbc7267d3a029cfb34de0b195769b.png","cf1bbc7267d3a029cfb34de0b195769b"],["/d7ea0ef080bf3093f5de483bab4e62af.png","d7ea0ef080bf3093f5de483bab4e62af"],["/e459caf20f946c49e18a2d5d894b697e.jpg","e459caf20f946c49e18a2d5d894b697e"],["/e7abb733417793b69f21d05c1f273800.png","e7abb733417793b69f21d05c1f273800"],["/favicon.ico","94eae66bebbd6bbfe48a669f245048ac"],["/index.html","9f1c1e979a1c411ea62ed9414a36b520"],["/manifest.json","310a916537fc6f66deb88310b13a2759"],["/style.6b611.css","0edb66ccd7a24720e2853a9d141c52bd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});