//helpAutoGenerate
const path = require('path');
const fs = require('fs/promises');

const base = "d:\\h1mple's data\\hx_utils\\index.d.ts";

fs.readFile(base)
    .then(data => {
        let strList = data.toString().split('\r\n');
        for (let i = 0; i < strList.length; i++) {
            strList[i] = strList[i]
                .replace(/declare module "\S+" {/, '')
                .replace(/^}$/, '')
                .replace(/export = \S+;/, '')
                .replace(/declare var.+;/, '')
                .replace(/declare function.+;/, '')
                .replace('function', 'export function');
        }
        strList.unshift('declare namespace hx_utils {');
        strList.push(`}
            declare module "hx_utils" {
              export = hx_utils
            }`);
        let newData = new Uint8Array(Buffer.from(strList.join('\r\n')));
        fs.writeFile(base, newData);
    })
    .catch(e => {
        console.log(e);
    });
