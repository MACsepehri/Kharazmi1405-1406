import { InputBox } from "../../assets/css/ProjectStyle";
import RenderProject from "../Render";

export default function Weight() {
    return (
        <RenderProject
            title="محاسبه وزن"
            input_obj={() => (
                <div>
                    <InputBox type="number" id="mass" placeholder="جرم (گرم)" />
                    <br /><br />
                    <InputBox type="number" id="g-fource" placeholder="شتاب جاذبه (مثلاً زمین: 9.81)" /><br />
                    <pre id="res"></pre>
                </div>
            )}
            action={() => {
                let mass = Number(document.getElementById('mass').value);
                let gfource = Number(document.getElementById('g-fource').value);
                let result = document.getElementById('res');
                if (
                    mass === "" ||
                    gfource === "" ||
                    mass <= 0 ||
                    gfource < 0
                ) {
                    result.innerText = "لطفاً مقادیر معتبر وارد کنید.";
                    return;
                }
                result.innerText = `${mass * gfource} نیوتن`;
            }}
            formula={
                ['وزن',`W = mg (m * g)
نکته: واحد m (mass) برابر نیوتن است.`]
            }
        />
    );
}