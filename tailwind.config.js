/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            fontFamily: {
                sans: ['Syne', 'sans-serif'],
            },
        },
    },
    plugins: [],
}