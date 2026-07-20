import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const plugins = [react(), tailwindcss()]

  try {
    //  Vite source tags plugin typing
    const m = require('./.vite-source-tags.js')
    plugins.push(m.sourceTags())
  } catch {
    // Ignore if source tags file not exists
  }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_'])
  const processEnvDefines: Record<string, string> = {}

  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value)
  }

  return {
    plugins,
    base: mode === 'production' ? '/BAMCo/' : '/',
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
  }
})
