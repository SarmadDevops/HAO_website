/** @type {import('tailwindcss').Config} */

// Colours come from the CSS custom properties defined in src/index.css,
// which are derived from the HAO logo (maroon, saffron and green).
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: token("primary"),
          dark: token("primary-dark"),
          soft: token("primary-soft"),
        },
        secondary: {
          DEFAULT: token("secondary"),
          dark: token("secondary-dark"),
        },
        accent: {
          DEFAULT: token("accent"),
          soft: token("accent-soft"),
        },
        dark: token("dark"),
        ink: token("ink"),
        light: token("light"),
        surface: token("surface"),
        muted: token("muted"),
        border: token("border"),
        success: token("success"),
        danger: token("danger"),
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
