(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(a),u=r,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return a?n.a.createElement(d,o(o({ref:t},b),{},{components:a})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),c=(a(0),a(119)),i={id:"camera.cameradeviceprops",title:"Interface: CameraDeviceProps",sidebar_label:"CameraDeviceProps",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/camera.cameradeviceprops",id:"api/interfaces/camera.cameradeviceprops",isDocsHomePage:!1,title:"Interface: CameraDeviceProps",description:"Interface: CameraDeviceProps",source:"@site/docs/api/interfaces/camera.cameradeviceprops.md",slug:"/api/interfaces/camera.cameradeviceprops",permalink:"/react-native-vision-camera/docs/api/interfaces/camera.cameradeviceprops",editUrl:null,version:"current",sidebar_label:"CameraDeviceProps",sidebar:"someSidebar",previous:{title:"Class: CameraRuntimeError",permalink:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},next:{title:"Interface: CameraDynamicProps",permalink:"/react-native-vision-camera/docs/api/interfaces/camera.cameradynamicprops"}},p=[{value:"Properties",id:"properties",children:[{value:"device",id:"device",children:[]},{value:"enableDepthData",id:"enabledepthdata",children:[]},{value:"enableHighResolutionCapture",id:"enablehighresolutioncapture",children:[]},{value:"enablePortraitEffectsMatteDelivery",id:"enableportraiteffectsmattedelivery",children:[]}]}],b={toc:p};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-cameradeviceprops"},"Interface: CameraDeviceProps"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/camera"},"Camera"),".CameraDeviceProps"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"device"},"device"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"device"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},Object(c.b)("em",{parentName:"a"},"CameraDevice"))),Object(c.b)("p",null,"The Camera Device to use"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/981c5fa/src/Camera.tsx#L78"},"Camera.tsx:78")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"enabledepthdata"},"enableDepthData"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"enableDepthData"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Also captures data from depth-perception sensors. (e.g. disparity maps)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/981c5fa/src/Camera.tsx#L84"},"Camera.tsx:84")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"enablehighresolutioncapture"},"enableHighResolutionCapture"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"enableHighResolutionCapture"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Indicates whether the photo render pipeline should be configured to deliver high resolution still images"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/981c5fa/src/Camera.tsx#L99"},"Camera.tsx:99")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"enableportraiteffectsmattedelivery"},"enablePortraitEffectsMatteDelivery"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"enablePortraitEffectsMatteDelivery"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"A boolean specifying whether the photo render pipeline is prepared for portrait effects matte delivery."),Object(c.b)("p",null,"When enabling this, you must also set ",Object(c.b)("inlineCode",{parentName:"p"},"enableDepthData")," to ",Object(c.b)("inlineCode",{parentName:"p"},"true"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 12.0+"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/981c5fa/src/Camera.tsx#L93"},"Camera.tsx:93")))}l.isMDXComponent=!0}}]);