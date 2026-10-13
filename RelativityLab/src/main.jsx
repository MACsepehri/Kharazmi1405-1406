import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import MainHeader from './assets/Header.jsx'
import { GlobalStyle } from './assets/Base.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <MainHeader />
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/" element={<App />} />
                <Route path="/relativity" element={<App />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)