# Codespaces 検証用テンプレート

GitHubのテンプレートから **Open in a codespace** を選び、ブラウザ版VS CodeとFAQプレビューが開くところまでを試すサンプルです。FAQはダミーデータを使い、キー入力なしで検索できます。

## GitHubで試す

1. このフォルダの中身を、公開リポジトリのルートに配置します。`.devcontainer` と `.vscode` も含めてください。
2. リポジトリの **Settings → General** で **Template repository** を有効にします。
3. リポジトリのトップで **Use this template → Open in a codespace** を選びます。
4. ブラウザ版VS Codeが開き、ポート3000の **FAQプレビュー** が起動することを確認します。プレビューが自動表示されない場合は、VS Codeの「ポート」タブから開きます。
5. FAQの検索欄に「見積もり」と入力し、1件に絞り込まれることを確認します。

開発コンテナはNode.js 22を使い、Claude Code拡張を導入します。Codespacesでの確認項目は、ブラウザ版VS Codeの起動、拡張の表示、FAQの自動起動とポート転送です。

GitHub公式の [テンプレートからの起動手順](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template) と [配布リンク・バッジの作り方](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/facilitating-quick-creation-and-resumption-of-codespaces) も参照できます。

## ローカルでプレビューを確認する

このフォルダで `npm run dev` を実行し、[FAQプレビュー](http://localhost:3000/)を開きます。Codespacesからの起動とポート転送は、GitHubに配置した後に上の手順で確認できます。
