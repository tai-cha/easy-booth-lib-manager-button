# Easy Booth Lib Manager Button

BOOTHのライブラリ（購入履歴）や商品ページで、隠れているボタンを押しやすくするためのブラウザ拡張機能です。

## 機能

- 商品ページやライブラリページで、「BOOTH Library ManagerでDL」などのボタンが含まれる項目に、赤色の「DL」ボタンを追加します。
- これにより、アコーディオンを開く手間を省けます。

> [!NOTE]
> 現在、BOOTHの言語設定が「日本語」の場合のみ動作します。
> Currently, this extension only works when BOOTH language is set to Japanese.

## インストール方法

### ストアからのインストール（推奨）

> **近日公開予定 / Coming Soon**
>
> 現在、Chrome Web Store および Firefox Add-ons (AMO) への申請準備中です。

### マニュアルインストール

ストアでの公開まで待てない場合や、開発版を使用したい場合は以下の手順でインストールできます。

#### Chrome / Edge / Brave

1. [Releases](https://github.com/taichan/easy-booth-lib-manager-button/releases) から最新の `easy-booth-lib-manager-button.zip` をダウンロード・解凍します。
2. `chrome://extensions` を開きます。
3. 右上の「デベロッパーモード」をONにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダを選択します。

#### Firefox

1. [Releases](https://github.com/taichan/easy-booth-lib-manager-button/releases) から最新の `easy-booth-lib-manager-button.zip` をダウンロードします。
2. `about:debugging#/runtime/this-firefox` を開きます。
3. "Load Temporary Add-on..." をクリックし、ダウンロードしたZIPファイルを選択します。

## 開発

```bash
pnpm install
pnpm dev
# Build
pnpm build
```
