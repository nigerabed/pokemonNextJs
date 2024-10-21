/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

       
        normal: "#AAA67F",
        fighting: "#C12239",
        flying: "#A891EC",
        poison: "#A43E9E",
        ground: "#DEC16B",
        rock: "#B69E31",
        bug: "#A7B723",
        ghost: "#70559B",
        steel: "#B7B9D0",
        fire: "#F57D31",
        water: "#6493EB",
        grass: "#74CB48",
        electric: "#F9CF30",
        psychic: "#FB5584",
        ice: "#9AD6DF",
        dragon: "#7037FF",
        dark: "#75574C",
        fairy: "#E69EAC",
        stellar: "#B7B9D0",
        unknown: "bg-gray-500", 
        
      },
      boxShadow: {
        'inner-strong': 'inset 3px 3px 7px rgba(0, 0, 0.5, 0.5)', // Stronger inner shadow
      }
    },
  },
  plugins: [],
};
