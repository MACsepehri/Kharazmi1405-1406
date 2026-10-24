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
import { InputBox } from './assets/css/ProjectStyle.jsx'

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
                <Route
                    path="/project/round/rectangle"
                    element={
                        <RoundRender
                            title="مستطیل"
                            input_obj={
                                <div className="calc-inputs">
                                    <InputBox type="number" id="width" placeholder="طول" />
                                    <br /><br />
                                    <InputBox type="number" id="length" placeholder="عرض" />
                                </div>
                            }
                            calc={() => {
                                const width = Number(document.getElementById("width").value);
                                const length = Number(document.getElementById("length").value);

                                if (
                                    document.getElementById("width").value === "" ||
                                    document.getElementById("length").value === "" ||
                                    width <= 0 ||
                                    length <= 0
                                ) {
                                    return [null, false];
                                }

                                return [(width + length) * 2, true];
                            }}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)