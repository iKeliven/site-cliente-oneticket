/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          "100": "#fafafa",
          "200": "#1e1e1e",
          "300": "rgba(0, 0, 0, 0.38)",
          "400": "rgba(0, 0, 0, 0.12)",
          "500": "rgba(255, 255, 255, 0.24)",
        },
        darkorange: "#ff9800",
        chocolate: "#cc6600",
        whitesmoke: {
          "100": "#edf0f2",
          "200": "#e8e9ec",
        },
        slategray: "#5e6b7e",
        dimgray: "#626973",
        darkslategray: "#192b46",
        whitesmoke: "#f3f5f6",
      },
      spacing: {},
      fontFamily: {
        "www-blueticket-com-br-1680x783-default-inter-medium-1356": "Inter",
      },
      borderRadius: {
        sm: "14px",
        "9xl": "28px",
        "61xl": "80px",
        mini: "15px",
        xl: "20px",
      },
    },
    fontSize: {
      mini: "15px",
      "base-1": "15.1px",
      "mini-9": "14.9px",
      "base-3": "15.3px",
      "base-4": "15.4px",
      "mini-8": "14.8px",
      "sm-6": "13.6px",
      "sm-8": "13.8px",
      sm: "14px",
      "sm-1": "13.1px",
      "sm-3": "13.3px",
      "mid-4": "17.4px",
      "sm-5": "13.5px",
      "sm-2": "13.2px",
      "mid-7": "17.7px",
      "mid-3": "17.3px",
      "mid-6": "17.6px",
      "mid-2": "17.2px",
      lgi: "19px",
      "6xl": "25px",
      "smi-9": "12.9px",
      mid: "17px",
      smi: "13px",
      lg: "18px",
      "5xl": "24px",
      "11xl-5": "30.5px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};