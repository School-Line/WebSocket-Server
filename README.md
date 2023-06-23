# School LINE用 WebSocketサーバー
## そもそもWebSocketとはなんぞや
WebSocketとは、ブラウザとウェブサーバーとの間で双方向通信を行うための通信規格です。 WebSocketでは、サーバー側とユーザー側が常にオンライン状態を維持することによって、双方向通信を可能としています。 そのため、従来の通信規格と比べて、リアルタイムに情報を共有することが可能となりました。

## 使い方
1. [Node.js](https://nodejs.org)をインストールします。インストール方法は自分で調べてください
2. `npm install`コマンドで、必要なパッケージをインストールしてください
3. `node src/index.js`コマンドでサーバーを起動します

サーバーのアドレスは、初期状態なら`ws://localhost:8082`になります

## 関連リンク
[本体](https://github.com/School-Line/Web-Client)<br>
[ダッシュボード](https://github.com/School-Line/Web-Dashboard)

## 参照
[WebSocketとは？WebSocketについて詳しく解説します](https://www.freshvoice.net/knowledge/word/6323/)