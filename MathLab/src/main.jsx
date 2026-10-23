import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './assets/css/Base.jsx'
import App from './App.jsx'
import Header from './assets/base/Header.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <App />
        </BrowserRouter>
    </StrictMode>
)