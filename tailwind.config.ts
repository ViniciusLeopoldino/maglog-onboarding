import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maglog: {
          blue: "#005367", // Azul principal das bordas e ícones
          dark: "#003b49", // Variação mais escura para o fundo/header
          yellow: "#fdb913", // Amarelo dos detalhes e estrelas
          gray: "#f4f4f4",   // Fundo claro para a área de trilha
        },
      },
    },
  },
  plugins: [],
};
export default config;