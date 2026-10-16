/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#111A28',
        'ink-deep': '#0B131F',
        steel: '#94A0B0',
        paper: '#F5F6F2',
        accent: '#3563D6',
        'accent-deep': '#2748A8',
        marker: '#C7F46E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: { content: '80rem' },
    },
  },
  plugins: [],
};
