module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "action-blue": "var(--action-blue)",
        black: "var(--black)",
        "black-50": "var(--black-50)",
        "dailitycolorswhitewhite-40": "var(--dailitycolorswhitewhite-40)",
        "dark-grey": "var(--dark-grey)",
        "success-green": "var(--success-green)",
        white: "var(--white)",
        "white-10": "var(--white-10)",
        "white-5": "var(--white-5)",
        "white-50": "var(--white-50)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "callout-bold": "var(--callout-bold-font-family)",
        "desktop-h4": "var(--desktop-h4-font-family)",
        "desktop-paragraph": "var(--desktop-paragraph-font-family)",
        "desktop-paragraph-tiny": "var(--desktop-paragraph-tiny-font-family)",
        "mobile-h2": "var(--mobile-h2-font-family)",
        "mobile-h3": "var(--mobile-h3-font-family)",
        "mobile-h4": "var(--mobile-h4-font-family)",
        "mobile-paragraph": "var(--mobile-paragraph-font-family)",
        "mobile-paragraph-bold": "var(--mobile-paragraph-bold-font-family)",
        "mobile-paragraph-small": "var(--mobile-paragraph-small-font-family)",
        "mobile-paragraph-small-bold":
          "var(--mobile-paragraph-small-bold-font-family)",
        "mobile-paragraph-tiny": "var(--mobile-paragraph-tiny-font-family)",
        "mobile-paragraph-tiny-bold":
          "var(--mobile-paragraph-tiny-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "background-blur": "var(--background-blur)",
        "background-blur-20": "var(--background-blur-20)",
        "background-blur-40": "var(--background-blur-40)",
        "dark-background-blur": "var(--dark-background-blur)",
        "drop-shadow": "var(--drop-shadow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
