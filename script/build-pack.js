const path = require('path');
const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');

const config = require('./webpack.nomin.conf');
const pkg = require('../package.json');
const rootPath = path.resolve(__dirname, '../');

// 构建全量压缩包
let building = ora('building...');
building.start();
rm(path.resolve(rootPath, 'min', `${pkg.name}.js`), err => {
    if (err) throw err;
    webpack(config, function (err, stats) {
        if (err) throw err;
        building.stop();
        process.stdout.write(
            stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false,
            }) + '\n\n'
        );
        console.log(chalk.cyan(`  ${pkg.name}.js Build complete.\n`));
    });
});
