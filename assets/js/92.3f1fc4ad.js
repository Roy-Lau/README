(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{311:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"mysql-sql注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-sql注入"}},[s._v("#")]),s._v(" Mysql sql注入")]),s._v(" "),a("p",[a("a",{attrs:{href:"README.md"}},[s._v("目录")])]),s._v(" "),a("blockquote",[a("p",[s._v("所谓SQL注入，就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。")])]),s._v(" "),a("p",[s._v("以下实例中，输入的用户名必须为字母、数字及下划线的组合，且用户名长度为 8 到 20 个字符之间：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preg_match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"/^\\w{8,20}$/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"SELECT * FROM users\n                          WHERE username='),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"username 输入异常"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("在没有过滤特殊字符时，出现的SQL情况：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设定$name 中插入了我们不需要的SQL语句")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"Qadir\'; DELETE FROM users;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v("\"SELECT * FROM users WHERE name='"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("em",[s._v("以上的注入语句中，我们没有对 $name 的变量进行过滤，$name 中插入了我们不需要的SQL语句，将删除 users 表中的所有数据。")])]),s._v(" "),a("p",[s._v("在PHP中的 mysqli_query() 是不允许执行多个 SQL 语句的，但是在 SQLite 和 PostgreSQL 是可以同时执行多条SQL语句的，所以我们对这些用户的数据需要进行严格的验证。")]),s._v(" "),a("p",[s._v("防止SQL注入，我们需要注意以下几个要点：")]),s._v(" "),a("ul",[a("li",[s._v('1.永远不要信任用户的输入。对用户的输入进行校验，可以通过正则表达式，或限制长度；对单引号和 双"-"进行转换等。')]),s._v(" "),a("li",[s._v("2.永远不要使用动态拼装sql，可以使用参数化的sql或者直接使用存储过程进行数据查询存取。")]),s._v(" "),a("li",[s._v("3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。")]),s._v(" "),a("li",[s._v("4.不要把机密信息直接存放，加密或者hash掉密码和敏感的信息。")]),s._v(" "),a("li",[s._v("5.应用的异常信息应该给出尽可能少的提示，最好使用自定义的错误信息对原始错误信息进行包装")]),s._v(" "),a("li",[s._v("6.sql注入的检测方法一般采取辅助软件或网站平台来检测，软件一般采用sql注入检测工具"),a("code",[s._v("jsky")]),s._v("，网站平台就有亿思网站安全平台检测工具。"),a("code",[s._v("MDCSOFT")]),s._v(" "),a("code",[s._v("SCAN")]),s._v("等。采用"),a("code",[s._v("MDCSOFT-IPS")]),s._v("可以有效的防御"),a("code",[s._v("SQL注入")]),s._v("，"),a("code",[s._v("XSS")]),s._v("攻击等。")])]),s._v(" "),a("h3",{attrs:{id:"防止sql注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防止sql注入"}},[s._v("#")]),s._v(" 防止SQL注入")]),s._v(" "),a("p",[s._v("PHP的MySQL扩展提供了"),a("code",[s._v("mysqli_real_escape_string()")]),s._v("函数来转义特殊的输入字符。")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_magic_quotes_gpc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stripslashes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mysqli_real_escape_string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v("\"SELECT * FROM users WHERE name='"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"like语句中的注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#like语句中的注入"}},[s._v("#")]),s._v(" Like语句中的注入")]),s._v(" "),a("p",[a("code",[s._v("like")]),s._v("查询时，如果用户输入的值有"),a("code",[s._v('"_"')]),s._v("和"),a("code",[s._v('"%"')]),s._v("，则会出现这种情况：用户本来只是想查询"),a("code",[s._v('"abcd_"')]),s._v("，查询结果中却有"),a("code",[s._v('"abcd_"、"abcde"、"abcdf"')]),s._v("等等；用户要查询"),a("code",[s._v('"30%"')]),s._v("（注：百分之三十）时也会出现问题。")]),s._v(" "),a("p",[s._v("在PHP脚本中我们可以使用"),a("code",[s._v("addcslashes()")]),s._v("函数来处理以上情况，如下实例：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sub")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addcslashes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mysqli_real_escape_string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"%something_"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"%_"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// $sub == \\%something\\_")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v("\"SELECT * FROM messages WHERE subject LIKE '"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("%'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("addcslashes()")]),s._v(" 函数在指定的字符前添加反斜杠。")]),s._v(" "),a("p",[s._v("语法格式:")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addcslashes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("characters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("string")]),s._v(" "),a("td",[s._v("必需。规定要检查的字符串。")])]),s._v(" "),a("tr",[a("td",[s._v("characters")]),s._v(" "),a("td",[s._v("可选。规定受 addcslashes() 影响的字符或字符范围。")])])])]),s._v(" "),a("p",[a("a",{staticStyle:{float:"right"},attrs:{href:"database-export.md"}},[s._v("<—— mysql 导出数据")])])])}),[],!1,null,null,null);t.default=e.exports}}]);