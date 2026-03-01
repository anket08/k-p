/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                surface: "rgba(255, 255, 255, 0.03)",
                border: "rgba(255, 255, 255, 0.08)",
                primary: "#3b82f6",
                secondary: "#8b5cf6",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
