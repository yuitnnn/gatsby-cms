---
path: "ios-react-native-icon-settings/"
templateKey: blog-post
title: 【iOS】React Nativeのアプリにアイコンを設定する方法
date: 2018-07-04T05:43:02.532Z
description: React Nativeで開発しているアプリにアイコンを設定する方法と、複数サイズのアイコンを自動してくれる便利な「App Iconizer」をご紹介します！
tags:
  - プログラミング
---
![アイキャッチ](/img/post/20180704/20180704eyecatch-min.png)

アプリの大事な顔であるアイコン。

今回はReact Nativeで開発しているアプリにアイコンを設定する方法と、複数サイズのアイコンを自動してくれる便利な「App Iconizer」をご紹介します！

※今回説明していくXcodeのバージョンは9.4.1です。

## React Nativeで作ったアプリにアイコンを設定する方法

アプリのアイコンはXcodeから設定することができます。

今回は「goalapp」という名前のアプリのアイコンを設定していきます。  
まずはXcodeで「goalapp.xcworkspace」を開きましょう。

```
$ cd goalapp
$ cd ios && open goalapp.xcworkspace
```

Xcodeが起動したら「TARGETS」を選択し、「General」タブの中にある「App Icons and Launch Images > App Icons Source」の右側にある矢印ボタンをクリックします。

![アイキャッチ](/img/post/20180704/ios-react-native-icon-settings4.png)

そうするとアプリのアイコンを設定する画面に遷移します。

![アイキャッチ](/img/post/20180704/ios-react-native-icon-settings5.png)

あとはこの点線の四角の枠内に画像をドロップすると、アイコンが設定できます。

### アプリのアイコン画像のサイズについて

iOSのアプリでは、用途に合わせて様々なサイズのアイコンを用意する必要があります。

アプリのアイコンを設定する画面には、

- 実際にiOS端末で表示される画像サイズ
- 設定する画像のサイズ（表示される画像サイズの「2X」か「3X」）

が表示されています。

![アイキャッチ](/img/post/20180704/ios-react-native-icon-settings6.png)

合っていないサイズのアイコンを設定すると、以下のように警告マークが出ます。  
サイズも教えてくれるのでわかりやすいですね！

![アイキャッチ](/img/post/20180704/ios-react-native-icon-settings7.png)


## 各サイズのアイコン画像を「App Iconizer」で一括生成する

とはいえこんなたくさんのサイズのアイコンを1つ1つ作るなんて面倒ですよね…。

そこで便利なのが、iOS・Androidアプリのアイコン画像を一括生成してくれるサイト「[App Iconizer](https://appiconizer.com/)」です！

「App Iconizer」は、1024px * 1024pxのアイコン画像をアップロードするだけで、複数サイズのアイコンを自動で生成してくれます。

それでは使い方を見てみましょう！

### 画像をアップロードする

App Iconizerにアクセスすると、アイコン画像をアップロードする画面が出てきます。

1024px * 1024pxのアイコン画像をドラッグ&ドロップするか、「BROWSE IMAGE」から選択しましょう。

![アイキャッチ](/img/post/20180704/ios-react-native-icon-settings1.png)

アップロードが終わると、iOSとAndroid端末上での見え方を確認することができます。

確認してOKだったら「iOS」を選択してアイコン画像をダウンロードします。

![アイキャッチ](/img/post/20180704/ios-react-native-icon-settings2.png)

ダウンロードしたzipファイルを展開してみると、自動生成された複数サイズのアイコン画像が入っています。

![アイキャッチ](/img/post/20180704/ios-react-native-icon-settings3.png)

あとはこのアイコンを先程のXcodeの画面から設定していくだけでアイコンの設定は終わりです！

アプリアイコンを作成する手間が大幅に省けて、とても便利ですよね！

## まとめ

React Nativeで作ったアプリにアイコン画像を設定する方法をまとめてみました。

最初は「こんなにたくさんのサイズのアイコン画像を用意しなければいけないのか…」と思ったのですが、App Iconizerに助けられました。ぜひアプリのアイコンを生成する際は利用してみてください！