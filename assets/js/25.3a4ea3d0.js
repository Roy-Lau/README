(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{241:function(s,e,n){"use strict";n.r(e);var t=n(1),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"方法一（直接下载编译好的）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法一（直接下载编译好的）"}},[s._v("#")]),s._v(" 方法一（直接下载编译好的）")]),s._v(" "),n("p",[s._v("第一步：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("wget https://nodejs.org/dist/v8.8.0/node-v8.8.0-linux-x86.tar.xz\n")])])]),n("p",[s._v("第二步  解压缩文件包")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v(" tar xvf node-v8.8.0-linux-x86.tar.gz\n")])])]),n("p",[s._v("第三步  NODE 环境配置\n这样可以使得在任何目录下，都可以使用"),n("code",[s._v("/usr/local/src/node-v8.8.0-linux-x86/bin")]),s._v(" 下得node命令，\n步骤如下：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("a、切换到 root 用户\nb、vi /etc/profile\nc、在最下面加入\n   # node （注释作用）\n   export NODE_HOME=/usr/local/src/node-v8.8.0-linux-x86\n   export PATH=$PATH:$NODE_HOME/bin\n   export NODE_PATH=$NODE_HOME/lib/node_modules\nd、:wq （保存并退出）\ne、source /etc/profile （使配置文件生效,重启后失效）\ne、source /etc/bashrc （使配置文件生效,重启后有效）\n")])])]),n("p",[s._v("第四步 大功告成\n你就可以用 "),n("code",[s._v("node -v")]),s._v(" 看自己的成果了！")]),s._v(" "),n("h2",{attrs:{id:"方法二：（自己编译）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法二：（自己编译）"}},[s._v("#")]),s._v(" 方法二：（自己编译）")]),s._v(" "),n("p",[s._v("准备：")]),s._v(" "),n("p",[s._v("先查看gcc版本（必须是4.8.2以上）")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://people.centos.org/tru/devtools-2/devtools-2.repo\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" devtools-2.repo /etc/yum.repos.d\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" devtoolset-2-gcc devtoolset-2-binutils devtoolset-2-gcc-c++\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("三个安装包会被装在 "),n("code",[s._v("/opt/rh/devtoolset-2/root/")]),s._v(" 中")]),s._v(" "),n("p",[s._v("更新软连接：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/gcc /usr/bin/gcc-4.4.7\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/g++ /usr/bin/g++-4.4.7\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /usr/bin/c++ /usr/bin/c++-4.4.7\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/rh/devtoolset-2/root/usr/bin/gcc /usr/bin/gcc\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/rh/devtoolset-2/root/usr/bin/c++ /usr/bin/c++\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/rh/devtoolset-2/root/usr/bin/g++ /usr/bin/g++\ngcc --version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("第一步：下载")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("cd /usr/src\nwget https://github.com/nodejs/node/archive/v8.8.0.tar.gz  # 源码（会有一些坑，而且还需要编译，不推荐使用）\n")])])]),n("p",[s._v("第二步： 解压缩文件包")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("tar -zvxf v8.8.0.tar.gz\n")])])]),n("p",[s._v("第三步： 编译")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("mv ./node-8.8.0 /usr/local/src/node-8.8.0\ncd /usr/local/src/node-8.8.0\n\nsudo make && sudo make install\n或者\nsudo ./configure\n")])])]),n("p",[s._v("第四步：配置环境变量")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("a、切换到 root 用户\nb、vi /etc/profile\nc、在最下面加入\n   # node （注释作用）\n   export NODE_HOME=/usr/local/src/node-8.8.0\n   export PATH=$PATH:$NODE_HOME/bin\n   export NODE_PATH=$NODE_HOME/lib/node_modules\nd、:wq （保存并退出）\ne、source /etc/profile （使配置文件生效）\n")])])]),n("h2",{attrs:{id:"方法三（通过yum下载）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法三（通过yum下载）"}},[s._v("#")]),s._v(" 方法三（通过yum下载）")]),s._v(" "),n("p",[s._v("另一个有效且简单的方法来安装Node.js就是从官方库。这同样确保您可以访问到EPEL库，你可以通过运行以下命令。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("现在可以使用yum命令安装Node.js了。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nodejs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("因为在开发过程中我需要管理节点包，我还要安装新公共管理的软件包管理器，使用以下命令。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);