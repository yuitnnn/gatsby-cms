---
path: "react-native-user-agent/"
templateKey: blog-post
title: 【React Native】UserAgentを変更する方法【両OS】
date: 2018-07-21T05:43:02.532Z
description: React NativeのWebViewのリクエストのUserAgentを変更したいことがあり、その際にいろいろ調べたことをまとめました。 AndroidからのリクエストでUserAgentを変更する際には、React  ...
tags:
  - プログラミング
---
![アイキャッチ](/img/post/20180721/20180721eyecatch.png)

React NativeのWebViewのリクエストのUserAgentを変更したいことがあり、その際にいろいろ調べたことをまとめました。

AndroidからのリクエストでUserAgentを変更する際には、React NativeのWebViewに用意されているPropsを使えば簡単に指定できます。

問題はiOSで、こちらは AppDelegate.m に追記しなければいけません。  
このiOSでUserAgentを変更する方法がわからず、結構な時間ハマってしまいました…。

それではUserAgentを変更する方法を詳しく見ていきましょう！

## AndroidのUserAgentを変更する方法

AndroidのWebViewでUserAgentを変更する方法は簡単です。  
React NativeのWebViewコンポーネントに標準で用意されている、userAgent に文字列を指定するだけです。

```
const uri = 'https://yuis-webmemo.org/'

<WebView
  source={{ uri }}
  userAgent='userAgent hoge'
/>
```
参考：[WebView · React Native](https://facebook.github.io/react-native/docs/webview#useragent)

Androidの場合はとても簡単にUserAgentを変更することができますね！

## iOSのUserAgentを変更する方法

先程のReact NativeのWebViewのuserAgentはAndroidのみでしか使えません。

iOSの場合は `ios/app_name/`　以下の　`AppDelegate.m` に追記する必要があります。

```
#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import "RNFIRMessaging.h"
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // UserAgentの設定
  NSString *newAgent = @"userAgent hoge";
  NSDictionary *dictionary = [[NSDictionary alloc] initWithObjectsAndKeys:newAgent, @"UserAgent", nil];
  [[NSUserDefaults standardUserDefaults] registerDefaults:dictionary];
  // UserAgentの設定ここまで

...
```

これでUserAgentが `NSString *newAgent = @"userAgent hoge";` で指定した通りになりました！

## まとめ

React NativeでUserAgentを変更する方法についてご紹介しました。

アプリからのアクセスだということを明示的にするためにUserAgentを変更したいときなどにぜひ参考にしてみてください。

個人的に、iosフォルダ以下のファイルをいじるのがまだ怖いので、その辺りも勉強していかなければいけないなーと思いました。