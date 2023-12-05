/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add dvh (dynamic viewport height) to tailwind
      // on mobile devices , 100vh does not account for
      // address bar and any other control bars on the screen
      // resulting in a scrollable page
      // 100dvh fixes this issue
      // we also keep 100vh as fallback for brwsers that do not support 100dvh
      height: {
        screen: ["100vh", "100dvh"],
      },
      minHeight: {
        screen: ["100vh", "100dvh"],
      },
      maxHeight: {
        screen: ["100vh", "100dvh"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "#FAFAFA",
          "base-200": "#FFFFFF",
          primary: "#633CFF",
          "primary-focus": "#BEADFF",
          "primary-content": "#ffffff",
          secondary: "#737373",
          "secondary-focus": "#D9D9D9",
          error: "#FF3939",
          neutral: "#EEE",
          "--outline-bg": "#EFEBFF",
          ".btn": {
            display: "flex",
            padding: "0.6875rem 1.6875rem",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            gap: "0.5rem",
            "border-radius": "0.5rem",
            "text-transform": "capitalize",
          },

          ".btn-primary": {
            "&:hover": {
              "box-shadow": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
            },
            "&:active": {
              "box-shadow": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
            },
            "&:focus": {
              "box-shadow": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
            },
            "&:disabled": {
              "box-shadow": "none",
              "--tw-border-opacity": "0",
              "--tw-bg-opacity": "1",
              "background-color": "hsla(var(--pf, 0.26))",
              color: "hsla(var(--pc, 1))",
            },
          },
          ".btn-primary.btn-outline": {
            "&:hover": {
              "--tw-bg-opacity": "0.5",
              "background-color": "var(--outline-bg)",
              color: "hsla(var(--p))",
              "box-shadow": "none",
            },
          },
          ".input-bordered": {
            "&:focus": {
              "box-shadow": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
              outline: "none",
            },
          },
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
