/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: {
          DEFAULT: "hsl(var(--border))",
          primary: "var(--border-primary-color)",
        },
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
        // custome color
        navbar: {
          DEFAULT: "var(--nav-bar-background)",
          primary: "var(--nav-bar-background)",
        },
        background: {
          DEFAULT: "var(--pink-primary)",
          secondary: "rgba(var(--pink-secondary))",
        },
        text: {
          DEFAULT: "var(--text-default)",
          primary: "var(--text-primary-color)",
          secondary: "var(--text-secondary-color)",
        },
        textHover: {
          DEFAULT: "var(--text-default)",
          primary: "var(--text-primary-color)",
          secondary: "var(--text-secondary-color)",
        },
        content: {
          DEFAULT: "var(--content-color)",
          primary: "var(--content-color)",
        },
        scroll: {
          DEFAULT: "var(--scroll-bg)",
          primary: "var(--scroll-bg)",
        },
        background: {
          DEFAULT: "var(--background-primary-color)",
          primary: "var(--background-primary-color)",
        },
        company: {
          DEFAULT: "var(--company-primary-color)",
          primary: "var(--company-primary-color)",
        },
        violet: {
          DEFAULT: "var(--violet-primary-color)",
          primary: "var(--violet-primary-color)",
        },
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
        "profile-animate": {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "profile-animate": "profile-animate 4s ease-in-out infinite",
      },
      boxShadow: {
        "3xl": "inset 0 0 0 9px rgba(255, 255, 255 / 30%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
