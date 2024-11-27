/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  baseUrl: ".",
  paths: {
    "@components/*": ["src/components/*"],
    "@pages/*": ["src/pages/*"],
    "@client/*": ["src/client/*"],
    "@typesDir/*": ["src/types/*"],
    "@router/*": ["src/router/*"],
    "@directives/*": ["src/directives/*"],
    "@store/*": ["src/store/*"],
    "@assets/*": ["src/assets/*"],
    "@utils/*": ["src/utils/*"],
    "@hooks/*": ["src/hooks/*"],
    "@constants/*": ["src/constants/*"],
  },
  include: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "src/types/**/*.d.ts",
  ],
};
