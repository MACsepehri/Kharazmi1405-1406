import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Flex, GlobalStyle } from './assets/css/Base.jsx'
import App from './App.jsx'
import Header from './assets/base/Header.jsx'
import Weight from './project/3/Weight.jsx'
import Density from './project/3/Density.jsx'
import Mass from './project/3/Mass.jsx'
import RoundRender from './project/RoundRender.jsx'
import { round_routes, round_input_obj, round_calc } from './assets/data/RoundCalc.jsx'

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
                {/*  */}
                {round_routes.map((route, index) => (
                    <Route
                        key={route[0]}
                        path={`/project/round/${route[0]}`}
                        element={
                            <RoundRender
                                title={route[1]}
                                input_obj={round_input_obj[index]}
                                calc={round_calc[index]}
                            />
                        }/>
                ))}
            </Routes>
        </BrowserRouter>
    </StrictMode>
)