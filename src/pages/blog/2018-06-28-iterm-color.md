---
path: "iterm-color/"
templateKey: blog-post
title: 【iTerm2】おすすめのカラースキームとカラースキームを適用する方法
date: 2018-06-28T05:43:02.532Z
description: iTerm2のおすすめのカラースキームと、カラースキームを適用する方法をご紹介します！ おすすめのカラースキーム いろいろとカラースキームを試してみて、良いと思ったカラースキームをご紹介します！
tags:
  - プログラミング
---
![アイキャッチ](/img/post/20180628/20180628eyecatch-min.png)

今回はiTerm2のおすすめのカラースキームと、カラースキームを適用する方法をご紹介します！

## おすすめのカラースキーム
いろいろとカラースキームを試してみて、良いと思ったカラースキームをご紹介します！

### 1. Japanesque

![Japanesque](/img/post/20180628/japaneseque-min.png)

Japanesqueは、日本の伝統的な色で構成されているカラースキームです。

淡い雰囲気がとてもキレイで見やすく、私は現在このカラースキームを適用しています！

### 2. Iceberg-iTerm2

![Iceberg-iTerm2-min](/img/post/20180628/Iceberg-iTerm2-min.png)

Iceberg-iTerm2は、ダークブルーで統一されているカラースキームです。

「南極からやってきたカラースキーム」というキャッチコピーが個人的に好きです。

### 3. thayer-bright-iTerm

![Iceberg-iTerm2-min](/img/post/20180628/thayer-bright-iTerm-min.png)

thayer-bright-iTermは、ビビッドな色合いのカラースキームです。

「やるぞ！」というやる気がみなぎるようなカラーだと思います。

### 4. Smyck-Color-Scheme

![Iceberg-iTerm2-min](/img/post/20180628/Smyck-Color-Scheme-min.png)

Smyck-Color-Schemeは、目に優しい色にこだわって作られているカラースキームです。

長時間見ていても疲れない、かつ、とてもきれいな配色ですね。    

ほかにもカラースキームはたくさんあります！

iTerm2-Color-Schemesにカラースキームがまとめられているので、ぜひお気に入りのカラースキームを探してみてください。


## カラースキームの導入方法
それでは、カラースキームをiTerm2に適用させる方法をご紹介します！

今回は淡い雰囲気で見やすい「Japanesque」というカラースキームを導入していこうと思います！  
ほかのカラースキームの場合も手順は同じなので、参考にしてみてください。

### 1. Japanesqueをダウンロードする
Japanesqueの設定ファイルはGitHubで公開されています。  
https://github.com/aereal/dotfiles

こちらのリポジトリをcloneするか、zipファイルをダウンロードしましょう。


cloneする際は
```
$ git clone git@github.com:aereal/dotfiles.gitCopy
```


Zipファイルでダウンロードする場合は、「Download ZIP」をクリックしてください。

![GitHub](/img/post/20180628/color1-min.png)


ダウンロードできたら準備完了です！

### 2. iTerm2の設定からカラースキームを追加
それではiTerm2にカラースキームを追加しましょう！

iTerm2を立ち上げて、「iTerm2 > Preferences > Profiles > Colors > Color Presets」をクリックします。

![iTerm2](/img/post/20180628/color2-min.png)

プルダウンの中にある「import…」をクリックします。

ここで、先ほどダウンロードしてきたJapanesqueのitermのカラースキーム設定ファイルを選択します。  
設定ファイルは、「dotfiles/colors/Japanesque/」下にある「Japanesque.itermcolors」です。

ほかのカラースキームの場合も「.itermcolors」という拡張子のファイルを探してインポートしましょう！

![iTerm2](/img/post/20180628/color3-min.png)


これでimport完了です！

「Colors Presets」のプルダウンの中から「Japanesque」を選択します。

![iTerm2](/img/post/20180628/color4-min.png)

これでiTerm2にカラースキーム「Japanesque」が適用されました！

## おわりに
iTerm2は割と長い時間触れることが多いので、見やすい色にすることは結構大事だと思います。

スクリーンショットでカラースキームを見て「この色良い！」と思っても、実際に導入してみると何か違う…ということが起こりがちなので、いろいろ試してみて好きな色を見つけてみてください！