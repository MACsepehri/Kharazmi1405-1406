import { InputBox } from "../../assets/css/ProjectStyle";
import RenderProject from "../Render";

export default function Mass() {
    return (
        <RenderProject
            title="محاسبه جرم"
            input_obj={() => (
                <div>
                    <InputBox
                        type="number"
                        id="weight"
                        placeholder="وزن (نیوتن)"
                    />
                    <br /><br />
                    <InputBox
                        type="number"
                        id="g-force"
                        placeholder="شتاب جاذبه (مثلاً زمین: 9.81)"
                    />
                    <br />
                    <pre id="res"></pre>
                </div>
            )}
            action={() => {
                const weight = Number(document.getElementById("weight").value);
                const gravity = Number(document.getElementById("g-force").value);
                let result = document.getElementById('res');

                if (
                    weight === "" ||
                    gravity === "" ||
                    gravity <= 0 ||
                    weight < 0
                ) {
                    result.innerText = "لطفاً مقادیر معتبر وارد کنید.";
                    return;
                }

                result.innerText = `${(weight / gravity).toFixed(3)} کیلوگرم`;
            }}
            formula={[
                "جرم",
                "m = W ÷ g"
            ]}
        />
    );
}