import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext.tsx'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:000/api/v1"//helps connect frontend and backend
axios.defaults.withCredentials = true;//lets us send cookies


//entry point of the application
const theme = createTheme({typography:{fontFamily:"Roboto Slab,serif", allVariants:{color:"white"}}})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
