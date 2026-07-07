# Pinzhen Web Source

Pinzhen Li のポートフォリオ Web サイトのソースコードです。建築、パフォーマンス空間、インスタレーション、展示、彫刻、ドローイング、リサーチを横断する制作活動を、作品一覧・ギャラリー・詳細ページとして整理しています。

このリポジトリは公開用に整理したソース版です。プロジェクトは現在も継続中です。

## 公開サイト（暫定）

https://lcferstx21.github.io/pinzhen/

## 担当範囲

- プロジェクトマネジメント
- コンセプト定義・情報設計
- UI/UX とビジュアルデザイン
- React / TypeScript によるフロントエンド実装
- 作品データ、画像、インタラクションの統合
- レスポンシブ調整、ビルド確認、公開用リポジトリ整理

## 主な機能

- スクロールとクリックで表情が変わる Info ページ
- 画像を空間的に配置した Gallery ページ
- 作品をタグ・年別に一覧できる Index ページ
- 作品ごとのテキスト、画像、映像を表示する Detail ページ
- カスタムカーソル、画像フェードイン、静的ホスティング向けの HashRouter 構成

## 技術スタック

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーは通常 `http://localhost:5173/` で起動します。

## コマンド

```bash
npm run dev      # 開発サーバーを起動
npm run build    # TypeScript チェックと本番ビルド
npm run preview  # ビルド結果をローカル確認
npm run lint     # ESLint を実行
```

## ディレクトリ構成

```text
src/
  components/      共通 UI とインタラクション
  data/            作品データ
  pages/           Info / Gallery / Index / Detail ページ
public/
  img/             ギャラリー画像
  imgPrj/          作品詳細画像・映像
  imgPuppet/       Info ページ用ビジュアル素材
```

## 公開用メモ

- `node_modules`、`dist`、`.DS_Store` は Git 管理対象外です。
- `.env` などの環境変数ファイル、サーバー設定、デプロイ設定は含めていません。
- 画像・文章・作品情報はポートフォリオ表示のための素材です。二次利用は想定していません。
- 静的ホスティング先に合わせる場合は、必要に応じて `vite.config.ts` の `base` を調整してください。

## ステータス

進行中。作品情報、表示演出、モバイル体験、パフォーマンス最適化を継続的に改善しています。
