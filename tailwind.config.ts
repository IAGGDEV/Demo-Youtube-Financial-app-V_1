import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#FAC638",
                "primary-dark": "#0f4bc4",
                "background-light": "#f8f8f5",
                "background-subtle": "#f8f9fc",
                "background-dark": "#231e0f",
                "background-dark-subtle": "#1a2234",
                success: "#07883b",
                danger: "#d32f2f",
                "text-main": "#0d121b",
                "text-secondary": "#4c669a",
                "border-light": "#e5e7eb",
                "border-dark": "#2d3748",
            },
            fontFamily: {
                display: ["Newsreader", "serif"],
                sans: ["Inter", "sans-serif"],
            },
            boxShadow: {
                soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                nav: "0 -4px 20px -2px rgba(0, 0, 0, 0.03)",
            },
            borderRadius: {
                lg: "1rem",
                xl: "1.5rem",
            },
        },
    },
    plugins: [],
};
export default config;
