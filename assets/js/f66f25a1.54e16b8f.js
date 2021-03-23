(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(3),r=n(7),a=(n(0),n(124)),o=n(125),s={id:"setup",title:"Getting Started",sidebar_label:"Getting Started",slug:"/guides"},c={unversionedId:"guides/setup",id:"guides/setup",isDocsHomePage:!1,title:"Getting Started",description:"Installing the library",source:"@site/docs/guides/SETUP.mdx",slug:"/guides",permalink:"/react-native-vision-camera/docs/guides",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/guides/SETUP.mdx",version:"current",sidebar_label:"Getting Started",sidebar:"visionSidebar",next:{title:"Camera Devices",permalink:"/react-native-vision-camera/docs/guides/devices"}},l=[{value:"Installing the library",id:"installing-the-library",children:[]},{value:"Updating manifests",id:"updating-manifests",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"Getting Permissions",id:"getting-permissions",children:[]},{value:"Requesting Permissions",id:"requesting-permissions",children:[]}]}],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",null,Object(a.b)("img",{align:"right",width:"283",src:Object(o.a)("img/example_intro.png")})),Object(a.b)("h2",{id:"installing-the-library"},"Installing the library"),Object(a.b)("p",null,"Install react-native-vision-camera through npm:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"npm i react-native-vision-camera\nnpx pod-install\n")),Object(a.b)("h2",{id:"updating-manifests"},"Updating manifests"),Object(a.b)("p",null,"To use a Camera or Microphone you must first specify that your app requires camera and microphone permissions."),Object(a.b)("h3",{id:"ios"},"iOS"),Object(a.b)("p",null,"Open your project's ",Object(a.b)("inlineCode",{parentName:"p"},"Info.plist")," and add the following lines inside the outermost ",Object(a.b)("inlineCode",{parentName:"p"},"<dict>")," tag:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) needs access to your Camera to record videos and capture photos.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>$(PRODUCT_NAME) needs access to your Microphone to record videos with audio.</string>\n")),Object(a.b)("h4",{id:"compatibility"},"Compatibility"),Object(a.b)("p",null,"VisionCamera is written in Swift. If your project is written in Objective-C, you have to create a Bridging Header first:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open your project (",Object(a.b)("inlineCode",{parentName:"li"},".xcworkspace"),") in Xcode"),Object(a.b)("li",{parentName:"ol"},"Press ",Object(a.b)("strong",{parentName:"li"},"File")," > ",Object(a.b)("strong",{parentName:"li"},"New")," > ",Object(a.b)("strong",{parentName:"li"},"File")," (",Object(a.b)("kbd",null,"\u2318"),"+",Object(a.b)("kbd",null,"N"),")"),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("strong",{parentName:"li"},"Swift File")," and press ",Object(a.b)("strong",{parentName:"li"},"Next")),Object(a.b)("li",{parentName:"ol"},"Choose whatever name you want, e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"File.swift")," and press ",Object(a.b)("strong",{parentName:"li"},"Create")),Object(a.b)("li",{parentName:"ol"},"Press ",Object(a.b)("strong",{parentName:"li"},"Create Bridging Header")," when promted.")),Object(a.b)("p",null,"Also, make sure you're using Swift 5.2 or above:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open ",Object(a.b)("inlineCode",{parentName:"li"},"project.pbxproj")," in a Text Editor"),Object(a.b)("li",{parentName:"ol"},"If the ",Object(a.b)("inlineCode",{parentName:"li"},"LIBRARY_SEARCH_PATH")," value is set, make sure there is no explicit reference to Swift-5.0. If there is, remove it. See ",Object(a.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/66281846/1123156"},"this StackOverflow answer"),"."),Object(a.b)("li",{parentName:"ol"},"If the ",Object(a.b)("inlineCode",{parentName:"li"},"SWIFT_VERSION")," value is set, make sure it is set to ",Object(a.b)("inlineCode",{parentName:"li"},"5.2")," or higher.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"See ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/troubleshooting"},"Troubleshooting")," if you're having problems")),Object(a.b)("h3",{id:"android"},"Android"),Object(a.b)("p",null,"Open your project's ",Object(a.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," and add the following lines inside the ",Object(a.b)("inlineCode",{parentName:"p"},"<manifest>")," tag:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n')),Object(a.b)("h4",{id:"compatibility-1"},"Compatibility"),Object(a.b)("p",null,"VisionCamera requires a minimum Android SDK version of ",Object(a.b)("strong",{parentName:"p"},"21 or higher"),", and a target SDK version of ",Object(a.b)("strong",{parentName:"p"},"30 or higher"),". See ",Object(a.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/main/example/android/build.gradle#L6-L9"},"the example app's ",Object(a.b)("inlineCode",{parentName:"a"},"build.gradle"))," for reference."),Object(a.b)("p",null,"Open your project's ",Object(a.b)("inlineCode",{parentName:"p"},"build.gradle"),", and set the following values:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'buildToolsVersion = "30.0.0"\nminSdkVersion = 21\ncompileSdkVersion = 30\ntargetSdkVersion = 30\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"See ",Object(a.b)("a",{parentName:"p",href:"/docs/guides/troubleshooting"},"Troubleshooting")," if you're having problems")),Object(a.b)("h2",{id:"permissions"},"Permissions"),Object(a.b)("p",null,"VisionCamera also provides functions to easily get and request Microphone and Camera permissions."),Object(a.b)("h3",{id:"getting-permissions"},"Getting Permissions"),Object(a.b)("p",null,"Simply use the ",Object(a.b)("strong",{parentName:"p"},"get")," functions to find out if a user has granted or denied permission before:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const cameraPermission = await Camera.getCameraPermissionStatus()\nconst microphonePermission = await Camera.getMicrophonePermissionStatus()\n")),Object(a.b)("p",null,"A permission status can have the following values:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"authorized"),": Your app is authorized to use said permission. Continue with mounting the ",Object(a.b)("inlineCode",{parentName:"li"},"<Camera>")," view."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"not-determined"),": Your app has not yet requested permission from the user. ",Object(a.b)("a",{parentName:"li",href:"#requesting-permissions"},"Continue by calling the ",Object(a.b)("strong",{parentName:"a"},"request")," functions.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"denied"),": Your app has already requested permissions from the user, but was explicitly denied. You cannot use the ",Object(a.b)("strong",{parentName:"li"},"request")," functions again, but you can use the ",Object(a.b)("a",{parentName:"li",href:"https://reactnative.dev/docs/linking#opensettings"},Object(a.b)("inlineCode",{parentName:"a"},"Linking")," API")," to redirect the user to the Settings App where he can manually grant the permission."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"restricted"),": (iOS only) Your app cannot use the Camera or Microphone because that functionality has been restricted, possibly due to active restrictions such as parental controls being in place.")),Object(a.b)("h3",{id:"requesting-permissions"},"Requesting Permissions"),Object(a.b)("p",null,"Use the ",Object(a.b)("strong",{parentName:"p"},"request")," functions to prompt the user to give your app permission to use the Camera or Microphone."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Note: You can only use ",Object(a.b)("strong",{parentName:"p"},"request")," functions if the current permission status is ",Object(a.b)("inlineCode",{parentName:"p"},"not-determined"),"."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const newCameraPermission = await Camera.requestCameraPermission()\nconst newMicrophonePermission = await Camera.requestMicrophonePermission()\n")),Object(a.b)("p",null,"The permission request status can have the following values:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"authorized"),": Your app is authorized to use said permission. Continue with mounting the ",Object(a.b)("inlineCode",{parentName:"li"},"<Camera>")," view."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"denied"),": Your app has already requested permissions from the user, but was explicitly denied. You cannot use the ",Object(a.b)("strong",{parentName:"li"},"request")," functions again, but you can use the ",Object(a.b)("a",{parentName:"li",href:"https://reactnative.dev/docs/linking#opensettings"},Object(a.b)("inlineCode",{parentName:"a"},"Linking")," API")," to redirect the user to the Settings App where he can manually grant the permission.")),Object(a.b)("br",null),Object(a.b)("h4",{id:"-hooray-youre-ready-to-learn-about-camera-devices"},"\ud83c\udf89 Hooray! You're ready to learn about ",Object(a.b)("a",{parentName:"h4",href:"/docs/guides/devices"},"Camera Devices"),"!"))}p.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=i,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||a;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var i=n(16),r=n(127);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,o=a.forcePrependBaseUrl,s=void 0!==o&&o,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+b:b}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},127:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))}}]);