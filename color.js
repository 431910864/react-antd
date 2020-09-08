const path = require('path');
const fs = require('fs');
// const { generateTheme, getLessVars } = require('../../index');
const { generateTheme, getLessVars } = require('./server/antd-theme-generator');

const theDarkVars = { ...require('./src/stores/color/dark.json')};
const theLightVars = { ...require('./src/stores/color/light.json')};
const themeVariables = getLessVars(path.join(__dirname, './src/styles/vars.less'))
// const defaultVars = getLessVars('./node_modules/antd/lib/style/themes/default.less')
const darkVars = { ...getLessVars('./node_modules/antd/lib/style/themes/dark.less'), '@primary-color': themeVariables['@primary-color'] };
const lightVars = { ...getLessVars('./node_modules/antd/lib/style/themes/compact.less'), '@primary-color': themeVariables['@primary-color'] };
fs.writeFileSync('./src/color/dark.json', JSON.stringify(darkVars));
fs.writeFileSync('./src/color/light.json', JSON.stringify(lightVars));
fs.writeFileSync('./src/color/theme.json', JSON.stringify(themeVariables));


const options = {
    stylesDir: path.join(__dirname, './src'),
    antDir: path.join(__dirname, './node_modules/antd'),
    varFile: path.join(__dirname, './src/styles/vars.less'),
    themeVariables: Array.from(new Set([
        ...Object.keys(darkVars),
        ...Object.keys(lightVars),
        ...Object.keys(themeVariables),
        ...Object.keys(theDarkVars),
        ...Object.keys(theLightVars),
    ])),
    outputFilePath: path.join(__dirname, './public/color.less'),
}
// fs.writeFileSync('./src/color/config.json', JSON.stringify(options));

generateTheme(options).then(less => {
    console.log('Theme generated successfully');
})
    .catch(error => {
        console.log('Error', error);
    });