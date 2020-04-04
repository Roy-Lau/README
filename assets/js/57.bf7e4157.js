(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{274:function(s,e,a){"use strict";a.r(e);var t=a(1),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-连接"}},[s._v("#")]),s._v(" MongoDB 连接")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/data-base/mongodb/"}},[s._v("目录")])],1),s._v(" "),a("h3",{attrs:{id:"启动-mongodb-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-mongodb-服务"}},[s._v("#")]),s._v(" 启动 MongoDB 服务")]),s._v(" "),a("blockquote",[a("p",[s._v("如何启动 "),a("code",[s._v("MongoDB")]),s._v(" 服务，在 "),a("code",[s._v("MongoDB")]),s._v(" 安装目录的 "),a("code",[s._v("bin")]),s._v("目录下执行 "),a("code",[s._v("mongod")]),s._v(" 即可。")])]),s._v(" "),a("blockquote",[a("p",[s._v("执行启动操作后，"),a("code",[s._v("mongodb")]),s._v(" 在输出一些必要信息后不会输出任何信息，之后就等待连接的建立，当连接被建立后，就会开始打印日志信息。")])]),s._v(" "),a("p",[s._v("标准 URI 连接语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[a("em",[a("strong",[s._v("mongodb")])]),s._v("😕/ 这是固定的格式，必须要指定。")])]),s._v(" "),a("li",[a("p",[a("em",[a("strong",[s._v("username:password@")])]),s._v(" 可选项，如果设置，在连接数据库服务器之后，驱动都会尝试登陆这个数据库")])]),s._v(" "),a("li",[a("p",[a("em",[a("strong",[s._v("host1")])]),s._v(" 必须的指定至少一个"),a("code",[s._v("host")]),s._v(", "),a("code",[s._v("host1")]),s._v(" 是这个"),a("code",[s._v("URI")]),s._v("唯一要填写的。它指定了要连接服务器的地址。如果要连接复制集，请指定多个主机地址。")])]),s._v(" "),a("li",[a("p",[a("em",[a("strong",[s._v("portX")])]),s._v(" 可选的指定端口，如果不填，默认为"),a("code",[s._v("27017")])])]),s._v(" "),a("li",[a("p",[a("em",[a("strong",[s._v("/database")])]),s._v(" 如果指定"),a("code",[s._v("username:password@")]),s._v("，连接并验证登陆指定数据库。若不指定，默认打开 test 数据库。")])]),s._v(" "),a("li",[a("p",[a("em",[a("strong",[s._v("?options")])]),s._v(" 是连接选项。如果不使用"),a("code",[s._v("/database")]),s._v("，则前面需要加上"),a("code",[s._v("/")]),s._v("。所有连接选项都是键值对"),a("code",[s._v("name=value")]),s._v("，键值对之间通过"),a("code",[s._v("&")]),s._v("或"),a("code",[s._v(";（分号）")]),s._v("隔开")])])]),s._v(" "),a("p",[s._v("标准的连接格式包含了多个选项(options)，如下所示：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("选项")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("replicaSet=name")]),s._v(" "),a("td",[s._v("验证"),a("code",[s._v("replica set")]),s._v("的名称。 "),a("code",[s._v("Impliesconnect=replicaSet.")])])]),s._v(" "),a("tr",[a("td",[s._v("slaveOk=true/false")]),s._v(" "),a("td",[a("code",[s._v("true:")]),s._v("在"),a("code",[s._v("connect=direct")]),s._v("模式下，驱动会连接第一台机器，即使这台服务器不是主。在"),a("code",[s._v("connect=replicaSet")]),s._v("模式下，驱动会发送所有的写请求到主并且把读取操作分布在其他从服务器。 "),a("br"),a("br"),s._v(" "),a("code",[s._v("false:")]),s._v(" 在 "),a("code",[s._v("connect=direct")]),s._v("模式下，驱动会自动找寻主服务器. 在"),a("code",[s._v("connect=replicaSet")]),s._v(" 模式下，驱动仅仅连接主服务器，并且所有的读写命令都连接到主服务器。")])]),s._v(" "),a("tr",[a("td",[s._v("safe=true/false")]),s._v(" "),a("td",[s._v("true: 在执行更新操作之后，驱动都会发送"),a("code",[s._v("getLastErro")]),s._v("r命令来确保更新成功。(还要参考 "),a("code",[s._v("wtimeoutMS")]),s._v("). "),a("br"),s._v(" "),a("code",[s._v("false:")]),s._v(" 在每次更新之后，驱动不会发送"),a("code",[s._v("getLastErro")]),s._v("r来确保更新成功。")])]),s._v(" "),a("tr",[a("td",[s._v("w=n")]),s._v(" "),a("td",[s._v("驱动添加 "),a("code",[s._v("{ w : n }")]),s._v(" 到"),a("code",[s._v("getLastError")]),s._v("命令. 应用于"),a("code",[s._v("safe=true")]),s._v("。")])]),s._v(" "),a("tr",[a("td",[s._v("wtimeoutMS=ms")]),s._v(" "),a("td",[s._v("驱动添加 "),a("code",[s._v("{ wtimeout : ms }")]),s._v(" 到 "),a("code",[s._v("getlasterror")]),s._v(" 命令. 应用于 "),a("code",[s._v("safe=true")]),s._v(".")])]),s._v(" "),a("tr",[a("td",[s._v("fsync=true/false")]),s._v(" "),a("td",[a("code",[s._v("true:")]),s._v(" 驱动添加 "),a("code",[s._v("{ fsync : true }")]),s._v(" 到 "),a("code",[s._v("getlasterror")]),s._v(" 命令.应用于 "),a("code",[s._v("safe=true")]),s._v(". "),a("br"),s._v(" "),a("code",[s._v("false:")]),s._v(" 驱动不会添加到"),a("code",[s._v("getLastError")]),s._v("命令中。")])]),s._v(" "),a("tr",[a("td",[s._v("journal=true/false")]),s._v(" "),a("td",[s._v("如果设置为 "),a("code",[s._v("true")]),s._v(", 同步到 "),a("code",[s._v("journal")]),s._v(" (在提交到数据库前写入到实体中). 应用于 "),a("code",[s._v("safe=true")])])]),s._v(" "),a("tr",[a("td",[s._v("connectTimeoutMS=ms")]),s._v(" "),a("td",[s._v("可以打开连接的时间。")])]),s._v(" "),a("tr",[a("td",[s._v("socketTimeoutMS=ms")]),s._v(" "),a("td",[s._v("发送和接受"),a("code",[s._v("sockets")]),s._v("的时间。")])])])]),s._v(" "),a("p",[s._v("实例")]),s._v(" "),a("p",[s._v("使用默认端口来连接 MongoDB 的服务。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://localhost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过 shell 连接 MongoDB 服务：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ./mongo\nMongoDB shell version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".6\nconnecting to: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这时候你返回查看运行 "),a("code",[s._v("./mongod")]),s._v("命令的窗口，可以看到是从哪里连接到"),a("code",[s._v("MongoDB")]),s._v("的服务器，您可以看到如下信息：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("……省略信息……\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v("-09-25T17:22:27.336+0800 I CONTROL  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" allocator: tcmalloc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v("-09-25T17:22:27.336+0800 I CONTROL  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" options: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" storage: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" dbPath: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/db"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v("-09-25T17:22:27.350+0800 I NETWORK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" connections on port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2015")]),s._v("-09-25T17:22:36.012+0800 I NETWORK  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("initandlisten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" connection accepted from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:37310 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 (1 connection now open)  # 该行表明一个来自本机的连接")]),s._v("\n……省略信息……\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"mongodb-连接命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-连接命令格式"}},[s._v("#")]),s._v(" MongoDB 连接命令格式")]),s._v(" "),a("p",[s._v("使用用户名和密码连接到 "),a("code",[s._v("MongoDB")]),s._v(" 服务器，你必须使用 "),a("code",[s._v("'username:password@hostname/dbname'")]),s._v(" 格式，"),a("code",[s._v("'username'")]),s._v("为用户名，"),a("code",[s._v("'password'")]),s._v(" 为密码。")]),s._v(" "),a("p",[s._v("使用用户名和密码连接登陆到默认数据库：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ./mongo\nMongoDB shell version: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v(".6\nconnecting to: "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("使用用户 "),a("code",[s._v("admin")]),s._v(" 使用密码 "),a("code",[s._v("123456")]),s._v(" 连接到本地的 "),a("code",[s._v("MongoDB")]),s._v(" 服务上。输出结果如下所示：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mongodb://admin:123456@localhost/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用用户名和密码连接登陆到指定数据库，格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://admin:123456@localhost/test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更多连接实例")]),s._v(" "),a("p",[s._v("连接本地数据库服务器，端口是默认的。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://localhost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用用户名"),a("code",[s._v("fred，")]),s._v("密码"),a("code",[s._v("foobar")]),s._v("登录"),a("code",[s._v("localhost")]),s._v("的"),a("code",[s._v("admin")]),s._v("数据库。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://fred:foobar@localhost\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用用户名"),a("code",[s._v("fred，")]),s._v("密码"),a("code",[s._v("foobar")]),s._v("登录"),a("code",[s._v("localhost")]),s._v("的"),a("code",[s._v("baz")]),s._v("数据库。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://fred:foobar@localhost/baz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("连接 "),a("code",[s._v("replica pair")]),s._v(", 服务器"),a("code",[s._v("1")]),s._v("为"),a("code",[s._v("example1.com")]),s._v("服务器"),a("code",[s._v("2")]),s._v("为"),a("code",[s._v("example2")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://example1.com:27017,example2.com:27017\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("连接 "),a("code",[s._v("replica set")]),s._v(" 三台服务器 (端口 "),a("code",[s._v("27017, 27018, 和27019")]),s._v("):")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://localhost,localhost:27018,localhost:27019\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("连接 "),a("code",[s._v("replica set")]),s._v(" 三台服务器, 写入操作应用在主服务器 并且分布查询到从服务器。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://host1,host2,host3/?slaveOk"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("直接连接第一个服务器，无论是"),a("code",[s._v("replica set")]),s._v("一部分或者主服务器或者从服务器。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://host1,host2,host3/?connect"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("direct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("slaveOk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当你的连接服务器有优先级，还需要列出所有服务器，你可以使用上述连接方式。\n安全模式连接到localhost:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://localhost/?safe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以安全模式连接到"),a("code",[s._v("replica set")]),s._v("，并且等待至少两个复制服务器成功写入，超时时间设置为"),a("code",[s._v("2秒")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("mongodb://host1,host2,host3/?safe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("w")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("wtimeoutMS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{staticStyle:{float:"right"},attrs:{href:"create-database.md"}},[s._v("MongoDB 创建数据库")])])])}),[],!1,null,null,null);e.default=n.exports}}]);