/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir tus archivos
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      colors: {
        prussianBlue: {
          100: '#046E8F',  // Color más claro (Cerulean Light)
          200: '#2B8FA9',  // Blue (Munsell)
          300: '#38AECC',  // Pacific Cyan
          400: '#1D6F86',  // Cerulean (Default)
          500: '#287189',  // Cerulean Medio
          600: '#0E516B',  // Midnight Green
          700: '#134359',  // Indigo Dye
          800: '#183446',  // Azul Prusiano Oscuro
          900: '#022F40',  // Azul Prusiano más oscuro (Default)
        },
        celadon: {
          100: '#B3DFB8', // Más claro
          200: '#A1CCA5',
          300: '#98C39E',
          400: '#8FB996',
          500: '#709775', // Color base
          600: '#415D43',
          700: '#354D37',
          800: '#293D2B',
          900: '#111D13', // Más oscuro
        },
      },
    },
    screens: {
      // Breakpoints personalizados
      xs: '380px', // Pantallas extra pequeñas (smartphones compactos)
      sm: '640px', // Pantallas pequeñas
      md: '768px', // Pantallas medianas (tablets)
      lg: '1024px', // Pantallas grandes (laptops o pantallas mayores)
    },
  },
  plugins: [],
};
