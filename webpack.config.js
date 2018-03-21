
const isProd = process.env.NODE_ENV === 'production'

// debugビルドかどうかnpm scriptの引数で判定
const DEBUG = !process.argv.includes('-p')
console.log('DEBUG=' + DEBUG)

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: DEBUG ? 'development' : 'production',

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/main.ts',
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [
            '.ts',
            '.vue',
            '.js'
        ],
        // Webpackで利用するときの設定
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
