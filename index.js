"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteMpPlugin = void 0;
const glob = require("glob");
const lodash_1 = require("lodash");
function ViteMpPlugin() {
    return {
        name: 'vite-plugin-mp',
        config: c => (0, lodash_1.merge)({
            build: {
                rollupOptions: {
                    input: glob.sync('src/**/*.html').reduce((obj, file) => ({
                        ...obj,
                        [file
                            .split('/')
                            .slice(1)
                            .join('.')
                            .replace(/(\.index)?\.html$/, '')]: file,
                    }), {}),
                    output: {
                        manualChunks: (id, { getModuleInfo }) => {
                            if ([
                                'commonjsHelpers.js',
                                '\x00commonjsHelpers.js',
                                'vite/modulepreload-polyfill',
                            ].includes(id)) {
                                return 'runtime';
                            }
                            if (id.includes('/node_modules/') &&
                                getModuleInfo(id).importers.length > 1) {
                                return id.split('node_modules/')[1].split('/')[0];
                            }
                        },
                    },
                },
            },
        }, c),
    };
}
exports.ViteMpPlugin = ViteMpPlugin;
