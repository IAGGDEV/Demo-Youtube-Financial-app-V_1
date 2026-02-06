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
                // Updated colors from the Reports dashboard design
                primary: "#0b3fda",
                "background-light": "#f5f6f8",
                "background-dark": "#101422",
                "card-dark": "#1A1D24",
                "text-secondary": "#909fcb",
                success: "#07883b", // Kept just in case, though design uses emerald-500
                danger: "#d32f2f", // Kept, though design uses rose-500
                "border-light": "#e5e7eb",
                "border-dark": "#2d3748",
            },
            fontFamily: {
                // Updated to Manrope as requested
                display: ["Manrope", "sans-serif"],
                sans: ["Manrope", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px"
            },
        },
    },
    plugins: [],
};
export default config;
