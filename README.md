# learning-vue-shop

Vue 3の学習のため、LinkedIn Learningの教材で紹介されていた[こちら](https://github.com/LinkedInLearning/vue3-esst-2834032)を追加学習のために変更したもの。
実際に使用することはできない張りぼてECショップです。また、グラフ等のコンポーネントライブラリを試すために無意味な画面を追加しています。

1. Bootstrapを廃止し[Tailwind CSS](https://tailwindcss.com/)に変更
1. 日本語化
1. npmから[pnpm](https://pnpm.io/)に変更
1. 色等見た目を少し変更
1. [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)を導入
1. [Vuex](https://vuex.vuejs.org/ja/)を導入し、カート機能に利用（プロダクトは導入保留の中途半端状態であえて停止）
1. [defineProps](https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits)を導入
1. [vue-chartjs](https://vue-chartjs.org/)を追加
1. [Element Plus](https://element-plus.org/en-US/)の[Radio with button styles](https://element-plus.org/en-US/component/radio.html#button-style)及び[Tree V2 virtualized tree](https://element-plus.org/en-US/component/tree-v2.html)を追加
1. 部分的にTypeScriptを使用
1. イベント処理（ESCキーの押下又はメニュー外のクリックでプルダウンメニューを閉じる）
1. カスタムフックの追加（ホームビューかどうかを検出）

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Compile and Minify for Production

```sh
pnpm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm run lint
```
