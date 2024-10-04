/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        caskadia : ['Caskasia Cove', 'monospace'],
        satoshi: ['Satoshi', 'monospace'],
        agentOrange: ['AgentOrange', 'monospace']
      }
    },
  },
  plugins: [],
}

