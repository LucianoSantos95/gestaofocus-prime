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
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-dom') || id.includes('react/') || id.includes('scheduler')) return 'react-vendor';
          if (id.includes('react-router')) return 'router';
          if (id.includes('@radix-ui')) return 'radix';
          if (id.includes('@tanstack/react-query')) return 'query';
          if (id.includes('@supabase')) return 'supabase';
          if (id.includes('lucide-react')) return 'icons';
          if (id.includes('react-helmet-async')) return 'helmet';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('papaparse')) return 'csv';
          return 'vendor';
        },
      },
    },
  },
}));
