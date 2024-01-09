import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'primary': '#2FA060',
        'grey': '#757575'
      },
      backgroundColor: {
        'primary': '#F6F9F7',
        'button': '#2FA060',
        'orange': '#FF8900',
      },
      borderColor: {
        'primary': '#F6F9F7',
        'green': '#2FA060',
        'login': 'rgba(47, 160, 96, 0.30)',
      },
      boxShadow: {
        'primary': '2px 8px 20px 0px rgba(47, 160, 96, 0.30)',
        'orange_design': '0px 5px 10px 0px rgba(255, 137, 0, 0.20)',
      }
    },
  },
  plugins: [],
}
export default config
