import { defineConfig } from 'vite'
// umd支持amd、cmd、cjs、全局变量
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'useResize',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    useResize: 'useResize'
                }
            }
        }
    }
})