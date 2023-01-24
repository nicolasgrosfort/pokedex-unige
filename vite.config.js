import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
    },
    resolve: {
        alias: {
            '@layouts': fileURLToPath(
                new URL('./src/layouts', import.meta.url)
            ),
            '@components': fileURLToPath(
                new URL('./src/components', import.meta.url)
            ),
            '@hooks': fileURLToPath(
                new URL('./src/utils/hooks', import.meta.url)
            ),
            '@styles': fileURLToPath(
                new URL('./src/assets/styles', import.meta.url)
            ),
            '@svg': fileURLToPath(new URL('./src/assets/svg', import.meta.url)),
        },
    },
})
