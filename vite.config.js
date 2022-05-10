import fs from 'vite-plugin-fs';

export default {
    plugins: [fs()],
    build: {
        rollupOptions: {
            external: [
                "vite-plugin-fs"
            ]
        }
    }
};
