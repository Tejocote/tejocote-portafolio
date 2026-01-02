/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 8s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        "primary-blue": "#0F172A", // Dark Blue
        "secondary-blue": "#283e70", // Medium Blue
      },
    },
    plugins: [require("tailwindcss-animated")],
  },
};
