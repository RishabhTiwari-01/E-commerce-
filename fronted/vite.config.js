// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
  
// })



// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // 1. Agar aapka frontend 5175 par hai, toh yeh confirm karein
  server: {
    port: 5175, 
    
    // 2. Yeh hai sabse zaroori code block: PROXY
    proxy: {
      // Jab bhi frontend se '/api' se shuru hone wali request aayegi...
      '/api': {
        // ...woh automatically is URL par bhej di jayegi.
        target: 'http://localhost:4000', 
        changeOrigin: true, // Zaroori hai Cross-Origin request ke liye
        secure: false, // Agar aap http use kar rahe hain toh
      },
    },
  },

});
