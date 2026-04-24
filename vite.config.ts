import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
  build: {
    copyPublicDir: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    // Production minification settings
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      output: {
        // Conservative chunking: only split large, stable libraries that don't have
        // circular deps with React. We deliberately avoid splitting recharts/d3 here
        // because that previously caused createContext init crashes.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Keep react ecosystem together to avoid context init issues
            if (
              id.includes('react-router') ||
              id.includes('@tanstack/react-query')
            ) {
              return 'router-query';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
          }
        },
      },
    },
  },
}));
