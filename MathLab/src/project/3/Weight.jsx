import { InputBox } from "../../assets/css/ProjectStyle";
import RenderProject from "../Render";

export default function Weight() {
    return (
        <RenderProject
            title="محاسبه وزن"
            input_obj={() => (
                <div>
                    <InputBox type="number" placeholder="جرم (گرم)" />
                    <br /><br />
                    <InputBox type="number" placeholder="شتاب جاذبه (مثلاً زمین: 10)" />
                    <br />
                </div>
            )}
            action={() => {}}
        />
    );
}