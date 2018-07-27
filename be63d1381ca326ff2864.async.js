webpackJsonp([41],{1696:function(s,t,a){"use strict";function e(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2506),i=e(n),r=a(2509),l=e(r),o=a(2512),c=e(o),v=a(2515),_=e(v),d=a(2518),u=e(d),p=a(2521),h=e(p),m={cn:"# 全局提示\n全局展示操作反馈信息。\n## 何时使用\n- 可提供成功、警告和错误等反馈信息。\n- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。\n\n## 代码演示",us:"# Message\nDisplay global messages as feedback in response to user operations.\n## When To Use\n- To provide feedback such as success, warning, error etc.\n- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.\n## Examples "};t.default={category:"Components",subtitle:"全局提示",type:"Feedback",noinstant:!0,title:"Message",render:function(){var s=arguments[0];return s("div",[s("md",{attrs:{cn:m.cn,us:m.us}}),s(l.default),s(i.default),s(c.default),s(_.default),s("api",[s(u.default,{slot:"cn"}),s(h.default)])])}}},1697:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{success:function(){this.$message.success("This is a prompt message for success, and it will disappear in 10 seconds",10)}}}},1698:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{info:function(){this.$message.info("This is a normal message")}}}},1699:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{success:function(){var s=this.$message.loading("Action in progress..",0);setTimeout(s,2500)}}}},1700:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{success:function(){this.$message.success("This is a message of success")},error:function(){this.$message.error("This is a message of error")},warning:function(){this.$message.warning("This is message of warning")}}}},2506:function(s,t,a){s.exports=a(2507)},2507:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(1697),n=a.n(e);for(var i in e)"default"!==i&&function(s){a.d(t,s,function(){return e[s]})}(i);var r=a(2508),l=a(67),o=l(n.a,r.a,!1,null,null,null);t.default=o.exports},2508:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-button @click="success">Customized display duration</a-button>\n',script:"\nexport default {\n  methods: {\n    success () {\n      this.$message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);\n    },\n  }\n}\n",style:null,us:"\n#### Customize duration\nCustomize message display duration from default `3s` to `10s`.\n",cn:"\n#### 修改延时\n自定义时长 `10s`，默认时长为 `3s`。\n",sourceCode:"<template>\n  <a-button @click=\"success\">Customized display duration</a-button>\n</template>\n<script>\nexport default {\n  methods: {\n    success () {\n      this.$message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);\n    },\n  }\n}\n<\/script>\n"}}},[a("template",{slot:"component"},[a("a-button",{on:{click:s.success}},[s._v("Customized display duration")])],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"修改延时"}},[s._v("修改延时 "),a("a",{staticClass:"anchor",attrs:{href:"#修改延时","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("自定义时长 "),a("code",[s._v("10s")]),s._v("，默认时长为 "),a("code",[s._v("3s")]),s._v("。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Customize-duration"}},[s._v("Customize duration "),a("a",{staticClass:"anchor",attrs:{href:"#Customize-duration","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Customize message display duration from default "),a("code",[s._v("3s")]),s._v(" to "),a("code",[s._v("10s")]),s._v(".")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Customized display duration"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    success () {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.success("),a("span",{staticClass:"hljs-string"},[s._v("'This is a prompt message for success, and it will disappear in 10 seconds'")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v(");\n    },\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)},n=[],i={render:e,staticRenderFns:n};t.a=i},2509:function(s,t,a){s.exports=a(2510)},2510:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(1698),n=a.n(e);for(var i in e)"default"!==i&&function(s){a.d(t,s,function(){return e[s]})}(i);var r=a(2511),l=a(67),o=l(n.a,r.a,!1,null,null,null);t.default=o.exports},2511:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-button type="primary" @click="info">Display normal message</a-button>\n',script:"\n  export default {\n    methods: {\n      info () {\n        this.$message.info('This is a normal message');\n      },\n    }\n  }\n",style:null,us:"\n#### Normal prompt\nNormal messages as feedbacks.\n",cn:"\n#### 普通提示\n信息提醒反馈。\n",sourceCode:'<template>\n  <a-button type="primary" @click="info">Display normal message</a-button>\n</template>\n<script>\n  export default {\n    methods: {\n      info () {\n        this.$message.info(\'This is a normal message\');\n      },\n    }\n  }\n<\/script>\n'}}},[a("template",{slot:"component"},[a("a-button",{attrs:{type:"primary"},on:{click:s.info}},[s._v("Display normal message")])],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"普通提示"}},[s._v("普通提示 "),a("a",{staticClass:"anchor",attrs:{href:"#普通提示","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("信息提醒反馈。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Normal-prompt"}},[s._v("Normal prompt "),a("a",{staticClass:"anchor",attrs:{href:"#Normal-prompt","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Normal messages as feedbacks.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"info"')]),s._v(">")]),s._v("Display normal message"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      info () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.info("),a("span",{staticClass:"hljs-string"},[s._v("'This is a normal message'")]),s._v(");\n      },\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)},n=[],i={render:e,staticRenderFns:n};t.a=i},2512:function(s,t,a){s.exports=a(2513)},2513:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(1699),n=a.n(e);for(var i in e)"default"!==i&&function(s){a.d(t,s,function(){return e[s]})}(i);var r=a(2514),l=a(67),o=l(n.a,r.a,!1,null,null,null);t.default=o.exports},2514:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-button @click="success">Display a loading indicator</a-button>\n',script:"\n  export default {\n    methods: {\n      success () {\n        const hide = this.$message.loading('Action in progress..', 0);\n        setTimeout(hide, 2500);\n      },\n    }\n  }\n",style:null,us:"\n#### Message of loading\nDisplay a global loading indicator, which is dismissed by itself asynchronously.\n",cn:"\n#### 加载中\n进行全局 loading，异步自行移除。\n",sourceCode:"<template>\n  <a-button @click=\"success\">Display a loading indicator</a-button>\n</template>\n<script>\n  export default {\n    methods: {\n      success () {\n        const hide = this.$message.loading('Action in progress..', 0);\n        setTimeout(hide, 2500);\n      },\n    }\n  }\n<\/script>\n"}}},[a("template",{slot:"component"},[a("a-button",{on:{click:s.success}},[s._v("Display a loading indicator")])],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"加载中"}},[s._v("加载中 "),a("a",{staticClass:"anchor",attrs:{href:"#加载中","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("进行全局 loading，异步自行移除。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Message-of-loading"}},[s._v("Message of loading "),a("a",{staticClass:"anchor",attrs:{href:"#Message-of-loading","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Display a global loading indicator, which is dismissed by itself asynchronously.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Display a loading indicator"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      success () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" hide = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.loading("),a("span",{staticClass:"hljs-string"},[s._v("'Action in progress..'")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(");\n        setTimeout(hide, "),a("span",{staticClass:"hljs-number"},[s._v("2500")]),s._v(");\n      },\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)},n=[],i={render:e,staticRenderFns:n};t.a=i},2515:function(s,t,a){s.exports=a(2516)},2516:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(1700),n=a.n(e);for(var i in e)"default"!==i&&function(s){a.d(t,s,function(){return e[s]})}(i);var r=a(2517),l=a(67),o=l(n.a,r.a,!1,null,null,null);t.default=o.exports},2517:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-button @click="success">Success</a-button>\n    <a-button @click="error">Error</a-button>\n    <a-button @click="warning">Warning</a-button>\n  </div>\n',script:"\n  export default {\n    methods: {\n      success () {\n        this.$message.success('This is a message of success');\n      },\n      error () {\n        this.$message.error('This is a message of error');\n      },\n      warning () {\n        this.$message.warning('This is message of warning');\n      },\n    }\n  }\n",style:null,us:"\n#### Other types of message\nMessages of success, error and warning types.\n",cn:"\n#### 其他提示类型\n包括成功、失败、警告。\n",sourceCode:"<template>\n  <div>\n    <a-button @click=\"success\">Success</a-button>\n    <a-button @click=\"error\">Error</a-button>\n    <a-button @click=\"warning\">Warning</a-button>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      success () {\n        this.$message.success('This is a message of success');\n      },\n      error () {\n        this.$message.error('This is a message of error');\n      },\n      warning () {\n        this.$message.warning('This is message of warning');\n      },\n    }\n  }\n<\/script>\n"}}},[a("template",{slot:"component"},[a("div",[a("a-button",{on:{click:s.success}},[s._v("Success")]),s._v(" "),a("a-button",{on:{click:s.error}},[s._v("Error")]),s._v(" "),a("a-button",{on:{click:s.warning}},[s._v("Warning")])],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"其他提示类型"}},[s._v("其他提示类型 "),a("a",{staticClass:"anchor",attrs:{href:"#其他提示类型","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("包括成功、失败、警告。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Other-types-of-message"}},[s._v("Other types of message "),a("a",{staticClass:"anchor",attrs:{href:"#Other-types-of-message","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Messages of success, error and warning types.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Success"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"error"')]),s._v(">")]),s._v("Error"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("Warning"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      success () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.success("),a("span",{staticClass:"hljs-string"},[s._v("'This is a message of success'")]),s._v(");\n      },\n      error () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.error("),a("span",{staticClass:"hljs-string"},[s._v("'This is a message of error'")]),s._v(");\n      },\n      warning () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.warning("),a("span",{staticClass:"hljs-string"},[s._v("'This is message of warning'")]),s._v(");\n      },\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)},n=[],i={render:e,staticRenderFns:n};t.a=i},2518:function(s,t,a){s.exports=a(2519)},2519:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(2520),n=a(67),i=n(null,e.a,!1,null,null,null);t.default=i.exports},2520:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("组件提供了一些静态方法，使用方式和参数如下：")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.success(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.error(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.info(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warning(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warn(content, [duration], onClose)")]),s._v(" // alias of warning")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.loading(content, [duration], onClose)")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("提示内容")]),s._v(" "),a("td",[s._v("string|vueNode |function(h)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("自动关闭的延时，单位秒。设为 0 时不自动关闭。")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("3")])]),s._v(" "),a("tr",[a("td",[s._v("onClose")]),s._v(" "),a("td",[s._v("关闭时触发的回调函数")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("p",[s._v("还提供了全局配置和全局销毁方法：")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.config(options)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.destroy()")])])]),s._v(" "),a("h3",{attrs:{id:"message.config"}},[s._v("message.config "),a("a",{staticClass:"anchor",attrs:{href:"#message.config","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("message.config({\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`100px`")]),s._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n});\n")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("默认自动关闭延时，单位秒")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("3")])]),s._v(" "),a("tr",[a("td",[s._v("getContainer")]),s._v(" "),a("td",[s._v("配置渲染节点的输出位置")]),s._v(" "),a("td",[s._v("() => HTMLElement")]),s._v(" "),a("td",[s._v("() => document.body")])]),s._v(" "),a("tr",[a("td",[s._v("top")]),s._v(" "),a("td",[s._v("消息距离顶部的位置")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("24px")])])])])])])}],i={render:e,staticRenderFns:n};t.a=i},2521:function(s,t,a){s.exports=a(2522)},2522:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(2523),n=a(67),i=n(null,e.a,!1,null,null,null);t.default=i.exports},2523:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("This components provides some static methods, with usage and arguments as following:")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.success(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.error(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.info(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warning(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warn(content, [duration], onClose)")]),s._v(" // alias of warning")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.loading(content, [duration], onClose)")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Argument")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("content of the message")]),s._v(" "),a("td",[s._v("string|vueNode |function(h)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("time(seconds) before auto-dismiss, don't dismiss if set to 0")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("1.5")])]),s._v(" "),a("tr",[a("td",[s._v("onClose")]),s._v(" "),a("td",[s._v("Specify a function that will be called when the message is closed")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("p",[s._v("Methods for global configuration and destruction are also provided:")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.config(options)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.destroy()")])])]),s._v(" "),a("h3",{attrs:{id:"message.config"}},[s._v("message.config "),a("a",{staticClass:"anchor",attrs:{href:"#message.config","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[s._v("message.config({\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'100px'")]),s._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n});\n")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Argument")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("time before auto-dismiss, in seconds")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("1.5")])]),s._v(" "),a("tr",[a("td",[s._v("getContainer")]),s._v(" "),a("td",[s._v("Return the mount node for Message")]),s._v(" "),a("td",[s._v("() => HTMLElement")]),s._v(" "),a("td",[s._v("() => document.body")])]),s._v(" "),a("tr",[a("td",[s._v("top")]),s._v(" "),a("td",[s._v("distance from top")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("24px")])])])])])])}],i={render:e,staticRenderFns:n};t.a=i},607:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(1696),n=a.n(e);for(var i in e)"default"!==i&&function(s){a.d(t,s,function(){return e[s]})}(i);var r=a(67),l=r(n.a,null,!1,null,null,null);t.default=l.exports}});