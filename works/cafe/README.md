#sPresso for dispatcher

フロント開発用テンプレート
jade + sass + coffeeScript = Prepros

##準備

1. Preprosをダウンロード＆インストール
すでにインストールしている場合は、不要
```
https://prepros.io/
```

2. sPresso for dispatcherをダウンロード＆プロジェクトに追加
開発準備完了

##開発用
###実行可能環境
* Windows（32/64bit）
* Mac
* Linux（32/64bit）

###開発手順
基本的に「_src」フォルダ内のファイルを編集
すると自動的にコンパイルされ一式書き出される。
画像類などは直接「assets」フォルダ配下の
「images」フォルダに設置してください。

トップページを作成する場合は、そのまま「index」と
命名されているファイルを編集するのみで可能。

下層ページを作成する場合は、「example」という
サンプルファイルを設置しているので、そちらを参考に
ファイルを複製するのみで動作します。

※ただし、SPの場合特殊でjadeやcoffeeにファイルを追加した際
　Prepros側のOUTPUT PATHがPCディレクトリ先になるので
　手動でSPのパスを変更しないとPCの方に上書きされる点は注意。

###dispatcher版の機能
基本的にjadeはhtml、scssはcss、coffeeはjsと
分けたかったのでそれを利用可能にしたものです。
jsを追加したい時などは、「dispatcher.coffee」に

	path: /^(?=.*\/ディレクトリ名\/)/
	func: ->
	  $LAB.script SOURCE_DIR + 'ファイル名.js'
	  return

という記述があると思うので、それを変更するかもしくは
追加するだけで自動的にJSを読み込んでいきます。

###プロジェクトのビルド
Preprosウィンドウの「MORE OPTIONS」をクリック後
「Build / Export Project」を選択するとルート階層に
「_build」フォルダにまとまって出来上がる。
アップロードする時はその中身をFTPやSFTPに手動アップロードする。
※有償ライセンス認証後は、FTPやSFTPに直接あげることも可能

##ディレクトリ構成

	./
	├── README.md
	├── config.rb
	├── index.html
	├── example
	│   └── index.html
	├── assets
	│   ├── common
	│   │   ├── images
	│   │   │   ├── ogp_image.jpg
	│   │   │   ├── favicon.ico
	│   │   │   └── favicon.png
	│   │   └── js
	│   │        ├── common.js
	│   │        ├── dispatcher.js（dispatcher版のみ）
	│   │        └── lib
	│   │             ├── html5shiv.min.js
	│   │             ├── imagesloaded.pkgd.min.js
	│   │             ├── jquery-1.10.2.min.js
	│   │             ├── jquery.cookie.min.js
	│   │             ├── jquery.resizeEnd.min.js
	│   │             ├── jquery.transit.min.js
	│   │             ├── lab.min.js
	│   │             ├── selectivizr.min.js
	│   │             └── underscore-min.js
	│   ├── pc
	│   │   ├── css
	│   │   │   └── style.css
	│   │   ├── images
	│   │   └── js
	│   │        ├── common.js
	│   │        ├── example.js
	│   │        ├── index.js
	│   │        └── lib
	│   │             └── jquery.wHover.js
	│   └── sp
	│        ├── css
	│        ├── images
	│        └── js
	│             ├── common.js
	│             ├── example.js
	│             ├── index.js
	│             └── lib
	├── _src
	│   ├── coffee
	│   │   ├── common
	│   │   │   ├── common.coffee
	│   │   │   └── dispatcher.coffee（dispatcher版のみ）
	│   │   ├── pc
	│   │   │   ├── common.coffee
	│   │   │   ├── example.coffee
	│   │   │   └── index.coffee
	│   │   └── sp
	│   │        ├── common.coffee
	│   │        ├── example.coffee
	│   │        └── index.coffee
	│   ├── jade
	│   │   ├── helper
	│   │   │   ├── _meta_facebook.jade
	│   │   │   ├── _meta_twitter.jade
	│   │   │   ├── _mixin.jade
	│   │   │   ├── _script_facebookLike.jade
	│   │   │   └── _script_googleAnalytics.jade
	│   │   ├── pc
	│   │   │   ├── base
	│   │   │   │   ├── _head.jade
	│   │   │   │   └── _layout.jade
	│   │   │   ├── config
	│   │   │   │   ├── _example.jade
	│   │   │   │   └── _index.jade
	│   │   │   └── layout
	│   │   │        ├── common
	│   │   │        │   ├── _footer.jade
	│   │   │        │   ├── _header.jade
	│   │   │        │   └── _sidebar.jade
	│   │   │        └── page
	│   │   │             ├── example.jade
	│   │   │             └── index.jade
	│   │   └── sp
	│   │        ├── base
	│   │        │   ├── _head.jade
	│   │        │   └── _layout.jade
	│   │        ├── config
	│   │        │   ├── _example.jade
	│   │        │   └── _index.jade
	│   │        └── layout
	│   │             ├── common
	│   │             │   ├── _footer.jade
	│   │             │   ├── _header.jade
	│   │             │   └── _sidebar.jade
	│   │             └── page
	│   │                  ├── example.jade
	│   │                  └── index.jade
	│   └── sass
	│        ├── helper
	│        │   ├── __init__.scss
	│        │   ├── _easing.scss
	│        │   ├── _mixin.scss
	│        │   └── _util.scss
	│        ├── pc
	│        │   └── css
	│        │        ├── base
	│        │        │    ├── __init__.scss
	│        │        │    ├── _config.scss
	│        │        │    ├── _default.scss
	│        │        │    └── _reset.scss
	│        │        ├── layout
	│        │        │    ├── __init__.scss
	│        │        │    ├── common
	│        │        │    │    ├── __init__.scss
	│        │        │    │    ├── _footer.scss
	│        │        │    │    ├── _header.scss
	│        │        │    │    ├── _sidebar.scss
	│        │        │    │    └── _wrapper.scss
	│        │        │    └── page
	│        │        │          ├── __init__.scss
	│        │        │          ├── _example.scss
	│        │        │          └── _index.scss
	│        │        └── style.scss
	│        └── sp
	│             └── css
	│                  ├── base
	│                  │    ├── __init__.scss
	│                  │    ├── _config.scss
	│                  │    ├── _default.scss
	│                  │    └── _reset.scss
	│                  ├── layout
	│                  │    ├── __init__.scss
	│                  │    ├── common
	│                  │    │    ├── __init__.scss
	│                  │    │    ├── _footer.scss
	│                  │    │    ├── _header.scss
	│                  │    │    ├── _sidebar.scss
	│                  │    │    └── _wrapper.scss
	│                  │    └── page
	│                  │          ├── __init__.scss
	│                  │          ├── _example.scss
	│                  │          └── _index.scss
	│                  └── style.scss
	└── prepros.cfg