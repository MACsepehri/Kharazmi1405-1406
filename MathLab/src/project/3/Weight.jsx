import { InputBox } from "../../assets/css/ProjectStyle";
import RenderProject from "../Render";

export default function Weight() {
    return (
        <RenderProject
            title="محاسبه وزن"
            input_obj={() => (
                <div>
                    <InputBox type="number" id="weight" placeholder="جرم (گرم)" />
                    <br /><br />
                    <InputBox type="number" id="g-fource" placeholder="شتاب جاذبه (مثلاً زمین: 10)" /><br />
                    <pre id="res"></pre>
                </div>
            )}
            action={() => {
                let weight = Number(document.getElementById('weight').value);
                let gfource = Number(document.getElementById('g-fource').value);
                document.getElementById('res').innerText = `${weight * gfource} نیوتن`;
            }}
            formula={
                ['وزن',`W = mg (m * g)
نکته: واحد m (mass) برابر نیوتن است.`]
            }
        />
    );
}