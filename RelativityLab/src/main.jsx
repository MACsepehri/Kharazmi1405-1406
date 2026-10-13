import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import MainHeader from './assets/Header.jsx'
import { GlobalStyle } from './assets/Base.jsx'
import MainFooter from './assets/Footer.jsx'
import Relativity from './assets/Relativity.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <MainHeader />
            <Routes>
                <Route path="*" element={<main><App /></main>} />
                <Route path="/" element={<main><App /><MainFooter /></main>} />
                <Route path="/relativity" element={<main><Relativity /></main>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)