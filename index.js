"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteMpPlugin = void 0;
const glob = require("glob");
function ViteMpPlugin() {
    return {
        name: 'vite-plugin-mp',
        config: () => ({
            build: {
                rollupOptions: {
                    input: glob.sync('src/**/*.html').reduce((obj, file) => ({
                        ...obj,
                        [file
                            .split('/')
                            .slice(1)
                            .join('.')
                            .replace(/\.html$/, '')]: file,
                    }), {}),
                    output: {
                        manualChunks: id => {
                            if (id.includes('/node_modules/')) {
                                return id.split('node_modules/')[1].split('/')[0];
                            }
                        },
                    },
                },
            },
        }),
    };
}
exports.ViteMpPlugin = ViteMpPlugin;
