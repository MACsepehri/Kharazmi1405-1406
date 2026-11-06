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

export const round_routes = [
    ['rectangle','مستطیل'],['trapezoid','ذوزنقه'],['square','مربع'],['hexagon','شش ضلعی'],
    ['octagon','هشت ضلعی'],['triangle','مثلث'],['parallelogram','متوازی اضلاع'],['circle','دایره'],
    ['ellipse','بیضی'],['pentagon','پنج ضلعی'],['heptagon','هفت ضلعی'],
    ['nonagon','نه ضلعی'],['decagon','ده ضلعی'],['kite','بادبادک'],
    ['semicircle','نیم‌دایره'],['quarter_circle','ربع دایره']
];

const renderMultipleInputs = (container, count) => {
    container.replaceChildren();

    for (let i = 0; i < count; i += 3) {
        const group = document.createElement("div");
        group.style.marginBottom = "12px";

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
};

const createMultipleInputBox = (count, defaultPlaceholder = "طول ۱") => (
    <div className="calc-inputs">
        <label>
            <input
                type="checkbox"
                onChange={(e) => {
                    const container = document.getElementById("width-inputs");
                    renderMultipleInputs(container, e.target.checked ? count : 1);
                }}
            />
            {count} ورودی
        </label>

        <br /><br />

        <div id="width-inputs">
            <Flex>
                <InputBox
                    type="number"
                    className="width"
                    placeholder={defaultPlaceholder}
                />
            </Flex>
        </div>
    </div>
);

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

    createMultipleInputBox(6, "قطر"),

    createMultipleInputBox(8),

    createMultipleInputBox(3),

    <div className="calc-inputs">
        <InputBox type="number" id="width" placeholder="طول" />
        <br /><br />
        <InputBox type="number" id="height" placeholder="عرض" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="diameter" placeholder="طول" />
        <br /><br />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="major-axis" placeholder="نیم‌محور بزرگ" />
        <br /><br />
        <InputBox type="number" id="minor-axis" placeholder="نیم‌محور کوچک" />
    </div>,

    createMultipleInputBox(5),

    createMultipleInputBox(7),

    createMultipleInputBox(9),

    createMultipleInputBox(10),

    <div className="calc-inputs">
        <InputBox type="number" id="kite-a" placeholder="ضلع 1" />
        <br /><br />
        <InputBox type="number" id="kite-b" placeholder="ضلع 2" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="radius" placeholder="شعاع" />
        <br /><br />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="radius" placeholder="شعاع" />
        <br /><br />
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
        const width = Number(document.getElementById("width").value);

        if (
            document.getElementById("width").value === "" ||
            width <= 0
        ) {
            return [null, false];
        }

        return [width * 4, true];
    },

    () => calculatePolygonPerimeter(6),
    () => calculatePolygonPerimeter(8),
    () => calculatePolygonPerimeter(3),

    () => {
        const width = Number(document.getElementById("width").value);
        const height = Number(document.getElementById("height").value);

        if (
            document.getElementById("width").value === "" ||
            document.getElementById("height").value === "" ||
            width <= 0 ||
            height <= 0
        ) {
            return [null, false];
        }

        return [2 * width + 2 * height, true];
    },

    () => {
        const diameter = Number(document.getElementById("diameter").value);

        if (
            document.getElementById("diameter").value === "" ||
            diameter <= 0
        ) {
            return [null, false];
        }

        return [diameter * Math.PI, true];
    },

    () => {
        const major = Number(document.getElementById("major-axis").value);
        const minor = Number(document.getElementById("minor-axis").value);

        if (
            document.getElementById("major-axis").value === "" ||
            document.getElementById("minor-axis").value === "" ||
            major <= 0 ||
            minor <= 0
        ) {
            return [null, false];
        }

        return [
            Math.PI * (
                3 * (major + minor) -
                Math.sqrt((3 * major + minor) * (3 * minor + major))
            ),
            true
        ];
    },

    () => calculatePolygonPerimeter(5),
    () => calculatePolygonPerimeter(7),
    () => calculatePolygonPerimeter(9),
    () => calculatePolygonPerimeter(10),

    () => {
        const a = Number(document.getElementById("kite-a").value);
        const b = Number(document.getElementById("kite-b").value);

        if (
            document.getElementById("kite-a").value === "" ||
            document.getElementById("kite-b").value === "" ||
            a <= 0 ||
            b <= 0
        ) {
            return [null, false];
        }

        return [2 * a + 2 * b, true];
    },

    () => {
        const radius = Number(document.getElementById("radius").value);

        if (
            document.getElementById("radius").value === "" ||
            radius <= 0
        ) {
            return [null, false];
        }

        return [Math.PI * radius + 2 * radius, true];
    },

    () => {
        const radius = Number(document.getElementById("radius").value);

        if (
            document.getElementById("radius").value === "" ||
            radius <= 0
        ) {
            return [null, false];
        }

        return [Math.PI * radius / 2 + 2 * radius, true];
    }
];