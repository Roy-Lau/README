(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{321:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序规则"}},[s._v("#")]),s._v(" 排序规则")]),s._v(" "),t("h2",{attrs:{id:"数据库排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库排序规则"}},[s._v("#")]),s._v(" 数据库排序规则")]),s._v(" "),t("h3",{attrs:{id:"使用-serverproperty-函数-，查询-sql-server-实例的服务器排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-serverproperty-函数-，查询-sql-server-实例的服务器排序规则"}},[s._v("#")]),s._v(" 使用 SERVERPROPERTY 函数 ，查询 SQL Server 实例的服务器排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONVERT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SERVERPROPERTY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'collation'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"使用-fn-helpcollations-内置函数，查询服务器所有可用排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-fn-helpcollations-内置函数，查询服务器所有可用排序规则"}},[s._v("#")]),s._v(" 使用 fn_helpcollations() 内置函数，查询服务器所有可用排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fn_helpcollations"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"使用-alter-database-语句更改用户数据库的排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-alter-database-语句更改用户数据库的排序规则"}},[s._v("#")]),s._v(" 使用 ALTER DATABASE 语句更改用户数据库的排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" myDB "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" Greek_CS_AI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("em",[s._v("更改数据库级排序规则不会影响列级排序规则或表达式级排序规则。")])]),s._v(" "),t("h3",{attrs:{id:"检索数据库的当前排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检索数据库的当前排序规则"}},[s._v("#")]),s._v(" 检索数据库的当前排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONVERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" DATABASEPROPERTYEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'database_name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'collation'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"列级排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#列级排序规则"}},[s._v("#")]),s._v(" 列级排序规则")]),s._v(" "),t("h3",{attrs:{id:"使用-alter-table-语句更改列的排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-alter-table-语句更改列的排序规则"}},[s._v("#")]),s._v(" 使用 ALTER TABLE 语句更改列的排序规则")]),s._v(" "),t("blockquote",[t("p",[s._v("表达式级排序规则在语句运行时设置，并且影响结果集的返回方式。 这可以使 ORDER BY 排序结果特定于区域设置。 要实现表达式级别的排序规则，请使用如下的 COLLATE 子句：")])]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" Latin1_General_CS_AI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"表达式级排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式级排序规则"}},[s._v("#")]),s._v(" 表达式级排序规则")]),s._v(" "),t("blockquote",[t("p",[s._v("表达式级排序规则在语句运行时设置，并且影响结果集的返回方式。 这可以使 ORDER BY 排序结果特定于区域设置。 要实现表达式级别的排序规则，请使用如下的 COLLATE 子句")])]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" customer "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" Latin1_General_CS_AI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"设置数据库排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置数据库排序规则"}},[s._v("#")]),s._v(" 设置数据库排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 使用 master 数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 如果 MyOptionsTest 数据库不为空，删除掉 MyOptionsTest 数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v(" DB_ID "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("N"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyOptionsTest'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" MyOptionsTest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 创建 MyOptionsTest 数据库，并设置排序规则为 Latin1_General_100_CS_AS_SC")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" MyOptionsTest  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" Latin1_General_100_CS_AS_SC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO  \n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 检查 MyOptionsTest 数据库的排序规则。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" collation_name  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("databases")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyOptionsTest'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"更改数据库排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改数据库排序规则"}},[s._v("#")]),s._v(" 更改数据库排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 设置 MyOptionsTest 数据库的排序规则为 French_CI_AS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" MyOptionsTest  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" French_CI_AS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \nGO  \n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 检查 MyOptionsTest 数据库的排序规则。 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" collation_name  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("databases")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyOptionsTest'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"设置和更改列排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置和更改列排序规则"}},[s._v("#")]),s._v(" 设置和更改列排序规则")]),s._v(" "),t("h3",{attrs:{id:"create-table-和-alter-table的-collate-子句-设置排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-table-和-alter-table的-collate-子句-设置排序规则"}},[s._v("#")]),s._v(" CREATE TABLE 和 ALTER TABLE的 COLLATE 子句 设置排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 创建 MyTable 表时，设置 CharCol 列的排序规则为 French_CI_AS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MyTable  \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PrimaryKey   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  \n   CharCol      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" French_CI_AS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 修改 MyTable 表的 CharCol 列 排序规则为 Latin1_General_CI_AS")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" dbo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MyTable "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" CharCol  \n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" Latin1_General_CI_AS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nGO\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"查看排序规则信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看排序规则信息"}},[s._v("#")]),s._v(" 查看排序规则信息")]),s._v(" "),t("h3",{attrs:{id:"查看服务器的排序规则设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看服务器的排序规则设置"}},[s._v("#")]),s._v(" 查看服务器的排序规则设置")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONVERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SERVERPROPERTY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'collation'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 或者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXECUTE")]),s._v(" sp_helpsort"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"查看-sql-server-的所有排序规则名称及描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-sql-server-的所有排序规则名称及描述"}},[s._v("#")]),s._v(" 查看 SQL server 的所有排序规则名称及描述")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" description "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fn_helpcollations"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看数据库的排序规则设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库的排序规则设置"}},[s._v("#")]),s._v(" 查看数据库的排序规则设置")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看当前所有数据库的排序规则")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" collation_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("databases")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 或者（查看某个数据库的排序规则）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONVERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" DATABASEPROPERTYEX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'database_name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'collation'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"查询所有不为空的列-的排序规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询所有不为空的列-的排序规则"}},[s._v("#")]),s._v(" 查询所有不为空的列 的排序规则")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" collation_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" collation_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看表和列的排序规则设置的具体步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看表和列的排序规则设置的具体步骤"}},[s._v("#")]),s._v(" 查看表和列的排序规则设置的具体步骤")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看所有表下的所有列的排序规则")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name TableName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name ColumnName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" collation_name  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v(" c  \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" sys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v(" t "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("object_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("object_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);