(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{305:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),a("p",[s._v("140.143.158.138\nqazplm123")]),s._v(" "),a("p",[a("a",{attrs:{href:"README.md"}},[s._v("目录")])]),s._v(" "),a("p",[s._v("MYSQL相关的包：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("MySQL")]),s._v("： MySQL服务器。你需要该选项，除非你只想连接运行在另一台机器上的"),a("code",[s._v("MySQL")]),s._v("服务器。")]),s._v(" "),a("li",[a("code",[s._v("MySQL-client")]),s._v("： MySQL 客户端程序，用于连接并操作"),a("code",[s._v("Mysql")]),s._v("服务器。")]),s._v(" "),a("li",[a("code",[s._v("MySQL-devel")]),s._v("： 库和包含文件，如果你想要编译其它"),a("code",[s._v("MySQL")]),s._v("客户端，例如Perl模块，则需要安装该"),a("code",[s._v("RPM")]),s._v("包。")]),s._v(" "),a("li",[a("code",[s._v("MySQL-shared")]),s._v("： 该软件包包含某些语言和应用程序需要动态装载的共享库"),a("code",[s._v("(libmysqlclient.so*)")]),s._v("，使用MySQL。")]),s._v(" "),a("li",[a("code",[s._v("MySQL-bench")]),s._v("： MySQL数据库服务器的基准和性能测试工具")])]),s._v(" "),a("p",[s._v("检测卸载mysql：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mysql \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检测系统是否自带安装 mysql")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e mysql　　\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 普通删除模式")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -e --nodeps mysql　 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强力删除模式，如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("安装 mysql(CentOS 7以下)：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("启动 mysql：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld start\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启mysql")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("em",[s._v("注意：如果我们是第一次启动 mysql 服务，mysql 服务器首先会进行初始化的配置。")])]),s._v(" "),a("p",[s._v("如果是 "),a("strong",[s._v("CentOS 7 以上版本")]),s._v("，由于 MySQL数据库已从默认的程序列表中移除，可以使用 mariadb 代替：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("yum install mariadb-server mariadb\n")])])]),a("p",[s._v("mariadb数据库的相关命令是：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start mariadb  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动MariaDB")]),s._v("\nsystemctl stop mariadb  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止MariaDB")]),s._v("\nsystemctl start mariadb \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启MariaDB")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" mariadb  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("验证Mysql安装：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysqladmin --version")]),s._v("\nmysqladmin  Ver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.42")]),s._v(" Distrib "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.6")]),s._v(".39, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Linux on x86_64  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此结果是mysql基于Linux系统信息")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("em",[s._v("如果以上命令执行后未输入任何信息，说明你的Mysql未安装成功。")])]),s._v(" "),a("p",[s._v("使用 MySQL Client(Mysql客户端) 执行简单的SQL命令:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql \t\t# 连接服务器（密码为空）")]),s._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SHOW DATABASES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示数据库")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Database           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" information_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" performance_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Mysql安装成功后，默认的root用户密码为空，也可以通过下面命令创建root用户的密码")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# mysqladmin -u root password "toor";')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户名密码连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql -u root -p")]),s._v("\nEnter password:*******\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[a("em",[s._v("注意：在输入密码时，密码是不会显示了，你正确输入即可。")])]),s._v(" "),a("p",[a("a",{staticStyle:{float:"right"},attrs:{href:"administration.md"}},[s._v("<—— mysql 管理")])]),s._v(" "),a("p",[s._v("MySQL安装后涉及的目录如下：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("目录")]),s._v(" "),a("th",[s._v("目录中的内容")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("/usr/bin")]),s._v(" "),a("td",[s._v("客户端程序和脚本")])]),s._v(" "),a("tr",[a("td",[s._v("/usr/sbin")]),s._v(" "),a("td",[s._v("Mysqld服务器")])]),s._v(" "),a("tr",[a("td",[s._v("/var/lib/mysql")]),s._v(" "),a("td",[s._v("数据库的日志文件")])]),s._v(" "),a("tr",[a("td",[s._v("/usr/share/info")]),s._v(" "),a("td",[s._v("信息格式手册")])]),s._v(" "),a("tr",[a("td",[s._v("/usr/share/man")]),s._v(" "),a("td",[s._v("Unix 手册页")])]),s._v(" "),a("tr",[a("td",[s._v("/usr/include/mysql")]),s._v(" "),a("td",[s._v("包括 （标题） 的文件")])]),s._v(" "),a("tr",[a("td",[s._v("/usr/lib/mysql")]),s._v(" "),a("td",[s._v("mysql的lib包")])]),s._v(" "),a("tr",[a("td",[s._v("/usr/share/mysql")]),s._v(" "),a("td",[s._v("杂项的支持文件，包括错误消息） 字符设置的文件，示例配置文件，SQL 数据库安装")])]),s._v(" "),a("tr",[a("td",[s._v("/usr/share/sql-bench")]),s._v(" "),a("td",[s._v("基准")])]),s._v(" "),a("tr",[a("td",[s._v("/etc/my.cnf")]),s._v(" "),a("td",[s._v("*配置文件")])])])]),s._v(" "),a("p",[s._v("Window 上安装Mysql：")]),s._v(" "),a("p",[s._v("Window上安装Mysql相对来说会较为简单，你只需要在 MySQL 下载中下载window版本的mysql安装包，并解压安装包。")]),s._v(" "),a("p",[s._v('双击 setup.exe 文件，接下来你只需要安装默认的配置点击"next"即可，默认情况下安装信息会在C:\\mysql目录中。')]),s._v(" "),a("p",[s._v('接下来你可以通过"开始" =》在搜索框中输入 " cmd" 命令 =》 在命令提示符上切换到 C:\\mysql\\bin 目录，并输入一下命令：')]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("mysqld.exe --console\n")])])]),a("p",[s._v("如果安装成功以上命令将输出一些mysql启动及InnoDB信息。")])])}),[],!1,null,null,null);t.default=e.exports}}]);