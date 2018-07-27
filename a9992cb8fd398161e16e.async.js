webpackJsonp([18],{1701:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2524),e=n(i),l=a(2527),v=n(l),_=a(2530),p=n(_),c=a(2535),r=n(c),d=a(2540),o=n(d),h=a(2545),u=n(h),g=a(2548),C=n(g),m=a(2553),j=n(m),f=a(2556),b=n(f),y={cn:"# Spin 加载中\n\n  用于页面和区块的加载中状态。\n\n  ## 何时使用\n\n  页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。\n            ## 代码演示",us:"# Spin\n\n  A spinner for displaying loading state of a page or a section.\n\n  # When To Use\n\n  When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.\n  ## Examples "};t.default={category:"Components",type:"Feedback",title:"Spin",subtitle:"加载中",render:function(){var s=arguments[0];return s("div",[s("md",{attrs:{cn:y.cn,us:y.us}}),s(v.default),s(u.default),s(r.default),s(o.default),s(C.default),s(p.default),s(e.default),s("api",[s("template",{slot:"cn"},[s(j.default)]),s(b.default)])])}}},1702:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{spinning:!1,delayTime:500}},methods:{changeSpinning:function(){this.spinning=!this.spinning}}}},1703:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{spinning:!1}},methods:{changeSpinning:function(){this.spinning=!this.spinning}}}},2524:function(s,t,a){s.exports=a(2525)},2525:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2526),i=a(67),e=i(null,n.a,!1,null,null,null);t.default=e.exports},2526:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-spin>\n      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin=""/>\n    </a-spin>\n  </div>\n',script:null,style:null,us:"\n#### Custom spinning indicator\nUse custom loading indicator.\n",cn:"\n#### 自定义指示符\n使用自定义指示符。\n",sourceCode:'<template>\n  <div>\n    <a-spin>\n      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />\n    </a-spin>\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-spin",[a("a-icon",{staticStyle:{"font-size":"24px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"})],1)],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"自定义指示符"}},[s._v("自定义指示符 "),a("a",{staticClass:"anchor",attrs:{href:"#自定义指示符","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("使用自定义指示符。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Custom-spinning-indicator"}},[s._v("Custom spinning indicator "),a("a",{staticClass:"anchor",attrs:{href:"#Custom-spinning-indicator","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Use custom loading indicator.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-icon")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"indicator"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"loading"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"font-size: 24px"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("spin")]),s._v(" />")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)},i=[],e={render:n,staticRenderFns:i};t.a=e},2527:function(s,t,a){s.exports=a(2528)},2528:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2529),i=a(67),e=i(null,n.a,!1,null,null,null);t.default=e.exports},2529:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:"\n  <div>\n    <a-spin/>\n  </div>\n",script:null,style:null,us:"\n#### basic Usage\nA simple loading status.\n",cn:"\n#### 基本用法\n一个简单的 loading 状态。\n",sourceCode:"<template>\n  <div>\n    <a-spin />\n  </div>\n</template>\n"}}},[a("template",{slot:"component"},[a("div",[a("a-spin")],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"基本用法"}},[s._v("基本用法 "),a("a",{staticClass:"anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("一个简单的 loading 状态。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"basic-Usage"}},[s._v("basic Usage "),a("a",{staticClass:"anchor",attrs:{href:"#basic-Usage","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("A simple loading status.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" />")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)},i=[],e={render:n,staticRenderFns:i};t.a=e},2530:function(s,t,a){s.exports=a(2531)},2531:function(s,t,a){"use strict";function n(s){a(2532)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1702),e=a.n(i);for(var l in i)"default"!==l&&function(s){a.d(t,s,function(){return i[s]})}(l);var v=a(2534),_=a(67),p=n,c=_(e.a,v.a,!1,p,"data-v-5074c216",null);t.default=c.exports},2532:function(s,t,a){var n=a(2533);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(580)("43e90a05",n,!0,{})},2533:function(s,t,a){t=s.exports=a(579)(!1),t.push([s.i,".spin-content[data-v-5074c216]{border:1px solid #91d5ff;background-color:#e6f7ff;padding:30px}",""])},2534:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-spin :spinning="spinning" :delay="delayTime">\n      <div class="spin-content">\n        可以点击‘切换’按钮，延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。\n      </div>\n    </a-spin>\n    Loading state：<a-switch v-model="spinning"/>\n  </div>\n',script:"\n  export default {\n    data () {\n      return {\n        spinning: false,\n        delayTime: 500,\n      }\n    },\n    methods: {\n      changeSpinning(){\n        this.spinning = !this.spinning\n      }\n    },\n  }\n",style:null,us:"\n#### delay\nSpecifies a delay for loading state. If `spinning` ends during delay, loading status won't appear.\n",cn:"\n#### 延迟\n延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。\n",sourceCode:'<style scoped>\n  .spin-content{\n    border: 1px solid #91d5ff;\n    background-color: #e6f7ff;\n    padding: 30px;\n  }\n</style>\n<template>\n  <div>\n    <a-spin :spinning="spinning" :delay="delayTime">\n      <div class="spin-content">\n        可以点击‘切换’按钮，延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。\n      </div>\n    </a-spin>\n    Loading state：<a-switch v-model="spinning"></a-switch>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        spinning: false,\n        delayTime: 500,\n      }\n    },\n    methods: {\n      changeSpinning(){\n        this.spinning = !this.spinning\n      }\n    },\n  }\n<\/script>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-spin",{attrs:{spinning:s.spinning,delay:s.delayTime}},[a("div",{staticClass:"spin-content"},[s._v("\n        可以点击‘切换’按钮，延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。\n      ")])]),s._v("\n    Loading state："),a("a-switch",{model:{value:s.spinning,callback:function(t){s.spinning=t},expression:"spinning"}})],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"延迟"}},[s._v("延迟 "),a("a",{staticClass:"anchor",attrs:{href:"#延迟","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("延迟显示 loading 效果。当 spinning 状态在 "),a("code",[s._v("delay")]),s._v(" 时间内结束，则不显示 loading 状态。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"delay"}},[s._v("delay "),a("a",{staticClass:"anchor",attrs:{href:"#delay","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Specifies a delay for loading state. If "),a("code",[s._v("spinning")]),s._v(" ends during delay, loading status won't appear.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scoped")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".spin-content")]),s._v("{\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(" solid "),a("span",{staticClass:"hljs-number"},[s._v("#91d5ff")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#e6f7ff")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("30px")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":spinning")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"spinning"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":delay")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"delayTime"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"spin-content"')]),s._v(">")]),s._v("\n        可以点击‘切换’按钮，延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(">")]),s._v("\n    Loading state："),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-switch")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"spinning"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-switch")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("spinning")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("delayTime")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("500")]),s._v(",\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      changeSpinning(){\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".spinning = !"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".spinning\n      }\n    },\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)},i=[],e={render:n,staticRenderFns:i};t.a=e},2535:function(s,t,a){s.exports=a(2536)},2536:function(s,t,a){"use strict";function n(s){a(2537)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2539),e=a(67),l=n,v=e(null,i.a,!1,l,"data-v-9032bae0",null);t.default=v.exports},2537:function(s,t,a){var n=a(2538);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(580)("7ef17ad1",n,!0,{})},2538:function(s,t,a){t=s.exports=a(579)(!1),t.push([s.i,".example[data-v-9032bae0]{text-align:center;background:rgba(0,0,0,.05);border-radius:4px;margin-bottom:20px;padding:30px 50px;margin:20px 0}",""])},2539:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div class="example">\n    <a-spin/>\n  </div>\n',script:null,style:null,us:"\n#### Inside a container\nSpin in a container.\n",cn:"\n#### 容器\n放入一个容器中。\n",sourceCode:'<style scoped>\n  .example {\n    text-align: center;\n    background: rgba(0,0,0,0.05);\n    border-radius: 4px;\n    margin-bottom: 20px;\n    padding: 30px 50px;\n    margin: 20px 0;\n  }\n</style>\n<template>\n  <div class="example">\n    <a-spin />\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",{staticClass:"example"},[a("a-spin")],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"容器"}},[s._v("容器 "),a("a",{staticClass:"anchor",attrs:{href:"#容器","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("放入一个容器中。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Inside-a-container"}},[s._v("Inside a container "),a("a",{staticClass:"anchor",attrs:{href:"#Inside-a-container","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Spin in a container.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scoped")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".example")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("text-align")]),s._v(": center;\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),a("span",{staticClass:"hljs-built_in"},[s._v("rgba")]),s._v("(0,0,0,0.05);\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("border-radius")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("4px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin-bottom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("30px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("50px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"example"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" />")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)},i=[],e={render:n,staticRenderFns:i};t.a=e},2540:function(s,t,a){s.exports=a(2541)},2541:function(s,t,a){"use strict";function n(s){a(2542)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1703),e=a.n(i);for(var l in i)"default"!==l&&function(s){a.d(t,s,function(){return i[s]})}(l);var v=a(2544),_=a(67),p=n,c=_(e.a,v.a,!1,p,"data-v-28e6c49a",null);t.default=c.exports},2542:function(s,t,a){var n=a(2543);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(580)("104924a1",n,!0,{})},2543:function(s,t,a){t=s.exports=a(579)(!1),t.push([s.i,".spin-content[data-v-28e6c49a]{border:1px solid #91d5ff;background-color:#e6f7ff;padding:30px}",""])},2544:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-spin :spinning="spinning">\n      <div class="spin-content">\n        可以点击‘切换’按钮，控制本区域的spin展示。\n      </div>\n    </a-spin>\n    Loading state：<a-switch v-model="spinning"/>\n  </div>\n',script:"\n  export default {\n    data () {\n      return {\n        spinning: false\n      }\n    },\n    methods: {\n      changeSpinning(){\n        this.spinning = !this.spinning\n      }\n    },\n  }\n",style:null,us:"\n#### Embedded mode\nEmbedding content into `Spin` will alter it into loading state.\n",cn:"\n#### 卡片加载中\n可以直接把内容内嵌到 `Spin` 中，将现有容器变为加载状态。\n",sourceCode:'<style scoped>\n  .spin-content{\n    border: 1px solid #91d5ff;\n    background-color: #e6f7ff;\n    padding: 30px;\n  }\n</style>\n<template>\n  <div>\n    <a-spin :spinning="spinning">\n      <div class="spin-content">\n        可以点击‘切换’按钮，控制本区域的spin展示。\n      </div>\n    </a-spin>\n    Loading state：<a-switch v-model="spinning"></a-switch>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        spinning: false\n      }\n    },\n    methods: {\n      changeSpinning(){\n        this.spinning = !this.spinning\n      }\n    },\n  }\n<\/script>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-spin",{attrs:{spinning:s.spinning}},[a("div",{staticClass:"spin-content"},[s._v("\n        可以点击‘切换’按钮，控制本区域的spin展示。\n      ")])]),s._v("\n    Loading state："),a("a-switch",{model:{value:s.spinning,callback:function(t){s.spinning=t},expression:"spinning"}})],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"卡片加载中"}},[s._v("卡片加载中 "),a("a",{staticClass:"anchor",attrs:{href:"#卡片加载中","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("可以直接把内容内嵌到 "),a("code",[s._v("Spin")]),s._v(" 中，将现有容器变为加载状态。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Embedded-mode"}},[s._v("Embedded mode "),a("a",{staticClass:"anchor",attrs:{href:"#Embedded-mode","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Embedding content into "),a("code",[s._v("Spin")]),s._v(" will alter it into loading state.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scoped")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".spin-content")]),s._v("{\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(" solid "),a("span",{staticClass:"hljs-number"},[s._v("#91d5ff")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#e6f7ff")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("30px")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":spinning")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"spinning"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"spin-content"')]),s._v(">")]),s._v("\n        可以点击‘切换’按钮，控制本区域的spin展示。\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(">")]),s._v("\n    Loading state："),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-switch")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"spinning"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-switch")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("spinning")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      changeSpinning(){\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".spinning = !"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".spinning\n      }\n    },\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)},i=[],e={render:n,staticRenderFns:i};t.a=e},2545:function(s,t,a){s.exports=a(2546)},2546:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2547),i=a(67),e=i(null,n.a,!1,null,null,null);t.default=e.exports},2547:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-spin size="small"/>\n    <a-spin/>\n    <a-spin size="large"/>\n  </div>\n',script:null,style:null,us:"\n#### Size\nA small `Spin` use in loading text, default `Spin` use in loading card-level block, and large `Spin` use in loading **page**.\n",cn:"\n#### 各种大小\n小的用于文本加载，默认用于卡片容器级加载，大的用于**页面级**加载。\n",sourceCode:'<template>\n  <div>\n    <a-spin size="small" />\n    <a-spin />\n    <a-spin size="large" />\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-spin",{attrs:{size:"small"}}),s._v(" "),a("a-spin"),s._v(" "),a("a-spin",{attrs:{size:"large"}})],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"各种大小"}},[s._v("各种大小 "),a("a",{staticClass:"anchor",attrs:{href:"#各种大小","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("小的用于文本加载，默认用于卡片容器级加载，大的用于"),a("strong",[s._v("页面级")]),s._v("加载。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Size"}},[s._v("Size "),a("a",{staticClass:"anchor",attrs:{href:"#Size","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("A small "),a("code",[s._v("Spin")]),s._v(" use in loading text, default "),a("code",[s._v("Spin")]),s._v(" use in loading card-level block, and large "),a("code",[s._v("Spin")]),s._v(" use in loading "),a("strong",[s._v("page")]),s._v(".")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v(" />")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" />")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"large"')]),s._v(" />")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)},i=[],e={render:n,staticRenderFns:i};t.a=e},2548:function(s,t,a){s.exports=a(2549)},2549:function(s,t,a){"use strict";function n(s){a(2550)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2552),e=a(67),l=n,v=e(null,i.a,!1,l,"data-v-05009f73",null);t.default=v.exports},2550:function(s,t,a){var n=a(2551);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);a(580)("5a1aea63",n,!0,{})},2551:function(s,t,a){t=s.exports=a(579)(!1),t.push([s.i,".spin-content[data-v-05009f73]{border:1px solid #91d5ff;background-color:#e6f7ff;padding:30px}",""])},2552:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-spin tip="Loading...">\n      <div class="spin-content">\n        我的描述文案是自定义的。。。\n      </div>\n    </a-spin>\n  </div>\n',script:null,style:null,us:"\n#### Customized description\nCustomized description content.\n",cn:"\n#### 自定义描述文案\n自定义描述文案。\n",sourceCode:'<style scoped>\n  .spin-content{\n    border: 1px solid #91d5ff;\n    background-color: #e6f7ff;\n    padding: 30px;\n  }\n</style>\n<template>\n  <div>\n    <a-spin tip="Loading...">\n      <div class="spin-content">\n        我的描述文案是自定义的。。。\n      </div>\n    </a-spin>\n  </div>\n</template>\n'}}},[a("template",{slot:"component"},[a("div",[a("a-spin",{attrs:{tip:"Loading..."}},[a("div",{staticClass:"spin-content"},[s._v("\n        我的描述文案是自定义的。。。\n      ")])])],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"自定义描述文案"}},[s._v("自定义描述文案 "),a("a",{staticClass:"anchor",attrs:{href:"#自定义描述文案","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("自定义描述文案。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Customized-description"}},[s._v("Customized description "),a("a",{staticClass:"anchor",attrs:{href:"#Customized-description","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Customized description content.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scoped")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".spin-content")]),s._v("{\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("border")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(" solid "),a("span",{staticClass:"hljs-number"},[s._v("#91d5ff")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#e6f7ff")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("30px")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("tip")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"Loading..."')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"spin-content"')]),s._v(">")]),s._v("\n        我的描述文案是自定义的。。。\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-spin")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2)]],2)},i=[],e={render:n,staticRenderFns:i};t.a=e},2553:function(s,t,a){s.exports=a(2554)},2554:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2555),i=a(67),e=i(null,n.a,!1,null,null,null);t.default=e.exports},2555:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("delay")]),s._v(" "),a("td",[s._v("延迟显示加载效果的时间（防止闪烁）")]),s._v(" "),a("td",[s._v("number (毫秒)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("indicator")]),s._v(" "),a("td",[s._v("加载指示符")]),s._v(" "),a("td",[s._v("vNode | slot")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("size")]),s._v(" "),a("td",[s._v("组件大小，可选值为 "),a("code",{pre:!0},[s._v("small")]),s._v(" "),a("code",{pre:!0},[s._v("default")]),s._v(" "),a("code",{pre:!0},[s._v("large")])]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("'default'")])]),s._v(" "),a("tr",[a("td",[s._v("spinning")]),s._v(" "),a("td",[s._v("是否旋转")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("tip")]),s._v(" "),a("td",[s._v("当作为包裹元素时，可以自定义描述文案")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("wrapperClassName")]),s._v(" "),a("td",[s._v("包装器的类属性")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")])])])])])}],e={render:n,staticRenderFns:i};t.a=e},2556:function(s,t,a){s.exports=a(2557)},2557:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2558),i=a(67),e=i(null,n.a,!1,null,null,null);t.default=e.exports},2558:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Property")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default Value")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("delay")]),s._v(" "),a("td",[s._v("specifies a delay in milliseconds for loading state (prevent flush)")]),s._v(" "),a("td",[s._v("number (milliseconds)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("indicator")]),s._v(" "),a("td",[s._v("vue node of the spinning indicator")]),s._v(" "),a("td",[s._v("vNode |slot")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("size")]),s._v(" "),a("td",[s._v("size of Spin, options: "),a("code",{pre:!0},[s._v("small")]),s._v(", "),a("code",{pre:!0},[s._v("default")]),s._v(" and "),a("code",{pre:!0},[s._v("large")])]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("default")])])]),s._v(" "),a("tr",[a("td",[s._v("spinning")]),s._v(" "),a("td",[s._v("whether Spin is spinning")]),s._v(" "),a("td",[s._v("boolean")]),s._v(" "),a("td",[s._v("true")])]),s._v(" "),a("tr",[a("td",[s._v("tip")]),s._v(" "),a("td",[s._v("customize description content when Spin has children")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("wrapperClassName")]),s._v(" "),a("td",[s._v("className of wrapper when Spin has children")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[s._v("-")])])])])])}],e={render:n,staticRenderFns:i};t.a=e},608:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1701),i=a.n(n);for(var e in n)"default"!==e&&function(s){a.d(t,s,function(){return n[s]})}(e);var l=a(67),v=l(i.a,null,!1,null,null,null);t.default=v.exports}});