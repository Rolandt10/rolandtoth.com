import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      ...colors,
      dark: {
        0: "#FFFFFF",
        100: "#D2D6DA",
        200: "#9AA3AC",
        300: "#8F99A3",
        400: "#5C6670",
        500: "#25292D",
        600: "#1C1F22",
        700: "#121416",
        800: "#090A0B",
      },
      light: {
        100: "#F8F9FA",
        200: "#F3F5F7",
        300: "#D0D5DA",
        400: "#4A5259",
        500: "#25292D",
        600: "#1C1F21",
      },
    },
    fontSize: {
      xsm: "0.825rem",
      sm: "0.88125rem",
      base: "0.9375rem",
      lg: "1rem",
      xl: "1.06875rem",
      "2xl": "1.1375rem",
      "3xl": "1.2125rem",
      "4xl": "1.29375rem",
      "5xl": "1.38125rem",
    },
    fontFamily: { inter: ["Inter", "system-ui", "sans-serif"] },
  },
  plugins: [],
};
