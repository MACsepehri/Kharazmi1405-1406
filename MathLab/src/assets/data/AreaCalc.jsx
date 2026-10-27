import { Flex } from "../css/Base";
import { InputBox } from "../css/ProjectStyle";

export const calculatePolygonArea = (sides) => {
    const input = document.getElementById("side");

    if (!input) {
        return [null, false];
    }

    const value = Number(input.value);

    if (input.value.trim() === "" || !Number.isFinite(value) || value <= 0) {
        return [null, false];
    }

    return [(sides * value * value) / (4 * Math.tan(Math.PI / sides)), true];
};

export const area_routes = [
    ['rectangle','مستطیل'],['trapezoid','ذوزنقه'],['square','مربع'],['hexagon','شش ضلعی'],
    ['octagon','هشت ضلعی'],['triangle','مثلث'],['parallelogram','متوازی اضلاع'],['circle','دایره'],
    ['ellipse','بیضی'],['pentagon','پنج ضلعی'],['heptagon','هفت ضلعی'],
    ['nonagon','نه ضلعی'],['decagon','ده ضلعی'],['kite','بادبادک'],
    ['semicircle','نیم‌دایره'],['quarter_circle','ربع دایره']
]

export const area_input_obj = [
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

        <InputBox type="number" id="height" placeholder="ارتفاع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="side" placeholder="ضلع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="side" placeholder="ضلع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="side" placeholder="ضلع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="base" placeholder="قاعده" />
        <br /><br />
        <InputBox type="number" id="height" placeholder="ارتفاع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="base" placeholder="قاعده" />
        <br /><br />
        <InputBox type="number" id="height" placeholder="ارتفاع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="radius" placeholder="شعاع" /><br /><br />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="major-axis" placeholder="نیم‌محور بزرگ" /><br /><br />
        <InputBox type="number" id="minor-axis" placeholder="نیم‌محور کوچک" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="side" placeholder="ضلع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="side" placeholder="ضلع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="side" placeholder="ضلع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="side" placeholder="ضلع" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="diagonal-1" placeholder="قطر 1" /><br /><br />
        <InputBox type="number" id="diagonal-2" placeholder="قطر 2" />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="radius" placeholder="شعاع" /><br /><br />
    </div>,

    <div className="calc-inputs">
        <InputBox type="number" id="radius" placeholder="شعاع" /><br /><br />
    </div>
];

export const area_calc = [
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

        return [width * length, true];
    },

    () => {
        const ids = ["small-base", "large-base", "height"];
        const values = ids.map(id => document.getElementById(id).value);

        if (values.some(value => value === "" || Number(value) <= 0)) {
            return [null, false];
        }

        return [(Number(values[0]) + Number(values[1])) * Number(values[2]) / 2, true];
    },

    () => {
        const side = Number(document.getElementById("side").value);

        if (
            document.getElementById("side").value === "" ||
            side <= 0
        ) {
            return [null, false];
        }

        return [side * side, true];
    },

    () => calculatePolygonArea(6),
    () => calculatePolygonArea(8),

    () => {
        const base = Number(document.getElementById("base").value);
        const height = Number(document.getElementById("height").value);

        if (
            document.getElementById("base").value === "" ||
            document.getElementById("height").value === "" ||
            base <= 0 ||
            height <= 0
        ) {
            return [null, false];
        }

        return [(base * height) / 2, true];
    },

    () => {
        const base = Number(document.getElementById("base").value);
        const height = Number(document.getElementById("height").value);

        if (
            document.getElementById("base").value === "" ||
            document.getElementById("height").value === "" ||
            base <= 0 ||
            height <= 0
        ) {
            return [null, false];
        }

        return [base * height, true];
    },

    () => {
        const radius = Number(document.getElementById("radius").value);

        if (
            document.getElementById("radius").value === "" ||
            radius <= 0
        ) {
            return [null, false];
        }

        return [Math.PI * radius * radius, true];
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

        return [Math.PI * major * minor, true];
    },

    () => calculatePolygonArea(5),
    () => calculatePolygonArea(7),
    () => calculatePolygonArea(9),
    () => calculatePolygonArea(10),

    () => {
        const diagonal1 = Number(document.getElementById("diagonal-1").value);
        const diagonal2 = Number(document.getElementById("diagonal-2").value);

        if (
            document.getElementById("diagonal-1").value === "" ||
            document.getElementById("diagonal-2").value === "" ||
            diagonal1 <= 0 ||
            diagonal2 <= 0
        ) {
            return [null, false];
        }

        return [(diagonal1 * diagonal2) / 2, true];
    },

    () => {
        const radius = Number(document.getElementById("radius").value);

        if (
            document.getElementById("radius").value === "" ||
            radius <= 0
        ) {
            return [null, false];
        }

        return [Math.PI * radius * radius / 2, true];
    },

    () => {
        const radius = Number(document.getElementById("radius").value);

        if (
            document.getElementById("radius").value === "" ||
            radius <= 0
        ) {
            return [null, false];
        }

        return [Math.PI * radius * radius / 4, true];
    }
];
