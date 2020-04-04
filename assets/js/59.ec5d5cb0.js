(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{276:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-创建-删除-数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-创建-删除-数据库"}},[s._v("#")]),s._v(" MongoDB 创建 删除 数据库")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/data-base/mongodb/"}},[s._v("目录")])],1),s._v(" "),a("h3",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" DATABASE_NAME\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果数据库不存在，则创建数据库，否则切换到指定的数据库")]),s._v(" "),a("p",[s._v("实例：")]),s._v(" "),a("p",[s._v("创建"),a("code",[s._v("test_tbl")]),s._v(",查看当前数据库")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" test_tbl\nswitched "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" db test_tbl\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db\ntest_tbl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("查看所有数据库")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" dbs\nadmin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\nconfig  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可以看到，我们刚创建的数据库 test_tbl 并不在数据库的列表中， 要显示它，我们需要向 test_tbl 数据库插入一些数据。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" test_tbl\nswitched "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" db test_tbl\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"资源共享"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("{ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" dbs\nadmin     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\nconfig    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\ntest_tbl  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"删除数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[s._v("#")]),s._v(" 删除数据库")]),s._v(" "),a("p",[s._v("语法：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dropDatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除当前数据库，默认为"),a("code",[s._v("test")]),s._v(",可以使用 "),a("code",[s._v("db")]),s._v("命令查询当前数据库名")]),s._v(" "),a("p",[s._v("实例：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" dbs \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先，查看所有数据库")]),s._v("\nadmin     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\nconfig    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\ntest_tbl  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" test_tbl\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 test_tbl 数据库")]),s._v("\nswitched "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" db test_tbl\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dropDatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前数据库")]),s._v("\n{ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dropped"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test_tbl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),s._v(" : "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" }\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" dbs\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否删除")]),s._v("\nadmin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\nconfig  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.000")]),s._v("GB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("strong",[s._v("删除集合")])]),s._v(" "),a("p",[s._v("删除集合语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("collection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下面实例 删除 "),a("code",[s._v("test_tbl")]),s._v("数据库中的集合 "),a("code",[s._v("site")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" test_tbl\nswitched "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" db test_tbl\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v("\nsite\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("site"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("drop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("a",{staticStyle:{float:"right"},attrs:{href:"create-delete-collection.md"}},[s._v(" 创建 删除集合")])])])}),[],!1,null,null,null);t.default=e.exports}}]);