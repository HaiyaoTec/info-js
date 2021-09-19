const path = require("path")
const cwd = process.cwd();
let pkgManifest = require(path.join(cwd, 'package.json'));
module.exports = function () {
    let appVersion = pkgManifest.version
    let appPackageName = pkgManifest.name
    let appMode = undefined
    const virtualFileId = '@infoJs-plugin-virtual-module'
    return {
        name: 'infoJs-plugin', // 必须的，将会在 warning 和 error 中显示
        config: (UserConfig, {mode}) => {
            appMode = mode;
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
                "appMode":"${appMode}",
                }
                `
            }
        }
    }

}

