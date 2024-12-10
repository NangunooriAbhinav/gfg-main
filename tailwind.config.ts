import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#318D44",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
        },
        purple: "#A729F5",
        darkNavy: "#313E51",
        navy: "#3B4D66",
        greyNavy: "#626C7F",
        lightBluish: "#ABC1E1",
        lightGrey: "#F4F6FA",
        green: "#26D782",
        red: "#EE5454",
        btnHover: "#D394FA",
      },
      fontFamily: {
        body: ["Inter"],
        sans: ["Inter"],
      },
      backgroundImage: {
        backgroundDesktopDark: "url('/pattern-background-desktop-dark.svg')",
        backgroundDesktopLight: "url('/pattern-background-desktop-light.svg')",
        backgroundMobileDark: "url('/pattern-background-mobile-dark.svg')",
        backgroundMobileLight: "url('/pattern-background-mobile-light.svg')",
        backgroundTabletDark: "url('/pattern-background-tablet-dark.svg')",
        backgroundTabletLight: "url('/pattern-background-tablet-light.svg')",
      }
    },
  },
  plugins: [],
};
export default config;
