import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './assets/css/Base.jsx'
import App from './App.jsx'
import Header from './assets/base/Header.jsx'
import Weight from './project/3/Weight.jsx'
import Density from './project/3/Density.jsx'
import Mass from './project/3/Mass.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Header />

            <Routes>
                <Route path="/" element={<App />} />
                {/*  */}
                <Route path="/project/weight" element={<Weight />} />
                <Route path="/project/density" element={<Density />} />
                <Route path="/project/mass" element={<Mass />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)