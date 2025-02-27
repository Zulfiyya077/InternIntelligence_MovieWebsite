import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); // Üçüncü argüman '' önemli

  return {
    plugins: [react()],
    server: {
      port: 5180, // veya tercih ettiğiniz bir port
    },
  };
});