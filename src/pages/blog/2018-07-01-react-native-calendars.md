---
path: "react-native-calendars/"
templateKey: blog-post
title: 【React Native】react-native-calendarsを使ってカレンダーを実装する方法
date: 2018-07-01
description: React Nativeでカレンダーを実装したい場合、「react-native-calendars」というライブラリを使うと簡単に実装することができます。 今回はreact-native-calendarsの使い方や様 ... 
tags:
  - プログラミング
---
![アイキャッチ](/img/post/20180701/20180701eyecatch-min.png)

React Nativeでカレンダーを実装したい場合、「[react-native-calendars](https://github.com/wix/react-native-calendars)」というライブラリを使うと簡単に実装することができます。

今回はreact-native-calendarsの使い方や様々なオプションをご紹介します！

## react-native-calendarsを導入する

まずはreact-native-calendarsをインストールしましょう！

```
$ yarn add react-native-calendars
```

もしくは

```
$ npm install --save react-native-calendarsCopy
```

を実行してインストールします。

## react-native-calendarsの基本的な使い方

react-native-calendarsでは、以下の3つのコンポーネントが用意されています。

- Calendar：基本のカレンダー
- CalendarList：Calendarコンポーネントがリストになった、スクロールできるカレンダー
- Agenda：日付をタップすると予定が表示されるような高機能なカレンダー

今回はCalendarコンポーネントのオプションやカスタマイズ方法についてご紹介します！

### Calendarコンポーネントについて

まず、デフォルトのCalendarをアプリに表示させてみます。

App.jsに以下のコードを記述します。

```
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Calendar />
      </View>
    );
  }
}
```

（Calendarコンポーネントだけをreturnすると、iOSシミュレータのステータスバーと被ってしまうので、上部に余白を設けました。）

**Calendarコンポーネントのすべてのパラメータはオプション**なので、これだけでカレンダーが表示されます。

<div style="width: 300px">
<img src="/img/post/20180701/react-native-calendars1.png" />
</div>

それでは、react-native-calendarsのオプションを見ていきましょう！

### Calendarコンポーネントのオプション

Calendarコンポーネントには様々なオプションが用意されています。

#### 1. カレンダー自体のオプションについて

現在の日付を指定したり、指定した前後の日付をグレー表示にしたりと、カレンダー自体に対して豊富なオプションが用意されています。

<div style="width: 300px; margin-bottom: 20px;">
<img src="/img/post/20180701/react-native-calendars2.png" />
</div>

```
<Calendar
  current={'2018-06-01'}
  minDate={'2018-06-01'}
  maxDate={'2018-06-15'}
  onDayPress={(day) => {console.log('selected day', day)}}
/>
```

「onDayPress」でタップ時のイベントを登録できるのはとても便利ですね！

ほかにも週の初めを月曜日から開始するように変更したり、曜日名を非表示にするオプションなどもあります。

詳しくは[react-native-calendarsのbasic-parameters](https://github.com/wix/react-native-calendars#basic-parameters)をご覧ください！

#### 2. 日付の背景に色を付ける＆日付の下にドットマークを付ける
背景に色を付けたり日付の下にドットマークを付ける場合は、「marketDates」オプションを使ってマークする日付とそのスタイルなどを指定します。

<div style="width: 300px; margin-bottom: 20px;">
<img src="/img/post/20180701/react-native-calendars3.png" />
</div>

```
<Calendar
  markedDates={{
    '2018-07-02': { selected: true }, // 日付の背景に色（デフォルト）がつく
    '2018-07-03': { marked: true },  // 日付の下にドット（デフォルト）がつく
    '2018-07-04': { selected: true, marked: true }, // selectedもmarkedもtrueの場合、ドットマークは白になる
    '2018-07-05': { selected: true, selectedColor: 'green' },　// 背景の色を変更したいときはselectedColorを指定する
    '2018-07-06': { marked: true, dotColor: 'red' }, // ドット色を変更したいときはdotColorを指定する
  }}
/>
```

#### 3. 日付にドットを複数つける
ドットを複数付けたいときは、「markedDates」の「dots」配列を使うのに加え、「markingType」を指定します。

<div style="width: 300px; margin-bottom: 20px;">
<img src="/img/post/20180701/react-native-calendars4.png" />
</div>

````
const red = {key:'red', color: 'red', selectedDotColor: 'blue'};
const blue = {key:'blue', color: 'blue', selectedDotColor: 'blue'};
const green = {key:'green', color: 'green'};

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Calendar
          markedDates={{
            '2018-07-02': { dots: [red, blue, green] },
            '2018-07-03': { dots: [red, blue, green], selected: true, selectedColor: 'orange' },
          }}
          markingType={'multi-dot'}
        />
      </View>
    );
  }
}
````

#### 4. 複数の日付にまたがって背景に色を付ける
複数の日付にまたがって背景に色を付けたい場合は、「startingDay・endingDay」を使い、「markingType」に「period」を指定します。

```
<Calendar
  markedDates={{
    '2018-07-02': {startingDay: true, color: 'green', textColor: 'white'}, // textColorで日付の文字色を指定
    '2018-07-03': {endingDay: true, color: 'green', textColor: 'white'},
  }}
  markingType={'period'}
/>
```

「endingDay」を指定した日付にも「color」を指定してあげないと、背景色が付かないので注意してください。

#### 5. その他の日付のオプション

そのほかにも日付に対するオプションはいろいろあります。

- activeOpacity：タップしたときの日付の透け具合。0にするとタップしたときに完全に消え、1にすると透けなくなる
- disabled：trueにすると日付が灰色になる
- disableTouchEvent：trueにするとタップイベントが効かなくなる

[react-native-calendarsのDate marking](https://github.com/wix/react-native-calendars#date-marking)以降にいろいろなオプションが載っているので、確認してみてください！

## 見た目をカスタマイズする方法
カレンダーの見た目をカスタマイズするには、Calendarコンポーネントにオプションを渡してあげます。

<div style="width: 300px; margin-bottom: 20px;">
<img src="/img/post/20180701/react-native-calendars5.png" />
</div>

```
<Calendar
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  }}
  theme={{
    selectedDayBackgroundColor: '#000000',
    selectedDayTextColor: '#ffffff',
  }}
  markedDates={{
    '2018-07-02': {selected: true},
  }}
/>
```

- style：カレンダー自体の見た目のスタイルを指定する
- theme：カレンダーのパーツの特定のスタイルを書き換える

さらに高度なカスタマイズをする際は、デフォルトのstyle.jsファイルを上書きする必要があります。

詳細は[react-native-calendarsのadvanced-styling](https://github.com/wix/react-native-calendars#advanced-styling)をご覧ください。

## まとめ

今回はreact-native-calendarsの使い方をご紹介しました！

react-native-calendarsはとても簡単にカレンダーを実装でき、しかも渡せるパラメータがいろいろあってカスタマイズも容易にできます。

デフォルトの見た目がとても綺麗なのも良いところですね。

React Nativeでのアプリ開発でカレンダーを実装したいときはぜひ使ってみてください！

