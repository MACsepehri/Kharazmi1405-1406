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
                document.getElementById('res').innerText = `${weight} / ${mass} = ${weight/mass}`;
            }}
            formula={
                ['چگالی','ρ = m/v']
            }
        />
    );
}