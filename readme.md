概念：webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)
	从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是高度可配置的。
	在开始前你需要先理解四个核心概念：
					入口(entry)
					输出(output)
					loader
					插件(plugins)

1. 建立工程 mkdir webpack-project && cd webpack-project
	    npm init -y 快速生成package.json
2. 安装（在工程里安装webpack 不要全局安装）
			npm install --save-dev webpack
			--如果装的是webpack4.0 需要再安装cli（npm i --save-dev webpack-cli ）
   		git init > touch .gitignore > 创建远端仓库不要添加readme > 在本地 git remote add origin https://github.com/Panamer/webpack-restart.git >
			git push -u origin master > 本地仓库分支关联远端分支成功 > git add . > git commit -m "" > git push > 工程创建成功
 			( Node 8.2+ 版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack）：
				npm5.2.0以上才能用npx  更新命令 sudo npm install npm@latest -g )
			npm5 会自动添加 webpack-lock.json 文件
3.
