import { Flex } from "../css/Base";
import { InputBox } from "../css/ProjectStyle";
import { createRoot } from "react-dom/client";

export const calculatePolygonPerimeter = (sides) => {
    const inputs = Array.from(document.getElementsByClassName("width"));

    if (inputs.length === 0) {
        return [null, false];
    }

    const values = inputs.map(input => input.value);

    if (values.some(value => value.trim() === "" || !Number.isFinite(Number(value)) || Number(value) <= 0)) {
        return [null, false];
    }

    if (values.length === 1) {
        return [Number(values[0]) * sides, true];
    }

    if (values.length !== sides) {
        return [null, false];
    }

    return [values.reduce((sum, value) => sum + Number(value), 0), true];
};

// 

export const round_routes = [
    ['rectangle','مستطیل'],['trapezoid','ذوزنقه'],['square','مربع'],['hexagon','شش ضلعی'],
    ['octagon','هشت ضلعی'],['triangle','مثلث'],['parallelogram','متوازی اضلاع'],['circle','دایره']

]

export const round_input_obj = [
    <div className="calc-inputs">
        <InputBox type="number" id="width" placeholder="طول" />
        <br /><br />
        <InputBox type="number" id="length" placeholder="عرض" />
    </div>,


    <div className="calc-inputs">
        <Flex>
            <InputBox type="number" id="small-base" placeholder="قاعده کوچک" />
            <InputBox type="number" id="large-base" placeholder="قاعده بزرگ" />
        </Flex>

        <br /><br />

        <Flex>
            <InputBox type="number" id="left-side" placeholder="ساق چپ" />
            <InputBox type="number" id="right-side" placeholder="ساق راست" />
        </Flex>
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="width" placeholder="طول" />
    </div>,

    <div className="calc-inputs">
        <label>
            <input
                type="checkbox"
                onChange={(e) => {
                    const container = document.getElementById("width-inputs");
                    const count = e.target.checked ? 6 : 1;

                    container.replaceChildren();

                    for (let i = 0; i < count; i += 3) {
                        const group = document.createElement("div");
                        const root = createRoot(group);

                        root.render(
                            <Flex>
                                {Array.from(
                                    { length: Math.min(3, count - i) },
                                    (_, j) => (
                                        <InputBox
                                            key={i + j}
                                            type="number"
                                            className="width"
                                            placeholder={`طول ${i + j + 1}`}
                                        />
                                    )
                                )}
                            </Flex>
                        );

                        container.appendChild(group);
                    }
                }}
            />
            6 ورودی
        </label>

        <br /><br />

        <div id="width-inputs">
            <Flex>
                <InputBox type="number" className="width" placeholder="قطر" />
            </Flex>
        </div>
    </div>,

    <div className="calc-inputs">
        <label>
            <input
                type="checkbox"
                onChange={(e) => {
                    const container = document.getElementById("width-inputs");
                    const count = e.target.checked ? 8 : 1;

                    container.replaceChildren();

                    for (let i = 0; i < count; i += 3) {
                        const group = document.createElement("div");
                        const root = createRoot(group);

                        root.render(
                            <Flex>
                                {Array.from(
                                    { length: Math.min(3, count - i) },
                                    (_, j) => (
                                        <InputBox
                                            key={i + j}
                                            type="number"
                                            className="width"
                                            placeholder={`طول ${i + j + 1}`}
                                        />
                                    )
                                )}
                            </Flex>
                        );

                        container.appendChild(group);
                    }
                }}
            />
            8 ورودی
        </label>

        <br /><br />

        <div id="width-inputs">
            <Flex>
                <InputBox type="number" className="width" placeholder="طول ۱" />
            </Flex>
        </div>
    </div>,

    <div className="calc-inputs">
        <label>
            <input
                type="checkbox"
                onChange={(e) => {
                    const container = document.getElementById("width-inputs");
                    const count = e.target.checked ? 3 : 1;

                    container.replaceChildren();

                    for (let i = 0; i < count; i += 3) {
                        const group = document.createElement("div");
                        const root = createRoot(group);

                        root.render(
                            <div>
                                <Flex>
                                    {Array.from(
                                        { length: Math.min(3, count - i) },
                                        (_, j) => (
                                            <InputBox
                                                key={i + j}
                                                type="number"
                                                className="width"
                                                placeholder={`طول ${i + j + 1}`}
                                            />
                                        )
                                    )}
                                </Flex><br />
                            </div>
                        );

                        container.appendChild(group);
                    }
                }}
            />
            3 ورودی
        </label>

        <br /><br />

        <div id="width-inputs">
            <Flex>
                <InputBox type="number" className="width" placeholder="طول ۱" />
            </Flex>
        </div>
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="width" placeholder="ضلع 1" /><br /><br />
        <InputBox type="number" id="height" placeholder="ضلع 2" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="diameter" placeholder="طول" /><br /><br />
    </div>
];

export const round_calc = [
    () => {
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
    },

    () => {
        const ids = ["small-base", "large-base", "left-side", "right-side"];
        const values = ids.map(id => document.getElementById(id).value);

        if (values.some(value => value === "" || Number(value) <= 0)) {
            return [null, false];
        }

        return [values.reduce((sum, value) => sum + Number(value), 0), true];
    },

    () => {
        const width = Number(document.getElementById('width').value);

        if (
            document.getElementById("width").value === "" ||
            width <= 0
        ) {
            return [null, false];
        }

        return [width*4,true]
    },

    () => calculatePolygonPerimeter(6),
    () => calculatePolygonPerimeter(8),
    () => calculatePolygonPerimeter(3),

    () => {
        let width = Number(document.getElementById('width').value);
        let height = Number(document.getElementById('height').value);

        if (
            document.getElementById("width").value === "" ||
            document.getElementById("height").value === "" ||
            width <= 0 ||
            height <= 0
        ) {
            return [null, false];
        }

        return [2*width + 2*height, true]
    },

    () => {
        let diameter = Number(document.getElementById('diameter').value);

        if (
            document.getElementById("diameter").value === "" ||
            diameter <= 0
        ) {
            return [null, false];
        }

        return [diameter*Math.PI, true]
    }
];