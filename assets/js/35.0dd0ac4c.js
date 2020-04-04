(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{251:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"yum"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[e._v("#")]),e._v(" yum")]),e._v(" "),o("p",[e._v("1、备份")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n")])])]),o("p",[e._v("2、下载新的 "),o("code",[e._v("CentOS-Base.repo")]),e._v(" 到 "),o("code",[e._v("/etc/yum.repos.d/")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("# CentOS 5\nwget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-5.repo\n\n# CentOS 6\nwget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo\n\n# CentOS 7\nwget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n")])])]),o("p",[e._v("3、 生成缓存")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("yum makecache\n")])])]),o("ul",[o("li",[o("p",[e._v("用YUM安装软件包："),o("code",[e._v("yum install <package_name>")])])]),e._v(" "),o("li",[o("p",[e._v("用YUM删除软件包："),o("code",[e._v("yum remove <package_name>")])])]),e._v(" "),o("li",[o("p",[e._v("yum 设置安装路径："),o("code",[e._v("yum install --installroot=/usr/src/ vim")])])]),e._v(" "),o("li",[o("p",[e._v("yum 清除缓存："),o("code",[e._v("yum clean all")])])]),e._v(" "),o("li",[o("p",[e._v("yum升级：\n"),o("code",[e._v("yum -y upgrade")]),e._v("(升级所有包，不改变软件设置和系统设置，系统版本升级，内核不改变),\n"),o("code",[e._v("yum -y update")]),e._v("(升级所有包，改变软件设置和系统设置,系统版本内核都升级)")])]),e._v(" "),o("li",[o("p",[e._v("查看软件安装路径："),o("code",[e._v("whereis <package_name>")])])]),e._v(" "),o("li",[o("p",[e._v("查看运行的进程："),o("code",[e._v("ps(linux)\ttasklist(windows)")])])]),e._v(" "),o("li",[o("p",[e._v("查看物理CPU个数 ："),o("code",[e._v('cat /proc/cpuinfo| grep "physical id" | sort| uniq | wc -l')])])]),e._v(" "),o("li",[o("p",[e._v("查看每个物理CPU中core的个数(即核数) ："),o("code",[e._v('cat /proc/cpuinfo| grep "cpu cores"| uniq')])])]),e._v(" "),o("li",[o("p",[e._v("查看逻辑CPU的个数 ："),o("code",[e._v('cat /proc/cpuinfo| grep "processor"| wc -l')])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);