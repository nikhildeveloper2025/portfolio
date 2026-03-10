import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0F',
        card: '#13131a',
        accent: '#6C5CE7',
      },
      boxShadow: {
        glow: '0 0 40px rgba(108, 92, 231, 0.35)',
      },
      backgroundImage: {
        radial:
          'radial-gradient(circle at 20% 20%, rgba(108, 92, 231, 0.22), transparent 45%), radial-gradient(circle at 80% 10%, rgba(0, 206, 255, 0.18), transparent 35%)',
      },
    },
  },
  plugins: [],
};

export default config;
