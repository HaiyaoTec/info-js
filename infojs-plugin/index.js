const path = require("path")
const cwd = process.cwd();
//获取gaia环境变量
let appMode=process?.env?.env;
let pkgManifest = require(path.join(cwd, 'package.json'));
module.exports = function () {
    let appVersion = pkgManifest.version
    let appPackageName = pkgManifest.name
    let viteMode = undefined
    const virtualFileId = '@infoJs-plugin-virtual-module'
    return {
        name: 'infoJs-plugin', // 必须的，将会在 warning 和 error 中显示
        config: (UserConfig, {mode}) => {
            viteMode = mode;
        },
        resolveId(id) {
            if (id === virtualFileId) {
                return virtualFileId
            }
        },
        load(id) {
            if (id === virtualFileId) {
                return `
                export const appInfo = {
                "appVersion":"${appVersion}",
                "appPackageName":"${appPackageName}",
                "viteMode":"${viteMode}",
                "appMode":"${appMode}"
                }
                `
            }
        }
    }

}

