概念：webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)
	从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是	高度可配置的。在开始前你需要先理解四个核心概念：
	入口(entry)
	输出(output)
	loader
	插件(plugins)

1. 建立工程 mkdir webpack-project && cd webpack-project
	    npm init -y 快速生成package.json
2. 安装（在工程里安装webpack 不要全局安装）
	npm install --save-dev webpack
	--如果装的是webpack4.0 需要再安装cli（npm i --save-dev webpack-cli ）
3.
