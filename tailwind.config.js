/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/pages/Auth.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/Music/Music.jsx",
    "./src/pages/Tickets/Tickets.jsx",
    "./src/pages/Music/components/AudioUploadForm.jsx",
    "./src/pages/Music/components/VideoUploadForm.jsx",
    "./src/pages/Tickets/components/TicketUploadForm.jsx",
    "./src/pages/Tickets/components/TicketTagPoint.jsx",
    "./src/pages/LogoutComponent/LogoutComponent.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

