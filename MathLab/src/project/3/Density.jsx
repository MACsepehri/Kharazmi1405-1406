import { InputBox } from "../../assets/css/ProjectStyle";
import RenderProject from "../Render";

export default function Density() {
    return (
        <RenderProject
            title="محاسبه چگالی"
            input_obj={() => (
                <div>
                    <InputBox type="number" id="weight" placeholder="جرم" />
                    <br /><br />
                    <InputBox type="number" id="mass" placeholder="حجم" /><br />
                    <pre id="res" dir="ltr"></pre>
                </div>
            )}
            action={() => {
                let weight = Number(document.getElementById('weight').value);
                let mass = Number(document.getElementById('mass').value);
                let result = document.getElementById('res');
                if (
                    weight === "" ||
                    mass === "" ||
                    mass <= 0 ||
                    weight < 0
                ) {
                    result.innerText = "لطفاً مقادیر معتبر وارد کنید.";
                    return;
                }
                result.innerText = `${weight} / ${mass} = ${weight/mass}`;
            }}
            formula={
                ['چگالی','ρ = m/v']
            }
        />
    );
}